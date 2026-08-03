# Setup

Zettlr is available for Windows, Linux, and macOS. It can be installed directly [from our website](https://www.zettlr.com) or via one of several supported package managers.

## Minimum System Requirements

* Operating System:
    * Windows 10 or newer
    * macOS 12.0 or newer
    * Debian 8 or newer
    * Ubuntu 12.04 or newer
    * Fedora 24 or newer
    * Arch Linux
    * Any distribution supported by AppImage or Flatpak
* Processor: 1GHz Dual-Core Intel 64-bit or better (32-bit is not supported)
    * On Linux, an equivalent ARM 64-bit processor is supported
    * On macOS, Apple Silicon (M1, M2, etc.) is supported
* RAM: 1 GB
* Disk Space: At least 500 MB free disk space

::: note
Please note that the supported operating system versions may change at any time. The most recent list of supported platforms can be found [here](https://www.electronjs.org/docs/latest/development/build-instructions-gn#platform-prerequisites).
:::

## Installing Zettlr

::: warning Disclaimer
The Zettlr team compiles and distributes the app directly for:

* macOS (Intel and Apple Silicon, `.dmg`)
* Windows (x64, `.exe`)
* Debian-based Linux ( `.deb` and via [APT repository](https://apt.zettlr.com))
* Fedora-based Linux (`.rpm`)
* AppImage (`.AppImage`)

All other sources, such as package managers or the Arch Linux repository are maintained and provided by volunteers, and not the Zettlr team. In almost ten years, we have never heard any complaints with any of the sources we list here in the documentation. We list them here because we deem them safe.

However, we do not control these build stages and cannot take responsibility for any of these third-party sources. Peruse them at your own discretion.
:::

### Windows

To install Zettlr on Windows, download the app from the [download page](https://www.zettlr.com/download) and double click to open the installer. By default, the installer will request administrative permission during setup to install the app for all users on the computer.

If you do not have administrative privileges on your computer or do not wish to install the app for everyone, you can choose to install it just for the current user. In this case, no privileges are required, but some features may not work as expected.

Zettlr is also [available on the chocolatey package manager](https://community.chocolatey.org/packages/zettlr).

::: note
We recommend to install Zettlr for all users.
:::

### macOS

To install Zettlr on macOS, download the DMG-file from our [download page](https://www.zettlr.com/download) and mount it by double-clicking it. Then, drag the Zettlr icon into your Applications directory and wait for the application to be copied over.

Zettlr is also available via [Homebrew](https://formulae.brew.sh/cask/zettlr). To install it, run the following command:

```bash
brew install --cask zettlr
```

### Linux

Linux distributions are legion, and many have their own preferred way of installing software. We aim to provide Zettlr as conveniently as possible for you, also thanks to community efforts.

#### AppImage

Zettlr is available as an [AppImage](https://appimage.org/) bundle for Linux. To install it, download the package from our [download page](https://www.zettlr.com/download). To install the AppImage, place the file into a directory of your choice, make it executable, and begin using it.

#### Flatpak

Zettlr is available as a [Flatpak](https://flathub.org/home). To install the Flatpak version, download it from [Zettlr's FlatHub page](https://flathub.org/apps/details/com.zettlr.Zettlr) and follow the setup instructions.

::: note
Flatpak is designed with security in mind, and as such no flatpak app can access your file system by default. To give Zettlr access to your documents, you must first configure that with a package like, for example, [Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal). In case of problems, please get in contact with the Flatpak maintainer on the [corresponding GitHub repository](https://github.com/flathub/com.zettlr.Zettlr). Do not file reports on the main repository – we won't be able to help you.
:::

#### Ubuntu/Debian

To install Zettlr on Debian and Ubuntu as well as derivative distributions, we recommend installing Zettlr using our APT repository. You can find all install instructions on [apt.zettlr.com](https://apt.zettlr.com/). Simply add our repository:

```bash
curl -s --compressed "https://apt.zettlr.com/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/zettlr_apt.gpg > /dev/null
sudo curl -s --compressed -o /etc/apt/sources.list.d/zettlr.list "https://apt.zettlr.com/zettlr.list"
sudo apt update
sudo apt install zettlr
```

::: note
These instructions may change in the future. Please always refer to the [APT repository](https://apt.zettlr.com/), which always contains the correct and up-to-date instructions.
:::

If your distribution does not support aptitude, or you want to manually install the file, you can download the `deb`-package from our [download page](https://www.zettlr.com/download) and execute the file.

#### Fedora

To install Zettlr on Fedora or Red Hat derivatives, download the `rpm`-package from our [download page](https://www.zettlr.com/download) and execute the file.

#### Arch Linux

Thanks to community efforts, Zettlr is available as a regular package for Arch Linux in the "Extra" repo. Therefore, you can install Zettlr regularly using `pacman` or derivatives. Read more on the [Zettlr Arch Wiki page](https://wiki.archlinux.org/title/Zettlr).

## Updating Zettlr

If you installed Zettlr via a package manager, you don't have to check for updates. Simply update your packages using your package manager, which will automatically install any available updates for Zettlr.

If you installed Zettlr directly from the homepage, keep the update checks active. Zettlr will check regularly for new versions and notify you if it found one. You can also manually trigger the search for updates by clicking “Help” → “Check for updates.” If you click the update notification, Zettlr will open a dialog which contains the new version's number, your current version and a changelog with all features and bug fixes the new version contains.

::: warning Never "jump over" versions!
Sometimes, we change the configuration of Zettlr during an update. This may lead to data corruption during an update if you "leave out" the necessary version that will migrate your configuration. If you haven't updated Zettlr in a while, do **not** update directly to the latest version. Instead, install each update one after another. You can find all updates – not just the latest – on [GitHub](https://github.com/Zettlr/Zettlr/releases).
:::

Updating works in four simple steps:

1. Click the "Update" notification to open the updater dialog.
2. Read the changelog for the new version and click the corresponding button to download the correct update for your operating system.
3. Wait until the download is finished, then click the button to start the update.
4. Follow the instructions to install the update.

After any update, be prepared to **wait a few minutes** for Zettlr to launch. After each update, the file cache is being cleared, and when the newer version of Zettlr boots for the first time, it has to recreate this file cache. The more files and folders you have opened, the longer this process may take.

### Manual Updates

If automatic updates don't work for you, you can always manually update by downloading the appropriate installer for your system (see above). There is no (technical) difference between the first setup and an update; the files are the same.

### Beta-releases

You can opt in to beta releases. To do so, activate "Notify me about beta releases" in the settings. We sometimes offer beta versions to test out brand new features that could still have some quirks.

## Uninstalling Zettlr

If you are unsatisfied with Zettlr or need to remove the app, follow these instructions to fully remove Zettlr.

In case you installed Zettlr with a package manager, consult your package manager's documentation on how to uninstall software. If you installed the app directly from our homepage, follow the correct steps for your platform below:

On **Windows**, go into the software settings and uninstall it according to [Microsoft's instructions](https://support.microsoft.com/en-us/windows/uninstall-or-remove-apps-and-programs-in-windows-4b55f974-2cc6-2d2b-d092-5905080eaf98). If you wish to remove the settings and user data as well, you can find those in the directory `C:\Users\<your-user-name>\AppData\Roaming\Zettlr`.

On **macOS**, head over to the `Applications` folder and move `Zettlr.app` to the trash. If you wish to remove the settings and user data as well, you can find those in the directory `/Users/<your-user-name>/Library/Application Support/Zettlr`.

On **Linux**, the uninstallation procedure depends on your distribution and how you installed the app. Please consult the appropriate manual on how to do this. If you wish to remove the settings and user data as well, you can find those in the directory `/home/<your-user-name>/.config/Zettlr`.

::: note
Zettlr will also create so-called "hidden" files inside your workspaces that remember your directory settings. These files are named `.ztr-directory`. After uninstalling Zettlr, you can safely remove those files.
:::

## Nightly Releases

Since 2.0.0, we offer so-called nightly releases. Nightlies are releases that are being built automatically every Monday at noon (UTC) (but sometimes we build them manually). They contain the most recent changes to the code base. This means that they are even more recent than the beta releases, **but** this also means that they may contain serious bugs which we haven't found yet.

Nightly releases are for advanced users only who understand the risks in using these. If you keep your settings, the writing statistics, and your files backed up regularly, it might be safe to use nightlies. We do appreciate every one who uses nightlies and informs us about bugs they encounter.

To install a nightly release, you need to manually download them from <https://nightly.zettlr.com/>. Your updater will not notify you about nightly releases, but since they are being automatically built every week, you can be sure that there will be a new release.

::: warning
Nightly releases are fully automated. We do not guarantee any amount of stability for these. Normally, nothing bad should happen, but there is a chance that these releases may damage your computer. By using nightly releases you agree that you understand these risks.
:::

Please also note that we do not retain any previous nightly builds. Each week's nightly will simply replace the previous one. If a nightly is unusable, feel free to notify us so we can manually schedule a new build after we have fixed the bug.
