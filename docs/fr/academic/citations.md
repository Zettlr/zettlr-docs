# Citer avec Zettlr

A partir de la version `1.0.0`, il est possible de citer les sources directement en utilisant Zettlr. Cette fonctionnalité rend la rédaction d'articles universitaires beaucoup plus facile que par le passé, car il n'est plus nécessaire de contourner la fonction d'exportation de Zettlr pour citer réellement des articles universitaires !

La citation dans Zettlr se fait en utilisant `citeproc-js`, une bibliothèque qui fonctionne exactement comme, par exemple, le moteur citeproc de pandoc, ou Zotero. Ainsi, ce que vous verrez dans Zettlr correspond à ce que les plugins Word ou LibreOffice de Zotero génèrent. Le moteur de citation de Zettlr est composé de trois éléments : une bibliothèque CSL JSON ou BibTex qui contient tous les éléments pouvant être cités, et éventuellement une feuille de style CSL qui peut modifier le style de citation par défaut de Zettlr (qui est le [American Psychological Association's 6th edition](https://www.apastyle.org/manual/index), en abrégé : APA), et un moteur de prévisualisation. Ce guide vous aidera à activer les citations et à produire des fichiers de belle apparence (pas seulement en PDF !) qui contiennent des citations correctes et cohérentes.

> A partir de la version `1.3.0`, vous pouvez également utiliser les bibliothèques BibTex pour les citations.

## Permettre les citations dans Zettlr

Il existe deux moteurs différents qui appartiennent au domaine de la citation : les prévisualisations (les citations peuvent être prévisualisées tout comme les images ou les liens) et le processus réel de génération des citations (qui se produit uniquement à l'exportation). Ces deux fonctions sont déclenchées par la sélection d'une bibliothèque de citations qui contient des références. Sans une telle bibliothèque, Zettlr "prévisualisera" toujours les citations (afin que vous puissiez voir ce qui déclenchera le citeproc de pandoc), mais Zettlr ne remplacera pas le contenu de la citation par une citation générée. De plus, si vous ne spécifiez pas une telle bibliothèque, Zettlr ne lance _pas_ Pandoc avec son moteur citeproc, et donc n'analysera pas les citations.

Ainsi, la première étape consiste à créer un tel fichier. Zotero est l'application recommandée pour la gestion de votre bibliothèque. Ce tutoriel suppose donc que vous utilisez Zotero. Si vous utilisez un autre programme, veuillez vérifier comment exporter de votre logiciel vers le format CSL JSON.

> Si vous utilisez Mendeley, Citavi, ou tout autre logiciel de gestion des références qui n'exporte pas vers CSL JSON, vous pouvez simplement utiliser les fichiers BibTex. Ils fonctionneront de la même manière que les fichiers CSL JSON.

### Étape 1 : Installer BetterBibTex

La première étape consiste à installer [the BetterBibTex-plugin pour Zotero](https://github.com/retorquere/zotero-better-bibtex/releases/latest). Le principal avantage de ce plugin est qu'il permet de garder vos identifiants de citation uniques dans toute votre bibliothèque. Chaque citation a son propre identifiant unique. Ceci est nécessaire pour que, lorsque vous vous rendez compte par exemple que la date de publication a été enregistrée de manière erronée, vous puissiez facilement la modifier dans Zotero et ensuite citeproc utilisera les informations corrigées. Si vous n'utilisez pas BetterBibTex, il peut toujours arriver qu'un identifiant soit délivré plusieurs fois, ce qui pourrait soit générer des erreurs (la bonne façon, car vous savez que quelque chose ne va pas), soit simplement utiliser le premier élément qui correspond à cet identifiant (la mauvaise façon, car il faudrait alors avoir de la chance pour repérer la mauvaise citation après l'exportation).

Une fois que vous avez installé BetterBibTex, vous voudrez peut-être jouer un peu avec les paramètres (par exemple dans la façon dont les ID sont générés).

> **Astuce**: BetterBibTex génère automatiquement des clés uniques à l'aide d'un algorithme que vous pouvez personnaliser. Pour la plupart, il utilise les [JabRef Patterns](http://help.jabref.org/en/BibtexKeyPatterns) mais les étend considérablement. Il s'assurera même que chaque entrée est unique en ajoutant éventuellement un suffixe aux publications qui donnent les mêmes clés (par exemple, vous aurez quelque chose comme`Harvey2005a`, `Harvey2005b`, `Harvey2005c`, et ainsi de suite). Vous trouverez [toutes les fonctionnalités de BetterBibTex dans la vaste documentation du plugin](https://retorque.re/zotero-better-bibtex/citation-keys/).

### Étape 2 : Exporter votre bibliothèque

L'étape suivante consiste à exporter votre bibliothèque. La tâche de Zotero est de gérer vos références, mais les citer est une autre tâche, qui est effectuée par citeproc. Et citeproc a besoin d'un fichier séparé pour cela.

Pour exporter une telle bibliothèque que Zettlr et pandoc's citeproc peuvent utiliser, sélectionnez d'abord la collection que vous voulez exporter dans la barre latérale gauche. Pour avoir toujours tous vos ouvrages à votre disposition et pour éviter de devoir exporter plusieurs bibliothèques différentes, vous pouvez sélectionner votre bibliothèque entière. (_À titre de mesure : nous avons effectué des tests avec une bibliothèque contenant environ 700 documents, et nous n'avons constaté aucun problème de performance._)

![Export your Library as Better CSL JSON](../img/export-to-csl-json.png)

Ensuite cliquez sur `File` puis `Export library …`. Comme format, sélectionnez `Better CSL JSON` (si vous avez choisi de ne pas installer BetterBibTex, vous pouvez choisir `CSL JSON`). Si vous cochez la case "Tenir à jour", BetterBibTex s'assurera que chaque changement dans Zotero sera automatiquement exporté vers le fichier, en le gardant synchronisé avec Zotero (et, par conséquent, transmettra automatiquement vos changements à Zettlr, qui à son tour citera toujours correctement).

Si vous avez coché la case, vous pouvez vérifier l'état du fichier de la bibliothèque en ouvrant les Préférences Zéro, en sélectionnant l'onglet `BetterBibTex`, puis `Automatic Export`, qui vous permet d'affiner davantage ce qui est exporté, et quand.

### Etape 3: Ouvrez votre bibliothèque dans Zettlr

Il est maintenant temps d'importer votre bibliothèque sur Zettlr. Pour ce faire, il suffit d'ouvrir les préférences de Zettlr, d'aller dans l'onglet `Export`et cliquez sur la petite icône-dossier à droite de champ de saisie de l'icône `Citation Database`. Une boîte de dialogue apparaîtra pour vous permettre de naviguer vers votre fichier de base de données. Sélectionnez-le, enregistrez les préférences et Zettlr chargera automatiquement la base de données. Vous êtes maintenant prêt à citer !

![Point Zettlr to your database file](../img/settings_export.png)

## Citer dans Zettlr

Citer dans Zettlr est très facile. Zettlr prend en charge la syntaxe citeproc de pandoc pour la rédaction des citations. Vous aurez donc deux options pour rédiger vos citations. Premièrement, vous pouvez simplement lancer un identifiant unique quelque part dans votre texte pour rendre simplement une citation pour cette clé. Cela devrait ressembler à ceci : `@Harvey2005a`. Toutes les clés de citation commencent par un `@` suivi de la clé de citation.

> Zettlr dispose d'une fonction de saisie automatique qui vous invite à sélectionner toutes les clés de citation disponibles dès que vous tapez un caractère "@". Il s'agit d'une première vérification pour savoir si vous utilisez la bonne clé d'identification : Si Zettlr ne vous propose rien, c'est que l'ID n'a probablement pas été trouvé dans le fichier de la bibliothèque.

Mais normalement, vous voudrez être un peu plus précis, ajouter une certaine plage de pages ou quelque chose comme ça à votre citation. C'est à cela que sert la citation entre crochets plus étendue. Pour citer de cette manière, il suffit d'utiliser des crochets. Une citation avec un préfixe et un intervalle de pages ressemblerait à ceci :

`[See @Harvey2005a, 45-51]`

Pour citer plusieurs auteurs, il suffit de diviser les blocs par des points-virgules :

`[See @Harvey2005a, 45-51; also @Ciepley2007, 8-9]`

Pour plus d'informations sur la manière d'utiliser les citations en fonction du moteur citeproc de pandoc, [veuillez vous référer au guide](http://pandoc.org/demo/example19/Extension-citations.html).

> **Veuillez noter** que le moteur citeproc de Zettlr est **uniquement à des fins de prévisualisation**. Pour des raisons de simplicité, Zettlr n'analyse pas parfaitement toutes les citations et manquera donc de précision. Vous pouvez être sûr que le citeproc de pandoc fera correctement le travail à l'exportation. Par conséquent, les citations en avant-première sont **uniquement pour vérifier que vos citations sont correctement détectées afin que vous n'ayez pas de citations manquantes à l'exportation**.

## Vérification des références

Lorsque vous avez fini de citer et que vous voulez vérifier que vous avez bien cité tout ce que vous aviez prévu, vous pouvez ouvrir la barre latérale `"Attachment"` (Raccourci : `Ctrl/Cmd+3`). Sous tous les fichiers qui se trouvent dans le répertoire que vous avez sélectionné, Zettlr affichera une liste de toutes les références qu'il a trouvées dans votre fichier actuel. S'il manque quelque chose, c'est qu'il n'a probablement pas été cité dans votre dossier.

![References in the Attachment Pane](../img/attachment-pane-references.png)

## Changer le style de citation

En interne, Zettlr n'utilisera toujours que le style APA pour générer des citations. Par conséquent, vos citations prévisualisées seront toujours "dans le texte", et jamais sous forme de notes de bas de page. Cela vous permet de vous assurer que tout fonctionne bien.

Mais bien sûr, vous pouvez également utiliser différents styles de citation, en fonction des exigences du journal pour lequel vous écrivez ou de vos préférences personnelles. Pour modifier le style dans lequel citeproc de pandoc rendra vos citations, vous devrez télécharger le fichier CSL correspondant. Un très bon point de départ est le [Dépôt de style zéro](https://www.zotero.org/styles). Vous pouvez y rechercher des styles de citation spécifiques, les prévisualiser et les télécharger.

Vous pouvez faire pointer Zettlr vers ces fichiers CSL à deux endroits évidents. Tout d'abord dans les préférences générales. Dans l'onglet `Export`, sous le champ pour votre fichier de base de données de citations, vous pouvez sélectionner votre style CSL préféré qui sera ensuite utilisé pour toutes les exportations de pages uniques que vous exporterez à l'aide du bouton de la barre d'outils.

Mais évidemment, pour les projets, vous pouvez utiliser un autre style de CSL. Par conséquent, si vous ouvrez les préférences d'un projet, vous pouvez également sélectionner un fichier CSL. Le projet l'utilisera alors pour l'exportation.

## Formatage de la liste des références

Bien sûr, dès que vous citez des ouvrages de référence dans vos fichiers, vous voudrez que les références soient bien formatées. Si vous exportez vers Word ou LibreOffice, vous pouvez modifier les styles de formatage respectifs au fur et à mesure que vous modifiez votre fichier avant de l'envoyer. Mais dès que vous exporterez au format PDF, cela ne sera plus possible. Et comme `pandoc-citeproc` colle simplement toutes vos références à la fin du document sans aucun formatage, vous devrez effectuer une petite astuce pour que la liste des références soit bien présentée.

LaTeX utilise les longueurs pour déterminer les mesures globales du PDF exporté. Ces longueurs sont normalement fixées globalement, mais peuvent être transformées dans le fichier source. L'une de ces longueurs est `parindent`, qui contrôle le retrait de tous les paragraphes. Il existe des longueurs supplémentaires pour les paragraphes qui suivent un titre, par exemple, mais nous ne nous en occuperons pas pour l'instant.

La variable `parindent`peut être défini à l'aide des options PDF de Zettlr, mais il ne sera défini que globalement pour tous les paragraphes. Comme les références sont également formatées en utilisant des styles de paragraphes généraux, elles seront mises en retrait de la même manière que tous les autres paragraphes. Mais il y a une petite astuce que vous pouvez utiliser pour rendre la bibliographie agréable : il suffit d'écraser les longueurs de paragraphe _après_ votre document, c'est-à-dire : après le titre`## References` (ou quel que soit le nom que vous lui donnez dans votre dossier).

Il suffit de les remettre à ce qui vous semble le mieux. L'extrait de code suivant vous donne un exemple :

```latex
\setlength{\parindent}{-1cm} % Negative hanging indent
\setlength{\leftskip}{0.5cm} % Overall indentation
\setlength{\parskip}{0.1cm} % Spacing between paragraphs
```

L'exemple ci-dessus rendrait la bibliographie avec une indentation négative de moins un centimètre. De plus, il appliquera une indentation globale d'un demi-centimètre (par rapport aux marges de la page, donc si la marge de votre page gauche est fixée à 3 centimètres, les paragraphes de la bibliographie seront décalés de 3,5 centimètres, contrairement aux paragraphes normaux, qui ne sont décalés que de 3 centimètres). La dernière valeur (`parskip`) contrôle l'espacement _entre_ paragraphes, donc chacun sera à 10 millimètres de distance de l'autre.

Il suffit de partir de là, peut-être de chercher d'autres longueurs à peaufiner et d'ajuster ces longueurs à votre convenance.
