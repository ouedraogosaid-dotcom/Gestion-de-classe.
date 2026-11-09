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
| `lib/` | Lecture des fichiers PDF (pdf.js, licence Apache 2.0) et des fichiers Excel/Word (pako, licence MIT), chargés seulement à l'import |
| `fonts/` | Polices Inter et Poppins (licence SIL OFL, voir `fonts/LICENCE-POLICES.txt`) |

## Organisation de l'application (2.0)

- **Barre du bas** (barre latérale sur ordinateur) : Accueil · Élèves · Notes · Organisation · Plus.
- **Accueil** : carte de bienvenue, indicateurs, actions rapides, activités du jour (appels du matin et du soir, agenda, tâches) avec leur statut, situation de la classe, sauvegarde.
- **Organisation** : cahier journal, calendrier de l'année, agenda, emploi du temps, tâches de l'année.
- **Plus** : documents, ressources (fournitures, manuels, inventaire, chants), vie professionnelle (visites, bloc-notes, envoi au directeur, Mon école), administration (sauvegarde, classes, établissement, paramètres, aide).
- En haut : recherche, notifications, paramètres.

## Historique

- **2.4.1** — Cahier journal : sur le téléphone, chaque jour n'affiche que les disciplines prévues (semaine type) ou déjà remplies, avec un bouton pour voir les autres ; à l'impression, les colonnes restées vides toute la semaine sont retirées.
- **2.4.0** — Cahier journal : chargement de la répartition mensuelle (PDF tapé, Word ou Excel : semaines en colonnes, matières en lignes) et remplissage automatique des semaines selon la « semaine type » (jours de chaque discipline, à cocher une fois, repris de l'emploi du temps si possible) ; une leçon sur deux semaines continue sa numérotation (S4, S5, S6) ; plusieurs leçons dans la semaine réparties sur les jours ; congés sautés ; cases déjà remplies conservées (sauf demande). Colonnes du cahier journal : les 15 matières de la répartition. Réimpression de la répartition depuis Documents.
- **2.3.5** — Notes : le bouton des matières à noter prend l'apparence du choix du mois (même taille d'écriture), avec le nombre de matières notées.
- **2.3.4** — Cahier journal imprimé : écriture plus grande dans les cases (même taille que l'en-tête de la semaine), mots non coupés, lignes qui occupent toute la feuille.
- **2.3.3** — Notes : « Effacer la composition » déplacé tout en bas de la page, séparé des autres boutons, avec confirmation en écrivant EFFACER (et bouton Annuler juste après).
- **2.3.2** — Champs de saisie bien visibles (bordure, fond contrasté en thème sombre, indication « Note » dans la saisie des notes).
- **2.3.1** — Cahier journal : chaque discipline a sa propre colonne (EDHC, expression orale, lecture, expression écrite, mathématiques, sciences et technologie, histoire, géographie, poésie, chant, dessin, EPS) ; les cahiers déjà commencés sont mis à jour sans perte.
- **2.3.0** — Cahier journal (Organisation) : une page par semaine et par classe ; lignes = jours (lundi, mardi, jeudi, vendredi par défaut), colonnes = disciplines (modifiables par classe) ; dans chaque case la séance (S1, S2…), le titre de la leçon et la page ; « Séance suivante » reprend la leçon avec le numéro suivant, même d'une semaine à l'autre ; recopie de la semaine précédente ; séance faite ou reportée ; numéro de semaine proposé (congés sautés) ; impression A4 paysage avec la colonne du visa du directeur.
- **2.2.1** — Retrait du chef de classe / sous-chef et des équipes de balayage (écran, accueil, Organisation) ; l'onglet « Vie de classe » devient « Tirage au sort ». Les anciennes données restent conservées dans le fichier.
- **2.2.0** — CM2 : examens blancs (2) qui comptent dans la moyenne annuelle avec les compositions trimestrielles, pas de composition de passage ; onglet CEPE (candidats, résultats, taux de réussite garçons/filles), repris en fin d'année. Alerte d'absences répétées (6 par mois par défaut, réglable) avec convocation du parent ; présence sur l'année (graphique, élèves les plus absents) ; dossier complet de l'élève ; rapport de fin d'année pour l'IEPP ; message à tous les parents par WhatsApp ; minuteur et chronomètre en grand ; actions rapides de l'accueil au choix ; passer la classe à un remplaçant ; témoin « hors ligne ».
- **2.1.0** — Organisation : calendrier de l'année (trimestres, compositions trimestrielles, congés, grandes vacances), avec le calendrier officiel 2026-2027 à ajouter d'un geste (rentrée le 14 septembre 2026, congés de Toussaint, Noël, février, Pâques, grandes vacances). Documents : rubrique « Compositions » listant chaque composition saisie (tableau des notes, bulletins, tableau d'honneur) et le récapitulatif de toutes les compositions.
- **2.0.0** — Refonte de l'interface : thème bleu nuit et ambre (clair et sombre), une seule police (Inter), cartes plus compactes ; nouvelle barre de navigation et espaces Organisation et Plus ; tableau de bord du jour avec statuts (à faire, en cours, terminé, en retard) ; situation de la classe (dernière composition, moyenne, meilleur résultat, taux de réussite, élèves en difficulté, points à vérifier) ; centre de notifications ; recherche élargie. Données, calculs, impression et sauvegardes inchangés (seul ajout : l'équipe de nettoyage peut être marquée « faite » chaque jour).
- **1.13.3** — Appel : bilan de fin de mois pour la classe (garçons, filles, total) — présences possibles (effectif × nombre d'appels), présences effectives, absences, taux de présence et taux d'absence ; plus de taux par élève ; un retard compte comme présent.
- **1.13.1** — Fiche de présence du mois à imprimer (Documents, ou bouton dans le cahier d'appel) : pour chaque élève, l'appel du matin et du soir de chaque jour, présences, absences et taux ; bilan garçons, filles et classe (présences, absences, retards, taux de présence, taux d'absence).
- **1.13.0** — Cahier d'appel en deux temps : appel du matin et appel du soir (une journée = 2 présences ou 2 absences). Bilan du mois : total des présences et des absences, retards, taux de présence et taux d'absence par élève et pour la classe ; bouton « Mêmes absents que le matin » ; feuille d'appel papier avec une case matin et une case soir par jour ; rapport mensuel mis à jour. Les appels déjà faits comptent pour le matin et le soir.
- **1.12.0** — Menu ☰ en haut à droite : tous les écrans y sont rangés (Accueil, Élèves, Notes, Documents, Mon école pour le directeur, Réglages), l'écran ouvert est mis en évidence, le bouton Retour le ferme. La barre de navigation du bas est retirée.
- **1.11.1** — Notes : boutons « Type de composition » (Mensuelle, Trimestrielle, Passage), puis le mois ou le trimestre ; un message indique si la composition compte ou non dans la moyenne annuelle.
- **1.11.0** — Importer une liste de classe depuis un fichier PDF (tapé à l'ordinateur), Excel (.xlsx) ou Word (.docx) : noms, sexe, matricule et date de naissance sont reconnus grâce à l'en-tête du tableau, puis vérifiés avant l'ajout. Aide pour une liste sur papier ou en photo (Google Lens). Le bouton « PDF » des documents devient « Envoyer ».
- **1.10.0** — Finitions : le bouton Retour du téléphone revient à l'écran précédent (et ferme les fenêtres) au lieu de quitter ; bouton « Installer l'application » ; « Quoi de neuf » après chaque mise à jour ; couleurs au choix (bleu, ou orange et vert ivoiriens) ; recherche générale (élèves, documents, outils) ; moyennes de l'élève par matière sur l'année avec points forts et à renforcer ; démarrage guidé avec rôle et niveaux ; jauge de mémoire, alerte si la mémoire est pleine, vider la corbeille, retirer les photos ; colonnes des noms fixes dans les grands tableaux ; application plus fluide et compatible avec les anciens téléphones.
- **1.9.0** — Lot 6 : bouton « PDF » sur chaque document (vrai fichier PDF fabriqué dans le téléphone, à envoyer par WhatsApp) ; résumé du bulletin envoyé à chaque parent par WhatsApp (numéro de la fiche élève) ; export Excel (.xlsx : élèves, notes de chaque composition, fin d'année) ; sauvegarde envoyée vers Google Drive ou WhatsApp, restaurable.
- **1.8.0** — Lot 5B : onglet Statistiques dans Notes (évolution de la moyenne de la classe, des garçons et des filles ; répartition des résultats ; réussite par composition ; suivi par matière ; comparaison garçons/filles ; pyramide des âges), imprimable ; courbe d'évolution dans la fiche de chaque élève ; registre des visites ; inventaire de la classe ; tâches de rentrée et de fin d'année.
- **1.7.0** — Lot 5A : 16 nouveaux documents à imprimer avec en-tête officiel — liste d'émargement, étiquettes de noms, relevé de notes vierge, feuille d'appel du mois, liste personnalisée, liste des redoublants, tableau d'honneur, satisfecits, liste des admis, récapitulatif annuel, bilan PNAPAS, fiche de renseignements, attestation de scolarité, fiche de transfert, convocation des parents, rapport mensuel du maître.
- **1.6.2** — Mois de chaque composition trimestrielle (ex. « Composition du 1er trimestre (décembre) »), repris sur les bulletins et le tableau annuel. Enregistrement immédiat quand on quitte l'application.
- **1.6.1** — Trois types de compositions : évaluations mensuelles (école, ne comptent pas), compositions trimestrielles (comptent) et composition de passage. Moyenne annuelle = (moyenne des trimestrielles + passage × 2) ÷ 3, poids du passage réglable. Barème /40 ajouté.
- **1.6.0** — Lot directeur : rôle maître ou directeur ; le maître envoie sa classe au directeur d'un geste (partage WhatsApp, ou fichier à joindre) ; le directeur importe les classes dans « Mon école » (lecture seule, mise à jour à chaque envoi, maîtres à relancer), voit les effectifs et résultats de toute l'école, sa propre classe comprise, et les imprime avec l'en-tête officiel.
- **1.5.0** — Lot 4 : saisie des notes « une matière à la fois » (idéale sur téléphone) ; conduite et mot du maître par composition, avec appréciations proposées et vos propres formules retenues ; en-tête officiel (République de Côte d'Ivoire, devise, ministère) et logo de l'école sur les bulletins et documents ; moyennes précédentes sur le bulletin ; bulletin grand format (1 par feuille) ; impression d'une partie des bulletins ; contrôle des notes et âges manquants avant impression.
- **1.4.0** — Lot 3B : arrivées et départs en cours d'année (les partis ne comptent plus dans l'effectif) ; passage à l'année suivante (admis, redoublants) ; archives ; plusieurs maîtres sur un même téléphone ; code facultatif à l'ouverture ; outils de la classe sur l'accueil : agenda et rappels du jour, compteur avant la prochaine composition, anniversaires, emploi du temps, fournitures (liste de rentrée et manquants), manuels et kits (remis, rendus), bloc-notes, chants et récitations affichés en grand.
- **1.3.1** — Salle commune : plusieurs classes (ex. CE1 et CE2 dans la même salle) partagent leurs groupes PNAPAS et d'EPS ; notes et classements restent séparés. Réglages → « Même salle que ».
- **1.3.0** — Lot 3A : fiche élève complète (naissance, parent, téléphone, observations, photo) ; profil de l'école repris pour les nouvelles classes ; niveau(x) de la classe ; matières personnalisables (ajouter, renommer, barème, ordre) ; import rapide d'une liste (coller, dicter, CSV, copier depuis Excel) ; cahier d'appel (suivi personnel) ; groupes d'EPS en couleurs ; groupes de niveau PNAPAS (CE1 à CM2, français et maths, classe hétérogène ou homogène) ; chef et sous-chef ; équipes de balayage par jour ; tirage au sort ; bloc « Aujourd'hui » sur l'accueil.
- **1.2.0** — Lot 2 : nouvelle organisation en 5 rubriques (Accueil, Élèves, Notes, Documents, Réglages) avec barre de navigation en bas ; nouveau design bleu, clair et sombre, avec animations ; bouton Imprimer dans chaque document ; fiches élèves en cartes et recherche ; tableau de bord ; démarrage guidé ; aide intégrée ; taille du texte, mode léger et impression économique ; polices intégrées (fonctionne entièrement hors ligne).
- **1.1.0** — Lot 1 : correction de la perte de données après « Vider et saisir ma classe » ; mises à jour qui arrivent sur les téléphones ; restauration qui demande avant de remplacer une classe ; corbeille (30 jours) ; bouton Annuler ; rappel de sauvegarde ; contrôle des fichiers importés.
- **1.0.0** — Première version.
