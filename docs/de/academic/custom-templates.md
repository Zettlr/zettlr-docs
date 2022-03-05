# Benutzerdefinierte Vorlagen

Wenn Sie mit dem Inhalt Ihrer Arbeit fertig sind, ist es an der Zeit, sich mit der Ästhetik zu befassen. Ihre Ideen sind wertvoll. Um sie jedoch wirklich zur Geltung zu bringen, müssen Sie das richtige Layout und die richtige Typografie wählen. Vielleicht möchten Sie zum Beispiel eine bestimmte Schriftart, einen anderen Zeilenabstand und vielleicht sogar eine andere Farbe verwenden. Wenn Sie möchten, können Sie wirklich beeindruckend aussehende Dokumente erstellen, [wie diese Beispiele] (https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends).

Zettlr gibt Ihnen nicht nur die Freiheit, Werkzeuge wie Pandoc und LaTeX zu benutzen, sondern ein Grundprinzip der Zettlr-Philosophie ist es, diese Werkzeuge für Sie _gut_ arbeiten zu lassen. Diese Seite führt Sie in die Verwendung von benutzerdefinierten LaTeX-Vorlagen ein, damit Sie Ihre Texte und das Endprodukt präsentieren können!

## Erste Schritte mit Vorlagen

Schreiben Sie Ihre erste LaTeX-Vorlage, die direkt in Zettlr erstellt werden kann! Wenn Sie fertig sind, wird Ihre Vorlagendatei an Zettlr, Citeproc (falls zutreffend), Pandoc und schließlich an LaTeX weitergeleitet.

Erstellen Sie zunächst eine neue Datei (Datei -> Neue Datei...). Dabei wird automatisch eine Markdown-Datei (`.md`) mit einem eindeutigen Bezeichner als vorläufigem Namen erstellt. Beginnen Sie mit dem Schreiben Ihrer LaTeX-Vorlage und speichern Sie dann Ihre Datei (Datei -> Speichern). An dieser Stelle können Sie Ihrer Datei einen geeigneten Namen und eine Dateierweiterung geben. Zum Beispiel `Meine-Vorlage.tex`.

![Erstellen einer TeX-Datei](../img/create_tex_file.png)

Zettlr schaltet automatisch die Codehervorhebung von Markdown auf LaTeX um, und ein kleiner "TeX"-Indikator erscheint unter dem Dateinamen in der Dateiliste.

Wie eine TeX-Datei in Zettlr aussieht](../img/zettlr_tex_file.png)

## Notwendige Inhalte

Sie können viele verschiedene Variablen verwenden, je nach Ihren Bedürfnissen. Die Standardvorlagen von Pandoc enthalten bereits viele nützliche Variablen, die hier dokumentiert sind. Es steht Ihnen jedoch frei, Variablen, die Sie für unwichtig halten, nicht zu verwenden, und Sie können sogar Ihre eigenen Variablen mit Hilfe der Template-Engine von Pandoc einführen. Nehmen wir zum Beispiel an, Sie möchten einigen, aber nicht allen Ihrer Exporte zusätzliche Informationen hinzufügen. Dann könnten Sie eine Variable `my-variable` definieren und in allen YAML-Frontmattern, in denen die exportierten Dateien diese Informationen enthalten sollen, angeben:

```Markdown
---
title: "Mein Dateititel"
Datum: 2021-10-18
my-variable: "Eine zusätzliche Information"
---
```

Innerhalb Ihrer Vorlage müssten Sie dann etwas mit dieser Variable machen:

```
$if(meine-variable)$
Dies ist ein Text, der nur enthalten ist, wenn "my-variable" definiert wurde.

Sie können sogar den Inhalt der Variable einfügen, indem Sie $my-variable$ eingeben
$endif$
```

> Beachten Sie, dass dies nur ein Beispiel ist. Ein umfassenderes Beispiel, das das Prinzip der Variablen auf die Spitze treibt, finden Sie in [this template for a curriculum vitae](https://github.com/nathanlesage/cv).

Während viele Variablen optional sind, gibt es eine Pandoc-Variable, die immer vorhanden sein muss:

```
$body$
```

Pandoc wird diese Variable durch den geparsten Inhalt Ihrer Markdown-Datei(en) ersetzen. Wenn Sie sie weglassen, wird Ihr Inhalt nicht in der Ausgabedatei erscheinen.

## Aktivieren Sie Ihre Vorlage

Um Ihre Vorlage in Betrieb zu nehmen, müssen Sie Zettlr über die PDF-Vorlagendatei im Asset-Manager darauf hinweisen. Navigieren Sie im Menü von Zettlr zum Asset-Manager und wählen Sie "PDF" aus der Liste der Konfigurationen ("Standarddateien") auf der linken Seite. Fügen Sie nun am Ende der Konfigurationsdatei "template:" hinzu. Beachten Sie das Leerzeichen nach dem Doppelpunkt. Nun muss Zettlr den Pfad zu Ihrer neuen Vorlagendatei kennen. Suchen Sie Ihre Vorlagendatei, die Sie, wenn Sie sie in Zettlr erstellt haben, finden können, indem Sie mit der rechten Maustaste auf die Datei im Dateimanager von Zettlr klicken und "Datei anzeigen" wählen. Beachten Sie, dass der Name der LaTeX-Datei auf `.tex` enden muss. Wenn Sie die Datei gefunden haben, müssen Sie ihren Speicherort in der Verzeichnisstruktur Ihres Computers finden - das ist der "Pfad" oder "Pfadname" der Datei.
1. Unter macOS können Sie den Pfad der Datei herausfinden, indem Sie im Finder mit der rechten Maustaste auf die Datei klicken und die Optionstaste drücken, wodurch sich der Menüpunkt "Datei kopieren" in "Als Pfadnamen kopieren" ändert.
2. Unter Ubuntu Linux können Sie mit dem Dateibrowser den Pfad der aktuell ausgewählten Datei mit der Tastenkombination __CTRL__ + __L__ ermitteln, wodurch der Pfad der Datei in der Adressleiste angezeigt wird.
3. Unter Windows 10 und 11 wählen Sie die Datei im Datei-Explorer aus und halten Sie die __Umschalttaste__ auf Ihrer Tastatur gedrückt, während Sie mit der rechten Maustaste__ auf die Datei klicken. Wählen Sie im Kontextmenü, das sich öffnet, "Als Pfad kopieren".

Kopieren Sie den Pfadnamen und fügen Sie ihn so in die PDF-Standarddatei ein: `Vorlage: /pfad/zu/ihre/vorlage.tex`.

[Hinzufügen Ihrer LaTeX-Vorlage zur PDF-Standarddatei](../img/zettlr_add_LaTeX_template.png)

Denken Sie daran, ein Leerzeichen zwischen dem Doppelpunkt und dem Pfadnamen zu lassen. Speichern Sie die Änderungen und genießen Sie Ihre LaTeX-Vorlage.

## Abschließende Überlegungen

Zettlr ist bestrebt, Ihnen die volle Kontrolle darüber zu geben, was Sie mit Ihren Dateien tun können. Was wir auf dieser Seite skizziert haben, ist nur der Anfang. Wie nutzen Sie die Möglichkeiten von Zettlr, um verrückte Dinge zu tun? Sag es uns auf [Twitter](https://www.twitter.com/Zettlr), [Discord](https://discord.com/invite/PcfS3DM9Xj) oder auf [Reddit](https://www.reddit.com/r/Zettlr)!