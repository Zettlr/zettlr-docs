# Setup

L'installation de Zettlr est très simple et ne prend que quelques clics. Zettlr est multiplateforme, il fonctionnera donc sur la plupart des ordinateurs. Zettlr est pré-construit pour macOS, Windows et plusieurs systèmes Linux.

## Configuration minimale requise

Zettlr vise à être respectueux des ressources. Cependant, elle demande une configuration minimale.

* Système d'exploitation:
     * Windows 10 ou version ultérieure
     * macOS 11.6.0 ou version ultérieure
     * Debian 8 ou version ultérieure
     * Ubuntu 12.04 ou version ultérieure
     * Fedora 24 ou plus récent
     * Arch Linux
     * Toute distribution prise en charge par AppImages ou Flatpack
* Processeur : Intel Dual-Core 1 GHz 64 bits ou supérieur (32 bits n'est pas pris en charge)
     * Sous Linux, un processeur ARM 64 bits équivalent est pris en charge
     * Sur macOS, Apple Silicon (M1, M2, etc.) est pris en charge
* RAM : 1 Go
* Espace disque : au moins 500 Mo d'espace disque libre

!!! note

     Veuillez noter que les versions du système d'exploitation prises en charge peuvent changer à tout moment. La liste la plus récente des plates-formes prises en charge peut être trouvée [ici](https://www.electronjs.org/docs/latest/development/build-instructions-gn#platform-prerequisites).

## Installation de Zettlr

### Windows

Pour installer Zettlr sur Windows, téléchargez l'application depuis la [page de téléchargement](https://www.zettlr.com/download) et double-cliquez pour ouvrir le programme d'installation. Par défaut, le programme d'installation demandera l'autorisation administrative lors de l'installation pour installer l'application pour tous les utilisateurs de l'ordinateur.

Si vous ne disposez pas de privilèges administratifs sur votre ordinateur ou si vous ne souhaitez pas installer l'application pour tout le monde, vous pouvez choisir de l'installer uniquement pour l'utilisateur actuel. Dans ce cas, aucun privilège n'est requis, mais certaines fonctionnalités peuvent ne pas fonctionner comme prévu.

!!! note

     Nous recommandons d'installer Zettlr pour tous les utilisateurs.

### macOS

Pour installer Zettlr sur macOS, téléchargez le fichier DMG depuis notre [page de téléchargement](https://www.zettlr.com/download) et montez-le en double-cliquant dessus. Ensuite, faites glisser l'icône Zettlr dans votre répertoire Applications et attendez que l'application soit copiée.

!!! note

     Vous pouvez également installer Zettlr avec [Homebrew](https://brew.sh/) en exécutant la commande suivante :
    
     `$ Brew Install --cask zettlr`
    
     Pour plus d'informations, visitez la [page Zettlr Homebrew](https://formulae.brew.sh/cask/zettlr).

### Ubuntu/Debian

Pour installer Zettlr sur les dérivés Ubuntu ou Debian, téléchargez le package `deb` depuis notre [page de téléchargement](https://www.zettlr.com/download) et exécutez le fichier.

### Fedora

Pour installer les dérivés de Zettlr, Fedora ou Red Hat, téléchargez le package `rpm` depuis notre [page de téléchargement](https://www.zettlr.com/download) et exécutez le fichier.

### Arch Linux

Grâce aux efforts de la communauté, Zettlr est disponible sous forme de package standard pour Arch Linux. Pour installer Zettlr sur Arch, suivez les instructions d'installation normales pour les packages sur Arch. En savoir plus sur la [page Wiki Zettlr Arch](https://wiki.archlinux.org/title/Zettlr).

!!! note

     Nous n'avons jamais entendu de plaintes concernant le package Zettlr Arch et nous le considérons comme fiable et sûr. Cependant, comme nous ne contrôlons pas l'étape de compilation de ces packages, nous devons ajouter une clause de non-responsabilité indiquant que nous ne pouvons en assumer la responsabilité. En cas de problème, veuillez contacter directement les responsables.

### AppImage

Zettlr est disponible sous forme de bundle [AppImage](https://appimage.org/) pour Linux. Pour l'installer, téléchargez le package depuis notre [page de téléchargement](https://www.zettlr.com/download). Pour installer AppImage, placez le fichier dans un répertoire de votre choix, rendez-le exécutable et commencez à l'utiliser.

### Flatpack 

Zettlr est disponible sous forme de [Flatpack](https://flathub.org/home). Pour installer la version Flatpack, téléchargez-la depuis la [page FlatHub de Zettlr](https://flathub.org/apps/details/com.zettlr.Zettlr) et suivez les instructions d'installation.

!!! note

     Le Flatpack ne peut pas accéder à votre système de fichiers par défaut. Pour lui donner accès à vos documents, vous devez d'abord le configurer avec un package comme, par exemple, [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal). En cas de problème, veuillez contacter le mainteneur de Flatpack sur le [dépôt GitHub correspondant](https://github.com/flathub/com.zettlr.Zettlr). Ne déposez pas de rapports sur le référentiel principal – nous ne pourrons pas vous aider.


## Mise à jour de Zettlr

L'application recherche de nouvelles mises à jour à chaque fois que vous démarrez l'application. Vous pouvez également déclencher manuellement la recherche de mises à jour en cliquant sur « Aide » &rarr; "Vérifier les mises à jour". Si une nouvelle version est disponible, Zettlr affichera un symbole « téléchargement » dans la barre d'outils. Si vous cliquez dessus, Zettlr ouvrira une boîte de dialogue contenant le numéro de la nouvelle version, votre version actuelle et un journal des modifications avec toutes les fonctionnalités et corrections de bogues contenues dans la nouvelle version.

!!! avertissement

     **Ne « sautez jamais » les versions !** Parfois, nous modifions la configuration de Zettlr lors d'une mise à jour. Cela peut entraîner une corruption des données lors d'une mise à jour si vous « omettez » la version nécessaire qui migrera votre configuration. Si vous n'avez pas mis à jour Zettlr depuis un certain temps, ne mettez **pas** à jour directement vers la dernière version. Au lieu de cela, installez chaque mise à jour l'une après l'autre. Vous pouvez trouver toutes les mises à jour – pas seulement les dernières – sur [GitHub](https://github.com/Zettlr/Zettlr/releases).

Pour mettre à jour, cliquez sur le bouton de téléchargement et attendez la fin du téléchargement. Ensuite, cliquez sur « Commencer la mise à jour », ce qui fermera Zettlr et lancera le processus de mise à jour. Le programme de mise à jour sera placé dans votre dossier Téléchargements. Vous pourrez le supprimer une fois la mise à jour réussie.

!!! note

     N'utilisez pas cette procédure de mise à jour si vous avez installé Zettlr via un gestionnaire de packages, par exemple Homebrew. Dans ce cas, veuillez mettre à jour conformément à la procédure de votre gestionnaire de packages pour éviter les conflits. Vous pouvez désactiver le paramètre « Rechercher automatiquement les mises à jour » dans vos préférences pour empêcher Zettlr de rechercher automatiquement les mises à jour.

Après toute mise à jour, soyez prêt à **attendre quelques minutes** pour que Zettlr se lance. Après chaque mise à jour, le cache de fichiers est vidé et lorsque la version la plus récente de Zettlr démarre pour la première fois, elle doit recréer ce cache de fichiers. Plus vous ouvrez de fichiers et de dossiers, plus ce processus peut prendre du temps. Ne vous inquiétez donc pas si vous ne voyez aucune réaction pendant un certain temps – la ou les fenêtres principales s'ouvriront dès que Zettlr aura à nouveau analysé vos espaces de travail.

Si les mises à jour automatiques ne fonctionnent pas pour vous, vous pouvez toujours mettre à jour manuellement en téléchargeant le programme d'installation approprié pour votre système (voir ci-dessus). Il n'y a pas de différence (technique) entre la première configuration et une mise à jour ; les fichiers sont les mêmes.

!!! note

     Vous pouvez opter pour les versions bêta. Pour ce faire, activez « M'avertir des versions bêta » dans les paramètres.

## Désinstallation de Zettlr

Si vous n'êtes pas satisfait de Zettlr ou si vous devez supprimer l'application, veuillez suivre ces instructions.

!!! note

     Si vous avez installé Zettlr avec un gestionnaire de packages, consultez la documentation de votre gestionnaire de packages sur la désinstallation du logiciel au lieu de suivre les instructions ici.

Sous **Windows**, accédez aux paramètres du logiciel et désinstallez-le conformément aux [instructions de Microsoft](https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs- dans-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98). Si vous souhaitez également supprimer les paramètres et les données utilisateur, vous pouvez les trouver dans le répertoire « C:\Users\<votre-nom-d'utilisateur>\AppData\Roaming\Zettlr ».

Sur **macOS**, accédez au dossier « Applications » et déplacez « Zettlr.app » vers la corbeille. Si vous souhaitez également supprimer les paramètres et les données utilisateur, vous pouvez les trouver dans le répertoire `/Users/<your-user-name>/Library/Application Support/Zettlr`.

Sous **Linux**, la procédure de désinstallation dépend de votre distribution et de la manière dont vous avez installé l'application. Veuillez consulter le manuel approprié pour savoir comment procéder. Si vous souhaitez également supprimer les paramètres et les données utilisateur, vous pouvez les trouver dans le répertoire `/home/<your-user-name>/.config/Zettlr`.

!!! note

     Zettlr créera également des fichiers dits « cachés » dans vos espaces de travail qui mémorisent les paramètres de votre répertoire. Ces fichiers sont nommés « .ztr-directory ». Après avoir désinstallé Zettlr, vous pouvez supprimer ces fichiers en toute sécurité.

## Nightly releases 

Depuis la version 2.0.0, nous proposons des versions dites Nightly. Les Nightlies sont des versions qui sont construites automatiquement tous les lundis à midi (UTC) (mais parfois nous les construisons manuellement). Ils contiennent les modifications les plus récentes apportées à la base de code. Cela signifie qu'elles sont encore plus récentes que les versions bêta, **mais** cela signifie également qu'elles peuvent contenir de sérieux bugs que nous n'avons pas encore trouvés.

Les Nightly releases sont réservées aux utilisateurs avancés qui comprennent les risques liés à leur utilisation. Si vous sauvegardez régulièrement vos paramètres, vos statistiques d'écriture et vos fichiers, il peut être prudent d'utiliser des logiciels de nuit. Nous apprécions tous ceux qui utilisent des nightlies et nous informent des bugs qu'ils rencontrent.

Pour installer une version nocturne, vous devez la télécharger manuellement depuis <https://nightly.zettlr.com/>. Votre programme de mise à jour ne vous informera pas des Nightly releases, mais comme elles sont automatiquement créées chaque semaine, vous pouvez être sûr qu'il y aura une nouvelle version.

!!! avertissement

     Les Nightly releases sont entièrement automatisées. Nous ne garantissons aucune stabilité pour ceux-ci. Normalement, rien de grave ne devrait arriver, mais il est possible que ces versions endommagent votre ordinateur. En utilisant les Nightly releases, vous reconnaissez que vous comprenez ces risques.

Veuillez également noter que nous ne conservons aucune version nocturne précédente. La soirée de chaque semaine remplacera simplement la précédente. Si une nuit est inutilisable, n'hésitez pas à nous en informer afin que nous puissions planifier manuellement une nouvelle build après avoir corrigé le bug.