# Mathematik

Zettlr unterstützt das Schreiben von Mathematik und Formeln unter Verwendung der KaTeX-Bibliothek. Um Mathe zu verwenden, schließen Sie Ihre Formeln mit Dollarzeichen (`$...$`) ein. Sie können auch sogenannte Displaymath-Blöcke verwenden, indem Sie zwei Dollarzeichen (`$$...$$`) anstelle eines einzelnen Dollarzeichens verwenden, um Ihre Formeln einzuschließen. Alles, was als Inline-Math- oder Displaymath-Block erkannt wird, erhält die richtige MathTeX-Syntaxhervorhebung.

```
Jeder sollte die Eulersche Formel kennen: $e^{ \pm i\theta } = \cos \theta \pm i\sin \theta$

Dies sind Eulers berühmteste Gleichungen:
$$
\begin{aligned}
e^{ \pm i\theta } & = \cos \theta \pm i\sin \theta \\\
e^{i \pi} & = -1
\end{aligned}
$$
```

> Um Verwechslungen mit Geldbeträgen zu vermeiden, sind Leerzeichen zwischen der Formel und den Dollarzeichen nicht erlaubt!

Wenn Sie die entsprechende Option aktivieren, rendert Zettlr Formeln sofort an Ort und Stelle, so dass Sie Ihre Eingaben leicht überprüfen und Fehler korrigieren können. Wenn eine Formel einen Fehler enthält, wird dieser von Zettlr angezeigt. Das obige Beispiel wird wie folgt dargestellt:

![Gerenderte LaTeX-Gleichungen](../img/math_example.png)

Eine Übersicht über die Funktionen und Symbole, die Sie mit der KaTex-Bibliothek verwenden können, finden Sie in deren Dokumentation: [https://katex.org/docs/supported.html](https://katex.org/docs/supported.html)
