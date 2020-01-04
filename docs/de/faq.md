# Häufig gestellte Fragen

## Ich wollte Zettlr auf Windows/macOS installieren, aber bekomme eine Warnung, dass ich es nicht installieren sollte!

Sowohl Windows als auch macOS verlangen signierten Code, damit sie dem Programm automatisch vertrauen. Während die Idee dahinter sehr gut ist, um Schadcode aus dem System zu halten, kostet das jährlich eine ganze Menge. Daher sind Zettlr-Installationsdateien _nicht_ signiert und produzieren daher die Warnungen. Solange du Zettlr entweder von unserer Seite oder aus dem offiziellen GitHub-Repository heruntergeladen hast, kannst du die Warnungen getrost ignorieren.

## Gibt es Pläne für eine mobile Version von Zettlr?

Wir erhalten mehr und mehr Anfragen nach einer solchen mobilen Version. Wir finden es gut, dass euch die App so gut gefällt! Leider haben wir nicht die Ressourcen, uns neben der Haupt-Anwendung auch noch um mobile Applikationen zu kümmern. Natürlich haben wir die Apps im Hinterkopf, für den Fall, dass das irgendwann mal anders wird!

## Plant ihr, auch weitere Linux-Distributionen außer Debian oder Fedora zu unterstützen?

Aufgrund unserer fehlenden Ressourcen und Zeit können wir außer diesen Haupt-Distributionen keine weiteren unterstützen. Für viele andere Distributionen ist es allerdings möglich, eine der AppImage-Versionen zu installieren, die wir seit 1.5 anbieten. Auch gibt es Unterstützer, die Zettlr für ArchLinux kompilieren. Wenn ihr ebenfalls eine Plattform unterstützen möchtet, sagt uns bescheid, damit wir einen Link zu dem Repository in unsere Download-Seite aufnehmen können!

## Was ist Markdown?

Markdown ist eine vereinfachte Auszeichnungssprache, die es dir ermöglicht, genauso komplexen Text zu verfassen, wie mit Office-Programmen, allerdings ohne den unnötigen Ballast. Anstatt immer manuell die Formatierungen auszuwählen, reicht es bei Markdown zum Beispiel aus, ein `#`-Zeichen voranzustellen, um eine Überschrift zu erzeugen! Wenn du mehr wissen willst, schau dir [unsere Dokumentation](reference/markdown-basics.md) dazu an.

## Was muss ich aufräumen, wenn ich Zettlr nicht mehr benutzen will?

Deinstalliere Zettlr ganz normal und nutze einfach ein anderes Programm. Zettlr lässt deine Dateien in Frieden und macht keine komischen Dinge mit ihnen. Es kann sein, dass sich vereinzelt versteckte Dateien mit Konfigurations-Informationen finden, die `.ztr-directory` oder `.ztr-project` heißen. Diese kannst du natürlich dann entfernen.

## Ich nutze Linux und habe das Problem, dass Zettlr meine gelöschten Dateien nicht in den Papierkorb verschiebt!

Zettlr wird niemals Dateien von dir direkt und unwiderruflich löschen. Es verschiebt diese _immer_ in den Papierkorb, für den Fall, dass du aus Versehen eine wichtige Datei gelöscht hast. Auf macOS und Windows ist der Papierkorb natürlich immer da, aber auf Linux kann es passieren, dass das nötige Programm erst noch installiert werden muss. Falls du also keine Dateien löschen kannst, schau, dass du `gvfs-trash` installiert hast. Dann sollte es funktionieren. Auf Debian/Ubuntu kannst du das zum Beispiel in der Eingabeaufforderung machen:

```bash
$ sudo apt install gvfs-bin
```

## Die internen Links öffnen nicht die richtige Datei!

Interne Links können genutzt werden, um einzelne Dateien miteinander zu verknüpfen. Falls das nicht funktioniert, überprüfe bitte folgende Einstellungen:

