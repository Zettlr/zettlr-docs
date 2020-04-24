# Bases Markdown

Comme beaucoup d'autres applications, Zettlr utilise `Markdown`, inventé à l'origine par [John Gruber] (https://daringfireball.net/). Bien sûr, sur une si longue période, un grand nombre de développements ont eu lieu, qui ont créé les possibilités des applications modernes de la démarque. Le présent document aborde les sujets suivants :

1. [A brief history of Markdown](#a-brief-history)
2. [Dialects of Markdown](#markdown-dialects)
3. [How Zettlr implements Markdown](#zettlr-and-markdown)
4. [Markdown 101: Headings, block elements, inline elements, links, images and footnotes](#markdown-101-the-most-important-codes)
5. [Further resources](#resources-on-markdown)

***

## Un bref historique

Depuis que l'ordinateur personnel est devenu largement disponible dans les années 1990, deux groupes de formats coexistaient : les documents de traitement de texte, tels que `.doc`, ou `.odt` et les documents de code, tels que `.js`, `.cpp` ou `.py`. Les deux groupes de documents contiennent du texte lisible par l'homme, mais il y avait une différence simple, mais énorme : Alors que les fichiers JavaScript ou C++ contiennent du texte en clair (c'est-à-dire uniquement le texte que vous voyez lorsque vous ouvrez un tel fichier), les documents de traitement de texte contiennent beaucoup plus de choses. Les documents de traitement de texte contiennent toujours des informations sur la taille de la page (par exemple, A4 ou lettre), sur la façon dont les différents blocs doivent être formatés (par exemple, la police des titres ou le nombre de citations en retrait). Si vous ouvrez un document Word/Office-document sur votre PC en ce moment, vous pouvez voir ce que je veux dire : Vous voyez immédiatement ce qu'est un titre en fonction de la taille et du poids de la police de son texte.

Pendant longtemps, ces deux groupes de documents sont restés aussi distincts que leurs utilisateurs. La plupart des employés de bureau ne savent utiliser que Microsoft Word ou Excel, voire des applications LibreOffice, alors que presque personne, dans le cadre d'une activité de STEM (_sciences et techniques..._), n'utiliserait volontairement Word ou un logiciel similaire. Ces scientifiques ont choisi une voie différente : ils ont développé un langage de programmation appelé LaTeX, qui leur permet de créer des fichiers PDF parfaitement formatés à partir d'un tas de codes - ils suivent le même flux de travail que les chercheurs en lettres et en sciences humaines ou les agents administratifs ordinaires, mais utilisent pour cela des documents différents.

Quand Markdown a été inauguré par John Gruber en 2004, c'était comme si on disait "Pourquoi pas les deux ?" Markdown combine à la fois l'expérience de lecture claire des documents de traitement de texte et les avantages des documents de code logiciel, qui sont à la fois polyvalents et faciles à utiliser - même pour les personnes qui ne savent que faire fonctionner Word ou Writer. Un petit exemple : Dans un traitement de texte, vous créez un titre en tapant "du texte" et en sélectionnant le format `Titre 1` dans un menu, alors que dans Markdown, vous tapez simplement `# some texte`, ce que le symbole hashtag vous indique immédiatement : "C'est un titre de premier niveau !"

Au début, Markdown était essentiellement un petit script que John Gruber avait écrit pour lui-même afin de produire ces bénéfices, et il contenait beaucoup d'incohérences et ne soutenait pas beaucoup d'éléments différents. Mais au fil des ans, des progrès ont été réalisés. Deux dates sont à noter :

- 2004: [John Gruber](https://daringfireball.net/projects/markdown/) lance dans un premier temps le programme Markdown
- 2012: Un groupe de développeurs forme [CommonMark](https://spec.commonmark.org/) pour normaliser Markdown en une norme acceptée au niveau international.

## Dialectes Markdown

Aujourd'hui, plusieurs implémentations de la syntaxe Markdown coexistent. Les plus notables sont :

- **MultiMarkdown**: Étend la syntaxe initiale avec des notes de bas de page, des tableaux et quelques métadonnées.
- **Markdown Extra**: Là encore, quelques ajouts à la syntaxe initiale.
- **GitHub Flavoured Markdown**: Il s'agit d'une variété de Markdown inventée par la plateforme d'hébergement GitHub (sur laquelle Zettlr est également hébergé !) et qui est aujourd'hui l'un des dialectes les plus courants.
- **Pandoc Markdown**: Pandoc Markdown est un sur-ensemble du Markdown aromatisé de GitHub et ajoute un support pour encore plus d'éléments.
- **CommonMark**: Essaie de mettre en œuvre tous les éléments possibles, tout en étant sans ambiguïté. Notamment, CommonMark n'inclut pas encore de spécification pour les notes de bas de page.

## Zettlr et Markdown

Le Zettlr lui-même met en œuvre un mélange de différents dialectes. L'éditeur lui-même ne met en évidence que la version GitHub de Markdown (plus quelques éléments supplémentaires, qui étendent la syntaxe de Markdown aux éléments de Zettelkasten. Ceux-ci sont décrits dans le [chapitre sur la méthode Zettelkasten](../academic/zkn-method.md)). Si vous exportez vos documents au format HTML et que Pandoc n'est pas installé, Zettlr convertira vos documents en utilisant la syntaxe Markdown aromatisée _GitHub_. Si disponible, Zettlr utilise Pandoc pour les exportations, qui lui-même lit vos documents Markdown en utilisant sa syntaxe _Pandoc Markdown_.

Mais Zettlr ne se limite pas à écrire Markdown. Si vous le souhaitez, vous pouvez également ajouter des commandes `LaTeX`. Ces commandes sont correctement interprétées lorsque vous convertissez en PDF. Elles sont omises lorsque vous convertissez en DOCX ou ODT. Et elles sont conservées lorsque vous convertissez en HTML. Bien entendu, vous pouvez aussi utiliser le code HTML ordinaire à n'importe quel endroit.

## Markdown 101: Les codes les plus importants

Bien que Markdown puisse faire beaucoup de choses, dans cette section je veux vous décrire les éléments les plus importants que vous utiliserez le plus, et comment vous pouvez les utiliser dans Zettlr.

### Titres

Les titres sont simples. Ils doivent être placés sur leur propre ligne et doivent être indiqués à l'aide d'un symbole hashtag. Six niveaux de rubriques sont à votre disposition :

- `# Heading text` — donne un titre de premier ordre
- `## Heading text` — donne un titre de second ordre
- `### Heading text` — donne un titre de troisième ordre
- `#### Heading text` — donne un titre de quatrième ordre
- `##### Heading text` — donne un titre de cinquième ordre
- `###### Heading text` — donne un titre de sixième ordre

### Formatage en ligne

Bien entendu, tout comme dans les traitements de texte, vous pouvez utiliser le formatage en ligne, tel que le texte en **gras** ou _italique_, ou le texte `monospaced` (pour le code).

- `**your text**` — donne un texte en gras
- `_your text_` — donne un texte en italique
- \`your text\` — donne un texte à espacement fixe

### Blocs d'éléments

Parfois, vous pouvez vouloir mettre l'accent sur un bloc entier de texte (comme une citation plus longue), ou créer des listes. C'est également possible et extrêmement simple en utilisant Markdown.

- Créez des listes d'articles en ajoutant à chaque ligne un caractère `-`, un `*` ou un `+`. Si vous le souhaitez, vous pouvez mélanger ces symboles !
- Les listes triées doivent être précédées de numéros au format `1.`.

> **Note** : Les numéros ne doivent pas être dans l'ordre. A chaque exportation, le convertisseur les numérotera automatiquement et correctement en ordre croissant, de sorte qu'une liste contenant les numéros de liste 1, 6, 14, 2 sera rendue comme une liste utilisant les numéros 1, 2, 3, 4 !

### Liens et images

Les liens sont des éléments en ligne et les images sont des éléments en bloc, ils suivent donc la même sémantique que les éléments évoqués ci-dessus. Pourtant, ils méritent un peu plus d'attention, car ils vous offrent plus d'options.

Les liens sont établis en utilisant la syntaxe suivante : `[This text will appear in your final document](http://this-is-your-actual-link.tld)` Zettlr convertira automatiquement cette syntaxe en un lien cliquable (suivez la cible du lien en cliquant dessus tout en maintenant la touche `ALT` ou `Ctrl`) pour la facilité d'accès (et pour raccourcir ces liens plutôt longs).

Les images fonctionnent exactement comme les liens, sauf qu'elles commencent par un point d'exclamation ( !). Bien entendu, les images ont également besoin d'un chemin d'accès, car elles ne sont pas stockées dans un document en texte brut. Vous pouvez donc utiliser trois approches différentes pour relier les images dans votre document :

1. Utilisez un URL Web absolu, tel que https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1000px-Markdown-mark.svg.pngMarkdown.
2. Utilisez un chemin d'accès absolu à un fichier sur votre propre ordinateur, tel que `C:\Users\user-name\Pictures\my-image.jpg`.
3. Utilisez un chemin d'accès relatif à un fichier sur votre propre ordinateur, tel que `../img/my-image.png`.

> **Astuce** : Vous pouvez fournir un chemin d'image par défaut dans l'onglet "Editeur" des préférences, que Zettlr utilisera toujours lorsque vous collerez une image dans l'éditeur.

Le cheminement relatif est toujours relatif au document dans lequel vous le placez. Le répertoire `..` indique à Zettlr de chercher l'image dans le répertoire parent (c'est-à-dire de remonter d'un répertoire). Si vous stockez vos documents dans un nuage et que vous y accédez sur différents périphériques, vous utiliserez naturellement les chemins relatifs des images, car les chemins absolus seront certainement différents (surtout si vous travaillez avec deux systèmes d'exploitation différents).

> **Astuce** : Essayez d'insérer des images et des liens en utilisant toujours leurs raccourcis, `Cmd/Ctrl+K` pour les liens et `Cmd/Ctrl+Shift+I` pour les images. Si vous avez un chemin d'accès valide dans votre presse-papiers, il l'insérera même automatiquement pour vous, ce qui vous facilitera la vie. La meilleure façon d'insérer un lien, par exemple, serait donc de copier d'abord le lien dans votre presse-papiers, puis de sélectionner le texte que vous souhaitez lier et enfin d'appuyer sur `Cmd/Ctrl+K`. Le texte sélectionné deviendra alors le texte du lien affiché et le lien de votre presse-papiers sera utilisé comme cible du lien.

### Notes de bas de page

Les notes de bas de page sont ce qui intéresse bien sûr la plupart des chercheurs en arts et en sciences humaines. Voici donc quelques règles générales pour l'insertion de notes de bas de page et la manière dont Zettlr interagit avec elles. Selon la syntaxe standard de Markdown, les notes de bas de page nécessitent deux éléments : Premièrement, la référence quelque part dans le texte au format `[^x]`. Le `x` représente un identifiant unique. En gros, vous pouvez utiliser ce que vous voulez, tant que cet identifiant n'est pas utilisé par une deuxième note de bas de page. Mais normalement, vous voudrez vous en tenir à des nombres ascendants. (Aussi : ces numéros n'ont pas besoin d'être en ordre -- tant que vous exportez votre document de démarque, Pandoc renumérotera automatiquement les notes de bas de page correctement. Ainsi, si vous décidez de supprimer une note de bas de page plus tard, ne vous inquiétez pas que les numéros ne correspondent plus parfaitement dans votre document).

Le deuxième élément requis pour les notes de bas de page est un élément de bloc, la note de bas de page _texte de référence_. Elle est toujours au format suivant : `[^x] : votre texte de référence`. Comme vous pouvez le voir, l'identifiant est une réplique de votre référence qui apparaît dans le texte, seulement maintenant il est suivi par un deux-points. Le bon sens veut que vous mettiez vos références dans une liste à la toute fin de votre document. Pourtant, ce saut entre le texte de référence et la référence de votre note de bas de page est encombrant, et c'est pourquoi Zettlr essaie de vous faciliter la vie. Déplacez votre souris sur une référence de note de bas de page pour voir le texte de la note. Cliquez dessus tout en maintenant la touche `Alt` ou `Ctrl` enfoncée pour modifier la note de bas de page. Appuyez sur `Maj+Retour` pour enregistrer vos modifications.

### Blocs de code délimités

Zettlr soutient également ce qu'on appelle les "blocs de code clôturés". Il s'agit de la version en bloc de l'élément de code en ligne. Pour démarrer un bloc de code, tapez trois "\`" à la suite sur une ligne vide. Pour refermer le bloc de code, tapez trois backticks "\`" sur une ligne vide. Tout ce qui se trouve entre ces deux "clôtures" sera rendu en utilisant une police monospace pour indiquer qu'il s'agit bien de code.

Zettlr prend en charge la coloration syntaxique pour plusieurs langages de script et de programmation. Vous devez indiquer explicitement à Zettlr quel langage utiliser en ajoutant simplement son identifiant _directement après l'introduction du code de clôture_. Ainsi, pour que Zettlr mette en évidence une clôture de code à l'aide d'un interpréteur JavaScript, il faudrait commencer le bloc de code par trois bâtons (_"backsticks"_), directement suivis du mot "javascript" sur une ligne vide.

Actuellement, les langues suivantes sont prises en charge par le moteur (les noms entre parenthèses sont les identifiants que vous devriez utiliser dans Zettlr, car ils ne contiennent pas de caractères spéciaux, ce qui pourrait perturber un moteur) :

- C (c)
- C# (csharp)
- C++ (cpp)
- CSS (css)
- Go (go)
- Java (java)
- JavaScript (javascript)
- Kotlin (kotlin)
- LESS (less)
- Objective C (objectivec)
- PHP (php)
- Python (python)
- R (r)
- Ruby (ruby)
- SQL (sql)
- Swift (swift)
- Shell/Bash
- YAML (yaml)

D'autres langues peuvent être mises en œuvre à votre demande. Si vous avez besoin d'une langue spécifique, veuillez [consulter les langues disponibles](https://codemirror.net/mode/) et ouvrir un numéro sur GitHub, afin que nous sachions laquelle nous devons ajouter !

## Ressources sur Markdown

Vous voulez _tout_ apprendre sur la démarque ? C'est génial ! Une bonne ressource qui couvre tous les éléments se trouve sur [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/). Si vous voulez vous habituer à écrire des notes claires et nettes, [voir les spécifications de CommonMark](https://spec.commonmark.org/0.28/). Il existe également un "livre" sur la syntaxe GitHub de la démarque. [Voir ici](https://gitbookio.gitbooks.io/markdown/content/).
