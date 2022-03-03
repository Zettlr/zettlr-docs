# Lesbarkeitsmodus

Gutes Schreiben umfasst viele Aspekte. Neben einem prägnanten Inhalt brauchen Ihre Texte eine ausgewogene Mischung aus langen und kurzen Sätzen. Außerdem sollten Sie auf zu viele komplexe und schwierige Wörter verzichten. Außerdem ist es immer gut, darauf zu achten, dass Ihre Absätze nicht zu lang sind, die aktive Stimme zu verwenden und Ihre Absätze entsprechend zu strukturieren.

Seit der Entwicklung von Texten hat die Kreativität der Menschheit viele Tipps zum guten Schreiben hervorgebracht. Während Zettlr Ihnen die perfekte Umgebung zum Schreiben bietet und damit sicherstellt, dass die _Lesbarkeit_ Ihres Textes großartig ist, ist die _Lesbarkeit_ etwas, um das Sie sich ebenfalls kümmern müssen. Glücklicherweise hat Zettlr ab Version 1.4 ein Werkzeug für Sie: Den **Lesbarkeitsmodus**.

> Bitte beachten Sie, dass die Lesbarkeitsbewertung nur eine von mehreren Messgrößen ist, die Ihnen helfen können, die Leichtigkeit des Lesens zu bestimmen, aber nicht zu ernst genommen werden sollten. Wenn der Lesbarkeitsalgorithmus einen Satz tiefrot markiert, bedeutet dies nicht unbedingt, dass Sie den Satz umschreiben sollten. Betrachten Sie vielmehr den Kontext des Satzes, den der Algorithmus nicht berücksichtigt, um die Qualität eines Satzes zu bestimmen. **Wir empfehlen Ihnen, Ihren Text zunächst ohne den Modus zu schreiben und ihn dann nur für einige Passagen einzuschalten, bei denen Sie das Gefühl haben, dass sie schwer zu verstehen sein könnten.**

## Was der Lesbarkeitsmodus bewirkt

In seiner kürzesten Definition ist der Lesbarkeitsmodus ein Syntaxhervorhebungsmodus für CodeMirror, der einen Basiswert für jeden Ihrer Sätze berechnet, um Ihnen einen ersten Eindruck von der Lesbarkeit Ihrer Texte zu geben. Er hebt jeden Ihrer Sätze mit einer Farbe hervor, die von grün bis rot reicht, wobei grün bedeutet, dass der Satz leicht zu verstehen ist, während rot bedeutet, dass der Satz schwer zu verstehen ist.

