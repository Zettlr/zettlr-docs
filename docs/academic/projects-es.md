Proyectos

Desde la versión `0.18`, Zettlr soporta proyectos. Los proyectos son una forma de simplificar la concatenación y exportación de más de un archivo. Te permiten dividir un solo proyecto en varios archivos diferentes para trabajar en ellos. Puedes dividir tu trabajo en varios archivos y sólo al final pegarlos y exportarlos como un único archivo PDF. Además, los proyectos Zettlr te permiten afinar mejor tus exportaciones PDF. Con los proyectos puedes, por ejemplo, hacer Zettlr generar una portada o una tabla de contenidos.

![project_directory.png](../img/project_directory.png)

## Creación de un proyecto

Los proyectos de Zettlr son básicamente un colección de características adicionales para directorios. Por lo tanto, puedes "convertir" cualquier directorio en un proyecto. Simplemente haz clic con el botón derecho del ratón en el directorio del que deseas realizar un proyecto y selecciona "Crear proyecto". A continuación, el propia carpeta se coloreará de rojo y aparecerá un icono de lápiz a la izquierda de su nombre, lo que indica que esta carpeta tiene habilitadas las funciones del proyecto. Si ahora haces clic con el botón derecho del ratón en una carpeta, tienes a tu disposición tres opciones adicionales de menú contextual: "Configurar el proyecto", "Exportar proyecto" y "Eliminar proyecto".

## Trabajar con proyectos

Selecciona "Configurar el proyecto" en el menú contextual de una carpeta de proyecto para abrir los ajustes. En general, son sólo una copia de las preferencias de PDF que tienes disponibles globalmente para exportar rápidamente archivos Markdown individuales. Las dos diferencias son que los proyectos permiten granular con precisión la generación de un documento PDF, y que estas configuraciones de PDF sólo se aplican a la exportación de este directorio específico. Por lo tanto, puedes dejar intactas tus opciones globales de PDF y utilizar diferentes configuraciones para tu proyecto.

![settings_project.png](../img/settings_project.png)

Ahora vamos a explorar brevemente los ajustes que tienes para los proyectos. Primero la pestaña de metadatos:

- **Título del proyecto**: Este título se utilizará como nombre de archivo, título (si decides crear una página de título) y el título PDF de tu documento. Por defecto es el nombre de la carpeta.
- **Autor del proyecto**: Esto se escribirá en el cuadro de metadatos PDF para los autores.
- **Palabras clave del proyecto**: Estas son palabras clave que puedes o no utilizar al exportar documentos PDF.
- **Generar página de título**: Si esta casilla está seleccionada, Zettlr dirigirá el motor LaTeX para generar una página de título. Utilizará el título del proyecto y la fecha actual, así como el nombre de su autor y los escribirá en la primera página de tu documento.
- **Generar Tabla de Contenidos**: Si esta casilla está seleccionada, Zettlr dirigirá a Pandoc para que genere una Tabla de Contenidos en la segunda página (si dijiste a Zettlr que generara una página de título, o en la primera página).
- **Evaluar hasta el nivel...**: Con esta lista desplegable puedes elegir qué títulos formarán parte de tu Tabla de Contenidos. El valor por defecto "2" dirige a Pandoc a generar una tabla de contenidos usando encabezados de primer y segundo grado (es decir, encabezados `##` y `#`). Un 4 incluiría encabezados de 1º, 2º, 3º y 4º grado (es decir, `#`, `###`, `####`, y`####`). Todos los demás encabezados seguirán estando presentes en el archivo, pero no aparecerán en el índice.

Actualmente, tanto la página como las pestañas de fuente son exactamente las mismas para los proyectos y para tus opciones de exportación generales, así que por favor consulte la página [Ajustes](../reference/settings-es.md) para saber lo que hacen.

## Exportar Proyectos

Para compilar (montar / asemblar archivos, exportar) un proyecto, Zettlr seguirá los pasos descritos a continuación para generar su PDF final, así que por favor léelos cuidadosamente para saber qué esperar una vez que decidas exportar tu proyecto!

