# Defaults-Dateien

Defaults-Dateien sind eine Möglichkeit, Standardwerte für viele der Variablen zu definieren, die Pandoc intern verwendet, um sowohl den Import als auch den Export zu erleichtern. Defaults-Dateien ähneln [YAML frontmatters](yaml-frontmatter.md), sind aber leistungsfähiger und gelten für alle Ihre Dateien statt nur für eine einzige.

Früher hat Zettlr die Vorgabedateien intern verwendet, aber mit Zettlr 2.0 können Sie diese Dateien endlich selbst bearbeiten.

> Die Bearbeitung dieser Dateien kann ein wenig knifflig sein. Rechnen Sie also damit, dass Sie eine Testdatei mehrmals exportieren müssen, bevor Sie es richtig gemacht haben. Es ist ein Prozess von Versuch und Irrtum. Zettlr wird jedoch mit vernünftigen Standardeinstellungen ausgeliefert, wenn Sie also keine besonderen Anforderungen haben, können Sie diese Dateien so belassen, wie sie sind.

## Was sind Defaults-Dateien?

Defaults-Dateien sind YAML-Dateien, die Eigenschaften enthalten, mit denen sich das Verhalten von Pandoc für ein bestimmtes Export- oder Importformat steuern lässt. Sie befinden sich in Ihrem Benutzerdatenordner und haben das Format `<Import/Export>.<Schreiber/Leser>.yaml`, wobei sich Import/Export auf den Ort bezieht, an dem die Datei verwendet wird, und Writer/Reader auf das verwendete Format.

Zettlr benötigt einen bestimmten Satz von Vorgabedateien, da es für jeden Export oder Import eine dieser Dateien an Pandoc weitergibt. Wenn Zettlr also gestartet wird, prüft es, ob diese Dateien vorhanden sind, und erstellt sie, wenn nötig.

