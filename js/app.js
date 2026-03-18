// app.js

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
        audioMuted: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
    };

    // --- Audio Logic ---
    const bgAudio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3');
    bgAudio.loop = true;
    let audioEnabled = false;

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
            category: "Kies Categorie",
            difficulty: "Kies Moeilijkheidsgraad",
            start: "Start Quiz",
            all: "🌍 Alles",
            fauna: "🦊 Zoogdieren",
            birds: "🐦 Vogels",
            insects: "🦋 Insecten",
            flora: "🌸 Wilde Bloemen",
            fungi: "🍄 Paddenstoelen",
            trees: "🌲 Bomen",
            agriculture: "🌾 Gekweekte Soorten",
            easy: "Gemakkelijk (Algemeen)",
            hard: "Moeilijk (Zeldzaam)",
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
            xpLabel: "XP"
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
            category: "Select Category",
            difficulty: "Select Difficulty",
            start: "Start Quiz",
            all: "🌍 All",
            fauna: "🦊 Mammals",
            birds: "🐦 Birds",
            insects: "🦋 Insects",
            flora: "🌸 Wildflowers",
            fungi: "🍄 Fungi",
            trees: "🌲 Trees",
            agriculture: "🌾 Cultivated Species",
            easy: "Easy (Common)",
            hard: "Hard (Rare)",
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
            xpLabel: "XP"
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
            category: "Choisir la Catégorie",
            difficulty: "Choisir la Difficulté",
            start: "Commencer le Quiz",
            all: "🌍 Tout",
            fauna: "🦊 Mammifères",
            birds: "🐦 Oiseaux",
            insects: "🦋 Insectes",
            flora: "🌸 Fleurs sauvages",
            fungi: "🍄 Champignons",
            trees: "🌲 Arbres",
            agriculture: "🌾 Espèces Cultivées",
            easy: "Facile (Commun)",
            hard: "Difficile (Rare)",
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
            xpLabel: "XP"
        }
    };

    // --- State Variables ---
    let currentLang = 'nl';
    let currentCategory = 'all';
    let currentDifficulty = 'easy';
    let activeQuizPool = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let currentCorrectAnswer = null;
    let hintUsed = false;
    let collectedSpecies = JSON.parse(localStorage.getItem('collectedSpecies') || '[]');
    let currentXP = parseInt(localStorage.getItem('currentXP') || '0');

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
    };

    const btnPlay = document.getElementById('btn-play');
    const btnLearn = document.getElementById('btn-learn');
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

    const categoryChips = document.querySelectorAll('#category-selector .select-chip');
    const difficultyChips = document.querySelectorAll('#difficulty-selector .select-chip');

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
        if (h1El) h1El.innerHTML = dict.title.replace(' ', '<br><span class="highlight">') + '</span>';

        const descEl = document.querySelector('#screen-home p');
        if (descEl) descEl.textContent = dict.desc;

        if (btnPlay) btnPlay.innerHTML = `<span class="icon">🌿</span> ${dict.play}`;
        if (btnLearn) btnLearn.innerHTML = `<span class="icon">📖</span> ${dict.learn}`;

        // SOTD label
        const sotdLabelEl = document.querySelector('.sotd-label [data-i18n="sotdLabel"]');
        if (sotdLabelEl) sotdLabelEl.textContent = dict.sotdLabel;

        // Config
        const configH2 = document.querySelector('#screen-config h2');
        if (configH2) configH2.textContent = dict.setup;

        const catLabel = document.querySelector('#category-selector') && document.querySelector('#category-selector').previousElementSibling;
        if (catLabel) catLabel.textContent = dict.category;

        const diffLabel = document.querySelector('#difficulty-selector') && document.querySelector('#difficulty-selector').previousElementSibling;
        if (diffLabel) diffLabel.textContent = dict.difficulty;

        if (btnStartQuiz) btnStartQuiz.textContent = dict.start;

        categoryChips.forEach(chip => {
            const v = chip.dataset.val;
            if (dict[v]) chip.textContent = dict[v];
        });

        difficultyChips.forEach(chip => {
            const v = chip.dataset.val;
            if (dict[v]) chip.textContent = dict[v];
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
            if (v && dict[v]) tab.textContent = dict[v];
        });

        // Modal labels
        const labelMap = {
            'label-rarity': 'rarity',
            'label-size': 'size',
            'label-diet': 'diet',
            'label-funfact': 'funfact',
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

    btnPlay.addEventListener('click', () => showScreen('screen-config'));
    btnLearn.addEventListener('click', () => {
        showScreen('screen-learn');
        renderEncyclopedia('all');
    });

    btnBacks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget.dataset.target || 'screen-home';
            showScreen(target);
        });
    });

    btnResultsHome.addEventListener('click', () => showScreen('screen-home'));
    btnPlayAgain.addEventListener('click', () => showScreen('screen-config'));

    // Encyclopedia filter
    learnTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            learnTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderEncyclopedia(tab.dataset.filter);
        });
    });

    // Phylogeny button
    const btnOpenPhylo = document.getElementById('btn-open-phylo');
    if (btnOpenPhylo) {
        btnOpenPhylo.addEventListener('click', () => {
            window.open('phylogeny.html', '_blank');
        });
    }

    if (speciesSearch) {
        speciesSearch.addEventListener('input', () => {
            const activeTab = document.querySelector('#learn-filters .tab.active');
            renderEncyclopedia(activeTab ? activeTab.dataset.filter : 'all');
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

    setupChips(categoryChips, val => currentCategory = val);
    setupChips(difficultyChips, val => currentDifficulty = val);

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
            const matchesCategory = currentCategory === 'all' || species.category === currentCategory;
            const matchesDifficulty = currentDifficulty === 'all' || species.difficulty === currentDifficulty || !species.difficulty;
            return matchesCategory && matchesDifficulty;
        });

        if (activeQuizPool.length === 0) {
            activeQuizPool = uniqueData.filter(species => currentCategory === 'all' || species.category === currentCategory);
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

    function renderEncyclopedia(filter) {
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
                items = allData.filter(i => i.category === filter);
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
            card.innerHTML = `
                    <div class="collected-badge ${isCollected ? '' : 'hidden'}">✓</div>
                    <img src="${item.image}" class="learn-card-img" alt="${name}" loading="lazy" referrerpolicy="no-referrer"
                         onerror="this.style.background='rgba(61,184,99,0.1)'; this.src='';">
                    <div class="learn-card-info">
                        <div class="learn-card-title">${name}</div>
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

        // Infobox image
        const infoboxImageContainer = document.querySelector('.infobox-image');
        infoboxImageContainer.innerHTML = `<img id="modal-image" src="${item.image}" alt="Species Detail" referrerpolicy="no-referrer">`;

        // Manual gallery images
        const folderName = item.scientific.replace(/ /g, '_');
        const basePath = `Belgium_species_dataset/${folderName}/`;
        const manualImages = ['manual.jpg', 'custom.jpg', '1.jpg', '2.jpg', '3.jpg'];

        for (const imgName of manualImages) {
            const imgPath = basePath + imgName;
            const testImg = new Image();
            testImg.src = imgPath;
            testImg.onload = () => {
                const galleryImg = document.createElement('img');
                galleryImg.src = imgPath;
                galleryImg.alt = "Manual Image";
                galleryImg.style.cssText = "margin-top:10px; border-radius:8px; cursor:pointer; width:100%;";
                galleryImg.addEventListener('click', () => {
                    document.getElementById('modal-image').src = imgPath;
                });
                infoboxImageContainer.appendChild(galleryImg);
            };
        }

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

        detailsModal.classList.remove('hidden');

        btnCloseModal.onclick = () => detailsModal.classList.add('hidden');
    }

    if (detailsModal) {
        detailsModal.addEventListener('click', (e) => {
            if (e.target === detailsModal) detailsModal.classList.add('hidden');
        });
    }

    // --- Icon Injection ---
    function injectIcons() {
        document.querySelectorAll('.back-svg-target').forEach(el => el.innerHTML = ICONS.back);
        document.querySelectorAll('.search-svg-target').forEach(el => el.innerHTML = ICONS.search);
        document.querySelectorAll('.play-svg-target').forEach(el => el.innerHTML = ICONS.play);
        document.querySelectorAll('.learn-svg-target').forEach(el => el.innerHTML = ICONS.learn);
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
});
