# Installing Pandoc

Pandoc is a small program that has the ability to convert document files from one format into another. It is extremely powerful and has a lot of options. In order to enable Zettlr to import and export files, Pandoc needs to be installed on your computer. Zettlr does not have the capability of importing or exporting in itself. The reason for this is that Pandoc does this job extremely well, it is also free and Open Source, and is available on all platforms that Zettlr supports.

> Zettlr requires Pandoc version 2.0 or higher. Some Linux repositories still have older versions available. If this is the case for you, please install Pandoc from the [download page](https://github.com/jgm/pandoc/releases/latest).

## Windows

On Windows, Pandoc can be installed by visiting the [download page](https://github.com/jgm/pandoc/releases/latest) and retrieving the Windows installer. It can be installed like any other software and should be recognized immediately by Zettlr. You can test if it works by attempting to export or import something.

In rare cases it may be that Zettlr cannot detect Pandoc even if it is installed. This is especially the case if Pandoc has not been installed into the default directory. If this is the case, you can drop the full path to the `pandoc.exe` into the corresponding field in the "Advanced" tab of the preferences.

> Please note that due to the fact that Pandoc is a CLI-program (Command Line Interface), it cannot show you whether there is an update available. Simply visit the download page from time to time to get the newest version.

## macOS

On macOS, Pandoc can be installed in a variety of ways. You can install it using an installer package, but due to the ease of use we recommend to install it using Homebrew.

### Recommended method: Homebrew

The preferred method is [Homebrew](https://brew.sh/). Homebrew is a package manager that makes it easy to install command line programs such as Pandoc and makes it easy to maintain it. Make sure to [install Homebrew](https://brew.sh/), and then simply run the following command in the Terminal:

```bash
$ brew install pandoc
```

To update Pandoc from time to time, use this command:

```bash
$ brew upgrade
```

This will upgrade all installed formulae (as they are called) to the newest version.

After Pandoc is set up, you may want to install Pandoc Citeproc as well, as it provides you with the ability to [cite](academic/citations.md) using Zettlr. On Windows, Citeproc is automatically installed, while on macOS you will have to install Pandoc Citeproc additionally. Simply use Homebrew for this as well:

```bash
$ brew install pandoc-citeproc
```

> Installing with Homebrew is recommended, as it is not only faster, but also more convenient.

### Install using the official installer

To install Pandoc the old way, simply head over to the [download page](https://github.com/jgm/pandoc/releases/latest) and get the macOS installer. Once it is done, Pandoc should be available on your system. Please remember that by installing Pandoc this way, you need to check for updates manually.

## Linux

On Linux, installing Pandoc is simple. Simply use your package manager to search for, and install Pandoc. The provided packages aren't always up-to-date, but they should fit. If you want to install the newest version, you'd have to [download the Linux installer](https://github.com/jgm/pandoc/releases/latest) and follow the [install instructions](https://pandoc.org/installing.html) on the Pandoc site.

> You may need to set up `pandoc-citeproc` manually by installing it using the preferred method on your operating system.
