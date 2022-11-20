# Installing LaTeX

Zettlr uses Pandoc, a small program that can convert documents into other formats, for importing and exporting your files. Zettlr also features a built-in PDF exporter. However, if you are an advanced user or would like to customise your PDF exports further, you may want to install a LaTeX-distribution on your computer.

LaTeX is an advanced typesetting language that allows you to do more or less anything with your files. When you export a document to PDF using such a LaTeX distribution, you have many, many more options to customise your exported files than with the built-in exporter.

> LaTeX distributions come in two flavors: A "full" installation featuring a host of graphical programs for writing TeX directly, and a "minimal" installation that only contains the actual compilers. Zettlr is happy with only a minimal installation (because it just needs the compiler), but if you want to fiddle around with LaTeX more you are free to also install the full package.

## Windows

* The minimal setup: MikTeX ([download](https://miktex.org/download))
* The full setup: TeX Live ([download](https://www.tug.org/texlive/))

## macOS

* The minimal setup: Basic TeX ([download](https://www.tug.org/mactex/morepackages.html))
* The full setup: MacTeX ([download](https://www.tug.org/mactex/mactex-download.html))

## Linux

Linux distributions commonly have several LaTeX packages available to install directly from your software manager. There are also minimal and full packages. We list options for common distributions below.

> It doesn't really matter which of the versions you install, but there is one requirement: You need to install the `xetex` binary, since that is the compiler that Zettlr uses. If in doubt, consult your distribution's manual for more information on how to correctly install TeX.

### Debian/Ubuntu

The minimal setup with the XeLaTeX compiler:

```shell
$ sudo apt install texlive-base texlive-xetex
```

The full setup:

```shell
$ sudo apt install texlive-full
```

### Fedora/RHEL

Fedora offers three distributions, basic, medium, and full. Install one of these:

```shell
$ sudo dnf install texlive-scheme-basic
$ sudo dnf install texlive-scheme-medium
$ sudo dnf install texlive-scheme-full
```

### Flatpak
Install the texlive plugin for Flatpak (be warned, it is the full version and thus quite large):

```shell
$ flatpak install org.freedesktop.Sdk.Extension.texlive
```
