# Une note sur la sécurité

Le format Markdown est en général un moyen d’écriture très sûr. Contrairement aux documents Word qui ne peuvent être ouverts en toute sécurité qu'en mode restreint, les documents Markdown peuvent être consultés avec beaucoup moins de prudence.

Néanmoins, même les documents Markdown peuvent avoir certaines implications en matière de sécurité. Ces documents pourraient contenir du code malveillant pouvant mettre votre sécurité en danger. De plus, les modèles ou autres ressources que vous téléchargez sur Internet peuvent contenir du code malveillant ou même télécharger des virus et des logiciels malveillants sur votre ordinateur.

Sur cette page, nous décrivons les différentes manières dont travailler avec Zettlr pourrait vous exposer à des problèmes de sécurité potentiels si vous n'y faites pas attention. Si vous suivez les consignes de sécurité générales contenues dans ce document et soyez vigilant, vous devriez toujours être du bon côté.

De manière générale : Zettlr vous offre une grande liberté lorsqu'il s'agit de travailler avec vos fichiers Markdown. Par conséquent, la capacité de Zettlr à exécuter du code arbitraire lors de l'importation, de la visualisation et de l'exportation de documents Markdown n'est pas une faille de sécurité mais une décision de conception consciente. Si nous voulions empêcher l'exécution de code arbitraire, travailler avec Markdown et exporter vos documents vous limiterait de manière déraisonnable. Pour citer un vieil adage : « Un grand pouvoir implique de grandes responsabilités ».

!!! note

     Zettlr est constamment examiné par des chercheurs en sécurité qui vérifient l'application pour détecter toute manière dont des acteurs malveillants pourraient exécuter du code là où vous ne vous y attendez pas.


## Exécution de code lors de la lecture et de l'écriture de documents Markdown

Markdown est un format parfaitement sûr car il se compose uniquement de code source. En d’autres termes, Markdown peut être lu tel quel, simplement en prenant note des différents caractères de formatage contenus dans le document.

Parfois, cependant, visualiser du texte Markdown brut peut devenir ardu. Par exemple, lorsque vous relisez un texte, vous souhaiterez lire les descriptions des liens, mais pas les liens eux-mêmes. De même, lorsque vous créez un tableau, vous ne souhaitez souvent pas voir les nombreux caractères de formatage mais uniquement le contenu réel du tableau.

Zettlr vise à vous faciliter la visualisation et l'écriture de Markdown. Pour cela, Zettlr doit pré-restituer certains éléments de vos documents. Par exemple, les liens de pré-rendu masquent les liens et affiche uniquement leur description. Une description de lien peut toutefois contenir du code HTML malveillant. Un problème similaire se produit avec le rendu des tableaux dans l'éditeur de tableaux : chaque cellule du tableau peut contenir du code HTML malveillant qui sera exécuté lors du rendu.

Par conséquent, de nombreux moteurs de rendu qui rendent Markdown lisible peuvent exécuter du code malveillant dans les documents et mettre ainsi votre sécurité en danger.

Si vous ouvrez uniquement des fichiers provenant de sources fiables, cela ne devrait pas poser de problème. Cependant, si vous devez fréquemment ouvrir des documents Markdown depuis Internet ou depuis des sources auxquelles vous ne pouvez pas entièrement faire confiance, il peut être judicieux de désactiver ces moteurs de rendu pour garantir qu'aucun document Markdown contenant un code malveillant ne puisse vous nuire.

La désactivation de ces moteurs de rendu rendra votre code Markdown un peu plus difficile à lire, mais cela empêchera également tout code malveillant de vous mettre en danger.

Il existe quelques moteurs de rendu qui peuvent exécuter du HTML arbitraire et devenir ainsi un problème de sécurité. Il s'agit de l'**Table Editor** ainsi que des moteurs de rendu pour **iframes**, **links** et **emphasis**.

En désactivant ces moteurs de rendu dans les paramètres, Zettlr ne tentera pas d'exécuter le code contenu dans ces éléments.

!!! note

     **Règle générale** : même si d'autres moteurs de rendu, tels que le moteur de rendu d'images, ne devraient pas être capables d'exécuter du code, les images peuvent fournir une autre voie permettant aux acteurs malveillants d'infiltrer votre ordinateur. Pour être prudent, désactivez tous les moteurs de rendu.

## Documents Markdown téléchargés depuis Internet

Un vecteur d’attaque tristement célèbre consiste à distribuer des documents Markdown contenant du code malveillant. Par conséquent, le mieux est de ne jamais télécharger de documents Markdown depuis Internet.

