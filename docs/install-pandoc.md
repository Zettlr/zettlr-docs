# Installing Pandoc

What makes Zettlr interact with other software such as Microsoft Word, Wiki-systems or OpenOffice is an additional software package called `Pandoc`. Pandoc is free and Open Source and it allows you to use all exporting and importing features of Zettlr, making it the ideal choice to be the interface between other programs and co-workers who do not use Markdown.

Installing Pandoc is easy on all platforms.

> You can install Pandoc at any time. Simply use the menu item from the Help menu to open up the installation instructions.

## Windows

On Windows, Pandoc can be installed by visiting the [download page](https://github.com/jgm/pandoc/releases/latest) and retrieving the Windows installer. Simply execute it. Afterwards, it should be installed correctly. Try to export something. If it works, you're done!

> Please note that due to the fact that Pandoc is a CLI-program (Command Line Interface), it cannot show you whether or not there is an update available. You'll have to do this yourself. Simply visit the download page from time to time.

## macOS

On macOS, Pandoc can be installed in a variety of ways.

### Install using the official installer

To install Pandoc the old way, simply head over to the [download page](https://github.com/jgm/pandoc/releases/latest) and get the macOS installer. Once it is done, pandoc should be available on your system. Try to export something. If it works, you're done!

### Recommended method: Homebrew

The preferred method is [Homebrew](https://brew.sh/). Homebrew is a packet manager that makes it easy to install command line programs such as pandoc and makes it easy to maintain it. Make sure to [install Homebrew correctly](https://brew.sh/), and then simply run the following command in the Terminal:

```
$ brew install pandoc
```

To update pandoc from time to time, use this command:

```
$ brew upgrade
```

This will upgrade all installed formulae (as they are called) to the newest version.

> Installing with Homebrew is recommended, as it is not only faster, but also more convenient.

## Linux

On Linux, installing Pandoc is hilariously simple. Simply use your packet manager to search for, and install Pandoc. The provided packages aren't always up-to-date, but they should fit. If you want to install the newest version, you'd have to [download the Linux installer](https://github.com/jgm/pandoc/releases/latest) and follow the [install instructions](https://pandoc.org/installing.html) on the Pandoc site.