# Él Editor

En el fondo de Zettlr se encuentra un potente editor Markdown. Utiliza un software altamente sofisticado llamado **[CodeMirror](https://codemirror.net/)** y, por lo tanto, ofrece muchas funciones listas para usar.

En este documento, aprenderás a escribir Markdown, las funciones disponibles, algunas características especiales de CodeMirror y cómo funciona el corrector ortográfico.

## Escribir Markdown

La idea detrás de Zettlr es eliminar el marcado y el estilo innecesario de tu proceso de escritura. Durante el proceso de escritura, lo que importa es el _contenido_ que tú produces, no la forma en que se presenta. Se proporciona un poco de formato, por supuesto. Pero cuando se trata de alineaciones de texto o colores, nadie necesita muchas opciones para escribir. El formateo es lo que sucede _después_.

Por lo tanto, Zettlr te permite escribir archivos `Markdown`. Markdown es un lenguaje de marcado muy simple que sólo contiene una pequeña cantidad de símbolos de formato que tal vez ya conoces. En los últimos años, cada vez más aplicaciones han descubierto el poder de Markdown, hasta incluso WhatsApp lo utiliza para permitir un formateo sencillo de los mensajes.

Un documento Markdown sólo consta de texto puro y tiene muchas ventajas:

* Markdown es **independiente de la plataforma**. Cualquier archivo Markdown escrito en macOS puede—sin conversión—ser editado tanto en Windows como en Linux. Todo lo que necesitas es un editor de texto. Y con "Notepad" (Windows), "TextEdit" (macOS) o "GEdit" (Ubuntu) cada sistema operativo ya tiene uno incorporado.
* La sintaxis de Markdown está diseñada de tal manera que **incluso sin resaltar la sintaxis, se entiende la idea de un documento de Markdown**. Incluso sin estilo, es fácil detectar todos los encabezados, porque tienen símbolos de almohadilla (#), las listas se indican con viñetas o números y el texto enfatizado se encapsula en guiones bajos o asteriscos.
* Markdown es un **estándar de código abierto**, lo que significa que todo el mundo puede implementarlo en el software (¡igual que nosotros!) y empezar a construir sobre él. Esto también significa que puedes **esperar que la mayoría de las aplicaciones lo entiendan**.
* Como Markdown es tan simple y no añade ningún formato por sí mismo, cualquier aplicación puede introducir una forma diferente de previsualización. **Hay toneladas de aplicaciones de Markdown que utilizan diferentes enfoques de escritura**. Si Zettlr no para ti, siempre puedes elegir entre una plétora de diferentes aplicaciones gratuitas de código abierto.
* Los documentos Markdown sólo contienen lo mínimo de formato necesario para ayudar a las aplicaciones a entenderlo. Por lo tanto **¡Los documentos de Markdown son aproximadamente diez veces más pequeños que los formatos convencionales de procesadores de texto**!
* Y muchos más...

> Si deseas saber exactamente qué puede hacer y qué no puede hacer Markdown, consulta la sección[**Markdown**](../reference/markdown-basics-es.md).

## Editar Texto

Editar textos con Zettlr es fácil. Simplemente crea un nuevo archivo o selecciona uno existente, haz clic dentro del editor y comienza a escribir. Utilice el formato Markdown cuando lo necesitas y haz uso de algunos atajos que simplifican aún más la adición de formato:

* `Cmd/Ctrl+B`: Pon texto en **negrita**
* `Cmd/Ctrl+I`: _Enfatizar_ texto
* `Cmd/Ctrl+K`: Crea nuevo `[enlace](https://www.zettlr.com)`. El texto seleccionado se convertirá en la descripción—sólo tienes que añadir la URL. Y si hay una URL válida en el portapapeles, Zettlr incluso la acepta como URL, lo que significa que no tienes que hacer nada más por tu cuenta!
* `Cmd/Ctrl+Mayús+I`: Insertar una imagen. Si seleccionaste texto, se convertirá en la descripción de la imagen. Simplemente añade una ruta a tu imagen, o copia una ruta a una imagen antes a tu portapapeles. Luego, Zettlr añadirá automáticamente la ruta recortada de tu portapapeles!
* `Tab`: Sangrar cualquier lista dada en un nivel.
* `Shift-Tab`: Deshacer sangrar una lista de un nivel.

Por supuesto, todos los demás accesos directos predeterminados que funcionan en cualquier editor de texto también funcionarán de forma predeterminada: Copiar el texto con `Cmd/Ctrl+C`, insertarlo con `Cmd/Ctrl+V` o cortarlo pulsando `Cmd/Ctrl+X`. _Deshacer_ y _rehacer_ también es compatible, al igual que eliminar palabras o líneas enteras. Sólo escribe como estás acostumbrado a escribir.

## Conservación de formatos durante la copia y el pegado

Por supuesto, es obligatorio que también puedas trabajar con texto formateado. Por ejemplo, es posible que deseas pegar texto formateado de un documento de Word o de una página web. Para ello, simplemente copia el texto y pégalo. Zettlr detectará automáticamente el texto formateado y lo convertirá antes de insertarlo. Si no deseas pegar el texto con formato sino como texto sin formato, manten pulsada la tecla `Mayúsculas` al pegar (`Cmd/Ctrl+Mayús+V`). Esto le dirá a Zettlr que no convierta el texto a Markdown.

A continuación, en algún momento querrás copiar algún texto de Zettlr pero de forma que otras aplicaciones puedan entender su formato. Para copiar el texto no como Markdown, sino con un formato común, necesitas seleccionar `Copiar como HTML`.
 El acceso directo es `Cmd/Ctrl+Alt+C`.

> Consulta la sección [Accesos directos](../reference/shortcuts-es.md) para obtener una lista de todos los accesos directos disponibles.

## Características especiales de CodeMirror

Debido a que CodeMirror es tan potente, también hay otras grandes opciones que puedes utilizar (si las necesitas).

* Presiona `Cmd` (macOS) o `Alt` (Windows/Linux) y haz clic en algún lugar del texto. ¡Ahora tendrás **dos cursores** a tu disposición! Esto es muy útil si estas a punto de escribir un texto varias veces para ahorrar tiempo. Para salir de ese modo multi-cursor, simplemente haz clic en cualquier parte del texto sin pulsar las teclas modificadoras.
* Pulsa `Cmd` (macOS) o `Alt` (Windows/Linux) y selecciona algún texto. Ahora puedes **seleccionar varias porciones de texto** a la vez. Esto es útil si deseas crear dos o más enlaces a la vez: Solo tienes que seleccionar las partes de texto que deben servir como descripción de estos enlaces y pulsar `Cmd/Ctrl+K` para transformar todas las selecciones en enlaces - de una vez! Esto funciona con todos los demás comandos como hacer texto en negrita o cursiva, o crear comillas.
* Si no tienes nada seleccionado, presionando `Cmd/Ctrl+X` cortarás la línea completa**.
 Pulsando `Cmd/Ctrl+V` después **insertará toda esta línea sobre la línea en la que se encuentra el cursor**.
* CodeMirror **cierra automáticamente las comillas, paréntesis, corchetes ** para ahorrar tiempo! Siempre que escribas un `"` o un `(`, te presentará automáticamente el carácter de cierre.
 Y cuando hayas terminado con tu cita, escribe simplemente`"` o un `(`, no añadirá el carácter una segunda vez, sino que simplemente "saltará" por encima de él. Esto también funciona con el texto seleccionado. Si tienes algo seleccionado y presionas uno de estos caracteres, encapsulará tu selección con ellos.

## Corrección ortográfica

Zettlr también incluye corrección ortográfica. En tus preferencias, puedes seleccionar todos los idiomas para que tu texto sea revisado.
 Los diccionarios se cargan al inicio de la aplicación y el contenido de tu editor se comprueba con él. Zettlr se moverá a través de todos los diccionarios para verificar una palabra, y sólo si ninguno de los diccionarios cargados puede encontrarla, será marcada como errónea con una pequeña línea de puntos.

Para corregir una palabra, simplemente haz clic con el botón derecho del ratón y selecciona una sugerencia en el menú contextual, si la hay. También puedes agregar una palabra a tu diccionario de usuario.

¿Estás escribiendo bilingüe? No hay problema! Simplemente carga todos los diccionarios en los que puedas escribir texto para compararlos con todos los idiomas a la vez. Sólo recuerda que los diccionarios pueden usar mucha memoria, así que si cargas demasiadas, puede ralentizar la aplicación.

> **Pista**: Para desactivar el corrector ortográfico por completo, simplemente desmarca todos los diccionarios en las preferencias.

## Trabajar con notas a pie de página

Las notas a pie de página son algo notoriamente difícil en Markdown, porque requieren algunos caracteres especiales para realizarlas, y también necesitan que trabajas en dos posiciones en el documento a la vez: Dónde quieres poner tu nota a pie de página y en la parte inferior, donde se encuentra el texto de referencia. Zettlr hace todo lo posible para facilitarlo de las siguientes maneras:


1. Puedes utilizar un acceso directo para colocar notas a pie de página: `Cmd+Alt+R` (sólo macOS) o `Ctrl+Alt+F` (macOS/Windows/Linux).
2. El texto de referencia (es decir, el contenido de la nota a pie de página) se mostrará en el extremo inferior de la ventana del editor cuando pase el ratón por encima de una nota a pie de página.
3. Si haces `Alt`-clic o `Ctrl`-clic en un ancla de nota a pie de página en algún lugar del texto, aparecerá una ventana emergente que te permitirá editar la nota a pie de página en su lugar. Cuando termines de editar tu nota a pie de página, simplemente presiona `Mayús+Enter` para cerrar la ventana emergente y reemplazar el texto de la nota a pie de página.
