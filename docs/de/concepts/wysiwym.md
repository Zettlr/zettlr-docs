# What You See Is What You Mean (WYSIWYM)

Markdown ist eine Sprache, die auf dem Paradigma ["What you see is what you mean"](https://en.wikipedia.org/wiki/WYSIWYM) (WYSIWYM, ausgesprochen /ˈwɪziwɪm/) basiert. Dieses Paradigma ist verwandt mit "What you see is what you get" (WYSIWYG), von dem Sie vielleicht schon gehört haben. Textverarbeitungsprogramme wie Word oder LibreOffice zum Beispiel folgen diesem Paradigma. WYSIWYG bedeutet, dass das, was Sie in Ihrem Textverarbeitungsprogramm _sehen_, auch das ist, was Sie sehen, selbst wenn Sie das Dokument als PDF oder als HTML speichern. Der Leitgedanke von WYSIWYG ist, dass die Bearbeitung eines Dokuments genau der (exportierten oder gedruckten) Version des Dokuments entsprechen sollte.

WYSIWYM hingegen erhebt diesen Anspruch nicht. WYSIWYM geht davon aus, dass das, was Sie sehen, auch das ist, was Sie _beabsichtigen_. In der Praxis bedeutet dies, dass Sie mit Markdown die _Struktur_ eines Textes definieren können (z. B. Überschriften, fettgedruckten Text, Blockquotes und Links), aber **nicht, wie er aussieht**. Markdown-Dateien müssen für die Veröffentlichung weiterverarbeitet werden. Kurz gesagt: Markdown-Dateien sind "rohe" Dateien, die für die Veröffentlichung in ein endgültiges Format gebracht werden müssen.

Der Vorteil dieses Prinzips ist die **Trennung des eigentlichen Schreibprozesses vom Layoutprozess**. Dies ist in vielerlei Hinsicht unglaublich sinnvoll. Lassen Sie uns als Beispiel HTML-Dateien mit PDF-Dateien vergleichen. HTML-Dateien sind nach dem Prinzip des flexiblen Layouts aufgebaut, das heißt: Sie können die Größe Ihres Browserfensters ändern, und die HTML-Datei wird so umbrochen, dass sie immer gut aussieht, egal wie Sie die Größe ändern. PDF-Dateien hingegen sind das Gegenteil von Flexibilität: PDF ist für den Druck von Dokumenten gedacht und kann daher nicht in der Größe verändert werden. Das bedeutet, dass sie sich nicht an die Größe des Fensters Ihres PDF-Readers anpassen. Allerdings können Sie z. B. ein zweispaltiges Layout oder Kopf- und Fußzeilen viel einfacher verwenden. Das einzige, was beide Dokumente gemeinsam haben, ist die Struktur: Eine Überschrift in Ihrer PDF-Datei wird auch in Ihrer HTML-Datei eine Überschrift sein, auch wenn sie anders aussehen mag. Und genau das können Sie mit Markdown tun.

Einige Elemente wirken sich jedoch negativ auf Ihren Arbeitsablauf aus. Wenn Sie zum Beispiel einen Absatz, den Sie gerade geschrieben haben, schnell Korrektur lesen wollen, würden Links das stören, weil sie so aussehen würden: Ein Satz mit [einem Link] (https://docs.zettlr.com) darin". Es ist viel einfacher, einen Satz zu lesen, der wie folgt aussieht: `Ein Satz mit _einem Link_ darin`. Daher wird Zettlr Links für Sie vorrendern. Etwas Ähnliches gilt für Bilder: Für uns Menschen ist es viel einfacher, das Bild zu sehen, das da drin sein soll, als nur den Pfad zu ihm zu sehen.

All diese gerenderten Elemente werden jedoch _nicht_ mit Ihren exportierten Dateien übereinstimmen. Sie dienen lediglich Ihrer Bequemlichkeit, und Bilder bieten zum Beispiel einige praktische Werkzeuge zur leichteren Bearbeitung, die in Ihren exportierten Dateien nicht enthalten sind.

## Zeilenumbrüche sind nicht immer Zeilenumbrüche

Ein weit verbreitetes Missverständnis ist die Bedeutung von Zeilenumbrüchen in Markdown, und wir müssen behaupten, dass dies vielleicht die am schwierigsten zu verstehende Idee ist. Standardmäßig **entfernt Markdown einfache Zeilenumbrüche** und behandelt **doppelte Zeilenumbrüche als Absatzumbrüche**. Ein Zeilenumbruch, dem entweder **zwei Leerzeichen** oder **ein Backslash** vorausgeht, wird jedoch beibehalten.

Warum tut Markdown dies? Dafür gibt es mehrere Gründe. Der wichtigste ist wohl ein historischer: Markdown wurde mit Blick auf Code-Editoren entwickelt, was bedeutet, dass es ursprünglich für Leute gedacht war, die es gewohnt sind, ihre Zeilen nach etwa 72-80 Zeichen umzubrechen. Dieses Prinzip wird [Characters Per Line (CPL)] (https://en.wikipedia.org/wiki/Characters_per_line) genannt und hat historische Wurzeln. Während diese Überlegung für Text kontra-intuitiv sein mag, hat Markdown diese Idee beibehalten, so dass Sie besonders auf Ihre Zeilenumbrüche achten müssen.

Manche Leute machen sich dieses Verhalten für ihren eigenen Schreibprozess zunutze: Sie schreiben einen Satz pro Zeile, damit es ihnen leichter fällt, alle Sätze auf ungefähr die gleiche Länge zu kürzen. Nehmen Sie dieses Beispiel:

```md
Dies ist ein Satz.
Dies ist ein zweiter Satz.
Dieser Satz ist viel länger als die beiden Sätze davor.
Ein kurzer Satz.

Dies ist der nächste Absatz.
Ein weiterer Satz im zweiten Absatz.
```

Das obige Beispiel ergibt zwei Absätze, einen mit vier und einen mit zwei Sätzen. Wenn Sie bestimmte Zeilenumbrüche beibehalten wollen, müssen Sie dies explizit machen, entweder indem Sie eine Zeile mit zwei Leerzeichen abschließen, oder indem Sie einen Backslash am Ende der Zeile einfügen:

```md
Dieser Satz steht dann in einer eigenen Zeile.  
Dieser auch.\
Dieser steht in der dritten Zeile.
Dieser Satz kommt direkt nach dem dritten Satz.
```

Behalten Sie dieses Verhalten im Hinterkopf, um zu wissen, wie Ihre Dokumente aussehen werden, wenn Sie sie z.B. in PDF oder Word exportieren.

> Wenn Sie sich einen Überblick über die allgemeinen Ideen verschaffen wollen, was Sie tun können und was nicht, konsultieren Sie bitte die [CommonMark-Spezifikation] (https://spec.commonmark.org/), an die sich Zettlr und der zugrundeliegende Exporter, Pandoc, halten werden.
