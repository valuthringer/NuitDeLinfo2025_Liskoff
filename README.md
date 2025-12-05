# Nuit de l'Info 2025 - Liskoff

URL du site : https://valuthringer.github.io/NuitDeLinfo2025_Liskoff/index.html

Projet web statique réalisé pour la Nuit de l'Info 2025. Le site propose plusieurs activités/pages (accueil, formation, QCM, boutique, roleplay, etc.) avec un style commun et des scripts dédiés.

## Sommaire
- Présentation
- Structure du projet
- Lancer le site en local
- Pages et fonctionnalités
- Scripts et styles
- Contribution

## Présentation
Ce dépôt contient un site web statique organisé par pages indépendantes. Chaque page possède son fichier HTML, son CSS dédié (complété par `css/common.css`) et éventuellement un script JS spécifique. Aucune dépendance externe n'est requise pour l'affichage de base.

## Structure du projet
```
NuitDeLinfo2025_Liskoff/
	index.html                # Accueil
	formation.html            # Page formation
	qcm.html                  # QCM interactif
	boutique.html             # Boutique / produits
	roleplay.html             # Scénarios roleplay
	degueu.html               # Page thème "dégueu"
	assets/                   # Images, médias
		roleplay/
	css/                      # Feuilles de style
		common.css              # Styles partagés
		home.css, formation.css, qcm.css, boutique.css, roleplay.css, degueu.css
	scripts/                  # Scripts JS
		global.js               # Logique commune
		home.js, formation.js, qcm.js, boutique.js, roleplay.js, products.js, matrix.js
```

## Pages et fonctionnalités
- `index.html` : page d'accueil, entrée vers les autres sections.
- `formation.html` : contenus de formation, styles via `css/formation.css` et logique dans `scripts/formation.js`.
- `qcm.html` : questionnaire interactif, `css/qcm.css` + `scripts/qcm.js`.
- `boutique.html` : affichage des produits, `css/boutique.css` + `scripts/boutique.js` et `scripts/products.js`.
- `roleplay.html` : scénarios et interactions, `css/roleplay.css` + `scripts/roleplay.js`, médias dans `assets/roleplay/`.
- `degueu.html` : page thématique, `css/degueu.css`.

## Scripts et styles
- Styles communs : `css/common.css` définit la base (variables, layout générique).
- Styles par page : `css/<page>.css` complète/override les styles communs.
- Scripts communs : `scripts/global.js` pour comportements partagés.
- Scripts spécifiques : `scripts/<page>.js` pour la logique de chaque page.
- Utilitaires/effets : `scripts/products.js` (données/produits), `scripts/matrix.js` (effet graphique/animation si utilisé).

---
Contact: équipe Liskoff — Nuit de l'Info 2025.
