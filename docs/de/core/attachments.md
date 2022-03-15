# Die Seitenleiste für Anhänge

Die Seitenleiste für Anhänge ist ein kontextabhängiges Element, das relevante Zusatzinformationen zu Ihrem aktuellen Verzeichnis und Ihrer aktuellen Datei anzeigt. Sie können sie entweder über das Büroklammer-Symbol in der Symbolleiste oder durch Drücken der Tastenkombination `Cmd/Ctrl+?` öffnen.

![Die Anhang-Seitenleiste mit einer Datei und einer Liste von Verweisen](../img/attachment_sidebar.png)

Innerhalb der Seitenleiste gibt es zwei Bereiche. Der erste ist mit "Attachments" betitelt und enthält eine Liste aller zusätzlichen, nicht in Markdown geschriebenen Dateien, die sich im aktuell ausgewählten Verzeichnis befinden. Dabei kann es sich um Bilder, Word-Dokumente, PDF-Dateien und buchstäblich jeden anderen Dateityp handeln. Sie können auswählen, welche Dateien dort angezeigt werden sollen, indem Sie die Erweiterung des Dateityps in der entsprechenden Einstellungsoption hinzufügen, die Sie auf der Registerkarte "Erweitert" finden. Bei den Erweiterungen wird nicht zwischen Groß- und Kleinschreibung unterschieden. Wenn Sie also `.jpeg` hinzufügen, werden sowohl `.jpeg`-Dateien als auch `.JPEG` und `.JpEg` angezeigt.

In den fortgeschrittenen Einstellungen können Sie alle Erweiterungen auswählen, die Sie in der Seitenleiste sehen möchten (../img/settings_advanced.png)

Der zweite Bereich mit der Bezeichnung "Referenzen" enthält eine Liste aller bibliografischen Einträge, die Sie in Ihrer aktuellen Markdown-Datei verwendet haben. Sie ähnelt der Liste der Referenzen, die von `pandoc-citeproc` erzeugt wird, sobald Sie Ihre Markdown-Datei exportieren. So können Sie überprüfen, ob Sie die richtigen Citekeys für Ihre Quellen verwendet haben oder nicht.

## Anhänge

Betrachten Sie die Dateien, die in der Seitenleiste für Anhänge angezeigt werden, als Alternative zu einem ständig geöffneten Dateibrowser-Fenster. Auf diese Weise können Sie Dateien, mit denen Sie zusätzlich arbeiten müssen, direkt in Zettlr anzeigen und so die Reibungsverluste in Ihrem Arbeitsablauf überschaubar halten.

Wenn Sie einen Ordner ausgewählt haben, der Bilder enthält, können Sie diese ganz einfach zu Ihrem Dokument hinzufügen, indem Sie sie in den Editor ziehen (../img/attachment_sidebar_images.png)

Wenn Sie alle Dateien innerhalb des aktuell ausgewählten Verzeichnisses anzeigen möchten, können Sie das Verzeichnis öffnen, indem Sie auf das Pop-up-Symbol neben dem Titel klicken. Dadurch wird der Ordner mit Ihrem Standard-Dateibrowser geöffnet.

Wenn Sie auf eine Datei in der Seitenleiste klicken, wird sie mit der Standard-Systemanwendung geöffnet. Dies ist dasselbe wie ein Doppelklick auf eine Datei in Ihrem Dateibrowser. Außerdem können Sie die Dateien per Drag & Drop auf Ihr Markdown-Dokument ziehen. Dadurch wird eine Verknüpfung zu der Datei erstellt, so dass Sie in Ihrem Dokument auf die Dateien verweisen können. Meistens werden Sie diese Funktion für den Umgang mit Bildern verwenden, da Zettlr gängige Bilderweiterungen erkennt und das Bild nicht in einen Link-Tag, sondern in einen Image-Tag einpackt. Auf diese Weise können Sie ganz einfach Bilder aus einem Ordner hinzufügen, indem Sie sie auf Ihre geöffnete Datei ziehen. Um Bilder aus einem Unterordner zu referenzieren, wählen Sie einfach den Unterordner in der Strukturansicht oder in der Dateiliste aus. Dann wird die Seitenleiste für Anhänge mit allen Bildern aus dem neu ausgewählten Ordner aktualisiert.

## Referenzen

Die Referenzen sind eine Liste von Quellen aus Ihrer Markdown-Datei. Die Liste bietet nicht viel, außer der Anzeige der korrekten Zitate für diese Quellen unter Verwendung des eingebauten CSL-Stils. Sie dient dazu, Ihnen auf einen Blick eine Liste aller von Ihnen zitierten Quellen zu geben, damit Sie überprüfen können, ob Sie die richtigen Quellen angegeben haben und ob Sie nicht eine übersehen haben.

Die Seitenleiste für Anhänge bleibt auch dann geöffnet, wenn Sie nicht abgelenkt werden, so dass Sie die Literaturliste während des Schreibens neben Ihrem Dokument sehen können.