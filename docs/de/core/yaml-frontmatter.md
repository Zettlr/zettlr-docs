# YAML Frontmatter

Wie Pandoc unterstützt auch Zettlr YAML-Frontmatter für Ihre Markdown-Dateien. Ein [YAML Frontmatter](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block) ist eine Reihe von Meta-Variablen, die definiert werden können, um Informationen der Datei zu beschreiben, die normalerweise nicht Teil des eigentlichen Textinhalts sind, wie z.B. Autoren, Schlüsselwörter und der Titel.

YAML-Frontmatter können am Anfang einer Datei definiert werden, indem sie in der ersten Zeile mit drei Bindestrichen (`---`) beginnen und den Frontmatter entweder mit drei Bindestrichen oder drei Punkten abschließen (die erste Variante ist häufiger). Sie enthalten gültiges YAML und können zur Definition beliebiger Variablen verwendet werden. Sie sind für eine Vielzahl von Anwendungsfällen nützlich.

> Eine ausführliche Dokumentation zu den Möglichkeiten von YAML-Frontmatters finden Sie in der [Pandoc-Dokumentation](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).

## Definition eines YAML-Frontmusters

YAML-Frontmatter können an beliebiger Stelle im Dokument definiert werden, da in Pandoc-Anwendungsfällen häufig mehrere Eingabedateien zu einer Ausgabedatei verkettet werden (Zettlr übernimmt dies beim Projektexport). Zettlr unterstützt die Syntaxhervorhebung für YAML-Frontmatter-Blöcke, die am Anfang der Datei stehen.

