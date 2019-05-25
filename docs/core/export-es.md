# Exportar con Zettlr

La exportación de archivos es una interfaz importante entre tus notas y otras personas. Con la opción de exportación, puedes:

1. Previsualizar un archivo, por ejemplo como HTML, y también imprímirlo. (La impresión de una nota utilizando `Cmd/Ctrl+P` exportará internamente la nota a HTML.)
2. Expórtalo a un formato con el que puedan trabajar otras personas, como por ejemplo los formatos de Word u OpenDocument.
3. Expórtalo a PDF para enviarlo (por ejemplo, documentos de seminario) o, también, imprimirlo.

## Preparar las exportaciones

Todas las exportaciones en Zettlr, se realizan utilizando los paquetes de software libre Pandoc y LaTeX.
 Pandoc es necesario para todas las exportaciones, porque todo será convertido primero por él. LaTeX sólo es necesario para la exportación de PDF.

> Incluso si Pandoc no está instalado en tu sistema, podrás seguir exportando a HTML. En ese caso, Zettlr analizará internamente el archivo usando `Showdown.js`, pero esta biblioteca no soporta tantas características como Pandoc.

> Dirígete a la [guía de instalación](../install-es.md) para instalar Pandoc y LaTeX en tu ordenador.

Zettlr hará esfuerzos razonables para localizar ambos paquetes. Si la aplicación no puede localizar los binarios, se producirá un error.

**En caso de que haya instalado ambos paquetes, pero Zettlr todavía no exporta**, eche un vistazo a tus Preferencias. En la pestaña "Avanzado" hay dos cuadros de texto que te permiten introducir las rutas al ejecutable de Pandoc y al ejecutable de "XeLaTeX". Simplemente ponlas ahí, reinícia, y entonces debería funcionar. Si no, por favor, házmelo saber!

![Ajustes - Pestaña Avanzado](../img/settings_advanced.png)

## Opciones para exportar


A partir de la versión `0.17`, Zettlr te ofrece una gran cantidad de opciones para exportar documentos de acuerdo a tus necesidades. Se dividen en dos diálogos diferentes. Las opciones generales para exportar se encuentran dentro de la ventana de preferencias/ajustes. Ábrela y ve a la pestaña "Exportar". Allí hay dos secciones que permiten personalizar las exportaciones. En primer lugar, puedes seleccionar en qué carpeta quieres que se almacenen los archivos resultantes.

- La selección del directorio temporal hará que Zettlr guarde tus documentos de exportación en el directorio temporal. El directorio temporal es una carpeta especial en cada sistema operativo que se utiliza para los archivos temporales y se borra tan pronto como un archivo ya no es necesario. Esto es bueno si no deseas almacenar archivos exportados en ningún lugar del sistema. Si exportas tus archivos al directorio temporal, tendrás que guardarlos explícitamente en otro lugar para que sean persistentes.
- La elección del directorio de trabajo actual hace que Zettlr guarde tus documentos exportados en el directorio actualmente seleccionado. De esta manera, no tienes que guardar explícitamente tus documentos fuera del directorio temporal para hacerlos persistentemente accesibles. **Ten en cuenta que el motor de exportación no te pedirá tu confirmación si está a punto de sobrescribir un archivo.

La segunda sección presenta opciones para indicar a Zettlr qué hacer con los elementos de Zettelkasten que soporta. Si qiueres saber para qué sirven estos elementos, consulta la [sección correspondiente de los documentos](../academic/zkn-method-es.md). Esta sección te permite conservar o eliminar esos elementos en la exportación, ya que en la mayoría de los casos sólo son útiles y necesarios dentro de la propia aplicación, y no deberían aparecer en los documentos exportados.

Una segunda sección que contiene preferencias para las exportaciones se encuentra en el cuadro de diálogo "Preferencias de PDF". Se puede abrir a través del menú (se encuentra directamente debajo de la opción de menú de preferencias normales) o mediante el atajo `Cmd/Ctrl+Alt+,`. Este cuadro de diálogo presenta opciones para la exportación de archivos PDF. Puedes elegir un montón de opciones de formato, como el tipo de papel, los márgenes de página, la fuente o el tamaño de fuente, y si quieres o no números de página, y si es así, cuáles. La mayoría de las opciones de exportación se explican por sí solas y se asemejan a las que se ofrecen en los procesadores de texto estándar.
