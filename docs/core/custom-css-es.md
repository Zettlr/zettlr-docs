# CSS a medida

Desde la versión de Zettlr `1.1` es posible usar CSS personalizado ([Cascading Style Sheets](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)) para modificar la apariencia completa de la aplicación. Ha sido una función solicitada desde hace mucho tiempo, y abrirá muchas posibilidades para personalizar la aplicación (y quizás incluso el primer contenido generado por el usuario de la aplicación?)

Puedes encontrar el editor CSS personalizado en `Zettlr->CSS personalisado...` (macOS) o en `File->CSS personalisado...` (Windows y Linux)

Si no estás familiarizado con CSS, pero no quieres simplemente copiar y pegar las guías de esta página, puedes optar por seguir un breve [tutorial sobre CSS] (https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS)! Hay muchos en Internet, por lo que una búsqueda rápida en Google también puede encontrarte tutoriales en vídeo, si lo prefieres.

Abajo puedes encontrar una introducción general para escribir CSS, antes de que te muestre algunos ejemplos que puedes copiar y pegar fácilmente para adaptar tu aplicación para que luzca diferente. Al final de la página puedes encontrar una **completa referencia de la clase**.

## Escribir CSS para Zettlr

Si no quieres escribir CSS por ti mismo y sólo quieres **cambiar la fuente**, pasa a la siguiente sección!

Zettlr viene con un montón de clases e IDs predefinidos. Sigue la sabiduría generalmente reconocida de no hacer uso de etiquetas de `style` (estilo) para definir directamente las propiedades. Por lo tanto, puedes utilizar las clases literalmente para cualquier cosa.

Los estilos de Zettlr se dividen tanto en geometría como en el tema actual, por lo que es posible que desee seguir cambiando sólo el diseño de los elementos _sin_ cambiar **ninguna** geometría. Jugar con la geometría puede ser divertido, pero puede producir un comportamiento completamente aleatorio, ya que algunas partes de la aplicación dependen del tamaño correcto de los elementos. En caso de que cometa un error, no te preocupes: Simplemente elimina el archivo `custom.css` del directorio de datos de Zettlr. Puedes encontrar el directorio de datos de tu propio sistema mirando las rutas proporcionadas en [la documentación de instalación](../install-es.md).

Las clases y los IDs en Zettlr siempre están espaciados por nombres en los componentes respectivos (a menos que sean globales), así que para realmente anular una regla tendrás que usar el espacio de nombres completo (o, si no quieres añadir muchas reglas y eres perezoso, usa la regla de anulación `!important`).

Todo está siempre espaciado con el nombre del `body` (cuerpo), que tiene una clase `.dark` si la aplicación está actualmente en modo oscuro. Así que para asegurarse de que una cierta regla sólo se aplica mientras la aplicación está en modo oscuro, asegúrate de ponerle el prefijo `body.dark`!

En la parte inferior de esta página puedes encontrar una referencia completa de clase e ID para que no tengas que husmear en la aplicación para siempre! (Ya me disculpo, porque es sólo un simple volcado generado a partir de los archivos CSS precompilados de Zettlr.)

## Fragmentos de código CSS

### Usar una fuente personalizada con Zettlr

En caso de que no te guste la fuente por defecto que se entrega con Zettlr, o necesites cambiarla, simplemente pega el siguiente fragmento de código en el editor CSS personalizado. Reemplace `tu nombre de fuente` con el **nombre completo** de la fuente que quieres usar para Zettlr. Por favor, reemplaza el "marcador de posición" de acuerdo con la fuente:

- En caso de que quieras usar una fuente **serif**, como Times New Roman, o Georgia, por favor usa `serif`. 
- En caso de que tu fuente sea **sans serif**, como Arial o Helvetica, por favor usa `sans-serif`.
- En caso de que quieras cambiar al clásico **monoespacio**, por favor usa el marcador de posición `monoespacio`. 

El marcador de posición se asegurará de que incluso si tu fuente no puede ser encontrada, se utilizará una fuente equivalente. Sirve de reserva.

Zettlr ya incluye una fuente serif, una fuente sans-serif y una fuente monospacio! Para usar las fuentes incluidas, puedes usar `Crimson` para una fuente con serif moderna o `Liberation Mono` para una fuente monospacio que se vea bien. (Lato es el valor por defecto, así que probablemente no quieras ponerlo ahí.)

```css
#editor {
    font-family:'<tu-nombre de fuente aquí>', <plaquetario>;
}
```

### Imágenes de fondo aleatorias de Unsplash.com

