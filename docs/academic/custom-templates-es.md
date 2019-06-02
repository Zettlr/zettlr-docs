# Custom Templates

Mientras que [CSS personalizado](../core/custom-css-es.md) es una gran manera de personalizar Zettlr a tu manera en cambiar el aspecto de la app, no hace que tus documentos escritos/exportados sean realmente tuyos. Una vez que termines de escribir, la estética importa tanto como el contenido. Tus ideas valen mucho por sí solas, pero sin un gran diseño y una tipografía que te invite a leer, tus ideas sufrirán.

Quieres tu propia fuente, un buen espaciado de líneas y quizás incluso algunos colores. Mientras que las [Preferencias PDF](../reference/settings-es.md) te permiten personalizar algunos ajustes generales tanto para cada proyecto como para las exportaciones de archivos individuales, no puede hacer uso de todas las funciones que te ofrece la composición tipográfica de LaTeX. Y, vamos, [hay tan buenos ejemplos] (https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends).

Afortunadamente, uno de los principios fundamentales de la filosofía de Zettlr es no sólo darte la mayor cantidad de libertad para usar herramientas como Pandoc y LaTeX para tu beneficio, sino que también hace que funcione _bien_ para ti. Esta página está pensada para darte una introducción al uso de plantillas LaTeX personalizadas para tu trabajo, de modo que tanto tu escritura como el producto final sean aptos para la presentación!

## Consideraciones previas

Antes de empezar a escribir tus propias plantillas LaTeX personalizadas, deberíamos dedicar unas palabras a lo que sucederá en la exportación. El motor de exportación de Zettlr es una poderosa pieza de software que realiza una variedad de tareas antes de entregar tus documentos a Pandoc para los pasos finales. Es de cierta importancia saber lo que Zettlr hará con tus documentos para asegurar una output (resultado) consistente y evitar problemas y problemitas, especialmente una vez que hayas realizado plantillas más avanzadas. Este capítulo está dedicado a explicar todos los pasos que Zettlr realizará en tus proyectos y exportaciones de archivos antes de entregarlos a Pandoc (que a su vez entrega el archivo a LaTeX).

### 1. Concatena todos los archivos de entrada (sólo se aplica a proyectos)

Si estás exportando un proyecto, Zettlr primero realizará una tarea simple: concatenará todos tus archivos de la forma en que se muestran en la lista de archivos y los escribirá en un solo archivo temporal. Para ello, leerá en el directorio del proyecto de la misma manera que lo hará la lista de archivos (preservando así el orden), y leerá en los archivos. Durante este paso, **se realizarán dos operaciones en la fuente del marcado Markdown**:

1. Todas las rutas de imagen se convertirán en imágenes absolutas. Esto es por razones de seguridad, ya que LaTeX no podrá exportar si las rutas de imagen no son absolutas (ya que el CWD de LaTeX no será el que contenga tu archivo Markdown). De esta manera, puedes usar rutas relativas en cualquier lugar sin tener que preocuparte por lo que LaTeX les hará.
2. Hacer que todas las notas al pie de página sean únicas. Cada uno de tus capítulos comenzará con la nota al pie número 1. Por lo tanto, en la mayoría de los casos tendrá notas a pie de página duplicadas que podrían no exportarse o, lo que es peor, se utilizará uno de los duplicados, mientras que los demás se omitirán. Zettlr hace que las notas a pie de página sean únicas al preparar el valor hash interno del archivo. Así que de un `[^1]`, Zettlr creará, por ejemplo `[^1934976181]`. De esta manera, cada nota al pie de página será única.

A continuación, guardará el archivo resultante en el directorio temporal e iniciará el exportador, que nos llevará al paso 2.

### 2. Leer en el fichero fuente

