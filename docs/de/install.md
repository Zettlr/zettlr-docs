# Installation

Zettlr zu installieren ist auf allen Betriebssystemen sehr einfach. Zettlr unterstützt viele verschiedene Betriebssysteme, daher sollte es auf deinem laufen. Zettlr ist bereits vorgefertigt für macOS, Windows sowie Debian- und RedHat-basierte Linux-Distributionen (z.B. Ubuntu, Xubuntu, Kubuntu, Fedora, RedHat).

> Es gibt eine [von der Community gepflegte Version für ArchLinux](#arch-linux). Bitte beachte nur, dass diese Version nicht von uns stammt und wir daher keine Haftung für die Nutzung dieser Anwendung übernehmen können.

Wenn du Zettlr auf einem anderen Linux-System oder gar auf deinem Raspberry-Pi laufen lassen möchtest, musst du die App allerdings selber kompilieren. Es gibt viele einfache Tutorials, wie man Electron-Apps erstellt. Achte nur darauf, dass deine gewünschte Plattform [auch von Electron unterstützt wird](https://github.com/electron/electron/blob/master/docs/tutorial/support.md).


## Windows (7 oder neuer)

Auf Windows genügt ein Doppelklick auf die Exe-Datei von unserer [Downloadseite](https://www.zettlr.com/download). Windows 10 wird dich fragen, ob du die Datei _wirklich_ installieren willst, da wir unsere Installer leider nicht signieren können (vgl. hierfür die Häufig gestellten Fragen). Solange du die Datei von uns heruntergeladen hast und nicht irgendwo im Internet gefunden hast, kannst du sie aber gefahrlos installieren. Du musst nur auf "Weitere Informationen" klicken und kannst dann sagen "Trotzdem ausführen". Diese Frage kommt nur einmal.

Du kannst Zettlr entweder für _alle Nutzer_ installieren (dann wird es in den Alle-Programme-Ordner installiert), oder nur für dich. Letzteres ist besonders gut für gesperrte Systeme (auf der Arbeit zum Beispiel) — so kannst du die App in deinen eigenen Benutzerordner installieren und nutzen. Falls du das Programm für alle Nutzer installierst, wirst du nach einem Administratorpasswort gefragt.

Um Zettlr wieder zu deinstallieren, lasse einfach die `Uninstall.exe` laufen (das funktioniert auch in den Systemeinstellungen, wie bei Windows gewohnt). Wenn du Zettlr wirklich ganz entfernen willst (inklusive Einstellungen), entferne das Verzeichnis `C:\Users\<Dein Benutzername>\AppData\Roaming\Zettlr`.

## macOS (10.10 oder neuer)

Auf macOS installierst du Zettlr, indem du die `.dmg`-Datei von unserer [Downloadseite](https://www.zettlr.com/download) herunterlädst, öffnest und die App in deinen Programm-Ordner ziehst. Wenn du Zettlr das erste mal startest, wird macOS das nicht zulassen. Du musst einmalig in deine Systemeinstellungen, auf die Sicherheitseinstellungen und dort einmal auf "Trotzdem öffnen" neben Zettlr klicken.

Um Zettlr zu entfernen, lösche einfach die Zettlr.app aus deinem Programmverzeichnis. Wenn du auch die Einstellungen entfernen willst, lösche das Verzeichnis `/Users/<Dein Benutzername>/Library/Application Support/Zettlr`.

> Hinweis: Du kannst Zettlr auch mittels [Homebrew](https://formulae.brew.sh/cask/zettlr) installieren: `$ brew install --cask zettlr`

## Linux

### Debian/Ubuntu/Fedora und Derivate

Es gibt vorgefertigte Debian- und RPM-Pakete für Debian 8/Ubuntu 12.04 und neuer sowie Fedora 24 und neuer. Diese installierst du wie gewohnt über deinen Paketmanager oder lädst sie von unserer [Downloadseite](https://www.zettlr.com/download). Das Löschen funktioniert ebenfalls wie du es auf deinem System gewohnt bist.

Die Konfigurationsdateien (wenn du Zettlr komplett entfernen willst) liegen unter `/home/<Dein Benutzername>/.config/Zettlr`.

### Arch Linux

Es gibt zwei Pakete für Arch Linux, die von der Community gepflegt werden. Das Paket [zettlr](https://archlinux.org/packages/?name=zettlr) enthält das aktuelle Release; das AUR Paket [zettlr-git](https://aur.archlinux.org/packages/zettlr-git/) repräsentiert den aktuellsten GitHub-Commit. Weitere Informationen findest du im Artikel über Zettlr im [Arch Wiki](https://wiki.archlinux.org/title/Zettlr).

> Da diese Pakete von der Community gepflegt werden, können wir keine Verantwortung für ihre Stabilität, Sicherheit oder Aktualität übernehmen.

### AppImage

Zettlr ist als `AppImage` Bundle für Linux-Systeme verfügbar und kann auf unserer [Downloadseite](https://www.zettlr.com/download) heruntergeladen werden. Für mehr Informationen über das Installieren von AppImage Bundles empfehlen wir den offiziellen [Leitfaden auf appimage.org](https://appimage.org/).

### Flatpak

Zettlr ist als `Flatpak` für Linux-Systeme verfügbar und kann auf [Flathub](https://flathub.org/apps/com.zettlr.Zettlr) heruntergeladen werden. Es wird außerdem empfohlen die LaTeX Flatpak-Erweiterung für Flatpaks zu installieren damit Zettlr diese verwenden kann.

Die Installation von Zettlr kann auch komplett auf der Konsole ausgeführt werden, wenn Flatpak bereits [eingerichtet wurde](https://flathub.org/setup):

```
flatpak install flathub com.zettlr.Zettlr org.freedesktop.Sdk.Extension.texlive

```
*Um LaTeX nicht zu installieren entfernen sie org.freedesktop.Sdk.Extension.texlive einfach aus dem Befehl*


## Das Programm aktualisieren

Jedes Mal, wenn du Zettlr startest, überprüft es, ob du die aktuellste Version hast. Du kannst auch manuell nach Updates suchen, wenn du auf Hilfe --> Auf Updates überprüfen klickst. Wenn eine neue Version verfügbar ist, zeigt dir Zettlr eine Box mit einigen Hinweisen an. Du kannst dann die Version herunterladen und installieren.

> Wenn du die ganz aktuellen Veröffentlichungen haben willst, kannst du in den erweiterten Einstellungen angeben, dass du auch Beta-Veröffentlichungen haben möchtest.

## Pandoc installieren

Pandoc ist das Herzstück der Exportier-Funktionalität von Zettlr. Immer, wenn du eine Datei als Word, OpenDocument oder für Wiki-Systeme exportieren möchtest, brauchst du Pandoc. Pandoc ist frei erhältlich und quelloffen und sehr einfach zu installieren.

> Du kannst Pandoc jederzeit installieren. Wenn du es installieren möchtest, findest du diese Dokumentation auch über das Hilfe-Menü.

### Windows

Für Windows gibt es einen sehr einfachen Installer, den du auf der [Download-Seite](https://github.com/jgm/pandoc/releases/latest) von Pandoc findest. Führe die Datei einfach aus. Anschließend sollte Zettlr ohne Probleme alle Dateien exportieren können!

> Bitte beachte, dass es sich bei Pandoc um ein sogenanntes Konsolenprogramm handelt. Daher gibt es keine "sichtbare" Installation des Programms. Wenn du also neue Versionen von Pandoc installieren willst, musst du das manuell überprüfen.

### macOS

Auf macOS gibt es mehrere Möglichkeiten zum Installieren von Pandoc.

#### Empfohlene Methode: Homebrew

Die beste Methode für das Installieren von Pandoc auf macOS ist [Homebrew](https://brew.sh/). Homebrew ist ein komfortabler Paketmanager für die Konsole, der es dir einfach macht, Pandoc zu installieren und zu aktualisieren. [Installiere zunächst Homebrew](https://brew.sh/) und lasse dann den folgenden Befehl laufen:

```bash
$ brew install pandoc
```

Um Pandoc ab und an zu aktualisieren, kannst du folgenden Befehl nutzen:

```bash
$ brew upgrade
```

Nachdem du Pandoc installiert hast, solltest du auch `citeproc` installieren, damit das mit dem [Zitieren](academic/citations.md) auch klappt. Auf Windows wird Citeproc automatisch mit installiert, aber auf macOS musst du es manuell installieren. Der Befehl ist aber denkbar einfach:

```bash
$ brew install pandoc-citeproc
```

#### Mit dem offiziellen Installationsprogramm

Du kannst Pandoc natürlich wie auf Windows mit dem Installationsprogramm installieren, welches du [auf der offiziellen Seite findest](https://github.com/jgm/pandoc/releases/latest). Beachte aber, dass in diesem Fall ähnlich wie bei Windows es etwas unhandlich ist, das Programm aktuell zu halten.

### Linux

Pandoc befindet sich in den meisten Fällen bereits von Haus aus in den Standard-Paketquellen, also kannst du Pandoc meistens direkt in den Paketmanagern finden und von dort installieren. Falls nicht gibt es aber auch für Linux einen [Installer](https://github.com/jgm/pandoc/releases/latest), der [hier beschrieben wird](https://pandoc.org/installing.html).

> Ähnlich wie bei macOS kann es passieren, dass Citeproc nicht automatisch mit installiert wird. Falls das der Fall ist, kannst du es aber genauso nach installieren.

## LaTeX installieren

Wenn du nicht nur einfache Dokumente exportieren willst, sondern auch PDF-Dateien erstellen willst, brauchst du LaTeX. Wie Pandoc handelt es sich dabei um ein quelloffenes Programm, dass du kostenlos für alle Betriebssysteme bekommst. Die Installation funktioniert exakt so wie bei jedem anderen Programm. Allerdings gibt es LaTeX in sehr vielen verschiedenen Geschmacksrichtungen. Wenn du LaTeX nicht mit einem speziellen Editor nutzen willst, sondern nur, um mittels Zettlr PDF-Dateien zu erstellen, reicht für alle Betriebssysteme die Basisversion von Latex.

Hier sind Links zu allen Basisversionen für die verschiedenen Betriebssysteme:

- Windows: [MikTeX](https://miktex.org/download)
- macOS: [MacTex](https://www.tug.org/mactex/morepackages.html) (_Achtung: Hier gibt es auf der Seite die große als auch die kleine Version von LaTeX. Die Basisversion heißt Basic Tex!_)
- Linux: [TeX Live](https://www.tug.org/texlive/) (mittels Paketmanager für auf Debian basierende Distributionen: `sudo apt install texlive-xetex`)

> Wenn du LaTeX später installieren willst, kannst du die Versionen auch über das Hilfe-Menü finden.