Con el siguiente código, puedes hacer que tu editor tenga una imagen de fondo diferente cada vez que lo inicies. Las imágenes están tomadas de Unsplash.com, un bonito sitio con fotos gratis. Utiliza la `Fuente API`, que simplemente resultará en una imagen diferente cada vez que se visitas la URL. Puedes probarlo simplemente [visitando la página y actualizándola unas cuantas veces] (https://source.unsplash.com/random)! Consulta la referencia [Unsplash Source API] (https://source.unsplash.com/) para obtener más opciones (como utilizar una imagen del día).

```css
/* Introduce tu CSS personalizado aquí */

#editor {
    background-color: transparent;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    background-position: center center;
}

body #editor .CodeMirror-sizer, body #editor .CodeMirror-gutter {
    background-color: rgba(255, 255, 255, .8);
    height: 100%;
}

body.dark #editor .CodeMirror-sizer, body.dark #editor .CodeMirror-gutter {
    background-color: rgba(0, 0, 0, .8);
}

#editor .CodeMirror {
    background-color: transparent;
}
```

![Una vista previa de una instalación de Zettlr usando el fragmento de arriba](../img/custom_css_unsplash.png)

### Visualización de los finales de línea

En caso de que quieras ver dónde están tus saltos de línea, puedes mostrar el símbolo del pilcrow (¶) al final de tus líneas utilizando el siguiente CSS personalizado:

```css
.CodeMirror-line:not(:last-child)::after {
  content: "¶";
  color: #666;
}
```

![Una vista previa de Zettlr usando el fragmento anterior](../img/custom_css_pilcrow.png)

### Ocultar la barra de herramientas en modo libre de distracción

Algunas personas prefieren que el modo libre de distracción sea _realmente_ libre de distracción. Zettlr no oculta la barra de herramientas por defecto, porque la mayoría de la gente quiere tener acceso a todas las herramientas y botones incluso cuando escribe sin distracciones. Aún así, si perteneces al grupo de personas que prefieren la distracción libre para ser sólo el editor en sí, ¡alégrate! Esconder la barra de herramientas en modo libre de distracción es tan fácil como una sola línea de CSS!

Simplemente pega la siguiente línea de CSS en el cuadro de diálogo CSS personalizado y, a partir de ese momento, la barra de herramientas siempre estará oculta:

```css
#editor.fullscreen, .CodeMirror-fullscreen { top: 0px; }
```

#### Tus Ideas

¿Tienes buenas ideas para estilizar Zettlr aún más? Si tienes un buen fragmento de CSS que funciona fuera de la caja, no dudes en[compartirlo con nosotros] (mailto:info@zettlr.com) para que podamos incluirlo aquí!

## Clase CSS completa y referencia de ID

A continuación puedes encontrar la lista completa y no abreviada de *todas* las clases e IDs de CSS. Hemos contado, son más de 300 en este momento.

Ten en cuenta que hemos utilizado un paquete externo para extraer los nombres de las clases. Ya hemos eliminado la mayoría de las no clases (como los colores y los valores de "puntos anotados" como "0,5%"), pero no damos ninguna garantía de que los hayamos encontrado todos.

**Advertencia: La siguiente lista de referencias puede cambiar en el futuro! Así que una clase que ha funcionado en una versión de Zettlr puede dejar de funcionar en otra, debido a cambios en el DOM o en el nombre de la clase/ID.**

```css
.eot
#iefix
.ttf
.woff2
.otf
.woff
.dragger
.clearfix
.modal
.dialog
.uuid
.image-preview
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
.popup
.set-target
.bmargin
.lmargin
.rmargin
.tmargin
.image-size
.image
.png
#directories
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
.dicts-list-item
.dicts-list-search
.selected-dict
.hidden
#directories-dirs-header
#directories-files-header
#preview
.file
.collapse-indicator
.collapsed
.project
.virtual-directory
.emptyPaths
.info
.clusterize-scroll
.clusterize-extra-row
#editor
.ui-resizable-autohide
.ui-resizable-handle
.ui-resizable-disabled
.clusterize-keep-parity
.clusterize-content
.clusterize-no-data
.snippets
.filename
.snippet
.date
.directories
.files
.id
.tags
.tex-indicator
.virtual-directories
.target-progress-indicator
.taglist
.tag
.tagspacer
.directory
.sorter
.sortName
.sortTime
#combiner
.expanded
#arrow-button
.fullscreen
.ui-resizable-w
.CodeMirror
.CodeMirror-code
.mute
.CodeMirror-scroll
.CodeMirror-fullscreen
.CodeMirror-vscrollbar
.CodeMirror-sizer
.cma
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
.shift
.cm-zkn-tag
.cm-zkn-link
.CodeMirror-gutters
.CodeMirror-foldgutter
.CodeMirror-foldgutter-folded
.CodeMirror-foldgutter-open
.heading-tag
.CodeMirror-foldmarker
.CodeMirror-hints
.CodeMirror-hint
.cm-hint-colour
.print-window
.quicklook
.quicklook-standalone
#init-print
.minimize
.title
.find
.body
.ui-resizable-n
.ui-resizable-s
.ui-resizable-e
.ui-resizable-se
.ui-resizable-sw
.ui-resizable-nw
.ui-resizable-ne
.close
.make-standalone
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
.directory-new
.file-new
.stats
.tag-cloud
.preferences
.recent-docs
.file-save
.file-delete
.file-rename
.formatting
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
.footnote-edit
.search
.small
#header-formatting
.row
.btn-share
.htm
.docx
.odt
.plain
.tex
.pdf
#attachments
#open-dir-external
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
.textile
.mediawiki
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
.markdownMakeOrderedList
.markdownMakeUnorderedList
.markdownDivider
.insertFootnote
.markdownBold
.markdownItalic
.removeFootnote
#searchNext
#replaceNext
#replaceAll
.csl-bib-body
.csl-entry
.cb-toggle
.radio-toggle
.toggle
.cb-group
.linux-window-controls
.windows-window-controls
.minimise
.resize
.maximise
.cm-meta
.cm-def
.sb-annotation
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
.CodeMirror-selected
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
.highlight
.vd-file
.excerpt
.active
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
.dark
.CodeMirror-dialog
.cm-formatting-escape
.maximise-svg
```