Primero, Zettlr tomará el directorio del proyecto y comprimirá todo el contenido en una matriz unidimensional. Esto significa que **todas las sub-carpetas y todos los archivos en ella serán aplanados en una lista simple.**¿Qué significa eso? Basta con echar un vistazo al panel de vista previa. Internamente, antes de exportar tus archivos, Zettlr ordenará los archivos _exactamente_ como en el panel de vista previa. Por lo tanto, si compruebas tu lista de vista previa, sabrás exactamente qué archivo vendrá después de qué. Esto es por diseño para que no te llevarás ninguna desagradable sorpresa una vez que hayas entregado un documento y te des cuenta de que se ha omitido una carpeta completa con tres capítulos.

> Ten en cuenta que Zettlr utilizará _todas_ las sub-carpetas! Esto se entiende como una conveniencia para las personas que escriben grandes proyectos que pueden utilizar tantos sub-carpetas como quieran. Por lo tanto, la lista de vista previa se exportará exactamente como está (todas las carpetas simplemente se omitirán). Así que por favor no creas una sub-carpeta de segundo nivel, haz clic en tus notas y luego pregúntate cómo llegaron tus notas al manuscrito final. Si deseas utilizar archivos adicionales que no deben exportarse, simplemente crea dos carpetas más dentro del directorio del proyecto. En uno de ellos puedes poner todos tus archivos de trabajo, mientras que el otro puedes convertir en el proyecto que se puede exportar.

Después de que tus archivos han sido leídos, se están haciendo un pequeño número de modificaciones (todas las rutas se normalizan para que Pandoc y LaTeX puedan encontrar todas tus imágenes) antes de que se concatenen entre sí. A continuación, este enorme archivo se escribe en el disco en un archivo temporal.

A continuación, Zettlr leerá los ajustes que has dado al proyecto en sí y básicamente seguirá el mismo proceso que la generación de documentos PDF individuales: Inicie el exportador, proporcione la configuración, apunte al archivo temporal y deje que Pandoc y LaTeX hagan su trabajo.

Una vez que tu proyecto ha sido exportado, se abre automáticamente con la vista previa de PDF predeterminada y se guarda en la carpeta del proyecto.

> Ten en cuenta que especialmente la generación de un índice de contenidos a partir de proyectos de gran tamaño puede llevar una cantidad de tiempo extraordinaria. Si quieres generar un índice de contenidos, LaTeX tienes que construir el PDF dos veces - primero para detectar en qué páginas terminan tus encabezados después de la conversión a PDF, y luego una segunda vez para incluir el índice de contenidos. En una prueba que hice, en un ordenador nuevo con Windows 10, la generación de una carpeta completo de extractos que rindió a unas 150 páginas tomó aproximadamente cinco minutos en los que parece que no funcionó. Así que por favor seas paciente - mientras Pandoc o LaTeX no se quejen de nada, siguen trabajando.

> **Pista "Pro"**: Como ya sabrá en la sección FAQ, Zettlr y Pandoc no intentarán filtrar los comandos TeX que hayas escrito en tus documentos Markdown. Recuerda esto mientras trabajas en tus proyectos: Puedes añadir páginas adicionales o hacer otras cosas "funky" (exóticas) con tus archivos que realmente estarán presentes en el documento final! También puedes generar documentos `.tex` proporcionando dicha extensión al crear nuevos archivos. Estos documentos `.tex` soportan el resaltado de sintaxis LaTeX y serán incluidos en la exportación de tu proyecto! Asegúrate de que tengan un nombre de archivo que coloca el archivo exactamente donde lo necesitas.

## Eliminar proyectos

Eliminar un proyecto no es lo mismo que eliminar los archivos. 
Para eliminar un proyecto, simplemente haz clic con el botón derecho del ratón y elige eliminar el proyecto. Lo que se eliminará es simple y llanamente el _archivo de configuración_ que indica que tu directorio debe ser tratado como un proyecto (como en el caso de los directorios virtuales, la configuración de tu proyecto se almacena en un pequeño archivo llamado `.ztr-project`). Por lo tanto, si se elimina un proyecto, en realidad sólo se eliminan los ajustes del proyecto. Si vuelves a crear el proyecto, el archivo estará presente una vez más, pero con la configuración predeterminada. Por lo tanto, recuerda, la eliminación de proyectos finalmente eliminará tu configuración y tendrá que volver a establecerla.