Lo obvio para Zettlr es leer en tu archivo fuente. Es el archivo que quieres exportar rápidamente usando la función "Compartir", o el archivo concatenado generado desde tu proyecto. Al leer el archivo, hará que todas las rutas de imagen sean absolutas (esto no sucederá si está exportando un proyecto, ya que las rutas de imagen ya son absolutas).

A continuación, reemplazará todas las etiquetas, si has marcado la opción correspondiente en las preferencias. En este paso, también tratará tus enlaces de Zettelkasten (fichero), si procede. Eliminará los caracteres de formato del enlace (`[[` y `]]` por defecto) o lo eliminará por completo. Si has desactivado esta función, dejará los enlaces intactos. Además, si has especificado la opción correspondiente, eliminará todos los identificadores.

Esta es la razón por la que la función "Strip IDs" (eliminar IDs) está desactivada de forma predeterminada: debido a la naturaleza de los IDs predeterminados, que consisten sólo en números, también haría que algunos tipos de enlaces web quedaran inutilizables.

Una vez preparado el archivo, se guardará en una ubicación temporal.

### 3. Preparar la plantilla

Después de que el archivo esté listo, Zettlr leerá en la plantilla y la escribirá en un archivo temporal. En este paso, se reemplazarán varias variables dentro de la plantilla. Estos son los siguientes:

- `$PAGE_NUMBERING$`: La numeración de página que has elegido en las preferencias de PDF, por ejemplo, Números tradicionales (no romano).
- `$PAPER_TYPE$`: El formato de papel que has elegido, por ejemplo, "a4paper".
- `$TOP_MARGIN$`: El margen superior de la página que has proporcionado (por ejemplo, 3 cm).
- "$RIGHT_MARGIN$": El margen derecho de la página que has proporcionado (por ejemplo, 3 cm).
- `$BOTTOM_MARGIN$`: El margen inferior de la página que has proporcionado (por ejemplo, 3 cm).
- `$LEFT_MARGIN$`: El margen izquierdo de la página que has proporcionado (por ejemplo, 3 cm).
- `$MAIN_FONT$`: La fuente principal (para la mayoría del texto) que has proporcionado (por ejemplo, Times New Roman)
- `$SANS_FONT$`: La fuente secundaria (principalmente para los encabezados) que has proporcionado (por ejemplo, Arial)
- `$LINE_SPACING$`: El espacio entre líneas, que has proporcionado (por ejemplo, 150 %).
- `$FONT_SIZE$`: El tamaño de la fuente que has proporcionado (por ejemplo, 12pt).
- `$PDF_TITLE$`: El título del PDF (ya sea el nombre del archivo o personalizado, si se exporta un proyecto).
- `$PDF_SUBJECT$`: El asunto del PDF.
- `$PDF_AUTHOR$`: La meta información del autor del PDF.
- `$PDF_KEYWORDS$`: Palabras clave para el archivo PDF.
- `$TITLEPAGE$`: Si estás exportando un proyecto con la opción de la página de título activada, ya sea una cadena vacía o un `\\maketitle\n\\pagebreak\n`.
- `$GENERATE_TOC$`: Sea una cadena vacía o un contador a profundidad `\\setcounter{tocdepth}{&lt;number&gt;}\n\\tableofcontents\n\\pagebreak\n`, si estás exportando un proyecto con la opción marcada para generar una tabla de contenidos. `&lt;number&gt;` será reemplazado por el nivel (1 a 6).

Estas variables serán reemplazadas de manera global, lo que significa que si la variable `\$PDF_AUTHOR$` se encuentra varias veces en la plantilla, será reemplazada cada vez.

### 4. Preparar la exportación de PDF

