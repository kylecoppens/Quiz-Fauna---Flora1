#!/usr/bin/env node
/**
 * apply_url_fixes.mjs
 * Applies verified URL replacements from Commons API to species_data.js
 */
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../js/data/species_data.js');

// Fix map: old broken URL -> correct URL from Commons API
const FIX_MAP = {
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Eurasian_Sparrowhawk_by_Steve_Ward.jpg/640px-Eurasian_Sparrowhawk_by_Steve_Ward.jpg":"https://upload.wikimedia.org/wikipedia/commons/8/8f/Eurasian_Sparrowhawk_by_Steve_Ward.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Eurasian_Sparrowhawk_female.jpg/640px-Eurasian_Sparrowhawk_female.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Eurasian_Sparrowhawk_female.jpg/960px-Eurasian_Sparrowhawk_female.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Acherontia_atropos.jpg/640px-Acherontia_atropos.jpg":"https://upload.wikimedia.org/wikipedia/commons/5/59/Acherontia_atropos.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Alcedo_atthis_2_(Bohuš_Číčel).jpg/640px-Alcedo_atthis_2_(Bohuš_Číčel).jpg":"https://upload.wikimedia.org/wikipedia/commons/a/a6/Alcedo_atthis_2_%28Bohu%C5%A1_%C4%8C%C3%AD%C4%8Del%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/640px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/960px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Tufted_Duck.jpg/640px-Tufted_Duck.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tufted_Duck.jpg/960px-Tufted_Duck.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Boletus_edulis_IT.jpg/640px-Boletus_edulis_IT.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Boletus_edulis_IT.jpg/960px-Boletus_edulis_IT.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Boletus_edulis_2.JPG/640px-Boletus_edulis_2.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Boletus_edulis_2.JPG/960px-Boletus_edulis_2.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Buteo_buteo_-_01.jpg/640px-Buteo_buteo_-_01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Buteo_buteo_-_01.jpg/960px-Buteo_buteo_-_01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cantharellus_cibarius_2009_G1.jpg/640px-Cantharellus_cibarius_2009_G1.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cantharellus_cibarius_2009_G1.jpg/960px-Cantharellus_cibarius_2009_G1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Erithacus_rubecula_with_cocked_head.jpg/640px-Erithacus_rubecula_with_cocked_head.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Erithacus_rubecula_with_cocked_head.jpg/960px-Erithacus_rubecula_with_cocked_head.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat_November_2010-1a.jpg/640px-Cat_November_2010-1a.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Erinaceus_europaeus_LC0119.jpg/640px-Erinaceus_europaeus_LC0119.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Erinaceus_europaeus_LC0119.jpg/960px-Erinaceus_europaeus_LC0119.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinus_sylvestris_bark.jpg/640px-Pinus_sylvestris_bark.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Pinus_sylvestris_bark.jpg/960px-Pinus_sylvestris_bark.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tilia_cordata_flowers.jpg/640px-Tilia_cordata_flowers.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tilia_cordata_flowers.jpg/960px-Tilia_cordata_flowers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Prunus_avium_flowers.jpg/640px-Prunus_avium_flowers.jpg":"https://upload.wikimedia.org/wikipedia/commons/0/09/Prunus_avium_flowers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Phoenicurus_ochruros_male.jpg/640px-Phoenicurus_ochruros_male.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Phoenicurus_ochruros_male.jpg/960px-Phoenicurus_ochruros_male.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Corvus_corone_1_%28Marek_Szczepanek%29.jpg/640px-Corvus_corone_1_%28Marek_Szczepanek%29.jpg":"https://upload.wikimedia.org/wikipedia/commons/2/2c/Corvus_corone_1_%28Marek_Szczepanek%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Apus_apus_01.jpg/640px-Apus_apus_01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Apus_apus_01.jpg/960px-Apus_apus_01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cardamine_pratensis.jpg/640px-Cardamine_pratensis.jpg":"https://upload.wikimedia.org/wikipedia/commons/c/cf/Cardamine_pratensis.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Papilio_machaon_caterpillar.jpg/640px-Papilio_machaon_caterpillar.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Papilio_machaon_caterpillar.jpg/960px-Papilio_machaon_caterpillar.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cichorium_intybus_003.JPG/640px-Cichorium_intybus_003.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cichorium_intybus_003.JPG/960px-Cichorium_intybus_003.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg/640px-Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg":"https://upload.wikimedia.org/wikipedia/commons/2/2b/Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vanellus_vanellus.jpg/640px-Vanellus_vanellus.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vanellus_vanellus.jpg/960px-Vanellus_vanellus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Symphytum_officinale_01.jpg/640px-Symphytum_officinale_01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Symphytum_officinale_01.jpg/960px-Symphytum_officinale_01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Elymus_repens_01.jpg/640px-Elymus_repens_01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Elymus_repens_01.jpg/960px-Elymus_repens_01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Asparagus_plant.jpg/640px-Asparagus_plant.jpg":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Asparagus_plant.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Pseudotsuga_menziesii_cones.jpg/640px-Pseudotsuga_menziesii_cones.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pseudotsuga_menziesii_cones.jpg/960px-Pseudotsuga_menziesii_cones.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Ulmus_glabra_sl11.jpg/640px-Ulmus_glabra_sl11.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ulmus_glabra_sl11.jpg/960px-Ulmus_glabra_sl11.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Prunus_mahaleb_kz02.jpg/640px-Prunus_mahaleb_kz02.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Prunus_mahaleb_kz02.jpg/960px-Prunus_mahaleb_kz02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prunus_padus_in_April.jpg/640px-Prunus_padus_in_April.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prunus_padus_in_April.jpg/960px-Prunus_padus_in_April.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cornus_sanguinea_RF.jpg/640px-Cornus_sanguinea_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cornus_sanguinea_RF.jpg/960px-Cornus_sanguinea_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cornus_mas_kz04.jpg/640px-Cornus_mas_kz04.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cornus_mas_kz04.jpg/960px-Cornus_mas_kz04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Melilotus_officinalis_kz16.jpg/640px-Melilotus_officinalis_kz16.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Melilotus_officinalis_kz16.jpg/960px-Melilotus_officinalis_kz16.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Impatiens_noli-tangere_kz10.jpg/640px-Impatiens_noli-tangere_kz10.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Impatiens_noli-tangere_kz10.jpg/960px-Impatiens_noli-tangere_kz10.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vaccinium_myrtillus_sl10.jpg/640px-Vaccinium_myrtillus_sl10.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vaccinium_myrtillus_sl10.jpg/960px-Vaccinium_myrtillus_sl10.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/%28Stellaria_media%29_Chickweed_plant.jpg/640px-%28Stellaria_media%29_Chickweed_plant.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/%28Stellaria_media%29_Chickweed_plant.jpg/960px-%28Stellaria_media%29_Chickweed_plant.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Thymus_serpyllum_kz02.jpg/640px-Thymus_serpyllum_kz02.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Thymus_serpyllum_kz02.jpg/960px-Thymus_serpyllum_kz02.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%28MHNT%29_Hylotelephium_telephium_-_flowers.jpg/640px-%28MHNT%29_Hylotelephium_telephium_-_flowers.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/%28MHNT%29_Hylotelephium_telephium_-_flowers.jpg/960px-%28MHNT%29_Hylotelephium_telephium_-_flowers.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Vaccinium_vitis-idaea_RF.jpg/640px-Vaccinium_vitis-idaea_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Vaccinium_vitis-idaea_RF.jpg/960px-Vaccinium_vitis-idaea_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Trifolium_pratense_-_Keila.jpg/640px-Trifolium_pratense_-_Keila.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Trifolium_pratense_-_Keila.jpg/960px-Trifolium_pratense_-_Keila.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Polygonum_aviculare_4.JPG/640px-Polygonum_aviculare_4.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Polygonum_aviculare_4.JPG/960px-Polygonum_aviculare_4.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Alfalfa_%28Medicago_sativa%29_I.jpg/640px-Alfalfa_%28Medicago_sativa%29_I.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Alfalfa_%28Medicago_sativa%29_I.jpg/960px-Alfalfa_%28Medicago_sativa%29_I.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lotus_corniculatus_RF.jpg/640px-Lotus_corniculatus_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lotus_corniculatus_RF.jpg/960px-Lotus_corniculatus_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lysimachia_vulgaris_RF.jpg/640px-Lysimachia_vulgaris_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lysimachia_vulgaris_RF.jpg/960px-Lysimachia_vulgaris_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reuzenbalsemien_%28Impatiens_glandulifera%29_01.JPG/640px-Reuzenbalsemien_%28Impatiens_glandulifera%29_01.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reuzenbalsemien_%28Impatiens_glandulifera%29_01.JPG/960px-Reuzenbalsemien_%28Impatiens_glandulifera%29_01.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Prunus_spinosa_Hedge_in_Flower.jpg/640px-Prunus_spinosa_Hedge_in_Flower.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Prunus_spinosa_Hedge_in_Flower.jpg/960px-Prunus_spinosa_Hedge_in_Flower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mespilus_germanica_2024-09-24-1.jpg/640px-Mespilus_germanica_2024-09-24-1.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mespilus_germanica_2024-09-24-1.jpg/960px-Mespilus_germanica_2024-09-24-1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Inula_helenium_kz04.jpg/640px-Inula_helenium_kz04.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Inula_helenium_kz04.jpg/960px-Inula_helenium_kz04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Prunella_vulgaris_kz14.jpg/640px-Prunella_vulgaris_kz14.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Prunella_vulgaris_kz14.jpg/960px-Prunella_vulgaris_kz14.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pulmonaria_officinalis_TK.jpg/640px-Pulmonaria_officinalis_TK.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pulmonaria_officinalis_TK.jpg/960px-Pulmonaria_officinalis_TK.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Armoracia_rusticana_kz04.jpg/640px-Armoracia_rusticana_kz04.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Armoracia_rusticana_kz04.jpg/960px-Armoracia_rusticana_kz04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg/640px-Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg/960px-Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mint_leaves_%28Mentha_spicata%29.jpg/640px-Mint_leaves_%28Mentha_spicata%29.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mint_leaves_%28Mentha_spicata%29.jpg/960px-Mint_leaves_%28Mentha_spicata%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ononis_spinosa_%288289068860%29.jpg/640px-Ononis_spinosa_%288289068860%29.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ononis_spinosa_%288289068860%29.jpg/960px-Ononis_spinosa_%288289068860%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Myosotis_arvensis_kz05.jpg/640px-Myosotis_arvensis_kz05.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Myosotis_arvensis_kz05.jpg/960px-Myosotis_arvensis_kz05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Koningskaars_R01.jpg/640px-Koningskaars_R01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Koningskaars_R01.jpg/960px-Koningskaars_R01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Viola_tricolor_kz05.jpg/640px-Viola_tricolor_kz05.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Viola_tricolor_kz05.jpg/960px-Viola_tricolor_kz05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Erigeron_canadensis_from_Britain_by_D_Merrick_14.jpg/640px-Erigeron_canadensis_from_Britain_by_D_Merrick_14.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Erigeron_canadensis_from_Britain_by_D_Merrick_14.jpg/960px-Erigeron_canadensis_from_Britain_by_D_Merrick_14.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Persicaria_hydropiper_kz06.jpg/640px-Persicaria_hydropiper_kz06.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Persicaria_hydropiper_kz06.jpg/960px-Persicaria_hydropiper_kz06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tripolium_pannonicum_RF.jpg/640px-Tripolium_pannonicum_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tripolium_pannonicum_RF.jpg/960px-Tripolium_pannonicum_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Solidago_canadensis_2014_G01.jpg/640px-Solidago_canadensis_2014_G01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Solidago_canadensis_2014_G01.jpg/960px-Solidago_canadensis_2014_G01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Solidago_gigantea_kz01.jpg/640px-Solidago_gigantea_kz01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Solidago_gigantea_kz01.jpg/960px-Solidago_gigantea_kz01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hippophae_rhamnoides-01_%28xndr%29.JPG/640px-Hippophae_rhamnoides-01_%28xndr%29.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hippophae_rhamnoides-01_%28xndr%29.JPG/960px-Hippophae_rhamnoides-01_%28xndr%29.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Reynoutria_japonica_flower_%2812%29.jpg/640px-Reynoutria_japonica_flower_%2812%29.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Reynoutria_japonica_flower_%2812%29.jpg/960px-Reynoutria_japonica_flower_%2812%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Galinsoga_quadriradiata%2C_MX.jpg/640px-Galinsoga_quadriradiata%2C_MX.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Galinsoga_quadriradiata%2C_MX.jpg/960px-Galinsoga_quadriradiata%2C_MX.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Physalis_alkekengi_kz05.jpg/640px-Physalis_alkekengi_kz05.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Physalis_alkekengi_kz05.jpg/960px-Physalis_alkekengi_kz05.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamiastrum_galeobdolon_kz01.jpg/640px-Lamiastrum_galeobdolon_kz01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lamiastrum_galeobdolon_kz01.jpg/960px-Lamiastrum_galeobdolon_kz01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Myosoton_aquaticum_kz06.jpg/640px-Myosoton_aquaticum_kz06.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Myosoton_aquaticum_kz06.jpg/960px-Myosoton_aquaticum_kz06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Salvia_pratensis_RF.jpg/640px-Salvia_pratensis_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Salvia_pratensis_RF.jpg/960px-Salvia_pratensis_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Galeopsis_tetrahit_tetrahit_118453171.jpg/640px-Galeopsis_tetrahit_tetrahit_118453171.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Galeopsis_tetrahit_tetrahit_118453171.jpg/960px-Galeopsis_tetrahit_tetrahit_118453171.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Helianthus_tuberosus_controluce.jpg/640px-Helianthus_tuberosus_controluce.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Helianthus_tuberosus_controluce.jpg/960px-Helianthus_tuberosus_controluce.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bistorta_officinalis_01.JPG/640px-Bistorta_officinalis_01.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bistorta_officinalis_01.JPG/960px-Bistorta_officinalis_01.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Amaranthus_retroflexus_kz09.jpg/640px-Amaranthus_retroflexus_kz09.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Amaranthus_retroflexus_kz09.jpg/960px-Amaranthus_retroflexus_kz09.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Stachys_palustris_-_inflorescence.jpg/640px-Stachys_palustris_-_inflorescence.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Stachys_palustris_-_inflorescence.jpg/960px-Stachys_palustris_-_inflorescence.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Witte_rapunzel_%28Phyteuma_spicatum%29._Hortus_Haren.JPG/640px-Witte_rapunzel_%28Phyteuma_spicatum%29._Hortus_Haren.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Witte_rapunzel_%28Phyteuma_spicatum%29._Hortus_Haren.JPG/960px-Witte_rapunzel_%28Phyteuma_spicatum%29._Hortus_Haren.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tilia_platyphyllos_kz01.jpg/640px-Tilia_platyphyllos_kz01.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tilia_platyphyllos_kz01.jpg/960px-Tilia_platyphyllos_kz01.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Origanum_vulgare_inflorescence_-_Keila.jpg/640px-Origanum_vulgare_inflorescence_-_Keila.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Origanum_vulgare_inflorescence_-_Keila.jpg/960px-Origanum_vulgare_inflorescence_-_Keila.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lysimachia_nummularia20140609_48.jpg/640px-Lysimachia_nummularia20140609_48.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lysimachia_nummularia20140609_48.jpg/960px-Lysimachia_nummularia20140609_48.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Plantago_major_RF.jpg/640px-Plantago_major_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Plantago_major_RF.jpg/960px-Plantago_major_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Stachys_sylvatica_RF.jpg/640px-Stachys_sylvatica_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Stachys_sylvatica_RF.jpg/960px-Stachys_sylvatica_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Betonica_officinalis_kz.jpg/640px-Betonica_officinalis_kz.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Betonica_officinalis_kz.jpg/960px-Betonica_officinalis_kz.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Fagopyrum_esculentum_kz12.jpg/640px-Fagopyrum_esculentum_kz12.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Fagopyrum_esculentum_kz12.jpg/960px-Fagopyrum_esculentum_kz12.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Salvia_glutinosa_3_RF.jpg/640px-Salvia_glutinosa_3_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Salvia_glutinosa_3_RF.jpg/960px-Salvia_glutinosa_3_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Rumex_acetosella_RF.jpg/640px-Rumex_acetosella_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Rumex_acetosella_RF.jpg/960px-Rumex_acetosella_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rumex_acetosa_kz14.jpg/640px-Rumex_acetosa_kz14.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rumex_acetosa_kz14.jpg/960px-Rumex_acetosa_kz14.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Claytonia_perfoliata_2_RF.jpg/640px-Claytonia_perfoliata_2_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Claytonia_perfoliata_2_RF.jpg/960px-Claytonia_perfoliata_2_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Eendekroos_dicht_bijeen.JPG/640px-Eendekroos_dicht_bijeen.JPG":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Eendekroos_dicht_bijeen.JPG/960px-Eendekroos_dicht_bijeen.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Tussilago_farfara_4_RF.jpg/640px-Tussilago_farfara_4_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Tussilago_farfara_4_RF.jpg/960px-Tussilago_farfara_4_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficaria_verna_2_RF.jpg/640px-Ficaria_verna_2_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ficaria_verna_2_RF.jpg/960px-Ficaria_verna_2_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Malva_sylvestris_3_RF.jpg/640px-Malva_sylvestris_3_RF.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Malva_sylvestris_3_RF.jpg/960px-Malva_sylvestris_3_RF.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Blitum_bonus-henricus.jpg/640px-Blitum_bonus-henricus.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Blitum_bonus-henricus.jpg/960px-Blitum_bonus-henricus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chenopodium_album_kz06.jpg/640px-Chenopodium_album_kz06.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Chenopodium_album_kz06.jpg/960px-Chenopodium_album_kz06.jpg"
};

let content = fs.readFileSync(DATA_FILE, 'utf-8');
let fixCount = 0;
let notFoundCount = 0;

for (const [oldUrl, newUrl] of Object.entries(FIX_MAP)) {
  if (content.includes(oldUrl)) {
    content = content.split(oldUrl).join(newUrl);
    console.log(`✓ Fixed: ${oldUrl.match(/\/([^\/]+\.(?:jpg|JPG|png))/i)?.[1]} → ${newUrl.includes('/thumb/') ? newUrl.match(/\/(\d+px-)/)?.[1] || 'direct' : 'direct'}`);
    fixCount++;
  } else {
    console.log(`⚠ Not in file: ${oldUrl.substring(60, 110)}`);
    notFoundCount++;
  }
}

fs.writeFileSync(DATA_FILE, content, 'utf-8');
console.log(`\n✅ Done! Applied ${fixCount} fixes. (${notFoundCount} not found in file)`);
