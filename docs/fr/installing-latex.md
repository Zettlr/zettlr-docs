# Installer LaTeX

Zettlr permet d'exporter dans différents formats de fichiers, y compris le PDF. Il existe cependant deux manières d'exporter au format PDF : via Zettlr lui-même et à l'aide d'un programme externe appelé LaTeX. Zettlr prend également en charge un format d'exportation appelé Simple PDF. Cela exportera un fichier au format HTML, puis "l'imprimera" de la même manière que les navigateurs impriment les sites Web.

Pour exporter vos documents  vers des fichiers PDF plus personalisés , vous devrez installer [LaTeX](https://en.wikipedia.org/wiki/LaTeX). LaTeX est un langage de composition qui permet une grande personnalisation, mais comme il s'agit d'un programme relativement volumineux, il n'est pas fourni avec Zettlr. Vous trouverez ci-dessous comment l'installer.

Les distributions LaTeX sont disponibles en deux versions : une installation « complète » comprenant une multitude de programmes graphiques pour écrire directement TeX, et une installation « minimale » qui ne contient que les compilateurs réels. Zettlr se contente d'une installation minimale (car il n'a besoin que du compilateur), mais si vous souhaitez jouer davantage avec LaTeX, vous êtes libre d'installer également le package complet.

!!! note

    si vous installez uniquement la configuration minimale, vous devrez ensuite installer des packages supplémentaires. Lisez ce guide jusqu'à la fin pour savoir comment faire.

## Windows

L'installation de LaTeX sur Windows fonctionne comme n'importe quel autre programme. Téléchargez simplement l'un des éléments suivants :

* La configuration minimale : MikTeX ([télécharger](https://miktex.org/download))
* La configuration complète : TeX Live ([télécharger](https://www.tug.org/texlive/))

## macOS

Comme pour Windows, vous avez pour macOs des installateurs simples qui installeront l'une des deux versions :

* La configuration minimale : Basic TeX ([télécharger](https://www.tug.org/mactex/morepackages.html))
* La configuration complète : MacTeX ([télécharger](https://www.tug.org/mactex/mactex-download.html))

## Linux

Les distributions Linux disposent généralement de plusieurs packages LaTeX disponibles à installer directement à partir de votre gestionnaire de logiciels. Il existe également des paquets minimaux et complets. Nous répertorions ci-dessous les options pour les distributions courantes.

!!! note

    La version que vous installez n'a pas vraiment d'importance, mais il y a une condition : vous devez installer le binaire `xetex`, puisque c'est le compilateur que Zettlr utilise par défaut. En cas de doute, consultez le manuel de votre distribution pour plus d'informations sur la façon d'installer correctement TeX.

### Debian/Ubuntu

La configuration minimale avec le compilateur XeLaTeX :

```shell
$ sudo apt install texlive-base texlive-xetex
```

La configuration complète :

```shell
$ sudo apt install texlive-full
```

### Fedora/RHEL

Fedora propose trois distributions, basique, moyenne et complète. Installez-en un :

```shell
$ sudo dnf install texlive-scheme-basic
$ sudo dnf install texlive-scheme-medium
$ sudo dnf install texlive-scheme-full
```

### Flatpak
Installez le plugin texlive pour Flatpak (attention, il s'agit de la version complète et elle est assez volumineuse) :

```shell
$ flatpak installer org.freedesktop.Sdk.Extension.texlive
```
## Installation de packages supplémentaires

La plupart des fonctionnalités de LaTeX se présentent sous forme de paquets. Par défaut, les installations minimales ne sont fournies qu'avec un ensemble de paquets de base. Le modèle par défaut utilisé par Zettlr nécessite cependant que quelques paquets supplémentaires soient présents sur votre système. Vous devrez installer ces paquets, mais ils ne font souvent que quelques kilo-octets et n'occuperont donc pas beaucoup d'espace disque.

Nous vous recommandons de ne pas installer de packages à moins que Zettlr le demande lors des exportations. S'il vous manque un paquet, Zettlr vous donnera l'une des deux erreurs suivantes : soit `Command \somecommand not set` ou `File somefile.sty not found`.

Dans les deux cas, il est probable que la commande ou le fichier soit fourni dans un paquets. Il est facile d'installer les paquets manquants en utilisant la procédure suivante.

!!! note

    Sous Windows, LaTeX tentera d'installer automatiquement les paquets manquants et vous demandera s'il doit le faire.

1. Tous les packages LaTeX sont répertoriés dans le ["Comprehensive TeX Archive Network" (CTAN)](https://www.ctan.org/). Prenez le nom du fichier (y compris son extension, « .sty ») ou la commande et recherchez-le à l'aide de la barre de recherche.
2. Par exemple, si LaTeX vous informe que la commande `\hypertarget` n'est pas définie, [recherchez-la comme ceci](https://www.ctan.org/search?phrase=hypertarget).
3. Dans le cas de « hypertarget », il vous donnera un seul paquet : `gmiflink`. S'il y a plusieurs résultats, essayez de rechercher sur Google celui dont vous avez besoin.
4. Pour l'installer sur macOS ou Linux, tapez « sudo tlmgr install <packagename> » dans une fenêtre de terminal.
5. Ensuite, réessayez l’exportation. Alors ça devrait marcher ; sinon, répétez ces étapes.
