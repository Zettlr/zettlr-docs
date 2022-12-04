# Localisation

Zettlr n'est pas seulement capable d'importer et d'exporter un grand nombre de formats différents, il vous offre également la possibilité de traduire l'interface graphique et d'utiliser vos dictionnaires de vérification orthographique préférés. Vous pouvez facilement importer de nouveaux dictionnaires et traduire l'interface utilisateur à votre guise.

Zettlr est livré avec les langues suivantes :

- Anglais (Royaume Uni)
- Anglais (Etats-Unis)
- Allemand (Allemagne)
- Français (France)

L'application comprend les dictionnaires suivants:

- Anglais (Royaume Uni)
- Anglais (Etats-Unis)
- Allemand (Allemagne)
- Français (France)
- Espagnol (Espagne)
- Néerlandais (Pays-Bas)
- Turque
- Russe
- Ukrainien

## Installer des nouveaux dictionnaires

Bien sûr, vous souhaiterez peut-être installer de nouveaux dictionnaires pour les langues dans lesquelles vous écrivez et qui ne sont pas fournis avec l'application. C'est facile à faire. Zettlr utilise les dictionnaires populaires Hunspell qui sont également utilisés par des logiciels bien connus tels que les applications LibreOffice ou Mozilla.

Pour activer la vérification orthographique pour une langue spécifique, ouvrez simplement le dossier du dictionnaire utilisateur en sélectionnant `Fichier` -> `Importer un fichier de traduction…` dans le menu. Zettlr ouvrira alors le dossier dans lequel vous devez placer les fichiers de dictionnaire.

Le dictionnaire se compose de deux fichiers, l'un est un fichier `.dic` et l'autre est un fichier `.aff`. Ils doivent être placés dans un dossier nommé d'après la langue que vous souhaitez importer. Supposons que vous souhaitiez importer le dictionnaire pour le portugais. Vous devez le récupérer à partir d'un référentiel, par exemple [le repository GitHub de l'utilisateur wooorm a un ensemble complet](https://github.com/wooorm/dictionaries/tree/main/dictionaries). Ensuite, vous devez simplement vous assurer que le dossier est nommé `pt-PT` et que les deux fichiers sont nommés` pt-PT.dic` et `pt-PT.aff`. Les autres fichiers à l'intérieur du répertoire seront ignorés par Zettlr. Dès que vous avez placé vos fichiers dans le répertoire `dict`, ouvrez les préférences et Zettlr devrait lister votre dictionnaire nouvellement importé!

> **Astuce :** Zettlr essaie de traduire automatiquement les chaînes de caractères de la langue, mais dans certains cas, il peut arriver que Zettlr ne contienne pas de traduction pour des langues spécifiques. Dans ce cas, Zettlr se replie sur le code de langue et l'affiche comme, par exemple, «pt-PT».

## Traduire l'application

Pour aider à traduire l'application, veuillez consulter la [page Impliquez-vous](../get-involved.md).
