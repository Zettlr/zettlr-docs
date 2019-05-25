# Buscar

Una de las grandes ventajas de cambiar a Markdown para escribir documentos es que los propios documentos se pueden buscar a través de la búsqueda incorporada de tu sistema operativo (por ejemplo, Cortana en Windows, Spotlight en macOS o Dash en sistemas Linux). Pero, por supuesto, ayuda mucho si no tienes que dejar el programa cuando estás buscando algo. Ahí es donde entra en juego la búsqueda! Existen básicamente tres funciones de búsqueda distintas: Una función de filtrado rápido que se utiliza cada vez que se selecciona otra carpeta en la lista de la izquierda, una búsqueda en todo el documento y una búsqueda global.

## Filtrar archivos

La primera función ya ha sido mencionada en múltiples ocasiones. Como la lista de vista previa sólo muestra todos los archivos dentro de una carpeta dada y todos sus sub-carpetas, sólo tienes que seleccionar diferentes carpetas para reducir la lista de todos los archivos a los que necesita ver. O bien, selecciona una carpeta raíz para obtener la lista completa.

## Buscar en los archivos

Si estás buscando frases o palabras específicas dentro de tu archivo actualmente abierto, simplemente presiona `Cmd/Ctrl+F`. Se abrirá una pequeña ventana emergente debajo del símbolo de ampliación que te proporcionará las opciones comunes de búsqueda y sustitución. Simplemente escribe algo y pulsa `Enter` repetidamente para recorrer los partidos. Pulsa `ESC` o haz clic fuera de la ventana emergente para cerrar la búsqueda.

> **Pista**: También puedes utilizar potentes expresiones regulares para la búsqueda. Zettlr por defecto realiza una búsqueda básica, pero cuando se detecta una expresión regular (es decir, su búsqueda está encapsulada con barras oblicuas), realizará una búsqueda RegExp. Una vez que Zettlr haya detectado una expresión regular, el cuadro de búsqueda cambiará su fuente a mono-espacio para ayudarle a escribir tu expresión regular. Para buscar todos los dígitos, por ejemplo, buscarías por `/\\d+/`. [Más información sobre las expresiones regulares en JavaScript aquí.] (https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91) 

Si pulsas `Enter` mientras la entrada de reemplazar está enfocada, Zettlr reemplazará el resultado de la búsqueda actual y automáticamente resaltará la siguiente ocurrencia de tu término de búsqueda. Pulsa `Enter` repetidamente para reemplazar múltiples ocurrencias. Si quieres reemplazar todas las ocurrencias a la vez, puedes pulsar `Alt+Enter` mientras que la entrada de reemplazo tiene el foco.

Por supuesto, también puedes utilizar la búsqueda en las ventanas de `Quicklook` (vista rápida). Por lo tanto, simplemente haz clic en el contenido del Quicklook que quieres buscar (para darle enfoque y evitar que `Cmd/Ctrl+F` desencadene la búsqueda en tu archivo principal) y pulsa `Cmd/Ctrl+F` para comenzar la búsqueda.

## Buscar globalmente

El aspecto más importante de la búsqueda es, de hecho, la búsqueda global que puedes activar pulsando `Cmd/Ctrl+Mayús+F`. La entrada de búsqueda en la barra de herramientas recibirá el foco, permitiéndote buscar un sub-conjunto específico de archivos en tu carpeta raíz: Sólo los actualmente visibles en el panel. Esto significa que puedes elegir qué archivos serán buscados seleccionando un directorio apropiado en la lista - ¡usa la función de filtrado para tu beneficio!

Si quieres buscar todos los archivos _todos_ a la vez, selecciona una carpeta raíz. Si sólo quieres buscar en una carpeta específico, selecciónalo antes de realizar la búsqueda. En la mayoría de los casos tienes una idea de dónde se encuentra el texto que necesitas. Por ejemplo, si estás buscando una cita sobre un determinado tema que puede ser citado en la investigación científica, es posible que no quieres buscar en todos tus pensamientos e ideas, sino limitar tu búsqueda al directorio donde almacena tus extractos de textos y documentos científicos.

