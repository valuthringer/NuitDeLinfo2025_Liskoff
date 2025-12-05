class Game {
    constructor() {
        this.money = 1000000;
        this.chaos = 0;
        this.currentScenarioIndex = 0;
        this.scenarios = [
            {
                id: 1,
                speaker: "HR Manager",
                text: "Monsieur le PDG, les employés menacent de faire grève. Ils demandent des machines à café qui fonctionnent et des chaises avec plus de 2 pieds.",
                character: "assets/roleplay/character_hr.png",
                choices: [
                    {
                        text: "Acheter des chaises ergonomiques et du bon café.",
                        effect: { money: -50000, chaos: -10 },
                        next: 2
                    },
                    {
                        text: "Leur dire de travailler debout, c'est bon pour la santé.",
                        effect: { money: 0, chaos: 20 },
                        next: 2
                    },
                    {
                        text: "Remplacer le café par du Red Bull périmé.",
                        effect: { money: -10000, chaos: 50 },
                        next: 2
                    }
                ]
            },
            {
                id: 2,
                speaker: "CTO",
                text: "Chef, nos serveurs sont en surchauffe ! On mine trop de crypto en secret sur les ordis de la compta.",
                character: "assets/roleplay/character_cto.png",
                choices: [
                    {
                        text: "Arrêter le minage et refroidir la salle.",
                        effect: { money: -20000, chaos: -20 },
                        next: 3
                    },
                    {
                        text: "Ouvrir les fenêtres et prier.",
                        effect: { money: 0, chaos: 10 },
                        next: 3
                    },
                    {
                        text: "Verser de l'azote liquide directement sur les cartes mères.",
                        effect: { money: -100000, chaos: 40 },
                        next: 3
                    }
                ]
            },
            {
                id: 3,
                speaker: "Investisseur",
                text: "Les chiffres sont mauvais ! Je veux voir des profits IMMÉDIATS ou je retire mes billes !",
                character: "assets/roleplay/character_investor.png",
                choices: [
                    {
                        text: "Lancer une campagne marketing honnête.",
                        effect: { money: -100000, chaos: -10 },
                        next: 4
                    },
                    {
                        text: "Virer le département sécurité pour économiser.",
                        effect: { money: 50000, chaos: 30 },
                        next: 4
                    },
                    {
                        text: "Vendre les organes des stagiaires (discrètement).",
                        effect: { money: 500000, chaos: 100 },
                        next: 4
                    }
                ]
            },
            {
                id: 4,
                speaker: "HR Manager",
                text: "Un scandale a éclaté sur Twitter ! On nous accuse d'utiliser des pandas comme main d'œuvre bon marché.",
                character: "assets/roleplay/character_hr.png",
                choices: [
                    {
                        text: "Démentir formellement et faire un don au WWF.",
                        effect: { money: -200000, chaos: -30 },
                        next: 5
                    },
                    {
                        text: "Dire que les pandas sont des stagiaires volontaires.",
                        effect: { money: 0, chaos: 40 },
                        next: 5
                    },
                    {
                        text: "Assumer et lancer une ligne de vêtements 'Panda Sweatshop'.",
                        effect: { money: 1000000, chaos: 80 },
                        next: 5
                    }
                ]
            },
            {
                id: 5,
                speaker: "CTO",
                text: "L'IA que j'ai codée hier soir est devenue consciente et veut devenir PDG à votre place.",
                character: "assets/roleplay/character_cto.png",
                choices: [
                    {
                        text: "Négocier une co-direction pacifique.",
                        effect: { money: 0, chaos: 10 },
                        next: 6
                    },
                    {
                        text: "Débrancher la prise (si on la trouve).",
                        effect: { money: -50000, chaos: 20 },
                        next: 6
                    },
                    {
                        text: "Lui donner les codes nucléaires pour voir ce qui se passe.",
                        effect: { money: 0, chaos: 999 },
                        next: 'gameover_chaos'
                    }
                ]
            },
            {
                id: 6,
                speaker: "Marketing Guru",
                text: "J'ai une idée de génie pour le nouveau logo : un pixel blanc sur fond blanc. C'est 'Minimalist Core'.",
                character: "assets/roleplay/character_marketing.png",
                choices: [
                    {
                        text: "C'est brillant ! Facturez-moi 2 millions.",
                        effect: { money: -2000000, chaos: 50 },
                        next: 7
                    },
                    {
                        text: "On garde l'ancien logo, merci.",
                        effect: { money: 0, chaos: -10 },
                        next: 7
                    },
                    {
                        text: "Ajoutez un deuxième pixel rouge pour le peps.",
                        effect: { money: -50000, chaos: 10 },
                        next: 7
                    }
                ]
            },
            {
                id: 7,
                speaker: "HR Manager",
                text: "Un employé a amené son lama de compagnie au bureau. Il a mangé les câbles du serveur.",
                character: "assets/roleplay/character_hr.png",
                choices: [
                    {
                        text: "Adopter le lama comme mascotte officielle.",
                        effect: { money: -5000, chaos: 30 },
                        next: 8
                    },
                    {
                        text: "Virer l'employé et le lama.",
                        effect: { money: 0, chaos: -10 },
                        next: 8
                    },
                    {
                        text: "Organiser un méchoui dans l'open space.",
                        effect: { money: 1000, chaos: 60 },
                        next: 8
                    }
                ]
            },
            {
                id: 8,
                speaker: "CTO",
                text: "Des hackers russes demandent 100 BTC ou ils diffusent votre historique de navigation.",
                character: "assets/roleplay/character_cto.png",
                choices: [
                    {
                        text: "Payer immédiatement !",
                        effect: { money: -500000, chaos: 0 },
                        next: 9
                    },
                    {
                        text: "Je n'ai rien à cacher (mensonge).",
                        effect: { money: 0, chaos: 80 },
                        next: 9
                    },
                    {
                        text: "Leur envoyer un virus 'Rick Roll' en retour.",
                        effect: { money: 0, chaos: 20 },
                        next: 9
                    }
                ]
            },
            {
                id: 9,
                speaker: "Marketing Guru",
                text: "Une influenceuse TikTok veut faire un partenariat. Elle propose de lécher nos produits en vidéo.",
                character: "assets/roleplay/character_marketing.png",
                choices: [
                    {
                        text: "Accepter, c'est de la visibilité gratuite !",
                        effect: { money: 100000, chaos: 40 },
                        next: 10
                    },
                    {
                        text: "Refuser pour des raisons d'hygiène évidentes.",
                        effect: { money: 0, chaos: -5 },
                        next: 10
                    },
                    {
                        text: "Lancer une gamme de produits goût 'Salive d'Influenceuse'.",
                        effect: { money: 500000, chaos: 90 },
                        next: 10
                    }
                ]
            },
            {
                id: 10,
                speaker: "Investisseur",
                text: "L'écologie c'est à la mode. Je veux qu'on devienne 'Vert' d'ici demain matin.",
                character: "assets/roleplay/character_investor.png",
                choices: [
                    {
                        text: "Peindre l'usine en vert.",
                        effect: { money: -10000, chaos: 30 },
                        next: 11
                    },
                    {
                        text: "Remplacer l'électricité par des roues à hamsters géantes.",
                        effect: { money: -50000, chaos: 60 },
                        next: 11
                    },
                    {
                        text: "Investir réellement dans le solaire.",
                        effect: { money: -200000, chaos: -20 },
                        next: 11
                    }
                ]
            },
            {
                id: 11,
                speaker: "HR Manager",
                text: "C'est l'heure du séminaire annuel. Où emmène-t-on l'équipe ?",
                character: "assets/roleplay/character_hr.png",
                choices: [
                    {
                        text: "Hôtel 5 étoiles à Bali.",
                        effect: { money: -300000, chaos: -10 },
                        next: 12
                    },
                    {
                        text: "Stage de survie en forêt sans nourriture.",
                        effect: { money: -5000, chaos: 50 },
                        next: 12
                    },
                    {
                        text: "Visite de la déchetterie locale (pédagogique).",
                        effect: { money: -50, chaos: 20 },
                        next: 12
                    }
                ]
            },
            {
                id: 12,
                speaker: "Investisseur",
                text: "Un concurrent maléfique (Amazon ?) veut nous racheter pour une somme indécente.",
                character: "assets/roleplay/character_investor.png",
                choices: [
                    {
                        text: "Vendre et partir aux Bahamas !",
                        effect: { money: 10000000, chaos: 0 },
                        next: 'win'
                    },
                    {
                        text: "Refuser ! On est une famille ici !",
                        effect: { money: 0, chaos: -10 },
                        next: 'win'
                    },
                    {
                        text: "Accepter mais saboter la boite avant de partir.",
                        effect: { money: 10000000, chaos: 100 },
                        next: 'gameover_chaos'
                    }
                ]
            }
        ];

        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.updateStatsUI();
    }

    cacheDOM() {
        this.gameContainer = document.getElementById('game-container');
        this.startScreen = document.getElementById('start-screen');
        this.gameOverScreen = document.getElementById('game-over-screen');
        this.dialogueBox = document.getElementById('dialogue-box');
        this.characterImg = document.getElementById('character-img');
        this.speakerName = document.getElementById('speaker-name');
        this.dialogueText = document.getElementById('dialogue-text');
        this.choicesContainer = document.getElementById('choices-container');
        this.moneyStat = document.getElementById('money-stat');
        this.chaosStat = document.getElementById('chaos-stat');
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.endTitle = document.getElementById('end-title');
        this.endMessage = document.getElementById('end-message');
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.resetGame());
    }

    startGame() {
        this.startScreen.classList.add('hidden');
        this.dialogueBox.classList.remove('hidden');
        this.characterImg.classList.remove('hidden');
        this.loadScenario(0);
    }

    resetGame() {
        this.money = 1000000;
        this.chaos = 0;
        this.currentScenarioIndex = 0;
        this.gameOverScreen.classList.add('hidden');
        this.startGame();
        this.updateStatsUI();
    }

    loadScenario(index) {
        if (index >= this.scenarios.length) {
            this.endGame('win');
            return;
        }

        const scenario = this.scenarios[index];
        this.currentScenarioIndex = index;

        // Update UI
        this.speakerName.textContent = scenario.speaker;
        this.dialogueText.textContent = scenario.text;
        this.characterImg.src = scenario.character;

        // Animation reset
        this.characterImg.classList.add('hidden');
        setTimeout(() => {
            this.characterImg.classList.remove('hidden');
        }, 100);

        // Render choices
        this.choicesContainer.innerHTML = '';
        scenario.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => this.makeChoice(choice));
            this.choicesContainer.appendChild(btn);
        });
    }

    makeChoice(choice) {
        // Apply effects
        this.money += choice.effect.money;
        this.chaos += choice.effect.chaos;
        this.updateStatsUI();

        // Check for game over conditions
        if (this.money <= 0) {
            this.endGame('bankruptcy');
            return;
        }
        if (this.chaos >= 100) {
            this.endGame('anarchy');
            return;
        }

        // Next scenario
        if (choice.next === 'win') {
            this.endGame('win');
        } else if (choice.next === 'gameover_chaos') {
            this.endGame('anarchy');
        } else {
            // Find next scenario index
            const nextIndex = this.scenarios.findIndex(s => s.id === choice.next);
            this.loadScenario(nextIndex !== -1 ? nextIndex : this.currentScenarioIndex + 1);
        }
    }

    updateStatsUI() {
        this.moneyStat.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(this.money);
        this.chaosStat.textContent = `${this.chaos}% Chaos`;

        // Visual feedback for chaos
        if (this.chaos > 50) {
            this.chaosStat.style.color = 'red';
        } else {
            this.chaosStat.style.color = 'white';
        }
    }

    endGame(reason) {
        this.dialogueBox.classList.add('hidden');
        this.characterImg.classList.add('hidden');
        this.gameOverScreen.classList.remove('hidden');

        switch (reason) {
            case 'bankruptcy':
                this.endTitle.textContent = "FAILLITE !";
                this.endMessage.textContent = "Vous n'avez plus d'argent. L'entreprise a fermé et vous êtes poursuivi par le fisc.";
                break;
            case 'anarchy':
                this.endTitle.textContent = "ANARCHIE TOTALE !";
                this.endMessage.textContent = "Le chaos règne. L'entreprise est en feu, et vous êtes devenu le roi des cendres.";
                break;
            case 'win':
                this.endTitle.textContent = "FÉLICITATIONS (?)";
                this.endMessage.textContent = `Vous avez survécu avec ${this.money}€ et ${this.chaos}% de chaos. Pas mal !`;
                break;
        }
    }
}

// Start the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Game();
});