1. Wird der Link erkannt? Zettlr erlaubt es, benutzerdefinierte Links zu erzeugen. Standardmäßig erstellst du solche Links mit `[[` und `]]`. Erkennt Zettlr den Link, färbt es ihn ein. Tut es das nicht, denkt Zettlr, dass es kein Link ist. In diesem Fall überprüfe bitte deine Einstellungen.
2. Hast du entweder `Alt` oder `Strg` gedrückt? Ein einfacher Klick irgendwo in den Text bedeutet immer, dass Zettlr den Cursor dorthin verschiebt. Willst du einem Link folgen, musst du eine dieser Tasten gedrückt halten.
3. Hast du den richtigen Dateinamen angegeben? Zettlr öffnet nur Dateien, die einen exakten Treffer zurück geben. Das heißt: Die ID muss stimmen, oder der Dateiname muss exakt der gleiche sein. Und vergiss nicht, dass du die Dateiendung weglassen musst!
4. Ist die Datei überhaupt in Zettlr geladen? Damit interne Verlinkungen funktionieren, muss Zettlr die Datei natürlich kennen.

## Ich kenne mich mit LaTeX aus und möchte es in meinen Markdown-Dateien verwenden. Geht das?

Aber natürlich. Du kannst überall einfach `LaTeX`-Kommandos einwerfen. Exportierst du die Datei dann nach PDF, stellt Pandoc sicher, dass die Befehle erhalten bleiben. Allerdings ist `LaTeX`-Syntaxhighlighting natürlich in Markdown-Dateien nicht unterstützt. Wenn du nicht nach PDF exportierst, entfernt Pandoc meistens `LaTeX`-Blöcke, manchmal bleiben sie aber auch erhalten wie sie sind.

## Wieso kann ich Text nicht ausrichten?!

