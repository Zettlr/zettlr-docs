# Installation

The installation of Zettlr is very easy and takes only a step on every operating system. Zettlr is cross-platform, so it will run on your system, no matter which one. Zettlr comes pre-built for macOS, Windows and Debian-based and RedHat-based Linux systems (Ubuntu, Gnome, Xubuntu, Kubuntu, Fedora, RedHat and the like).

If you want to run Zettlr on other Linux-Systems like Arch or on ARM-devices (such as a Raspberry), you'd have to create a package by yourself. There's plenty of easy tutorials on how to build electron apps on the web. Please refer to the [supported platforms for electron apps](https://github.com/electron/electron/blob/master/docs/tutorial/support.md) to stay up to date which platforms are supported.

> There is a community-maintained package for Arch Linux available. [You can find it on the official AUR repositories](https://aur.archlinux.org/packages/zettlr-bin/). Please note that this package is community-maintained and we do not take any responsibility in its stability, safety or offered version.

## Windows (7 or newer)

To install Zettlr on Windows, just download the app from the [download page](https://www.zettlr.com/download) and double click to open it. If you wish to install Zettlr for all users, it is installed to the main `Program Files`-Directory—in this case you'd have to give it elevated rights during setup (it will automatically ask for your permission). You don't need any rights if you install it for yourself.

To uninstall Zettlr, simply run the Uninstall.exe either from the directory itself or use the comfortable option in your system's settings. If you want to completely remove all data associated with the app, also remove the directory `C:\Users\<your-user-name>\AppData\Roaming\Zettlr`.

## macOS (10.10 or newer)

To install Zettlr on macOS, simply download the dmg-file from the latest release and mount it. Then drag the Zettlr-icon into your Applications directory and you're done!

To uninstall Zettlr, simply remove the Zettlr.app from your Applications directory. If you want to completely remove all data associated with the app, also remove the directory `/Users/<your-user-name>/Library/Application Support/Zettlr`.

> You can also install Zettlr using [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew cask install zettlr`

## Linux (Debian 8/Ubuntu 12.04/Fedora 21 or newer)

There are prebuilt `deb`- and `rpm`-packages for linux systems. Simply install the package on your system.

To uninstall, follow the usual steps it takes to remove a package (usually through the graphical installer application or via `dpkg`). If you also want to remove all data associated with the app, also delete the `/home/<your-user-name>/.config/Zettlr` directory.

## Updating the app

The application checks for new updates each time you start the app. You can also manually trigger the search for updates by using the respective menu item from the Help-menu. If there is a new version available, Zettlr will show you a dialog that contains both the new version's number, your current version and a changelog with all features and bug fixes the new version contains. You can then open the download page to download the new package. Simply install it over your current installation, it will take care of removing the old version first. All data will be retained and migrated to the new version.

> If you are interested in cutting-edge releases, make sure to tick the checkbox "Notify me about beta releases" in the advanced tab of the preferences dialog!

## Installing Pandoc

What makes Zettlr interact with other software such as Microsoft Word, Wiki-systems or OpenOffice is an additional software package called `Pandoc`. Pandoc is free and Open Source and it allows you to use all exporting and importing features of Zettlr, making it the ideal choice to be the interface between other programs and co-workers who do not use Markdown.

Installing Pandoc is easy on all platforms.

> You can install Pandoc at any time. Simply use the menu item from the Help menu to open up the installation instructions.

### Windows

On Windows, Pandoc can be installed by visiting the [download page](https://github.com/jgm/pandoc/releases/latest) and retrieving the Windows installer. Simply execute it. Afterwards, it should be installed correctly. Try to export something. If it works, you're done!

> Please note that due to the fact that Pandoc is a CLI-program (Command Line Interface), it cannot show you whether or not there is an update available. You'll have to do this yourself. Simply visit the download page from time to time.

### macOS

On macOS, Pandoc can be installed in a variety of ways.

#### Recommended method: Homebrew

The preferred method is [Homebrew](https://brew.sh/). Homebrew is a package manager that makes it easy to install command line programs such as pandoc and makes it easy to maintain it. Make sure to [install Homebrew](https://brew.sh/), and then simply run the following command in the Terminal:

```bash
$ brew install pandoc
```

To update pandoc from time to time, use this command:

```bash
$ brew upgrade
```

This will upgrade all installed formulae (as they are called) to the newest version.

> Installing with Homebrew is recommended, as it is not only faster, but also more convenient.

After pandoc is set up, you may want to install `citeproc` as well, as it provides you with the ability to [cite](academic/citations.md) using Zettlr. On Windows, Citeproc is automatically installed, while on macOS you will have to install Pandoc Citeproc additionally. Simply use Homebrew for this as well:

```bash
$ brew install pandoc-citeproc
```

#### Install using the official installer

To install Pandoc the old way, simply head over to the [download page](https://github.com/jgm/pandoc/releases/latest) and get the macOS installer. Once it is done, pandoc should be available on your system. Try to export something. If it works, you're done!

### Linux

On Linux, installing Pandoc is hilariously simple. Simply use your package manager to search for, and install Pandoc. The provided packages aren't always up-to-date, but they should fit. If you want to install the newest version, you'd have to [download the Linux installer](https://github.com/jgm/pandoc/releases/latest) and follow the [install instructions](https://pandoc.org/installing.html) on the Pandoc site.

> You may need to set up `pandoc-citeproc` manually by installing it using the preferred method on your operating system.

## Installing LaTeX

Markdown works best if combined with `LaTeX` to create beautiful PDF files. To do so, you'd have to install a `TeX`-distribution along Zettlr. Don't worry: You won't need to learn any `LaTeX` to use it. But you'd have to install it.

Installing the software works exactly the same as any other software: On Windows and macOS you'll need the installer package, while on Linux you can use your package manager to install a distribution.

The recommended distributions are:

- Windows: [MikTeX](https://miktex.org/download)
- macOS: [MacTex](https://www.tug.org/mactex/morepackages.html) (_Attention: It suffices to install the Basic Tex, which is much smaller than the full version!_)
- Linux: [TeX Live](https://www.tug.org/texlive/) (install the texlive-xetex package: `sudo apt install texlive-xetex`)

> You can install LaTeX at a later time. Simply use the menu item from the Help menu to open up the overview page where you can immediately see all available distributions.
