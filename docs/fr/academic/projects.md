# Projets

Les projets sont un moyen de simplifier la concaténation et l'exportation de plus d'un fichier. Ils vous permettent de diviser un seul projet en plusieurs fichiers différents sur lesquels travailler. Vous pouvez diviser votre travail en plusieurs fichiers et seulement à la fin les coller ensemble et les exporter comme un seul fichier PDF. De plus, les projets Zettlr vous permettent de mieux affiner vos exportations au format PDF. Avec les projets, vous pouvez, par exemple, demander à Zettlr de créer une page de titre ou une table des matières.

![project_directory.png](../img/project_directory.png)

## Créer un projet

Les projets Zettlr ne sont en fait qu'un ensemble de fonctionnalités supplémentaires pour les répertoires. Vous pouvez donc "convertir" n'importe quel répertoire en un projet. Il vous suffit de cliquer avec le bouton droit de la souris sur le répertoire dont vous voulez faire un projet et de choisir "Créer un projet". Le répertoire lui-même sera alors coloré en rouge et une icône en forme de crayon apparaîtra à gauche de son nom, indiquant que les fonctionnalités de ce répertoire sont activées. Si vous cliquez maintenant sur un répertoire avec le bouton droit de la souris, vous disposez de trois options supplémentaires dans le menu contextuel : "Paramètres du projet", "Construire le projet" et "Supprimer le projet".

## Working with Projects

Choisissez "Paramètres du projet" dans le menu contextuel d'un répertoire de projet pour ouvrir les paramètres. En général, il s'agit juste d'une copie des préférences PDF que vous avez globalement à disposition pour exporter rapidement des fichiers Markdown uniques. Les deux différences sont que les projets vous permettent d'affiner la génération d'un document PDF, et que ces paramètres PDF ne s'appliquent qu'à l'exportation de ce répertoire spécifique. Vous pouvez donc laisser vos options PDF globales intactes et utiliser des paramètres différents pour votre projet.

![settings_project.png](../img/settings_project.png)

Permettez-nous maintenant d'explorer brièvement les paramètres que vous avez mis en place pour les projets. Tout d'abord, l'onglet des métadonnées :

