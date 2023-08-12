# Die Seitenleiste

Die Seitenleiste ist ein kontextabhängiges Element, das relevante Zusatzinformationen zu Ihrem aktuellen Verzeichnis und Ihrer aktuellen Datei anzeigt. Sie können sie entweder über das Seitenleistensymbol in der Symbolleiste oder durch Drücken von "Befehl/Strg+?`" öffnen.

> Bitte beachten Sie, dass Zettlr streng genommen über zwei Seitenleisten verfügt: Die linke Seitenleiste wird als [Dateimanager](file-manager.md) bezeichnet, während die rechte - diese Seitenleiste - als "die" Seitenleiste bezeichnet wird.

Nachdem Sie die Seitenleiste geöffnet haben, sehen Sie, dass sie vier Registerkarten hat. Diese sind (von links nach rechts): Inhaltsverzeichnis, Referenzen, Verwandte Dateien und andere Dateien.

## Inhaltsverzeichnis

Auf der ersten Registerkarte sehen Sie das Inhaltsverzeichnis der aktuellen Datei. Es wird in Echtzeit aktualisiert und ermöglicht es Ihnen, die Struktur Ihres Dokuments auf einen Blick zu erfassen. Die Einträge innerhalb des Inhaltsverzeichnisses unterstützen auch Markdown-Elemente, so dass Ihre Überschriften in HTML gerendert werden.

![Die Seitenleiste mit der ersten geöffneten Registerkarte, dem Inhaltsverzeichnis](../img/sidebar_toc.png)

Wenn Sie auf eine dieser Überschriften klicken, springt der Editor direkt zu dieser speziellen Überschrift. Auf diese Weise funktioniert das Inhaltsverzeichnis fast genauso wie die Gliederungsansicht von Microsoft Word oder anderen Textverarbeitungsprogrammen, die Sie vielleicht kennen.

## Referenzen

Die Registerkarte "Referenzen" enthält eine Bibliographie aller Referenzen, die Sie in Ihrem Dokument anführen. Sie wird immer dann erstellt, wenn Sie Ihr Dokument speichern, und bietet Ihnen eine Vorschau auf den Bibliographieabschnitt. Links werden anklickbar gemacht, so dass Sie eine zugehörige Website direkt von der Seitenleiste aus öffnen können. Sie können in dieser Leiste auch Text markieren, um die Verweise zu kopieren.

![Die Seitenleiste mit der zweiten geöffneten Registerkarte, dem Abschnitt Referenzen](../img/sidebar_references.png)

Wenn Sie mehr über das Zitieren von Referenzen mit Zettlr erfahren möchten, werfen Sie einen Blick auf die Dokumentationsseite für [citations](../academic/citations.md).

> Bitte beachten Sie, dass die Referenzen mit dem eingebauten CSL-Stil angezeigt werden. Während des Exports wird Pandoc jedoch den Stil verwenden, den Sie in Ihren Einstellungen definiert haben, um Ihren Erwartungen zu entsprechen. Die Referenzen in der Seitenleiste dienen als Vorschau.

## Verwandte Dateien

Der Abschnitt "Verwandte Dateien" wurde in Version 2.0 hinzugefügt und enthält Dateien, von denen Zettlr annimmt, dass sie mit der aktuellen Datei verwandt sind. Sie werden nach Relevanz absteigend aufgelistet, so dass die relevantesten Dateien ganz oben in der Liste stehen.

Die Seitenleiste mit der dritten geöffneten Registerkarte, den verwandten Dateien](../img/sidebar_related_files.png)

Welche Dateien als relevant angesehen werden, hängt von den Tags ab, die sie verwenden. Je mehr entsprechende Tags die andere Datei hat, desto relevanter ist sie für Zettlr. Wir planen, auch Backlinks in die Relevanzberechnung einzubeziehen. <!-- TODO: Reparieren Sie diesen Teil, sobald er implementiert ist! -->

## Andere Dateien

Der letzte Abschnitt enthält Dateien, die sich im aktuell ausgewählten Verzeichnis befinden, aber weder als Markdown noch als eine der unterstützten Codedateien gelten. Das können Bilder, PDF-Dateien, Excel-Tabellen oder jeder andere Dateityp sein, den Sie dort sehen möchten.

Die Seitenleiste mit der vierten geöffneten Registerkarte, andere Dateien](../img/sidebar_other_files.png)

Sie können bestimmen, welche Dateien hier aufgelistet werden, indem Sie die Dateierweiterungen auf der Registerkarte "Erweiterte Einstellungen" hinzufügen. Diese Dateierweiterungen unterscheiden nicht zwischen Groß- und Kleinschreibung. Wenn Sie also `.jpeg` hinzufügen, werden sowohl `.jpeg`-Dateien als auch `.JPEG` und `.JpEg` angezeigt.

> Diese Registerkarte ist besonders nützlich, wenn Sie Ihren Markdown-Dateien einige Bilder hinzufügen möchten. Ziehen Sie sie einfach in den Editor, und Zettlr wird sie in ein Bild-Tag einbetten.
