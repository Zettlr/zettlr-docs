# Localización

Mientras escribimos esto, Zettlr está disponible en muchos idiomas. Actualmente se están traduciendo algunos idiomas más. Esto significa que puede usar Zettlr en su idioma nativo si lo prefiere. Eche un vistazo a [nuestro servicio de traducción](https://translate.zettlr.com/) para ver una lista actualizada.

> Para la localización de archivos de salida, consulte la [variable de Frontmatter de YAML `lang`](https://docs.zettlr.com/en/core/yaml-frontmatter/#variable-lang)

Además, Zettlr viene con algunos diccionarios de corrección ortográfica. Debido a su tamaño, solo hay una cantidad limitada disponible, pero puede agregar nuevas fácilmente.

## Cambiar el idioma y habilitando la revisión ortográfica

Para cambiar el idioma de la aplicación, puede hacerlo en las preferencias. Tenga en cuenta que debe reiniciar la aplicación para aplicar el nuevo idioma.

> Si bien el idioma de la interfaz se puede adaptar en las preferencias, esto no se aplica a los archivos exportados. Especialmente cuando se trata de comillas y delimitadores de números, los archivos de exportación volverán al inglés (de EE. UU.). Cambie esto estableciendo la propiedad `lang` en sus [archivos predeterminados](defaults-files.md) o en [YAML frontmatter](yaml-frontmatter.md).

Para habilitar la revisión ortográfica, vea la pestaña correspondiente en sus preferencias. Haga click en la casilla de verificación junto a todos los diccionarios que desea cargar. Sin embargo, tenga en cuenta que más diccionarios pueden ralentizar su computadora debido a su tamaño. Le recomendamos que se quede con tres diccionarios como máximo.

> Para deshabilitar la revisión ortográfica, simplemente desmarque todos los diccionarios.

## Instalar nuevos diccionarios

Zettlr utiliza los conocidos diccionarios Hunspell que también son utilizados por software conocido como LibreOffice o aplicaciones de Mozilla.

Para habilitar la revisión ortográfica de un idioma específico, simplemente abra la carpeta del diccionario del usuario seleccionando `Archivo`->` Importar diccionario ...`en el menú. Luego, Zettlr abrirá la carpeta en la que necesita colocar los archivos del diccionario.

El diccionario consta de dos archivos, uno es un archivo `.dic` y el otro es un archivo` .aff`. Deben colocarse dentro de una carpeta que lleva el nombre del idioma que desea importar. Supongamos que desea importar el diccionario de portugués. Debe obtenerlo de algún repositorio, por ejemplo [aquí hay un conjunto extenso](https://github.com/wooorm/dictionaries/tree/main/dictionaries). Entonces simplemente necesita asegurarse de que la carpeta se llame `pt-PT` y que los dos archivos se llamen` pt-PT.dic` y `pt-PT.aff`. Zettlr ignorará otros archivos dentro del directorio. Tan pronto como haya colocado sus archivos dentro del directorio `dict`, abra las preferencias y Zettlr debería listar su diccionario recién importado.

## ¡Ayuda a traducir!

¿Su idioma aún no está disponible o se muestran algunas traducciones en inglés? Si alguna de las cadenas de la aplicación aún no se ha traducido, Zettlr recurrirá al inglés para estas cadenas. Cualquiera puede ayudar a mejorar las traducciones existentes y agregar nuevas. Para ver cómo puede ayudar, consulte la [página de Participa](../ get-involved.md).
