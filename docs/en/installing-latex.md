# Installing LaTeX

For importing and exporting, Zettlr relies upon Pandoc, but when it comes to exporting PDF files, Pandoc itself relies on yet another free and Open Source software package: LaTeX. Pandoc itself can convert Markdown files into LaTeX files, but in order to create PDF-files, these LaTeX files need to be processed by a different program.

> LaTeX distributions regularly come with a host of software applications that are intended to make working with the LaTeX source files easier. If you do not intend to write LaTeX code yourself, you do not need these full (and therefore big) packages. LaTeX also offers smaller packages that only include the necessary compiler (the xetex binary).

## Windows

On Windows, you can install LaTeX by downloading the popular MikTex distribution. You can [download it here](https://miktex.org/download). MikTex does not include any additional programs, but comes with the necessary binaries, so this is recommended.

If you want to install more tools for working with LaTeX code, you can also install [TexLive](https://www.tug.org/texlive/). However, this LaTeX distribution is very large, as it includes several additional software applications that allow you to work with LaTeX directly.

## macOS

On macOS, we recommend the [MacTex](https://www.tug.org/mactex/morepackages.html) distribution. Make sure you download the **BasicTex** distribution, which is smaller than the regular installer (similar to the distinction between MikTex and TexLive on Windows).

If you want to also have additional applications that allow you to work with LaTeX directly, you can install [the full MacTex distribution](https://www.tug.org/mactex/mactex-download.html).

## Linux

Linux distributions commonly have several LaTeX-packages available to install directly from your package manager. Generally, you'd want to install the XeTeX-package. Possibly, you need to install the base package as well, in case the XeTeX-package does not install it as a dependency. You can do this either by using a graphical software application, if your distribution provides one, or install it using the command line:

```shell
$ sudo apt install texlive-base texlive-xetex # for Debian-based distributions
```

Please consult the manual for your distribution for more information on how to install these packages. Make sure that the `xetex`-binary is being installed.
