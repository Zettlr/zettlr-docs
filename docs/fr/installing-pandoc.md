# Installing Pandoc

Pandoc est un petit programme qui a la capacité de convertir des fichiers de document d'un format à un autre. Il est extrêmement puissant et offre de nombreuses options. Afin de permettre à Zettlr d'importer et d'exporter des fichiers, Pandoc doit être installé sur votre ordinateur. Zettlr n'a pas la capacité d'importer ou d'exporter en soi. La raison en est que Pandoc fait extrêmement bien ce travail, il est également gratuit et Open Source, et est disponible sur toutes les plates-formes prises en charge par Zettlr.

> Zettlr nécessite Pandoc version 2.0 ou supérieure. Certains référentiels Linux ont encore des versions plus anciennes disponibles. Si tel est le cas pour vous, veuillez installer Pandoc depuis la [page de téléchargement](https://github.com/jgm/pandoc/releases/latest).

## Windows

Sous Windows, Pandoc peut être installé en visitant la [page de téléchargement](https://github.com/jgm/pandoc/releases/latest) et en récupérant le programme d'installation de Windows. Il peut être installé comme n'importe quel autre logiciel et doit être reconnu immédiatement par Zettlr. Vous pouvez tester si cela fonctionne en essayant d'exporter ou d'importer quelque chose.

Dans de rares cas, il se peut que Zettlr ne puisse pas détecter Pandoc même s'il est installé. C'est particulièrement le cas si Pandoc n'a pas été installé dans le répertoire par défaut. Si tel est le cas, vous pouvez déposer le chemin complet vers le `pandoc.exe` dans le champ correspondant de l'onglet" Avancé "des préférences.

> Veuillez noter qu'en raison du fait que Pandoc est un programme CLI (Interface de ligne de commande), il ne peut pas vous montrer si une mise à jour est disponible. Visitez simplement la page de téléchargement de temps en temps pour obtenir la dernière version.

## macOS

Sur macOS, Pandoc peut être installé de différentes manières. Vous pouvez l'installer à l'aide d'un package d'installation, mais en raison de sa facilité d'utilisation, nous vous recommandons de l'installer à l'aide de Homebrew.

### Méthode recommandée : Homebrew

La méthode préférée est [Homebrew](https://brew.sh/). Homebrew est un gestionnaire de paquets qui facilite l'installation de programmes en ligne de commande tels que Pandoc et facilite sa maintenance. Assurez-vous de [installer Homebrew](https://brew.sh/), puis exécutez simplement la commande suivante dans le terminal:

```bash
$ brew install pandoc
```

Pour mettre à jour Pandoc de temps en temps, utilisez cette commande :

```bash
$ brew upgrade
```

Cela mettra à niveau toutes les formules installées (comme on les appelle) vers la dernière version.

Une fois Pandoc configuré, vous pouvez également installer Pandoc Citeproc, car il vous offre la possibilité de [citer](academic/citations.md) en utilisant Zettlr. Sous Windows, Citeproc est automatiquement installé, tandis que sous macOS, vous devrez installer Pandoc Citeproc en plus. Utilisez simplement Homebrew pour cela aussi:

```bash
$ brew install pandoc-citeproc
```

> L'installation avec Homebrew est recommandée, car elle est non seulement plus rapide, mais aussi plus pratique.

### Installer avec l'installateur officiel

Pour installer Pandoc à l'ancienne, rendez-vous simplement sur la [page de téléchargement](https://github.com/jgm/pandoc/releases/latest) et obtenez le programme d'installation de macOS. Une fait, Pandoc devrait être disponible sur votre système. N'oubliez pas qu'en installant Pandoc de cette manière, vous devez rechercher manuellement les mises à jour.

## Linux

Sous Linux, l'installation de Pandoc est simple. Utilisez simplement votre gestionnaire de packages pour rechercher et installer Pandoc. Les packages fournis ne sont pas toujours à jour, mais ils devraient correspondre. Si vous souhaitez installer la dernière version, vous devez [télécharger le programme d'installation Linux](https://github.com/jgm/pandoc/releases/latest) et suivre les [instructions d'installation](https://pandoc.org/install.html) sur le site Pandoc.

> Vous devrez peut-être configurer `pandoc-citeproc` manuellement en l'installant en utilisant la méthode préférée sur votre système d'exploitation.
