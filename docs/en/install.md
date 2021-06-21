# Installation

The installation of Zettlr is very easy and takes only a step on every operating system. Zettlr is cross-platform, so it will run on most computers. Zettlr comes pre-built for macOS, Windows and many Linux systems.

> Please note that especially the supported macOS and Linux versions may change at any time. If you use an operating system that is barely supported and you encounter problems, the most recent list of supported platforms can be found [here](https://www.electronjs.org/docs/tutorial/support#supported-platforms).

## Windows (7 or newer)

To install Zettlr on Windows, just download the app from the [download page](https://www.zettlr.com/download) and double click to open the installer. If you wish to install Zettlr for all users, it is installed to the main `Program Files` directory and in this case you'd have to give it elevated rights during setup (it will automatically ask for your permission). You don't need any rights if you install it for the logged in user.

To uninstall Zettlr, simply run the Uninstall.exe either from the directory itself or use the appropriate add/remove program interface in your system's settings. If you want to completely remove all data associated with the app, also remove the directory `C:\Users\<your-user-name>\AppData\Roaming\Zettlr`.

> At the time of writing, the Windows ARM installer does not come with Pandoc bundled. This means that exports may not work. You have to install Pandoc manually. If Pandoc is installed on your computer, Zettlr for Windows ARM will automatically use that one.

## macOS (10.11 or newer)

To install Zettlr on macOS, simply download the dmg-file and mount it by double-clicking it. Then drag the Zettlr icon into your Applications directory and you're done!

To uninstall Zettlr, simply remove the Zettlr.app from your Applications directory. If you want to completely remove all data associated with the app, also remove the directory `/Users/<your-user-name>/Library/Application Support/Zettlr`.

> You can also install Zettlr using [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew install --cask zettlr`

## Linux (Debian 8/Ubuntu 12.04/Fedora 24 or newer)

There are prebuilt `deb` and `rpm` packages as well as `AppImage` bundles for Linux systems. Simply install the package on your system according to which of these you have downloaded. For installing AppImage bundles, please [refer to this guide on how to install them](https://appimage.org/).

To uninstall, follow the usual steps it takes to remove a package (usually through the graphical installer application or via `dpkg`). If you also want to remove all data associated with the app, also delete the `/home/<your-user-name>/.config/Zettlr` directory.

> There is a community-maintained package for Arch Linux available. [You can find it on the official AUR repositories](https://aur.archlinux.org/packages/zettlr-bin/). Please note that this package is community-maintained and we do not take any responsibility in its stability, safety or offered version.

## Updating Zettlr

The application checks for new updates each time you start the app. You can also manually trigger the search for updates by using the respective menu item from the Help menu. If a new version is available, Zettlr will show you a dialog that contains the new version's number, your current version and a changelog with all features and bug fixes the new version contains.

To update, you simply have to click the version appropriate for your architecture (that is, either the 64bit version or the ARM version). Zettlr will automatically start downloading the appropriate installer into your Downloads folder and, once it's finished, you can click "Begin Update", after which Zettlr will quit and open the downloaded file.

Zettlr automatically downloads the same files which you can find on our download page. To update manually, just download the appropriated installer and run it. It will automatically overwrite the existing version, but keep your configuration.

> If you are interested in cutting-edge releases, make sure to tick the checkbox "Notify me about beta releases" in the Advanced tab of the preferences dialog. Zettlr will then also offer you beta releases which might be not as polished as the regular releases, but you get new features earlier than others!

## Nightly Releases

Since 2.0.0, we also offer so-called nightly releases. Nightlies are releases that are being built automatically every Friday at noon (UTC) (but sometimes we build them manually). They contain the most recent changes to the code base. This means that they are even more recent than the beta releases, **but** this also means that they may contain serious bugs which we haven't found yet.

Nightly releases are for advanced users only who understand the risks in using these. If you keep your settings, the writing statistics, and your files backed up regularly, it might be safe to use nightlies. We do appreciate every one who uses nightlies and informs us about bugs they encounter.

To install a nightly release, you need to manually download them from <https://nightly.zettlr.com/>. Your updater will not notify you about new releases, but since they are being automatically built every Friday, you can be sure that every Friday there will be a new release.

> **ATTENTION**: We do not guarantee any degree of stability. Nightly releases are being built automatically, so if we accidentally introduce a severe bug shortly before the automated build commences, and fix it an hour later, that week's nightlies _will_ contain that bug. Normally, the worst that can happen is that the app does not start and you have to revert to a previous version, but it might be possible that these builds can damage your operating system. By using nightly releases you agree that you understand these risks.

Please also note that we do not retain any previous nightly builds. Each week's nightly will simply replace the previous one. If a nightly is unusable, feel free to notify us so we can manually schedule a new build after we have fixed the bug.
