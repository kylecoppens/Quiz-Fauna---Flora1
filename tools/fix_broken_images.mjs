#!/usr/bin/env node
/**
 * fix_broken_images.mjs
 *
 * Uses the Wikimedia Commons imageinfo API to get correct thumbnail URLs
 * for broken images, then updates species_data.js.
 *
 * Usage: node tools/fix_broken_images.mjs [--dry]
 */

import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../js/data/species_data.js');
const DRY_RUN = process.argv.includes('--dry');

// --- The broken URL list from browser test ---
const BROKEN_LIST = [
  { id: 'gen_accipiter_nisus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Eurasian_Sparrowhawk_by_Steve_Ward.jpg/640px-Eurasian_Sparrowhawk_by_Steve_Ward.jpg' },
  { id: 'gen_accipiter_nisus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Eurasian_Sparrowhawk_female.jpg/640px-Eurasian_Sparrowhawk_female.jpg' },
  { id: 'i22', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Acherontia_atropos.jpg/640px-Acherontia_atropos.jpg' },
  { id: 'i22', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Death%27s_Head_Hawk_Moth_%28Acherontia_atropos%29.jpg/640px-Death%27s_Head_Hawk_Moth_%28Acherontia_atropos%29.jpg' },
  { id: 'i7', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Aglais_io_top.jpg/640px-Aglais_io_top.jpg' },
  { id: 'i7', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Aglais_io_European_Peacock_Butterfly_underside.jpg/640px-Aglais_io_European_Peacock_Butterfly_underside.jpg' },
  { id: 'b8', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Alcedo_atthis_-_Riserve_naturali_della_Lombardia.jpg/640px-Alcedo_atthis_-_Riserve_naturali_della_Lombardia.jpg' },
  { id: 'b8', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Alcedo_atthis_2_(Bohu%C5%A1_%C4%8C%C3%AD%C4%8Del).jpg/640px-Alcedo_atthis_2_(Bohu%C5%A1_%C4%8C%C3%AD%C4%8Del).jpg' },
  { id: 'f1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/640px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg' },
  { id: 'f1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Amanita_muscaria_LC0119.jpg/640px-Amanita_muscaria_LC0119.jpg' },
  { id: 'gen_aythya_fuligula', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Tufted_Duck.jpg/640px-Tufted_Duck.jpg' },
  { id: 'f2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Boletus_edulis_IT.jpg/640px-Boletus_edulis_IT.jpg' },
  { id: 'f2', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Boletus_edulis_2.JPG/640px-Boletus_edulis_2.JPG' },
  { id: 'b20', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Buteo_buteo_-_01.jpg/640px-Buteo_buteo_-_01.jpg' },
  { id: 'b20', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Buteo_buteo_in_flight.jpg/640px-Buteo_buteo_in_flight.jpg' },
  { id: 'fu10', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cantharellus_cibarius_2009_G1.jpg/640px-Cantharellus_cibarius_2009_G1.jpg' },
  { id: 'fu10', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kantarellen.jpg/640px-Kantarellen.jpg' },
  { id: 'b1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Erithacus_rubecula_with_cocked_head.jpg/640px-Erithacus_rubecula_with_cocked_head.jpg' },
  { id: 'b1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/EuropeanRobin.jpg/640px-EuropeanRobin.jpg' },
  { id: 'fl5', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hallerbos_in_bloom_2013.jpg/640px-Hallerbos_in_bloom_2013.jpg' },
  { id: 'fl5', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hyacinthoides_non-scripta_%28Hallerbos%29.jpg/640px-Hyacinthoides_non-scripta_%28Hallerbos%29.jpg' },
  { id: 'i22_luc', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lucanus_cervus_male_top_down.jpg/640px-Lucanus_cervus_male_top_down.jpg' },
  { id: 'i22_luc', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/LucanuscervusFemale.jpg/640px-LucanuscervusFemale.jpg' },
  { id: 't1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Quercus_robur_-_summer.jpg/640px-Quercus_robur_-_summer.jpg' },
  { id: 't1', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Quercus_robur_acorn_and_leaves.jpg/640px-Quercus_robur_acorn_and_leaves.jpg' },
  { id: 'f11', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Eekhoorntje.jpg/640px-Eekhoorntje.jpg' },
  { id: 'f11', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sciurus_vulgaris_red_squirrel_in_autumn_tree.jpg/640px-Sciurus_vulgaris_red_squirrel_in_autumn_tree.jpg' },
  { id: 'i6_vanessa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Vanessa_atalanta_Sottomarina.jpg/640px-Vanessa_atalanta_Sottomarina.jpg' },
  { id: 'i6_vanessa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Vanessa_atalanta_underside.JPG/640px-Vanessa_atalanta_underside.JPG' },
  { id: 'f1_vulpes', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Vulpes_vulpes_-_British_Wildlife_Centre-3.jpg/640px-Vulpes_vulpes_-_British_Wildlife_Centre-3.jpg' },
  { id: 'f1_vulpes', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat_November_2010-1a.jpg/640px-Cat_November_2010-1a.jpg' },
  { id: 'f8', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/640px-24701-nature-natural-beauty.jpg' },
  { id: 'f8', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Erinaceus_europaeus_LC0119.jpg/640px-Erinaceus_europaeus_LC0119.jpg' },
  { id: 't_pinus_sylvestris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pinus_sylvestris_Lozere.jpg/640px-Pinus_sylvestris_Lozere.jpg' },
  { id: 't_pinus_sylvestris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinus_sylvestris_bark.jpg/640px-Pinus_sylvestris_bark.jpg' },
  { id: 't_larix_decidua', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Larix_decidua_2.jpg/640px-Larix_decidua_2.jpg' },
  { id: 't_larix_decidua', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Larix_decidua_autumn.jpg/640px-Larix_decidua_autumn.jpg' },
  { id: 't_taxus_baccata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Taxus_baccata_foliage.jpg/640px-Taxus_baccata_foliage.jpg' },
  { id: 't_taxus_baccata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Taxus_baccata_berries.jpg/640px-Taxus_baccata_berries.jpg' },
  { id: 't_tilia_cordata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tilia_cordata_003.jpg/640px-Tilia_cordata_003.jpg' },
  { id: 't_tilia_cordata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tilia_cordata_flowers.jpg/640px-Tilia_cordata_flowers.jpg' },
  { id: 't_carpinus_betulus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Carpinus_betulus3.jpg/640px-Carpinus_betulus3.jpg' },
  { id: 't_carpinus_betulus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Carpinus_betulus_catkins.jpg/640px-Carpinus_betulus_catkins.jpg' },
  { id: 't_prunus_avium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Prunus_avium_Prague_2016_1.jpg/640px-Prunus_avium_Prague_2016_1.jpg' },
  { id: 't_prunus_avium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Prunus_avium_flowers.jpg/640px-Prunus_avium_flowers.jpg' },
  { id: 'fl_convallaria_majalis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Convallaria_majalis_Maipo.jpg/640px-Convallaria_majalis_Maipo.jpg' },
  { id: 'fl_digitalis_purpurea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Digitalis_purpurea_Trinquetaille.jpg/640px-Digitalis_purpurea_Trinquetaille.jpg' },
  { id: 'fl_lythrum_salicaria', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lythrum_salicaria_-_purple_loosestrife.jpg/640px-Lythrum_salicaria_-_purple_loosestrife.jpg' },
  { id: 'fl_hypericum_perforatum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hypericum_perforatum_a.jpg/640px-Hypericum_perforatum_a.jpg' },
  { id: 'fl_epilobium_angustifolium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/20140714Epilobium_angustifolium1.jpg/640px-20140714Epilobium_angustifolium1.jpg' },
  { id: 'fl_geranium_robertianum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Geranium_robertianum_sl3.jpg/640px-Geranium_robertianum_sl3.jpg' },
  { id: 'b_cygnus_olor', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cygnus_olor_on_water.jpg/640px-Cygnus_olor_on_water.jpg' },
  { id: 'b_cygnus_olor', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cygnus_olor_in_flight.jpg/640px-Cygnus_olor_in_flight.jpg' },
  { id: 'i_limenitis_camilla', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_Admiral_Butterfly_%28Limenitis_camilla%29_%283%29.jpg/640px-White_Admiral_Butterfly_%28Limenitis_camilla%29_%283%29.jpg' },
  { id: 't_quercus_petraea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Quercus_petraea_-_Laub_01.jpg/640px-Quercus_petraea_-_Laub_01.jpg' },
  { id: 'b_phoenicurus_ochruros', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Phoenicurus_ochruros_male.jpg/640px-Phoenicurus_ochruros_male.jpg' },
  { id: 'm_eptesicus_serotinus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Eptesicus_serotinus_01.jpg/640px-Eptesicus_serotinus_01.jpg' },
  { id: 'f_natrix_natrix', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Natrix_natrix_01.jpg/640px-Natrix_natrix_01.jpg' },
  { id: 'f_natrix_natrix', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Natrix_natrix_collaris_LC0079.jpg/640px-Natrix_natrix_collaris_LC0079.jpg' },
  { id: 'f_vipera_berus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Vipera_berus_LC0119.jpg/640px-Vipera_berus_LC0119.jpg' },
  { id: 'f_vipera_berus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Vipera_berus_berus_male.jpg/640px-Vipera_berus_berus_male.jpg' },
  { id: 'f_lacerta_agilis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lacerta_agilis_%28male%29.jpg/640px-Lacerta_agilis_%28male%29.jpg' },
  { id: 'f_lacerta_agilis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lacerta_agilis_female_dsc00890.jpg/640px-Lacerta_agilis_female_dsc00890.jpg' },
  { id: 'f_salamandra_salamandra', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Salamandra_salamandra_nb.jpg/640px-Salamandra_salamandra_nb.jpg' },
  { id: 'f_salamandra_salamandra', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Salamandra_salamandra_in_rain.jpg/640px-Salamandra_salamandra_in_rain.jpg' },
  { id: 'f_rana_temporaria', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rana_temporaria_LC0073.jpg/640px-Rana_temporaria_LC0073.jpg' },
  { id: 'f_rana_temporaria', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Rana_temporaria_mating.jpg/640px-Rana_temporaria_mating.jpg' },
  { id: 'b_corvus_corone', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Corvus_corone_Luc_Viatour.jpg/640px-Corvus_corone_Luc_Viatour.jpg' },
  { id: 'b_corvus_corone', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Corvus_corone_1_%28Marek_Szczepanek%29.jpg/640px-Corvus_corone_1_%28Marek_Szczepanek%29.jpg' },
  { id: 'b_apus_apus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Apus_apus_01.jpg/640px-Apus_apus_01.jpg' },
  { id: 'b_apus_apus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Apus_apus_flock.jpg/640px-Apus_apus_flock.jpg' },
  { id: 'b_turdus_philomelos', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Song_thrush_2.jpg/640px-Song_thrush_2.jpg' },
  { id: 'b_dendrocopos_major', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dendrocopos_major_-_01.jpg/640px-Dendrocopos_major_-_01.jpg' },
  { id: 'b_dendrocopos_major', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dendrocopos_major_male_2.jpg/640px-Dendrocopos_major_male_2.jpg' },
  { id: 'b_sitta_europaea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sitta-europaea-004.jpg/640px-Sitta-europaea-004.jpg' },
  { id: 'fl_cardamine_pratensis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cardamine_pratensis.jpg/640px-Cardamine_pratensis.jpg' },
  { id: 'fu_russula_cyanoxantha', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Russula_cyanoxantha_LC0083.jpg/640px-Russula_cyanoxantha_LC0083.jpg' },
  { id: 'fu_hypholoma_fasciculare', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hypholoma_fasciculare_LC0014.jpg/640px-Hypholoma_fasciculare_LC0014.jpg' },
  { id: 'i_papilio_machaon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Papilio_machaon_04.jpg/640px-Papilio_machaon_04.jpg' },
  { id: 'i_papilio_machaon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Papilio_machaon_caterpillar.jpg/640px-Papilio_machaon_caterpillar.jpg' },
  { id: 'i_vanessa_cardui', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vanessa_cardui_Luc_Viatour.jpg/640px-Vanessa_cardui_Luc_Viatour.jpg' },
  { id: 'a_cichorium_intybus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cichorium_intybus_003.JPG/640px-Cichorium_intybus_003.JPG' },
  { id: 'a_cichorium_endivia', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Endives_chicons.jpg/640px-Endives_chicons.jpg' },
  { id: 'a_linum_usitatissimum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg/640px-Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg' },
  { id: 'a_linum_usitatissimum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Linum_usitatissimum_field.jpg/640px-Linum_usitatissimum_field.jpg' },
  { id: 'a_triticum_aestivum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wheat_field_in_Bia%C5%82ka.jpg/640px-Wheat_field_in_Bia%C5%82ka.jpg' },
  { id: 'bird_meadow_pipit', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Anthus_pratensis%28Meadow_Pipit%29.jpg/640px-Anthus_pratensis%28Meadow_Pipit%29.jpg' },
  { id: 'bird_lapwing', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vanellus_vanellus.jpg/640px-Vanellus_vanellus.jpg' },
  { id: 'bel_symphytum_officinale', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Symphytum_officinale_%28var_purpureum%29.jpg/640px-Symphytum_officinale_%28var_purpureum%29.jpg' },
  { id: 'bel_symphytum_officinale', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Symphytum_officinale_01.jpg/640px-Symphytum_officinale_01.jpg' },
  { id: 'bel_galium_aparine', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Galium_aparine_-_Goosegrass_-_geograph.org.uk_-_1028535.jpg/640px-Galium_aparine_-_Goosegrass_-_geograph.org.uk_-_1028535.jpg' },
  { id: 'bel_centaurea_jacea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Centaurea_jacea_%28knapweed%29.jpg/640px-Centaurea_jacea_%28knapweed%29.jpg' },
  { id: 'bel_typha_latifolia', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Typha_latifolia_UK.jpg/640px-Typha_latifolia_UK.jpg' },
  { id: 'bel_typha_latifolia', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Typha_latifolia_001.jpg/640px-Typha_latifolia_001.jpg' },
  { id: 'bel_sparganium_erectum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Sparganium_erectum_sl3.jpg/640px-Sparganium_erectum_sl3.jpg' },
  { id: 'bel_elymus_repens', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Elymus_repens_01.jpg/640px-Elymus_repens_01.jpg' },
  { id: 'bel_phragmites_australis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Phragmites_australis_Luc_Viatour.jpg/640px-Phragmites_australis_Luc_Viatour.jpg' },
  { id: 'bel_phragmites_australis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Phragmites_australis_2.jpg/640px-Phragmites_australis_2.jpg' },
  { id: 'bel_allium_oleraceum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Allium_oleraceum.JPG/640px-Allium_oleraceum.JPG' },
  { id: 'bel_tragopogon_pratensis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tragopogon_pratensis1.JPG/640px-Tragopogon_pratensis1.JPG' },
  { id: 'bel_asparagus_officinalis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Asparagus_officinalis_shoots.jpg/640px-Asparagus_officinalis_shoots.jpg' },
  { id: 'bel_asparagus_officinalis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Asparagus_plant.jpg/640px-Asparagus_plant.jpg' },
  { id: 'bel_juniperus_communis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Juniperus_communis_-_Hautes_Fagnes_2.jpg/640px-Juniperus_communis_-_Hautes_Fagnes_2.jpg' },
  { id: 'bel_juniperus_communis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Juniperus_communis_berries_and_needles.jpg/640px-Juniperus_communis_berries_and_needles.jpg' },
  { id: 'bel_pinus_nigra', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pinus_nigra_Luc_Viatour.jpg/640px-Pinus_nigra_Luc_Viatour.jpg' },
  { id: 'bel_valerianella_locusta', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Valerianella_locusta_ENBLA01.JPG/640px-Valerianella_locusta_ENBLA01.JPG' },
  { id: 'bel_ajuga_reptans', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ajuga_reptans_flowering_1.JPG/640px-Ajuga_reptans_flowering_1.JPG' },
  { id: 'bel_potamogeton_crispus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Potamogeton_crispus.JPG/640px-Potamogeton_crispus.JPG' },
  { id: 'bel_sedum_album', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sedum_album_flowering.jpg/640px-Sedum_album_flowering.jpg' },
  { id: 'bel_pseudotsuga_menziesii', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pseudotsuga_menziesii_Foliage.jpg/640px-Pseudotsuga_menziesii_Foliage.jpg' },
  { id: 'bel_pseudotsuga_menziesii', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Pseudotsuga_menziesii_cones.jpg/640px-Pseudotsuga_menziesii_cones.jpg' },
  { id: 'bel_equisetum_arvense', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Equisetum_arvense_frischer_Schachtelhalm.jpg/640px-Equisetum_arvense_frischer_Schachtelhalm.jpg' },
  { id: 'bel_equisetum_arvense', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Equisetum_arvense_fertile.jpg/640px-Equisetum_arvense_fertile.jpg' },
  { id: 'bel_oxalis_acetosella', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Oxalis_acetosella_2019_G1.jpg/640px-Oxalis_acetosella_2019_G1.jpg' },
  { id: 'bel_ulmus_glabra', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ulmus_glabra_sl11.jpg/640px-Ulmus_glabra_sl11.jpg' },
  { id: 'bel_ulmus_glabra', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ulmus_glabra_leaves.jpg/640px-Ulmus_glabra_leaves.jpg' },
  { id: 'bel_campanula_patula', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Campanula_patula_sl6.jpg/640px-Campanula_patula_sl6.jpg' },
  { id: 'bel_portulaca_oleracea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Portulaca_oleracea_close_up.jpg/640px-Portulaca_oleracea_close_up.jpg' },
  { id: 'bel_berberis_vulgaris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Berberis_vulgaris_-_fruit.jpg/640px-Berberis_vulgaris_-_fruit.jpg' },
  { id: 'bel_berberis_vulgaris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Berberis_vulgaris_-_flowers.jpg/640px-Berberis_vulgaris_-_flowers.jpg' },
  { id: 'bel_veronica_teucrium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Veronica_teucrium_Sturm61.jpg/640px-Veronica_teucrium_Sturm61.jpg' },
  { id: 'bel_veronica_beccabunga', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Veronica_beccabunga_1.jpg/640px-Veronica_beccabunga_1.jpg' },
  { id: 'bel_sorbus_aria', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sorbus_aria2.jpg/640px-Sorbus_aria2.jpg' },
  { id: 'bel_sorbus_aria', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sorbus_aria_-_leaves.jpg/640px-Sorbus_aria_-_leaves.jpg' },
  { id: 'bel_prunus_mahaleb', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Prunus_mahaleb_kz02.jpg/640px-Prunus_mahaleb_kz02.jpg' },
  { id: 'bel_prunus_padus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prunus_padus_in_April.jpg/640px-Prunus_padus_in_April.jpg' },
  { id: 'bel_cornus_sanguinea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cornus_sanguinea_RF.jpg/640px-Cornus_sanguinea_RF.jpg' },
  { id: 'bel_cornus_mas', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cornus_mas_kz04.jpg/640px-Cornus_mas_kz04.jpg' },
  { id: 'bel_melilotus_officinalis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Melilotus_officinalis_kz16.jpg/640px-Melilotus_officinalis_kz16.jpg' },
  { id: 'bel_impatiens_noli_tangere', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Impatiens_noli-tangere_kz10.jpg/640px-Impatiens_noli-tangere_kz10.jpg' },
  { id: 'bel_vaccinium_myrtillus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vaccinium_myrtillus_sl10.jpg/640px-Vaccinium_myrtillus_sl10.jpg' },
  { id: 'bel_stellaria_media', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/%28Stellaria_media%29_Chickweed_plant.jpg/640px-%28Stellaria_media%29_Chickweed_plant.jpg' },
  { id: 'bel_thymus_serpyllum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Thymus_serpyllum_kz02.jpg/640px-Thymus_serpyllum_kz02.jpg' },
  { id: 'bel_hylotelephium_telephium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%28MHNT%29_Hylotelephium_telephium_-_flowers.jpg/640px-%28MHNT%29_Hylotelephium_telephium_-_flowers.jpg' },
  { id: 'bel_vaccinium_vitis_idaea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Vaccinium_vitis-idaea_RF.jpg/640px-Vaccinium_vitis-idaea_RF.jpg' },
  { id: 'bel_trifolium_pratense', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Trifolium_pratense_-_Keila.jpg/640px-Trifolium_pratense_-_Keila.jpg' },
  { id: 'bel_polygonum_aviculare', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Polygonum_aviculare_4.JPG/640px-Polygonum_aviculare_4.JPG' },
  { id: 'bel_medicago_sativa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Alfalfa_%28Medicago_sativa%29_I.jpg/640px-Alfalfa_%28Medicago_sativa%29_I.jpg' },
  { id: 'bel_lotus_corniculatus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lotus_corniculatus_RF.jpg/640px-Lotus_corniculatus_RF.jpg' },
  { id: 'bel_lysimachia_vulgaris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lysimachia_vulgaris_RF.jpg/640px-Lysimachia_vulgaris_RF.jpg' },
  { id: 'bel_impatiens_glandulifera', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reuzenbalsemien_%28Impatiens_glandulifera%29_01.JPG/640px-Reuzenbalsemien_%28Impatiens_glandulifera%29_01.JPG' },
  { id: 'bel_prunus_spinosa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Prunus_spinosa_Hedge_in_Flower.jpg/640px-Prunus_spinosa_Hedge_in_Flower.jpg' },
  { id: 'bel_mespilus_germanica', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mespilus_germanica_2024-09-24-1.jpg/640px-Mespilus_germanica_2024-09-24-1.jpg' },
  { id: 'bel_inula_helenium', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Inula_helenium_kz04.jpg/640px-Inula_helenium_kz04.jpg' },
  { id: 'bel_prunella_vulgaris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Prunella_vulgaris_kz14.jpg/640px-Prunella_vulgaris_kz14.jpg' },
  { id: 'bel_pulmonaria_officinalis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pulmonaria_officinalis_TK.jpg/640px-Pulmonaria_officinalis_TK.jpg' },
  { id: 'bel_armoracia_rusticana', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Armoracia_rusticana_kz04.jpg/640px-Armoracia_rusticana_kz04.jpg' },
  { id: 'bel_oenothera_biennis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg/640px-Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg' },
  { id: 'bel_mentha_spicata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mint_leaves_%28Mentha_spicata%29.jpg/640px-Mint_leaves_%28Mentha_spicata%29.jpg' },
  { id: 'bel_ononis_spinosa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ononis_spinosa_%288289068860%29.jpg/640px-Ononis_spinosa_%288289068860%29.jpg' },
  { id: 'bel_myosotis_arvensis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Myosotis_arvensis_kz05.jpg/640px-Myosotis_arvensis_kz05.jpg' },
  { id: 'bel_verbascum_thapsus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Koningskaars_R01.jpg/640px-Koningskaars_R01.jpg' },
  { id: 'bel_viola_tricolor', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Viola_tricolor_kz05.jpg/640px-Viola_tricolor_kz05.jpg' },
  { id: 'bel_erigeron_canadensis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Erigeron_canadensis_from_Britain_by_D_Merrick_14.jpg/640px-Erigeron_canadensis_from_Britain_by_D_Merrick_14.jpg' },
  { id: 'bel_persicaria_hydropiper', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Persicaria_hydropiper_kz06.jpg/640px-Persicaria_hydropiper_kz06.jpg' },
  { id: 'bel_tripolium_pannonicum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tripolium_pannonicum_RF.jpg/640px-Tripolium_pannonicum_RF.jpg' },
  { id: 'bel_solidago_canadensis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Solidago_canadensis_2014_G01.jpg/640px-Solidago_canadensis_2014_G01.jpg' },
  { id: 'bel_solidago_gigantea', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Solidago_gigantea_kz01.jpg/640px-Solidago_gigantea_kz01.jpg' },
  { id: 'bel_hippophae_rhamnoides', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hippophae_rhamnoides-01_%28xndr%29.JPG/640px-Hippophae_rhamnoides-01_%28xndr%29.JPG' },
  { id: 'bel_reynoutria_japonica', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Reynoutria_japonica_flower_%2812%29.jpg/640px-Reynoutria_japonica_flower_%2812%29.jpg' },
  { id: 'bel_galinsoga_quadriradiata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Galinsoga_quadriradiata%2C_MX.jpg/640px-Galinsoga_quadriradiata%2C_MX.jpg' },
  { id: 'bel_physalis_alkekengi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Physalis_alkekengi_kz05.jpg/640px-Physalis_alkekengi_kz05.jpg' },
  { id: 'bel_lamiastrum_galeobdolon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamiastrum_galeobdolon_kz01.jpg/640px-Lamiastrum_galeobdolon_kz01.jpg' },
  { id: 'bel_myosoton_aquaticum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Myosoton_aquaticum_kz06.jpg/640px-Myosoton_aquaticum_kz06.jpg' },
  { id: 'bel_salvia_pratensis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Salvia_pratensis_RF.jpg/640px-Salvia_pratensis_RF.jpg' },
  { id: 'bel_galeopsis_tetrahit', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Galeopsis_tetrahit_tetrahit_118453171.jpg/640px-Galeopsis_tetrahit_tetrahit_118453171.jpg' },
  { id: 'bel_helianthus_tuberosus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Helianthus_tuberosus_controluce.jpg/640px-Helianthus_tuberosus_controluce.jpg' },
  { id: 'bel_bistorta_officinalis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bistorta_officinalis_01.JPG/640px-Bistorta_officinalis_01.JPG' },
  { id: 'bel_amaranthus_retroflexus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Amaranthus_retroflexus_kz09.jpg/640px-Amaranthus_retroflexus_kz09.jpg' },
  { id: 'bel_stachys_palustris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Stachys_palustris_-_inflorescence.jpg/640px-Stachys_palustris_-_inflorescence.jpg' },
  { id: 'bel_phyteuma_spicatum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Witte_rapunzel_%28Phyteuma_spicatum%29._Hortus_Haren.JPG/640px-Witte_rapunzel_%28Phyteuma_spicatum%29._Hortus_Haren.JPG' },
  { id: 'bel_tilia_platyphyllos', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tilia_platyphyllos_kz01.jpg/640px-Tilia_platyphyllos_kz01.jpg' },
  { id: 'bel_origanum_vulgare', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Origanum_vulgare_inflorescence_-_Keila.jpg/640px-Origanum_vulgare_inflorescence_-_Keila.jpg' },
  { id: 'bel_lysimachia_nummularia', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lysimachia_nummularia20140609_48.jpg/640px-Lysimachia_nummularia20140609_48.jpg' },
  { id: 'bel_plantago_major', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Plantago_major_RF.jpg/640px-Plantago_major_RF.jpg' },
  { id: 'bel_stachys_sylvatica', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Stachys_sylvatica_RF.jpg/640px-Stachys_sylvatica_RF.jpg' },
  { id: 'bel_betonica_officinalis', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Betonica_officinalis_kz.jpg/640px-Betonica_officinalis_kz.jpg' },
  { id: 'bel_fagopyrum_esculentum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Fagopyrum_esculentum_kz12.jpg/640px-Fagopyrum_esculentum_kz12.jpg' },
  { id: 'bel_salvia_glutinosa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Salvia_glutinosa_3_RF.jpg/640px-Salvia_glutinosa_3_RF.jpg' },
  { id: 'bel_rumex_acetosella', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Rumex_acetosella_RF.jpg/640px-Rumex_acetosella_RF.jpg' },
  { id: 'bel_rumex_acetosa', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rumex_acetosa_kz14.jpg/640px-Rumex_acetosa_kz14.jpg' },
  { id: 'bel_claytonia_perfoliata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Claytonia_perfoliata_2_RF.jpg/640px-Claytonia_perfoliata_2_RF.jpg' },
  { id: 'bel_lemna_minor', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Eendekroos_dicht_bijeen.JPG/640px-Eendekroos_dicht_bijeen.JPG' },
  { id: 'bel_tussilago_farfara', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Tussilago_farfara_4_RF.jpg/640px-Tussilago_farfara_4_RF.jpg' },
  { id: 'bel_ficaria_verna', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficaria_verna_2_RF.jpg/640px-Ficaria_verna_2_RF.jpg' },
  { id: 'bel_malva_sylvestris', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Malva_sylvestris_3_RF.jpg/640px-Malva_sylvestris_3_RF.jpg' },
  { id: 'bel_chenopodium_bonus_henricus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Blitum_bonus-henricus.jpg/640px-Blitum_bonus-henricus.jpg' },
  { id: 'bel_chenopodium_album', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chenopodium_album_kz06.jpg/640px-Chenopodium_album_kz06.jpg' },
];

// Extract filename from a broken URL
function extractFilename(url) {
  // Format: .../thumb/X/XX/Filename.ext/640px-Filename.ext
  const decoded = decodeURIComponent(url);
  const parts = decoded.split('/');
  // The second-to-last part is the filename (before 640px-...)
  return parts[parts.length - 2];
}

// Query Commons API for correct thumb URLs (batch of up to 50)
async function getCorrectThumbUrls(filenames) {
  const titles = filenames.map(f => `File:${f}`).join('|');
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&iiurlwidth=640&titles=${encodeURIComponent(titles)}&format=json&origin=*`;

  const resp = await fetch(apiUrl, {
    headers: { 'User-Agent': 'BelgianFloraQuiz/1.0 (educational; image fix script)' }
  });

  if (!resp.ok) throw new Error(`Commons API error: ${resp.status}`);
  const data = await resp.json();

  const result = {};
  for (const page of Object.values(data.query.pages)) {
    if (page.missing !== undefined) continue;
    const title = page.title.replace(/^File:/, '');
    if (page.imageinfo && page.imageinfo[0] && page.imageinfo[0].thumburl) {
      result[title] = page.imageinfo[0].thumburl;
    }
  }
  return result;
}

// Sleep helper
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log(`Processing ${BROKEN_LIST.length} broken URL entries...\n`);

  // Get unique filenames
  const uniqueFilenames = [...new Set(BROKEN_LIST.map(b => extractFilename(b.url)))];
  console.log(`Unique filenames to look up: ${uniqueFilenames.length}`);

  // Query Commons API in batches of 40
  const urlMap = {}; // filename -> correct thumb URL
  const notFound = [];

  for (let i = 0; i < uniqueFilenames.length; i += 40) {
    const batch = uniqueFilenames.slice(i, i + 40);
    console.log(`  Querying Commons API batch ${Math.floor(i/40)+1}/${Math.ceil(uniqueFilenames.length/40)} (${batch.length} files)...`);
    try {
      const results = await getCorrectThumbUrls(batch);
      Object.assign(urlMap, results);
      const missing = batch.filter(f => !results[f]);
      if (missing.length > 0) {
        console.log(`    ⚠ Not found on Commons: ${missing.join(', ')}`);
        notFound.push(...missing);
      }
    } catch (e) {
      console.error(`    ✗ API error: ${e.message}`);
    }
    if (i + 40 < uniqueFilenames.length) await sleep(500);
  }

  console.log(`\nFound correct URLs for ${Object.keys(urlMap).length}/${uniqueFilenames.length} files`);
  console.log(`Not found: ${notFound.length} files\n`);

  // Build replacement map: old URL -> new URL
  const replacements = [];
  for (const item of BROKEN_LIST) {
    const filename = extractFilename(item.url);
    const newUrl = urlMap[filename];
    if (newUrl && newUrl !== item.url) {
      replacements.push({ id: item.id, oldUrl: item.url, newUrl });
    } else if (!newUrl) {
      console.log(`  ⚠ No replacement found for ${item.id}: ${filename}`);
    }
  }

  // Remove duplicates (same oldUrl may appear multiple times from images: [])
  const uniqueReplacements = [];
  const seenOld = new Set();
  for (const r of replacements) {
    if (!seenOld.has(r.oldUrl)) {
      seenOld.add(r.oldUrl);
      uniqueReplacements.push(r);
    }
  }

  console.log(`\nApplying ${uniqueReplacements.length} URL replacements...`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] Would apply these replacements:');
    for (const r of uniqueReplacements) {
      console.log(`  ${r.id}:`);
      console.log(`    OLD: ${r.oldUrl}`);
      console.log(`    NEW: ${r.newUrl}`);
    }
    return;
  }

  // Apply replacements to species_data.js
  let content = fs.readFileSync(DATA_FILE, 'utf-8');
  let fixCount = 0;
  let noChangeCount = 0;

  for (const r of uniqueReplacements) {
    if (content.includes(r.oldUrl)) {
      content = content.split(r.oldUrl).join(r.newUrl);
      fixCount++;
    } else {
      console.log(`  ⚠ URL not found in file: ${r.oldUrl.substring(0, 80)}...`);
      noChangeCount++;
    }
  }

  fs.writeFileSync(DATA_FILE, content, 'utf-8');
  console.log(`\n✓ Fixed ${fixCount} URLs in species_data.js`);
  if (noChangeCount > 0) console.log(`  (${noChangeCount} replacements had no match in file)`);
  console.log(`\nDone! Please reload the app to verify.`);
}

main().catch(console.error);
