# Durchsuchen

Einer der großen Vorteile des Umstiegs auf Markdown zum Schreiben von Dokumenten ist, dass die Dokumente selbst über die in Ihrem Betriebssystem eingebaute Suche durchsuchbar sind (z.B. Cortana unter Windows, Spotlight unter macOS oder Dash unter Linux). Aber natürlich ist es sehr hilfreich, wenn Sie das Programm nicht verlassen müssen, wenn Sie nach etwas suchen. Und genau hier kommt die Suche ins Spiel! Grundsätzlich gibt es drei verschiedene Suchfunktionen: Eine schnelle Filterfunktion, die Sie jedes Mal benutzen, wenn Sie ein anderes Verzeichnis in der Liste auf der linken Seite auswählen, eine dokumentenweite Suche und eine globale Suche.

## Dateien filtern

Die erste Funktion wurde bereits mehrfach erwähnt. Da die Vorschauliste nur alle Dateien innerhalb eines bestimmten Verzeichnisses und aller seiner Unterverzeichnisse anzeigt, können Sie einfach verschiedene Verzeichnisse auswählen, um die Liste aller Dateien auf diejenigen einzuschränken, die Sie sehen möchten. Oder wählen Sie ein Stammverzeichnis, um die vollständige Liste zu erhalten.

## Suche in Dateien

Wenn Sie nach bestimmten Ausdrücken oder Wörtern in der gerade geöffneten Datei suchen, drücken Sie einfach "Befehl/Strg+F". Unter dem Vergrößerungssymbol öffnet sich ein kleines Popup-Fenster, das Ihnen die üblichen Such- und Ersetzungsoptionen anbietet. Geben Sie einfach etwas ein und drücken Sie wiederholt die Eingabetaste, um die Übereinstimmungen durchzugehen. Drücken Sie `ESC` oder klicken Sie außerhalb des Popups, um die Suche zu beenden.

