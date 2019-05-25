# Fundamentos de Markdown

Al igual que muchas otras aplicaciones, Zettlr hace uso de `Markdown`, originalmente inventado por [John Gruber](https://daringfireball.net/). Por supuesto, a lo largo de un período de tiempo tan largo, se han producido una gran cantidad de desarrollos que han creado las posibilidades de las aplicaciones modernas de Markdown. En este documento se tratan los siguientes temas:

1. [Una breve historia de Markdown](#Una-breve-historia)
2. [Dialectos de Markdown](#Dialectos-de-Markdown)
3. [Como Zettlr implementa Markdown](#Zettlr-y-Markdown)
4. Markdown 101: Encabezados, elementos de bloque, elementos en línea, enlaces, imágenes y notas a pie de página](#Markdown-101:-Los-códigos-más-importantes)
5. [Más recursos](#Recursos-Markdown)

***

## Una breve historia

Desde que el ordenador personal se hizo ampliamente disponible en la década de 1990, había dos grupos de formatos que coexistían: los documentos de procesador de texto, como `.doc`, o `.odt` y los documentos de código, como `.js`, `.cpp` o `.py`. Ambos grupos de documentos contienen texto legible por el ser humano, pero había una diferencia simple no obstante enorme: Mientras que los archivos JavaScript o C++ contenían texto plano (es decir, sólo el texto que se veía al abrir un archivo de este tipo), los documentos del procesador de textos contenían _mucho_ más material.  Los documentos del procesador de textos siempre contienen información sobre el tamaño de la página (p. ej., A4 o letra), sobre el formato de los diferentes bloques (p. ej., la fuente de los encabezados o la cantidad de comillas de bloque que se sangran). Si abres un documento Word/Office en tu PC ahora mismo, puedes ver lo que quiero decir: Inmediatamente verás lo que es un encabezado basado en el tamaño de fuente y el peso de la fuente de su texto.

Durante mucho tiempo, estos dos grupos de documentos se mantuvieron tan distintos como sus usuarios. La mayoría de los oficinistas sólo saben cómo usar Microsoft Word o Excel, tal vez también las implementaciones de LibreOffice-, mientras que casi nadie que venga de un entorno CTIM (ciencia, tecnología, ingeniería y matemáticas) usaría voluntariamente Word o software similar. Esos científicos han escogido un camino diferente: desarrollaron un lenguaje de programación llamado LaTeX, que les permite crear archivos PDF con un formato claro a partir de un montón de códigos—siguen el mismo flujo de trabajo que los investigadores de las artes y las humanidades o los oficiales administrativos regulares, pero utilizan documentos diferentes para ello.

Cuando John Gruber inauguró Markdown en 2004, era básicamente como decir: "¿Por qué no los dos?" Markdown combina la clara experiencia de lectura de documentos de procesadores de texto con los beneficios de los documentos de código de software, que son versátiles y fáciles de usar, incluso para personas que sólo saben cómo manejar Word o Writer. Un pequeño ejemplo: Mientras que en los procesadores de texto se crearía un encabezado escribiendo "algo de texto" y luego seleccionando el formato `Título 1` de algún menú, en Markdown simplemente se escribiría `# algún texto`, donde el símbolo almohadilla se lo indica inmediatamente: "¡Este es un encabezado de primer nivel!"

Al principio, Markdown era básicamente un pequeño script que John Gruber escribió para sí mismo para obtener estos beneficios, y contenía muchas inconsistencias y no soportaba muchos elementos diferentes. Pero paso a paso, se hicieron progresos. Dos fechas son notables:

- 2004: [John Gruber](https://daringfireball.net/projects/markdown/) lanza inicialmente Markdown
- 2012: Un grupo de desarrolladores forman [CommonMark] (https://spec.commonmark.org/) para estandarizar Markdown en una norma aceptada internacionalmente.

## Dialectos de Markdown

Hoy en día, coexisten varias implementaciones de la sintaxis de Markdown. Los más notables son:

- **MultiMarkdown**: Amplía la sintaxis inicial con notas a pie de página, tablas y algunos metadatos.
- **Markdown Extra**: De nuevo algunas adiciones a la sintaxis inicial.
- **GitHub Flavoured Markdown**: Esta es una variedad de Markdown inventada por la plataforma de alojamiento GitHub (en la que Zettlr también está alojado!) y es hoy en día uno de los dialectos más comunes.
- **Pandoc Markdown**: Pandoc Markdown es un super-conjunto de GitHub Flavoured Markdown y añade soporte para aún más elementos.
- **CommonMark**: Trata de implementar todos los elementos posibles, sin ser ambiguo. En particular, CommonMark aún no incluye una especificación para las notas a pie de página.

## Zettlr y Markdown

Zettlr en sí mismo implementa una mezcla de diferentes dialectos. El propio editor sólo destaca GitHub flavoured Markdown (más algunos elementos adicionales, lo que amplía la sintaxis de Markdown con los elementos de Zettelkasten. Éstos se describen en el [capítulo respectivo sobre el método Zettelkasten](../academic/zkn-method-es.md)). Si exportas tus documentos a HTML y no tienes Pandoc instalado, Zettlr convertirá tus documentos usando la sintaxis de Markdown de _GitHub_. Si está disponible, Zettlr utiliza Pandoc para las exportaciones, que a su vez lee tus documentos de Markdown utilizando su sintaxis _Pandoc Markdown_.

Pero Zettlr no se limita a escribir Markdown. Si lo quieres, también puede añadir comandos `LaTeX`. Estos comandos se interpretan correctamente cuando se convierte a PDF. Se omiten cuando se convierte a DOCX u ODT. Y se conservan cuando se convierte a HTML. Por supuesto, también puedes utilizar código HTML simple en cualquier posición.

## Markdown 101: Los códigos más importantes

Aunque Markdown puede hacer muchas cosas, en esta sección quiero describirte los elementos más importantes que vas a usar más, y cómo puedes usarlos en Zettlr.

#### Encabezados

Los encabezados son sencillos. Deben colocarse en su propia línea y deben indicarse con un símbolo de almohadilla. Hay seis niveles de encabezados a tu disposición:

- `# Texto de encabezado` — da un encabezado de primer orden
- `## Texto de encabezado` — da un encabezado de segundo orden
- `### Texto de encabezado` — da un encabezado de tercer orden
- `#### Texto de encabezado` — da un encabezado de cuarto orden
- `##### Texto de encabezado` — da un encabezado de quinto orden
- `###### Texto de encabezado` — da un encabezado de sexto orden—

### Formato en línea

Por supuesto, al igual que en los procesadores de texto, puedes utilizar el formato en línea, como **negrita** o texto _italic_, o texto `monospaced` (código).

- `**tu texto**` — muestra el texto en negrita
- `_tu texto_` — produce texto en cursiva
- \`tu texto\` — produce un texto mono-espaciado.

### Elementos de bloque

A veces, es posible que desees enfatizar todo un bloque de texto (como una cita más larga) o crear listas. Esto también es posible y extremadamente sencillo utilizando Markdown.

- Crea listas de ítems adelantando cada línea con un carácter `-`, un ``*` o un `+`. Si lo quieres, puedes mezclar estos símbolos!
- Las listas ordenadas necesitan números en el formato `1.` delante de ellas.

> **Note**: Los números no tienen que estar en orden. En cada exportación, el convertidor automáticamente los numerará correctamente de forma ascendente, por lo que una lista con los números de lista 1, 6, 14, 2 se mostrará como una lista usando los números 1, 2, 3, 4!

### Enlaces e imágenes

Los enlaces son elementos en línea y las imágenes son elementos de bloque, por lo que siguen la misma semántica que los elementos discutidos anteriormente. Sin embargo, merecen un poco más de atención, porque le ofrecen más opciones.

Los enlaces se establecen utilizando la siguiente sintaxis: `[Este texto aparecerá en su documento final](http://this-is-your-actual-link.tld)` Zettlr convertirá automáticamente esta sintaxis en un enlace que se puede cliquear (sige el enlace objetivo haciendo clic en él mientras tienes pulsada la tecla `ALT` o `Ctrl`) para facilitar el acceso (y para acortar esos enlaces bastante largos).

Las imágenes funcionan exactamente igual que los enlaces, excepto que comienzan con un signo de exclamación (!). Las imágenes, por supuesto, también necesitan una ruta, porque no se almacenan en un documento de texto plano. Por lo tanto, puedes utilizar tres enfoques diferentes para vincular imágenes en tu documento:

1. Utiliza una URL web absoluta, como https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1000px-Markdown-mark.svg.pngMarkdown.
2. Utiliza una ruta absoluta a un archivo en tu propio ordenador, como `C:\usuarios\Nombre-de-usuario\Imágenes\mi-imagen.jpg`.
3. Utiliza una ruta relativa a un archivo en su propio ordenador, como `../img/mi-imagen.png`.

> **Pista**: Puedes proporcionar una ruta de imagen predeterminada en la pestaña "Editor" de las preferencias, que Zettlr utilizará siempre cuando pegue una imagen en el editor.

La ruta relativa es siempre relativa al documento en el que se coloca. El directorio `...` le dice a Zettlr que busque la imagen en el directorio padre (es decir, que recorra un directorio). Si almacena tus documentos en una nube y accede a ellos en diferentes dispositivos, naturalmente usará rutas de imagen relativas, porque las rutas absolutas serán definitivamente diferentes (especialmente si trabajas con dos sistemas operativos diferentes).

**Pista**: Intenta insertar imágenes y enlaces siempre usando tus atajos, `Cmd/Ctrl+K` para los enlaces y `Cmd/Ctrl+Shift+I` para las imágenes. Si tiene una ruta de acceso válida en tu portapapeles, incluso la insertará automáticamente por ti, haciendo su vida más fácil. La mejor manera de insertar un enlace, por ejemplo, sería, por lo tanto, copiar primero el enlace a su portapapeles, luego seleccionar el texto que desea enlazar y, por último, pulsar `Cmd/Ctrl+K`. A continuación, el texto seleccionado se convertirá en el texto de enlace mostrado y el enlace del portapapeles se utilizará como destino del enlace.

### Notas a pie de página

Las notas de pie de página son lo que, por supuesto, interesa a la mayoría de los investigadores en artes y humanidades. Así que aquí hay algunas reglas generales para insertar notas a pie de página y cómo Zettlr interactúa con ellas. Según la sintaxis estándar de Markdown, las notas a pie de página requieren dos elementos: Primero la referencia en algún lugar del texto en el formato `[^x]`. La `x` representa un identificador único. Básicamente, puede utilizar cualquier cosa que quieres, siempre y cuando este identificador no sea utilizado también por una segunda nota al pie de página. Pero normalmente, querrás seguir con los números ascendentes. (También: Estos números no tienen que estar en orden, siempre y cuando exportes tu documento Markdown, Pandoc volverá a numerar automáticamente las notas al pie de página correctamente. Así que si decides borrar una nota al pie de página más tarde, no te preocupes de que los números ya no coincidan perfectamente con los del documento.)

El segundo elemento que requieren las notas a pie de página es un elemento de bloque, la nota a pie de página _texto de referencia_. Siempre está en el siguiente formato: `[^x]: Tu texto de referencia. ` Como puedes ver, el identificador es una réplica de tu referencia que aparece en el texto, sólo que ahora es seguido por dos puntos. Es de sentido común que pongas tus referencias en una lista al final de su documento. Sin embargo, este salto de ida y vuelta entre el texto de referencia y la referencia de tu nota al pie de página es engorroso, y por lo tanto Zettlr trata de aliviar tu vida. Muevas el ratón sobre una referencia de nota a pie de página para ver el texto de la nota a pie de página. Haz clic en él mientras mantienes pulsada la tecla `Alt` o `Ctrl` para editar la nota a pie de página. Presiones `Mayús+Enter` para guardar los cambios.

### Bloques de código

Zettlr también soporta los llamados "bloques de código". Éstos son la versión en bloque del elemento de código en línea. Para iniciar un bloque de código, escriba tres acentos graves "\`" en una fila en una línea vacía. Cierres el bloque de código de nuevo con tres marcas en una línea vacía. Todo lo que se encuentre entre esas dos "vallas" se renderizará utilizando una fuente mono-espacio para indicar que se trata realmente de un código.

Zettlr soporta resaltado de sintaxis para varios lenguajes de script y programación. Tienes que decirle explícitamente a Zettlr qué idioma usar simplemente añadiendo tu identificador _directamente después de la "valla" de introducción de código_. Así que para dirigir a Zettlr a resaltar una valla de código usando un intérprete de JavaScript, necesitaría comenzar el bloque de código con tres palancas traseras, seguidas directamente por la palabra "javascript" en una línea vacía.

Actualmente, los siguientes idiomas son soportados por el motor (los nombres entre paréntesis son los identificadores que necesitarías usar en Zettlr, ya que no contienen caracteres especiales, lo que podría molestar a un motor):

- C (c)
- C# (csharp)
- C++ (cpp)
- CSS (css)
- Go (go)
- Java (java)
- JavaScript (javascript)
- Kotlin (kotlin)
- LESS (less)
- Objective C (objectivec)
- PHP (php)
- Python (python)
- R (r)
- Ruby (ruby)
- SQL (sql)
- Swift (swift)
- Shell/Bash
- YAML (yaml)

Se pueden implementar más idiomas a petición del cliente. Si necesitas un idioma específico, por favor [consulte los disponibles](https://codemirror.net/mode/) y abre una incedencia (issue) en GitHub, para que sepamos cuál debemos añadir!

## Recursos Markdown

¿Quieres saber todo sobre Markdown? ¡Eso es genial! Un buen recurso que cubre todos los elementos se encuentra en [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/). Si deseas acostumbrarte a escribir Markdown limpio e inequívoco, [mira las especificaciones de CommonMark] (https://spec.commonmark.org/0.28/). Además, hay un "libro" sobre la sintaxis de Markdown estilo GitHub. [Míralo aquí] (https://gitbookio.gitbooks.io/markdown/content/).
