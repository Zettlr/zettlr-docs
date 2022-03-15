# Benutzerdefiniertes CSS

Seit Zettlr Version `1.1` ist es möglich, benutzerdefinierte CSS ([Cascading Style Sheets](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)) zu verwenden, um das gesamte Erscheinungsbild der App zu verändern. Diese Funktion wurde schon lange gewünscht und wird viele Möglichkeiten zur Anpassung der App eröffnen (und vielleicht sogar den ersten wirklich benutzergenerierten Inhalt der App?)

Sie finden den Custom CSS Editor unter `Zettlr->Custom CSS...` (macOS) oder unter `Datei->Custom CSS...` (Windows und Linux)

Wenn Sie mit CSS nicht vertraut sind, aber nicht einfach die Anleitungen auf dieser Seite kopieren und einfügen wollen, können Sie auch eine kurze [Anleitung zu CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS) lesen! Es gibt viele im Internet, so dass eine schnelle Google-Suche Sie auch mit Video-Tutorials versorgen kann, wenn Sie diese bevorzugen!

Nachfolgend finden Sie zunächst eine allgemeine Einführung in das Schreiben von CSS, bevor ich einige Beispiele aufführe, die Sie einfach kopieren und einfügen können, um Ihre Anwendung anders aussehen zu lassen. Am Ende der Seite finden Sie eine **komplette Klassenreferenz**.

## CSS für Zettlr schreiben

Wenn Sie nicht selbst CSS schreiben wollen und nur die **Schriftart** ändern möchten, gehen Sie zum nächsten Abschnitt über!

Zettlr kommt mit einer Menge vordefinierter Klassen und IDs. Es folgt der allgemein anerkannten Weisheit, keine `style`-Tags zur direkten Definition von Eigenschaften zu verwenden. Daher können Sie Klassen für buchstäblich alles verwenden.

Die Stile von Zettlr sind sowohl in die Geometrie als auch in das eigentliche Thema unterteilt, so dass man sich damit begnügen sollte, nur das Design der Elemente zu ändern, ohne **irgendeine** Geometrie zu verändern. Das Herumspielen mit der Geometrie kann Spaß machen, aber es kann zu einem völlig willkürlichen Verhalten führen, da einige Teile der App von den richtigen Größen der Elemente abhängen. Falls Sie einen Fehler gemacht haben, machen Sie sich keine Sorgen: Entfernen Sie einfach die `custom.css`-Datei aus dem Datenverzeichnis von Zettlr. Sie können das Datenverzeichnis Ihres eigenen Systems finden, indem Sie die Pfade in [der Installationsdokumentation] (../install.md) betrachten.

Klassen und IDs in Zettlr haben immer einen Namensraum zu den jeweiligen Komponenten (es sei denn, sie sind global), so dass man, um eine Regel wirklich zu überschreiben, den kompletten Namensraum verwenden muss (oder, wenn man nicht viele Regeln hinzufügen will und faul ist, die Überschreibungsregel `!important` verwenden).

Alles ist immer mit dem Namespace `body` verbunden, der eine Klasse `.dark` hat, wenn die App gerade im dunklen Modus ist. Wenn Sie also sicherstellen wollen, dass eine bestimmte Regel nur dann gilt, wenn sich die Anwendung im dunklen Modus befindet, stellen Sie sicher, dass Sie ihr das Präfix `body.dark` voranstellen!

Am Ende dieser Seite finden Sie eine vollständige Klassen- und ID-Referenz, damit Sie nicht ewig in der App herumstochern müssen! (Ich entschuldige mich schon jetzt dafür, dass es nur ein einfacher Dump ist, der aus den vorkompilierten CSS-Dateien von Zettlr generiert wurde).

## CSS-Code-Schnipsel

### Verwendung einer eigenen Schriftart mit Zettlr

Falls Ihnen die mit Zettlr gelieferte Standardschriftart nicht gefällt oder Sie sie ändern möchten, fügen Sie einfach den folgenden Codeschnipsel in den benutzerdefinierten CSS-Editor ein. Ersetzen Sie "your-font-name" durch den **vollständigen Namen** der Schriftart, die Sie für Zettlr verwenden möchten. Bitte ersetzen Sie `placeholder` entsprechend der Schriftart:

- Wenn Sie eine **serif**-Schriftart wie Times New Roman oder Georgia verwenden möchten, verwenden Sie bitte `serif`.
- Falls Ihre Schriftart **sans-serif** ist, wie Arial oder Helvetica, verwenden Sie bitte `sans-serif`
- Falls Sie auf die klassische **Monospace** umstellen wollen, verwenden Sie bitte den Platzhalter `monospace`

Der Platzhalter stellt sicher, dass auch dann, wenn Ihre Schriftart nicht gefunden wird, eine gleichwertige Schriftart verwendet wird. Er dient als Fallback.

Zettlr liefert bereits eine Serifenschrift, eine serifenlose Schrift und eine Monospace-Schrift mit! Um die mitgelieferten Schriftarten zu verwenden, können Sie `Crimson` für eine moderne Serifenschrift oder `Liberation Mono` für eine schön aussehende Monospace-Schriftart verwenden. (Lato ist die Standard-Schriftart, also wollen Sie sie dort wahrscheinlich nicht einsetzen).

```css
#editor {
    font-family: '<Ihr-Schrift-Name hier>', <Platzhalter>;
}
```

### Zufällige Unsplash-Hintergrundbilder

Mit dem folgenden Code können Sie dafür sorgen, dass Ihr Editor jedes Mal, wenn Sie ihn starten, ein anderes Hintergrundbild zeigt. Die Bilder stammen von Unsplash.com, einer schönen Seite mit kostenlosen Fotos. Er verwendet die `Source API`, die einfach jedes Mal ein anderes Bild ausspuckt, wenn die URL besucht wird. Sie können es einfach ausprobieren, indem Sie [die Seite besuchen und ein paar Mal aktualisieren] (https://source.unsplash.com/random)! Bitte lesen Sie die [Unsplash Source API Referenz](https://source.unsplash.com/) für weitere Optionen (wie z.B. die Verwendung eines Bildes des Tages).

```css
/* Geben Sie hier Ihr eigenes CSS ein */

#editor {
    background-color: transparent;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    background-position: center center;
}

body #editor .CodeMirror-sizer, body #editor .CodeMirror-gutter {
    background-color: rgba(255, 255, 255, .8);
    Höhe: 100%;
}

body.dark #editor .CodeMirror-sizer, body.dark #editor .CodeMirror-gutter {
    background-color: rgba(0, 0, 0, .8);
}

#editor .CodeMirror {
    background-color: transparent;
}
```

![Eine Vorschau einer Zettlr-Installation mit obigem Schnipsel](../img/custom_css_unsplash.png)

### Visualisierung von Zeilenenden

Wenn Sie sehen wollen, wo Ihre Zeilenumbrüche sind, können Sie das Symbol einer Pilzsäule (¶) am Ende Ihrer Zeilen anzeigen lassen, indem Sie das folgende Custom CSS verwenden:

```css
.CodeMirror-line:not(:last-child)::after {
  content: "¶";
  color: #666;
}
```

![Eine Vorschau von Zettlr mit obigem Snippet](../img/custom_css_pilcrow.png)

### Ausblenden der Symbolleiste im ablenkungsfreien Modus

Manche Leute bevorzugen den ablenkungsfreien Modus, um _wirklich_ ablenkungsfrei zu sein. Zettlr blendet die Symbolleiste nicht standardmäßig aus, weil die meisten Leute auch beim ablenkungsfreien Schreiben Zugriff auf alle Werkzeuge und Schaltflächen haben wollen. Wenn Sie jedoch zu den Leuten gehören, die es bevorzugen, dass der Editor selbst ablenkungsfrei ist, dann können Sie sich freuen! Das Ausblenden der Symbolleiste im ablenkungsfreien Modus ist so einfach wie eine einzige CSS-Zeile!

Fügen Sie einfach die folgende CSS-Zeile in den Dialog Benutzerdefiniertes CSS ein, und von da an wird die Symbolleiste immer ausgeblendet sein:

```css
#editor.fullscreen, .CodeMirror-fullscreen { top: 0px; }
```

### Ihre Ideen

Haben Sie schöne Ideen, wie man Zettlr noch besser gestalten könnte? Wenn Sie einen guten CSS-Schnipsel haben, der sofort funktioniert, können Sie ihn gerne [mit uns](mailto:info@zettlr.com) teilen, damit wir ihn hier veröffentlichen können!

## Vollständige CSS-Klassen- und ID-Referenz

Nachfolgend finden Sie die vollständige und nicht abgekürzte Liste *aller* CSS-Klassen und -IDs. Wir haben nachgezählt, es sind im Moment über 300.

Bitte beachten Sie, dass wir ein externes Paket verwendet haben, um die Klassennamen zu extrahieren. Wir haben bereits die meisten Nicht-Klassen (wie Farben und "punktierte" Werte wie `.5%`) entfernt, aber wir geben keine Garantie, dass wir alle gefunden haben.

**Warnung: Die folgende Referenzliste kann sich in Zukunft noch ändern! So kann eine Klasse, die in einer Version von Zettlr funktioniert hat, in einer anderen nicht mehr funktionieren, weil sich entweder das DOM oder der Klassen-/ID-Name geändert hat.**

```css
.eot
#iefix
.ttf
.woff2
.otf
.woff
.dragger
.popup
.clearfix
.modal
.dialog
.uuid
.image-preview
#app-lang
.inline
.time
.info
.button
.request-file
.file-select-group
.changelog
.code
.clear
.box-left
.box-right
.paper
.a4paper
.set-target
.bmargin
.lmargin
.rmargin
.tmargin
.image-size
.image
.png
#file-list
#imageWidth
#imageHeight
#preview-image-sizes
.pdf-preview
.error
.projects
#prefs-taglist
.flex
#next-sheet
#prev-sheet
.ui-tabs-nav
.ui-tabs-tab
.dicts-list
.user-dict
.dicts-list-item
.user-dict-item
.dicts-list-search
.selected-dict
.clusterize-scroll
.clusterize-extra-row
.clusterize-keep-parity
.clusterize-content
.clusterize-no-data
.hidden
.list-item
.meta
.date
.directories
.files
.id
.tags
.tex-indicator
.target-progress-indicator
.filename
.taglist
.tag
.tagspacer
.directory
.sorter
.sortName
.sortTime
.empty-directory
.empty-file-list
#file-tree
#directories-dirs-header
#directories-files-header
.collapse-indicator
.collapsed
.dead-directory
.project
.display-search-results
.empty-tree
#editor
#sidebar
#component-container
.expanded
#arrow-button
#sidebar-inner-resizer
#sidebar-resize
.fullscreen
.ui-resizable-handle
.ui-resizable-autohide
.ui-resizable-disabled
.ui-resizable-w
.CodeMirror
.CodeMirror-code
.mute
.CodeMirror-scroll
.CodeMirror-fullscreen
.cm-readability-0
.cm-readability-1
.cm-readability-2
.cm-readability-3
.cm-readability-4
.cm-readability-5
.cm-readability-6
.cm-readability-7
.cm-readability-8
.cm-readability-10
.cm-readability-9
.CodeMirror-vscrollbar
.CodeMirror-sizer
.CodeMirror-empty
.svg
.search-result
.cm-table
.size-header-1
.pomodoro
.CodeMirror-gutter-elt
.size-header-2
.size-header-3
.size-header-4
.size-header-5
.size-header-6
.cm-comment
.cm-fenced-code
.cm-formatting-task
.CodeMirror-cursor
.cm-escape-char
.cm-formatting-code
.cm-formatting-code-block
.cm-formatting-em
.cm-formatting-quote
.cm-formatting-strong
.cm-formatting-list-ol
.cm-formatting-list-ul
.cm-link
.cm-url
.cm-zkn-link
.meta-key
.cm-zkn-tag
.cma
.CodeMirror-gutters
.CodeMirror-foldgutter
.CodeMirror-foldgutter-folded
.CodeMirror-foldgutter-open
.heading-tag
.CodeMirror-foldmarker
.CodeMirror-hints
.CodeMirror-hint
.cm-hint-colour
.sk-circle
.sk-child
.sk-circle2
.sk-circle3
.sk-circle4
.sk-circle5
.sk-circle6
.sk-circle7
.sk-circle8
.sk-circle9
.sk-circle10
.sk-circle11
.sk-circle12
.sk-three-bounce
.sk-bounce1
.sk-bounce2
.print-window
.quicklook-standalone
#init-print
.title
.find
.body
#toolbar
.content
.darwin
.win32
.linux
.file-info
.searchbar
#search-progress-indicator
.menu-popup
.dir-open
.file-new
.stats
.tag-cloud
.preferences
.file-save
.file-delete
.file-rename
.formatting
.readability
.share
.show-toc
.toggle-attachments
.spacer
.separator
.end-search
.notify
.popup-arrow
.down
.up
.left
.right
.toc-link
.small
#header-formatting
.row
.table-generator
.cell
.btn-share
.htm
.pdf
.docx
.odt
.plain
.tex
.revealjs
.revealjs-beige
.revealjs-black
.revealjs-league
.revealjs-moon
.revealjs-serif
.revealjs-sky
.revealjs-solarized
.revealjs-white
.rst
.rtf
.org
.textbundle
.textpack
#reveal-themes
.markdownHeading1
.markdownHeading2
.markdownHeading3
.markdownHeading4
.markdownHeading5
.markdownHeading6
.markdownBlockquote
.markdownLink
.markdownImage
.markdownCode
.markdownComment
.markdownMakeOrderedList
.markdownMakeUnorderedList
.markdownMakeTaskList
.markdownInsertTable
.markdownDivider
.insertFootnote
.markdownBold
.markdownItalic
.removeFootnote
.search
.footnote-edit
.regexp
#searchNext
#replaceNext
#replaceAll
#attachments
#open-dir-external
.csl-bib-body
.csl-entry
.cb-toggle
.radio-toggle
.toggle
.cb-group
.linux-window-controls
.windows-window-controls
.close
.minimise
.resize
.maximise
.theme-container
.theme-container-item
.theme-mockup
.traffic-lights
.traffic-light-close
.traffic-light-full
.traffic-light-min
.toolbar
.file-list
.file-list-item
.editor
#theme-berlin-mockup
#theme-frankfurt-mockup
#theme-bielefeld-mockup
#theme-karl-marx-stadt-mockup
.cm-meta
.cm-def
.sb-annotation
.alert
.success
.warning
.quicklook
.cm-stex-mode
.cm-css-mode
.cm-attribute
.cm-builtin
.cm-string
.cm-string-2
.cm-variable
.cm-variable-2
.cm-keyword
.cm-property
.cm-type
.cm-atom
.cm-number
.CodeMirror-focused
.CodeMirror-selected
.cm-formatting
.cm-tag
.cm-bracket
.cm-formatting-header-1
.cm-formatting-header-2
.cm-formatting-header-3
.cm-formatting-header-4
.cm-formatting-header-5
.cm-formatting-header-6
.cm-quote
.cm-strong
.cm-em
.cm-spell-error
.cm-zkn-id
.citeproc-citation
.cm-hr
.CodeMirror-guttermarker-subtle
.CodeMirror-hint-active
.selected
.alias
.file
.highlight
.dir
.root
.active
#searchWhat
.not-found
#replaceWhat
.pomodoro-task
.pomodoro-short
.pomodoro-long
.pomodoro-meter
.pomodoro-value
.task
.short
.long
.indicator-meter
.indicator-value
.error-info
.has-error
.form-inline-buttons
.prefs-submit-group
.ui-tabs-active
.tippy-popper
.table-helper-align-button-container
.table-helper-remove-button-container
.table-helper-add-button
.table-helper-align-button-line
.table-helper-remove-button-line
.table-helper
.dark
.container
.cm-formatting-escape
.maximise-svg
```