> Die vollständige Dokumentation zu den Möglichkeiten der Standarddateien finden Sie im [Pandoc-Handbuch] (https://pandoc.org/MANUAL.html#default-files). Beachten Sie dieses Handbuch, wenn Sie Vorgabedateien bearbeiten.

## Voraussetzungen für Vorgabedateien

Die Standarddateien, wie sie von Zettlr verwendet werden, haben eine Reihe von Anforderungen, die Sie beachten müssen, wenn Sie sie bearbeiten. Erstens sollten Sie niemals die Eigenschaften `Writer` und `Reader` ändern, außer Sie fügen Markdown-Erweiterungen hinzu (siehe Infobox unten). Diese Eigenschaften können festgelegt werden, da Sie theoretisch eine Standarddatei für verschiedene Konvertierungsstrategien verwenden könnten. Da Zettlr jedoch den Export und Import einer bestimmten Gruppe von Dateien ermöglicht, ist es klüger, Ihnen eine Reihe von Standarddateien anzubieten, in denen diese Eigenschaften festgelegt sind. Wenn Sie z. B. eine Writer- und eine Reader-Eigenschaft austauschen, könnte Pandoc sich beschweren.

Wenn Zettlr dann eine Datei importiert oder exportiert, liest es die entsprechende Vorgabedatei ein und ändert sie auf bestimmte Weise. Im Allgemeinen wird Zettlr versuchen, nur die Eigenschaften zu ändern, die Sie in einer Vorgabedatei definieren, anstatt sie zu ersetzen. Zettlr prüft zum Beispiel, ob Sie dort bereits eine Bibliographie definiert haben, und fügt Ihre Hauptbibliothek zu diesem Array hinzu, damit die bereits definierten Zitierbibliotheken nicht verloren gehen. Die Eingabe- und Ausgabedateien werden jedoch intern ersetzt, so dass die Definition einiger Dateien in diesem Array keine Auswirkungen hat.

Ansonsten können Sie die Standarddateien nach Belieben verändern, um die Importe und Exporte an Ihre Bedürfnisse anzupassen.

> Wir haben erwähnt, dass Sie die Eigenschaften "Writer" und "Reader" nicht ändern sollten. Es gibt jedoch ein gewisses Druckmittel. Pandoc unterstützt Markdown-Erweiterungen (z.B. für intelligente Anführungszeichen, Emojis, etc.). Diese werden durch das Hinzufügen von "+"-Zeichen nach den "Reader"- oder "Writer"-Eigenschaften angegeben. Wenn Sie also Erweiterungen für den Standard-Markdown-Reader benötigen, können Sie diese natürlich zu den Eigenschaften `Reader` oder `Writer` hinzufügen. Beispiel: `Reader: markdown+definition_lists+mmd_title_block+bracketed_spans+fenced_divs`. Dies verwendet immer noch denselben Reader, konfiguriert ihn aber (in diesem Beispiel) so, dass er zusätzlich Definitionslisten, Multi-Markdown-Titelblöcke, eingeklammerte Spans und eingezäunte Divs verwendet.

## Welche Variable überschreibt welche?

Die letzte Frage, die Sie vielleicht interessiert, ist die Art und Weise, wie die verschiedenen Variablen, die Sie zur Steuerung von Pandoc definieren können, miteinander interagieren. Es ist wichtig zu verstehen, wie Pandoc den endgültigen und effektiven Satz von Parametern bestimmt, den es dann verwendet, um Ihren Import oder Export zu erleichtern. In der folgenden Grafik können Sie sehen, wie jeder Import oder Export durchgeführt wird.

[Pandocs interne Variablenauflösung](../img/pandoc_variable_resolution.png)

Zunächst lädt Pandoc seine eigenen internen Standardwerte, die fest in das Binärprogramm kodiert sind (und die der Grund dafür sind, dass man nicht jedes Mal _alle_ Variablen definieren muss).

Zweitens lädt Pandoc die Vorgabedatei, die Zettlr ihm zur Verfügung stellt. Jede dort definierte Variable ersetzt die Standardvariable in Pandocs Konfiguration.

Drittens parst Pandoc die YAML-Frontmatter der Datei(en), die Sie gerade importieren oder exportieren wollen. Diese Variablen können die in den Vorgabedateien gesetzten Variablen ersetzen, aber normalerweise nicht alle. Sie werden feststellen, dass Vorgabedateien ein Metadatenfeld enthalten können, dessen Wert in der Regel durch eine YAML-Frontmatter-Eigenschaft ersetzt werden kann. Weitere Informationen hierzu finden Sie in der Dokumentation zu [YAML frontmatters](yaml-frontmatter.md).

**Beispiel**: Nehmen wir an, Sie haben in der Vorgabedatei für Docx einen `Titel` für alle Ihre Word-Exporte definiert. Wenn Sie kein Frontmatter verwenden, wird diese Variable für jeden einzelnen Export nach Docx verwendet. Wenn Sie jedoch die Eigenschaft `title` in einem YAML-Frontmatter angeben, wird dieser Datei beim Export nach Docx ein eigener Titel zugewiesen.

> Ein häufiger Anwendungsfall für die Definition von Variablen innerhalb einer Vorgabedatei, die auch auf der Ebene von YAML-Frontmatter definiert werden können, ist die Eigenschaft `lang`. Standardmäßig setzt Pandoc die Sprache jedes Imports und Exports auf `en-US`, was US-amerikanische Zahlentrennzeichen und Anführungszeichen zur Folge hat. Wenn Sie regelmäßig z.B. ins Französische exportieren, könnte es sinnvoll sein, die Eigenschaft `lang` direkt in Ihren Standarddateien auf `fr` zu setzen, so dass die Dateien standardmäßig in diesem Gebietsschema exportiert werden. In den einzelnen Dateien können Sie die Eigenschaft dann immer noch überschreiben, indem Sie die entsprechende YAML frontmatter-Variable setzen.

## Wie man Exporte anpasst

Die Vorgabedateien sind eine sehr mächtige, aber auch sehr komplexe Möglichkeit zur Anpassung Ihrer Exporte. In diesem Abschnitt möchten wir Ihnen einen Überblick darüber geben, wie Sie die Standarddateien optimal nutzen können.

> Dieser Abschnitt ist noch in Arbeit.

### Vorbemerkungen

Pandoc enthält ein leistungsfähiges **Vorlagen-System** zur Anpassung Ihrer Exporte. Innerhalb der Standardvorlagen, die Pandoc bereitstellt (und verwendet, wenn Sie nicht explizit eine eigene Vorlage angeben), finden Sie Anweisungen wie `$for(hyperrefoptions)$,$hyperrefoptions$$endfor$`. In diesem Fall ist `hyperrefoptions` eine Variable, die Sie setzen können. Je nach Vorlage sind verschiedene Variablen verfügbar. Eine umfassende Liste aller Variablen, die in den Standardvorlagen verwendet werden, finden Sie [hier](https://pandoc.org/MANUAL.html#variables).

### Variablen setzen

Die Standardvariablen können manchmal unerwünscht sein (Pandoc stellt U.S. Letter als Standardpapiergröße ein, was in anderen Teilen der Welt unerwünscht ist; Zettlr ändert diese Vorgabe in DIN A4, was auch nicht jedem passt), so dass Sie sie auf andere Werte setzen können. Es gibt zwei Möglichkeiten, dies zu tun:

1. Das YAML-Frontmatter einer Datei
2. Die entsprechende Vorgabedatei

Wenn Sie z.B. die Variable papersize nur für eine bestimmte Datei ändern möchten, können Sie diese Variable einfach mit dem entsprechenden Wert als Top-Level-Eigenschaft hinzufügen. Beispiel:

```yaml
---
title: Titel des Dokuments
author: John Doe
papersize: legal
---
```

Dies würde die Papiergröße auf "legal" setzen. Beachten Sie, dass in der Standardvorlage das Wort "paper" bereits gesetzt ist. Wenn Sie also mit LaTeX einigermaßen vertraut sind, würde "a4paper" nicht funktionieren, da es in der Vorlage zu "a4paperpaper" würde, was kein korrekter Wert ist.

Die zweite Möglichkeit, eine Variable zu ändern, besteht darin, sie für jeden einzelnen Export zu ändern (es sei denn, sie wird durch ein Frontmatter überschrieben). Dies können Sie in der Vorgabedatei tun, aber bitte beachten Sie, dass Sie in Vorgabedateien diese Variablen in einem speziellen Abschnitt namens `Variablen` unterbringen müssen. Beispiel:

```yaml
# ... snip ...
variables:
  papersize: legal
# ... snip ...
```

Sie können dieses Schablonensystem auch selbst verwenden. Wenn Sie eine benutzerdefinierte Vorlage schreiben wollen, können Sie Anweisungen wie `$if(myvariable)$$myvariable$$endif$` einfügen und die Variable `myvariable` in eine beliebige Frontmatter- oder Vorgabedatei einfügen, und sie wird durch den Wert ersetzt, auf den Sie sie setzen.
