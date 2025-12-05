const products = [
    // --- ORDINATEURS PORTABLES (Laptops) ---
    {
        id: 1,
        name: "Fairphone Laptop (Concept)",
        type: "Laptop",
        origin: "Pays-Bas",
        scoreImpact: 50,
        price: 899,
        image: "https://placehold.co/300x200?text=Fair+Laptop",
        description: "Entièrement réparable, modulaire et éthique."
    },
    {
        id: 2,
        name: "MacBook Pro M3 Max",
        type: "Laptop",
        origin: "Chine",
        scoreImpact: -20,
        price: 3500,
        image: "https://placehold.co/300x200?text=MacBook+Pro",
        description: "Puissant mais difficilement réparable. Empreinte carbone élevée à la production."
    },
    {
        id: 3,
        name: "Framework Laptop 13",
        type: "Laptop",
        origin: "Taïwan",
        scoreImpact: 40,
        price: 1100,
        image: "https://placehold.co/300x200?text=Framework+13",
        description: "Le roi de la réparabilité. Changez tout vous-même."
    },
    {
        id: 4,
        name: "Lenovo ThinkPad T480 (Reconditionné)",
        type: "Laptop",
        origin: "Reconditionné France",
        scoreImpact: 35,
        price: 400,
        image: "https://placehold.co/300x200?text=ThinkPad+T480",
        description: "Une seconde vie pour ce classique increvable."
    },
    {
        id: 5,
        name: "HP Omen Gaming Beast",
        type: "Laptop",
        origin: "Chine",
        scoreImpact: -30,
        price: 2500,
        image: "https://placehold.co/300x200?text=HP+Omen",
        description: "Consommation électrique énorme, durée de vie limitée."
    },
    {
        id: 6,
        name: "Dell XPS 13 (Neuf)",
        type: "Laptop",
        origin: "Chine",
        scoreImpact: -10,
        price: 1400,
        image: "https://placehold.co/300x200?text=Dell+XPS",
        description: "Très compact, mais tout est soudé."
    },
    {
        id: 7,
        name: "Why! Open Laptop",
        type: "Laptop",
        origin: "Suisse",
        scoreImpact: 45,
        price: 1200,
        image: "https://placehold.co/300x200?text=Why!+Laptop",
        description: "Conçu pour durer 10 ans, sous Linux."
    },
    {
        id: 8,
        name: "Asus ROG Strix Scar",
        type: "Laptop",
        origin: "Chine",
        scoreImpact: -35,
        price: 3200,
        image: "https://placehold.co/300x200?text=Asus+ROG",
        description: "Un monstre de puissance... et de consommation."
    },
    {
        id: 9,
        name: "Chromebook Acer (Reconditionné)",
        type: "Laptop",
        origin: "Reconditionné Europe",
        scoreImpact: 25,
        price: 150,
        image: "https://placehold.co/300x200?text=Chromebook",
        description: "Suffisant pour le web, évite la production de neuf."
    },
    {
        id: 10,
        name: "Surface Laptop Studio",
        type: "Laptop",
        origin: "Chine",
        scoreImpact: -15,
        price: 2000,
        image: "https://placehold.co/300x200?text=Surface",
        description: "Design unique, mais réparabilité nulle (0/10 iFixit)."
    },

    // --- SMARTPHONES ---
    {
        id: 11,
        name: "Fairphone 5",
        type: "Smartphone",
        origin: "Pays-Bas",
        scoreImpact: 50,
        price: 699,
        image: "https://placehold.co/300x200?text=Fairphone+5",
        description: "Garantie 5 ans, pièces détachables, or équitable."
    },
    {
        id: 12,
        name: "iPhone 15 Pro Max",
        type: "Smartphone",
        origin: "Chine",
        scoreImpact: -25,
        price: 1400,
        image: "https://placehold.co/300x200?text=iPhone+15",
        description: "Verrouillage logiciel, incitation au renouvellement."
    },
    {
        id: 13,
        name: "Samsung Galaxy S24 Ultra",
        type: "Smartphone",
        origin: "Corée du Sud",
        scoreImpact: -20,
        price: 1300,
        image: "https://placehold.co/300x200?text=Galaxy+S24",
        description: "Excellent matériel, mais empreinte écologique lourde."
    },
    {
        id: 14,
        name: "Teracube 2e",
        type: "Smartphone",
        origin: "USA",
        scoreImpact: 40,
        price: 299,
        image: "https://placehold.co/300x200?text=Teracube",
        description: "Batterie remplaçable, garantie 4 ans."
    },
    {
        id: 15,
        name: "iPhone 11 (Reconditionné)",
        type: "Smartphone",
        origin: "Reconditionné France",
        scoreImpact: 30,
        price: 350,
        image: "https://placehold.co/300x200?text=iPhone+11+Reco",
        description: "Toujours vaillant, évite un déchet électronique."
    },
    {
        id: 16,
        name: "Xiaomi Redmi Note 13",
        type: "Smartphone",
        origin: "Chine",
        scoreImpact: -10,
        price: 200,
        image: "https://placehold.co/300x200?text=Redmi+Note",
        description: "Pas cher, mais jetable après 2 ans."
    },
    {
        id: 17,
        name: "Shiftphone 6mq",
        type: "Smartphone",
        origin: "Allemagne",
        scoreImpact: 45,
        price: 550,
        image: "https://placehold.co/300x200?text=Shiftphone",
        description: "Modulaire, consigne sur l'appareil."
    },
    {
        id: 18,
        name: "Google Pixel 8",
        type: "Smartphone",
        origin: "Vietnam",
        scoreImpact: 10,
        price: 700,
        image: "https://placehold.co/300x200?text=Pixel+8",
        description: "7 ans de mises à jour logicielles (bon point)."
    },
    {
        id: 19,
        name: "Nokia G22",
        type: "Smartphone",
        origin: "Chine",
        scoreImpact: 20,
        price: 180,
        image: "https://placehold.co/300x200?text=Nokia+G22",
        description: "Réparabilité mise en avant (partenariat iFixit)."
    },
    {
        id: 20,
        name: "Huawei P60 Pro",
        type: "Smartphone",
        origin: "Chine",
        scoreImpact: -15,
        price: 900,
        image: "https://placehold.co/300x200?text=Huawei+P60",
        description: "Obsolescence logicielle rapide sans Google Services."
    },

    // --- COMPOSANTS & PÉRIPHÉRIQUES ---
    {
        id: 21,
        name: "NVIDIA RTX 4090",
        type: "Composant",
        origin: "Taïwan",
        scoreImpact: -50,
        price: 1800,
        image: "https://placehold.co/300x200?text=RTX+4090",
        description: "450W de consommation. Un radiateur d'appoint."
    },
    {
        id: 22,
        name: "Disque Dur HDD 10To (Occasion)",
        type: "Composant",
        origin: "Occasion",
        scoreImpact: 15,
        price: 100,
        image: "https://placehold.co/300x200?text=HDD+10To",
        description: "Stockage froid, réutilisation de matériel existant."
    },
    {
        id: 23,
        name: "SSD Samsung 990 Pro",
        type: "Composant",
        origin: "Corée du Sud",
        scoreImpact: -5,
        price: 150,
        image: "https://placehold.co/300x200?text=SSD+990",
        description: "Performant mais production polluante."
    },
    {
        id: 24,
        name: "Clavier Mécanique Durable",
        type: "Périphérique",
        origin: "Suède",
        scoreImpact: 25,
        price: 180,
        image: "https://placehold.co/300x200?text=Clavier+Meca",
        description: "Switches remplaçables, châssis aluminium."
    },
    {
        id: 25,
        name: "Souris Plastique Cheap",
        type: "Périphérique",
        origin: "Chine",
        scoreImpact: -10,
        price: 5,
        image: "https://placehold.co/300x200?text=Souris+Cheap",
        description: "Casse après 3 mois. Déchet immédiat."
    },
    {
        id: 26,
        name: "Écran E-Ink Dasung",
        type: "Périphérique",
        origin: "Chine",
        scoreImpact: 30,
        price: 900,
        image: "https://placehold.co/300x200?text=E-Ink+Monitor",
        description: "Consommation quasi-nulle, repos des yeux."
    },
    {
        id: 27,
        name: "Imprimante Jet d'Encre HP",
        type: "Périphérique",
        origin: "Thaïlande",
        scoreImpact: -40,
        price: 60,
        image: "https://placehold.co/300x200?text=Imprimante+HP",
        description: "L'enfer des cartouches propriétaires et DRM."
    },
    {
        id: 28,
        name: "Imprimante EcoTank Epson",
        type: "Périphérique",
        origin: "Philippines",
        scoreImpact: 10,
        price: 250,
        image: "https://placehold.co/300x200?text=EcoTank",
        description: "Réservoirs rechargeables, moins de déchets plastiques."
    },
    {
        id: 29,
        name: "Casque Sony WH-1000XM5",
        type: "Audio",
        origin: "Malaisie",
        scoreImpact: -10,
        price: 350,
        image: "https://placehold.co/300x200?text=Sony+XM5",
        description: "Batterie collée, difficile à remplacer."
    },
    {
        id: 30,
        name: "Casque Modulaire AIAIAI",
        type: "Audio",
        origin: "Danemark",
        scoreImpact: 35,
        price: 200,
        image: "https://placehold.co/300x200?text=AIAIAI",
        description: "Chaque pièce se change. Durable."
    },

    // --- LOGICIELS & SERVICES (Immatériel) ---
    {
        id: 31,
        name: "Licence Windows 11 Pro",
        type: "Logiciel",
        origin: "USA",
        scoreImpact: -15,
        price: 145,
        image: "https://placehold.co/300x200?text=Windows+11",
        description: "Force le renouvellement matériel (TPM 2.0)."
    },
    {
        id: 32,
        name: "Clé USB Bootable Linux Mint",
        type: "Logiciel",
        origin: "Communauté",
        scoreImpact: 40,
        price: 10,
        image: "https://placehold.co/300x200?text=Linux+Mint",
        description: "Sauve les vieux PC de la décharge."
    },
    {
        id: 33,
        name: "Abonnement Adobe Creative Cloud",
        type: "Service",
        origin: "USA",
        scoreImpact: -20,
        price: 720,
        image: "https://placehold.co/300x200?text=Adobe+CC",
        description: "Modèle locatif lourd, cloud énergivore."
    },
    {
        id: 34,
        name: "Licence Perpétuelle Affinity",
        type: "Logiciel",
        origin: "UK",
        scoreImpact: 20,
        price: 150,
        image: "https://placehold.co/300x200?text=Affinity",
        description: "On achète une fois, on garde pour toujours."
    },
    {
        id: 35,
        name: "Antivirus Norton Bloatware",
        type: "Logiciel",
        origin: "USA",
        scoreImpact: -25,
        price: 80,
        image: "https://placehold.co/300x200?text=Norton",
        description: "Ralentit le PC, incite à en changer."
    },

    // --- SERVEURS & RÉSEAU ---
    {
        id: 36,
        name: "Raspberry Pi 5",
        type: "Mini-PC",
        origin: "UK",
        scoreImpact: 30,
        price: 80,
        image: "https://placehold.co/300x200?text=Raspberry+Pi",
        description: "Basse consommation, idéal pour l'auto-hébergement."
    },
    {
        id: 37,
        name: "Routeur Gaming RGB",
        type: "Réseau",
        origin: "Chine",
        scoreImpact: -20,
        price: 400,
        image: "https://placehold.co/300x200?text=Routeur+RGB",
        description: "Des lumières inutiles qui consomment H24."
    },
    {
        id: 38,
        name: "Serveur NAS Synology (Vide)",
        type: "Réseau",
        origin: "Taïwan",
        scoreImpact: 10,
        price: 300,
        image: "https://placehold.co/300x200?text=Synology",
        description: "Permet de se passer du Cloud (GAFAM)."
    },
    {
        id: 39,
        name: "Câble Ethernet Cat5e (Récup)",
        type: "Câble",
        origin: "Récupération",
        scoreImpact: 15,
        price: 2,
        image: "https://placehold.co/300x200?text=Cable+RJ45",
        description: "Fonctionne toujours très bien pour 1Gbps."
    },
    {
        id: 40,
        name: "Répéteur WiFi Premier Prix",
        type: "Réseau",
        origin: "Chine",
        scoreImpact: -10,
        price: 20,
        image: "https://placehold.co/300x200?text=Repeteur+WiFi",
        description: "Inefficace, finit vite à la poubelle."
    },

    // --- GADGETS & DIVERS ---
    {
        id: 41,
        name: "Montre Connectée Jetable",
        type: "Gadget",
        origin: "Chine",
        scoreImpact: -20,
        price: 30,
        image: "https://placehold.co/300x200?text=Smartwatch",
        description: "Batterie non remplaçable, OS propriétaire."
    },
    {
        id: 42,
        name: "PineTime Watch",
        type: "Gadget",
        origin: "Hong Kong",
        scoreImpact: 25,
        price: 30,
        image: "https://placehold.co/300x200?text=PineTime",
        description: "Open source, hackable, durable."
    },
    {
        id: 43,
        name: "Batterie Externe Solaire",
        type: "Accessoire",
        origin: "Chine",
        scoreImpact: 15,
        price: 40,
        image: "https://placehold.co/300x200?text=Powerbank+Solaire",
        description: "Utile si vraiment utilisée au soleil."
    },
    {
        id: 44,
        name: "AirTag",
        type: "Accessoire",
        origin: "Chine",
        scoreImpact: -15,
        price: 35,
        image: "https://placehold.co/300x200?text=AirTag",
        description: "Pile bouton, gadget souvent perdu lui-même."
    },
    {
        id: 45,
        name: "Chargeur Universel GaN",
        type: "Accessoire",
        origin: "Chine",
        scoreImpact: 20,
        price: 50,
        image: "https://placehold.co/300x200?text=Chargeur+GaN",
        description: "Un seul chargeur pour tout (PC, Tel), efficace."
    },
    {
        id: 46,
        name: "Cadre Photo Numérique",
        type: "Gadget",
        origin: "Chine",
        scoreImpact: -30,
        price: 80,
        image: "https://placehold.co/300x200?text=Cadre+Num",
        description: "Écran allumé pour rien. Imprimez vos photos !"
    },
    {
        id: 47,
        name: "Liseuse Kobo (Occasion)",
        type: "Tablette",
        origin: "Occasion",
        scoreImpact: 25,
        price: 60,
        image: "https://placehold.co/300x200?text=Kobo",
        description: "Remplace des tonnes de papier, basse conso."
    },
    {
        id: 48,
        name: "Enceinte Bluetooth Waterproof",
        type: "Audio",
        origin: "Chine",
        scoreImpact: -15,
        price: 40,
        image: "https://placehold.co/300x200?text=Enceinte+BT",
        description: "Difficilement recyclable, batterie intégrée."
    },
    {
        id: 49,
        name: "Kit de Réparation iFixit",
        type: "Outil",
        origin: "USA",
        scoreImpact: 50,
        price: 70,
        image: "https://placehold.co/300x200?text=iFixit+Kit",
        description: "L'arme absolue contre l'obsolescence programmée."
    },
    {
        id: 50,
        name: "Clé USB 2.0 Publicitaire",
        type: "Stockage",
        origin: "Chine",
        scoreImpact: -20,
        price: 0,
        image: "https://placehold.co/300x200?text=Cle+Pub",
        description: "Lente, donnée gratuitement, finit à la poubelle."
    }
];

// Export pour utilisation dans d'autres fichiers si module, sinon global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
} else {
    window.products = products;
}