Ahora, con los archivos preparados, Zettlr rellenará previamente las variables de comando que serán alimentadas al motor de Pandoc. En este paso, la plantilla LaTeX preparada se añadirá a las banderas de comando. Si no hay una plantilla personalizada, Zettlr utilizará su plantilla predeterminada, [que puedes encontrar aquí] (https://github.com/Zettlr/Zettlr/blob/master/source/main/assets/export.tex). La plantilla predeterminada de Zettlr es una adaptación de la plantilla predeterminada de Pandoc ([encuentrala aquí](https://github.com/jgm/pandoc/blob/master/data/templates/default.latex)), con muchos de los edulcorantes adicionales eliminados para lograr la máxima compatibilidad.

Muchos de los comandos en la plantilla predeterminada de Pandoc requieren paquetes LaTeX adicionales. La plantilla PDF de Zettlr se esfuerza por lograr la máxima compatibilidad, no para PDFs perfectos, para no confundir a los usuarios que sólo necesitan lo básico.

### 5. ¡Ejecutar el comando!

Ahora, con todas las pre-condiciones cumplidas, Zettlr finalmente ejecutará el comando Pandoc. Le pasará el archivo de entrada temporal, así como el archivo de plantilla temporal, y le permitirá hacer su trabajo. En caso de que hayas decidido crear un índice de contenidos, se le pedirá a Pandoc que genere uno. Esto significa que, internamente, Pandoc ejecutará el binario de XeLaTeX **dos veces**. Esto se debe a que el comando XeLaTeX necesita construir un PDF para saber dónde terminan los encabezados con todo el espaciado aplicado, y luego necesita construirlo de nuevo, sólo que esta vez con el índice incluido.

Es de suma importancia mantener la bandera ToC en el comando Pandoc (que puedes editar en la pestaña Avanzada de las preferencias), ya que si la quitas, el índice de contenidos no se incluirá independientemente de la opción establecida en la configuración del proyecto.

Después de que el comando se haya ejecutado con éxito, Zettlr le dirá a tu sistema operativo que abra el archivo, por lo que será como si hubieras hecho doble clic en el archivo final. Esto significa que se abrirá con el lector de PDF predeterminado (o con el editor de documentos de Word, si has elegido exportar a Word, por ejemplo). Si Pandoc salió con un error, este error se le mostrará utilizando un cuadro de diálogo de error extendido desde el que también puede copiar el error para que lo puedas buscar en Google.

Atención: **Si LaTeX devuelve un mensaje de error, se te mostrará la salida completa de la consola, lo cual es—la mayor parte del tiempo—ambos muy verboso y también vacío y por eso puede frustrar mucho. Por ejemplo, si simplemente falta un paquete LaTeX, emitirá una larga lista de mensajes de error donde necesita localizar el `Archivo &lt;nombre-paquete&gt;.sty falta`. Como regla general: Si no utilizas una plantilla personalizada ni utilizas ningún material LaTeX en tu archivo Markdown, y _todavía_ experimentas un error, esto indica un problema con la plantilla por defecto. En este caso, por favor repórtalo. En otros casos, por favor consulta primero los foros de ayuda de LaTeX o Pandoc.

## Introducción a las plantillas

¡Ahora es el momento de empezar a construir una plantilla! Puedes usar un editor externo para escribir tu plantilla LaTeX antes de apuntarle a Zettlr. Pero, por supuesto, sería bueno que sólo pudieras editar tus plantillas LaTeX desde Zettlr, ¿verdad?

![Crea archivos TeX añadiendo la extensión apropiada](../img/create_tex_file.png)

Hombre, tenemos buenas noticias. Si creas un nuevo archivo, pero **provees como la extensión `.tex`**, ¡Zettlr no creará un archivo Markdown sino un archivo LaTeX real! Este archivo se indicará con un pequeño indicador `TeX` en la lista de archivos (si el archivo meta está activado) y puede ser editado desde Zettlr. ¡Hurra!

![Zettlr con un archivo TeX abierto](../img/zettlt_tex_file.png)

Zettlr detectará automáticamente si es un archivo LaTeX e incluso cambiará el código de Markdown a LaTeX para ayudarte a escribir el archivo!

## Contenidos necesarios

Aparte de las cosas usuales de LaTeX, hay algunas cosas que necesitan estar presentes en tus archivos. Recuerda que los archivos serán pasados a través de un filtro dentro de Zettlr, luego Citeproc (si es aplicable), y luego Pandoc, antes de ser pasados al motor LaTeX. Por lo tanto, opcionalmente puedes omitir todas las variables específicas de Zettlr, pero una variable debe estar presente en todo momento:

```
$body$
```

Esta variable será reemplazada dentro de Pandoc con el contenido analizado de tu(s) archivo(s) Markdown. Si lo dejas fuera, tu contenido será pegado en el olvido, así que asegúrate de no olvidarte nunca de colocar esta variable donde debería terminar tu contenido!

Esto también significa que mientras que la plantilla predeterminada de Zettlr omite muchas variables de la plantilla predeterminada de Pandoc, eres libre de incluirlas todas por tu cuenta. Puedes hacer uso de la matriz completa de las variables de Pandoc, y de las variables de Zettlr—o simplemente dejarlas fuera. Aquí es donde las plantillas se vuelven verdaderamente poderosas.

## Hackear tus Plantillas

Ahora pasemos a las cosas divertidas. Con el tiempo, Zettlr ha incorporado más y más opciones para afinar tu control sobre el proceso de exportación. Esto significa que puedes hacer cosas divertidas con Zettlr. Por ejemplo, puedes eludir completamente todas las cosas buenas que el motor de exportación hace con sus archivos (excepto el análisis de los archivos de origen) simplemente cambiando el comando Pandoc en tus preferencias a uno fijo.

Lo que también podrías hacer es colocar variables Pandoc dentro de tus variables Zettlr (por ejemplo, configurar el autor PDF en tus preferencias a algo que incluya una variable Pandoc). Entonces, una vez que Zettlr ha pasado por encima de tu archivo, Pandoc reemplazará su propia variable después de que la variable Zettlr haya sido reemplazada.

Y si realmente te apetece hackearlo todo, echa un segundo vistazo al comando Pandoc. Si miras de cerca, puedes ver que delante del comando está escrito `pandoc`. ¿Sabes lo que esto significa? Puede que lo hayas adivinado: El comando de Pandoc no es sólo algo que se pasará a Pandoc, ¡sino que es el **comando completa de consola que se ejecutará**! Lo que esto significa ahora debería ser obvio: ¡puedes ejecutar algunos scripts personalizados y lógica antes y después de que se ejecute el comando de Pandoc!

Supongamos que quieres pasar el archivo Markdown temporal a un script personalizado para realizar aún más acciones, y después mover el archivo a otro lugar? Considera la siguiente adaptación del comando Pandoc en las preferencias:

```shell
pandoc "$infile$" -f markdown $outflag$ $tpl$ $toc$ $tocdepth$ $citeproc$ $standalone$ --pdf-engine=xelatex -o "$outfile$" &amp;&amp; cp "$outfile$" /Usuario/zettlr/Escritorio/VersiónFinal.pdf
```

Este comando copiará el archivo de salida final al Escritorio del usuario ficticio "zettlr" y lo llamará "VersiónFinal.pdf" (asumiendo que se ejecuta en macOS). En lugar de usar un simple comando de shell (intérprete de comandos) como `cp` (para copiar archivos etc.), también puedes pasar scripts completos que se ejecutarán después. ¡El cielo es realmente el límite!

## Pensamientos finales

Zettlr se esfuerza por dar a sus usuarios el control total sobre lo que pueden hacer con sus archivos. Lo que hemos descrito en esta página es sólo el comienzo. No hemos intentado volvernos locos nosotros mismos, pero realmente puedes hacer grandes cosas. ¿Cómo usas las posibilidades de Zettlr para hacer cosas raras? Tell us on [Twitter](https://www.twitter.com/Zettlr), the [Forum](https://forum.zettlr.com/), or on [Reddit](https://www.reddit.com/r/Zettlr)!