La búsqueda en sí misma es bastante poderosa. Puedes utilizar varios operadores diferentes para especificar exactamente lo que estás buscando:

* **Operador `Y`:** Escribe `Barco Nave` para mostrar sólo los archivos que contengan _ambos_ términos "barco" **Y** "nave". Cada espacio se interpreta como "Y".
* **Operador `O`:** Escribe `Barco | Nave` (| es la pleca o barra vertical (partida), insertado por `Alt+7` en macOS o `AltGr+<` en otros sistemas) para seleccionar todos los archivos que contengan _tanto_ la palabra "barco" **O** la palabra "barco". * Escribe `"Barco Nave"` para buscar en tus archivos esa frase exacta.

Por supuesto, puedes encadenar a todos estos operadores. Así que puedes buscar `"Barco Nave" | embarcación capitán` para mostrar sólo los archivos que contengan la frase exacta "Barco Nave" o la palabra "embarcación", y que también incluyan la palabra "capitán".

No te preocupes si no recuerdas la palabra completa que estás buscando: Zettlr intentará hacer coincidir los términos de búsqueda también con palabras parciales, por lo que la palabra "cha" también coincidirá con "**chacha**chá" así como con "salchi**cha**", al igual que la frase "chicha" también coincidirá con "**chicha** y nabo" o "sal**chicha** con mostaza". **Las búsquedas no distinguen entre mayúsculas y minúsculas. Así que no tienes que preocuparte por los pequeños errores tipográficos que puedas tener en algunos archivos.

Mientras Zettlr está buscando, mostrará un indicador de búsqueda a la derecha del cuadro de búsqueda. Una vez hecho esto, coloreará todos tus archivos. Cuanto más verdosos sean, más relevantes serán (es decir, más coincidencias de alta calidad habrá dentro de ese archivo). Este es un tipo de **mapa de calor para los resultados de búsqueda** que te permite identificar fácilmente los archivos relevantes para tu búsqueda.

> Ten en cuenta que Zettlr ocultará todos los archivos en los que los términos de búsqueda nunca coincidieron, así como todos los directorios.

Para lograr mejores resultados, Zettlr sopesará los diferentes tipos de partidos de forma diferente. Por ejemplo, una coincidencia exacta en el título puede ser una señal de que el archivo es muy relevante para ti. Por lo tanto, Zettlr evaluar esto como más "pesado" que otras coincidencias. Además, si un término de búsqueda ha coincidido entre mayúsculas y minúsculas, esta coincidencia recibirá una mayor puntuación que si el término sólo ha coincidido entre mayúsculas y minúsculas (es decir, hubo una diferencia en la capitalización).

Para encontrar el lugar exacto donde tu búsqueda coincidió, selecciona un archivo y Zettlr automáticamente resaltará todas las coincidencias en amarillo brillante fácil de encontrar. Además, la barra de desplazamiento a la derecha de la ventana mostrará marcadores para indicar en qué posiciones del documento se encuentran los términos de búsqueda.

## Salir de la búsqueda global

La búsqueda global es en muchos sentidos persistente. De esta forma, podrás recorrer los resultados de tu búsqueda sin tener que temer que cualquier acción pueda salir accidentalmente de la búsqueda. Esto es especialmente útil en listas de archivos enormes, donde la búsqueda puede tomar su tiempo. No obstante, _hay_ maneras de salir de una búsqueda global.

Realiza una de las siguientes acciones para salir de la búsqueda y volver a mostrar todos los archivos regularmente:

* Mientras la entrada de búsqueda está enfocada, pulsa `ESC`. (Puedes re-enfocarla con `Cmd/Ctrl+Mayús+F`)
* Haz clic en el `x` a la derecha del cuadro de búsqueda.
* Selecciona una carpeta diferente en la vista de árbol.