- **Project Title**: Ce titre sera utilisé comme le nom du fichier, le titre (si vous décidez de créer une page de titre) et le titre PDF de votre document. La valeur par défaut est le nom du répertoire.
- **Project Author**: This will be written into the PDF metadata field for authors.
- **Project Keywords**: These are keywords you may or may not use when exporting PDF documents.
- **Generate Title Page**: Si cette case est cochée, Zettlr demandera au moteur LaTeX de générer une page de titre. Il utilisera le titre du projet et la date du jour ainsi que le nom de votre auteur et les inscrira sur la première page de votre document.
- **Generate Table of Contents**: Si cette case est cochée, Zettlr demandera à Pandoc de générer une table des matières sur la deuxième page (ou sur la première, si vous ne voulez pas de page de titre).
- **Evaluate until Level …**: Grâce à cette liste déroulante, vous pouvez choisir les rubriques qui feront partie de votre table des matières. La valeur par défaut "2" demande à Pandoc de générer une table des matières en utilisant les en-têtes du premier et du deuxième degré (c'est-à-dire les en-têtes. `##` et `#`). Un 4 inclurait les en-têtes de 1ère, 2ème, 3ème et 4ème niveau (i.e. `#`, `##`,`###`, et`####`). Toutes les autres rubriques seront toujours présentes dans le dossier, mais elles n'apparaîtront pas dans la table des matières.

En outre, vous pouvez choisir une personnalisation du modèle `TeX`à utiliser pour ce projet (c'est-à-dire un modèle fourni par la revue à laquelle vous souhaitez soumettre votre article, ou un modèle personnalisé). En outre, vous pouvez remplacer le style CSL par défaut dans les paramètres d'exportation généraux par un style personnalisé.

Actuellement, les onglets de page et de police sont exactement les mêmes pour les projets et pour vos options d'exportation générales, veuillez donc vous référer à la [page des paramètres](../reference/settings.md#pdf-preferences) pour savoir ce qu'ils font.

## Construction de projets

Pour construire un projet, Zettlr suivra les étapes décrites ci-dessous pour générer votre PDF final. Veuillez donc les lire attentivement pour savoir à quoi vous attendre une fois que vous aurez décidé d'exporter votre projet !

Tout d'abord, Zettlr va prendre le répertoire du projet et en réduire le contenu à un tableau unidimensionnel. Cela signifie que **tous les sous-dossiers et tous les fichiers qu'ils contiennent seront aplatis en une simple liste**. Il suffit de jeter un coup d'œil à la liste des fichiers. En interne, avant d'exporter vos fichiers, Zettlr va les disposer _exactement_ comme dans le panneau de prévisualisation. Par conséquent, si vous consultez votre liste de prévisualisation, vous saurez exactement quel fichier viendra après quel autre. Ceci est prévu pour que vous ne fassiez pas de découverte cauchemardesque une fois que vous aurez remis un document et que vous aurez réalisé qu'un dossier complet de trois chapitres a été omis.

> Veuillez noter que Zettlr utilisera _tous_ les sous-répertoires ! Ceci est destiné à faciliter la tâche des personnes qui écrivent de grands projets et qui peuvent utiliser autant de sous-répertoires qu'elles le souhaitent. Par conséquent, la liste de prévisualisation sera exactement exportée telle quelle (tous les répertoires seront simplement omis). Ne créez donc pas un sous-répertoire de deuxième niveau, placez-y vos notes et demandez-vous ensuite comment vos notes se sont retrouvées dans le manuscrit final. Si vous souhaitez utiliser des fichiers supplémentaires qui ne doivent pas être exportés, créez simplement deux autres dossiers dans le répertoire de votre projet. Dans l'un, vous pouvez alors mettre tous vos fichiers de travail, tandis que vous pouvez convertir l'autre dans le projet qui peut être exporté.

Après la lecture de vos fichiers, un petit nombre de modifications leur est apporté (tous les chemins sont normalisés afin que Pandoc et LaTeX puissent trouver toutes vos images) avant qu'ils ne soient concaténés ensemble. Ensuite, cet énorme fichier est écrit sur le disque dans un fichier temporaire.

Ensuite, Zettlr lira les paramètres que vous avez donnés au projet lui-même et suivra fondamentalement le même processus que la génération de PDF de documents uniques : démarrez l'exportateur, fournissez-lui vos paramètres, pointez le fichier temporaire et laissez Pandoc et LaTeX faire leur travail.

Une fois que votre projet a été exporté, il est automatiquement ouvert avec votre prévisualiseur PDF par défaut et il est enregistré dans le répertoire du projet.

> Veuillez noter que l'élaboration d'une table des matières à partir de projets de grande envergure peut prendre un temps extraordinaire. Si vous souhaitez générer une table des matières, LaTeX doit en fait construire le PDF deux fois - d'abord pour détecter sur quelles pages vos titres se retrouvent après la conversion en PDF, puis une seconde fois pour inclure réellement la table des matières. Dans un test que j'ai fait, sur un nouvel ordinateur Windows 10, la génération d'un répertoire entier d'extraits qui a rendu environ 150 pages a pris environ cinq minutes au cours desquelles il semble que cela n'ait pas fonctionné. Soyez donc patients - tant que Pandoc ou LaTeX ne se plaignent de rien, ils fonctionnent toujours.

> **Astuce de pro** : Comme vous le savez peut-être grâce à la section FAQ, Zettlr et Pandoc n'essaieront pas de filtrer les commandes TeX que vous avez inscrites dans vos documents de démarque. N'oubliez pas cela lorsque vous travaillez sur vos projets : Vous pouvez ajouter des pages supplémentaires ou faire d'autres choses amusantes avec vos fichiers qui seront effectivement présents dans le document final ! Vous pouvez également créer des documents `.tex` en indiquant l'extension lors de la création de nouveaux fichiers. Ces documents `.tex` supportent la coloration syntaxique LaTeX et seront inclus dans l'exportation de votre projet ! Assurez-vous qu'ils ont un nom de fichier qui place le fichier exactement là où vous en avez besoin.

## Suppression de projets

Pour supprimer un projet, il suffit de cliquer avec le bouton droit de la souris et de choisir de supprimer le projet. Ce qui sera supprimé est tout simplement le fichier de paramètres qui indique que votre répertoire doit être traité comme un projet (appelé `.ztr-project`). Par conséquent, si vous supprimez un projet, vous ne supprimez en fait que les paramètres du projet. Si vous recréez le projet, le fichier sera à nouveau présent, mais avec les paramètres par défaut. N'oubliez donc pas que la suppression de projets supprime finalement vos paramètres et que vous devez les définir à nouveau.