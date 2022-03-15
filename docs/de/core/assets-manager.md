# Asset-Manager

Mit Zettlr 2.0 wurde der neue Asset-Manager eingeführt, mit dem Sie alle statischen Assets verwalten können, die als Dateien in Ihrem Benutzerdatenverzeichnis gespeichert sind. Dazu gehören die neuen Standarddateien, Ihr benutzerdefiniertes CSS und Snippets. Es ist zwar möglich, diese Dateien extern zu bearbeiten, aber der Asset-Manager bietet Ihnen eine umfassende Möglichkeit, dies von der App aus zu tun.

![Der Asset-Manager](../img/assets_manager.png)

Sie können den Assetmanager über "Zettlr -> Assetmanager" (macOS) oder "Datei -> Einstellungen -> Assetmanager" (Windows/Linux) aufrufen.

Der Asset-Manager ermöglicht Ihnen die Bearbeitung Ihrer Dateien mit korrekter Syntaxhervorhebung und ist einfacher als externe Editoren. Um zu sehen, was Sie bearbeiten können und wie Sie dies produktiv tun können, lesen Sie die entsprechenden Teile der Dokumentation:

* [Vorgabedateien](defaults-files.md)
* [Benutzerdefiniertes CSS](custom-css.md)
* [Schnipsel](snippets.md)

> Der Asset-Manager ersetzt den alten PDF-Einstellungsdialog. Der neue Asset-Manager bietet Ihnen nicht nur alle Einstellungen des PDF-Voreinstellungsdialogs, sondern noch viele mehr.

## Wie man die PDF-Einstellungen anpasst

Seit Version 2.0 gibt es keinen eigenen PDF-Einstellungsdialog mehr. Stattdessen können Sie nun die Einstellungen, die in diesem Dialog vorhanden waren, zusammen mit einer Vielzahl weiterer Einstellungen feinabstimmen. Um die alten PDF-Einstellungen einfach wiederherzustellen und sie dann anzupassen, können Sie den folgenden Ausschnitt einfach in die `Variablen`-Sektion der Datei mit den Exportvorgaben für PDF-Dokumente kopieren:

```yaml
# Ausgelassener Inhalt der Vorgabedatei ...
variables:
  # mainfont und sansfont funktionieren für die Standard-PDF-Engine "xelatex"
  # Sollten Sie sich entscheiden, pdflatex zu verwenden, können Sie die Schriftart mit der Eigenschaft
  # "fontfamily" einstellen. Für weitere Informationen, siehe https://pandoc.org/MANUAL.html#fonts
  mainfont: "Times New Roman"
  sansfont: "Arial"
  linestretch: 1.3 # 1.3 bedeutet 130% Zeilenabstand
  papersize: a4 # Kann auch a5, Letter, Legal, etc. sein.
  margin-left: 2cm
  margin-right: 2cm
  rand-oben: 2cm
  rand-unten: 2cm
# Weitere ausgelassene Inhalte ...
```

Alle Variablen, die Sie hier setzen können, sind [im Pandoc-Handbuch](https://pandoc.org/MANUAL.html#variables) dokumentiert.

> Tipp: Sie können jede Variable auch innerhalb des YAML-Frontmatter einer beliebigen Datei definieren. Der einzige Unterschied ist, dass Sie dort einfach die Eigenschaften *ohne* Verschachtelung unter `Variablen` verwenden.
