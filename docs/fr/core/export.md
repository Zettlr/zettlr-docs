# Exporter dans Zettlr

L'exportation de fichiers est une interface importante entre vos notes et d'autres personnes. Grâce à l'option d'exportation, vous pouvez :

1. Prévisualisez un fichier, par exemple au format HTML, et imprimez-le également. (L'impression d'une note à l'aide de `Cmd/Ctrl+P` exportera la note en interne au format HTML.)
2. Exportez-le dans un format avec lequel d'autres personnes peuvent travailler, comme des fichiers Word ou OpenDocument.
3. Exportez-le au format PDF pour le soumettre (par exemple, des documents de séminaire) ou, également, pour l'imprimer.

## Préparer les exportations

Toutes les exportations dans Zettlr, sont faites en utilisant les logiciels libres Pandoc et LaTeX. Pandoc est nécessaire pour toutes les exportations, car tout sera d'abord converti par lui. LaTeX n'est nécessaire que pour l'exportation au format PDF.

> Si Pandoc n'est pas installé sur votre système, vous pourrez toujours exporter vers le format HTML. Dans ce cas, Zettlr analysera le fichier en interne en utilisant `Showdown.js`, mais cette bibliothèque ne supporte pas autant de fonctionnalités que Pandoc. Veuillez consulter le [guide d'installation](../install.md) pour installer Pandoc et LaTeX sur votre ordinateur.

Zettlr fera des efforts raisonnables pour localiser les deux paquets. Si l'application n'a pas pu localiser les binaires, elle lancera une erreur.

**Au cas où vous auriez installé les deux paquets, mais que Zettlr ne veut toujours pas exporter**, jetez un coup d'oeil à vos préférences. Dans l'onglet "Avancé", il y a deux champs de texte qui vous permettent d'entrer les chemins d'accès à l'exécutable Pandoc et à l'exécutable XeLaTeX. Il suffit de les y placer, de redémarrer, et cela devrait fonctionner. Si ce n'est pas le cas, veuillez nous le faire savoir !

![The advanced settings tab](../img/settings_advanced.png)

## Options d'exportation

Depuis la version `0.17`, Zettlr vous offre une pléthore d'options pour exporter des documents en fonction de vos besoins. Elles sont réparties dans deux dialogues différents. Les options générales d'exportation se trouvent dans la fenêtre des préférences. Ouvrez-la, et naviguez jusqu'à l'onglet "Exporter". Vous y trouverez deux sections vous permettant de personnaliser les exportations. Premièrement, vous pouvez sélectionner le répertoire dans lequel les fichiers résultants doivent être stockés.

- En sélectionnant le répertoire temporaire, Zettlr enregistrera vos documents d'exportation dans le répertoire temporaire. Le répertoire temporaire est un dossier spécial sur chaque système d'exploitation qui est utilisé pour les fichiers temporaires et qui est expurgé dès qu'un fichier n'est plus nécessaire. C'est une bonne chose si vous ne voulez pas stocker les fichiers exportés où que ce soit sur votre système. Si vous exportez vos fichiers dans le répertoire temporaire, vous devrez les enregistrer explicitement ailleurs pour le rendre persistant.
- En choisissant le répertoire de travail actuel (cwd), Zettlr enregistre vos documents exportés dans le répertoire actuellement sélectionné. De cette façon, vous n'avez pas besoin de sauvegarder explicitement vos documents hors du répertoire temporaire pour les rendre accessibles en permanence. **Veuillez noter que le moteur d'exportation ne vous demandera pas de confirmer s'il est sur le point d'écraser un fichier !**

La deuxième section propose des options pour indiquer à Zettlr ce qu'il doit faire des éléments du Zettelkasten qu'il prend en charge. Si vous souhaitez savoir à quoi servent ces éléments, veuillez consulter la [section respective des documents](../academic/zkn-method.md). Cette section vous permet de conserver ou de supprimer ces éléments lors de l'exportation, car dans la plupart des cas, ils ne sont utiles et nécessaires que dans l'application elle-même, et ne doivent pas apparaître dans les documents exportés.

Une deuxième section qui contient les préférences pour les exportations est située dans la boite de dialogue `PDF Preferences`. Vous pouvez l'ouvrir en utilisant le menu (il est situé directement sous l'élément de menu des préférences normales) ou en utilisant le raccourci `Cmd/Ctrl+Alt+,`. Cette boîte de dialogue propose des options pour les exportations au format PDF. Vous pouvez choisir un ensemble d'options de formatage, telles que le type de papier, les marges des pages, la police ou la taille de la police, et si vous voulez ou non des numéros de page, et si oui, lesquels. La plupart des options d'exportation seront explicites et ressembleront à celles des traitements de texte standard.