Si vous devez télécharger un fichier Markdown et doutez de sa sécurité, nous vous recommandons de l'ouvrir au préalable avec un éditeur de texte classique (par exemple, Notepad sous Windows, TextEdit sur macOS ou l'un des différents éditeurs de texte disponibles sous Linux) et de supprimer tout fichier Markdown. HTML brut du fichier avant de l'ouvrir dans Zettlr.

Si vous avez désactivé tous les moteurs de rendu, vous pouvez également ouvrir en toute sécurité un tel document directement dans Zettlr.

De cette façon, même s'il existe un moyen pour des acteurs malveillants de compromettre votre ordinateur via Zettlr et que nous ne connaissons pas encore (un soi-disant "exploit du jour zéro"), cela ne fonctionnera pas car vous avez préalablement supprimé le code potentiellement dangereux. .

!!! note

     **Règle générale** : si un document Markdown contient presque exclusivement du code HTML, cela devrait éveiller vos soupçons. La syntaxe Markdown n'est pas d'une grande utilité pour les acteurs malveillants, ils essaieront donc d'injecter du code HTML à la place.


## Modèles téléchargés depuis Internet

Un autre vecteur d'attaque consiste à distribuer des modèles malveillants. Lors des exportations, vous pouvez spécifier des modèles qui seront utilisés pour composer vos documents Markdown. Il peut s'agir de fichiers HTML, de fichiers LaTeX ou même de documents Word. Tous ces fichiers peuvent contenir du code malveillant.

Il est probable qu'à un moment donné vous souhaitiez télécharger un modèle afin de personnaliser vos exports. Cependant, en raison de la possibilité d’insérer du code malveillant dans les modèles, cela peut constituer un moyen simple pour les attaquants de compromettre votre ordinateur.

Étant donné que les modèles ne sont pas écrits en Markdown, nous vous recommandons d'être prudent lorsque vous téléchargez des modèles depuis Internet. Contrairement aux documents Markdown, qui peuvent être affichés en toute sécurité, cela est beaucoup plus difficile avec les modèles.

Si vous souhaitez vraiment télécharger un modèle depuis Internet, **assurez-vous qu'une personne de confiance possédant une expérience technique vérifie que le document est sûr avant de l'utiliser** !

!!! note

     **Règle générale** : Même si un collègue vous envoie un modèle, assurez-vous de le vérifier, car votre collègue a peut-être accidentellement téléchargé un modèle nuisible et ignoré le code malveillant.

## Exécution de code pendant l'importation et l'exportation

Bien que vous puissiez empêcher toute exécution de code lors de la lecture et de l'écriture de documents Markdown en désactivant tous les moteurs de rendu, il est impossible d'empêcher l'exécution de code lors de l'importation et de l'exportation. Afin d'importer ou d'exporter correctement vos fichiers, Zettlr doit autoriser l'exécution de code.

Par exemple, si vous incluez des équations dans votre document et que vous l'exportez ensuite au format HTML, le code est exécuté pour restituer correctement ces équations. De même, certains modèles peuvent nécessiter du code ou des ressources Internet pour fonctionner correctement.

Même si vous ne téléchargez aucun modèle supplémentaire, l'exportation et l'importation peuvent toujours présenter un risque de sécurité. Plus précisément, certains des modèles standard fournis avec Zettlr incluent des ressources en ligne. Bien que celles-ci soient considérées comme sûres, il peut, dans certaines circonstances, arriver que des acteurs malveillants accèdent à ces ressources en ligne et injectent du code nuisible.

Cela signifie que même lorsque vous exportez un document Markdown que vous avez vous-même créé sans modèle spécifique, il existe toujours un petit risque que cela présente un risque de sécurité.

Les importations et exportations sont toujours facilitées avec l’aide de Pandoc. Pandoc lui-même a rassemblé un ensemble de recommandations de sécurité que nous vous recommandons de lire, de comprendre et de suivre pour garantir votre sécurité et celle de votre ordinateur. [Lisez la note de sécurité de Pandoc ici](https://pandoc.org/MANUAL#a-note-on-security).

### Commandes d'exportation personnalisées

Zettlr vous permet de spécifier des commandes arbitraires pour l'exportation dans les paramètres. Cela s'avère pratique lorsque, par exemple, vous utilisez un conteneur Docker prédéfini contenant une installation spécialisée de Pandoc, ou lorsque vous souhaitez, par exemple, télécharger le fichier quelque part. Cependant, cela signifie que vous devez pouvoir faire confiance à la commande que vous exécutez. N'ajoutez ou n'exécutez en aucun cas une commande personnalisée dans les paramètres en laquelle vous n'avez pas entièrement confiance.

!!! note

     **Règle générale** : considérez toujours toutes les exportations et importations comme potentiellement dangereuses.