# Registre récapitulatif — Gestion de classe

Application web pour l'enseignant du primaire (Côte d'Ivoire) : liste des élèves, tableaux de scolarité, synthèse des effectifs et des âges, tableau récapitulatif à imprimer, compositions mensuelles, résultats de fin d'année et bulletins scolaires.

Elle s'installe sur le téléphone comme une application et fonctionne **sans internet**.

## Installer sur le téléphone

1. Ouvrir la page de l'application dans Chrome.
2. Menu ⋮ → **Ajouter à l'écran d'accueil** (ou **Installer l'application**).

## Où sont les données ?

Les classes sont enregistrées **dans le navigateur du téléphone**, pas sur GitHub ni sur un serveur.
Si le navigateur est réinitialisé ou le téléphone perdu, elles sont perdues : faites régulièrement une **Sauvegarde (.json)**. L'application le rappelle au bout de 7 jours.

⚠️ Ne jamais téléverser un fichier de sauvegarde dans ce dépôt : il est public.

## Publier une nouvelle version

1. Modifier `index.html`.
2. Dans `sw.js`, augmenter le numéro `VERSION` (par exemple `1.1.0` → `1.2.0`).
3. Téléverser les fichiers. Les téléphones verront le bandeau « Nouvelle version disponible ».

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'application (page, styles, code) |
| `sw.js` | Fonctionnement hors ligne et annonce des mises à jour |
| `manifest.webmanifest` | Nom, icônes et couleurs de l'application installée |
| `icon-*.png` | Icônes |

## Historique

- **1.1.0** — Lot 1 : correction de la perte de données après « Vider et saisir ma classe » ; mises à jour qui arrivent sur les téléphones ; restauration qui demande avant de remplacer une classe ; corbeille (30 jours) ; bouton Annuler ; rappel de sauvegarde ; contrôle des fichiers importés.
- **1.0.0** — Première version.