Der Modus verfügt über vier verschiedene Algorithmen: Die [Dale-Chall-Formel](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula), der [Gunning-Fog-Index](https://en.wikipedia.org/wiki/Gunning_fog_index), der [Coleman-Liau-Index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index) und der [Automated Readability Index](http://www.readabilityformulas.com/automated-readability-index.php). Diese unterscheiden sich darin, was sie als schwer verständliche Texte einschätzen, und in der "Härte" der Bewertungen, die sie den Sätzen geben. Nicht alle Indizes sind für jeden Text die richtige Wahl. Sie müssen darauf achten, dass Sie die Algorithmen mit Bedacht auswählen.

### Die Dale-Chall-Formel

Die Dale-Chall-Formel stammt aus den Anfängen der Bildungsforschung und wurde von Edgar Dale und Jeanne Chall entwickelt. Ihr Ziel war es, ein messbares Verfahren zur Bestimmung der Lesbarkeit von Texten für Schulkinder zu entwickeln. Sie verwendet eine Liste von 3.000 Wörtern, die für amerikanische Viertklässler leicht zu verstehen sind, und gibt eine Punktzahl an, die ungefähr von 0 bis 10 reicht, was in etwa den Bildungsjahren entspricht, die zum Verständnis eines Textes erforderlich sind. Das bedeutet: Wenn ein Satz eine 10 erhält, braucht man einen Hochschulabschluss, um den Text zu verstehen, während ein Satz mit einer 1 auch von Anfängern verstanden werden kann.

**Sie sollten den Dale-Chall-Index verwenden, wenn** Sie Texte für ein breiteres Publikum schreiben, da der Algorithmus Ihren Text mit kurzen und prägnanten Sätzen belohnt, ohne Sie dazu zu drängen, die Sätze lächerlich kurz zu machen.

### Der Gunning-Fog Index

Gunning-Fog wurde in den Anfängen der Boulevardpresse und des leichten Lesens entwickelt. Im Jahr 1952 suchte Robert Gunning nach einer Möglichkeit, die von ihm herausgegebenen Bücher und Zeitungen messbar zu machen. Der Gunning-Fog-Index gibt daher eine Punktzahl an, die ungefähr mit den Jahren formaler Bildung korreliert, die ein Leser benötigt, um einen Text zu verstehen. Da Gunning jedoch ein Geschäftsmann war und daher an einer großen Streuung seiner Veröffentlichungen interessiert war, tendiert sein Algorithmus dazu, selbst relativ leicht verständlichen Texten hohe Punktzahlen zu geben. Wenn Sie die verschiedenen Algorithmen durchgehen, werden Sie feststellen, dass Gunning-Fog dazu neigt, alles ~~schwarz~~ rot anzustreichen.

**Sie sollten den Gunning-Fog-Index verwenden, wenn** Sie kurze Werbetexte (z.B. für Websites) schreiben wollen, die nicht auf eine grundlegende intrinsische Lesemotivation zählen können.

### Coleman/Liau-Index

Mit dem Verfall der Computerpreise wurde die computergestützte Statistik zu einer beliebten Möglichkeit, große Datenmengen zu verarbeiten und eine aussagekräftige Messgröße auszuspucken. Der Coleman/Liau-Index stammt aus dieser Zeit und ist ein Algorithmus, der nicht auf Silbenzählungen oder Listen mit "schwierigen Wörtern" beruht. Daher ist der Coleman/Liau-Index in seiner Implementierung in Zettlr äußerst genau. Wie auch die anderen Algorithmen gibt er eine Punktzahl an, die annähernd den Jahren der formalen Bildung entspricht, die zum Verstehen eines Satzes erforderlich sind. Außerdem liefert der Coleman/Liau-Index vernünftige Ergebnisse und zwingt Sie nicht unbedingt dazu, kurze Sätze zu schreiben.

**Sie sollten den Coleman/Liau-Index verwenden, wenn** Sie eine genaue Messung der Lesbarkeit eines Textes benötigen. Er eignet sich nicht gut für Ein-Wort-Sätze, liefert aber auch für schwer verständliche Texte verständliche Ergebnisse.

### Automatisierter Lesbarkeitsindex (ARI)

Der automatisierte Lesbarkeitsindex folgt dem Coleman/Liau-Algorithmus, da es sich um eine neuere Formel zur Berechnung von Lesbarkeitswerten auf der Grundlage einer einfachen statistischen Analyse handelt. Er ist der "verzeihendste" der Algorithmen und liefert Ergebnisse, die Sie nicht dazu veranlassen, die Hälfte Ihres Textes wegen einer roten Hervorhebung neu zu schreiben.

**Sie sollten den Automatischen Lesbarkeitsindex verwenden, wenn** Sie anspruchsvollere Texte wie z. B. akademische Abhandlungen schreiben, da er selbst für einige schwierige Sätze eine niedrigere Punktzahl ergibt.

### Ein Hinweis zu "Schwierigen Wörtern"

In seiner eigenen Implementierung liefert Zettlr keine Liste mit leicht verständlichen Wörtern, wie sie von Dale-Chall gefordert wird. Stattdessen verwendet es einen anderen Ansatz. Die Liste der leicht verständlichen Wörter unterscheidet sich von Zeit zu Zeit und natürlich auch von Sprache zu Sprache. Daher berücksichtigt Zettlr eine andere Messgröße, um die als schwierig eingestuften Wörter zu bestimmen: Die Sprachvarianz.

Schwierige Wörter sind für Zettlr definiert als Wörter, die länger sind als das Zweifache der Standardabweichung der durchschnittlichen Wortlänge. Wie Coleman und Liau in ihrem 1975 erschienenen Aufsatz _A Computer Readability Formula Designed for Machine Scoring_ darlegen, ist die Länge von Wörtern ein viel besserer Indikator für die Schwierigkeit von Wörtern als die Anzahl der Silben. Daher kann der Algorithmus Sätze in jeder westlichen Schriftsprache bewerten, nicht nur in Englisch. Sie können die Erklärung des Algorithmus [auf unserer Seite über die Lesbarkeit](https://zettlr.com/readability) nachlesen.

Außerdem nimmt Zettlr eine weitere Änderung an den Algorithmen vor: Während alle vier Algorithmen für die Anwendung auf vollständige Texte entwickelt wurden, wird der Lesbarkeitsmodus jeden Satz einzeln betrachten und daher den Kontext weglassen. Im Allgemeinen wird dadurch der Schwierigkeitsgrad des Satzes angenähert, aber es kann natürlich sein, dass einige Sätze grün markiert werden, die in ihrem gegebenen Kontext schwer zu verstehen sind, während einige Sätze rot markiert werden, die noch in den gegebenen Kontext passen.
