# YAML Frontmatter

Al igual que Pandoc, Zettlr admite YAML frontmatters para sus archivos Markdown. Un [YAML frontmatter](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block) es una serie de metavariables que se pueden definir para describir información del archivo que normalmente no es parte del contenido del texto en sí, como como autores, palabras clave y título.

Los YAML frontmatters se pueden definir al principio de un archivo, comenzando en la primera línea con tres guiones (`---`) y terminando el encabezado con tres guiones o tres puntos (la primera variante es más común). Contienen YAML válido y se pueden utilizar para definir variables arbitrarias. Son útiles para una gran variedad de casos de uso.

> Para obtener una documentación más concisa de lo que puede hacer con los YAML frontmatters, consulte la [documentación de Pandoc](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).

## Definiendo un YAML frontmatter

Los YAML frontmatters se puede definir en cualquier parte del documento, ya que es común que los casos de uso de Pandoc concatenen múltiples archivos de entrada en un archivo de salida (Zettlr hace esto durante las exportaciones del proyecto). Zettlr admite el resaltado de sintaxis para los bloques de YAML frontmatter que se encuentran al principio del archivo.

Dicho frontmatter debe comenzar con tres guiones (`---`) en la primera línea del documento y terminar con tres guiones o tres puntos en una sola línea. En el medio, Zettlr aplicará el resaltado de sintaxis YAML. Para obtener una guía completa sobre cómo escribir YAML, [vea la especificación](https://yaml.org/spec/1.2/spec.html).

Un YAML frontmatter válido para una exportación de Pandoc podría verse así:

```yaml
---
title: "Título de su documento"
keywords:
  - Una palabra clave
  - Otra palabra clave
author:
  - El Equipo de Zettlr
---
```

> **Atención**: De acuerdo con la especificación YAML, los caracteres de tabulación (tab) no se pueden usar para la sangría. Para que su YAML frontmatter  sea válido, use espacios para la sangría.

## Frontmatters versus archivos predeterminados

Los frontmatters se puede utilizar para anular los valores predeterminados establecidos por Pandoc internamente o uno de los archivos predeterminados que utiliza Zettlr para exportar sus archivos. Para obtener más información, asegúrese de leer la [documentación sobre archivos predeterminados](defaults-files.md) para evitar confusiones.

## Variables frontmatter 

El frontmatter sirve para contener mucha información útil tanto para Pandoc como para Pandoc citeproc. Con dicho frontmatter, puede controlar muchos aspectos de cómo se representará su documento, como la configuración regional que se utilizará o una lista de referencias que no cite dentro del texto principal. Zettlr puede comprender un subconjunto de estas variables para mostrarle información adicional en todo el programa. Es probable que la compatibilidad con variables como `nocite` aumente aún más en versiones futuras.

Para obtener una lista completa de las variables disponibles y más instrucciones sobre cómo usar estas variables, consulte la [sección sobre bloques de metadatos](https://pandoc.org/MANUAL.html#metadata-blocks) en el manual de Pandoc, así como el [manual de Pandoc citeproc](https://github.com/jgm/pandoc-citeproc/blob/master/man/pandoc-citeproc.1.md).

> Tip: En esta página solo enumeramos ciertas variables importantes para usar con Pandoc, pero los YAML frontmatters también son compatibles con otros motores, como el [generador de sitios estáticos Jekyll](https://jekyllrb.com/docs/front-matter/). Por lo tanto, si planea utilizar una herramienta diferente para convertir sus archivos Markdown, debe consultar su documentación para obtener una lista de las variables disponibles.

### `title`

Contiene el título final del documento. Esto es útil ya que los títulos del nivel 1, estrictamente hablando, no están destinados a denotar el _título_ de un documento, sino el orden superior de las secciones del documento.

Esta variable anulará el nombre del archivo en varios lugares donde Zettlr muestra el nombre del archivo (como la lista de archivos y la barra de pestañas del documento).

### `author`

Utilice este campo para especificar los autores de un archivo. Esta es una lista de nombres simples o nombres de autores con afiliaciones. Esta variable se utilizará, por ejemplo, para generar una página de título en las exportaciones de PDF.

Ambas de las siguientes variantes serían correctas:

```yaml
author:
  - Autor uno
  - Autor dos
author:
  - name: Autor uno
    affiliation: Universidad X
  - name: Autor dos
    affiliation: Universidad Y
```

> Tenga en cuenta la sangría de la propiedad `affiliation`: se alinea con la propiedad` name`. La sangría de los valores YAML es importante y, por lo tanto, debe tener cuidado con ellas.

### `keywords` / `tags`

La variable `keywords` contiene palabras clave, o etiquetas, que pueden ser utilizadas por Pandoc. Muchos otros motores también admiten la variable `tags`. Zettlr reconoce ambas propiedades y las tratará como descripciones válidas de etiquetas para su archivo.

Estas propiedades también se pueden usar para eludir una restricción de las etiquetas comunes en el texto que admite Zettlr: puede definir palabras clave arbitrarias que también pueden incluir espacios. Zettlr reconoce estas palabras clave y las agrega a la lista de etiquetas del archivo.

### `lang`

Esta variable controla la configuración regional que se utilizará durante la exportación (citas, comillas y puntuación). De forma predeterminada, Pandoc utilizará `en-US`. Por ejemplo, la puntuación del inglés británico se convertirá a los estándares de puntuación del inglés estadounidense durante el proceso de exportación, a menos que se establezca `lang: en-GB`.

También es útil para controlar en qué idioma aparecerán las referencias de su archivo. Si no establece esta variable, el idioma de las referencias se tomará del campo de idioma predeterminado en el estilo CSL utilizado, lo que podría no ser deseable en caso de que su texto esté en un idioma diferente.

Los valores válidos para este campo son identificadores de idioma [BCP-47](https://tools.ietf.org/html/bcp47)  compatibles (por ejemplo, `en-US`,` de-AT` o `it`).

### `nocite`

Esta variable puede usarse para incluir trabajos en su lista de referencia que no hayan sido realmente citados en su documento. Coloque sus respectivas claves de citas en esta variable. Recuerde encerrar el valor entre comillas si contiene una @ (como hacen la mayoría de las identificadores de cita), ya que de lo contrario se interpretará como una instrucción para Pandoc y es posible que otras variables en el frontmatter no funcionen como se esperaba (por ejemplo, use `nocite: '@citekey' `).

### `reference-section-title`

Utilice esta variable para definir un encabezado para su lista de referencias. Esto tiene el mismo efecto que cuando finaliza su documento con un encabezado (por ejemplo, `## Referencias`).

> Nota: Puede tener sentido definir esta variable en uno de los archivos de exportación predeterminados, ya que Pandoc no agregará dicho encabezado por defecto. En general, recuerde que todas las variables que se describen aquí también se pueden definir en un archivo de valores predeterminados para que se apliquen a _cada_ exportación de este tipo.

### `notes-after-punctuation`

Esto se puede usar para indicar a citeproc que mueva notas al pie con sus citas después de la puntuación (por ejemplo, si cita `algo [@citekey] .`, se convertirá en` algo. [^ 1] `en la salida).
