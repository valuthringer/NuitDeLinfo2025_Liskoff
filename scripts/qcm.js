const questionBanks = {
    debutant: [
        {
            question: "Que signifie l'acronyme NIRD ?",
            options: [
                "Numérique Intelligent, Rapide et Digital",
                "Numérique Inclusif, Responsable et Durable",
                "Nouvelle Informatique de Recherche et Développement",
                "Norme Internationale de Régulation des Données"
            ],
            correct: 1,
            explanation: "NIRD est la démarche pour un Numérique Inclusif (pour tous), Responsable (éthique) et Durable (écologique)."
        },
        {
            question: "Quel est le principal problème écologique du numérique ?",
            options: [
                "La fabrication du matériel",
                "L'envoi d'emails",
                "Le stockage des photos",
                "Le Wi-Fi"
            ],
            correct: 0,
            explanation: "La fabrication des équipements représente 70 à 80% de l'impact environnemental du numérique."
        },
        {
            question: "Qu'est-ce qu'un logiciel libre ?",
            options: [
                "Un logiciel gratuit mais secret",
                "Un logiciel sans propriétaire",
                "Un logiciel dont le code est ouvert et modifiable",
                "Un logiciel piraté"
            ],
            correct: 2,
            explanation: "Un logiciel libre offre la liberté d'exécuter, de copier, de distribuer, d'étudier, de modifier et d'améliorer le logiciel."
        },
        {
            question: "Si Internet était un pays, quel serait son rang en consommation d'électricité ?",
            options: [
                "1er (devant la Chine)",
                "3ème (derrière Chine et USA)",
                "10ème (niveau France)",
                "50ème"
            ],
            correct: 1,
            explanation: "Internet serait le 3ème plus gros consommateur d'électricité mondial, juste derrière la Chine et les États-Unis."
        },
        {
            question: "Qu'est-ce que l'obsolescence programmée ?",
            options: [
                "Un programme informatique obsolète",
                "Une technique pour réduire la durée de vie d'un produit",
                "Une mise à jour de sécurité",
                "Le recyclage des vieux ordinateurs"
            ],
            correct: 1,
            explanation: "C'est l'ensemble des techniques visant à réduire la durée de vie ou d'utilisation d'un produit pour en augmenter le taux de remplacement."
        },
        {
            question: "Où sont stockées vos données 'dans le Cloud' ?",
            options: [
                "Dans les satellites",
                "Dans les nuages",
                "Dans des serveurs physiques (Data Centers)",
                "Dans votre ordinateur"
            ],
            correct: 2,
            explanation: "Le Cloud n'est pas magique : ce sont des milliers de serveurs physiques qui consomment de l'électricité et nécessitent de la climatisation."
        },
        {
            question: "Quelle est la durée de vie moyenne d'un smartphone aujourd'hui ?",
            options: [
                "10 ans",
                "5 ans",
                "Environ 2 ans",
                "6 mois"
            ],
            correct: 2,
            explanation: "La moyenne est d'environ 2 ans, souvent à cause de la batterie ou de l'envie de nouveauté, alors qu'ils pourraient durer bien plus longtemps."
        },
        {
            question: "Que signifie 'DEEE' ?",
            options: [
                "Déchets d'Équipements Électriques et Électroniques",
                "Direction Européenne de l'Écologie et de l'Environnement",
                "Données Électroniques Enregistrées et Exportées",
                "Droit à l'Éducation et à l'Enseignement Électronique"
            ],
            correct: 0,
            explanation: "Les DEEE sont les déchets issus de nos appareils. Ils sont difficiles à recycler et contiennent souvent des substances dangereuses."
        },
        {
            question: "Quel est l'impact principal du streaming vidéo ?",
            options: [
                "Il use l'écran",
                "Il consomme beaucoup de bande passante et d'énergie",
                "Il remplit le disque dur",
                "Il n'a aucun impact"
            ],
            correct: 1,
            explanation: "Le streaming vidéo représente une part énorme du trafic Internet mondial, nécessitant des infrastructures réseaux énergivores."
        },
        {
            question: "À quoi sert l'indice de réparabilité ?",
            options: [
                "À savoir si le produit est performant",
                "À savoir si le produit est facile à réparer",
                "À connaître le prix des pièces",
                "À rien"
            ],
            correct: 1,
            explanation: "C'est une note obligatoire en France qui indique si un appareil est facile à démonter et à réparer."
        }
    ],
    intermediaire: [
        {
            question: "Quelle est la part du numérique dans les émissions mondiales de GES ?",
            options: [
                "Moins de 1%",
                "Environ 4% (plus que l'aviation)",
                "Environ 10%",
                "C'est négligeable"
            ],
            correct: 1,
            explanation: "Le numérique représente environ 4% des émissions mondiales de gaz à effet de serre, et ce chiffre augmente chaque année."
        },
        {
            question: "Qu'est-ce que la règle des 5 R ?",
            options: [
                "Rire, Rêver, Rouler, Respirer, Ranger",
                "Refuser, Réduire, Réutiliser, Réparer, Recycler",
                "Rapidité, Réseau, RAM, ROM, Reboot",
                "Rien de tout ça"
            ],
            correct: 1,
            explanation: "C'est la démarche zéro déchet appliquée au numérique : Refuser l'achat inutile, Réduire la consommation, etc."
        },
        {
            question: "Pourquoi l'obsolescence logicielle est-elle un problème ?",
            options: [
                "Elle oblige à changer de matériel fonctionnel",
                "Elle rend les virus plus dangereux",
                "Elle efface les données",
                "Elle coûte cher en électricité"
            ],
            correct: 0,
            explanation: "Des mises à jour trop lourdes ralentissent les vieux appareils, poussant les utilisateurs à en racheter des neufs alors qu'ils fonctionnent encore physiquement."
        },
        {
            question: "Qu'est-ce que la sobriété numérique ?",
            options: [
                "Ne plus utiliser d'ordinateur",
                "Utiliser le numérique de manière raisonnée et utile",
                "N'utiliser que du noir et blanc",
                "Arrêter Internet la nuit"
            ],
            correct: 1,
            explanation: "La sobriété numérique consiste à questionner nos usages pour réduire notre empreinte : 'en ai-je vraiment besoin ?'."
        },
        {
            question: "Quelle est la différence entre un logiciel libre et un graticiel (freeware) ?",
            options: [
                "Aucune",
                "Le freeware est payant",
                "Le logiciel libre donne accès au code source, pas le freeware",
                "Le freeware est plus rapide"
            ],
            correct: 2,
            explanation: "Un freeware est gratuit (comme Skype) mais reste propriétaire. Un logiciel libre (comme Firefox) est ouvert et modifiable."
        },
        {
            question: "Qu'est-ce que le RGPD ?",
            options: [
                "Règlement Général sur la Protection des Données",
                "Réseau Global Pour le Développement",
                "Registre Général des Programmes Durables",
                "Rien de Grave Pour Demain"
            ],
            correct: 0,
            explanation: "Le RGPD est une loi européenne qui protège les données personnelles des citoyens."
        },
        {
            question: "Qu'est-ce qu'un 'Dark Pattern' ?",
            options: [
                "Un fond d'écran noir",
                "Une interface conçue pour manipuler l'utilisateur",
                "Un mode sombre écologique",
                "Un virus caché"
            ],
            correct: 1,
            explanation: "Ce sont des astuces de design (comme des boutons cachés ou des cases pré-cochées) pour vous forcer à faire quelque chose."
        },
        {
            question: "Pourquoi faut-il refroidir les Data Centers ?",
            options: [
                "Pour que les employés n'aient pas chaud",
                "Car les serveurs dégagent énormément de chaleur",
                "Pour conserver les données au frais",
                "C'est inutile"
            ],
            correct: 1,
            explanation: "L'électronique chauffe beaucoup. Le refroidissement représente une part importante de la consommation d'énergie des Data Centers."
        },
        {
            question: "Quel est l'avantage écologique du Wifi par rapport à la 4G/5G ?",
            options: [
                "Il est plus lent donc on consomme moins",
                "Il consomme beaucoup moins d'énergie pour transférer les données",
                "Il n'y a pas d'ondes",
                "Aucun avantage"
            ],
            correct: 1,
            explanation: "Transférer des données en Wifi (fibre/ADSL) consomme beaucoup moins d'énergie au niveau du réseau que via les antennes mobiles."
        },
        {
            question: "Qu'est-ce que l'éco-conception web ?",
            options: [
                "Mettre du vert sur son site",
                "Optimiser un site pour qu'il consomme moins de ressources",
                "Héberger son site dans la forêt",
                "Utiliser des images de nature"
            ],
            correct: 1,
            explanation: "C'est créer des sites légers, rapides et utiles, qui tournent sur de vieux appareils et consomment peu de bande passante."
        }
    ],
    pro: [
        {
            question: "Quel métal rare, essentiel aux smartphones, finance souvent des conflits armés ?",
            options: [
                "Le Fer",
                "Le Coltan (Tantale)",
                "L'Aluminium",
                "Le Cuivre"
            ],
            correct: 1,
            explanation: "L'extraction du coltan en RDC est liée à des conflits armés et à de graves violations des droits humains."
        },
        {
            question: "Quelle distribution Linux est recommandée pour les écoles primaires ?",
            options: [
                "Kali Linux",
                "Arch Linux",
                "PrimTux",
                "Red Hat Enterprise"
            ],
            correct: 2,
            explanation: "PrimTux est une distribution éducative basée sur Debian/Ubuntu, conçue pour revaloriser les vieux ordinateurs à l'école."
        },
        {
            question: "Qu'est-ce que l'effet rebond (Paradoxe de Jevons) ?",
            options: [
                "Quand un email revient à l'envoyeur",
                "Quand une amélioration d'efficacité entraîne une augmentation de la consommation globale",
                "Quand on redémarre un serveur",
                "Le recyclage des ondes Wi-Fi"
            ],
            correct: 1,
            explanation: "Par exemple, la 5G est plus efficace énergétiquement par octet, mais elle encourage une consommation de données massivement supérieure, annulant le gain initial."
        },
        {
            question: "Que mesure le PUE (Power Usage Effectiveness) d'un Data Center ?",
            options: [
                "La puissance de calcul",
                "L'efficacité énergétique (Ratio Énergie Totale / Énergie Informatique)",
                "Le nombre de pannes",
                "La vitesse de connexion"
            ],
            correct: 1,
            explanation: "Un PUE de 1.0 serait parfait (toute l'énergie va aux serveurs). La moyenne est autour de 1.5 (beaucoup d'énergie pour la clim)."
        },
        {
            question: "Dans le bilan carbone, que sont les émissions de Scope 3 ?",
            options: [
                "Les émissions directes (fioul, gaz)",
                "Les émissions liées à l'électricité",
                "Les émissions indirectes (fabrication, transport, fin de vie)",
                "Les émissions des employés"
            ],
            correct: 2,
            explanation: "Pour le numérique, le Scope 3 (fabrication) est souvent la part la plus importante, bien avant la consommation électrique (Scope 2)."
        },
        {
            question: "Qu'est-ce que le 'Greenwashing' ?",
            options: [
                "Laver son ordinateur avec des produits bio",
                "Se donner une image écologique trompeuse",
                "Recycler ses emails",
                "Planter des arbres virtuels"
            ],
            correct: 1,
            explanation: "C'est une technique marketing pour faire croire qu'une entreprise est écolo alors que ses pratiques ne le sont pas vraiment."
        },
        {
            question: "Quel est l'impact spécifique de l'IA (Intelligence Artificielle) ?",
            options: [
                "Elle réfléchit donc elle consomme",
                "L'entraînement des modèles demande une puissance de calcul colossale",
                "Elle n'a pas d'impact",
                "Elle produit de l'oxygène"
            ],
            correct: 1,
            explanation: "Entraîner un gros modèle d'IA peut émettre autant de CO2 que 5 voitures sur toute leur durée de vie."
        },
        {
            question: "Que signifie l'acronyme FLOSS ?",
            options: [
                "Free / Libre and Open Source Software",
                "Fast Light Operating System Service",
                "Future Logic Of System Security",
                "Fil dentaire"
            ],
            correct: 0,
            explanation: "C'est le terme anglais complet pour désigner les logiciels libres et open source."
        },
        {
            question: "En France, quelle loi lutte contre le gaspillage et pour l'économie circulaire ?",
            options: [
                "La loi AGEC",
                "La loi HADOPI",
                "La loi Informatique et Libertés",
                "La loi de Moore"
            ],
            correct: 0,
            explanation: "La loi Anti-Gaspillage pour une Économie Circulaire (AGEC) a notamment instauré l'indice de réparabilité."
        },
        {
            question: "Quelle est la meilleure façon de réduire l'impact d'un ordinateur ?",
            options: [
                "L'éteindre la nuit",
                "Baisser la luminosité",
                "Allonger sa durée de vie au maximum",
                "Le peindre en vert"
            ],
            correct: 2,
            explanation: "L'impact de fabrication étant dominant, chaque année d'utilisation supplémentaire amortit ce coût écologique."
        }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentLevel = '';
let answeredFlags = [];
let answeredCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    const levelBtns = document.querySelectorAll('.btn-level');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            startQuiz(level);
        });
    });

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        showQuestion();
    });
    restartBtn.addEventListener('click', restartQuiz);
});

