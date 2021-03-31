# Installer LaTeX

Pour l'importation et l'exportation, Zettlr s'appuie sur Pandoc, mais lorsqu'il s'agit d'exporter des fichiers PDF, Pandoc lui-même s'appuie sur un autre progiciel gratuit et Open Source: LaTeX. Pandoc peut convertir des fichiers Markdown en fichiers LaTeX, mais pour créer des fichiers PDF, ces fichiers LaTeX doivent être traités par un programme différent.

> Les distributions LaTeX sont régulièrement livrées avec une multitude d'applications logicielles destinées à faciliter le travail avec les fichiers source LaTeX. Si vous n'avez pas l'intention d'écrire vous-même du code LaTeX, vous n'avez pas besoin de ces packages complets (et donc volumineux). LaTeX propose également des packages plus petits qui n'incluent que le compilateur nécessaire (le binaire xetex).

## Windows

Sous Windows, vous pouvez installer LaTeX en téléchargeant la distribution MikTex populaire. Vous pouvez [le télécharger ici](https://miktex.org/download). MikTex n'inclut aucun programme supplémentaire, mais est livré avec les binaires nécessaires, c'est donc recommandé.

Si vous souhaitez installer plus d'outils pour travailler avec du code LaTeX, vous pouvez également installer [TexLive](https://www.tug.org/texlive/). Cependant, cette distribution LaTeX est très grande, car elle comprend plusieurs applications logicielles supplémentaires qui vous permettent de travailler directement avec LaTeX.

## macOS

Sur macOS, nous recommandons la distribution [MacTex](https://www.tug.org/mactex/morepackages.html). Assurez-vous de télécharger la distribution **BasicTex**, qui est plus petite que le programme d'installation normal (similaire à la distinction entre MikTex et TexLive sous Windows).

Si vous souhaitez également avoir des applications supplémentaires qui vous permettent de travailler directement avec LaTeX, vous pouvez installer [la distribution complète de MacTex](https://www.tug.org/mactex/mactex-download.html).

## Linux

Les distributions Linux ont généralement plusieurs packages LaTeX disponibles à installer directement à partir de votre gestionnaire de packages. En règle générale, vous souhaitez installer le package XeTeX. Il est possible que vous deviez également installer le package de base, au cas où le package XeTeX ne l'installe pas en tant que dépendance. Vous pouvez le faire en utilisant une application logicielle graphique, si votre distribution en fournit une, ou en l'installant à l'aide de la ligne de commande:

```shell
$ sudo apt install texlive-base texlive-xetex # Pour les distributions basées sur Debian
```

Veuillez consulter le manuel de votre distribution pour plus d'informations sur l'installation de ces packages. Assurez-vous que le binaire `xetex` a bien été installé.