Ein solcher Frontmatter-Block muss mit drei Bindestrichen (`---`) in der allerersten Zeile des Dokuments beginnen und mit drei Bindestrichen oder drei Punkten in einer einzigen Zeile enden. Dazwischen wendet Zettlr die YAML-Syntaxhervorhebung an. Eine ausführliche Anleitung zum Schreiben von YAML finden Sie unter [view the specification](https://yaml.org/spec/1.2/spec.html).

Ein gültiges YAML-Frontmatter für einen Pandoc-Export könnte wie folgt aussehen:

```yaml
---
title: "Der Titel Ihres Dokuments"
Schlüsselwörter:
  - Ein Schlüsselwort
  - Ein anderes Schlüsselwort
Autor:
  - Das Zettlr-Team
---
```

> **Achtung**: Gemäß der YAML-Spezifikation dürfen Tabulatorzeichen nicht zur Einrückung verwendet werden. Damit Ihr YAML-Frontmatter gültig ist, müssen Sie Leerzeichen für die Einrückung verwenden.

## Frontmatter versus Standarddateien

Frontmatters können verwendet werden, um Vorgaben zu überschreiben, die entweder von Pandoc intern gesetzt wurden oder von einer der Standarddateien, die Zettlr für den Export Ihrer Dateien verwendet. Für weitere Informationen lesen Sie bitte die [Dokumentation zu Vorgabedateien](defaults-files.md), um Verwirrung zu vermeiden!

## Frontmatter-Variablen

Das Frontmatter dient dazu, eine Menge nützlicher Informationen für Pandoc und Pandoc citeproc zu speichern. Mit einem solchen Frontmatter können Sie viele Aspekte der Darstellung Ihres Dokuments steuern, wie z.B. das zu verwendende Gebietsschema oder eine Liste von Referenzen, die Sie nicht im Haupttext zitieren. Zettlr kann eine Teilmenge dieser Variablen verstehen, um Ihnen zusätzliche Informationen im Programm anzuzeigen. Die Unterstützung für Variablen wie `nocite` wird in zukünftigen Versionen wahrscheinlich noch weiter ausgebaut werden.

Eine vollständige Liste der verfügbaren Variablen und weitere Anweisungen zur Verwendung dieser Variablen finden Sie im [Abschnitt über Metadatenblöcke] (https://pandoc.org/MANUAL.html#metadata-blocks) im Pandoc-Handbuch sowie im [Handbuch für Pandoc citeproc] (https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md).

> Tipp: Auf dieser Seite werden nur einige wichtige Variablen für die Verwendung mit Pandoc aufgeführt, aber YAML-Frontends werden auch von anderen Engines unterstützt, z.B. vom [Jekyll static site generator](https://jekyllrb.com/docs/front-matter/). Wenn Sie also vorhaben, Ihre Markdown-Dateien mit einem anderen Tool zu konvertieren, sollten Sie deren Dokumentation konsultieren, um eine Liste der verfügbaren Variablen zu erhalten.

### `Titel`

Enthält den endgültigen Titel des Dokuments. Dies ist nützlich, da Überschriften der Ebene 1 streng genommen nicht den _Titel_ eines Dokuments bezeichnen, sondern die oberste Reihenfolge der Abschnitte im Dokument.

Diese Variable überschreibt den Dateinamen an verschiedenen Stellen, an denen Zettlr den Dateinamen anzeigt (z. B. in der Dateiliste und in der Registerkartenleiste des Dokuments).

### `Autor`

Verwenden Sie dieses Feld, um die Autoren einer Datei anzugeben. Es handelt sich dabei um eine Liste von einfachen Namen oder von Autorennamen mit Zugehörigkeit. Diese Variable wird z.B. verwendet, um bei PDF-Exporten eine Titelseite zu erzeugen.

Beide der folgenden Varianten wären korrekt:

```yaml
Autor:
  - Autor eins
  - Autor zwei
Autor:
  - Name: Autor eins
    Zugehörigkeit: Universität X
  - Name: Autor zwei
    Zugehörigkeit: Universität Y
```

> Beachten Sie die Einrückung der Eigenschaft "Zugehörigkeit": Sie orientiert sich an der Eigenschaft "name". Die Einrückung von YAML-Werten ist wichtig und sollte daher beachtet werden.

### `Schlüsselwörter` / `Tags`

Die Variable `keywords` enthält Schlüsselwörter bzw. Tags, die von Pandoc verwendet werden können. Viele andere Engines unterstützen auch die Variable `tags`. Zettlr erkennt beide Eigenschaften und wird beide als gültige Beschreibungen von Tags für Ihre Datei behandeln.

Diese Eigenschaften können auch verwendet werden, um eine Einschränkung der üblichen In-Text-Tags, die Zettlr unterstützt, zu umgehen: Sie können beliebige Schlüsselwörter definieren, die auch Leerzeichen enthalten können. Diese Schlüsselwörter werden von Zettlr erkannt und zur Liste der Tags der Datei hinzugefügt.

### `lang`

Diese Variable steuert das beim Export zu verwendende Gebietsschema (Zitate, Anführungszeichen und Interpunktion). Standardmäßig verwendet Pandoc `en-US`. So wird zum Beispiel die britisch-englische Zeichensetzung während des Exports in die US-amerikanische Zeichensetzungsnorm umgewandelt, es sei denn, `lang: en-GB` ist gesetzt.

Sie ist auch nützlich, um zu kontrollieren, in welcher Sprache die Verweise in Ihrer Datei angezeigt werden.  Wenn Sie diese Variable nicht setzen, wird die Sprache der Verweise aus dem Standard-Sprachfeld im verwendeten CSL-Stil übernommen, was unerwünscht sein kann, wenn Ihr Text in einer anderen Sprache ist.

Gültige Werte für dieses Feld sind [BCP-47](https://tools.ietf.org/html/bcp47) kompatible Sprachkennungen (z.B. `en-US`, `de-AT`, oder `it`).

### `nocite`

Diese Variable kann verwendet werden, um Werke in Ihre Referenzliste aufzunehmen, die nicht in Ihrem Dokument zitiert wurden. Setzen Sie die entsprechenden Zitierschlüssel in diese Variable. Denken Sie daran, den Wert in Anführungszeichen zu setzen, wenn er ein @ enthält (wie die meisten Zitierschlüssel), da er sonst als Anweisung an Pandoc interpretiert wird und andere Variablen im Frontmatter möglicherweise nicht wie erwartet funktionieren (verwenden Sie z.B. `nocite: '@citekey'`).

### `reference-section-title`

Verwenden Sie diese Variable, um eine Überschrift für Ihre Referenzliste zu definieren. Dies hat den gleichen Effekt, wie wenn Sie Ihr Dokument mit einer Überschrift abschließen (z.B. `## References`).

> Hinweis: Es kann sinnvoll sein, diese Variable in einer der Exportvorgabedateien zu definieren, da Pandoc eine solche Überschrift nicht standardmäßig einfügt. Generell ist zu beachten, dass alle hier beschriebenen Variablen auch in einer Vorgabedatei definiert werden können, so dass sie für _jeden_ solchen Export gelten.

### `notes-after-punctuation`

Diese Variable kann verwendet werden, um citeproc anzuweisen, Fußnoten mit Ihren Zitaten nach der Interpunktion zu setzen (z.B. wenn Sie `irgendwas [@citekey].` zitieren, wird es in der Ausgabe zu `irgendwas.[^1]`).
