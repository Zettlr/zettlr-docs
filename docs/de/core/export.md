# Exportieren in Zettlr

Das Exportieren von Dateien ist eine wichtige Schnittstelle zwischen Ihren Notizen und anderen Personen. Mit der Exportoption können Sie:

1. Eine Datei in der Vorschau anzeigen, z.B. als HTML, und sie auch ausdrucken. (Das Drucken einer Notiz mit `Cmd/Strg+P` exportiert die Notiz intern in HTML).
2. Sie können sie in ein Format exportieren, mit dem andere Personen arbeiten können, z. B. in Word- oder OpenDocument-Dateien.
3. Exportieren Sie sie in ein PDF-Format, um sie einzureichen (z. B. für Seminararbeiten) oder um sie auszudrucken.

## Exporte vorbereiten

Alle Exporte in Zettlr werden mit den freien Softwarepaketen Pandoc und LaTeX durchgeführt. Pandoc ist für alle Exporte notwendig, da alles zunächst damit konvertiert wird. LaTeX ist nur für den PDF-Export erforderlich.

> Wenn Pandoc nicht auf Ihrem System installiert ist, können Sie trotzdem nach HTML exportieren. In diesem Fall parst Zettlr die Datei intern mit `Showdown.js`, aber diese Bibliothek unterstützt nicht so viele Funktionen wie Pandoc. Bitte lesen Sie die [setup guide](../install.md), um Pandoc und LaTeX auf Ihrem Computer zu installieren.

Zettlr wird sich bemühen, beide Pakete zu finden. Wenn die Anwendung die Binärpakete nicht finden kann, wird eine Fehlermeldung ausgegeben.

**Wenn Sie beide Pakete installiert haben, Zettlr aber immer noch nicht exportiert**, werfen Sie einen Blick auf Ihre Einstellungen. Auf der Registerkarte "Erweitert" gibt es zwei Textfelder, in die Sie die Pfade zum Pandoc-Executable und zum "XeLaTeX"-Executable eingeben können. Tragen Sie sie einfach dort ein, starten Sie neu, und dann sollte es funktionieren. Falls nicht, geben Sie uns bitte Bescheid!

Die Registerkarte "Erweiterte Einstellungen" (../img/settings_advanced.png)

## Optionen für das Exportieren

Ab Version `0.17` bietet Ihnen Zettlr eine Fülle von Optionen, um Dokumente nach Ihren Bedürfnissen zu exportieren. Sie sind in zwei verschiedene Dialoge aufgeteilt. Die allgemeinen Optionen für den Export befinden sich im Einstellungsfenster. Öffnen Sie es, und navigieren Sie zur Registerkarte "Export". Dort finden Sie zwei Abschnitte, in denen Sie die Exporte anpassen können. Zunächst können Sie auswählen, in welchem Verzeichnis die resultierenden Dateien gespeichert werden sollen.

- Wenn Sie das temporäre Verzeichnis auswählen, speichert Zettlr Ihre Exportdokumente in diesem Verzeichnis. Das temporäre Verzeichnis ist ein spezieller Ordner auf jedem Betriebssystem, der für temporäre Dateien verwendet wird und der gelöscht wird, sobald eine Datei nicht mehr benötigt wird. Das ist gut, wenn Sie exportierte Dateien nirgendwo auf Ihrem System speichern möchten. Wenn Sie Ihre Dateien in das temporäre Verzeichnis exportieren, müssen Sie sie explizit an einem anderen Ort speichern, damit sie dauerhaft bleiben.
- Wenn Sie das aktuelle Arbeitsverzeichnis (cwd) wählen, speichert Zettlr Ihre exportierten Dokumente im aktuell gewählten Verzeichnis. Auf diese Weise müssen Sie Ihre Dokumente nicht explizit aus dem temporären Verzeichnis heraus speichern, um sie dauerhaft zugänglich zu machen. **Bitte beachten Sie, dass die Export-Engine Sie nicht um eine Bestätigung bittet, wenn sie eine Datei überschreiben will!

Der zweite Abschnitt enthält Optionen, mit denen Sie Zettlr mitteilen können, was es mit den von ihm unterstützten Zettelkasten-Elementen tun soll. Wenn Sie wissen wollen, wozu diese Elemente dienen, konsultieren Sie bitte den [entsprechenden Abschnitt der Dokumentation] (../academic/zkn-method.md). Dieser Abschnitt ermöglicht es Ihnen, diese Elemente beim Export beizubehalten oder zu entfernen, da sie in den meisten Fällen nur innerhalb der Anwendung selbst nützlich und erforderlich sind und nicht in exportierten Dokumenten erscheinen sollten.

Ein zweiter Abschnitt, der Einstellungen für den Export enthält, befindet sich im Dialogfeld "PDF-Einstellungen". Sie können ihn über das Menü öffnen (er befindet sich direkt unter dem regulären Menüpunkt "Einstellungen") oder über die Tastenkombination "Befehl/Strg+Alt+,". Dieses Dialogfeld enthält Optionen für den PDF-Export. Sie können eine Reihe von Formatierungsoptionen auswählen, z. B. den Papiertyp, die Seitenränder, die Schriftart oder -größe und ob Sie Seitenzahlen wünschen, und wenn ja, welche. Die meisten Exportoptionen sind selbsterklärend und ähneln denen in Standard-Textverarbeitungsprogrammen.