# Installing LaTeX

Zettlr allows exporting into a variety of file formats, including PDF. There are two ways of exporting to PDF, however: Via Zettlr itself and with the help of an external program called LaTeX. Out of the box, Zettlr supports an export format called `Simple PDF`. This will export a file to HTML and then “print” it, similar to how browsers print websites.

To export more advanced PDF files, you'll need to install [LaTeX](https://en.wikipedia.org/wiki/LaTeX). LaTeX is a typesetting language that allows for a large amount of customization, but because it is a relatively large program, it does not come bundled with Zettlr. Here we show you how to install it.

LaTeX distributions usually come in two flavors: A “full” installation featuring a host of graphical programs for writing TeX directly, and a “minimal” installation that only contains the actual compilers. Zettlr is happy with only a minimal installation (because it just needs the compiler), but if you want to fiddle around with LaTeX more you are free to install the full package.

!!! note

    Especially if you only install the minimal setup, you'll need to install additional packages afterwards. Read to the end of this guide to see how.

## Windows

Installing LaTeX on Windows works just like any other program. Simply download and install one of the following:

* The minimal setup: MikTeX ([download](https://miktex.org/download))
* The full setup: TeX Live ([download](https://www.tug.org/texlive/))

## macOS

Similar to Windows, macOS also features simple installers that will install one of the two versions:

* The minimal setup: Basic TeX ([download](https://www.tug.org/mactex/morepackages.html))
* The full setup: MacTeX ([download](https://www.tug.org/mactex/mactex-download.html))

## Linux

Linux distributions commonly have several LaTeX packages available to install directly from your software manager. If you're running the Flatpak version, you must install the Flatpak TeX Live extension, rather than a TeX distribution from your system software manager. There are also minimal and full packages. We list options for common distributions below.

!!! note

    It doesn't really matter which of the versions you install, but there is one requirement: You need to install the `xetex` binary, since that is the compiler that Zettlr uses by default. If in doubt, consult your distribution's manual for more information on how to correctly install TeX.

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

## Installing Additional Packages

Most LaTeX features come in the form of packages. By default, minimal installations only come with a basic set of packages. The default template that Zettlr uses requires a few additional packages to be present on your system, however. You'll need to install these packages, but they are often just a few Kilobytes large so they won't occupy much disk space.

We recommend you don't install packages unless Zettlr complains during exports. If you are missing some package, Zettlr will give you one of two errors: either `Command \somecommand not defined` or `File somefile.sty not found`. In both cases it is likely that the command or file will be provided by a package. It's easy to install the missing packages using the following procedure.

!!! note

    On Windows, LaTeX will attempt to install the missing packages automatically and will ask you if it should do so.

1. All LaTeX packages are listed in the [“Comprehensive TeX Archive Network” (CTAN)](https://www.ctan.org/). Take the filename (including its extension, `.sty`) or the command, and search for it using the search bar.
2. For example, if LaTeX complains that the command `\hypertarget` is not defined, [search for it like this](https://www.ctan.org/search?phrase=hypertarget).
3. In the case of “hypertarget,” it will give you a single package: `gmiflink`. If there is more than one result, try to google which one you need. There is usually some discussion, since you are never the first to experience the issue.
4. To install it on macOS or Linux, type `sudo tlmgr install <packagename>` into a terminal window.
5. Then, try the export again. Repeat these steps until all missing packages are installed.
