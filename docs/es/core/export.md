# Exportando en Zettlr

Zettlr le permite exportar a muchos formatos de archivo comunes para que pueda compartir su trabajo con colegas, amigos y (¡con suerte!) su editor. Sin embargo, la exportación de Zettlr funciona de forma ligeramente diferente a las exportaciones normales, por lo que es posible que desee verificar qué sucede cada vez que exporta un archivo a un formato diferente.

> Para exportaciones avanzadas de PDF, Zettlr intentará utilizar LaTeX. Si bien también puede guardar archivos en PDF sin él, instalar LaTeX puede ser ventajoso en varias situaciones. Puede ver cómo instalar LaTeX en nuestra [guía sobre cómo instalar dicha distribución](../installing-latex.md).

## Exportación de archivos

Hay dos formas de exportar archivos con Zettlr: exportaciones de archivos individuales y exportaciones de proyectos. La exportación de una sola página se encuentra en la barra de herramientas y se puede abrir con `Cmd / Ctrl + E`. Le permite exportar en una variedad de formatos. Después de elegir el formato apropiado, a veces puede ajustar algunas opciones para el exportador especificado. También puede seleccionar si desea exportar al directorio temporal o al directorio del archivo actual (esta configuración también se puede modificar en las preferencias).

El segundo método para exportar archivos es exportar [proyectos completos](../académico/proyectos.md). Puede exportar un proyecto haciendo click con el botón derecho en el directorio del proyecto y eligiendo la opción de exportación.

> Tenga en cuenta que exportar a un PDF LaTeX puede producir errores en forma de `archivo <nombre> .sty no encontrado`. Estos se pueden resolver instalando los paquetes LaTeX que faltan. Consulte, por ejemplo, [esta guía](https://en.wikibooks.org/wiki/LaTeX/Installing_Extra_Packages) sobre cómo instalar paquetes LaTeX adicionales.

## Eligiendo el destino

Zettlr necesita saber dónde almacenar sus archivos exportados. Hay dos opciones que tiene: exportarlas a su **directorio temporal**, o al **directorio de archivos**. Ambos tienen sus ventajas y desventajas.

> Puede establecer la [configuración correspondiente](../ reference / settings.md) en la pestaña Exportar.

Exportar al directorio temporal le permite exportar un archivo varias veces sin que tenga que preocuparse por eliminar el archivo nuevamente después, porque su computadora vacía regularmente su directorio temporal. Como Zettlr abre el archivo inmediatamente con la aplicación predeterminada (por ejemplo, Word para archivos `.docx`), puede usar la opción" Guardar como ... "para guardar el archivo en otra ubicación tan pronto como esté satisfecho con el resultado.

Si no le preocupa haber exportado archivos entre sus archivos Markdown, también puede decirle a Zettlr que guarde el archivo en su directorio actual.

> Tenga en cuenta que Zettlr siempre sobrescribirá los archivos exportados sin pedir confirmación. Si agrega algo de texto a un archivo exportado, **¡guárdelo siempre en otra ubicación!** Por lo general, es una buena idea no guardar nunca archivos en su directorio temporal si desea conservarlos.

## Personalización de exportaciones

Hay dos formas generales de personalizar sus exportaciones, también conocido como cambiar la apariencia del archivo. La primera es hacer uso de archivos predeterminados. Estos archivos predeterminados especifican cómo Pandoc exportará sus archivos y puede modificarlos para cambiar todas sus exportaciones. Consulte [nuestra documentación sobre archivos predeterminados](defaults-files.md) para obtener una guía completa sobre cómo usarlos.

La segunda opción es utilizar plantillas personalizadas. Las plantillas predeterminadas con las que se envía Zettlr están diseñadas para proporcionar una buena primera impresión a la vez que son compatibles, pero a medida que se vuelve más apto para trabajar con Zettlr, es posible que desee personalizar la forma en que se distribuyen los archivos. Hay una [guía completa sobre plantillas](../ academic / custom-templates.md) con Zettlr en la documentación.