Das ist kein Fehler, sondern so gewollt: Markdown trennt Format vom Text, und zum Format gehört auch das Ausrichten von Text. Die meisten Texte nutzen eh Blocksatz. Willst du dann doch Text rechtsbündig oder zentriert ausrichten, kannst du `LaTeX`-Befehle nutzen. Umschließe den Text einfach mit `\begin{<option>}` und `\end{<option>}`, wobei du `<option>` entweder mit `flushleft`, `flushright` ersetzen kannst. Mittels `\justify` vor dem Paragraphen kannst du explizit Blocksatz anfordern. [Mehr Informationen gibt es auf sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

## Ich möchte einen einzelnen Zeilenumbruch verwenden, aber wenn ich einfach Enter drücke, entfernt das Programm diesen!

Um Pandoc zu zwingen, einfache Zeilenumbrüche zu respektieren, ende deine Zeile einfach mit einem Backslash (`\`) oder zwei Leerzeichen. Backslash bzw. Leerzeichen werden dann beim Exportieren entfernt und der Zeilenumbruch bleibt erhalten.

## Brauche ich wirklich Pandoc oder LaTeX?

Wie bei allem im Leben: Es kommt darauf an. HTML funktioniert auch ohne alles, aber für die anderen Formate brauchst du Pandoc. Wenn du PDF-Dateien erstellen willst, brauchst du auch LaTeX. Aber keine Sorge: Beide Programme sind frei verfügbar, quelloffen und für alle Betriebssysteme erhältlich!

## Wie installiere ich Pandoc und LaTeX?

Wir haben für diesen Zweck eine extra Sektion in der [Installationsanleitung](install.md) vorgesehen.

## Zettlr scheint Pandoc und LaTeX nicht zu finden, obwohl sie installiert sind!

Das kann passieren, wenn sich dein Computer entscheidet, sie an unmöglichen Orten zu verstecken. Zettlr versucht von sich aus, die Programme zu finden, aber hat auch nur bis zu einem bestimmten Punkt Erfolg. Wenn Zettlr die Programme partout nicht finden kann, kannst du den ganzen Pfad bis zu den Programmen in den Einstellungen hinterlegen.

Auf Windows solltest du dieses Problem im Normalfall gar nicht haben. Falls doch, müsstest du im Explorer nach `pandoc.exe` und `xelatex.exe` suchen — das sind die eigentlichen Programme, die Zettlr braucht.

Auf macOS reicht es, die `Terminal.app` zu öffnen (unter den Anwendungen --> Andere) und dann `which pandoc` bzw. `which xelatex` einzutippen. Der Pfad bis zu den Programmen sollte dann im Terminal erscheinen. Genauso funktioniert das auch auf Linux.

## Beim Exportieren hat Zettlr den Fehler ausgegeben, die PDF-Engine sei nicht erkannt worden!

Das ist ein häufiger Pandoc-Fehler, der auftritt, wenn deine Pandoc-Version noch von vor 2.0 war. Wenn Zettlr also den folgenden Fehler ausgibt:

`pandoc: unrecognized option '--pdf-engine=xelatex' Try pandoc --help for more information.`

dann heißt das, dass du deine Pandoc-Version aktualisieren musst. Der Grund dafür ist, dass seit Pandoc 2.0 die ältere Option `--latex-engine` in `--pdf-engine` umbenannt wurde. Mehr Informationen gibt es im [Changelog von Pandoc](https://github.com/jgm/pandoc/blob/master/changelog#L4349).

## Beim Exportieren nach PDF erhalte ich ständig irgendwelche Fehlermeldungen!

Bei den ersten Exporten ist das zu erwarten und nicht weiter schlimm. Zettlr gibt die Datei schlicht an Pandoc weiter und Pandoc gibt diese dann wiederum an die LaTeX-Engine weiter. Das Template jedoch, welches Zettlr verwendet, benötigt einige zusätzliche Pakete, die nicht immer mit installiert werden.

Der häufigste Fehler sieht wie folgt aus:

**LaTeX Error: File \<some name\>.sty not found.**

Dies bedeutet, dass ein bestimmtes Paket nicht gefunden wurde. Auf Windows sollten die Pakete automatisch nachinstalliert werden, sobald sie benötigt werden; auf macOS und Linux lassen sie sich mittels des Befehls `tlmgr install <some name>` nachinstallieren.

Für weitere Fehler erlaubt Zettlr es, Text aus der Fehlermeldung heraus zu kopieren, denn fast immer führt eine kurze Google-Suche nach dem Fehler direkt zu einer Lösung; in fast allen Fällen müssen schlicht nur Pakete nachinstalliert werden.

## Ich habe einen Fehler gefunden!

Sehr gut! Also, natürlich nicht gut, aber es ist gut, dass du ihn gefunden hast. Bitte [öffne auf GitHub einen neuen Fehlerbericht](https://github.com/Zettlr/Zettlr/), sodass wir uns direkt daran begeben können, den Fehler zu beheben!

## Ich habe eine Idee für ein neues Feature oder um ein Feature zu verbessern!

Das ist gut zu hören! Wir sind auf andere Personen angewiesen, deren Erfahrungen mit der App uns helfen, sie besser für alle zu machen. In diesem Fall öffne gerne auf [GitHub](https://github.com/Zettlr/Zettlr/) ein neues Ticket, indem du uns beschreibst, was du dir so gedacht hast.

## Wie sieht es eigentlich mit meiner Privatsphäre aus? Schickt Zettlr Daten irgendwohin?

Zettlr achtet deine Privatsphäre. Als deutsche App müssen wir uns an die Datenschutzgrundverordnung (DSGVO) halten und tun das auch sehr gerne. Zettlr funktioniert offline und du musst auch kein Benutzerkonto einrichten oder dergleichen. Allerdings muss die App natürlich auch mit unserem Server kommunizieren. Immer, wenn du sie startest, überprüft sie, ob es eine neue Version gibt und schaut auch nach, ob irgendeine der Übersetzungen vielleicht aktualisiert worden ist. Während dieser Verbindung erfährt unser Server deine IP-Adresse und, dass eine Zettlr-Installation gerade mit dem Server kommuniziert. Die App überträgt auch dein Betriebssystem und die einzigartige Anwendungs-ID.

Diese Daten werden niemals an Dritte verkauft oder geteilt. Diese Daten erheben wir nur, weil wir Statistiken mögen und immer daran interessiert sind, zu wissen, wie die App genutzt wird. Nichtsdestotrotz können wir niemanden identifizieren, da wir keine personenbezogenen Daten erheben. Wir sind schließlich Open Source und nicht Facebook.