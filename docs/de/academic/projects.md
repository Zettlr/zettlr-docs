# Projekte

Projekte ermöglichen es, mehr als nur eine Markdown-Datei in ein einziges Dokument zu exportieren. Daher können große Projekte in einzelne Dateien aufgesplittet werden, z.B. nach Kapiteln, und werden erst am Ende zu einer großen Datei zusammengefügt. Weiterhin ermöglichen es Projekte, Projekt-spezifische Einstellungen für den Export anzuwenden. Es ist mit Projekten beispielsweise möglich, eine Titelseite oder ein Inhaltsverzeichnis anzulegen.

![project_directory.png](../img/project_directory.png)

## Ein Projekt erstellen

Projekte sind in der Welt von Zettlr nicht viel mehr als ein zusätzlicher Satz an Einstellungen für Verzeichnisse. Daher können alle Verzeichnisse in Projekte „konvertiert“ werden. Es genügt ein Rechtsklick auf ein Verzeichnis und die Auswahl des Menüpunktes „Projekt erstellen“. Danach wird das Verzeichnis in rot mit einem Stift-Symbol gekennzeichnet, um anzuzeigen, dass es sich hierbei um ein Projekt handelt. Ein Rechtsklick auf ein solches Projektverzeichnis eröffnet drei zusätzliche Menüoptionen: „Projekteinstellungen“, „Projekt exportieren“ und „Projekt entfernen“.

## Mit Projekten arbeiten

Mit einem Klick auf „Projekteinstellungen“ öffnen sich die Einstellungen des Projektes. Grundsätzlich handelt es sich hierbei um eine Kopie der globalen PDF-Einstellungen. Die zwei Unterschiede sind einerseits, dass es mehr Optionen als bei Standard-PDF-Exporten gibt, und dass die hier getroffenen Einstellungen nicht global, sondern ausschließlich für das jeweilige Projekt gelten.

![settings_project.png](../img/settings_project.png)

Die Einstellungen auf dem Metadaten-Tab lauten wie folgt:

- **Projekttitel**: Wird als Dateiname, der Titel auf der Titelseite des Projektes und als PDF-Metadaten-Titel der exportierten Datei genutzt.
- **Projekt-Autor**: Wird in die PDF-Metadaten als Autor geschrieben
- **Schlagworte**: Diese sind eine Erweiterung der PDF-Metadaten und können optional ebenfalls genutzt werden.
- **Titelseite erstellen**: Ist diese Option aktiv, erstellt Zettlr eine Titelseite und füllt sie (im Standard-Template) mit Titel, Autor\*innen-Namen sowie dem Datum des Exports.
- **Inhaltsverzeichnis erstellen**: Diese Option steuert, ob Zettlr ein Inhaltsverzeichnis direkt nach der Titelseite erstellen wird. Die Dropdown-Liste gibt dabei an, welche Überschriften in das Inhaltsverzeichnis übernommen werden sollen – eine „2“ bedeutet, dass die Überschriften ersten und zweiten Grades (d.h. `#` und `##`) im Inhaltsverzeichnis auftauchen, während eine „4“ zusätzlich noch Grad drei und vier (d.h. `###` und `####`) mit einbezieht.

Mit den Optionen für ein benutzerdefiniertes Template und einen CSL-Stil können die entsprechenden Angaben der globalen PDF-Einstellungen überschrieben werden. Sowohl der „Seite“- als auch der „Schrift“-Tab sind exakt gleich wie die globalen PDF-Einstellungen gesetzt (vgl. die [PDF-Einstellungen](../reference/settings.md#pdf-einstellungen) für einen Überblick).

## Projekte exportieren

Um ein Projekt zu exportieren, wird Zettlr den hier genannten Schritten folgen. Beachte sie daher, um zu wissen, nach welchen Regeln die fertige PDF aufgebaut sein wird!

Zunächst wird Zettlr intern den gesamten Projektordner in eine Liste überführen. Das bedeutet, dass sämtliche Dateien und Ordner im Projekt auf eine einzige Liste reduziert werden. Was das bedeutet, verrät ein Blick in die Dateiliste (im dünnen oder erweiterten Seitenleistenmodus): Diese zeigt die Ordnerinhalte exakt so an, wie sie später im Projekt aneinander gereiht werden. Daher können Sortier-Optionen der Verzeichnisse genutzt werden.

> Beachte, dass Zettlr _alle_ Unterordner mit in das Projekt einbeziehen wird. Das ist als Komfortfunktion gedacht, damit große Projekte wie ganze Bücher in einzelne Unterordner aufgeteilt werden können. Das bedeutet aber auch, dass beispielsweise Notizen _nicht_ Teil des Projektordners sein sollten, da diese sonst mit exportiert werden. In diesem Fall bietet es sich an, im designierten Projektordner zwei weitere Verzeichnisse anzulegen, einmal für Notizen, und einmal für das eigentliche Projekt – nur dieser Ordner sollte in dem Falle zum Projekt deklariert werden.

**TODO HERE**

Nachdem die Dateien eingelesen wurden, werden sie angepasst (bspw. werden alle Pfade normalisiert, damit sowohl Pandoc als auch LaTeX die verlinkten Bilder finden) und zusammengefügt. Danach wird diese große Datei temporär auf der Festplatte gespeichert.

Als nächstes wird Zettlr die Einstellungen des Projektes einlesen und ab hier dem gleichen Prozess folgen, wie die Standard-Exporte: Exporter starten, mit den Optionen füttern, auf die temporäre Datei verweisen und damit Pandoc starten. Nachdem das Projekt exportiert wurde, wird die finale Datei mit dem Systemstandard geöffnet.

> Bitte beachte, dass besonders das Erstellen eines Inhaltsverzeichnisses großer Projekte außergewöhnlich lange dauern kann. Beim Erstellen eines solchen Verzeichnissen muss LaTeX nämlich die Datei zweimal kompilieren — einmal, um zu errechnen, auf welchen Seiten die jeweiligen Überschriften in der fertigen PDF-Datei stehen werden, und ein zweites mal, um das Inhaltsverzeichnis tatsächlich zu generieren. In einem Test haben wir festgestellt, dass ein komplettes Verzeichnis mit Notizen rund 150 Seiten ergeben hat. Das Exportieren hat in diesem Falle mit Inhaltsverzeichnis rund fünf Minuten gedauert, währenddessen es so wirkt, als würde nichts passieren. Solange Pandoc oder LaTeX sich allerdings nicht beschweren, läuft im Hintergrund der Export.

> **Pro-Tip**: Auch beim Exportieren von Projekten wird Pandoc eventuelle LaTeX-Befehle nicht herausfiltern. Dies kann nützlich beim Erstellen von Projekten sein: So lassen sich beispielsweise am Ende von Dateien oder am Anfang zusätzliche Seitenumbrüche einfügen. Alternativ können sogar ganze Sektionen in `TeX` geschrieben sein, da Zettlr auch diese Dateien mit in die Haupt-Datei einfügen wird. Zudem unterstützen reine `TeX`-Dokumente natürlich auch das komfortable Syntax-Highlighting.

## Projekte entfernen

Um ein Projekt wieder zu entfernen genügt ein Rechtsklick und die Auswahl des entsprechenden Kontextmenü-Eintrages. Was hierbei entfernt wird, ist lediglich die `.ztr-project`-Datei, welche Zettlr dazu anleitet, das entsprechende Verzeichnis als Projekt zu behandeln. Das heißt: Alle anderen Dateien in dem Projekt bleiben unangetastet. Nichtsdestotrotz gibt es keine Sicherung der Projekteinstellungen, das heißt: Wenn weg, dann weg.