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

Por supuesto, también puedes utilizar la búsqueda en las ventanas de vista rápida. Por lo tanto, simplemente haz clic en el contenido del vista rápida que deseas buscar (para enfocarlo y evitar que `Cmd / Ctrl + F` active la búsqueda en su archivo principal) y presiona` Cmd / Ctrl + F` para comenzar la búsqueda.

## Búsqueda de texto completo

El aspecto más importante de la búsqueda es, de hecho, la búsqueda de texto completo que puedes abrir presionando `Cmd / Ctrl + Shift + F`. La búsqueda de texto completo se encuentra donde está el gestor de archivos y se puedes abrirlo usando el botón de la izquierda de la barra de herramientas. La búsqueda de texto completo te proporcionan una funcionalidad avanzada para obtener la información que necesita lo más rápido posible.

![La búsqueda de texto completo con explicaciones.](../img/full_text_search.png)

La búsqueda de texto completo presenta tres entradas:

* El **campo de consulta** contiene los términos de búsqueda reales que está buscando
* La segunda entrada te permite **restringir tu búsqueda a un directorio específico**
* El último campo de texto solo es visible cuando se está ejecutando una búsqueda, lo que te permite **filtrar aún más los resultados de la búsqueda**

### Los resultados de la búsqueda

Los resultados de la búsqueda contienen algunos indicadores que te ayudan a comprender de dónde proviene la información y qué contiene realmente el archivo. En el encabezado del resultado de cada archivo, primero verás el nombre del archivo, la propiedad `title` o el primer encabezado del nivel 1, según tu configuración. Debajo de eso, siempre encontrarás la ruta completa desde la raíz del área de trabajo hasta el archivo en cuestión. Además, cada resultado de búsqueda tiene una puntuación de relevancia (anteriormente el "mapa de calor"), que le indica qué tan relevante cree Zettlr que es este resultado de búsqueda: gris significa menos relevante, azul significa relevante y verde significa muy relevante. Por último, puedes contraer los resultados de búsqueda de ese archivo haciendo clic en la flecha del lado derecho.

Cada resultado de búsqueda te mostrará todas las líneas en las que se encontraron los términos de búsqueda. Los resultados de búsqueda se enfatizan mientras se muestra el resto de la línea para brindarte el contexto del resultado. Delante de cada línea está el número de línea. Al hacer click en una sola línea de resultado de búsqueda, Zettlr abrirá automáticamente el archivo (si aún no lo ha hecho) y saltará a la línea correspondiente.

> ¿Demasiados resultados? También puedes alternar la visualización de todos los resultados usando el botón correspondiente, y luego solo expandir aquellos que merecen una segunda mirada.

### Redactar una consulta

La redacción de una consulta funciona de manera similar a otros motores de búsqueda que conoces. Puedes utilizar varios operadores diferentes para especificar exactamente lo que estás buscando:

* **Operador Y:** Escriba `Barco Bote` (separados por un espacio) para mostrar solo los archivos que contienen _ambos_ el término" barco "y el término" bote ". Cada espacio se interpreta como "Y".
* **Operador O:** Escriba `Barco | Bote` (| es el operador pleca, insertado por `Alt + 7` en macOS o` AltGr + <`en otros sistemas) para seleccionar todos los archivos que contienen _ya sea_ la palabra" barco "_o_ la palabra" bote "
* **Operador de coincidencia exacta:** Escriba `"Barco Bote" `para buscar en sus archivos esa frase exacta.
* **Operador de negación:** Escriba `! Bote` para buscar solo archivos _no_ que contengan ese término. También funciona con coincidencias exactas: `!" Barco Bote"` excluiría todos los archivos que contienen la frase exacta "Barco Bote".

> **Atención**: mientras que los operadores `Y`,` O` y `Coincidencia exacta` funcionan asignando pesos (un archivo que cumple con todos los criterios de búsqueda se considerará muy relevante, mientras que los archivos que no coinciden con todos los términos de búsqueda) tienen un indicador de relevancia azul o gris), el operador `Negación` definitivamente excluye los archivos. Entonces, mientras que una búsqueda de "barco bote" también incluiría archivos que contienen sólo uno de los dos términos (aunque con un peso mucho menor), una búsqueda de "! Barco Bote" definitivamente excluirá todos los archivos que contengan la palabra Barco.

Por supuesto, puedes encadenar todos estos operadores. Entonces podrías buscar `"Barco Bote" | capitán del buque` para mostrar sólo los archivos que contienen la frase exacta "Barco Bote" o la palabra "buque", y que también incluyen la palabra "capitán".

No te preocupes si no recuerdas la palabra completa que estás buscando: Zettlr intentará hacer coincidir tus términos de búsqueda también con palabras parciales, por lo que la palabra "trooper" también coincidirá con "Stromtrooper" así como con "Troopership" como lo haría la frase "Boat Ship" también coincide con un "Steamboat Ship". **Las búsquedas también distinguen entre mayúsculas y minúsculas**. Por lo tanto, no tiene que preocuparse por los pequeños errores tipográficos que pueda tener en algunos archivos.

Mientras Zettlr está buscando, mostrará un indicador de búsqueda. Si una búsqueda tarda demasiado, puedes cancelarla prematuramente.

Para lograr mejores resultados, Zettlr sopesará diferentes tipos de coincidencias de manera diferente. Por ejemplo, una coincidencia exacta en el título puede ser una señal de que el archivo es muy relevante para sumercé. Por lo tanto, Zettlr pesará más que otras coincidencias. Además, si un término de búsqueda coincide con mayúsculas y minúsculas, esta coincidencia recibirá una puntuación más alta que si el término solo coincide con algunas mayúsculas y minúsculas (es decir, hubo una diferencia en las mayúsculas).

Para encontrar el lugar exacto donde coincidió tu búsqueda, selecciona un archivo y Zettlr resaltará automáticamente todas las coincidencias en amarillo brillante fáciles de encontrar. Además, la barra de desplazamiento a la derecha de la ventana mostrará marcadores para indicar en qué posiciones del documento se encuentran los términos de búsqueda.
