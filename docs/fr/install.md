# Installation

L'installation de Zettlr est très facile et ne nécessite qu'une étape sur chaque système d'exploitation. Zettlr est multiplateforme, il fonctionnera donc sur votre système, quel qu'il soit. Zettlr est pré-conçu pour les systèmes d'exploitation MacOS, Windows, ainsi que beaucoup de distributions Linux.

## Windows (7 ou plus récents)

Pour installer Zettlr sur Windows, il suffit de télécharger l'application à partir de la [page de téléchargement](https://www.zettlr.com/download) et de double-cliquer pour l'ouvrir. Si vous souhaitez installer Zettlr pour tous les utilisateurs, il est installé dans le répertoire "Program Files" principal – dans ce cas, vous devrez lui donner les droits lors de l'installation (il vous demandera automatiquement votre autorisation). Vous n'avez pas besoin de lui donner de droits plus élevés si vous l'installez uniquement pour un utilisateur.

Pour désinstaller Zettlr, il suffit d'exécuter le fichier Uninstall.exe soit à partir du répertoire lui-même, soit en utilisant l'option appropriée dans les paramètres de votre système. Si vous souhaitez supprimer complètement toutes les données associées à l'application, supprimez également le répertoire `C:\Users\<votre-nom-d-utilisateur>\AppData\Roaming\Zettlr`.

> Le programme d'installation de Windows contient à la fois une version 32 bits et une version 64 bits du programme et s'installera selon ce qui convient à votre système d'exploitation.

## macOS (10.10 ou plus récents)

Pour installer Zettlr sur macOS, il suffit de télécharger le fichier dmg de la dernière version et de le monter. Ensuite, faites glisser l'icône Zettlr dans votre répertoire Applications et vous avez terminé !

Pour désinstaller Zettlr, il suffit de supprimer le fichier Zettlr.app de votre répertoire Applications. Si vous souhaitez supprimer complètement toutes les données associées à l'application, supprimez également le répertoire `/Users/<votre-nom-d-utilisateur>/Library/Application Support/Zettlr`.

> Vous pouvez également installer Zettlr en utilisant [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew install --cask zettlr`

## Linux (Debian 8/Ubuntu 12.04/Fedora 21 ou plus récents)

Il y a des paquets `deb` et `rpm` pré-construits pour les systèmes Linux. Il suffit d'installer le paquet sur votre système.

Pour désinstaller Zettlr, suivez les étapes habituelles pour supprimer un paquet (généralement via l'interface graphique d'installation d'applications, ou via `dpkg`). Si vous souhaitez également supprimer toutes les données associées à l'application, supprimez également le répertoire `/home/<votre-nom-d-utilisateur>/.config/Zettlr`.

> Un package géré par la communauté pour Arch Linux est disponible. [Vous pouvez le trouver sur les dépôts officiels AUR](https://aur.archlinux.org/packages/zettlr-bin/). Veuillez noter que ce package est géré par la communauté et que nous déclinons toute responsabilité quant à sa stabilité, sa sécurité ou sa version proposée.

## AppImages

Si vous n'utilisez ni une distribution Linux basée sur Debian ni sur Fedora, vous pouvez toujours installer les fichiers AppImage. Veuillez [consulter leur guide pour savoir comment les installer](https://appimage.org/). Les AppImages sont fournies pour les systèmes 32 bits et 64 bits.

## Mettre à jour l'application

L'application recherche de nouvelles mises à jour chaque fois que vous démarrez l'application. Vous pouvez également déclencher manuellement la recherche de mises à jour en utilisant l'élément de menu correspondant dans le menu Aide. Si une nouvelle version est disponible, Zettlr vous montrera une boîte de dialogue contenant le numéro de la nouvelle version, votre version actuelle et un journal des modifications avec toutes les fonctionnalités et corrections de bogues contenues dans la nouvelle version. Vous pouvez ensuite ouvrir la page de téléchargement pour télécharger le nouveau package. Installez-le simplement sur votre installation actuelle, il s'occupera d'abord de supprimer l'ancienne version. Toutes les données seront conservées et migrées vers la nouvelle version.

> Si vous êtes intéressé par les versions de beta, assurez-vous de cocher la case "M'avertir des versions bêta" dans l'onglet Avancé de la boîte de dialogue des préférences!

## Réinitialiser l'application 

Zettlr gère les préférences utilisateur et les métadonnées locales (mots-clefs définis par l'utilisateur, emplacement du répertoire racine, paramètres, etc.)  
Dans certains cas, vous pouvez vouloir réinitialiser, lire ou modifier ces données (par exemple, lors une installation défectueuse ou d'une erreur dans la sélection du chemin de base…)

Ces données sont situées dans le _chemin de données de l'application_, dont l'emplacement dépend de votre système d'exploitation :

* **Windows :** `C:\Users\<your username>\AppData\Roaming\zettlr`
* **macOS :** `/Users/<your username>/Library/Application Support/zettlr` (ouvrir une fenêtre du Finder, maintenir la touche "Alt" enfoncée tout en ouvrant le menu "Aller" et cliquer sur l'entrée "Bibliothèque" qui apparaît)
* **Linux :** `/home/<your username>/.config/zettlr`

Si vous souhaitez complètement réinitialiser votre installation locale de Zettlr, suivez les étapes suivantes :

1. Assurez-vous d'abord que l'application est fermée (dans certains cas d'erreur, il peut y avoir un processus "zombie", que vous pourrez fermer depuis votre gestionnaire de tâches ou votre moniteur d'activité)
2. Veillez à faire une sauvegarde facultative de ces fichiers :
    * `stats.json` (vos statistiques d'écriture)
    * `config.json` (les paramètres de l'application - y compris l'emplacement de votre répertoire base/racine)
    * `custom.css` (votre CSS personnalisé, le cas échéant)
    * `tags.json` (vos étiquettes/mots-clefs et codes couleurs)
    * `targets.json` (vos objectifs d'écriture)
    * `user.dic` (votre propre dictionnaire personnalisé)
3. Sélectionnez tout ce qui se trouve dans ce répertoire et supprimez-le.
4. Redémarrez l'application. Certains des fichiers ci-dessus seront recréés.

