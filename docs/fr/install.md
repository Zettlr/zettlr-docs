# Installation

L'installation de Zettlr est très facile et ne nécessite qu'une étape sur chaque système d'exploitation. Zettlr est multiplateforme, il fonctionnera donc sur votre système, quel qu'il soit. Zettlr est pré-conçu pour les systèmes d'exploitation MacOS, Windows, ainsi que Linux basés sur Debian et RedHat (Ubuntu, Gnome, Xubuntu, Kubuntu, Fedora, RedHat et autres).

Si vous voulez faire fonctionner Zettlr sur d'autres systèmes Linux comme Arch ou bien sur des dispositifs ARM (comme un Raspberry), vous devrez créer un paquet vous-même. Il existe de nombreux tutoriels pour la création d'applications Electron sur le web. Veuillez consulter [la liste des plateformes supportées par Electron](https://github.com/electron/electron/blob/master/docs/tutorial/support.md) pour savoir lesquelles sont compatibles.

> Il existe un paquet maintenu par la communauté pour Arch Linux. [Vous pouvez le trouver sur les dépôts officiels AUR](https://aur.archlinux.org/packages/zettlr-bin/). Veuillez noter que ce paquet est maintenu par la communauté et que nous ne sommes pas responsables quant à sa stabilité, sa sécurité ou la version proposée.

## Windows (7 ou plus récents)

Pour installer Zettlr sur Windows, il suffit de télécharger l'application à partir de la [page de téléchargement](https://www.zettlr.com/download) et de double-cliquer pour l'ouvrir. Si vous souhaitez installer Zettlr pour tous les utilisateurs, il est installé dans le répertoire "Program Files" principal – dans ce cas, vous devrez lui donner les droits lors de l'installation (il vous demandera automatiquement votre autorisation). Vous n'avez pas besoin de lui donner de droits plus élevés si vous l'installez uniquement pour un utilisateur.

Pour désinstaller Zettlr, il suffit d'exécuter le fichier Uninstall.exe soit à partir du répertoire lui-même, soit en utilisant l'option appropriée dans les paramètres de votre système. Si vous souhaitez supprimer complètement toutes les données associées à l'application, supprimez également le répertoire `C:\Users\<votre-nom-d-utilisateur>\AppData\Roaming\Zettlr`.

## macOS (10.10 ou plus récents)

Pour installer Zettlr sur macOS, il suffit de télécharger le fichier dmg de la dernière version et de le monter. Ensuite, faites glisser l'icône Zettlr dans votre répertoire Applications et vous avez terminé !

Pour désinstaller Zettlr, il suffit de supprimer le fichier Zettlr.app de votre répertoire Applications. Si vous souhaitez supprimer complètement toutes les données associées à l'application, supprimez également le répertoire `/Users/<votre-nom-d-utilisateur>/Library/Application Support/Zettlr`.

> Vous pouvez également installer Zettlr en utilisant [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew cask install zettlr`

## Linux (Debian 8/Ubuntu 12.04/Fedora 21 ou plus récents)

Il y a des paquets `deb` et `rpm` pré-construits pour les systèmes Linux. Il suffit d'installer le paquet sur votre système.

Pour désinstaller Zettlr, suivez les étapes habituelles pour supprimer un paquet (généralement via l'interface graphique d'installation d'applications, ou via `dpkg`). Si vous souhaitez également supprimer toutes les données associées à l'application, supprimez également le répertoire `/home/<votre-nom-d-utilisateur>/.config/Zettlr`.

## Mettre à jour l'application

The application checks for new updates each time you start the app. You can also manually trigger the search for updates by using the respective menu item from the Help-menu. If there is a new version available, Zettlr will show you a dialog that contains both the new version's number, your current version and a changelog with all features and bug fixes the new version contains. You can then open the download page to download the new package. Simply install it over your current installation, it will take care of removing the old version first. All data will be retained and migrated to the new version.

L'application vérifie les nouvelles mises à jour chaque fois que vous démarrez l'application. Vous pouvez également déclencher manuellement la recherche de mises à jour en utilisant l'option correspondante dans le menu Aide. Si une nouvelle version est disponible, Zettlr affichera un dialogue qui contient à la fois le numéro de la nouvelle version, votre version actuelle et un journal des modifications avec toutes les fonctionnalités et les corrections de bogues que la nouvelle version contient. Vous pouvez ensuite ouvrir la page de téléchargement pour télécharger le nouveau paquet. Il suffit de l'installer par-dessus votre installation actuelle, il se chargera automatiquement de supprimer l'ancienne version. Toutes les données seront conservées et migrées vers la nouvelle version.

> Si vous êtes intéressé par les versions les plus avancées, assurez-vous de cocher la case "M'avertir des versions bêta" dans l'onglet "Avancé" des Préférences !

## Installer Pandoc

Ce qui permet à Zettlr de coexister avec d'autres logiciels tels que Microsoft Word, LibreOffice ou même un Wiki, est un logiciel distinct appelé `Pandoc`. Pandoc est gratuit et *open source* et vous permet d'utiliser toutes les fonctionnalités d'exportation et d'importation de Zettlr, ce qui en fait le choix idéal pour servir d'interface avec d'autres programmes et de partager son travail avec des collègues qui n'utilisent pas Markdown.

L'installation de Pandoc est facile sur toutes les plateformes.

> Vous pouvez installer Pandoc à tout moment. Il vous suffit d'utiliser l'élément correspondant du menu Aide pour ouvrir les instructions d'installation.

### Windows

Sous Windows, Pandoc peut être installé en visitant sa [page de téléchargement](https://github.com/jgm/pandoc/releases/latest) et en récupérant le programme d'installation pour Windows. Il suffit de l'exécuter. Ensuite, il devrait être installé correctement. Essayez d'exporter quelque chose. Si cela fonctionne, vous avez terminé !

> Pandoc est un programme exécutable en ligne de commande, il ne peut donc pas vous indiquer si une mise à jour est disponible ou non. Vous devrez le faire vous-même. Il vous suffit de visiter sa page de téléchargement de temps en temps.

### macOS

Sur macOS, Pandoc peut être installé de différentes manières.

#### Méthode recommandée : Homebrew

La méthode recommandée est d'utiliser [Homebrew](https://brew.sh/). Homebrew est un gestionnaire de paquets qui facilite l'installation et la maintenance de programmes en ligne de commande tels que Pandoc. Assurez-vous d'installer [Homebrew](https://brew.sh/), puis exécutez simplement la commande suivante dans le Terminal :

```bash
$ brew install pandoc
```

Pour mettre à jour Pandoc de temps en temps, utilisez cette commande :

```bash
$ brew upgrade
```

Cela permettra de mettre à niveau toutes les "formules" installées (ainsi que les appelle Homebrew) vers leur version la plus récente.

> L'installation avec Homebrew est recommandée, car elle est non seulement plus rapide, mais aussi plus pratique.

Après la mise en place de Pandoc, vous voudrez probablement installer son filtre `citeproc`, car il vous permet de [citer](academic/citations.md) dans Zettlr. Sous Windows, Citeproc est automatiquement installé, tandis que sous macOS, vous devrez installer Citeproc en plus. Il suffit d'utiliser Homebrew pour cela aussi :

```bash
$ brew install pandoc-citeproc
```

#### Utiliser l'installateur officiel

Pour installer Pandoc à l'ancienne, il suffit de se rendre sur la [page de téléchargement](https://github.com/jgm/pandoc/releases/latest) et de télécharger l'installateur macOS. Une fois l'installation terminée, Pandoc devrait être disponible sur votre système. Essayez d'exporter quelque chose. Si cela fonctionne, vous avez terminé !

### Linux

Sous Linux, l'installation de Pandoc est d'une grande simplicité. Il suffit d'utiliser votre gestionnaire de paquets pour rechercher et installer Pandoc. Les paquets fournis ne sont pas toujours à jour, mais ils devraient convenir. Si vous souhaitez installer la dernière version, vous devez [télécharger l'installateur Linux](https://github.com/jgm/pandoc/releases/latest) et suivre les [instructions d'installation](https://pandoc.org/installing.html) sur le site de Pandoc.

> Vous pouvez avoir besoin de configurer `pandoc-citeproc` manuellement en l'installant via la méthode préférée de votre distribution.

## Installer LaTeX

Markdown peut être combiné avec `LaTeX` pour créer de beaux fichiers PDF, avec Pandoc comme intermédiaire. Pour ce faire, vous devez installer une distribution `TeX` en même temps que Zettlr. Ne vous inquiétez pas : vous n'aurez pas besoin d'apprendre à utiliser LaTeX immédiatement. Mais son installation reste nécessaire, et ouvre la possibilité de réutiliser les nombreux modèles de documents produits par la communauté LaTeX.

L'installation du logiciel fonctionne exactement de la même façon que n'importe quel autre logiciel : sous Windows et MacOS, vous aurez besoin d'un installateur, tandis que sous Linux, vous pourrez utiliser votre gestionnaire de paquets pour installer la distribution.

Les distributions recommandées sont :

- Windows : [MikTeX](https://miktex.org/download)
- macOS : [MacTex](https://www.tug.org/mactex/morepackages.html)
- Linux : [TeX Live](https://www.tug.org/texlive/) (installez le paquet texlive-base : `sudo apt install texlive-base`)

> Vous pouvez installer LaTeX ultérieurement. Utilisez simplement l'élément correspondant du menu Aide pour ouvrir une page d'aperçu où vous pouvez consulter les distributions disponibles.