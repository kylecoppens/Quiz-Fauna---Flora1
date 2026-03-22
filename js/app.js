// app.js

// ═══════════════════════════════════════════════════════════════════════════
// GLOBAL STATE & FUNCTIONS (outside DOMContentLoaded)
// ═══════════════════════════════════════════════════════════════════════════
let currentLang = 'nl';
let showScreenFunc = null; // Will be set inside DOMContentLoaded

// BioGids rendering functions - defined at global scope for accessibility
window.renderBioguide = function(filter = '') {
    try {
        const grid = document.getElementById('biogids-grid');
        const emptyState = document.getElementById('biogids-empty');
        const data = window.bioguideData || [];

        if (!grid || !emptyState) {
            console.error('BioGids DOM elements not found');
            return;
        }

        const filtered = data.filter(topic => {
            const searchLower = filter.toLowerCase();
            const titleLower = (topic.name[currentLang] || topic.name.en).toLowerCase();
            return titleLower.includes(searchLower);
        });

        if (filtered.length === 0) {
            grid.style.display = 'none';
            emptyState.style.display = 'flex';
            return;
        }

        grid.style.display = 'grid';
        emptyState.style.display = 'none';

        grid.innerHTML = filtered.map(topic => `
            <div class="biogids-card" data-topic-id="${topic.id}" style="--card-hue: ${topic.hue}deg; --card-color: ${topic.color};">
                <div class="biogids-card-icon">${topic.icon}</div>
                <div class="biogids-card-content">
                    <h3 class="biogids-card-title">${topic.name[currentLang] || topic.name.en}</h3>
                    <p class="biogids-card-summary">${topic.summary[currentLang] || topic.summary.en}</p>
                </div>
                <div class="biogids-card-arrow">→</div>
            </div>
        `).join('');

        // Attach click handlers
        grid.querySelectorAll('.biogids-card').forEach(card => {
            card.addEventListener('click', () => {
                const topicId = card.dataset.topicId;
                const topic = data.find(t => t.id === topicId);
                if (topic) window.openBioguideDetail(topic);
            });
        });
    } catch (error) {
        console.error('Error in renderBioguide:', error);
    }
};

window.openBioguideDetail = function(topic) {
    try {
        const i18n = window.i18nData; // Will be set inside DOMContentLoaded
        const bioguideDetailModal = document.getElementById('biogids-detail-modal');

        if (!bioguideDetailModal) {
            console.error('BioGids detail modal not found');
            return;
        }

        const dict = i18n && i18n[currentLang] ? i18n[currentLang] : {};
        const lang = currentLang;

        // Fill header
        const headerIcon = document.getElementById('biogids-modal-icon');
        const headerTitle = document.getElementById('biogids-modal-title');
        if (headerIcon) headerIcon.textContent = topic.icon;
        if (headerTitle) headerTitle.textContent = topic.name[lang] || topic.name.en;

        // Fill content
        const contentEl = document.getElementById('biogids-modal-content');
        if (contentEl) contentEl.textContent = topic.content[lang] || topic.content.en;

        // Fill comparison table if exists
        const comparisonSection = document.getElementById('biogids-comparison-section');
        if (topic.comparison && topic.comparison.length > 0 && comparisonSection) {
            comparisonSection.style.display = 'block';
            const table = document.getElementById('biogids-comparison-table');
            const headers = Object.keys(topic.comparison[0]);
            if (table) {
                table.innerHTML = `
                    <table class="biogids-table">
                        <thead>
                            <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${topic.comparison.map(row => `
                                <tr>${headers.map(h => `<td>${row[h] || '—'}</td>`).join('')}</tr>
                            `).join('')}
                        </tbody>
                    </table>
                `;
            }
        } else if (comparisonSection) {
            comparisonSection.style.display = 'none';
        }

        // Fill related species links
        const speciesSection = document.getElementById('biogids-species-section');
        if (topic.relatedSpecies && topic.relatedSpecies.length > 0 && speciesSection) {
            speciesSection.style.display = 'block';
            const speciesLinks = document.getElementById('biogids-species-links');
            const allSpecies = window.speciesData || [];
            if (speciesLinks && Array.isArray(allSpecies) && allSpecies.length > 0) {
                try {
                    speciesLinks.innerHTML = topic.relatedSpecies
                        .map(speciesId => {
                            const species = allSpecies.find(s => s && s.id === speciesId);
                            if (!species) return '';
                            return `<button class="biogids-species-link" data-species-id="${species.id}">${species.name[lang] || species.name.en}</button>`;
                        })
                        .filter(html => html)
                        .join('');
                } catch (err) {
                    console.error('Error rendering species links:', err);
                    speciesLinks.innerHTML = '';
                }
            } else if (speciesLinks) {
                speciesLinks.innerHTML = '';
            }

            // Attach click handlers to species links
            if (speciesLinks) {
                speciesLinks.querySelectorAll('.biogids-species-link').forEach(link => {
                    link.addEventListener('click', () => {
                        const speciesId = link.dataset.speciesId;
                        const species = allSpecies.find(s => s && s.id === speciesId);
                        if (species && window.openModalFunc) {
                            bioguideDetailModal.classList.add('hidden');
                            window.openModalFunc(species);
                        }
                    });
                });
            }
        } else if (speciesSection) {
            speciesSection.style.display = 'none';
        }

        // Fill quiz
        const quizContainer = document.getElementById('quiz-container');
        if (topic.quiz && topic.quiz.length > 0 && quizContainer) {
            window.renderBioguideQuiz(topic.quiz, lang, quizContainer);
        }

        bioguideDetailModal.classList.remove('hidden');
    } catch (error) {
        console.error('Error in openBioguideDetail:', error);
    }
};

window.renderBioguideQuiz = function(questions, lang, container) {
    try {
        let currentQuestionIndex = 0;
        let score = 0;

        function showQuestion(index) {
            if (index >= questions.length) {
                // Quiz complete
                const percent = Math.round((score / questions.length) * 100);
                container.innerHTML = `
                    <div class="quiz-complete">
                        <h2>Quiz Voltooid!</h2>
                        <div class="quiz-score">
                            <span class="score-number">${score}/${questions.length}</span>
                            <span class="score-percent">${percent}%</span>
                        </div>
                        <p class="quiz-message">
                            ${percent === 100 ? '🎉 Perfecte score!' : percent >= 75 ? '👍 Goed gedaan!' : '📚 Blijf leren!'}
                        </p>
                    </div>
                `;
                return;
            }

            const question = questions[index];
            const q = question.question[lang] || question.question.en;
            const options = question.options;

            container.innerHTML = `
                <div class="quiz-question-block">
                    <div class="quiz-progress">${index + 1} / ${questions.length}</div>
                    <h4>${q}</h4>
                    <div class="quiz-options">
                        ${options.map((opt, i) => `
                            <button class="quiz-option" data-index="${i}">
                                ${opt[lang] || opt.en}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;

            container.querySelectorAll('.quiz-option').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    const isCorrect = i === question.correct;
                    if (isCorrect) {
                        score++;
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('incorrect');
                        const correctBtn = container.querySelector(`[data-index="${question.correct}"]`);
                        if (correctBtn) correctBtn.classList.add('correct');
                    }
                    // Disable all buttons
                    container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                    // Move to next after delay
                    setTimeout(() => {
                        currentQuestionIndex++;
                        showQuestion(currentQuestionIndex);
                    }, 1200);
                });
            });
        }

        showQuestion(0);
    } catch (error) {
        console.error('Error in renderBioguideQuiz:', error);
    }
};

