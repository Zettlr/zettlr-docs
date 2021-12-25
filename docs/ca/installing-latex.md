# Instal·lació de LaTeX

Per importar i exportar, Zettlr confia en Pandoc, però a l’hora d’exportar fitxers a PDF, Pandoc confia en un altre paquet de programari lliure i de codi obert: LaTeX. Pandoc pot convertir fitxers Markdown en fitxers LaTeX, però per crear fitxers PDF, aquests fitxers LaTeX han de ser processats per un programa diferent.

> Normalment les distribucions de LaTeX inclouen moltes (sub)aplicacions  destinades a facilitar el treball amb els fitxers de LaTeX. Si no teniu intenció d'escriure el codi LaTeX vosaltres mateixos, no necessiteu aquests paquets complets (i, per tant, grans). LaTeX també ofereix paquets més petits que només inclouen el compilador necessari (el binari xetex).

## Windows

Al Windows, podeu instal·lar LaTeX baixant la popular distribució MikTex. Podeu [descarregar-lo aquí](https://miktex.org/download). MikTex no inclou cap programa addicional, però inclou els fitxers binaris necessaris, de manera que es recomana.

Si voleu instal·lar més eines per treballar amb el codi LaTeX, també podeu instal·lar [TexLive](https://www.tug.org/texlive/). Tanmateix, aquesta distribució de LaTeX és molt gran, ja que inclou diverses aplicacions de programari addicionals que us permeten treballar directament amb LaTeX.

## macOS

A macOS, recomanem la distribució [MacTex](https://www.tug.org/mactex/morepackages.html). Assegureu-vos de descarregar la distribució **BasicTex**, que és més petita que l’instal·lador normal (similar a la distinció entre MikTex i TexLive al Windows).

Si voleu tenir també aplicacions addicionals que us permetin treballar directament amb LaTeX, podeu instal·lar [la distribució completa de MacTex](https://www.tug.org/mactex/mactex-download.html).

## GNU/Linux

Les distribucions Linux solen tenir diversos paquets LaTeX disponibles per instal·lar directament des del gestor de paquets. Generalment, voleu instal·lar el paquet XeTeX. És probable que també hàgiu  d’instal·lar el paquet base, si el paquet XeTeX no l’instal·la com a dependència. Podeu fer-ho mitjançant una aplicació de programari gràfica, si la vostra distribució en proporciona una, o bé instal·leu-la mitjançant el terminal:

```shell
$ sudo apt install texlive-base texlive-xetex # per a distribucions basades en Debian
```

Consulteu el manual de distribució per obtenir més informació sobre com instal·lar aquests paquets. Assegureu-vos que s’instal·la el binari `xetex`.
