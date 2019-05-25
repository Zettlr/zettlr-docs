# Citar con Zettlr

A partir de la versión`1.0.0` es posible citar las fuentes directamente usando Zettlr. Esta característica hace que escribir trabajos académicos sea mucho más fácil que en el pasado ya que no tienes que eludir la función de exportar de Zettlr para citar otros trabajos académicos, sino usarlo directamente.

Citar en Zettlr se hace usando `citeproc-js`, una biblioteca que funciona exactamente como el motor de Citeproc de Pandoc o como Zotero. Lo que veras en Zettlr entonces, corresponderá con lo generan los plugin de Zotero para Word o para LibreOffice. El motor de citas de Zettlr está compuesta de tres componentes: Una biblioteca CSL JSON que contiene todos los elementos que se pueden citar, de manera opcional una ficha de estilo CSL (CSL stylesheet) que puede alterar el estilo por defecto de citas (se trata de APA, la [Asociación Americana de Psicología, 6a edición](https://www.apastyle.org/manual/index)) y un motor de prevista. Esta guía te ayudará a habilitar citas y a producir archivos de aspecto atractivo (¡no solo PDF!) que contengan citas correctas y coherentes.

## Habilitar Citas en Zettlr

Hay dos motores diferentes con referencia al área de las citas: la vista previa (se pueden prever citas simplemente como texto o imágenes) y el proceso en sí de generar citas (es lo que pasa durante la exportación solo). Ambas funciones se activan seleccionando un archivo base de datos de biblioteca tipo CSL JSON que contiene referencias. Sin dicha biblioteca Zettlr todavía produce una vista previa (para que veas que parte activara el motor Citeproc de Pandoc), pero Zettlr no reemplazara el contenido de las citas con citas generadas. Ademas, si no precisas dicha biblioteca, Zettlr _no_ ejecutará Pandoc con su motor Citeproc y por lo tanto no analizará las citas.

Entonces, el primer paso es crear tal archivo. Zotero es la aplicación recomendada para administrar tu biblioteca, así que este tutorial te enseñará como usar Zotero.  Si usas otro programa, por favor comprueba como exportar al formato CSL JSON desde tu software.

### Paso 1: Instalar BetterBibTex

El primer paso es instalar el [plugin BetterBibTex para Zotero](https://github.com/retorquere/zotero-better-bibtex/releases/latest). El beneficio principal de este plugin es que mantiene las mismas IDs únicas de tus citas en toda tu biblioteca, de manera continua. Cada elemento de cita tiene su ID única. Esto es necesario, por ejemplo, para que cuando te des cuenta, de que la fecha de la publicación ha sido guardada incorrectamente, puedas cambiarla fácilmente en Zotero y Citeproc usará la información correcta. Si no utilizas BetterBibTex, puede ser que IDs están asignadas varias veces y así o provocan un error (algo bueno, ya que sabes que algo no está correcto) o puede que sólo se utiliza la primera correspondiente ID encontrada (algo malo, porque de este modo sólo vas a encontrar la cita incorrecta con suerte después de exportar el texto).

Te animamos jugar un poco con los ajustes de BetterBibTex después de su instalación (p. ej. como generar IDs).

> **¡Atención!** Hay dos comportamientos no documentados de BetterBibTex. Primero, las variables disponibles que puedes usar para generar tus propias IDs de cita. Se encuentra sólo en [documentación JabRef](http://help.jabref.org/en/BibtexKeyPatterns). Segundo, BetterBibTex usará automáticamente letras de A a Z para generar citas únicas del mismo autor del mismo año  (p. ej. vas a ver citas como `Harvey2005a`, `Harvey2005b`, `Harvey2005c`, etc.).

### Paso 2: Exportar tu biblioteca

El paso siguiente trata de exportar tu base de datos de biblioteca. La tarea de Zotero es de administrar tus referencias, pero citarlas es aún otra cosa que se hace por Citeproc. Para eso, Citeproc necesita un archivo separado.

Para exportar tal biblioteca que se puede usar con ambos Zettlr y el Citeproc de Pandoc, elige primero la colección que quieres exportar en la barra izquierda. Para tener a tu disposición toda to biblioteca y para no tener que exportar varias bibliotecas, elige tu biblioteca completa. (_Como medida: Hemos comprobado bibliotecas con más o menos 700 entradas sin experimentar cualquier problemas de performancia._)

![Exportar tu Biblioteca como Better CSL JSON](../img/export-to-csl-json.png)

Luego, haz clic en `Archivo` y elige `Exportar biblioteca...`. Como formato de exportación, elige `Better CSL JSON` (si no tienes BetterBibTex instalado puedes usar `CSL JSON`). Si marcas la casilla "Keep updated" ("Mantener actualizado"), BetterBibTex se asegurará de que cada cambio en Zotero será exportado automáticamente a dicho archivo separado para quedar en sincronización con Zotero (y, por lo tanto, los cambios serán trasmitidos automáticamente a Zettlr, que a su vez citará correctamente). 

Si marcaste la casilla puedes comprobar el estado de tu biblioteca por abrir los ajustes de Zotero, eligir la pestaña `BetterBibTex`, seleccionar `Exportar Automáticamente`, lo que permitirá ajustar mejor que se exportará y cuando.

### Paso 3: Abrir tu biblioteca en Zettlr

Ahora es el momento de importar tu biblioteca a Zettlr. Simplemente abre los ajustes de Zettlr, elige la pestaña `Exportar` y haz clic en el pequeño icono de una carpeta, al lado de `Base de datos CSL JSON`. Un dialogo aparecerá que te permite navegar a tu archivo de base de datos. Apunta al archivo, guarda tus preferencias y Zettlr cargará automáticamente la base de datos. ¡Estas listo para citar!

![Apunta Zettlr a tu base de datos](../img/settings_export.png)

## Citar en Zettlr

Citar en Zettlr es muy fácil. Zettlr soporta la sintaxis del motor de citas Citeproc de Pandoc, así que tendrás dos opciones para escribir citas. Primero, puedes dejar un identificador en cualquier lugar de tu texto para hacer una cita con esta clave. Debería verse algo como esto: `@Harvey2005a`. Todas las claves de citas empiezan con `@` seguidos por la clave de cita.

Zettlr consta con una función de autocompletar que te presentará una selección de claves disponibles en el momento que escribas el carácter `@`. Esto es la primera comprobación si usas la correcta ID: Si Zettlr no te ofrece nada, es probable que la ID no se ha encontrado en tu archivo de biblioteca.

Pero normalmente desearás ser algo más específico, añadir un cierto rango de páginas o algo así a tu citación. Para esto existe la cita más extensiva, encapsulada entre corchetes (`[…]`).   Una cita con denominado prefijo y un rango de paginas se escribiría así:

`[Véase @Harvey2005a, pp. 45-51]`

Para citar múltiples autores, simplemente divide los bloques con punto y coma(`;`):

`[Véase @Harvey2005a, pp. 45-51; también @Ciepley2007, pp. 8-9]`

Para saber más sobre como usar citas en linea con el motor de citas Citeproc de Pandoc, [dirígete por favor a la guía](http://pandoc.org/demo/example19/Extension-citations.html).

> **Ten en cuenta** que el motor Citeproc de Zettlr sólo sirve para **fines de previsualización**. Para mantener las cosas simples, Zettlr no analizará todas las citas y por lo tanto carecerá alguna precisión. Sin embargo, el motor de citas Citeproc de Pandoc hará su trabajo correctamente. Por lo tanto, la previsión de citas existen **sólo para comprobar que tu citas se detectan correctamente para que no te falten en la exportación**.

## Verificar las referencias

Una vez que hayas terminado de citar y quieres comprobar que has citado todo lo que planeabas hacer, puedes abrir la barra lateral de `Ver archivos adjuntos` (Acceso directo: `Ctrl/Cmd+3` o a través del icono sujetapapeles o en el menú Ver/Ver archivos adjuntos). Debajo de todos los archivos que se encuentran en la carpeta actualmente seleccionada, Zettlr mostrará una lista de todas las referencias que ha encontrado en tu archivo actual. Si falta algo de ahí, probablemente no ha sido citado en tu expediente.

![References in the Attachment Pane](../img/attachment-pane-references.png)

## Cambiar el estilo de las citas

Internamente, Zettlr siempre usará el estilo APA para generar citas. Por lo tanto, tus citas previsualizadas siempre serán "en texto", y nunca al estilo de las notas a pie de página.  Esto se entiende como una conveniencia para que simplemente veas que todo funciona correctamente.

Pero, por supuesto, también puedes utilizar diferentes estilos de citas, dependiendo de los requisitos de la revista para la que estás escribiendo o de tus preferencias personales. Para cambiar el estilo en el que el Citeproc de Pandoc mostrará tus citas, deberás descargar el archivo CSL correspondiente. Un muy buen punto de referencia es el repositorio [repositorio de estilo Zotero](https://www.zotero.org/styles). Allí puedes buscar estilos de citas específicos, previsualizarlos y descargarlos.

Puedes apuntar Zettlr a tales archivos CSL en dos puntos obvios. Primero en las preferencias generales. En la pestaña "Exportar", debajo del cuadro de texto para la base de datos de citaciones, puedes seleccionar el estilo CSL que prefieras, que se utilizará para todas las exportaciones de una sola página que exportes mediante el botón de la barra de herramientas.


Pero obviamente, para los proyectos es posible que deseas utilizar un estilo CSL diferente. Por lo tanto, si abres las preferencias de cualquier proyecto, también puedes seleccionar un archivo CSL. El proyecto lo utilizará en la exportación.

## Formatear la Lista de Referencias

Por supuesto, tan pronto como citas las obras de referencia en tus archivos, querrás que las referencias se formateen ordenadamente. Si exportas a Word o LibreOffice, puedes cambiar los estilos de formato respectivos a medida que edita el archivo antes de enviarlo. Pero tan pronto como se exporta a PDF, esto no será posible. Y como `pandoc-citeproc` simplemente pega todas tus referencias al final del documento sin ningún tipo de formato, necesitarás realizar un pequeño truco para que la lista de referencias se vea bien.

LaTeX utiliza longitudes para determinar las medidas totales del PDF exportado. Estas longitudes normalmente se establecen globalmente, pero pueden ser transformadas durante el curso del archivo fuente. Una de estas longitudes es `parindent`, que controla la sangría de todos los párrafos. Hay longitudes adicionales para cuando los párrafos siguen a un encabezado, por ejemplo, pero por ahora no nos ocuparemos de ellos.

La variable `parindent` puede ser configurada usando las opciones PDF de Zettlr, pero sólo será configurada globalmente para todos los párrafos. Como las referencias también están formateadas usando estilos de párrafo generales, se sangrarán de la misma manera que todos los demás párrafos. Pero hay un pequeño truco que puedes usar para hacer que la bibliografía se vea bien: simplemente sobreescribe las longitudes de los párrafos _después_ de tu documento, es decir: después del título `### Referencias` (o como lo llames en tu archivo).

Simplemente reajústalos a lo que te parezca mejor a ti. El siguiente fragmento de código te da un ejemplo:

```latex
\setlength{\parindent}{-1cm} % Sangría de colgado negativa
\setlength{\leftskip}{0.5cm} % Sangría general
\setlength{\parskip}{0.1cm} % Espaciado entre párrafos
```

El ejemplo anterior mostraría la bibliografía con una sangría negativa de menos un centímetro. Además, aplicará una sangría general de medio centímetro (en relación con los márgenes de la página, de modo que si el margen izquierdo de la página está ajustado a 3 centímetros, los párrafos de la bibliografía estarán desplazados 3,5 centímetros en comparación con los párrafos normales, que sólo están desplazados 3 centímetros). El último valor (`parskip`) controla el espaciado _entre_ párrafos, por lo que cada uno estará a 10 milímetros de distancia entre sí.

Simplemente comienza desde allí, tal vez busca más longitudes para ajustarlas y ajustarlas a tu gusto.