// ═══════════════════════════════════════════════════════════════════════════
// DOMContentLoaded initialization
// ═══════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    console.log("App.js: DOMContentLoaded triggered");

    // --- SVG Icons ---
    const ICONS = {
        search: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
        play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"></path></svg>`,
        learn: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
        back: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
        check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
        audio: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`,
        audioMuted: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`,
        quiz: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path></svg>`,
        category: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>`,
        difficulty: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        biogids: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4 13.5c0-2.5-3-3.75-4-3.75s-4 1.25-4 3.75V19h8v-1.5z"></path></svg>`
    };

    // --- Audio Logic ---
    const bgAudio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3');
    bgAudio.loop = true;
    let audioEnabled = false;

    // --- Category Group Mapping (hierarchical: Dieren / Planten / Fungi) ---
    const GROUP_TO_CATEGORIES = {
        dieren:  ['fauna', 'birds', 'insects'],
        planten: ['flora', 'trees', 'agriculture'],
        fungi:   ['fungi'],
        // Individual categories map to themselves:
        fauna: ['fauna'], birds: ['birds'], insects: ['insects'],
        flora: ['flora'], trees: ['trees'], agriculture: ['agriculture'],
        all: null
    };

    // --- Localization Data ---
    const i18n = {
        nl: {
            play: "Speel Quiz",
            learn: "Encyclopedie",
            discover: "Ontdek de Natuur",
            title: "Belgische Flora & Fauna",
            desc: "Test je kennis of verken de encyclopedie van de Belgische natuurwonderen.",
            back: "← Terug",
            stopConfirm: "Weet je zeker dat je wilt stoppen?",
            stopDesc: "Je voortgang gaat verloren.",
            stopYes: "Ja, stop",
            stopNo: "Doorgaan",
            home: "← Home",
            setup: "Quiz Instellen",
            setupDesc: "Kies je categorie en moeilijkheidsgraad",
            category: "Kies Categorie",
            difficulty: "Kies Moeilijkheidsgraad",
            start: "Start Quiz",
            all: "🌍 Alles",
            dieren: "🐾 Dieren",
            planten: "🌿 Planten",
            fauna: "🦊 Zoogdieren",
            birds: "🐦 Vogels",
            reptiles: "🦎 Reptielen",
            amphibians: "🐸 Amfibieën",
            insects: "🦋 Insecten",
            flora: "🌸 Wilde Bloemen",
            fungi: "🍄 Paddenstoelen",
            trees: "🌲 Bomen",
            agriculture: "🌾 Gekweekte Soorten",
            easy: "Gemakkelijk (Algemeen)",
            medium: "Gemiddeld",
            hard: "Moeilijk (Zeldzaam)",
            mixed: "Willekeurig",
            question: "Identificeer deze soort",
            score: "Score",
            of: "van",
            next: "Volgende Vraag",
            hint: "Tip",
            complete: "Quiz Voltooid!",
            again: "Opnieuw Spelen",
            menu: "Hoofdmenu",
            habitat: "Leefgebied",
            rarity: "Zeldzaamheid",
            scientific: "Wetenschappelijke naam",
            family: "Familie",
            size: "Grootte",
            diet: "Dieet",
            funfact: "Wist je dat?",
            perfect: "Perfecte Score!",
            perfectDesc: "Je bent een echte meester van de Belgische biodiversiteit.",
            great: "Goed gedaan!",
            greatDesc: "Je kent je weg in de natuur echt goed.",
            notbad: "Niet slecht!",
            notbadDesc: "Blijf ontdekken om meer te leren over onze lokale soorten.",
            practice: "Meer oefening nodig!",
            practiceDesc: "Probeer de Encyclopedie om meer te leren.",
            noSpecies: "Geen soorten gevonden voor deze categorie. Probeer een andere!",
            noResults: "Geen soorten gevonden",
            noResultsSub: "Probeer een andere zoekopdracht of categorie.",
            hintText: "Dit behoort tot de familie: ",
            range: "Toon Kaart",
            species: "Toon Soort",
            sotdLabel: "Soort van de Dag",
            sotdTap: "Tik voor details →",
            xpLabel: "XP",
            biogids: "BioGids",
            biogidsTitle: "BioGids: Biologische Kenniskaarten",
            biogidsSearch: "Zoek onderwerp…"
        },
        en: {
            play: "Play Quiz",
            learn: "Encyclopedia",
            discover: "Discover Nature",
            title: "Belgian Fauna & Flora",
            desc: "Test your knowledge or explore the encyclopedia of Belgium's natural wonders.",
            back: "← Back",
            stopConfirm: "Stop the quiz?",
            stopDesc: "Your progress will be lost.",
            stopYes: "Yes, stop",
            stopNo: "Keep playing",
            home: "← Home",
            setup: "Setup Quiz",
            setupDesc: "Choose your category and difficulty",
            category: "Select Category",
            difficulty: "Select Difficulty",
            start: "Start Quiz",
            all: "🌍 All",
            dieren: "🐾 Animals",
            planten: "🌿 Plants",
            fauna: "🦊 Mammals",
            birds: "🐦 Birds",
            reptiles: "🦎 Reptiles",
            amphibians: "🐸 Amphibians",
            insects: "🦋 Insects",
            flora: "🌸 Wildflowers",
            fungi: "🍄 Fungi",
            trees: "🌲 Trees",
            agriculture: "🌾 Cultivated Species",
            easy: "Easy (Common)",
            medium: "Medium",
            hard: "Hard (Rare)",
            mixed: "Random",
            question: "Identify this species",
            score: "Score",
            of: "of",
            next: "Next Question",
            hint: "Hint",
            complete: "Quiz Complete!",
            again: "Play Again",
            menu: "Main Menu",
            habitat: "Habitat",
            rarity: "Rarity",
            scientific: "Scientific Name",
            family: "Family",
            size: "Size",
            diet: "Diet",
            funfact: "Did you know?",
            perfect: "Perfect Score!",
            perfectDesc: "You are a true master of Belgian biodiversity.",
            great: "Great job!",
            greatDesc: "You really know your way around nature.",
            notbad: "Not bad!",
            notbadDesc: "Keep exploring to learn more about our local species.",
            practice: "Need more practice!",
            practiceDesc: "Try the Encyclopedia section to learn more.",
            noSpecies: "No species found for this category! Try another one.",
            noResults: "No species found",
            noResultsSub: "Try a different search term or category.",
            hintText: "This belongs to the family: ",
            range: "Show Range",
            species: "Show Species",
            sotdLabel: "Species of the Day",
            sotdTap: "Tap for details →",
            xpLabel: "XP",
            biogids: "BioGids",
            biogidsTitle: "BioGids: Educational Knowledge Cards",
            biogidsSearch: "Search topic…"
        },
        fr: {
            play: "Jouer au Quiz",
            learn: "Encyclopédie",
            discover: "Découvrir la Nature",
            title: "Faune & Flore Belges",
            desc: "Testez vos connaissances ou explorez l'encyclopédie des merveilles naturelles de la Belgique.",
            back: "← Retour",
            stopConfirm: "Arrêter le quiz ?",
            stopDesc: "Votre progression sera perdue.",
            stopYes: "Oui, arrêter",
            stopNo: "Continuer",
            home: "← Accueil",
            setup: "Configuration du Quiz",
            setupDesc: "Choisissez votre cat\u00e9gorie et difficult\u00e9",
            category: "Choisir la Catégorie",
            difficulty: "Choisir la Difficulté",
            start: "Commencer le Quiz",
            all: "🌍 Tout",
            dieren: "🐾 Animaux",
            planten: "🌿 Plantes",
            fauna: "🦊 Mammifères",
            birds: "🐦 Oiseaux",
            reptiles: "🦎 Reptiles",
            amphibians: "🐸 Amphibiens",
            insects: "🦋 Insectes",
            flora: "🌸 Fleurs sauvages",
            fungi: "🍄 Champignons",
            trees: "🌲 Arbres",
            agriculture: "🌾 Espèces Cultivées",
            easy: "Facile (Commun)",
            medium: "Moyen",
            hard: "Difficile (Rare)",
            mixed: "Aléatoire",
            question: "Identifiez cette espèce",
            score: "Score",
            of: "sur",
            next: "Question Suivante",
            hint: "Indice",
            complete: "Quiz Terminé !",
            again: "Rejouer",
            menu: "Menu Principal",
            habitat: "Habitat",
            rarity: "Rareté",
            scientific: "Nom Scientifique",
            family: "Famille",
            size: "Taille",
            diet: "Régime",
            funfact: "Le saviez-vous ?",
            perfect: "Score Parfait !",
            perfectDesc: "Vous êtes un véritable maître de la biodiversité belge.",
            great: "Bon travail !",
            greatDesc: "Vous connaissez vraiment bien la nature.",
            notbad: "Pas mal !",
            notbadDesc: "Continuez à explorer pour en savoir plus sur nos espèces locales.",
            practice: "Besoin d'entraînement !",
            practiceDesc: "Essayez l'Encyclopédie pour en apprendre davantage.",
            noSpecies: "Aucune espèce trouvée pour cette catégorie ! Essayez-en une autre.",
            noResults: "Aucune espèce trouvée",
            noResultsSub: "Essayez un autre terme de recherche ou une autre catégorie.",
            hintText: "Ceci appartient à la famille : ",
            range: "Carte",
            species: "Espèce",
            sotdLabel: "Espèce du Jour",
            sotdTap: "Touchez pour d\u00e9tails →",
            xpLabel: "XP",
            biogids: "BioGids",
            biogidsTitle: "BioGids: Cartes de Connaissances Éducatives",
            biogidsSearch: "Rechercher un sujet…"
        }
    };

    // --- State Variables ---
    // currentLang is now global (defined outside DOMContentLoaded)
    let currentCategory = 'all';
    let currentDifficulty = 'easy';
    let activeQuizPool = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let currentCorrectAnswer = null;
    let hintUsed = false;
    let collectedSpecies = JSON.parse(localStorage.getItem('collectedSpecies') || '[]');
    let currentXP = parseInt(localStorage.getItem('currentXP') || '0');
    let phyloInitialized = false;

    const XP_PER_CORRECT = 10;
    const QUIZ_LENGTH = 10;

    function saveCollection() {
        localStorage.setItem('collectedSpecies', JSON.stringify(collectedSpecies));
    }

    function saveXP() {
        localStorage.setItem('currentXP', String(currentXP));
    }

    function addToCollection(speciesId) {
        if (!collectedSpecies.includes(speciesId)) {
            collectedSpecies.push(speciesId);
            saveCollection();
            checkBadges();
        }
    }

    // --- DOM Elements ---
    const screens = {
        home: document.getElementById('screen-home'),
        config: document.getElementById('screen-config'),
        quiz: document.getElementById('screen-quiz'),
        results: document.getElementById('screen-results'),
        learn: document.getElementById('screen-learn'),
        biogids: document.getElementById('screen-biogids'),
        phylo: document.getElementById('screen-phylo'),
    };

    const btnPlay = document.getElementById('btn-play');
    const btnLearn = document.getElementById('btn-learn');
    const btnBioGids = document.getElementById('btn-biogids');
    const btnBacks = document.querySelectorAll('.btn-back, .back-btn');
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    const btnNextQuestion = document.getElementById('btn-next-question');
    const btnPlayAgain = document.getElementById('btn-play-again');
    const btnResultsHome = document.getElementById('btn-results-home');
    const btnHint = document.getElementById('btn-hint');
    const btnRange = document.getElementById('btn-range');
    const langBtns = document.querySelectorAll('.btn-lang');
    const btnStopQuiz = document.getElementById('btn-stop-quiz');
    const rangeImage = document.getElementById('range-image');

    // Stop modal
    const stopConfirmModal = document.getElementById('stop-confirm-modal');
    const btnStopConfirm = document.getElementById('btn-stop-confirm');
    const btnStopCancel = document.getElementById('btn-stop-cancel');

    const categoryChips = document.querySelectorAll('#category-selector .cat-card');
    const difficultyChips = document.querySelectorAll('#difficulty-selector .diff-btn');
    const subCategoryChips = document.querySelectorAll('#category-selector .sub-chip');
    const catAccordions = document.querySelectorAll('#category-selector .cat-accordion');

    const qNumText = document.getElementById('current-q-num');
    const progressFill = document.getElementById('progress-fill');
    const xpDisplay = document.getElementById('xp-display');
    const scoreText = document.getElementById('current-score');
    const qText = document.getElementById('question-text');
    const qImage = document.getElementById('question-image');
    const imageLoader = document.getElementById('image-loader');
    const answersContainer = document.getElementById('answers-container');

    const detailsModal = document.getElementById('details-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');

    const learnGrid = document.getElementById('learn-grid');
    const learnTabs = document.querySelectorAll('#learn-filters .tab');
    const speciesSearch = document.getElementById('species-search');
    const btnAudio = document.getElementById('btn-audio');
    const audioIcon = document.getElementById('audio-icon');

    // --- Parallax Hero ---
    function initParallax() {
        const container = document.getElementById('hero-parallax');
        const inner = document.getElementById('hero-parallax-inner');
        if (!container || !inner) return;

        // Scroll-based parallax on the home screen
        const homeScreen = document.getElementById('screen-home');
        if (homeScreen) {
            homeScreen.addEventListener('scroll', updateParallax);
        }
        // Also use mouse/device motion as a subtle effect
        document.addEventListener('mousemove', (e) => {
            if (!screens.home.classList.contains('active')) return;
            const rect = container.getBoundingClientRect();
            if (rect.width === 0) return;
            const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
            const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
            inner.style.transform = `translate(${xRatio * 12}px, ${yRatio * 8}px) scale(1.05)`;
        });

        function updateParallax() {
            const scrollY = homeScreen.scrollTop;
            inner.style.transform = `translateY(${scrollY * 0.35}px) scale(1.05)`;
        }
    }

    // --- Species of the Day ---
    function renderSpeciesOfTheDay() {
        const allData = window.speciesData || [];
        if (!allData.length) return;

        // Pick deterministically based on the current date so it changes daily
        const today = new Date();
        const dayIndex = (today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()) % allData.length;
        const species = allData[dayIndex];

        const card = document.getElementById('sotd-card');
        const img = document.getElementById('sotd-img');
        const nameEl = document.getElementById('sotd-name');
        const sciEl = document.getElementById('sotd-scientific');
        const factEl = document.getElementById('sotd-fact');

        if (!card || !species) return;

        const name = typeof species.name === 'object' ? species.name[currentLang] : species.name;
        const funfact = species.funfact
            ? (typeof species.funfact === 'object' ? species.funfact[currentLang] : species.funfact)
            : (typeof species.description === 'object' ? species.description[currentLang] : species.description);

        img.src = species.image || '';
        img.alt = name;
        img.onerror = () => { img.style.display = 'none'; };

        nameEl.textContent = name;
        sciEl.textContent = species.scientific || '';
        factEl.textContent = funfact || '';

        card.classList.remove('hidden');

        // Make SOTD card clickable — opens species detail modal
        card.style.cursor = 'pointer';
        card.onclick = () => openModal(species);
    }

    // --- Language Logic ---
    function updateLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        const dict = i18n[lang];

        // Home screen
        const subtitleEl = document.querySelector('#screen-home .subtitle');
        if (subtitleEl) subtitleEl.textContent = dict.discover;

        const h1El = document.querySelector('#screen-home h1');
        if (h1El) {
            const title = dict.title;
            const belgianKeywords = ['Belgian', 'Belgische', 'Belges'];
            let belgianWord = null;
            let belgianIndex = -1;

            // Find which word contains Belgian/Belgische/Belges
            for (const keyword of belgianKeywords) {
                const index = title.indexOf(keyword);
                if (index !== -1) {
                    belgianWord = keyword;
                    belgianIndex = title.split(' ').findIndex(w => w.includes(keyword));
                    break;
                }
            }

            if (belgianWord && belgianIndex !== -1) {
                const words = title.split(' ');
                const gradientWord = words[belgianIndex];
                const beforeWords = words.slice(0, belgianIndex).join(' ');
                const afterWords = words.slice(belgianIndex + 1).join(' ');

                if (belgianIndex === 0) {
                    // Gradient word is first
                    h1El.innerHTML = `<span class="gradient-belgian">${gradientWord}</span><br><span class="highlight">${afterWords}</span>`;
                } else {
                    // Gradient word is later
                    h1El.innerHTML = `${beforeWords}<br><span class="highlight">${gradientWord}</span> ${afterWords}`;
                    // Better: put gradient on the word itself
                    h1El.innerHTML = `${beforeWords}<br><span class="gradient-belgian">${gradientWord}</span> <span class="highlight">${afterWords}</span>`;
                }
            } else {
                // Fallback: original logic
                const words = title.split(' ');
                const firstWord = words[0];
                const rest = words.slice(1).join(' ');
                h1El.innerHTML = `<span class="gradient-belgian">${firstWord}</span><br><span class="highlight">${rest}</span>`;
            }
        }

        const descEl = document.querySelector('#screen-home p');
        if (descEl) descEl.textContent = dict.desc;

        if (btnPlay) btnPlay.innerHTML = `<span class="icon">🌿</span> ${dict.play}`;
        if (btnLearn) btnLearn.innerHTML = `<span class="icon">📖</span> ${dict.learn}`;

        // SOTD label
        const sotdLabelEl = document.querySelector('.sotd-label [data-i18n="sotdLabel"]');
        if (sotdLabelEl) sotdLabelEl.textContent = dict.sotdLabel;
        const sotdTapEl = document.querySelector('[data-i18n="sotdTap"]');
        if (sotdTapEl) sotdTapEl.textContent = dict.sotdTap;

        // Config
        const configH2 = document.querySelector('#screen-config h2');
        if (configH2) configH2.textContent = dict.setup;
        const configSubEl = document.querySelector('.config-hero-sub');
        if (configSubEl) configSubEl.textContent = dict.setupDesc;

        const catLabel = document.querySelector('#category-selector') && document.querySelector('#category-selector').previousElementSibling;
        if (catLabel) catLabel.innerHTML = `<span class="label-icon">${ICONS.category}</span> ${dict.category}`;

        const diffLabel = document.querySelector('#difficulty-selector') && document.querySelector('#difficulty-selector').previousElementSibling;
        if (diffLabel) diffLabel.innerHTML = `<span class="label-icon">${ICONS.difficulty}</span> ${dict.difficulty}`;

        if (btnStartQuiz) btnStartQuiz.textContent = dict.start;

        categoryChips.forEach(chip => {
            const v = chip.dataset.val;
            const labelEl = chip.querySelector('.cat-card-label');
            // Strip emoji prefix (e.g. "🌍 Alles" → "Alles") since cards have large icon
            if (dict[v] && labelEl) labelEl.textContent = dict[v].replace(/^\S+\s/, '');
        });

        subCategoryChips.forEach(chip => {
            const v = chip.dataset.val;
            if (dict[v]) chip.textContent = dict[v];
        });

        difficultyChips.forEach(chip => {
            const v = chip.dataset.val;
            const labelEl = chip.querySelector('.diff-label');
            if (dict[v] && labelEl) labelEl.textContent = dict[v];
        });

        // Quiz
        const progressTextEl = document.querySelector('.progress-text');
        if (progressTextEl) {
            progressTextEl.innerHTML = `${dict.question} <span id="current-q-num">${currentQuestionIndex + 1}</span> ${dict.of} 10`;
        }

        const scorePillEl = document.querySelector('.score-pill');
        if (scorePillEl) scorePillEl.innerHTML = `🏅 <span id="current-score">${score}</span>`;

        if (btnHint) btnHint.innerHTML = `<span class="icon">💡</span> ${dict.hint}`;
        if (btnRange) btnRange.textContent = btnRange.classList.contains('active-range') ? dict.species : dict.range;
        if (btnNextQuestion) btnNextQuestion.innerHTML = `${dict.next} →`;

        // Results
        const resultsH2 = document.querySelector('#screen-results h2');
        if (resultsH2) resultsH2.textContent = dict.complete;
        if (btnPlayAgain) btnPlayAgain.textContent = dict.again;
        if (btnResultsHome) btnResultsHome.textContent = dict.menu;

        // Stop modal
        const stopTitle = document.getElementById('stop-modal-title');
        if (stopTitle) stopTitle.textContent = dict.stopConfirm;
        const stopDesc = document.getElementById('stop-modal-desc');
        if (stopDesc) stopDesc.textContent = dict.stopDesc;
        if (btnStopConfirm) btnStopConfirm.textContent = dict.stopYes;
        if (btnStopCancel) btnStopCancel.textContent = dict.stopNo;

        // Encyclopedia
        document.querySelectorAll('#learn-filters .tab').forEach(tab => {
            const v = tab.dataset.filter;
            if (v && dict[v]) {
                const hasSub = tab.classList.contains('tab-has-sub');
                tab.textContent = dict[v] + (hasSub ? ' \u25BE' : '');
            }
        });

        // Modal labels
        const labelMap = {
            'label-rarity': 'rarity',
            'label-size': 'size',
            'label-diet': 'diet',
            'label-funfact': 'funfact',
            'label-info-scientific': 'scientific',
            'label-info-habitat': 'habitat',
            'label-info-rarity': 'rarity',
            'label-info-size': 'size',
            'label-info-diet': 'diet',
        };
        for (const [id, key] of Object.entries(labelMap)) {
            const el = document.getElementById(id);
            if (el && dict[key]) el.textContent = dict[key];
        }

        // Refresh SOTD names if already rendered
        renderSpeciesOfTheDay();
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });

    // --- Navigation ---
    function showScreen(screenId) {
        const key = screenId.replace('screen-', '');
        Object.entries(screens).forEach(([k, screen]) => {
            if (!screen) return;
            if (k === key) {
                screen.classList.remove('hidden');
                screen.classList.add('active');
            } else {
                screen.classList.remove('active');
                screen.classList.add('hidden');
            }
        });
    }

    btnPlay.addEventListener('click', () => { showScreen('screen-config'); updateConfigPreview(); });
    btnLearn.addEventListener('click', () => {
        showScreen('screen-learn');
        renderEncyclopedia('all');
    });
    btnBioGids.addEventListener('click', () => {
        showScreen('screen-biogids');
        renderBioguide();
    });

    btnBacks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target || 'screen-home';
            showScreen(target);
        });
    });

    btnResultsHome.addEventListener('click', () => showScreen('screen-home'));
    btnPlayAgain.addEventListener('click', () => { showScreen('screen-config'); updateConfigPreview(); });

    // ── Encyclopedia filter with sub-tabs ──────────────────────────────────
    const subFilterRow = document.getElementById('sub-filters');
    const subGroups = document.querySelectorAll('.sub-group');
    let currentSubFilter = null; // e.g. "fauna_mammal"

    function showSubGroup(parentFilter) {
        if (!subFilterRow) return;
        const hasSubGroup = document.querySelector(`.sub-group[data-parent="${parentFilter}"]`);
        if (hasSubGroup) {
            subFilterRow.classList.remove('hidden');
            subGroups.forEach(g => {
                g.classList.toggle('hidden', g.dataset.parent !== parentFilter);
            });
            // Reset sub-tab selection to "all"
            const allSubTabs = hasSubGroup.querySelectorAll('.sub-tab');
            allSubTabs.forEach(t => t.classList.remove('active'));
            if (allSubTabs[0]) allSubTabs[0].classList.add('active');
            currentSubFilter = allSubTabs[0]?.dataset.subfilter || null;
        } else {
            subFilterRow.classList.add('hidden');
            currentSubFilter = null;
        }
    }

    learnTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            learnTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.dataset.filter;
            showSubGroup(filter);
            renderEncyclopedia(filter, currentSubFilter);
        });
    });

    // Sub-tab clicks
    document.querySelectorAll('.sub-tab').forEach(subTab => {
        subTab.addEventListener('click', () => {
            const parentGroup = subTab.closest('.sub-group');
            parentGroup.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
            subTab.classList.add('active');
            currentSubFilter = subTab.dataset.subfilter;
            const activeTab = document.querySelector('#learn-filters .tab.active');
            renderEncyclopedia(activeTab?.dataset.filter || 'all', currentSubFilter);
        });
    });

    // Phylogeny button → open in-app screen
    const btnOpenPhylo = document.getElementById('btn-open-phylo');
    if (btnOpenPhylo) {
        btnOpenPhylo.addEventListener('click', () => {
            showScreen('screen-phylo');
            if (!phyloInitialized) { initPhylo(); phyloInitialized = true; }
        });
    }
    // Back button from phylo screen
    const btnBackPhylo = document.querySelector('.btn-back-phylo');
    if (btnBackPhylo) {
        btnBackPhylo.addEventListener('click', () => {
            showScreen('screen-learn');
        });
    }

    if (speciesSearch) {
        const suggestionsList = document.getElementById('species-suggestions');

        speciesSearch.addEventListener('input', () => {
            const searchTerm = speciesSearch.value.toLowerCase().trim();

            // Show/hide suggestions
            if (searchTerm.length > 0) {
                const matches = window.speciesData.filter(s =>
                    s.name.nl?.toLowerCase().includes(searchTerm) ||
                    s.name.en?.toLowerCase().includes(searchTerm) ||
                    s.name.fr?.toLowerCase().includes(searchTerm) ||
                    s.scientific?.toLowerCase().includes(searchTerm) ||
                    s.family?.toLowerCase().includes(searchTerm)
                ).slice(0, 8); // Limit to 8 suggestions

                if (matches.length > 0) {
                    suggestionsList.innerHTML = matches.map(s => `
                        <div class="search-suggestion-item" data-species-id="${s.id}">
                            <span class="search-suggestion-name">${s.name.nl || s.name.en}</span>
                            <span class="search-suggestion-meta">${s.family || 'Onbekend'}</span>
                        </div>
                    `).join('');
                    suggestionsList.classList.add('show');

                    // Add click handlers to suggestions
                    suggestionsList.querySelectorAll('.search-suggestion-item').forEach(item => {
                        item.addEventListener('click', () => {
                            const speciesId = item.dataset.speciesId;
                            const species = window.speciesData.find(s => s.id === speciesId);
                            if (species) openModal(species);
                            suggestionsList.classList.remove('show');
                            speciesSearch.value = '';
                        });
                    });
                } else {
                    suggestionsList.classList.remove('show');
                }
            } else {
                suggestionsList.classList.remove('show');
            }

            // Filter encyclopedia results
            const activeTab = document.querySelector('#learn-filters .tab.active');
            renderEncyclopedia(activeTab ? activeTab.dataset.filter : 'all', currentSubFilter);
        });

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target !== speciesSearch && !speciesSearch.contains(e.target)) {
                suggestionsList.classList.remove('show');
            }
        });
    }

    if (btnAudio) {
        btnAudio.addEventListener('click', () => {
            audioEnabled = !audioEnabled;
            if (audioEnabled) {
                bgAudio.play().catch(e => console.log("Audio block", e));
                audioIcon.innerHTML = ICONS.audio;
                btnAudio.classList.add('active');
            } else {
                bgAudio.pause();
                audioIcon.innerHTML = ICONS.audioMuted;
                btnAudio.classList.remove('active');
            }
        });
    }

    // --- Stop Quiz Button (with confirmation modal) ---
    if (btnStopQuiz) {
        btnStopQuiz.addEventListener('click', () => {
            if (stopConfirmModal) stopConfirmModal.classList.remove('hidden');
        });
    }

    if (btnStopConfirm) {
        btnStopConfirm.addEventListener('click', () => {
            if (stopConfirmModal) stopConfirmModal.classList.add('hidden');
            showScreen('screen-home');
        });
    }

    if (btnStopCancel) {
        btnStopCancel.addEventListener('click', () => {
            if (stopConfirmModal) stopConfirmModal.classList.add('hidden');
        });
    }

    // Close stop modal on backdrop click
    if (stopConfirmModal) {
        stopConfirmModal.addEventListener('click', (e) => {
            if (e.target === stopConfirmModal) stopConfirmModal.classList.add('hidden');
        });
    }

    // --- Config ---
    function updateConfigPreview() {
        const countEl = document.getElementById('config-species-count');
        if (!countEl) return;
        const allData = window.speciesData || [];
        const seen = new Set();
        const uniqueData = allData.filter(item => {
            const isDuplicate = seen.has(item.scientific);
            seen.add(item.scientific);
            return !isDuplicate;
        });
        const filtered = uniqueData.filter(species => {
            const cats = GROUP_TO_CATEGORIES[currentCategory];
            const matchesCategory = !cats || cats.includes(species.category);
            const matchesDifficulty = currentDifficulty === 'all' || currentDifficulty === 'mixed' || species.difficulty === currentDifficulty || !species.difficulty;
            return matchesCategory && matchesDifficulty;
        });
        const texts = {
            nl: `${filtered.length} soorten beschikbaar`,
            en: `${filtered.length} species available`,
            fr: `${filtered.length} esp\u00e8ces disponibles`
        };
        countEl.textContent = texts[currentLang] || texts.nl;
    }

    function setupChips(chipsList, callback) {
        chipsList.forEach(chip => {
            chip.addEventListener('click', (e) => {
                const val = e.currentTarget.dataset.val;
                chipsList.forEach(c => c.classList.remove('active'));
                e.currentTarget.classList.add('active');
                callback(val);
            });
        });
    }

    // Category cards with accordion subcategory panels
    function toggleAccordion(group) {
        catAccordions.forEach(acc => {
            if (acc.dataset.for === group) {
                acc.classList.add('open');
            } else {
                acc.classList.remove('open');
            }
        });
        // Clear sub-chip selections when switching groups
        subCategoryChips.forEach(c => c.classList.remove('active'));
    }

    setupChips(categoryChips, val => {
        currentCategory = val;
        toggleAccordion(val);
        updateConfigPreview();
    });

    // Subcategory chips override group selection
    subCategoryChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const val = chip.dataset.val;
            // Only deactivate siblings in the same accordion
            const parent = chip.closest('.cat-accordion');
            if (parent) parent.querySelectorAll('.sub-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = val;
            updateConfigPreview();
        });
    });

    setupChips(difficultyChips, val => { currentDifficulty = val; updateConfigPreview(); });

    // --- Quiz Engine ---
    btnStartQuiz.addEventListener('click', startQuiz);
    btnNextQuestion.addEventListener('click', loadNextQuestion);
    btnHint.addEventListener('click', showHint);

    if (btnRange) {
        btnRange.addEventListener('click', () => {
            const isShowingRange = btnRange.classList.toggle('active-range');
            const dict = i18n[currentLang];
            if (isShowingRange) {
                btnRange.textContent = dict.species;
                qImage.classList.add('hidden');
                rangeImage.classList.remove('hidden');
            } else {
                btnRange.textContent = dict.range;
                qImage.classList.remove('hidden');
                rangeImage.classList.add('hidden');
            }
        });
    }

    function startQuiz() {
        score = 0;
        currentQuestionIndex = 0;
        const allData = window.speciesData || [];

        const seen = new Set();
        const uniqueData = allData.filter(item => {
            const isDuplicate = seen.has(item.scientific);
            seen.add(item.scientific);
            return !isDuplicate;
        });

        activeQuizPool = uniqueData.filter(species => {
            const cats = GROUP_TO_CATEGORIES[currentCategory];
            const matchesCategory = !cats || cats.includes(species.category);
            const matchesDifficulty = currentDifficulty === 'all' || currentDifficulty === 'mixed' || species.difficulty === currentDifficulty || !species.difficulty;
            return matchesCategory && matchesDifficulty;
        });

        if (activeQuizPool.length === 0) {
            const cats = GROUP_TO_CATEGORIES[currentCategory];
            activeQuizPool = uniqueData.filter(species => !cats || cats.includes(species.category));
        }

        if (activeQuizPool.length === 0) {
            alert(i18n[currentLang].noSpecies);
            return;
        }

        activeQuizPool.sort(() => 0.5 - Math.random());
        const actualLength = Math.min(activeQuizPool.length, QUIZ_LENGTH);
        activeQuizPool = activeQuizPool.slice(0, actualLength);

        showScreen('screen-quiz');
        updateXPDisplay();
        renderQuestion();
    }

    // --- XP System ---
    function updateXPDisplay() {
        if (xpDisplay) {
            xpDisplay.textContent = `${currentXP} ${i18n[currentLang].xpLabel}`;
        }
    }

    function awardXP(amount, originEl) {
        currentXP += amount;
        saveXP();
        updateXPDisplay();

        // Floating +XP pop animation
        if (originEl) {
            const rect = originEl.getBoundingClientRect();
            const pop = document.createElement('div');
            pop.className = 'xp-gain-pop';
            pop.textContent = `+${amount} XP`;
            pop.style.left = `${rect.left + rect.width / 2}px`;
            pop.style.top = `${rect.top}px`;
            document.body.appendChild(pop);
            setTimeout(() => pop.remove(), 900);
        }
    }

    function renderQuestion() {
        btnNextQuestion.classList.add('hidden');
        btnHint.disabled = false;
        hintUsed = false;

        const oldHint = document.querySelector('.hint-text');
        if (oldHint) oldHint.remove();

        const currentItem = activeQuizPool[currentQuestionIndex];
        currentCorrectAnswer = currentItem;

        const dict = i18n[currentLang];
        const totalQs = activeQuizPool.length;

        // Update question number
        const qNumEl = document.getElementById('current-q-num');
        if (qNumEl) qNumEl.textContent = currentQuestionIndex + 1;

        // Update progress text
        const progressTextEl = document.querySelector('.progress-text');
        if (progressTextEl) {
            progressTextEl.innerHTML = `${dict.question} <span id="current-q-num">${currentQuestionIndex + 1}</span> ${dict.of} ${totalQs}`;
        }

        progressFill.style.width = `${(currentQuestionIndex / totalQs) * 100}%`;
        scoreText.textContent = score;

        const catName = dict[currentItem.category] || currentItem.category;
        qText.innerHTML = `${dict.question} (<span class="highlight">${catName}</span>)`;

        imageLoader.style.display = 'block';
        qImage.style.opacity = '0';
        qImage.referrerPolicy = "no-referrer";
        qImage.src = currentItem.image;
        qImage.onload = () => {
            imageLoader.style.display = 'none';
            qImage.style.opacity = '1';
        };
        qImage.onerror = () => {
            imageLoader.style.display = 'none';
            qImage.style.opacity = '0.5';
        };

        // Range map
        if (currentItem.rangeMap) {
            btnRange.classList.remove('hidden');
            btnRange.classList.remove('active-range');
            btnRange.textContent = dict.range;
            rangeImage.src = currentItem.rangeMap;
            rangeImage.classList.add('hidden');
            qImage.classList.remove('hidden');
        } else {
            btnRange.classList.add('hidden');
            rangeImage.classList.add('hidden');
            qImage.classList.remove('hidden');
        }

        generateAnswers(currentItem);
    }

    function showHint() {
        if (hintUsed) return;
        hintUsed = true;
        btnHint.disabled = true;

        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint-text';
        const family = currentCorrectAnswer.family || "Onbekend/Unknown";
        hintDiv.innerHTML = `<span class="icon">🌿</span> ${i18n[currentLang].hintText} <strong>${family}</strong>`;
        document.querySelector('.question-container').after(hintDiv);
    }

    function generateAnswers(correctItem) {
        answersContainer.innerHTML = '';
        const allData = window.speciesData || [];

        const getLocalizedName = (item) => typeof item.name === 'object' ? item.name[currentLang] : item.name;
        const correctName = getLocalizedName(correctItem);

        let wrongAnswersPool = allData.filter(i =>
            i.id !== correctItem.id &&
            i.scientific !== correctItem.scientific &&
            getLocalizedName(i) !== correctName
        );

        let sameCatWrong = wrongAnswersPool.filter(i => i.category === correctItem.category);
        let selectedWrong = [];

        if (sameCatWrong.length >= 2) {
            selectedWrong = sameCatWrong.sort(() => 0.5 - Math.random()).slice(0, 2);
        } else {
            selectedWrong = [...sameCatWrong];
            const others = wrongAnswersPool
                .filter(i => !selectedWrong.includes(i))
                .sort(() => 0.5 - Math.random())
                .slice(0, 2 - selectedWrong.length);
            selectedWrong = [...selectedWrong, ...others];
        }

        const options = [correctItem, ...selectedWrong].sort(() => 0.5 - Math.random());

        options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'answer-widget';
            const name = getLocalizedName(option);
            btn.innerHTML = `
                <span>${name}</span>
                <span style="font-size:0.8rem; color:var(--text-secondary); font-style:italic;">${option.scientific}</span>
            `;
            btn.dataset.id = option.id;
            btn.addEventListener('click', () => handleAnswerClick(btn, option.id === correctItem.id));
            answersContainer.appendChild(btn);
        });
    }

    function handleAnswerClick(clickedBtn, isCorrect) {
        const allBtns = answersContainer.querySelectorAll('.answer-widget');
        allBtns.forEach(btn => btn.disabled = true);
        btnHint.disabled = true;

        if (isCorrect) {
            score++;
            addToCollection(currentCorrectAnswer.id);
            clickedBtn.classList.add('correct');
            scoreText.textContent = score;
            awardXP(XP_PER_CORRECT, clickedBtn);
        } else {
            clickedBtn.classList.add('wrong');
            const correctBtn = answersContainer.querySelector(`.answer-widget[data-id="${currentCorrectAnswer.id}"]`);
            if (correctBtn) correctBtn.classList.add('correct');
        }

        progressFill.style.width = `${((currentQuestionIndex + 1) / activeQuizPool.length) * 100}%`;
        btnNextQuestion.classList.remove('hidden');
    }

    function loadNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < activeQuizPool.length) {
            renderQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        document.getElementById('final-score').textContent = score;
        const msgElem = document.getElementById('score-message');
        const detElem = document.getElementById('score-details');
        const dict = i18n[currentLang];
        const total = activeQuizPool.length;

        if (score === total) {
            msgElem.textContent = dict.perfect;
            detElem.textContent = dict.perfectDesc;
        } else if (score >= total * 0.7) {
            msgElem.textContent = dict.great;
            detElem.textContent = dict.greatDesc;
        } else if (score >= total * 0.4) {
            msgElem.textContent = dict.notbad;
            detElem.textContent = dict.notbadDesc;
        } else {
            msgElem.textContent = dict.practice;
            detElem.textContent = dict.practiceDesc;
        }

        showScreen('screen-results');
    }

    // --- Encyclopedia ---
    function renderSkeletons(count = 8) {
        learnGrid.innerHTML = '';
        for (let i = 0; i < count; i++) {
            learnGrid.innerHTML += `
                <div class="skeleton-card">
                    <div class="skeleton-img"></div>
                    <div class="skeleton-line"></div>
                    <div class="skeleton-line short"></div>
                </div>`;
        }
    }

    function renderEncyclopedia(filter, subFilter) {
        // Show skeletons first
        renderSkeletons(8);

        // Small delay to show skeleton (simulates async load feel)
        setTimeout(() => {
            learnGrid.innerHTML = '';
            const allData = window.speciesData || [];
            const searchTerm = speciesSearch ? speciesSearch.value.toLowerCase().trim() : '';

            let items = [];
            if (filter === 'all') {
                items = allData;
            } else if (filter === 'collected') {
                items = allData.filter(i => collectedSpecies.includes(i.id));
            } else {
                const cats = GROUP_TO_CATEGORIES[filter];
                if (cats) {
                    items = allData.filter(i => cats.includes(i.category));
                } else {
                    items = allData.filter(i => i.category === filter);
                }
            }

            // Sub-filter logic
            if (subFilter && subFilter !== 'all') {
                const MAMMAL_FAMILIES = ['Canidae','Felidae','Mustelidae','Sciuridae','Muridae',
                    'Cricetidae','Castoridae','Leporidae','Cervidae','Suidae',
                    'Vespertilionidae','Erinaceidae','Talpidae'];
                const AQUATIC_FAMILIES = ['Phocidae','Phocoenidae'];
                const REPTILE_FAMILIES = ['Anguidae','Lacertidae','Colubridae','Viperidae'];
                const AMPHIBIAN_FAMILIES = ['Ranidae','Bufonidae','Salamandridae'];
                const PASSERINE_FAMILIES = ['Turdidae','Muscicapidae','Sylviidae','Fringillidae',
                    'Corvidae','Paridae','Alaudidae','Hirundinidae','Motacillidae','Sturnidae',
                    'Troglodytidae','Regulidae','Prunellidae','Emberizidae','Sittidae',
                    'Certhiidae','Phylloscopidae','Aegithalidae','Passeridae'];
                const RAPTOR_FAMILIES = ['Accipitridae','Falconidae'];
                const WATER_FAMILIES = ['Anatidae','Rallidae','Laridae','Ardeidae'];
                const BASIDIOMYCOTA_FAMILIES = ['Agaricaceae','Physalacriaceae','Pleurotaceae','Psathyrellaceae',
                    'Hymenogastraceae','Hydnangiaceae','Tricholomataceae','Marasmiaceae','Bolbitiaceae',
                    'Boletaceae','Sclerodermataceae','Fomitopsidaceae','Polyporaceae','Fistulinaceae',
                    'Cantharellus','Russulaceae','Amanitaceae','Auriculariaceae','Tremellaceae',
                    'Schizophyllaceae','Phallaceae','Cantharellaceae'];
                const ASCOMYCOTA_FAMILIES = ['Pezizaceae','Sarcoscyphaceae','Discinaceae',
                    'Helvellaceae','Morchellaceae','Tuberaceae','Nectriaceae','Teloschistaceae',
                    'Hypoxylaceae','Xylariaceae'];
                items = items.filter(i => {
                    const fam = i.family || '';
                    switch(subFilter) {
                        // --- Dieren group sub-filters ---
                        case 'dieren_mammals':  return i.category === 'fauna' && (MAMMAL_FAMILIES.includes(fam) || AQUATIC_FAMILIES.includes(fam));
                        case 'dieren_birds':    return i.category === 'birds';
                        case 'dieren_reptiles': return i.category === 'fauna' && REPTILE_FAMILIES.includes(fam);
                        case 'dieren_amphibians': return i.category === 'fauna' && AMPHIBIAN_FAMILIES.includes(fam);
                        case 'dieren_insects':  return i.category === 'insects';
                        // --- Planten group sub-filters ---
                        case 'planten_flora':   return i.category === 'flora';
                        case 'planten_trees':   return i.category === 'trees';
                        case 'planten_agriculture': return i.category === 'agriculture';
                        // --- Fungi group sub-filters ---
                        case 'fungi_basidio':   return BASIDIOMYCOTA_FAMILIES.includes(fam);
                        case 'fungi_asco':      return ASCOMYCOTA_FAMILIES.includes(fam);
                        // --- Legacy / 3rd-level sub-filters ---
                        case 'fauna_mammal':    return MAMMAL_FAMILIES.includes(fam) && !AQUATIC_FAMILIES.includes(fam);
                        case 'fauna_reptile':   return REPTILE_FAMILIES.includes(fam);
                        case 'fauna_amphibian': return AMPHIBIAN_FAMILIES.includes(fam);
                        case 'fauna_aquatic':   return AQUATIC_FAMILIES.includes(fam);
                        case 'birds_passerine': return PASSERINE_FAMILIES.includes(fam);
                        case 'birds_raptor':    return RAPTOR_FAMILIES.includes(fam);
                        case 'birds_water':     return WATER_FAMILIES.includes(fam);
                        case 'birds_other': {
                            const allBirdFams = [...PASSERINE_FAMILIES,...RAPTOR_FAMILIES,...WATER_FAMILIES];
                            return !allBirdFams.includes(fam);
                        }
                        case 'flora_monocot':   return i.plantGrade === 'monocot';
                        case 'flora_dicot':     return i.plantGrade === 'dicot';
                        case 'trees_conifer':   return ['Pinaceae','Taxaceae','Cupressaceae'].includes(fam);
                        case 'trees_deciduous': return !['Pinaceae','Taxaceae','Cupressaceae'].includes(fam);
                        default: return true;
                    }
                });
            }

            if (searchTerm) {
                items = items.filter(i => {
                    const name = (typeof i.name === 'object' ? i.name[currentLang] : (i.name || '')).toLowerCase();
                    const sci = (i.scientific || '').toLowerCase();
                    const fam = (i.family || '').toLowerCase();
                    return name.includes(searchTerm) || sci.includes(searchTerm) || fam.includes(searchTerm);
                });
            }

            // No results state
            if (items.length === 0) {
                const dict = i18n[currentLang];
                learnGrid.innerHTML = `
                    <div class="no-results-state">
                        <div class="no-results-icon">🔍</div>
                        <div class="no-results-title">${dict.noResults}</div>
                        <div class="no-results-sub">${dict.noResultsSub}</div>
                    </div>`;
                return;
            }

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'learn-card';
                const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
                const catName = i18n[currentLang][item.category] || item.category;
                const isCollected = collectedSpecies.includes(item.id);
                if (isCollected) card.classList.add('collected');

                const gradeTag = item.plantGrade
                ? `<span class="plant-grade-badge plant-grade-${item.plantGrade}">${item.plantGrade === 'monocot' ? 'Monocot' : 'Dicot'}</span>`
                : '';
            const iucnColors = { LC:'#00b450', NT:'#7cc800', VU:'#c8960a', EN:'#d05000', CR:'#c81414' };
            const iucnBg = { LC:'rgba(0,180,80,0.12)', NT:'rgba(150,210,0,0.12)', VU:'rgba(240,170,0,0.12)', EN:'rgba(240,100,0,0.12)', CR:'rgba(220,20,20,0.12)' };
            const iucnTag = item.iucn && item.iucn !== 'LC'
                ? `<span class="iucn-card-badge" style="background:${iucnBg[item.iucn]||''};color:${iucnColors[item.iucn]||'#aaa'};border:1px solid ${iucnColors[item.iucn]||'#aaa'}33">${item.iucn}</span>`
                : '';
            card.innerHTML = `
                    <div class="collected-badge ${isCollected ? '' : 'hidden'}">✓</div>
                    ${iucnTag}
                    <img src="${item.image}" class="learn-card-img" alt="${name}" loading="lazy" referrerpolicy="no-referrer"
                         onerror="this.style.background='rgba(61,184,99,0.1)'; this.src='';">
                    <div class="learn-card-info">
                        <div class="learn-card-title">${name}</div>
                        ${item.scientific ? `<div class="learn-card-scientific">${item.scientific}</div>` : ''}
                        <div class="learn-card-type">${catName}</div>
                        ${gradeTag}
                    </div>`;
                card.addEventListener('click', () => openModal(item));
                learnGrid.appendChild(card);
            });
        }, 300); // 300ms skeleton flash — feels snappy but visible
    }

    async function openModal(item) {
        if (!detailsModal) return;

        const lang = currentLang;
        const getName = (obj) => typeof obj === 'object' ? (obj[lang] || obj['en'] || Object.values(obj)[0]) : (obj || '---');

        document.getElementById('modal-title').textContent = getName(item.name);
        document.getElementById('modal-scientific').textContent = item.scientific || '';
        document.getElementById('modal-tag').textContent = i18n[lang][item.category] || item.category;
        document.getElementById('modal-description').textContent = getName(item.description) || '---';
        document.getElementById('modal-habitat-text').textContent = getName(item.habitat) || '---';
        document.getElementById('modal-rarity-text').textContent = getName(item.rarity) || '---';
        document.getElementById('modal-size-text').textContent = item.size ? getName(item.size) : '---';
        document.getElementById('modal-diet-text').textContent = item.diet ? getName(item.diet) : '---';

        // Fun Fact
        const funfactSection = document.getElementById('modal-funfact-section');
        const funfactText = document.getElementById('modal-funfact-text');
        if (item.funfact) {
            const fact = getName(item.funfact);
            funfactText.textContent = fact;
            funfactSection.style.display = 'block';
            // Update the section label for current language
            const lbl = document.getElementById('label-funfact');
            if (lbl) lbl.textContent = i18n[lang].funfact;
        } else {
            funfactSection.style.display = 'none';
        }

        // Infobox image — build gallery if multiple images
        const infoboxImageContainer = document.querySelector('.infobox-image');
        const allImages = [item.image];
        if (item.images && item.images.length) {
            item.images.forEach(url => { if (url && !allImages.includes(url)) allImages.push(url); });
        }
        const uniqueImages = allImages.filter(Boolean);

        if (uniqueImages.length <= 1) {
            // Single image — simple display
            infoboxImageContainer.innerHTML = `<img id="modal-image" src="${item.image}" alt="Species Detail" referrerpolicy="no-referrer">`;
        } else {
            // Gallery mode with CSS scroll-snap
            infoboxImageContainer.innerHTML = `
                <div class="gallery-scroll">${uniqueImages.map((url, i) => `<img class="gallery-img" src="${url}" alt="Photo ${i+1}" referrerpolicy="no-referrer">`).join('')}</div>
                <div class="gallery-dots">${uniqueImages.map((_, i) => `<span class="gallery-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`).join('')}</div>
                <button class="gallery-arrow gallery-prev" aria-label="Previous">&#8249;</button>
                <button class="gallery-arrow gallery-next" aria-label="Next">&#8250;</button>
            `;

            const scrollEl = infoboxImageContainer.querySelector('.gallery-scroll');
            const dots = infoboxImageContainer.querySelectorAll('.gallery-dot');
            const prevBtn = infoboxImageContainer.querySelector('.gallery-prev');
            const nextBtn = infoboxImageContainer.querySelector('.gallery-next');

            // Update dots on scroll
            scrollEl.addEventListener('scroll', () => {
                const idx = Math.round(scrollEl.scrollLeft / scrollEl.clientWidth);
                dots.forEach((d, i) => d.classList.toggle('active', i === idx));
            });

            // Dot click → scroll to image
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const idx = parseInt(dot.dataset.idx);
                    scrollEl.scrollTo({ left: idx * scrollEl.clientWidth, behavior: 'smooth' });
                });
            });

            // Arrow buttons
            prevBtn.addEventListener('click', () => {
                scrollEl.scrollBy({ left: -scrollEl.clientWidth, behavior: 'smooth' });
            });
            nextBtn.addEventListener('click', () => {
                scrollEl.scrollBy({ left: scrollEl.clientWidth, behavior: 'smooth' });
            });
        }

        document.getElementById('modal-infobox-scientific').textContent = item.scientific || '---';
        document.getElementById('modal-infobox-family').textContent = item.family || '---';
        document.getElementById('modal-infobox-category').textContent = i18n[lang][item.category] || item.category;
        document.getElementById('modal-habitat').textContent = getName(item.habitat) || '---';
        document.getElementById('modal-rarity').textContent = getName(item.rarity) || '---';
        document.getElementById('modal-infobox-size').textContent = item.size ? getName(item.size) : '---';
        document.getElementById('modal-infobox-diet').textContent = item.diet ? getName(item.diet) : '---';

        // Plant grade row
        const existingGradeRow = document.getElementById('modal-grade-row');
        if (existingGradeRow) existingGradeRow.remove();
        if (item.plantGrade) {
            const table = document.querySelector('.infobox-table');
            if (table) {
                const tr = document.createElement('tr');
                tr.id = 'modal-grade-row';
                tr.innerHTML = `<th>Type</th><td><span style="font-weight:700;color:${item.plantGrade==='monocot'?'#c8870a':'#2a7a44'}">${item.plantGrade === 'monocot' ? '🌷 Monocotyl' : '🌼 Dicotyl'}</span></td>`;
                table.appendChild(tr);
            }
        }

        // ── IUCN Status ────────────────────────────────────────────────────
        const iucnRow = document.getElementById('modal-iucn-row');
        const iucnBadge = document.getElementById('modal-iucn-badge');
        if (item.iucn && iucnRow && iucnBadge) {
            iucnBadge.textContent = item.iucn;
            iucnBadge.className = 'iucn-badge iucn-' + item.iucn.toLowerCase().replace('/', '-');
            iucnRow.style.display = '';
        } else if (iucnRow) {
            iucnRow.style.display = 'none';
        }

        // ── Xeno-canto link (birds only) ────────────────────────────────────
        const xenoSection = document.getElementById('modal-xeno-section');
        const xenoLink = document.getElementById('modal-xeno-link');
        const xenoLabel = document.getElementById('xeno-label');
        if (item.xenoCanto && xenoSection && xenoLink) {
            xenoLink.href = item.xenoCanto;
            if (xenoLabel) {
                xenoLabel.textContent = currentLang === 'fr'
                    ? 'Écouter sur Xeno-canto'
                    : currentLang === 'en'
                    ? 'Listen on Xeno-canto'
                    : 'Beluister geluiden op Xeno-canto';
            }
            xenoSection.style.display = '';
        } else if (xenoSection) {
            xenoSection.style.display = 'none';
        }

        detailsModal.classList.remove('hidden');

        btnCloseModal.onclick = () => detailsModal.classList.add('hidden');
    }

    if (detailsModal) {
        detailsModal.addEventListener('click', (e) => {
            if (e.target === detailsModal) detailsModal.classList.add('hidden');
        });
    }

    // --- BioGids Modal Setup ---
    const bioguideDetailModal = document.getElementById('biogids-detail-modal');
    const btnCloseBioguideModal = document.getElementById('btn-close-biogids-modal');
    const bioguideSearch = document.getElementById('biogids-search');

    // Store i18n and openModal globally for BioGids functions
    window.i18nData = i18n;
    window.openModalFunc = openModal;

    // Attach search handler
    if (bioguideSearch) {
        bioguideSearch.addEventListener('input', (e) => renderBioguide(e.target.value));
    }

    // Attach modal close handlers
    if (btnCloseBioguideModal) {
        btnCloseBioguideModal.onclick = () => bioguideDetailModal.classList.add('hidden');
    }

    if (bioguideDetailModal) {
        bioguideDetailModal.addEventListener('click', (e) => {
            if (e.target === bioguideDetailModal) bioguideDetailModal.classList.add('hidden');
        });
    }

    // --- Icon Injection ---
    function injectIcons() {
        document.querySelectorAll('.back-svg-target').forEach(el => el.innerHTML = ICONS.back);
        document.querySelectorAll('.search-svg-target').forEach(el => el.innerHTML = ICONS.search);
        document.querySelectorAll('.play-svg-target').forEach(el => el.innerHTML = ICONS.play);
        document.querySelectorAll('.learn-svg-target').forEach(el => el.innerHTML = ICONS.learn);
        document.querySelectorAll('.quiz-svg-target').forEach(el => el.innerHTML = ICONS.quiz);
        document.querySelectorAll('.biogids-svg-target').forEach(el => el.innerHTML = ICONS.biogids);
    }

    // --- Badges ---
    const BADGES = [
        { id: 'first_find', icon: '🌱', nl: 'Beginner Ontdekker', en: 'First Discovery', fr: 'Première Découverte', goal: 1 },
        { id: 'bird_lover', icon: '🐦', nl: 'Vogelvriend', en: 'Bird Lover', fr: 'Ami des oiseaux', goal: 5, category: 'birds' },
        { id: 'nature_master', icon: '🌳', nl: 'Natuurmeester', en: 'Nature Master', fr: 'Maître de la nature', goal: 50 }
    ];

    function checkBadges() {
        const earned = JSON.parse(localStorage.getItem('earnedBadges') || '[]');
        let newlyEarned = [];

        BADGES.forEach(badge => {
            if (earned.includes(badge.id)) return;
            let count = 0;
            if (badge.category) {
                count = (window.speciesData || []).filter(s => collectedSpecies.includes(s.id) && s.category === badge.category).length;
            } else {
                count = collectedSpecies.length;
            }
            if (count >= badge.goal) {
                earned.push(badge.id);
                newlyEarned.push(badge);
            }
        });

        if (newlyEarned.length > 0) {
            localStorage.setItem('earnedBadges', JSON.stringify(earned));
            newlyEarned.forEach(b => alert(`🏆 Badge Earned: ${b[currentLang]}`));
        }
    }


    // ─── IN-APP PHYLOGENY ────────────────────────────────────────────────────
    function initPhylo() {
        const allData = window.speciesData || [];
        const pFamIdx = {};
        allData.forEach(sp => { const f = sp.family||'Unknown'; if(!pFamIdx[f]) pFamIdx[f]=[]; pFamIdx[f].push(sp); });
        const PHYLO_TAXONOMY = [
          {id:'animalia',icon:'🐾',label:'Dieren',sci:'Animalia',color:'#3db863',children:[
            {id:'mammalia',icon:'🦊',label:'Zoogdieren',sci:'Mammalia',color:'#3db863',cats:['fauna'],children:[
              {id:'carnivora',icon:'🦊',label:'Vleeseters',sci:'Carnivora',color:'#3db863',families:['Canidae','Felidae','Mustelidae','Phocidae','Phocoenidae']},
              {id:'rodentia',icon:'🐿️',label:'Knaagdieren',sci:'Rodentia',color:'#5ec87a',families:['Sciuridae','Muridae','Cricetidae','Castoridae']},
              {id:'lagomorpha',icon:'🐇',label:'Haasachtigen',sci:'Lagomorpha',color:'#5ec87a',families:['Leporidae']},
              {id:'artiodactyla',icon:'🐗',label:'Evenhoevigen',sci:'Artiodactyla',color:'#5ec87a',families:['Cervidae','Suidae']},
              {id:'chiroptera',icon:'🦇',label:'Vleermuizen',sci:'Chiroptera',color:'#8ad4b0',families:['Vespertilionidae']},
              {id:'eulipotyphla',icon:'🦔',label:'Insecteneters',sci:'Eulipotyphla',color:'#8ad4b0',families:['Erinaceidae','Talpidae']},
            ]},
            {id:'aves',icon:'🐦',label:'Vogels',sci:'Aves',color:'#56c4e8',cats:['birds'],children:[
              {id:'passeriformes',icon:'🎵',label:'Zangvogels',sci:'Passeriformes',color:'#56c4e8',families:['Turdidae','Muscicapidae','Sylviidae','Fringillidae','Corvidae','Paridae','Alaudidae','Hirundinidae','Motacillidae','Sturnidae','Troglodytidae','Regulidae','Prunellidae','Emberizidae','Sittidae','Certhiidae','Phylloscopidae','Aegithalidae','Passeridae']},
              {id:'accipitriformes',icon:'🦅',label:'Roofvogels',sci:'Accipitriformes/Falconiformes',color:'#a0d8ef',families:['Accipitridae','Falconidae']},
              {id:'anseriformes',icon:'🦆',label:'Eendachtigen',sci:'Anseriformes',color:'#78c8e8',families:['Anatidae']},
              {id:'pelecaniformes',icon:'🕊️',label:'Reigers',sci:'Pelecaniformes',color:'#78c8e8',families:['Ardeidae']},
              {id:'strigiformes',icon:'🦉',label:'Uilen',sci:'Strigiformes',color:'#a0d8ef',families:['Strigidae']},
              {id:'piciformes',icon:'🪵',label:'Spechten',sci:'Piciformes',color:'#a0d8ef',families:['Picidae']},
              {id:'coraciiformes',icon:'💎',label:'IJsvogels',sci:'Coraciiformes',color:'#78c8e8',families:['Alcedinidae']},
              {id:'gruiformes',icon:'🐦',label:'Rallen',sci:'Gruiformes',color:'#78c8e8',families:['Rallidae']},
              {id:'charadriiformes',icon:'🕊️',label:'Meeuwen',sci:'Charadriiformes',color:'#78c8e8',families:['Laridae']},
              {id:'cuculiformes',icon:'🐦',label:'Koekoeken',sci:'Cuculiformes',color:'#a0d8ef',families:['Cuculidae']},
              {id:'columbiformes',icon:'🕊️',label:'Duiven',sci:'Columbiformes',color:'#a0d8ef',families:['Columbidae']},
              {id:'galliformes',icon:'🐔',label:'Hoenders',sci:'Galliformes',color:'#a0d8ef',families:['Phasianidae']},
              {id:'apodiformes',icon:'✈️',label:'Gierzwaluwen',sci:'Apodiformes',color:'#a0d8ef',families:['Apodidae']},
            ]},
            {id:'reptilia',icon:'🦎',label:'Reptielen',sci:'Reptilia',color:'#8de87a',cats:['fauna'],children:[
              {id:'squamata_l',icon:'🦎',label:'Hagedissen',sci:'Squamata-Lacertilia',color:'#8de87a',families:['Anguidae','Lacertidae']},
              {id:'squamata_s',icon:'🐍',label:'Slangen',sci:'Squamata-Serpentes',color:'#8de87a',families:['Colubridae','Viperidae']},
            ]},
            {id:'amphibia',icon:'🐸',label:'Amfibieen',sci:'Amphibia',color:'#60d4a0',cats:['fauna'],children:[
              {id:'anura',icon:'🐸',label:'Kikkers en Padden',sci:'Anura',color:'#60d4a0',families:['Ranidae','Bufonidae']},
              {id:'urodela',icon:'🦎',label:'Salamanders',sci:'Urodela',color:'#60d4a0',families:['Salamandridae']},
            ]},
            {id:'insecta',icon:'🦋',label:'Insecten',sci:'Insecta',color:'#f0c05a',cats:['insects'],children:[
              {id:'lepidoptera',icon:'🦋',label:'Vlinders en Motten',sci:'Lepidoptera',color:'#f0c05a',families:['Nymphalidae','Pieridae','Lycaenidae','Papilionidae','Hesperiidae','Sphingidae','Saturniidae']},
              {id:'coleoptera',icon:'🪲',label:'Kevers',sci:'Coleoptera',color:'#e8a030',families:['Coccinellidae','Lucanidae','Carabidae','Scarabaeidae','Lampyridae','Forficulidae','Geotrupidae']},
              {id:'hymenoptera',icon:'🐝',label:'Vliesvleugeligen',sci:'Hymenoptera',color:'#f8d070',families:['Apidae','Vespidae','Formicidae','Siricidae']},
              {id:'diptera',icon:'🪰',label:'Vliegen en Muggen',sci:'Diptera',color:'#d8b060',families:['Syrphidae','Calliphoridae','Muscidae','Culicidae']},
              {id:'odonata',icon:'💙',label:'Libellen en Juffers',sci:'Odonata',color:'#80d8f8',families:['Aeshnidae','Libellulidae','Coenagrionidae']},
              {id:'orthoptera',icon:'🦗',label:'Sprinkhanen',sci:'Orthoptera',color:'#d8c860',families:['Acrididae','Gryllidae','Tettigoniidae']},
              {id:'hemiptera',icon:'🔴',label:'Wantsen',sci:'Hemiptera',color:'#e87070',families:['Pentatomidae','Pyrrhocoridae']},
              {id:'mecoptera',icon:'🦂',label:'Schorpioenvliegen',sci:'Mecoptera',color:'#d8a060',families:['Panorpidae']},
            ]},
          ]},
          {id:'plantae',icon:'🌿',label:'Planten',sci:'Plantae',color:'#a8d870',children:[
            {id:'gymnospermae',icon:'🌲',label:'Naaldbomen (Naaktzadigen)',sci:'Gymnospermae',color:'#7ab860',cats:['trees'],children:[
              {id:'pinales',icon:'🌲',label:'Naaldbomen - Pinales',sci:'Pinales',color:'#7ab860',families:['Pinaceae','Taxaceae','Cupressaceae']},
            ]},
            {id:'angiospermae',icon:'🌸',label:'Bedektzadigen',sci:'Angiospermae',color:'#a8d870',children:[
              {id:'monocots',icon:'🌷',label:'Monocotylen',sci:'Liliopsida',color:'#f0c05a',cats:['flora'],children:[
                {id:'alismatales',icon:'💧',label:'Kroosachtigen',sci:'Alismatales',color:'#60b8c8',families:['Araceae','Alismataceae']},
                {id:'asparagales',icon:'🌸',label:'Asparagales',sci:'Asparagales',color:'#f0c05a',families:['Amaryllidaceae','Asparagaceae','Orchidaceae','Iridaceae']},
              ]},
              {id:'dicots',icon:'🌼',label:'Dicotylen',sci:'Eudicotyledones',color:'#7ec860',cats:['flora','trees','agriculture'],children:[
                {id:'fagales',icon:'🍂',label:'Beukachtigen (Loofbomen)',sci:'Fagales',color:'#6ab850',families:['Fagaceae','Betulaceae']},
                {id:'sapindales',icon:'🍁',label:'Esdoornachtigen (Loofbomen)',sci:'Sapindales',color:'#e07840',families:['Sapindaceae']},
                {id:'malvales',icon:'🌳',label:'Lindeachtigen (Loofbomen)',sci:'Malvales',color:'#90d870',families:['Malvaceae','Adoxaceae']},
                {id:'rosales_arb',icon:'🌳',label:'Rozenachtigen - Bomen',sci:'Rosales arborescent',color:'#90d870',families:['Rosaceae','Ulmaceae','Cannabaceae']},
                {id:'oleales_arb',icon:'🌳',label:'Olijfachtigen - Bomen',sci:'Lamiales arborescent',color:'#90d870',families:['Oleaceae']},
                {id:'aquifoliales',icon:'🌿',label:'Hulstfamilie',sci:'Aquifoliales',color:'#50a840',families:['Aquifoliaceae']},
                {id:'salicales',icon:'🌳',label:'Wilgenachtigen',sci:'Malpighiales',color:'#a060d0',families:['Salicaceae']},
                {id:'asterales_d',icon:'🌻',label:'Composieten',sci:'Asterales',color:'#e8d040',families:['Asteraceae','Caprifoliaceae','Campanulaceae','Menyanthaceae']},
                {id:'lamiales_d',icon:'🌿',label:'Lipbloemigen',sci:'Lamiales',color:'#90d870',families:['Lamiaceae','Plantaginaceae','Boraginaceae','Orobanchaceae','Scrophulariaceae']},
                {id:'caryophyllales_d',icon:'🌸',label:'Anjerfamilie',sci:'Caryophyllales',color:'#e89090',families:['Caryophyllaceae','Amaranthaceae','Droseraceae','Resedaceae','Polygonaceae','Portulacaceae']},
                {id:'nymphaeales_d',icon:'🌊',label:'Waterlelies',sci:'Nymphaeales',color:'#60b8e8',families:['Nymphaeaceae']},
                {id:'ranunculales_d',icon:'🌼',label:'Boterbloemen',sci:'Ranunculales',color:'#f8e050',families:['Ranunculaceae','Papaveraceae']},
                {id:'fabales_d',icon:'🫘',label:'Vlinderbloemigen',sci:'Fabales',color:'#70c890',families:['Fabaceae']},
                {id:'brassicales_d',icon:'🥦',label:'Kruisbloemigen',sci:'Brassicales',color:'#90d870',families:['Brassicaceae']},
                {id:'apiales_d',icon:'☂️',label:'Schermbloemigen',sci:'Apiales',color:'#e8f0a0',families:['Apiaceae','Araliaceae']},
                {id:'ericales_d',icon:'🌸',label:'Heidefamilie e.a.',sci:'Ericales',color:'#c060d8',families:['Ericaceae','Primulaceae','Hypericaceae','Onagraceae','Lythraceae','Balsaminaceae']},
                {id:'saxifragales_d',icon:'🌿',label:'Steenbreek',sci:'Saxifragales',color:'#90d870',families:['Saxifragaceae','Grossulariaceae','Crassulaceae']},
                {id:'malpighiales_d',icon:'🌸',label:'Vioolachtigen',sci:'Malpighiales',color:'#a060d0',families:['Violaceae','Geraniaceae']},
                {id:'santalales_d',icon:'🌿',label:'Maretak',sci:'Santalales',color:'#80c060',families:['Santalaceae']},
                {id:'gentianales_d',icon:'🌿',label:'Walstro',sci:'Gentianales',color:'#90d870',families:['Rubiaceae']},
                {id:'celastrales_d',icon:'🌿',label:'Bitterzoet',sci:'Celastrales',color:'#90d870',families:['Celastraceae']},
                {id:'solanales_d',icon:'🍅',label:'Nachtschadefamilie',sci:'Solanales',color:'#e06050',families:['Solanaceae','Convolvulaceae']},
                {id:'buxales_d',icon:'🌿',label:'Buxusfamilie',sci:'Buxales',color:'#70b870',families:['Buxaceae']},
                {id:'rosales_herb',icon:'🌿',label:'Brandnetelachtigen e.a.',sci:'Rosales herbaceous',color:'#90d870',families:['Urticaceae','Elaeagnaceae']},
                {id:'cornales_d',icon:'🌿',label:'Kornoelje',sci:'Cornales',color:'#70b870',families:['Cornaceae']},
              ]},
            ]},
          ]},
          {id:'fungi_k',icon:'🍄',label:'Schimmels',sci:'Fungi',color:'#c87ef0',cats:['fungi'],children:[
            {id:'basidiomycota',icon:'🍄',label:'Basidiomycota',sci:'Basidiomycota',color:'#c87ef0',children:[
              {id:'agaricales',icon:'🍄',label:'Plaatjeszwammen',sci:'Agaricales',color:'#d090f8',families:['Agaricaceae','Physalacriaceae','Pleurotaceae','Psathyrellaceae','Hymenogastraceae','Hydnangiaceae','Tricholomataceae','Marasmiaceae','Bolbitiaceae']},
              {id:'boletales',icon:'🍄',label:'Boleten',sci:'Boletales',color:'#c070e0',families:['Boletaceae','Sclerodermataceae','Fomitopsidaceae']},
              {id:'polyporales',icon:'🍄',label:'Poriezwammen',sci:'Polyporales',color:'#d090f8',families:['Polyporaceae','Fistulinaceae','Cantharellaceae']},
              {id:'russulales',icon:'🍄',label:'Melkzwammen',sci:'Russulales',color:'#e0a0f0',families:['Russulaceae']},
              {id:'amanitales',icon:'🍄',label:'Amaniten',sci:'Amanitales',color:'#d090f8',families:['Amanitaceae']},
              {id:'auriculariales',icon:'🍄',label:'Trilzwammen',sci:'Auriculariales',color:'#e0b8f8',families:['Auriculariaceae','Tremellaceae','Schizophyllaceae']},
              {id:'phallales',icon:'🍄',label:'Stinkzwammen',sci:'Phallales',color:'#a060c8',families:['Phallaceae']},
              {id:'xylariales',icon:'🍄',label:'Houtzwammen',sci:'Xylariales',color:'#c070e0',families:['Xylariaceae','Hypoxylaceae']},
            ]},
            {id:'ascomycota',icon:'🧫',label:'Ascomycota',sci:'Ascomycota',color:'#a060c8',children:[
              {id:'pezizales',icon:'🧫',label:'Bekerzwammen',sci:'Pezizales',color:'#b878d8',families:['Pezizaceae','Pyronemataceae','Sarcoscyphaceae','Discinaceae','Helvellaceae','Morchellaceae','Tuberaceae']},
              {id:'hypocreales',icon:'🧫',label:'Hypocreales',sci:'Hypocreales',color:'#a060c8',families:['Nectriaceae']},
              {id:'teloschistales',icon:'🟡',label:'Korstmossen',sci:'Teloschistales',color:'#f0d850',families:['Teloschistaceae']},
            ]},
          ]},
        ];

        let pGroup = 'all', pSearch = '';
        const pGcats = { all:null, dieren:['fauna','birds','insects'], planten:['flora','trees','agriculture'], fungi:['fungi'] };

        function pSpMatch(sp) {
            const cats = pGcats[pGroup];
            if (cats && !cats.includes(sp.category)) return false;
            if (pSearch) {
                const n = sp.name ? (typeof sp.name==='object' ? (sp.name.nl||sp.name.en||'') : sp.name) : sp.scientific;
                return n.toLowerCase().includes(pSearch) || sp.scientific.toLowerCase().includes(pSearch);
            }
            return true;
        }
        function pGetName(sp) {
            const n = sp.name; if (!n) return sp.scientific;
            return typeof n==='object' ? (n[currentLang]||n.nl||n.en||sp.scientific) : n;
        }
        function pCountUnder(node) {
            let c = 0;
            (node.families||[]).forEach(f => (pFamIdx[f]||[]).forEach(sp => { if(pSpMatch(sp)) c++; }));
            (node.children||[]).forEach(ch => { c += pCountUnder(ch); });
            return c;
        }
        function pCollectCats(node) {
            let cats = [...(node.cats||[])];
            (node.children||[]).forEach(c => cats.push(...pCollectCats(c)));
            (node.families||[]).forEach(f => (pFamIdx[f]||[]).forEach(sp => { if(sp.category) cats.push(sp.category); }));
            return [...new Set(cats)];
        }
        function pBuildFam(fam, depth) {
            const sps = (pFamIdx[fam]||[]).filter(pSpMatch);
            if (!sps.length) return null;
            const li = document.createElement('li'); li.className = 'phylo-ci';
            const fr = document.createElement('div'); fr.className = 'phylo-frow';
            fr.style.paddingLeft = `${depth*18+28}px`;
            fr.innerHTML = `<span class="phylo-flabel">${fam}</span><span class="phylo-fcnt">${sps.length}</span>`;
            li.appendChild(fr);
            const ul = document.createElement('ul'); ul.className = 'phylo-children phylo-clade';
            sps.forEach(sp => {
                const sli = document.createElement('li'); sli.className = 'phylo-ci';
                const row = document.createElement('div'); row.className = 'phylo-sprow';
                row.style.paddingLeft = `${depth*18+38}px`;
                const g = sp.plantGrade;
                row.innerHTML = `<img class="phylo-spthumb" src="${sp.image||''}" alt="" loading="lazy" onerror="this.style.opacity='0.15'">
                    <div class="phylo-spinfo"><div class="phylo-spname">${pGetName(sp)}</div><div class="phylo-spsci">${sp.scientific}</div></div>
                    ${g ? `<span class="phylo-spbadge phylo-b-${g==='monocot'?'mono':'dico'}">${g==='monocot'?'Mono':'Dicot'}</span>` : ''}`;
                row.addEventListener('click', () => openModal(sp));
                sli.appendChild(row); ul.appendChild(sli);
            });
            li.appendChild(ul); return li;
        }
        function pBuildNode(node, depth) {
            const cnt = pCountUnder(node); if (cnt === 0) return null;
            const li = document.createElement('li'); li.className = 'phylo-ci';
            const hasKids = (node.children||[]).length || (node.families||[]).length;
            const row = document.createElement('div'); row.className = 'phylo-nrow';
            row.style.paddingLeft = `${depth*18}px`;
            const col = node.color || '#aaa';
            row.innerHTML = `${hasKids ? `<button class="phylo-tog" onclick="event.stopPropagation();(function(b){b.closest('.phylo-ci').classList.toggle('collapsed');b.textContent=b.closest('.phylo-ci').classList.contains('collapsed')?'+':'−'})(this)">−</button>` : `<div class="phylo-tog-sp"></div>`}
                <span class="phylo-nicon">${node.icon||'•'}</span>
                <span class="phylo-nlabel" style="border-color:${col}">${node.label}</span>
                <span class="phylo-nsci">${node.sci}</span>
                <span class="phylo-ncnt">${cnt}</span>`;
            li.appendChild(row);
            if (hasKids) {
                const ul = document.createElement('ul'); ul.className = 'phylo-children phylo-clade';
                (node.families||[]).forEach(f => { const x=pBuildFam(f,depth+1); if(x) ul.appendChild(x); });
                (node.children||[]).forEach(c => { const x=pBuildNode(c,depth+1); if(x) ul.appendChild(x); });
                if (ul.children.length) li.appendChild(ul);
            }
            return li;
        }
        function pRender() {
            const wrap = document.getElementById('phylo-tree-wrap');
            const empty = document.getElementById('phylo-empty');
            if (!wrap) return;
            wrap.innerHTML = ''; if (empty) { wrap.appendChild(empty); empty.style.display = 'none'; }
            const ul = document.createElement('ul'); ul.className = 'phylo-clade';
            let total = 0;
            PHYLO_TAXONOMY.forEach(top => {
                const cnt = pCountUnder(top); if (!cnt) return;
                total += cnt;
                const el = pBuildNode(top, 0); if (!el) return;
                // Filter: only show branches that contain matching species
                if (pGroup !== 'all' && !pSearch) {
                    const cats = pGcats[pGroup];
                    const branchCats = pCollectCats(top);
                    if (!branchCats.some(c => cats.includes(c))) return; // hide entirely
                }
                ul.appendChild(el);
            });
            if (!total && empty) { empty.style.display = 'flex'; } else { wrap.appendChild(ul); }
            const cntEl = document.getElementById('phylo-sp-count');
            if (cntEl) cntEl.innerHTML = `<b>${total}</b> soorten`;
            if (pGroup !== 'all' || pSearch) {
                wrap.querySelectorAll('.phylo-ci.collapsed').forEach(el => {
                    el.classList.remove('collapsed');
                    const btn = el.querySelector(':scope > .phylo-nrow > .phylo-tog');
                    if (btn) btn.textContent = '−';
                });
            }
        }
        document.querySelectorAll('.phylo-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.phylo-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active'); pGroup = chip.dataset.g; pRender();
            });
        });
        const pSrch = document.getElementById('phylo-search');
        if (pSrch) pSrch.addEventListener('input', e => { pSearch = e.target.value.trim().toLowerCase(); pRender(); });
        pRender();
    }
    // --- Initialize ---
    injectIcons();
    updateLanguage('nl');
    showScreen('screen-home');
    initParallax();

    // Render SOTD after data is available
    if (window.speciesData && window.speciesData.length > 0) {
        renderSpeciesOfTheDay();
    } else {
        // Wait for data script to load
        window.addEventListener('load', renderSpeciesOfTheDay);
    }

    // --- Keyboard Navigation ---
    document.addEventListener('keydown', (e) => {
        // Escape: Close modals
        if (e.key === 'Escape') {
            const modal = document.querySelector('[style*="display: flex"][class*="modal"]');
            if (modal || detailsModal?.style.display === 'flex') {
                if (detailsModal?.style.display === 'flex') detailsModal.style.display = 'none';
                if (stopConfirmModal?.style.display === 'flex') stopConfirmModal.style.display = 'none';
            }
        }

        // Ctrl/Cmd+/: Focus search
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            const activeScreen = document.querySelector('.screen.active');
            if (activeScreen === screens.learn) {
                speciesSearch?.focus();
            } else if (activeScreen === screens.biogids) {
                document.getElementById('biogids-search')?.focus();
            }
        }

        // Navigation between buttons with arrow keys (when focused on buttons)
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            const focusedElement = document.activeElement;
            if (focusedElement?.classList?.contains('btn') || focusedElement?.classList?.contains('tab')) {
                const siblings = Array.from(focusedElement.parentElement?.children || []);
                const index = siblings.indexOf(focusedElement);

                if ((e.key === 'ArrowRight' || e.key === 'ArrowDown') && index < siblings.length - 1) {
                    e.preventDefault();
                    siblings[index + 1]?.focus();
                } else if ((e.key === 'ArrowLeft' || e.key === 'ArrowUp') && index > 0) {
                    e.preventDefault();
                    siblings[index - 1]?.focus();
                }
            }
        }

        // Enter: Activate focused button
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement?.classList?.contains('btn') || focusedElement?.classList?.contains('tab')) {
                focusedElement.click();
            }
        }
    });
});
