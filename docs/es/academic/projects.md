# Proyectos

Los proyectos son una forma de simplificar la concatenación y exportación de más de un archivo. Le permiten dividir un solo proyecto en varios archivos diferentes para trabajar. Puede dividir su trabajo en varios archivos y solo al final pegarlos y exportarlos como un solo archivo PDF. Además, los proyectos se pueden exportar a varios formatos al mismo tiempo.

![Propiedades de un proyecto](../img/project_directory.png)

## Creando un proyecto

Los proyectos de Zettlr son básicamente un montón de características adicionales para directorios. Por lo tanto, puede "convertir" cualquier directorio en un proyecto. Simplemente haga click con el botón derecho en el directorio del que desea convertir en un proyecto y elija "Propiedades". En la ventana emergente, puede activar el interruptor de proyecto. Posteriormente, el directorio se coloreará en rojo y aparecerá un icono especial a la izquierda de su nombre, indicando que este directorio tiene habilitadas las funciones del proyecto. Si ahora hace click con el botón derecho en un directorio, tiene una opción de menú contextual adicional a su disposición para construir el proyecto.

## Trabajando con proyectos

Después de haber activado el interruptor de proyecto en las propiedades del directorio, aparecerán algunas opciones adicionales en ese cuadro de diálogo. La primera pestaña del panel que aparece recientemente le permite seleccionar los formatos a los que se exportará el proyecto. Seleccione tantos como desee. Las opciones son las mismas que para las exportaciones de una sola página.

En la segunda pestaña, puede definir patrones globales para filtrar qué archivos se incluirán en la exportación. Un patrón global es simplemente un patrón que le permite hacer coincidir solo archivos específicos. Por ejemplo, el patrón `**/*.md` coincidirá con todos los archivos Markdown, los dos asteriscos al principio significan aplicar este filtro de forma recursiva. Si define `*.md`, entonces el proyecto no incluirá archivos de subdirectorios. También puede especificar varias extensiones de archivo, p. Ej. `**/*.{md, tex}`. Por último, también puede hacer coincidir solo los archivos que tienen un nombre específico, p. Ej. `**/{Introducción, Conclusión, Capítulo-1}.md`.

> Para obtener más información sobre los patrones globales, un buen punto de partida es el [artículo de Wikipedia correspondiente](https://en.wikipedia.org/wiki/Glob_ (programación)).

Elegimos implementar patrones globales en lugar de una lista real de archivos, ya que no solo era más fácil de implementar, sino que también le permite especificar de antemano qué tipos de archivos creará y, por lo tanto, facilitará la tarea de agregar o eliminar archivos. sin tener que preocuparse por cuáles se incluirán y cuáles no.

## Creando proyectos

La creación de proyectos en general funciona de manera similar a las exportaciones de una sola página, con dos diferencias cruciales: los proyectos pueden generar varios archivos con un solo click y agrupan varios documentos Markdown en un solo documento de salida. Zettlr seguirá los siguientes pasos para recopilar la información necesaria para construir un proyecto:

Primero, Zettlr tomará el directorio del proyecto y procesará todo el contenido en una matriz unidimensional. Esto significa que **todas las subcarpetas y todos los archivos que contiene se acoplarán en una lista simple.** ¿Qué significa eso? Simplemente eche un vistazo a la lista de archivos. Internamente, antes de exportar sus archivos, Zettlr organizará los archivos _exactamente_ como en la lista de archivos. Por lo tanto, si revisa su lista de archivos, sabrá exactamente qué archivo vendrá después de cuál. Esto es por diseño para que no tenga una mala sorpresa una vez que haya entregado un artículo y se haya dado cuenta de que se ha omitido una carpeta completa con tres capítulos.

> Tenga en cuenta que Zettlr utilizará _todos_ los subdirectorios. Esto es una conveniencia para las personas que escriben grandes proyectos que pueden usar tantos subdirectorios como quieran. Por lo tanto, la lista de archivos se exportará exactamente como está. Si desea almacenar archivos adicionales dentro de un proyecto que no se deben exportar, exclúyalos mediante un patrón global.

En segundo lugar, Zettlr leerá la configuración que le ha dado al proyecto y, básicamente, seguirá el mismo proceso que para generar el PDF de un solo documento: inicie el exportador, proporcione su configuración y deje que Pandoc y LaTeX hagan su trabajo.

Una vez que se ha exportado su proyecto, se guarda en el directorio del proyecto.

> Tenga en cuenta que, especialmente, la generación de una tabla de contenido a partir de proyectos más grandes puede llevar una cantidad de tiempo extraordinaria. Si desea generar una tabla de contenido, LaTeX tiene que construir el PDF dos veces: primero para detectar en qué páginas terminan sus encabezados después de la conversión a PDF, y luego una segunda vez para incluir la tabla de contenido. En una prueba que hicimos, en una nueva computadora con Windows 10, la generación de un directorio completo de extractos que se procesaron en aproximadamente 150 páginas tomó aproximadamente cinco minutos en los que parecía que no funcionaba. Así que tenga paciencia, siempre que Pandoc o LaTeX no se quejen de nada, todavía están funcionando.

> **Pro-Tip**: Como sabrá en la sección de preguntas frecuentes, Zettlr y Pandoc no intentarán filtrar los comandos TeX que haya escrito en sus documentos de markdown. Recuerde esto mientras trabaja en sus proyectos: puede agregar páginas adicionales o hacer otras cosas divertidas con sus archivos que realmente estarán presentes en el documento final. También puede crear documentos `.tex` proporcionando la extensión al crear nuevos archivos. Estos documentos `.tex` son compatibles con el resaltado de sintaxis LaTeX y se incluirán en la exportación de su proyecto. Asegúrese de que tengan un nombre de archivo que coloque el archivo exactamente donde lo necesita.

## Eliminar proyectos

Para eliminar un proyecto, simplemente desmarque el interruptor del proyecto en las propiedades del directorio.
