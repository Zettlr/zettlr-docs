# Buscando

Uno de los grandes beneficios de cambiar a Markdown para escribir documentos es que los documentos en sí se pueden buscarse a través de la búsqueda incorporada de tu sistema operativo (por ejemplo, Cortana en Windows, Spotlight en macOS o Dash en sistemas Linux). Pero, por supuesto, ayuda mucho si no tienes que salir del programa cuando está buscando algo. ¡Ahí es donde entra la búsqueda! Básicamente, existen tres funciones de búsqueda distintas: una función de filtrado rápido que utiliza cada vez que selecciona otro directorio en la lista de la izquierda, una búsqueda de todo el documento y una búsqueda de texto completo.

## Filtrar archivos

La primera función ya se ha mencionado en múltiples ocasiones. Como la lista de archivos solo muestra todos los archivos dentro de un directorio determinado y todos sus subdirectorios, simplemente selecciona algunos directorios para reducir la lista de todos los archivos a los que necesita ver. O selecciona la raíz de un área de trabajo para obtener la lista completa.

También puedes filtrar más esta lista utilizando el campo de texto en la parte superior de la lista de archivos.

## Buscando en archivos

Si estás buscando frases o palabras específicas dentro de tu archivo abierto actualmente, simplemente presiona `Cmd / Ctrl + F`. La búsqueda se abrirá en la esquina superior derecha del editor. Simplemente escribe algo y presiona `Enter` repetidamente para recorrer las coincidencias. Haga clic en el botón "x" pequeño para cerrar la búsqueda.

> **Tip**:También puedes utilizar potentes expresiones regulares para realizar búsquedas. Zettlr de forma predeterminada realiza una búsqueda predeterminada, pero cuando se detecta una expresión regular (es decir, su búsqueda se encapsula con barras diagonales), realizará una búsqueda RegEx (de expresiones regulares). Una vez que Zettlr haya detectado una expresión regular, el campo de búsqueda cambiará su fuente a monoespacio para ayudarte a escribir tu expresión regular. Para buscar todos los dígitos, por ejemplo, buscaría `/ \ d + /`. [Obtenga más información sobre las expresiones regulares de JavaScript aquí](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Si presionas `Enter` mientras la entrada de reemplazo está enfocada, Zettlr reemplazará el resultado de búsqueda actual y resaltará automáticamente la siguiente aparición de su término de búsqueda. Presiona `Enter` repetidamente para reemplazar múltiples ocurrencias. Si deseas reemplazar todas las ocurrencias a la vez, puedes presionar `Alt + Enter` mientras la entrada de reemplazo tiene el foco.

> **Tip**: Al igual que en otros editores de texto, puedes hacer uso de variables mientras buscas con una expresión regular. Si buscas algo usando una expresión regular que contiene al menos un grupo de captura, puedes usar la variable `$ 1` dentro de su texto de reemplazo. Dichas variables se reemplazarán con el contenido real encontrado de los grupos de captura. También se reemplazarán varias apariciones de la variable. El número después de `\ $` se refiere al índice del grupo de captura (el segundo grupo de captura se abordará usando `\ $ 2`, y así sucesivamente). [Obtenga más información sobre las expresiones regulares de JavaScript aquí](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Of course, you can also use the search in Quicklook windows. Therefore, just click into the content of the Quicklook you want to search (to give it focus and prevent that `Cmd/Ctrl+F` triggers the search on your main file) and press `Cmd/Ctrl+F` to begin searching.

## Full-Text Search

The most important aspect of searching is, in fact, the full-text search which you can open by pressing `Cmd/Ctrl+Shift+F`. The full text search is located where the file manager is and can be opened using the three-way toggle to the left of the toolbar. The full text search provides you with advanced functionality to get to the info you need as fast as possible.

![The full text search with explanations](../img/full_text_search.png)

The full-text search features three inputs:

* The **query field** contains the actual search terms you are looking for
* The second input allows you to **restrict your search to a specific directory**
* The last text field is only visible when a search is running, which allows you to **further filter your search results**

### The Search Results

The search results contain a few indicators that help you make sense of where the info is coming from, and what the file actually contains. In the header of each file result you fill first see either the filename, the `title` property, or the first heading of level 1, depending on your settings. Below that, you will always find the full path from the workspace root to the file in question. Furthermore, each search result has a relevancy score (previously the "heatmap"), which tells you how relevant Zettlr thinks this search result is: Gray means less relevant, blue means relevant, and green means very relevant. Lastly, you can collapse the search results of that file by clicking the arrow on the right-hand side.

Each search result will list you all the lines in which your search terms were found. The actual search results are emphasised while the rest of the line is displayed to provide you with the context of the result. In front of each line is the line-number. Upon clicking a single search result line, Zettlr will automatically open the file (if not already done) and jump to the corresponding line.

> Too many results? You can also toggle the display of all results using the corresponding button, and then only expand those which deserve a second look.

### Composing a Query

Composing a query works similar to other search engines which you are already familiar with. You can make use of several different operators to specify exactly what you are searching for:

* **AND operator:** Type `Boat Ship` to only display the files that contain _both_ the term "boat" and the term "ship". Each space is interpreted as "AND".
* **OR operator:** Type `Boat | Ship` (| is the Pipe-operator, inserted by `Alt+7` on macOS or `AltGr+<` on other systems) to select all files that contain _either_ the word "boat" _or_ the word "ship"
* **Exact-Match operator:** Type `"Boat Ship"` to search your files for that exact phrase.
* **NOT operator:** Type `!Boat` to search only for files _not_ containing that term. Works with exact matches as well: `!"Boat Ship"` would exclude all files containing the exact phrase "Boat Ship".

> **Attention**: While the `AND`, `OR`, and `Exact-Match` operators work by assigning weights (a file that fulfills all search criteria will be considered very relevant, while files which do not match all search terms have a blue or gray relevancy indicator), the `NOT` operator definitely excludes files. So while a search for `boat ship` would also include files containing only one of the two terms (albeit with a much lower weight), a search for `!boat ship` will definitely exclude all files containing the word boat.

Of course, you can chain all of these operators. So you could search for `"Boat Ship" | vessel captain` to display only files that either contain the exact phrase "Boat Ship" or the word "vessel", and which also include the word "captain".

Don't worry if you do not remember the complete word you are searching for: Zettlr will try to match your search terms also to partial words, so the word "trooper" would also match "Stromtrooper" as well as "Troopership" as would the phrase "Boat Ship" also match a "Steamboat Ship". **Searches are also case-insensitive**. So you don't have to worry about little typos you may have in some files.

While Zettlr is searching, it will display a search indicator. If a search takes too long, you can abort it prematurely.

To achieve better results, Zettlr will weigh different types of matches differently. For instance, an exact match in the title can be a sign that the file is highly relevant to you. Therefore, Zettlr will weigh this heavier than other matches. Also, if a search term has matched case-sensitive, this match will receive a higher score than if the term has only matched case-insensitive (i.e., there was a difference in capitalisation).

To find the exact place where your search matched, select a file and Zettlr will automatically highlight all matches in bright yellow easy to find. Also, the scrollbar to the very right of the window will be showing markers to indicate at which positions in the document your search terms occur.
