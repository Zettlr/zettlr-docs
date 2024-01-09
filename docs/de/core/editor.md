# Der Editor

Im Herzen von Zettlr befindet sich ein leistungsstarker Markdown-Editor. Er nutzt eine hochentwickelte Software namens **[CodeMirror](https://codemirror.net/)** und bietet daher viele Funktionen.

In diesem Dokument lernst du, wie du Markdown schreibst, welche Befehle zur Verfügung stehen, einige besondere Funktionen von CodeMirror und wie die Rechtschreibprüfung funktioniert.

## Markdown schreiben

Die Idee hinter Zettlr ist, unnötige Markup-Elemente und Stilisierungen aus deinem Schreibprozess zu entfernen. Beim Schreiben kommt es auf den _Inhalt_ an, den du produzierst, nicht auf die Form, in der er präsentiert wird. Ein wenig Formatierung wird natürlich geboten. Aber wenn es um Farben und Textausrichtung geht, braucht wirklich niemand viele Optionen, um mit dem Schreiben zu beginnen. Die Formatierung passiert _danach_.

Deswegen ermöglicht dir Zettlr das Schreiben von `Markdown`-Dateien. Markdown ist eine sehr einfache Auszeichnungssprache, die nur eine kleine Menge an Formatierungssymbolen enthält, die du vielleicht schon kennst! In den letzten Jahren haben immer mehr Apps den Vorteil von Markdown entdeckt, und sogar WhatsApp verwendet es, um einfache Nachrichtenformatierungen zu ermöglichen.

Ein Markdown-Dokument besteht nur aus reinem Text und bietet viele Vorteile:

* Markdown ist **plattformunabhängig**. Jede auf macOS geschriebene Markdown-Datei kann - ohne Konvertierung - auf Windows und Linux gleichermaßen bearbeitet werden. Alles, was du brauchst, ist ein Texteditor. Und mit "Notepad" (Windows), "TextEdit" (macOS) oder "GEdit" (Ubuntu) hat jedes Betriebssystem bereits einen eingebaut.
* Die Syntax von Markdown ist so gestaltet, dass du **selbst ohne Syntaxhervorhebung die Struktur eines Markdown-Dokuments erkennst**. Selbst ohne Stilisierung ist es leicht, alle Überschriften zu erkennen, da sie führende Rautenzeichen (#) haben, Listen sind mit Aufzählungszeichen oder Zahlen gekennzeichnet und hervorgehobener Text ist in Unterstriche oder Sternchen eingeschlossen.
* Markdown ist ein **Open-Source-Standard**, was bedeutet, dass jeder ihn in Software implementieren (wie wir es getan haben!) und darauf aufbauen kann. Das bedeutet auch, dass du **erwarten kannst, dass die meisten Apps es verstehen**.
* Da Markdown so einfach ist und keine Formatierung an sich hinzufügt, kann jede App eine andere Art der Vorschau einführen. **Es gibt unzählige Markdown-Apps, die unterschiedliche Ansätze zum Schreiben verwenden**. Wenn Zettlr nicht zu dir passt, kannst du immer aus einer Vielzahl von verschiedenen kostenlosen Open-Source-Apps wählen.
* Markdown-Dokumente enthalten nur das Nötigste an Formatierung, um Apps das Verstehen zu erleichtern. Daher sind **Markdown-Dokumente etwa zehnmal kleiner als herkömmliche Textverarbeitungsformate**!
* Und vieles mehr …

> Wenn du genau wissen möchtest, was Markdown kann und was nicht, schau im [**Markdown**-Abschnitt](../reference/markdown-basics.md) nach.

## Text bearbeiten

Texte mit Zettlr zu bearbeiten ist einfach. Erstelle einfach eine neue Datei oder wähle eine vorhandene aus, klicke in den Editor und beginne mit dem Schreiben. Verwende Markdown-Formatierung, wie du sie benötigst, und nutze einige Abkürzungen, die es noch einfacher machen, Formatierungen hinzuzufügen:

* `Cmd/Ctrl+B`: Text **fett** machen
* `Cmd/Ctrl+I`: Text _hervorheben_
* `Cmd/Ctrl+K`: Einen neuen `[Link](https://www.zettlr.com)` erstellen. Ausgewählter Text wird zur Beschreibung - du musst nur noch die URL hinzufügen. Und wenn sich eine gültige URL in der Zwischenablage befindet, nimmt Zettlr sie sogar als URL an, was bedeutet, dass du selbst nichts tun musst!
* `Cmd/Ctrl+Shift+I`: Ein Bild einfügen. Wenn du Text ausgewählt hast, wird er zur Beschreibung des Bildes. Füge einfach einen Pfad zu deinem Bild hinzu oder kopiere einen Pfad zu einem Bild vorher. Dann wird Zettlr automatisch den kopierten Pfad hinzufügen!
* `Tab`: Eine Liste um eine Ebene einrücken.
* `Shift-Tab`: Eine Liste um eine Ebene ausrücken.

Natürlich funktionieren auch alle anderen Standardkürzel, die in jedem Texteditor funktionieren: Kopiere Text mit `Cmd/Ctrl+C`, füge ihn mit `Cmd/Ctrl+V` ein oder schneide ihn aus, indem du `Cmd/Ctrl+X` drückst. Rückgängig und Wiederherstellen wird ebenfalls unterstützt, ebenso wie das Entfernen ganzer Wörter oder Zeilen. Schreibe einfach, wie du es gewohnt bist.

## Formate beim Kopieren & Einfügen beibehalten

Natürlich ist es wichtig, dass du auch mit formatiertem Text arbeiten kannst. Zum Beispiel möchtest du formatierten Text aus einem Word-Dokument oder einer Webseite einfügen. Kopiere dazu einfach solchen Text und füge ihn ein. Zettlr erkennt automatisch, dass es sich um formatierten Text handelt, und konvertiert ihn vor dem Einfügen. Wenn du den Text nicht mit Formatierungen, sondern als reinen Text einfügen möchtest, halte beim Einfügen die `Shift`-Taste gedrückt. Dadurch wird Zettlr angewiesen, den Text nicht in Markdown umzuwandeln.

Möchtest du zu einem bestimmten Zeitpunkt Text aus Zettlr kopieren, aber so, dass andere Apps sein Format verstehen? Um den Text nicht als Markdown, sondern mit einem gängigen Format zu kopieren, musst du `Kopieren als HTML` auswählen. Die Tastenkombination dafür ist `Cmd/Ctrl+Alt+C`.

> Schau im Abschnitt [Shortcuts](../reference/shortcuts.md) nach, um eine Liste aller verfügbaren Abkürzungen zu erhalten.

## Besondere Funktionen von CodeMirror

Da CodeMirror so leistungsfähig ist, gibt es auch andere großartige Optionen, die du nutzen kannst (wenn du sie benötigst).

* Drücke `Cmd` (macOS) oder `Alt` (Windows/Linux) und klicke irgendwo in den Text. Jetzt hast du **zwei Cursor** zur Verfügung! Das ist meistens nützlich, wenn du denselben Text mehrmals schreiben möchtest, um Zeit zu sparen. Um diesen Mehrfach-Cursor-Modus zu verlassen, klicke einfach irgendwo in den Text, ohne die Modifikatortasten gedrückt zu halten.
* Drücke `Cmd` (macOS) oder `Alt` (Windows/Linux) und wähle etwas Text aus. Jetzt kannst du **mehrere Textteile gleichzeitig auswählen**. Das ist nützlich, wenn du zwei oder mehrere Links gleichzeitig erstellen möchtest: Wähle einfach die Textteile aus, die als Beschreibung dieser Links dienen sollen, und drücke `Cmd/Ctrl+K`, um alle Auswahlen gleichzeitig in Links umzuwandeln! Das funktioniert mit allen anderen Befehlen wie Text fett oder kursiv machen oder Zitate erstellen.
* Wenn du nichts ausgewählt hast, schneidet `Cmd/Ctrl+X` die **ganze Zeile aus**. Wenn du danach `Cmd/Ctrl+V` drückst, wird **diese ganze Zeile über der Zeile eingefügt, in der sich dein Cursor befindet**.
* CodeMirror **schließt automatisch Anführungszeichen und Klammern**, um dir Zeit zu sparen! Wenn du ein "- oder ein (-Zeichen tippst, wird dir automatisch das schließende Zeichen präsentiert. Und wenn du mit deinem Zitat fertig bist, tippst du einfach " oder ), es wird _nicht noch einmal das Zeichen hinzugefügt_, sondern einfach darüber "gesprungen"! Das funktioniert auch mit ausgewähltem Text. Wenn du etwas ausgewählt hast und eines dieser Zeichen drückst, wird deine Auswahl mit dem Zeichenpaar eingeschlossen.

## Rechtschreibprüfung

Zettlr bietet auch eine Rechtschreibprüfung. In deinen Einstellungen kannst du alle Sprachen auswählen, die dein Text überprüfen soll. Die Wörterbücher werden beim Start der App geladen und dein Editor-Inhalt wird dagegen geprüft. Zettlr durchläuft alle Wörterbücher, um ein Wort zu überprüfen, und nur wenn keines der geladenen Wörterbücher es findet, wird es als falsch mit einer kleinen gestrichelten Linie markiert.

Um ein Wort zu korrigieren, klicke es einfach mit der rechten Maustaste an und wähle einen Vorschlag aus dem Kontextmenü aus, falls vorhanden. Du kannst auch ein Wort zu deinem Benutzerwörterbuch hinzufügen.

Schreibst du zweisprachig? Kein Problem! Lade einfach alle Wörterbücher, in denen du potenziell Texte schreibst, um gegen alle Sprachen gleichzeitig zu prüfen. Denke nur daran, dass Wörterbücher viel Speicher verwenden können, also wenn du zu viele lädst, kann das die Anwendung verlangsamen.

> **Tipp**: Um die Rechtschreibprüfung komplett zu deaktivieren, einfach alle Wörterbücher in den Einstellungen abwählen.

## Mit Fußnoten arbeiten

Fußnoten sind in Markdown berüchtigt schwierig, weil sie spezielle Zeichen erfordern, um realisiert zu werden, und dich auch dazu bringen, an zwei Stellen im Dokument gleichzeitig zu arbeiten: Dort, wo du deine Fußnote platzieren möchtest, und am Ende, wo der Referenztext steht. Zettlr versucht, dir diese Arbeit mit folgenden Methoden zu erleichtern:

1. Du kannst eine Abkürzung verwenden, um Fußnoten zu platzieren: `Cmd+Alt+R` (nur macOS) oder `Ctrl+Alt+F` (macOS/Windows/Linux).
2. Der Referenztext (das heißt, der Inhalt der Fußnote) wird am unteren Ende des Editorfensters angezeigt, wenn du mit der Maus über eine Fußnote fährst.
3. Wenn du auf eine Fußnotenverankerung irgendwo in deinem Text mit `Alt`- oder `Ctrl`-Klickst, erscheint ein Popup, das es dir ermöglicht, die Fußnote direkt zu bearbeiten. Nachdem du mit dem Bearbeiten deiner Fußnote fertig bist, drücke einfach `Shift+Enter`, um das Popup zu schließen und den Text der Fußnote zu ersetzen.
