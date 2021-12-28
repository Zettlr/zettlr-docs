# Legibilidad

La buena redacción abarca muchos aspectos. Además de contenido conciso, sus textos necesitan una mezcla equilibrada de oraciones largas y cortas. Además, debes abstenerte de usar demasiadas palabras complejas y difíciles. Asimismo, siempre es bueno asegurarse de que sus párrafos no sean demasiado largos, use voz activa y estructura sus párrafos en consecuencia.

Desde el desarrollo del texto, la creatividad de la humanidad ha brindado muchos consejos para escribir bien. Si bien Zettlr le brinda el entorno perfecto para escribir, asegurándose así de que la _lecturabilidad_ de su texto sea excelente, la _legibilidad_ es algo de lo que debe cuidar también. Afortunadamente, Zettlr tiene una herramienta para ti: el **modo de legibilidad**.

> Tenga en cuenta que el puntaje de legibilidad es solo uno de varios parámetros medibles que pueden ayudarlo a determinar la facilidad de lectura. No debe tomarse demasiado en serio. Si el algoritmo de legibilidad resalta una oración en rojo intenso, esto no significa necesariamente que deba volver a escribir la oración. Más bien, observe el contexto de la oración, que el algoritmo no tiene en cuenta, para determinar la calidad de una oración. **Recomendamos escribir primero el texto sin el modo y luego activarlo solo para algunos pasajes en los que tenga la sensación de que pueden ser difíciles de entender.**

## Qué hace el modo de legibilidad

En su definición más corta, el modo de legibilidad es un modo de resaltado de sintaxis para CodeMirror que calcula una puntuación básica para cada una de sus oraciones, dándole una primera impresión de la legibilidad de sus textos. Destaca cada una de sus oraciones con un color que va del verde al rojo, donde verde significa que la oración es fácil de entender, mientras que rojo significa que la oración es difícil de entender.

El modo tiene cuatro algoritmos diferentes a su disposición: La [fórmula de legibilidad de Dale-Chall](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula), el [índice Gunning-Fog](https://en.wikipedia.org/wiki/Gunning_fog_index), el [índice Coleman-Liau](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index) y el [índice de legibilidad automatizada](http://www.readabilityformulas.com/automated-readability-index.php). Estos difieren en lo que estiman que es difícil de entender por escrito y en la "dureza" de la puntuación que dan a las oraciones. No todos los índices son una buena opción para todos los textos. Debe elegir los algoritmos con prudencia.

> Tenga en cuenta que todos los algoritmos de legibilidad implementados se han diseñado teniendo en cuenta el inglés. Zettlr intenta hacer que funcionen también con otros idiomas utilizando investigaciones más recientes, pero los algoritmos aún estarán sesgados hacia el inglés. Los guiones no occidentales, como el coreano, el chino o el japonés, no funcionan con estas partituras. Si conoce algoritmos de legibilidad que funcionan con otros scripts, notifíquenos para que podamos hacer que Zettlr sea más universal en este sentido.

## Fórmula de legibilidad de Dale-Chall

La fórmula Dale-Chall se creó en los primeros días de la investigación educativa y fue escrita por Edgar Dale y Jeanne Chall. Su objetivo era proporcionar un medible para determinar la legibilidad de textos para escolares. Utiliza una lista de 3.000 palabras que son fáciles de entender para los estudiantes estadounidenses de cuarto grado y otorga una puntuación que oscila aproximadamente entre 0 y 10, lo que se traduce aproximadamente en los años de educación necesarios para comprender un texto. Eso significa: si una oración recibe un 10, necesitaría un título universitario para comprender el texto, mientras que los principiantes podrían entender una oración con un 1.

> Use Dale-Chall si está escribiendo textos para una audiencia más amplia, ya que el algoritmo le dará crédito a su texto por oraciones cortas y concisas sin presionarlo a oraciones ridículamente cortas.

## Índice Gunning-Fog

Gunning-Fog ha sido creado en los primeros días de la prensa sensacionalista y la lectura fácil. En 1952, Robert Gunning buscaba una forma de hacer mensurables los libros y periódicos que publicaba. El índice de Gunning-Fog arroja una puntuación que se correlaciona aproximadamente con los años de educación formal necesarios para que un lector comprenda un texto. Aún así, siendo un hombre de negocios y por tanto interesado en una alta dispersión de sus publicaciones, el algoritmo de Gunning tiende a dar puntuaciones altas incluso a textos relativamente fáciles de entender. Si recorre los diferentes algoritmos, notará que Gunning-Fog tiende a pintar todo ~~negro~~ rojo.

> Use Gunning-Fog if you want to write short advertisement texts (e.g., for websites) that cannot count on an even basic intrinsic motivation to read.

## Índice Coleman/Liau 

Con la caída de los precios de las computadoras, las estadísticas asistidas por computadora se convirtieron en una opción popular para procesar grandes cantidades de datos y arrojar un valor medible significativo. El índice Coleman/Liau es de esta época y es un algoritmo que no se basa en recuentos de sílabas o listas con "palabras difíciles". Por lo tanto, el índice Coleman/Liau es extremadamente preciso en su implementación en Zettlr. Al igual que los demás, otorga una puntuación que se aproxima a los años de educación formal necesarios para comprender una oración. Además, Coleman/Liau da resultados razonables y no penaliza mucho las sentencias un poco más largas.

> Utilice Coleman/Liau si necesita una medición precisa de la legibilidad de cualquier texto. No va bien con oraciones de una palabra, pero dará puntajes razonables incluso para textos más difíciles de entender.

## Índice de legibilidad automatizado (ARI)

El Índice de legibilidad automatizado está alineado con Coleman/Liau, ya que es una fórmula más nueva para calcular las puntuaciones de legibilidad en función de un análisis estadístico simple. Es el más "indulgente" de los algoritmos y produce resultados que no le piden que vuelva a escribir la mitad de su texto debido a un color de resaltado rojo.

> Utilice el ARI si está escribiendo textos más exigentes, como trabajos académicos, ya que dará mejores puntajes incluso para algunas oraciones difíciles.

## Una nota sobre "palabras difíciles"

En su propia implementación, Zettlr no incluye una lista de palabras fáciles de comprender que requiere Dale-Chall. En cambio, utiliza un enfoque diferente. La lista de palabras fáciles de entender varía de vez en cuando y, obviamente, de un idioma a otro. Por tanto, Zettlr tiene en cuenta otro medible para determinar las palabras que se consideran difíciles: la variación del idioma.

Las palabras difíciles para Zettlr se definen como más largas que dos veces la desviación estándar de la longitud promedio de las palabras. Como lo expresaron Coleman y Liau en su artículo de 1975, _Una fórmula de legibilidad por computadora diseñada para puntaje automático_, la longitud de las palabras es un indicador mucho mejor de la dificultad de las palabras que el número de sílabas. Por lo tanto, los algoritmos pueden puntuar oraciones en cualquier lenguaje de escritura occidental, no solo en inglés. Puede buscar la explicación del algoritmo [en nuestra página de funciones de legibilidad](https://zettlr.com/readability).

Además, Zettlr realiza un cambio más en los algoritmos: si bien los cuatro algoritmos fueron diseñados para ser aplicados a textos completos, el modo de legibilidad tomará cada oración, una a la vez, y por lo tanto dejará de lado su contexto. En general, esto se aproxima a la dificultad de la oración, pero obviamente puede marcar algunas oraciones en verde que son difíciles de entender en su contexto dado, mientras que marcará algunas oraciones en rojo que aún encajan en el contexto dado.
