# Mary Jackson — page encyclopédique (projet Hidden Voices)

Page web informative de type Wikipédia consacrée à **Mary Jackson**, première femme noire
ingénieure de la NASA. Conçue pour être accessible via QR code dans une scénographie autour
du projet **Hidden Voices**.

Site **statique** (HTML / CSS / JavaScript), sans dépendance, sans build.
Conçu **mobile-first** : la mise en page de base cible le mobile (consultation via QR code),
le desktop n'est qu'une amélioration progressive.

## Fichiers principaux

| Fichier | Rôle |
|---|---|
| `index.html` | Structure et **contenu texte** de la page (intro, sections, infobox) |
| `style.css` | Apparence mobile-first (style sobre type Wikipédia) |
| `script.js` | Surlignage de la section active dans le sommaire |
| `assets/mary-jackson.jpg` | Photo de l'encadré (portrait NASA 1979, **domaine public**) |

## Où modifier quoi

### ✍️ Modifier le texte
Tout le contenu rédactionnel est dans **`index.html`** :
- **Introduction** : les premiers `<p>` juste après `<h1 class="wp-title">Mary Jackson</h1>`.
- **Sections** : chaque chapitre est délimité par un titre `<h2 id="...">` (Biographie,
  Formation et débuts, Carrière à la NASA, Les Femmes de l'Ombre, Héritage, Dans la culture
  populaire, Notes et références). Modifiez le texte des `<p>` correspondants.
- **Encadré biographique (infobox)** : bloc `<aside class="wp-infobox">`. Chaque ligne est un
  `<tr><th>Libellé</th><td>Valeur</td></tr>` (Nom, Naissance, Décès, Nationalité, Domaine,
  Organisation, Connue pour).
- **Mention « Hidden Voices »** : en haut dans `<div class="project-banner">` et en bas dans
  `<p class="wp-footer-note">`.

### 🖼️ Remplacer l'image
Déposez votre image **libre de droit** dans `assets/`, puis dans `index.html` remplacez :
```html
<img src="assets/mary-jackson.svg" alt="...">
```
par exemple par :
```html
<img src="assets/mary-jackson.jpg" alt="Portrait de Mary Jackson">
```

### 🎨 Couleurs / style
Variables en haut de `style.css` (bloc `:root`) : bleu Wikipédia, gris, largeurs, polices.

## Aperçu en local
Ouvrez simplement `index.html` dans un navigateur, ou servez le dossier :
```bash
npx serve .
```

## Déploiement Vercel
Projet statique : aucun réglage de build. Importez le dépôt sur Vercel, ou en CLI :
```bash
npx vercel        # déploiement de preview
npx vercel --prod # déploiement en production
```
