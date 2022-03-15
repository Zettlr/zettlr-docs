# Der Editor

Das Herzstück von Zettlr ist ein leistungsstarker Markdown-Editor. Er verwendet eine hochentwickelte Software namens **[CodeMirror](https://codemirror.net/)** und bietet daher von Haus aus eine Vielzahl von Funktionen.

In diesem Dokument erfahren Sie mehr über das Schreiben von Markdown, die verfügbaren Befehle, einige spezielle Funktionen von CodeMirror und wie die Rechtschreibprüfung funktioniert.

## Markdown schreiben

Die Idee hinter Zettlr ist es, unnötiges Markup und Styling aus Ihrem Schreibprozess zu entfernen. Beim Schreiben kommt es auf den _Inhalt_ an, den Sie produzieren, nicht auf die Form, in der er präsentiert wird. Ein kleines bisschen Formatierung ist natürlich vorgesehen. Aber wenn es um Farben und Textausrichtung geht, braucht niemand wirklich viele Optionen, um mit dem Schreiben zu beginnen. Die Formatierung ist das, was _danach_ passiert.

Deshalb kann man mit Zettlr `Markdown`-Dateien schreiben. Markdown ist eine sehr einfache Auszeichnungssprache, die nur eine kleine Anzahl von Formatierungssymbolen enthält, die Sie vielleicht schon kennen! In den letzten Jahren haben immer mehr Anwendungen die Macht von Markdown entdeckt, und sogar WhatsApp verwendet es, um eine einfache Formatierung von Nachrichten zu ermöglichen.

Ein Markdown-Dokument besteht nur aus reinem Text und bringt viele Vorteile mit sich:

* Markdown ist **plattformunabhängig**. Jede Markdown-Datei, die unter macOS geschrieben wurde, kann - ohne Konvertierung - sowohl unter Windows als auch unter Linux bearbeitet werden. Alles, was Sie brauchen, ist ein Texteditor. Und mit "Notepad" (Windows), "TextEdit" (macOS) oder "GEdit" (Ubuntu) hat jedes Betriebssystem bereits einen eingebaut.
* Die Syntax von Markdown ist so gestaltet, dass man **auch ohne Syntaxhervorhebung die Idee eines Markdown-Dokuments** bekommt. Auch ohne Styling sind alle Überschriften leicht zu erkennen, denn sie haben führende Rautezeichen (#), Listen sind mit Aufzählungszeichen oder Zahlen gekennzeichnet und hervorgehobener Text ist in Unterstrichen oder Sternchen gekapselt.
* Markdown ist ein **Open-Source-Standard**, d.h. jeder kann ihn in Software implementieren (so wie wir es getan haben!) und auf ihm aufbauen. Das bedeutet auch, dass Sie **erwarten können, dass die meisten Anwendungen es verstehen**.
* Da Markdown so einfach ist und von sich aus keine Formatierung hinzufügt, kann jede Anwendung eine andere Art der Vorschau einführen. **Es gibt eine Vielzahl von Markdown-Anwendungen, die unterschiedliche Schreibweisen verwenden**. Wenn Ihnen Zettlr nicht zusagt, können Sie jederzeit aus einer Fülle verschiedener kostenloser, quelloffener Anwendungen wählen.
* Markdown-Dokumente enthalten nur das Nötigste an Formatierung, damit die Anwendungen sie verstehen. Deshalb sind **Markdown-Dokumente etwa zehnmal kleiner als herkömmliche Textverarbeitungsformate**!
* Und vieles mehr ...

> Wenn Sie genau wissen wollen, was Markdown kann und was nicht, lesen Sie den [**Markdown**-Abschnitt] (../reference/markdown-basics.md).

## Bearbeiten von Text

Das Bearbeiten von Text mit Zettlr ist einfach. Erstellen Sie einfach eine neue Datei oder wählen Sie eine bestehende aus, klicken Sie in den Editor und beginnen Sie zu schreiben. Verwenden Sie die Markdown-Formatierung nach Bedarf und nutzen Sie einige Tastenkombinationen, die das Hinzufügen von Formatierungen noch einfacher machen:

* "Cmd/Strg+B": Text **fett** machen
* `Cmd/Strg+I`: Text _unterstreichen_
* `Cmd/Strg+K`: Einen neuen `[Link](https://www.zettlr.com)` erstellen. Der ausgewählte Text wird zur Beschreibung - Sie müssen nur noch die URL hinzufügen. Und wenn sich eine gültige URL in der Zwischenablage befindet, übernimmt Zettlr sie sogar als URL, so dass Sie nichts selbst tun müssen!
* Cmd/Strg+Umschalt+I": Einfügen eines Bildes. Wenn Sie Text ausgewählt haben, wird dieser zur Beschreibung des Bildes. Fügen Sie einfach einen Pfad zu Ihrem Bild hinzu, oder kopieren Sie einen Pfad zu einem früheren Bild. Zettlr fügt dann automatisch den abgeschnittenen Pfad hinzu!
* Tabulator": Eine beliebige Liste um eine Ebene einrücken.
* Shift-Tab": Die Einrückung einer Liste um eine Ebene aufheben.

Natürlich funktionieren auch alle anderen Standardkurzbefehle, die in jedem Texteditor funktionieren: Kopieren Sie Text mit `Cmd/Strg+C`, fügen Sie ihn mit `Cmd/Strg+V` ein oder schneiden Sie ihn mit `Cmd/Strg+X` aus. Rückgängig machen und Wiederholen wird ebenso unterstützt wie das Entfernen ganzer Wörter oder Zeilen. Schreiben Sie einfach so, wie Sie zu schreiben gewohnt sind.

## Beibehaltung der Formate beim Kopieren und Einfügen

Natürlich ist es unerlässlich, dass Sie auch mit formatiertem Text arbeiten können. Sie könnten zum Beispiel formatierten Text aus einem Word-Dokument oder einer Webseite einfügen wollen. Kopieren Sie dazu einfach einen solchen Text und fügen Sie ihn ein. Zettlr erkennt automatisch, dass es sich um formatierten Text handelt, und konvertiert ihn vor dem Einfügen. Wenn Sie den Text nicht formatiert, sondern als reinen Text einfügen möchten, halten Sie beim Einfügen die "Umschalttaste" gedrückt. Dadurch wird Zettlr angewiesen, den Text nicht in Markdown zu konvertieren.

Als Nächstes möchten Sie einen Text aus Zettlr kopieren, aber so, dass andere Anwendungen das Format verstehen können. Um den Text nicht als Markdown, sondern in einem gängigen Format zu kopieren, müssen Sie "Als HTML kopieren" wählen. Das Tastaturkürzel lautet "Cmd/Strg+Alt+C".

> Lesen Sie den Abschnitt [Shortcuts] (../reference/shortcuts.md), um eine Liste aller verfügbaren Shortcuts zu erhalten.

## Besondere Eigenschaften von CodeMirror

Weil CodeMirror so leistungsfähig ist, gibt es auch andere großartige Optionen, die Sie nutzen können (wenn Sie sie brauchen).

* Drücken Sie `Cmd` (macOS) oder `Alt` (Windows/Linux) und klicken Sie irgendwo in den Text. Jetzt haben Sie **zwei Cursor** zur Verfügung! Dies ist vor allem dann nützlich, wenn Sie einen Text mehrmals schreiben wollen, um Zeit zu sparen. Um den Multi-Cursor-Modus zu verlassen, klicken Sie einfach irgendwo in den Text, ohne die Modifikatortasten zu drücken.
* Drücken Sie `Cmd` (macOS) oder `Alt` (Windows/Linux) und markieren Sie einen Text. Jetzt können Sie **mehrere Teile des Textes** auf einmal markieren. Dies ist nützlich, wenn Sie zwei oder mehr Links auf einmal erstellen möchten: Markieren Sie einfach die Textabschnitte, die als Beschreibung dieser Links dienen sollen, und drücken Sie `Cmd/Strg+K`, um alle Markierungen in Links zu verwandeln - auf einmal! Dies funktioniert auch mit allen anderen Befehlen, wie z.B. Text fett oder kursiv machen oder Anführungszeichen erstellen.
* Wenn Sie nichts ausgewählt haben, können Sie mit der Tastenkombination "Befehl/Strg+X" **die gesamte Zeile ausschneiden**. Wenn Sie danach `Cmd/Strg+V` drücken, wird diese ganze Zeile über der Zeile, in der sich Ihr Cursor befindet, **eingefügt**.
* CodeMirror **schließt automatisch Anführungszeichen und Klammern**, um Ihnen Zeit zu sparen! Wann immer Sie ein "- oder ein (-Zeichen eingeben, wird es Ihnen automatisch das schließende Zeichen präsentieren. Und wenn Sie mit Ihrem Zitat fertig sind, tippen Sie einfach " oder ), es wird _das Zeichen nicht ein zweites Mal hinzufügen_, sondern einfach darüber "springen"! Das funktioniert auch mit markiertem Text. Wenn Sie etwas ausgewählt haben und eines dieser Zeichen drücken, wird Ihre Auswahl mit dem Zeichenpaar gekapselt.

## Rechtschreibprüfung

Zettlr bietet auch eine Rechtschreibprüfung. In Ihren Einstellungen können Sie alle Sprachen auswählen, auf die Ihr Text geprüft werden soll. Die Wörterbücher werden beim Start der Anwendung geladen und der Inhalt Ihres Editors wird mit ihnen verglichen. Zettlr durchläuft alle Wörterbücher, um ein Wort zu prüfen, und nur wenn keines der geladenen Wörterbücher es finden kann, wird es mit einer kleinen gestrichelten Linie als falsch markiert.

Um ein Wort zu korrigieren, klicken Sie es einfach mit der rechten Maustaste an und wählen Sie einen Vorschlag aus dem Kontextmenü aus, falls es einen gibt. Sie können auch ein Wort zu Ihrem Benutzerwörterbuch hinzufügen.

Schreiben Sie zweisprachig? Das ist kein Problem! Laden Sie einfach alle Wörterbücher, in denen Sie möglicherweise Text verfassen, um alle Sprachen auf einmal zu überprüfen. Denken Sie daran, dass Wörterbücher viel Speicherplatz benötigen. Wenn Sie also zu viele Wörterbücher laden, kann dies die Anwendung verlangsamen.

> **Tipp**: Um die Rechtschreibprüfung komplett zu deaktivieren, deaktivieren Sie einfach alle Wörterbücher in den Voreinstellungen.

## Arbeiten mit Fußnoten

Fußnoten sind in Markdown eine schwierige Angelegenheit, da sie einige Sonderzeichen benötigen, um sie zu realisieren, und außerdem müssen Sie an zwei Stellen im Dokument gleichzeitig arbeiten: An der Stelle, an der Sie Ihre Fußnote einfügen möchten, und am Ende, wo sich der Referenztext befindet. Zettlr tut sein Bestes, um Ihnen die Arbeit damit auf folgende Weise zu erleichtern:

1. Sie können eine Tastenkombination verwenden, um Fußnoten zu platzieren: `Cmd+Alt+R` (nur macOS) oder `Strg+Alt+F` (macOS/Windows/Linux).
2. Der Referenztext (d.h. der Inhalt der Fußnote) wird am unteren Ende des Editorfensters angezeigt, wenn Sie den Mauszeiger über eine Fußnote bewegen.
3. Wenn Sie mit "Alt" oder "Strg" auf einen Fußnotenanker irgendwo in Ihrem Text klicken, wird ein Popup-Fenster angezeigt, in dem Sie die Fußnote an Ort und Stelle bearbeiten können. Wenn Sie mit der Bearbeitung Ihrer Fußnote fertig sind, drücken Sie einfach "Umschalt+Eingabe", um das Popup zu schließen und den Text der Fußnote zu ersetzen.
