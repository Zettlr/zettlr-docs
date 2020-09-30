# L'encadré (_sidebar_) des pièces jointes

La barre latérale des pièces jointes est un élément contextuel qui affiche des informations supplémentaires pertinentes concernant votre répertoire et votre fichier actuel. Vous pouvez l'ouvrir en utilisant l'icône du trombone dans la barre d'outils ou en appuyant sur `Cmd/Ctrl+?`.

![The attachment sidebar with one file and a list of references](../img/attachment_sidebar.png)

Dans la barre latérale, il y a deux zones. La première est intitulée "Pièces jointes" et contient une liste de tous les fichiers supplémentaires, non Markdown, qui se trouvent dans le répertoire que vous avez sélectionné. Il peut s'agir d'images, de documents Word, de fichiers PDF et littéralement de tout autre type de fichier. Vous pouvez choisir les fichiers qui y seront affichés en ajoutant l'extension du type de fichier dans l'option des préférences respectives, que vous trouverez dans l'onglet "Avancé". Les extensions ne sont pas sensibles à la casse, donc l'ajout de `.jpeg` montrera les fichiers `.jpeg` tout comme `.JPEG` et `.JpEg`.

![Dans les paramètres avancés, vous pouvez choisir toutes les extensions que vous souhaitez voir dans la barre latérale.](../img/settings_advanced.png)

La deuxième zone, intitulée "Références", contient une liste de toutes les entrées bibliographiques que vous avez utilisées dans votre fichier Markdown actuel. Elle ressemble à la liste de références qui sera générée par `pandoc-citeproc` une fois que vous aurez exporté votre fichier Markdown. Vous pouvez ainsi vérifier si vous avez utilisé les bonnes clés de citation pour référencer vos sources.

## Pièces jointes

Considérez les fichiers affichés dans la barre latérale des pièces jointes comme une alternative à l'ouverture permanente d'une fenêtre de navigateur de fichiers. De cette façon, vous pouvez voir les fichiers avec lesquels vous pourriez avoir besoin de travailler également à partir de Zettlr, ce qui vous permet de gérer les contraintes de votre flux de travail.

![Avec un dossier sélectionné contenant des images, vous pouvez facilement les ajouter à votre document en les faisant glisser dans l'éditeur.](../img/attachment_sidebar_images.png)

Si vous avez besoin de voir tous les fichiers du répertoire sélectionné, vous pouvez ouvrir le répertoire en cliquant sur l'icône pop-out à côté du titre. Cela ouvrira le dossier avec votre navigateur de fichiers par défaut.

Cliquer sur un fichier dans la barre latérale l'ouvrira avec l'application du système par défaut. C'est la même chose que de double-cliquer sur un fichier dans votre navigateur de fichiers. De plus, vous pouvez glisser et déposer les fichiers sur votre document Markdown. Cela créera un lien vers le fichier afin que vous puissiez référencer les fichiers à partir de votre document. Vous utiliserez principalement cette fonction pour traiter les images, car Zettlr détecte les extensions d'image les plus courantes et ne les regroupe pas dans une étiquette de lien, mais dans une étiquette d'image. De cette façon, vous pouvez facilement ajouter des images à partir d'un dossier en les faisant glisser sur votre fichier ouvert. Pour référencer les images d'un sous-dossier, assurez-vous simplement de sélectionner le sous-dossier dans votre arborescence ou dans la liste des fichiers. Ensuite, la barre latérale des pièces jointes se rafraîchira avec toutes les images du dossier que vous venez de sélectionner.

## Références

Les références sont une liste de sources de votre fichier Markdown. La liste ne fait pas grand chose, si ce n'est afficher les citations correctes de ces sources en utilisant le style CSL intégré. C'est un moyen de vous donner une liste de tout ce que vous avez cité en un coup d'œil pour vérifier si vous avez référencé les bonnes sources, et si vous en avez oublié une ou non.

La barre latérale de pièces jointes restera ouverte même sans distraction, vous donnant la possibilité d'avoir la liste des références côte à côte avec votre document au fur et à mesure que vous écrivez.