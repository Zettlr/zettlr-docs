# Instalando LaTeX

Zettlr usa Pandoc, un pequeño programa que puede convertir documentos en otros formatos, para importar y exportar tus archivos. Zettlr también trae un exportador de  PDF propio. Como sea, si estás en un uso avanzado o le gustaría personalizar sus PDFs exportados más adelante, le podría gustar instalar una distribución de  LaTeX en su computador.

LaTeX es un lenguaje de tipografía avanzado que le permite hacer más o menos cualquier cosa con sus archivos. Cuando exporta un documento a PDF usando dicha distribución de  LaTeX, podría tener muchas, muchas más opciones para personalziar sus archivos exportados que con el exportador propio.

> Las distribuciones de LaTeX vienen en dos sabores: una instalación "completa" que incluye una gran cantidad de programas gráficos para escribir TeX directamente, y una instalación "mínima" que sólo contiene los compiladores. Zettlr es feliz sólo cn la instalación mínima (porque sólo necesita los compiladores), pero si quiere darse un gusto de rechupete con  LaTeX, es libre de instalar el paquete completo.

## Windows

* La configuración mínima: MikTeX ([descarga](https://miktex.org/download))
* La configuración completa: TeX Live ([descarga](https://www.tug.org/texlive/))

## macOS

* La configuración mínima: TeX Básico ([download](https://www.tug.org/mactex/morepackages.html))
* La configuración completa: MacTeX ([download](https://www.tug.org/mactex/mactex-download.html))

## Linux

Las distribuciones de Linux comúnmente tienen varios paquetes disponibles de LaTeX para instalar directamente desde tu gestor de software. Hay también paquetes mínimos y completos. Listamos las opciones para distribuciones comunes a continuación.

> Realmente no importa qué versión instales, pero hay un requerimiento: necesitas instalar el binario de `xetex`, desde que es el compilador que  Zettlr usa. Si tienes dudas, consulta el manual de tu distribución para más información sobre cómo instalar correctamente TeX.

### Debian/Ubuntu

La configuración mínima con el compilador XeLaTeX:

```shell
$ sudo apt install texlive-base texlive-xetex
```

La configuración completa:

```shell
$ sudo apt install texlive-full
```

### Fedora/RHEL

Fedora ofrece tres distribuciones, básica, media y completa. Instala una de estas:

```shell
$ sudo dnf install texlive-scheme-basic
$ sudo dnf install texlive-scheme-medium
$ sudo dnf install texlive-scheme-full
```
