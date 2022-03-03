# Präsentationen

Zettlr ist in der Lage, Ihre Markdown-Dateien direkt als Präsentationsdateien zu exportieren, indem es das [reveal.js](https://revealjs.com/#/)-Framework verwendet. 'reveal.js' ist eine leichtgewichtige Lösung zur Erstellung von Präsentationen mit einfachem HTML und JavaScript. Daher können diese Präsentationen auf _allen_ Computern angezeigt werden, auf denen ein Browser läuft - heutzutage bedeutet das: sie laufen auf _jedem_ Computer.

Um Markdown-Dateien nach `reveal.js` zu exportieren, müssen Sie sicherstellen, dass Pandoc auf Ihrem Computer installiert ist. In der [Pandoc-Installationsanleitung](../installing-pandoc.md) erfahren Sie, wie Sie Pandoc installieren.

## Vorüberlegungen

Ein Markdown-Dokument, das zu einer Präsentation zusammengestellt werden soll, hat natürlich eine etwas andere Struktur als andere Markdown-Dokumente.

### Folien erstellen

Sie können neue Folien auf zwei Arten erstellen. Zum einen beginnt jede Überschriftenebene 1 eine neue Folie und dient gleichzeitig als Titel der Folie. Falls die Überschriftenebene 1 für Ihren Geschmack zu groß ist oder Sie einfach keinen Titel auf der Folie haben wollen, können Sie die Folien auch mit Markdown-Trennzeichen (entweder `***` oder `---`) abgrenzen.

Alles, was auf die Überschrift oder die Trennlinie folgt, wird dann zum Inhalt der Folien. Sie müssen die letzte Folie nicht explizit mit einer Trennlinie "abschließen".

### Verwendung von Markdown-Elementen

Innerhalb der Folien können Sie alle Markdown-Elemente verwenden. Sie werden so gerendert, wie Sie es erwarten würden. Sie können sogar Fußnoten verwenden, die dann am Ende auf einer eigenen Folie platziert werden!

## Erweiterte Tools

Natürlich bieten `reveal.js`-Präsentationen die gleichen Möglichkeiten wie PowerPoint oder Impress, wenn es um die Steuerung Ihrer Präsentation geht. Sie können zum Beispiel CSS-Klassen verwenden, um der Präsentation mitzuteilen, dass bestimmte Elemente ausgelöst werden sollen, bevor die Präsentation weitergegeben wird. Diese werden "Fragmente" genannt. Aufgrund der Beschränkungen der Pandoc-Engine müssen Sie dafür einfaches HTML verwenden. Betrachten Sie z.B. den HTML-Code der Demo-Präsentation:

```html
<ul>
    <li class="fragment fade-in">Dieses Element wird eingeblendet.</li>
    <li class="fragment highlight-blue">Dies wird blau hervorgehoben.</li>
    <li class="fragment highlight-red">AAlle verfügbaren Übergänge sind [hier] dokumentiert (https://github.com/hakimel/reveal.js/#fragments).</li>
</ul>
```

Damit wird eine Liste mit drei Einträgen erstellt. Alle Elemente sind "Fragmente", d.h. wenn Sie die Tastenkombination für die nächste Folie drücken, wird die erste Folie "eingeblendet", wie die Klasse sagt. Beim nächsten Druck auf die rechte Pfeiltaste wird der zweite Eintrag blau hervorgehoben. Beim dritten Druck auf die rechte Pfeiltaste wird das letzte Element rot hervorgehoben. Beim vierten Druck auf die Pfeiltaste wird die nächste Folie angezeigt.

## Einstellungen der Präsentation

Natürlich verfügt auch die Präsentation selbst über Einstellungen, die Sie nutzen können. Dies sind einfache JavaScript-Anweisungen, die Sie durch Einfügen eines `<script>`-Tags manipulieren können, wie im Screenshot gezeigt. Sie können sie außer Kraft setzen, indem Sie die Attribute des Objekts "zettlrRevealOptions" setzen.

![presentations_scripts.png](../img/presentations_scripts.png)

Die folgenden Optionen können Sie einstellen:

```javascript
const zettlrRevealOptions = {
    // Steuerelemente in der unteren rechten Ecke anzeigen.
    controls: true,
    // Anzeige eines Fortschrittsbalkens für die Präsentation.
    progress: true,
    // Anzeige der Seitenzahl der aktuellen Folie.
    slideNumber: true,
    // Jeder Folienwechsel wird in den Browserverlauf übernommen.
    history: true,
    // Tastaturkürzel für die Navigation einschalten.
    keyboard: true,
    // Übersichtsmodus für Folien einschalten.
    overview: true,
    // Vertikale Zentrierung der Folien.
    center: true,
    // Aktiviert die Touch-Navigation auf Geräten mit Touch-Eingabe.
    touch: true,
    // Schleife der Präsentation.
    loop: false,
    // Ändert die Präsentationsrichtung in RTL.
    rtl: false,
    // Zufallsreihenfolge der Folien bei jedem Laden der Präsentation.
    shuffle: false,
    // Schaltet Fragmente global ein und aus.
    fragments: true,
    // Kennzeichnet, ob die Präsentation in einem eingebetteten Modus läuft,
    // d.h. innerhalb eines begrenzten Teils des Bildschirms.
    embedded: false,
    // Markiert, ob ein Hilfe-Overlay angezeigt werden soll, wenn die Fragezeichen
    // Taste gedrückt wird.
    help: true,
    // Flagge, ob Sprechernotizen für alle Betrachter sichtbar sein sollen.
    showNotes: false,
    // Globale Übersteuerung für die automatische Anzeige eingebetteter Medien (Video/Audio/iframe).
    // - null: Medien werden nur automatisch wiedergegeben, wenn data-autoplay vorhanden ist.
    // - true: Alle Medien werden automatisch wiedergegeben, unabhängig von der individuellen Einstellung.
    // - false: Keine Medien werden automatisch abgespielt, unabhängig von der individuellen Einstellung.
    autoPlayMedia: null,
    // Anzahl der Millisekunden zwischen dem automatischen Weiterschalten zur
    // nächsten Folie, deaktiviert, wenn auf 0 gesetzt, dieser Wert kann überschrieben werden
    // durch Verwendung eines data-autoslide-Attributs auf Ihren Folien.
    autoSlide: 0,
    // Auto-Sliding nach Benutzereingabe stoppen.
    autoSlideStoppable: true,
    // Navigation über das Mausrad aktivieren.
    mouseWheel: false,
    // Blendet die Adressleiste auf mobilen Geräten aus.
    hideAddressBar: true,
    // Öffnet Links in einem Iframe-Vorschau-Overlay.
    previewLinks: false,
    // Übergangsstil
    transition: 'convex', // kein/überblenden/schieben/konvex/konkav/zoom
    // Geschwindigkeit der Übergänge
    transitionSpeed: 'standard', // standard/schnell/langsam
    // Übergangsstil für ganzseitige Folienhintergründe
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
    // Anzahl der Dias, die vom aktuellen sichtbar sind.
    viewDistance: 3,
    // Der Anzeigemodus, der für die Anzeige der Folien verwendet wird.
    display: 'block'
};
```

## Gestaltung der Präsentation

Wenn Ihnen keines der verfügbaren Themen zusagt oder wenn Sie zusätzliches CSS benötigen, können Sie dies einfach tun, indem Sie irgendwo in Ihrer Präsentation einen `<style>`-Tag einfügen.

Sie benötigen einige CSS-Kenntnisse, um das Styling zu verfeinern, aber das Aussehen der Präsentation selbst sollte zufriedenstellend sein.

![presentations_styles.png](../img/presentations_styles.png)

## Bilder

Einer der Nachteile solcher HTML-Präsentationen ist, dass Bilder nicht in der resultierenden Datei enthalten sein können. (Genauer gesagt, _können_ sie enthalten sein, aber das würde die Dateigröße um die Größe aller Bilder multipliziert mit dem Faktor 1,3 erhöhen.)

Sie müssen also entscheiden, wo Sie die Bilder unterbringen wollen. Grundsätzlich gibt es drei mögliche Methoden.

1. Erstellen Sie ein eigenes Verzeichnis für die Bilder, z. B. `img`, innerhalb des Verzeichnisses mit Ihrer Markdown-Datei. Verknüpfen Sie dann alle Bilder mit relativen Pfaden (`img/mein-bild.jpg`). Wenn Sie Ihre Datei exportieren, vergewissern Sie sich, dass sich die Präsentation an der gleichen Stelle relativ zum Bildverzeichnis befindet wie Ihre Quelldatei.
2. Legen Sie einfach alle Bilder in dasselbe Verzeichnis wie Ihre Präsentationsdatei. Dann reicht es aus, sie mit ihrem Dateinamen zu verlinken.
3. Laden Sie die Bilder ins Internet hoch, z. B. zu einem Bild-Hosting-Dienst, und verlinken Sie ihre URLs. Einziger Nachteil: Sie müssen sich auf eine funktionierende Internetverbindung an dem Ort verlassen können, an dem Sie Ihre Präsentation halten.

Als Faustregel gilt: Wenn Zettlr Ihre Bilder korrekt anzeigt, wird auch Ihre Präsentation korrekt angezeigt, solange Sie sicherstellen, dass sich die Präsentation an _exakt_ der richtigen Stelle im Verhältnis zu Ihren Bilddateien befindet.

> Wenn Sie wirklich müssen, können Sie Pandoc anweisen, alle Bilder direkt in die HTML-Datei einzubinden, indem Sie die Variable `self-contained` in Ihrer Vorgabedatei auf `true` setzen (dies funktioniert nicht innerhalb des Frontmatter). Bedenken Sie aber, dass viele Bilder in Ihrer Präsentation leicht zu einer HTML-Datei von Dutzenden von Megabyte führen können. Allerdings hätten Sie dann eine wirklich in sich geschlossene Präsentationsdatei.
