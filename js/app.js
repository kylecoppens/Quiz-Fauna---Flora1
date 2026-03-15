// app.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("App.js: DOMContentLoaded triggered");

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
            agriculture: "🌾 Landbouw",
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
            perfect: "Perfecte Score!",
            perfectDesc: "Je bent een echte meester van de Belgische biodiversiteit.",
            great: "Goed gedaan!",
            greatDesc: "Je kent je weg in de natuur echt goed.",
            notbad: "Niet slecht!",
            notbadDesc: "Blijf ontdekken om meer te leren over onze lokale soorten.",
            practice: "Meer oefening nodig!",
            practiceDesc: "Probeer de Encyclopedie om meer te leren.",
            noSpecies: "Geen soorten gevonden voor deze categorie. Probeer een andere!",
            hintText: "Dit behoort tot de familie: "
        },
        en: {
            play: "Play Quiz",
            learn: "Encyclopedia",
            discover: "Discover Nature",
            title: "Belgian Fauna & Flora",
            desc: "Test your knowledge or explore the encyclopedia of Belgium's natural wonders.",
            back: "← Back",
            stopConfirm: "Are you sure you want to stop?",
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
            agriculture: "🌾 Agriculture",
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
            perfect: "Perfect Score!",
            perfectDesc: "You are a true master of Belgian biodiversity.",
            great: "Great job!",
            greatDesc: "You really know your way around nature.",
            notbad: "Not bad!",
            notbadDesc: "Keep exploring to learn more about our local species.",
            practice: "Need more practice!",
            practiceDesc: "Try the Encyclopedia section to learn more.",
            noSpecies: "No species found for this category! Try another one.",
            hintText: "This belongs to the family: "
        },
        fr: {
            play: "Jouer au Quiz",
            learn: "Encyclopédie",
            discover: "Découvrir la Nature",
            title: "Faune & Flore Belges",
            desc: "Testez vos connaissances ou explorez l'encyclopédie des merveilles naturelles de la Belgique.",
            back: "← Retour",
            stopConfirm: "Êtes-vous sûr de vouloir arrêter ?",
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
            agriculture: "🌾 Agriculture",
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
            perfect: "Score Parfait !",
            perfectDesc: "Vous êtes un véritable maître de la biodiversité belge.",
            great: "Bon travail !",
            greatDesc: "Vous connaissez vraiment bien la nature.",
            notbad: "Pas mal !",
            notbadDesc: "Continuez à explorer pour en savoir plus sur nos espèces locales.",
            practice: "Besoin d'entraînement !",
            practiceDesc: "Essayez l'Encyclopédie pour en apprendre davantage.",
            noSpecies: "Aucune espèce trouvée pour cette catégorie ! Essayez-en une autre.",
            hintText: "Ceci appartient à la famille : "
        }
    };

    // --- State Variables ---
    let currentLang = 'nl'; // Dutch is standard
    let currentCategory = 'all';
    let currentDifficulty = 'easy';

    let activeQuizPool = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let currentCorrectAnswer = null;
    let hintUsed = false;

    const QUIZ_LENGTH = 10;

    // --- DOM Elements ---
    const screens = {
        home: document.getElementById('screen-home'),
        config: document.getElementById('screen-config'),
        quiz: document.getElementById('screen-quiz'),
        results: document.getElementById('screen-results'),
        learn: document.getElementById('screen-learn'),
        preview: document.getElementById('preview-screen')
    };

    // Buttons
    const btnPlay = document.getElementById('btn-play');
    const btnLearn = document.getElementById('btn-learn');
    const btnBacks = document.querySelectorAll('.btn-back');
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    const btnNextQuestion = document.getElementById('btn-next-question');
    const btnPlayAgain = document.getElementById('btn-play-again');
    const btnResultsHome = document.getElementById('btn-results-home');
    const btnHint = document.getElementById('btn-hint');
    const langBtns = document.querySelectorAll('.btn-lang');
    const btnStopQuiz = document.getElementById('btn-stop-quiz');
    const btnPreview = document.getElementById('preview-btn');
    const previewGrid = document.getElementById('image-preview-grid');

    // Config options
    const categoryChips = document.querySelectorAll('#category-selector .select-chip');
    const difficultyChips = document.querySelectorAll('#difficulty-selector .select-chip');

    // Quiz elements
    const qNumText = document.getElementById('current-q-num');
    const progressFill = document.getElementById('progress-fill');
    const scoreText = document.getElementById('current-score');
    const qText = document.getElementById('question-text');
    const qImage = document.getElementById('question-image');
    const imageLoader = document.getElementById('image-loader');
    const answersContainer = document.getElementById('answers-container');

    // Modal elements
    const detailsModal = document.getElementById('details-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');

    // Encyclopedia elements
    const learnGrid = document.getElementById('learn-grid');
    const learnTabs = document.querySelectorAll('#learn-filters .tab');

    // --- Language Logic ---
    function updateLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        // Update active class on buttons
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update UI Text
        const dict = i18n[lang];

        // Header / Home
        document.querySelector('#screen-home .subtitle').textContent = dict.discover;
        document.querySelector('#screen-home h1').innerHTML = dict.title.replace(' ', '<br><span class="highlight">') + '</span>';
        document.querySelector('#screen-home p').textContent = dict.desc;
        btnPlay.innerHTML = `<span class="icon">🌿</span> ${dict.play}`;
        btnLearn.innerHTML = `<span class="icon">📖</span> ${dict.learn}`;

        // Config
        document.querySelector('#screen-config h2').textContent = dict.setup;
        document.querySelector('#category-selector').previousElementSibling.textContent = dict.category;
        document.querySelector('#difficulty-selector').previousElementSibling.textContent = dict.difficulty;
        btnStartQuiz.textContent = dict.start;

        // Chips
        categoryChips.forEach(chip => {
            const v = chip.dataset.val;
            chip.textContent = dict[v] || chip.textContent;
        });
        difficultyChips.forEach(chip => {
            const v = chip.dataset.val;
            chip.textContent = dict[v] || chip.textContent;
        });

        // Quiz
        document.querySelector('.progress-text').innerHTML = `${dict.question} <span id="current-q-num">${currentQuestionIndex + 1}</span> ${dict.of} 10`;
        document.querySelector('.score-pill').innerHTML = `${dict.score}: <span id="current-score">${score}</span>`;
        btnHint.innerHTML = `<span class="icon">💡</span> ${dict.hint}`;
        btnNextQuestion.innerHTML = `${dict.next} →`;

        // Results
        document.querySelector('#screen-results h2').textContent = dict.complete;
        btnPlayAgain.textContent = dict.again;
        btnResultsHome.textContent = dict.menu;

        // Encyclopedia / Learn
        document.querySelector('#screen-learn h2').textContent = dict.learn;
        document.querySelectorAll('#learn-filters .tab').forEach(tab => {
            const v = tab.dataset.filter;
            tab.textContent = dict[v] || tab.textContent;
        });

        // Update modal labels if they exist
        const lblRarity = document.getElementById('label-rarity');
        if (lblRarity) lblRarity.textContent = dict.rarity;
        const lblSize = document.getElementById('label-size');
        if (lblSize) lblSize.textContent = dict.size;
        const lblDiet = document.getElementById('label-diet');
        if (lblDiet) lblDiet.textContent = dict.diet;

        const lblInfoHab = document.getElementById('label-info-habitat');
        if (lblInfoHab) lblInfoHab.textContent = dict.habitat;
        const lblInfoRty = document.getElementById('label-info-rarity');
        if (lblInfoRty) lblInfoRty.textContent = dict.rarity;
        const lblInfoSz = document.getElementById('label-info-size');
        if (lblInfoSz) lblInfoSz.textContent = dict.size;
        const lblInfoDt = document.getElementById('label-info-diet');
        if (lblInfoDt) lblInfoDt.textContent = dict.diet;
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });

    // --- Navigation Functions ---
    function showScreen(screenId) {
        Object.values(screens).forEach(screen => {
            if (screen) {
                screen.classList.remove('active');
                screen.classList.add('hidden');
            }
        });
        const target = screens[screenId.replace('screen-', '')];
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('active');
        }
    }

    // Event Listeners for Navigation
    btnPlay.addEventListener('click', () => showScreen('screen-config'));
    btnLearn.addEventListener('click', () => {
        showScreen('screen-learn');
        renderEncyclopedia('all');
    });

    if (btnPreview) {
        btnPreview.addEventListener('click', () => {
            showScreen('screen-preview');
            renderPreviewGallery();
        });
    }

    function renderPreviewGallery() {
        if (!previewGrid) return;
        previewGrid.innerHTML = '';
        
        // Filter species that have the renamed high-res images
        const newImagesSpecies = window.speciesData.filter(s => 
            s.image.includes('-birds') || 
            s.image.includes('-fauna') || 
            s.image.includes('-insects') || 
            s.image.includes('-fungi') ||
            s.image.includes('common-kingfisher')
        );

        newImagesSpecies.forEach(item => {
            const card = document.createElement('div');
            card.className = 'species-card transition';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${item.image}" alt="${item.name[currentLang]}" loading="lazy">
                </div>
                <div class="card-info">
                    <h3>${item.name[currentLang]}</h3>
                    <p class="scientific">${item.scientific}</p>
                    <div class="tag">${item.category}</div>
                </div>
            `;
            previewGrid.appendChild(card);
        });
    }

    btnBacks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            showScreen(e.currentTarget.dataset.target);
        });
    });

    btnResultsHome.addEventListener('click', () => showScreen('screen-home'));
    btnPlayAgain.addEventListener('click', () => showScreen('screen-config'));

    // Encyclopedia filter logic
    learnTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            learnTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderEncyclopedia(tab.dataset.filter);
        });
    });

    if (btnStopQuiz) {
        btnStopQuiz.addEventListener('click', () => {
            if (confirm(i18n[currentLang].stopConfirm || "Stop quiz?")) {
                showScreen('screen-home');
            }
        });
    }

    // --- Configuration Logic ---
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

    function startQuiz() {
        score = 0;
        currentQuestionIndex = 0;
        const allData = window.speciesData || [];

        // Filter and remove duplicates based on scientific name just in case
        const seen = new Set();
        const uniqueData = allData.filter(item => {
            const isDuplicate = seen.has(item.scientific);
            seen.add(item.scientific);
            return !isDuplicate;
        });

        activeQuizPool = uniqueData.filter(species => {
            return currentCategory === 'all' || species.category === currentCategory;
        });

        if (activeQuizPool.length === 0) {
            alert(i18n[currentLang].noSpecies);
            return;
        }

        // Shuffle
        activeQuizPool.sort(() => 0.5 - Math.random());

        // Limit to available or QUIZ_LENGTH
        const actualLength = Math.min(activeQuizPool.length, QUIZ_LENGTH);
        activeQuizPool = activeQuizPool.slice(0, actualLength);

        // Update quiz length in state/UI if needed (calculated dynamically now)
        this.currentQuizLength = actualLength;

        showScreen('screen-quiz');
        renderQuestion();
    }

    function renderQuestion() {
        btnNextQuestion.classList.add('hidden');
        btnHint.disabled = false;
        hintUsed = false;

        // Clear previous hints
        const oldHint = document.querySelector('.hint-text');
        if (oldHint) oldHint.remove();

        const currentItem = activeQuizPool[currentQuestionIndex];
        currentCorrectAnswer = currentItem;

        // Update UI
        const dict = i18n[currentLang];
        const totalQs = activeQuizPool.length;

        qNumText.textContent = currentQuestionIndex + 1;
        progressFill.style.width = `${((currentQuestionIndex) / totalQs) * 100}%`;
        scoreText.textContent = score;

        // Update question text with total
        document.querySelector('.progress-text').innerHTML = `${dict.question} <span id="current-q-num">${currentQuestionIndex + 1}</span> ${dict.of} ${totalQs}`;

        const catName = dict[currentItem.category] || currentItem.category;
        qText.innerHTML = `${dict.question} (<span class="highlight">${catName}</span>)`;

        imageLoader.style.display = 'block';
        qImage.style.opacity = '0';
        qImage.referrerPolicy = "no-referrer";
        qImage.src = currentItem.image;
        qImage.onload = () => {
            console.log("Image loaded successfully: " + currentItem.image);
            imageLoader.style.display = 'none';
            qImage.style.opacity = '1';
        };
        qImage.onerror = () => {
            console.error("Failed to load image: " + currentItem.image);
            imageLoader.style.display = 'none';
            // Fallback to a secondary source or placeholder
            qImage.style.opacity = '0.5';
        };

        generateAnswers(currentItem);
    }

    function showHint() {
        if (hintUsed) return;
        hintUsed = true;
        btnHint.disabled = true;

        const hintDiv = document.createElement('div');
        hintDiv.className = 'hint-text';
        const family = currentCorrectAnswer.family || "Inconnue/Onbekend";
        hintDiv.innerHTML = `<span class="icon">🌿</span> ${i18n[currentLang].hintText} <strong>${family}</strong>`;

        // Insert after question container
        document.querySelector('.question-container').after(hintDiv);
    }

    function generateAnswers(correctItem) {
        answersContainer.innerHTML = '';
        const allData = window.speciesData || [];

        // Ensure we don't have duplicates in the wrong answers
        // We filter by ID and by Name (to prevent "Same name, different ID" issues)
        const getLocalizedName = (item) => typeof item.name === 'object' ? item.name[currentLang] : item.name;
        const correctName = getLocalizedName(correctItem);

        let wrongAnswersPool = allData.filter(i =>
            i.id !== correctItem.id &&
            i.scientific !== correctItem.scientific &&
            getLocalizedName(i) !== correctName
        );

        // Prefer same category for wrong answers
        let sameCatWrong = wrongAnswersPool.filter(i => i.category === correctItem.category);

        let selectedWrong = [];
        if (sameCatWrong.length >= 2) {
            selectedWrong = sameCatWrong.sort(() => 0.5 - Math.random()).slice(0, 2);
        } else {
            // Mix with others if not enough in same category
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
            clickedBtn.classList.add('correct');
            score++;
            scoreText.textContent = score;
        } else {
            clickedBtn.classList.add('wrong');
            const correctBtn = answersContainer.querySelector(`.answer-widget[data-id="${currentCorrectAnswer.id}"]`);
            if (correctBtn) correctBtn.classList.add('correct');
        }

        progressFill.style.width = `${((currentQuestionIndex + 1) / QUIZ_LENGTH) * 100}%`;
        btnNextQuestion.classList.remove('hidden');
    }

    function loadNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < QUIZ_LENGTH) {
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

        if (score === QUIZ_LENGTH) {
            msgElem.textContent = dict.perfect;
            detElem.textContent = dict.perfectDesc;
        } else if (score >= QUIZ_LENGTH * 0.7) {
            msgElem.textContent = dict.great;
            detElem.textContent = dict.greatDesc;
        } else if (score >= QUIZ_LENGTH * 0.4) {
            msgElem.textContent = dict.notbad;
            detElem.textContent = dict.notbadDesc;
        } else {
            msgElem.textContent = dict.practice;
            detElem.textContent = dict.practiceDesc;
        }

        showScreen('screen-results');
    }

    // --- Encyclopedia ---
    function renderEncyclopedia(filter) {
        learnGrid.innerHTML = '';
        const allData = window.speciesData || [];
        const items = filter === 'all'
            ? allData
            : allData.filter(i => i.category === filter);

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'learn-card';
            const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
            const catName = i18n[currentLang][item.category] || item.category;

            card.innerHTML = `
                <img src="${item.image}" class="learn-card-img" alt="${name}" loading="lazy" referrerpolicy="no-referrer">
                <div class="learn-card-info">
                    <div class="learn-card-title">${name}</div>
                    <div class="learn-card-type">${catName}</div>
                </div>
            `;
            card.addEventListener('click', () => openModal(item));
            learnGrid.appendChild(card);
        });
    }

    function openModal(item) {
        if (!detailsModal) return;

        const lang = currentLang;
        const getName = (obj) => typeof obj === 'object' ? obj[lang] : obj;

        // Header
        document.getElementById('modal-title').textContent = getName(item.name);
        document.getElementById('modal-scientific').textContent = item.scientific;
        document.getElementById('modal-tag').textContent = i18n[lang][item.category] || item.category;

        document.getElementById('modal-description').textContent = getName(item.description);
        document.getElementById('modal-habitat-text').textContent = getName(item.habitat) || '---';
        document.getElementById('modal-rarity-text').textContent = getName(item.rarity) || '---';
        document.getElementById('modal-size-text').textContent = item.size ? getName(item.size) : '---';
        document.getElementById('modal-diet-text').textContent = item.diet ? getName(item.diet) : '---';

        // Infobox
        const mImg = document.getElementById('modal-image');
        mImg.referrerPolicy = "no-referrer";
        mImg.src = item.image;
        document.getElementById('modal-infobox-family').textContent = item.family || '---';
        document.getElementById('modal-infobox-category').textContent = i18n[lang][item.category] || item.category;
        document.getElementById('modal-habitat').textContent = getName(item.habitat) || '---';
        document.getElementById('modal-rarity').textContent = getName(item.rarity) || '---';
        document.getElementById('modal-infobox-size').textContent = item.size ? getName(item.size) : '---';
        document.getElementById('modal-infobox-diet').textContent = item.diet ? getName(item.diet) : '---';

        detailsModal.classList.remove('hidden');

        btnCloseModal.onclick = () => {
            detailsModal.classList.add('hidden');
        };
    }

    // Close modal on background click
    if (detailsModal) {
        detailsModal.addEventListener('click', (e) => {
            if (e.target === detailsModal) {
                detailsModal.classList.add('hidden');
            }
        });
    }

    // Initialize
    console.log("App.js: Initializing first screen");
    updateLanguage('nl'); // Explicitly set Dutch as default
    showScreen('screen-home');
});