function startQuiz(level) {
    currentLevel = level;
    currentQuestions = questionBanks[level];
    currentQuestionIndex = 0;
    score = 0;
    answeredFlags = new Array(currentQuestions.length).fill(false);
    answeredCount = 0;

    document.getElementById('intro-card').style.display = 'none';
    document.getElementById('question-card').style.display = 'block';
    document.querySelector('.question-container').style.display = 'block';

    // Update Level Badge
    const levelNames = { debutant: "Apprenti 🌱", intermediaire: "Confirmé 🌿", pro: "Expert 🌳" };
    document.querySelector('.question-header span:last-child').textContent = `Niveau : ${levelNames[level]}`;

    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentQuestions.length;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedback');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackText = document.getElementById('feedback-text');

    // Disable all buttons
    options.forEach(btn => btn.style.pointerEvents = 'none');

    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        score++;
        feedback.className = 'feedback success';
        feedbackTitle.textContent = 'Correct ! 👏';
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correct].classList.add('correct');
        feedback.className = 'feedback error';
        feedbackTitle.textContent = 'Oups... 😕';
    }

    feedbackText.textContent = question.explanation;
    feedback.style.display = 'block';

    // Mark this question as answered (only once)
    if (!answeredFlags[currentQuestionIndex]) {
        answeredFlags[currentQuestionIndex] = true;
        answeredCount++;
    }

    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        // Only show results if ALL questions have been answered
        if (answeredCount === currentQuestions.length) {
            const finishBtn = document.createElement('button');
            finishBtn.textContent = "Voir les résultats";
            finishBtn.className = "btn-next";
            finishBtn.style.marginTop = "1rem";
            finishBtn.onclick = showResults;
            feedback.appendChild(finishBtn);
        } else {
            const warn = document.createElement('p');
            warn.textContent = `Vous n'avez pas répondu à toutes les questions.`;
            warn.style.marginTop = "1rem";
            feedback.appendChild(warn);
        }
    }
}

function showResults() {
    document.getElementById('question-card').style.display = 'none';
    document.getElementById('results-card').style.display = 'block';

    document.getElementById('score-display').textContent = `${score} / ${currentQuestions.length}`;

    const message = document.getElementById('results-message');
    if (score === currentQuestions.length) {
        message.textContent = "Parfait ! Vous maîtrisez ce niveau à la perfection ! 🏆";
    } else if (score >= currentQuestions.length / 2) {
        message.textContent = "Pas mal du tout ! Vous êtes sur la bonne voie. 🌱";
    } else {
        message.textContent = "Encore un peu d'entraînement ? Relisez la formation ! 📚";
    }
}

function restartQuiz() {
    //actualise la page
    location.reload();
}
