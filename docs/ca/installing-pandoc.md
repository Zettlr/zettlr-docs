# Instal·lar el Pandoc

Pandoc és un petit programa que pot convertir fitxers de documents d’un format a un altre. És extremadament potent i té moltes opcions. Per tal de permetre a Zettlr importar i exportar fitxers, cal instal·lar Pandoc al vostre ordinador. Zettlr no té la capacitat d'importar o exportar per si mateix. El motiu d'això és que Pandoc fa aquesta feina molt bé, també és gratuït i de codi obert i està disponible a totes les plataformes que admet Zettlr.

> Zettlr requereix Pandoc versió 2.0 o superior. Alguns dipòsits de Linux encara tenen versions anteriors disponibles. Si aquest és el vostre cas, instal·leu Pandoc des de la [pàgina de descàrrega](https://github.com/jgm/pandoc/releases/latest).

## Finestres

A Windows, Pandoc es pot instal·lar visitant la [pàgina de descàrrega](https://github.com/jgm/pandoc/releases/latest) i recuperant l'instal·lador de Windows. Es pot instal·lar com qualsevol altre programa i hauria de ser reconegut immediatament i automàtica per Zettlr. Podeu provar si funciona intentant exportar o importar alguna cosa.

En alguns casos, pot ser que Zettlr no pugui detectar Pandoc encara que estigui instal·lat. Això passa sobretot si Pandoc no s’ha instal·lat al directori per defecte. Si aquest és el cas, haurieu de canviar el camí complet fins a `pandoc.exe` al camp corresponent de la pestanya "Avançat" de les preferències.

> Tingueu en compte que, a causa del fet que Pandoc és un programa CLI (Command Line Interface), no pot mostrar si hi ha una actualització disponible. Simplement visiteu la pàgina de descàrrega de tant en tant per obtenir la versió més recent.

## macOS

A macOS, Pandoc es pot instal·lar de diverses maneres. Podeu instal·lar-lo mitjançant un paquet d’instal·lació, però a causa de la facilitat d’ús, es recomana instal·lar-lo amb Homebrew.

### Mètode recomanat: Homebrew

El mètode recomanat és [Homebrew](https://brew.sh/). Homebrew és un gestor de paquets que facilita la instal·lació de programes de línia d’ordres com Pandoc i que en fa més fàcil el manteniment. Assegureu-vos d’[instal·lar Homebrew](https://brew.sh/) i, tot seguit, simplement executeu l’ordre següent al terminal:

```bash
$ brew install pandoc
```

Per actualitzar Pandoc de tant en tant, utilitzeu aquesta ordre:

```bash
$ brew upgrade
```

Això actualitzarà totes les fórmules instal·lades (així és com s'anomenen) a la versió més recent.

Després de configurar Pandoc, és possible que també vulgueu instal·lar Pandoc Citeproc, ja que us proporciona la possibilitat de [citar](academic/citations.md) utilitzant Zettlr. A Windows, Citeproc s’instal·la automàticament, mentre que a macOS s'haurà d’instal·lar Pandoc Citeproc per separat. Només cal tornar a utilitzar el Homebrew:

```bash
$ brew install pandoc-citeproc
```

> Es recomana instal·lar-lo amb Homebrew, ja que no només és més ràpid, sinó que també és més convenient.

### Instal·leu-lo mitjançant l'instal·lador oficial

Per instal·lar Pandoc de la manera clàssica, aneu a la [pàgina de descàrrega](https://github.com/jgm/pandoc/releases/latest) i obteniu l'instal·lador de macOS. Un cop fet això, Pandoc hauria d’estar disponible al vostre sistema. Recordeu que, instal·lant Pandoc d’aquesta manera, heu de comprovar si hi ha actualitzacions manualment.

## Linux

A Linux, instal·lar Pandoc és molt senzill. Utilitzeu el gestor de paquets per cercar i instal·lar el Pandoc. Els paquets proporcionats no sempre estan actualitzats, però haurien d’adaptar-se. Si voleu instal·lar la versió més recent, haureu de [descarregar l’instal·lador de Linux](https://github.com/jgm/pandoc/releases/latest) i seguir les [instruccions d’instal·lació](https://pandoc.org/installation.html) de la pàgina web de Pandoc.

> És possible que hàgiu de configurar `pandoc-citeproc` manualment, instal·lant-lo mitjançant el mètode preferit del vostre sistema operatiu.