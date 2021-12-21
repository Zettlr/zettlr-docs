# Lo que ves es lo que quieres decir (LQVELQQD)

Markdown es un lebguaje basado en el paradigma llamado [Lo que ves es lo que quieres decir"](https://es.wikipedia.org/wiki/WYSIWYM) (LQVELQQD, de las mismas siglas de la frase en  inglés,  WYSIWYM). Este paradigma está relacionado con "Lo que ves es lo que obtienes" (LQVELQO, de la misma frase en inglés, WYSIWYG), que probablemente ya habrás escuchado. Procesadores de texto como Word o LibreOffice, por ejemplo, siguen este paradigma. LQVELQO quiere decir que lo que sea que  _ves_ en tu procesador de texto será lo que verás, independientemente de que guardes el documento como un  PDF o como HTML. El principio guía de LQVELQO es que editar un documento debería coincidir precisamente con cualquier versión de él (exportada o impresa).

LQVELQQD, por otra parte, no hace ese tipo de proclamas. En cambio de "obtener" lo que ves, LQVELQQD es construir alrededor de la idea de que lo que sea que ves es lo que  _quieres decir_. En la práctica, esto implica que Markdown permite definir la _estructura_ de un texto (por ejemplo definir las cabeceras, negritas, citas y enlaces) pero **no como se ve**. Los archivos Markdown necesitan ser procesados después para publicación. En resumen: los archivos  Markdown son archivos "crudos"  que necesitan ser compilados en un formato final de publicación.

El beneficio de este principio es que **separas el proceso de escritura del proceso de maquetación**. Esto tiene sentido increíblemente en muchas formas. Déjanos, por ejemplo, comparar archivos HTML con archivos PDF. Los archivos HTML están creados sobre el principio de maquetación flexible, esto es: puedes redimensionar la ventana de tu navegador y el archivo HTML se acomodará de tal manera que siempre se vea bien, no importa de qué forma lo redimensiones. Los archivos PDF, por otro lado, son lo opuesto a flexibilidad: PDF fue hecho para documentos impresos, así que esos documentos no pueden redimensionarse. Esto quiere decir que no se adaptará al tamaño de la ventana de tu lector de PDF. Como sea, esto permite que uses, por ejemplo, una maqueta de dos columnas o cabeceras y pies de página más fácilmente. La única cosa que ambos documentos tienen en común es la estructura: una cabecera en tu archivo PDF será también un cabezote en tu archivo HTML, incluso aunque se vea diferente. Y eso es lo que precisamente Markdown te permite hacer.

Algunos elementos, sin embargo, impactarán negativamente tu flujo de trabajo. Por ejemplo, si quieres revisar rápidamente un párrafo que acabaste de escribir, los enlaces podrían perturbar la lectura, porque podría leerse como esto: `Una frase con [un enlace](https://docs.zettlr.com) en él`. Es más fácil leer frases como esto: `Una frase con _un enlace_ en é`. Es decir,  Zettlr pre procesará estos enlaces para tí. Algo similar aplica a imágenes: Para un ser humano, es más fácil ver imágenes que se suponen que deberían estar allí en vez de ver una ruta del archivo ahí.

Como sea, todos estos elementos procesados  _no_ coincidirán con tus archivos exportados. Ellos están simplemente ahí para tu conveniencia y las imágenes, por ejemplo, ofrecen algunas herramientas útiles para editar fácilmente, que no estarán en tus archivos exportados.

## Los saltos de línea no siembre son saltos de línea

Uno de los errores comunes es el significado de saltos de línea en Markdown, y hemos argumentado que esta podría ser la idea más difícil de entender. Markdown,por defecto, **quitará los saltos de línea simples** e interpretará los  **saltos de línea dobles como saltos de párrafo**. Como sea, un salto de línea que está precedido por o bien **dos espacios** o **una barra diagonal invertida** se mantendrán.

¿Por qué  Markdown hace esto? Hay múltiples razones. La mas importante puede ser histórica: Markdown fue desarrollado con editores de código en mente, lo que implica que fue creado originalmente para gente que esta acostumbrada a hacer ajustes de línea cada 72-80 caracteres. Este principio es llamado  [Caracteres Por Línea (CPL)](https://en.wikipedia.org/wiki/Characters_per_line) y tiene raíces históricas.  Si bien para el texto este razonamiento puede ser contraintuitivo, Markdown ha mantenido esta idea, por lo que deberás prestar especial atención a los saltos de línea.

Algunas personas utilizan este comportamiento para su propio proceso de escritura: escriben una oración por línea para que les resulte más fácil recortar todas las oraciones a aproximadamente la misma longitud. Toma este ejemplo:

```md
Esta es una oración.
Esta es una segunda oración.
Esta oración es mucho más larga que las dos anteriores.
Una frase corta.

Este es el siguiente párrafo.
Otra oración en el segundo párrafo.
```

El ejemplo anterior resultará en dos párrafos, uno con cuatro y otro con dos oraciones. Si deseas mantener ciertos saltos de línea, debes hacerlo explícito, ya sea terminando una línea con dos espacios o colocando una barra invertida al final de la línea:

```md
Esta oración estará en su propia línea.
Este también. \
Esto está en la tercera línea.
Esta oración vendrá directamente después de la tercera.
```

Ten en cuenta este comportamiento para saber cómo se verán tus documentos cuando los exporte, por ejemplo, a PDF o a Word.

> Si deseas obtener una descripción general de las ideas generales detrás de lo que puede y lo que no puedes hacer, consulta la [especificación CommonMark](https://spec.commonmark.org/), a la que Zettlr y el exportador subyacente, Pandoc, se adhieren.
