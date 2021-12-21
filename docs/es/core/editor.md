# El editor

En el corazón de Zettlr se encuentra un poderoso editor de Markdown. Utiliza un software altamente sofisticado llamado **[CodeMirror](https://codemirror.net/)** y ofrece muchas funciones listas para usar. 

En este documento, aprenderás a escribir Markdown, los comandos disponibles, algunas características especiales de CodeMirror y cómo funciona la corrección ortográfica.
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gnRMlm3_O5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Escribiendo en Markdown

La idea detrás de Zettlr es eliminar el marcado y los estilos innecesarios de tu proceso de escritura. Durante el proceso de escritura, lo que importa es el _contenido_ que produces, no la forma en que se presenta. Por lo tanto, Zettlr te permite escribir archivos `Markdown`. Markdown es un lenguaje de marcado muy simple que solo contiene una pequeña cantidad de símbolos de formato que quizás ya conozcas. En los últimos años, cada vez más aplicaciones han descubierto el poder de Markdown, e incluso WhatsApp lo usa para permitir el formateo simple de mensajes.

Un documento de Markdown solo consta de texto puro y tiene muchos beneficios:

* Markdown es **independiente de la plataforma**. Cualquier archivo Markdown escrito en macOS puede, sin ninguna conversión, editarse tanto en Windows como en Linux. Todo lo que necesitas es un editor de texto. Y con "Bloc de notas" (Windows), "TextEdit" (macOS) o "GEdit" (Ubuntu), cada sistema operativo ya tiene uno integrado. 
* La sintaxis de Markdown está diseñada de tal manera que **incluso sin ningún resaltado de sintaxis, obtienes la idea de un documento de Markdown**. Incluso sin estilo, es fácil detectar todos los encabezados, porque tienen signos de numerales iniciales (#), las listas se indican con viñetas o números y el texto enfatizado está entre en guiones bajos o asteriscos. 
* Markdown tiene una **especificación informal abierta**, lo que significa que todos pueden implementarla en el software (¡tal como lo hicimos nosotros!) Y comenzar a construir sobre ella. Tal como está hoy, puedes **esperar que la mayoría de las aplicaciones lo entiendan**.
* Como Markdown es tan simple y no agrega ningún formato por sí mismo, cualquier aplicación puede presentar una forma diferente de obtener una vista previa. **Hay toneladas de aplicaciones de Markdown que utilizan diferentes enfoques para escribir**. Si Zettlr no se ajusta a tus necesidades, siempre puede elegir entre una gran cantidad de diferentes aplicaciones libres de código abierto.
* Los documentos de Markdown solo necesitan formatearse para ayudar a las aplicaciones a entenderlo. Por lo tanto, **los documentos de Markdown son aproximadamente diez veces más pequeños que los formatos de procesador de texto convencionales**.
* Y muchas más …

> Si deseas saber exactamente qué puede hacer Markdown y qué no, consulta la [**sección de Markdown**](../ reference / markdown-basics.md).

## Editando texto

Editar texto con Zettlr es simple. Solo cree un nuevo archivo o seleccione uno existente, haga clic dentro del editor y comience a escribir. Use el formato de Markdown cuando lo necesite y use algunos atajos que facilitan aún más incluir formatos:

* `Cmd/Ctrl+B`: Pone el texto en **negrita**
* `Cmd/Ctrl+I`: _Enfatiza_ el texto
* `Cmd/Ctrl+K`: Crea un nuevo `[enlace](https://www.zettlr.com)`. El texto seleccionado se convertirá en la descripción; solo necesita agregar la URL. Y si hay una URL válida en el portapapeles, Zettlr incluso la toma como una URL, lo que significa que no tienes que hacer nada.
* `Cmd/Ctrl+Shift+I`: Inserta una imagen. Si seleccionó texto, se convertirá en la descripción de la imagen. Simplemente agregue una ruta a su imagen o copie una ruta a una imagen. ¡Entonces, Zettlr agregará automáticamente la ruta recortada!
* `Tab`: Incluye sangría a cualquier lista dada en un nivel.
* `Shift-Tab`: Quita la sangría de la lista un nivel.

Por supuesto, todos los demás atajos predeterminados que funcionan en cualquier editor de texto también funcionarán por defecto: Copie el texto con `Cmd / Ctrl + C`, insértelo con` Cmd / Ctrl + V` o córtelo presionando `Cmd / Ctrl + X`. Deshacer y rehacer también es compatible con la eliminación de palabras o líneas completas. Simplemente escriba como suele escribir.

## Preservación de formatos durante copiar y pegar

Por supuesto, es obligatorio que también pueda trabajar con texto formateado. Por ejemplo, es posible que desee pegar texto formateado de un documento de Word o una página web. Para hacerlo, simplemente copie dicho texto y péguelo. Zettlr detectará automáticamente que es texto formateado y lo convertirá antes de insertarlo. Si no desea pegar el texto con formato sino como texto sin formato, mantenga presionada la tecla `Shift` al pegar. Esto le dirá a Zettlr que no convierta el texto a Markdown.

A continuación, en algún momento querrás copiar un texto de Zettlr pero de una manera que otras aplicaciones puedan entender su formato. Para copiar el texto no como Markdown, sino con un formato común, debes seleccionar "Copiar como HTML". El atajo es `Cmd / Ctrl + Alt + C`.

> Consulta la sección sobre [Atajos](../ reference / keyboard-shortcuts.md), para obtener una lista de todos los atajos disponibles. 

## Características especiales de CodeMirror

Debido a que CodeMirror es tan poderoso, también hay otras excelentes opciones que puede utilizar (si las necesita).

* Presione `Cmd` (macOS) o`Alt` (Windows / Linux) y haga clic en algún lugar del texto. ¡Ahora tendrás **dos cursores** a tu disposición! Esto es sobre todo útil si está a punto de escribir un texto varias veces para ahorrar tiempo. Para salir de ese modo de cursor múltiple, simplemente haga clic en cualquier parte del texto sin presionar las teclas modificadoras.
* Presione `Cmd` (macOS) o` Alt` (Windows / Linux) y seleccione un texto. Ahora puede **seleccionar varias porciones de texto** a la vez. Esto es útil si desea crear dos o más enlaces a la vez: simplemente seleccione las partes de texto que deberían servir como descripción de estos enlaces y presione `Cmd / Ctrl + K` para transformar todas las selecciones en enlaces, ¡a la vez! Esto funciona con todos los demás comandos, como poner el texto en negrita o cursiva, o crear comillas.
* Si no tienes nada seleccionado, presionar `Cmd / Ctrl + X` **cortará la línea completa**. Al presionar `Cmd / Ctrl + V` luego **insertará toda esta línea sobre la línea, en la que está el cursor**.
* CodeMirror **cierra automáticamente las comillas y los corchetes** para ahorrarle tiempo. Siempre que escriba un carácter `" `o` (`, se le presentará automáticamente el carácter de cierre. Y cuando haya terminado con su cita, simplemente escriba` "` o `)`, _no añadirá el carácter a segunda vez_ ¡pero simplemente "salta" sobre él! Esto también funciona con texto seleccionado. Si tiene algo seleccionado y presiona uno de estos caracteres, encapsulará su selección con el par de caracteres.

## Modo de edición de Emacs

Algunas personas prefieren una forma diferente de insertar texto en el editor y, por lo tanto, les gusta usar las combinaciones de teclas de Vim o Emacs. Este modo de entrada se puede activar en la [configuración](../ reference / settings.md) y le permite insertar texto de forma diferente a lo normal. Esta configuración se recomienda solo para usuarios avanzados.

> Tuvimos que deshabilitar el modo VIM incorporado de CodeMirror ya que no funciona actualmente. Si desea que vuelva a funcionar, consulte el [repositorio oficial de CodeMirror](https://github.com/codemirror/CodeMirror/).

## Corrección ortográfica

Zettlr también incluye corrección ortográfica. En sus Preferencias, puede seleccionar todos los idiomas que se deben verificar en su texto. Zettlr se moverá a través de todos los diccionarios para verificar una palabra, y solo si ninguno de los diccionarios cargados puede encontrarla, se marcará como incorrecta con una pequeña línea discontinua.

Para corregir una palabra, simplemente haga clic con el botón derecho y seleccione una sugerencia en el menú contextual, si hay alguna. También puede agregar una palabra a su diccionario personalizado.

¿Estás escribiendo bilingüe? ¡No hay problema! Simplemente cargue todos los diccionarios en los que pueda escribir texto para compararlos con todos los idiomas a la vez. Solo recuerde que los diccionarios pueden consumir mucha memoria, por lo que si carga demasiados, puede ralentizar la aplicación. Recomendamos como máximo tres diccionarios a la vez.

> **Tip**: Para deshabilitar el corrector ortográfico por completo, simplemente desmarque todos los diccionarios en las preferencias.


## Trabajando con notas a pie de página

Las notas al pie son algo muy difícil en Markdown, porque requieren algunos caracteres especiales para realizarlas, y también necesitan que trabaje en dos posiciones en el documento a la vez: donde desea colocar su nota al pie y en la parte inferior, donde el texto de referencia aparece. Zettlr hace todo lo posible para aliviar este dolor de cabeza con las siguientes maneras:

1. Puede utilizar un atajo para colocar notas al pie: `Cmd + Alt + R` (macOS) o` Ctrl + Alt + F` (macOS / Windows / Linux).
2. El texto de referencia (es decir, el contenido de la nota al pie de página) se mostrará en el extremo inferior de la ventana del editor cuando pase el cursor sobre una nota al pie.
3. Si hace `Cmd` o` Ctrl` y click en el enlace de una nota al pie en algún lugar de su texto, aparecerá una ventana emergente que le permitirá editar la nota al pie en su lugar. Una vez que haya terminado de editar su nota al pie, simplemente presione `Shift + Enter` para cerrar la ventana emergente y reemplazar el texto de la nota al pie.