> **Tipp**: Sie können auch leistungsstarke reguläre Ausdrücke für die Suche verwenden. Zettlr führt standardmäßig eine Standardsuche durch, aber wenn ein regulärer Ausdruck erkannt wird (d. h. Ihre Suche ist mit Schrägstrichen gekapselt), wird eine RegExp-Suche durchgeführt. Sobald Zettlr einen regulären Ausdruck erkannt hat, ändert sich die Schriftart des Suchfelds in Monospace, um Ihnen die Eingabe Ihres regulären Ausdrucks zu erleichtern. Um nach allen Ziffern zu suchen, würden Sie zum Beispiel nach `/\d+/` suchen. [Mehr über reguläre Ausdrücke in JavaScript erfahren Sie hier] (https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Wenn Sie "Enter" drücken, während die Ersetzungseingabe fokussiert ist, ersetzt Zettlr das aktuelle Suchergebnis und markiert automatisch das nächste Vorkommen des Suchbegriffs. Drücken Sie wiederholt `Enter`, um mehrere Vorkommen zu ersetzen. Wenn Sie alle Vorkommen auf einmal ersetzen möchten, können Sie die Tastenkombination "Alt+Eingabe" drücken, während die Ersetzen-Eingabe den Fokus hat.

> **Tipp**: Genau wie in anderen Editoren können Sie bei der Suche mit einem regulären Ausdruck Variablen verwenden. Wenn Sie mit einem regulären Ausdruck suchen, der mindestens eine Erfassungsgruppe enthält, können Sie die Variable "$1" in Ihrem Ersetzungstext verwenden. Solche Variablen werden durch den tatsächlich gefundenen Inhalt der Erfassungsgruppen ersetzt. Mehrfaches Vorkommen der Variable wird ebenfalls ersetzt. Die Zahl nach dem `\$` bezieht sich auf den Index der Erfassungsgruppe (die zweite Erfassungsgruppe wird mit `\$2` adressiert, usw.). [Mehr über reguläre Ausdrücke in JavaScript erfahren Sie hier] (https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Natürlich können Sie die Suche auch in Quicklook-Fenstern verwenden. Klicken Sie dazu einfach in den Inhalt des Quicklooks, den Sie durchsuchen möchten (um ihm den Fokus zu geben und zu verhindern, dass `Cmd/Ctrl+F` die Suche in Ihrer Hauptdatei auslöst) und drücken Sie `Cmd/Ctrl+F`, um die Suche zu starten.

## Globale Suche

Der wichtigste Aspekt der Suche ist die globale Suche, die Sie mit der Tastenkombination "Befehl/Strg+Umschalt+F" auslösen können. Die Sucheingabe in der Symbolleiste erhält den Fokus, so dass Sie eine bestimmte Teilmenge von Dateien in Ihrem Stammverzeichnis durchsuchen können: Nur die Dateien, die derzeit im Fenster sichtbar sind. Das bedeutet, dass Sie auswählen können, welche Dateien durchsucht werden sollen, indem Sie ein entsprechendes Verzeichnis in der Liste auswählen - nutzen Sie die Filterfunktion zu Ihrem Vorteil!

Wenn Sie _alle_ Dateien auf einmal durchsuchen wollen, wählen Sie ein Stammverzeichnis. Wenn Sie nur in einem bestimmten Verzeichnis suchen wollen, wählen Sie dieses vor der Suche aus. In den meisten Fällen wissen Sie bereits, wo sich der gesuchte Text befindet. Wenn Sie beispielsweise nach einem Zitat zu einem bestimmten Thema suchen, das in wissenschaftlichen Arbeiten zitiert werden kann, möchten Sie vielleicht nicht alle Ihre Gedanken und Ideen durchsuchen, sondern Ihre Suche auf das Verzeichnis beschränken, in dem Sie Ihre Auszüge aus wissenschaftlichen Texten und Arbeiten speichern.

Die Suche selbst ist recht leistungsfähig. Sie können mehrere verschiedene Operatoren verwenden, um genau anzugeben, wonach Sie suchen:

* **AND-Operator:** Geben Sie `Boot Schiff` ein, um nur die Dateien anzuzeigen, die _beide_ den Begriff "Boot" und den Begriff "Schiff" enthalten. Jedes Leerzeichen wird als "AND" interpretiert.
* **Oder-Operator:** Tippen Sie `Boot | Schiff` (| ist der Pipe-Operator, eingefügt durch `Alt+7` auf macOS oder `AltGr+<` auf anderen Systemen), um alle Dateien auszuwählen, die _entweder_ das Wort "Boot" _oder_ das Wort "Schiff" enthalten
**Exact-Match-Operator:** Geben Sie `"Boot-Schiff"` ein, um Ihre Dateien nach genau diesem Begriff zu durchsuchen.
**NOT-Operator:** Geben Sie `!Boot` ein, um nur nach Dateien zu suchen, die diesen Begriff _nicht_ enthalten. Funktioniert auch mit exakten Übereinstimmungen: `!"Boat Ship"` würde alle Dateien ausschließen, die den exakten Ausdruck "Boat Ship" enthalten.

> **Achtung**: Während die AND-, OR- und Exact-Match-Operatoren durch Gewichtung arbeiten (eine Datei, die alle Suchkriterien erfüllt, wird hell eingefärbt, während Dateien, die nicht allen Suchbegriffen entsprechen, einen blassen Hintergrund haben), schließt der NOT-Operator definitiv Dateien aus. Während also eine Suche nach `Boot-Schiff` auch Dateien einschließt, die nur einen der beiden Begriffe enthalten (wenn auch mit einer viel geringeren Gewichtung), schließt eine Suche nach `!Boot-Schiff` definitiv alle Dateien aus, die das Wort Boot enthalten.

Natürlich können Sie alle diese Operatoren miteinander verknüpfen. So könnten Sie nach "Boot Schiff" | Schiffskapitän" suchen, um nur Dateien anzuzeigen, die entweder den genauen Ausdruck "Boot Schiff" oder das Wort "Schiff" enthalten und die auch das Wort "Kapitän" beinhalten.

Machen Sie sich keine Sorgen, wenn Sie sich nicht an das vollständige Wort erinnern, nach dem Sie suchen: Zettlr wird versuchen, Ihre Suchbegriffe auch mit Teilwörtern abzugleichen, so dass das Wort "Trooper" auch zu "Stromtrooper" und "Troopership" passen würde, ebenso wie die Phrase "Boat Ship" auch zu einem "Steamboat Ship" passen würde. **Bei der Suche wird auch die Groß- und Kleinschreibung nicht berücksichtigt**. Sie müssen sich also keine Gedanken über kleine Tippfehler machen, die Sie in einigen Dateien haben könnten.

Während Zettlr die Suche durchführt, wird rechts neben dem Suchfeld ein Suchindikator angezeigt. Sobald die Suche abgeschlossen ist, werden alle Ihre Dateien eingefärbt. Je grüner sie sind, desto relevanter sind sie (d. h. desto mehr hochwertige Übereinstimmungen wurden in dieser Datei gefunden). Dies ist eine Art **Heatmap für Suchergebnisse**, mit der Sie die relevanten Dateien für Ihre Suche leicht identifizieren können.

> Bitte beachten Sie, dass Zettlr alle Dateien ausblendet, in denen die Suchbegriffe nicht übereinstimmen, ebenso wie alle Verzeichnisse.

Um bessere Ergebnisse zu erzielen, gewichtet Zettlr verschiedene Arten von Übereinstimmungen unterschiedlich. So kann beispielsweise eine exakte Übereinstimmung im Titel ein Zeichen dafür sein, dass die Datei für Sie sehr relevant ist. Daher wird Zettlr diese Übereinstimmung stärker gewichten als andere Übereinstimmungen. Wenn ein Suchbegriff unter Berücksichtigung der Groß- und Kleinschreibung übereinstimmt, erhält diese Übereinstimmung eine höhere Punktzahl als wenn der Begriff nur unter Berücksichtigung der Groß- und Kleinschreibung übereinstimmt (d. h. es gab einen Unterschied in der Großschreibung).

Um die genaue Stelle zu finden, an der Ihre Suche übereinstimmt, wählen Sie eine Datei aus, und Zettlr hebt automatisch alle Übereinstimmungen in leuchtendem Gelb hervor, damit Sie sie leicht finden können. Außerdem werden in der Bildlaufleiste ganz rechts im Fenster Markierungen eingeblendet, die anzeigen, an welchen Stellen im Dokument Ihre Suchbegriffe vorkommen.

## Beenden Sie die globale Suche

Die globale Suche ist in vielerlei Hinsicht beständig. Auf diese Weise können Sie durch Ihre Suchergebnisse spazieren, ohne befürchten zu müssen, dass eine Aktion die Suche versehentlich beenden könnte. Dies ist besonders hilfreich bei großen Dateilisten, bei denen die Suche sehr lange dauern kann. Nichtsdestotrotz _gibt_ es Möglichkeiten, eine globale Suche zu beenden.

Führen Sie eine der folgenden Aktionen aus, um die Suche zu beenden und wieder regelmäßig alle Dateien anzuzeigen:

* Während die Sucheingabe fokussiert ist, drücken Sie `ESC`. (Sie können sie mit "Cmd/Strg+Umschalt+F" wieder fokussieren)
* Klicken Sie auf das "x" auf der rechten Seite des Suchfeldes.
* Wählen Sie ein anderes Verzeichnis in der Baumansicht.
