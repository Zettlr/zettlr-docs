# Installation

The installation of Zettlr is very easy and takes only a step on every operating system. Zettlr is cross-platform, so it will run on most computers. Zettlr comes pre-built for macOS, Windows and many Linux systems.

> Please note that especially the supported macOS and Linux versions may change at any time. If you use an operating system that is barely supported and you encounter problems, the most recent list of supported platforms can be found [here](https://www.electronjs.org/docs/latest/development/build-instructions-gn#platform-prerequisites).

## Windows (7 or newer)

To install Zettlr on Windows, just download the app from the [download page](https://www.zettlr.com/download) and double click to open the installer. If you wish to install Zettlr for all users, it is installed to the main `Program Files` directory and in this case you'd have to give it elevated rights during setup (it will automatically ask for your permission). You don't need any rights if you install it for the logged in user.

> Please note that you should, if you can, install Zettlr with elevated rights, that is: for all users of the computer. Certain features, such as your recent documents will not work if you install the app just for you. However, you can install the app just for you if you don't need the recent documents feature (or if your employer does not grant you admin rights).

To uninstall Zettlr, simply run the Uninstall.exe either from the directory itself or use the appropriate add/remove program interface in your system's settings. If you want to completely remove all data associated with the app, also remove the directory `C:\Users\<your-user-name>\AppData\Roaming\Zettlr`.

> At the time of writing, the Windows ARM installer does not come with Pandoc bundled. This means that exports may not work. You have to install Pandoc manually. If Pandoc is installed on your computer, Zettlr for Windows ARM will automatically use that one.

## macOS (11.6.0 or newer)

To install Zettlr on macOS, simply download the dmg-file from our [download page](https://www.zettlr.com/download) and mount it by double-clicking it. Then drag the Zettlr icon into your Applications directory and you're done!

To uninstall Zettlr, simply remove the Zettlr.app from your Applications directory. If you want to completely remove all data associated with the app, also remove the directory `/Users/<your-user-name>/Library/Application Support/Zettlr`.

> You can also install Zettlr using [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew install --cask zettlr`

## Linux

### Debian/Ubuntu/Fedora and derivatives

There are prebuilt `deb` (Debian 8/Ubuntu 12.04 or newer) and `rpm` (Fedora 24 or newer) packages. You can install them using the respective package manager or download them from our [download page](https://www.zettlr.com/download).

To uninstall, follow the usual steps it takes to remove a package (usually through the graphical installer application or via `dpkg`). If you also want to remove all data associated with the app, also delete the `/home/<your-user-name>/.config/Zettlr` directory.

### Arch Linux

There are two community-maintained packages available for Arch Linux. The [zettlr](https://archlinux.org/packages/?name=zettlr) package contains the latest release; the [zettlr-git](https://aur.archlinux.org/packages/zettlr-git/) AUR package represents the latest commit from GitHub. You can find more information in the [Arch wiki article](https://wiki.archlinux.org/title/Zettlr) about Zettlr.

> Please note that these packages are community-maintained and we do not take any responsibility for their stability, safety or offered version.

### AppImage

Zettlr is available as an `AppImage` bundle for Linux systems on the [download page](https://www.zettlr.com/download). For installing AppImage bundles, please [refer to this guide](https://appimage.org/).

### Flatpack

Zettlr can also be installed by using a [Flatpack](https://flathub.org/home). You can find the setup instructions for that [on Zettlr's FlatHub page](https://flathub.org/apps/details/com.zettlr.Zettlr). The flatpack [repository can be found on GitHub](https://github.com/flathub/com.zettlr.Zettlr). Please direct any questions regarding the Flatpack to that repository rather than Zettlr's main repository.

> **Attention**: If you install Zettlr via Flatpack, this means that initially Zettlr will only be able to access a very small part of your filesystem. Therefore, accessing, opening, and writing to directories outside of your Documents directory will not work. In order to grant Zettlr write access to further parts of your computer, you can use a package like [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal).

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
