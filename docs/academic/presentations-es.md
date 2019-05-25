# Presentaciones

A partir de la versión `0.19.0`, Zettlr puede exportar tus archivos Markdown directamente como archivos de presentación usando el marco [reveal.js](https://revealjs.com/#/) `reveal.js` es una solución ligera para crear presentaciones súper-compatibles usando `HTML` y `JavaScript`. Por lo tanto, estas presentaciones se pueden mostrar en _todos_ los ordenadores que ejecutan un navegador—hoy en día esto significa: se ejecutan en _todos_ los ordenadores.


Para exportar archivos Markdown a `reveal.js`, debes asegurarte de que Pandoc está instalado en tu ordenador. Dirígete a la [sección sobre la exportación](../core/export-es.md) para ver cómo instalar Pandoc.

Si primero quiere quedar impresionado por una exportación real de Zettlr a `reveal.js`, por favor eche un vistazo[a la presentación de demostración](https://zettlr.com/slides.revealjs.htm)! También puedes leer [el archivo fuente] (https://www.zettlr.com/themes/zettlr/assets/slides-es.md) mientras sigues las instrucciones de esta página.

## Pre-consideraciones

Por supuesto, un documento de Markdown que deberías compilarse en una presentación tiene una estructura ligeramente diferente a la de otros documentos de reducción del precio.

#### Crear diapositivas

Puedes crear nuevas diapositivas de dos maneras. Primero, cada encabezado de nivel 1 comenzará una nueva diapositiva y también actuará como el título de la diapositiva. Pero en caso de que el nivel de encabezado 1 sea demasiado grande para tu gusto, o simplemente no quieras un título en esa diapositiva, también puedes delimitar las diapositivas usando divisores Markdown (ya sea `***` o `---`).

Todo lo que sigue al título o al separador terminará siendo el contenido de las diapositivas. No es necesario "terminar" explícitamente la última diapositiva con un separador.

### Usar de elementos de Markdown

Dentro de las diapositivas, puedes utilizar todos los elementos de Markdown.
 Serán visualizados como se espera de ellos. Puedes incluso utilizar notas a pie de página que luego se colocarán por tu cuenta, respectiva diapositiva al final!

### Herramientas avanzadas

Por supuesto, las presentaciones `reveal.js` también tienen la misma versatilidad que PowerPoint o Impress cuando se trata de controlar su presentación. Por ejemplo, puedes utilizar clases CSS para indicar a la presentación que ciertos elementos deben activarse antes de re-enviar la presentación. A estos se les llama "fragmentos". Debido a las limitaciones del motor de Pandoc, tendrás que utilizar HTML simple para conseguirlo. Considera, por ejemplo, el código HTML de la presentación demo:

```html
<ul>
    <li class="fragment fade-in">Este elemento se desvanecerá.</li>
    <li class="fragment highlight-blue">Esto será resaltado en azul.</li>
    <li class="fragment highlight-red">Todas las transiciones disponibles están documentadas[aquí](https://github.com/hakimel/reveal.js/#fragments).</li>
</ul>
```

Esto creará una lista con tres elementos. Todos los elementos son "fragmentos", lo que significa que al pulsar el atajo para la siguiente diapositiva, la primera se `desvanecerá`, como dice la clase. En la siguiente pulsación de la tecla de flecha derecha, el segundo elemento se resaltará en color azul. La tercera pulsación de la tecla de flecha derecha resaltará en rojo el último elemento. Y en la cuarta pulsación de la tecla de flecha se mostrará la siguiente diapositiva.

### Ajustes de presentación

![presentations_scripts.png](../img/presentations_scripts.png)

Por supuesto, la propia presentación también tiene opciones que puedes utilizar.
 Estas son simples directivas JavaScript que puedes manipular insertando una etiqueta `<script>` como se muestra en la captura de pantalla. Puedes sobrevirarlas definiendo los atributos en el objeto `zettlrRevealOptions`. Estas son las opciones que puedes configurar:

```javascript
const zettlrRevealOptions = {
	    // Controles de la pantalla en la esquina inferior derecha
	    controls: true,
	    // Mostrar una barra de progreso de presentación
    	progress: true,
	    // Visualizar el número de página de la diapositiva actual
	    slideNumber: true,
	    // Empujar cada cambio de diapositiva al historial del navegador
    	history: true,
	    // Habilitar los atajos de teclado para la navegación
	    keyboard: true,
	    // Activar el modo de visión general de diapositivas
    	overview: true,
	     // Centrado vertical de las diapositivas
	    center: true,
	    // Habilitar la navegación táctil en dispositivos con entrada táctil
	    touch: true,
	    // Hacer un bucle en la presentación
    	loop: false,
	    // Cambiar la dirección de presentación para que sea RTL (dirección de redorrido derecha a izquierda?)
	    rtl: false,
	    // Aleatorizar el orden de las diapositivas cada vez que se carga la presentación.
	    shuffle: false,
	    // Activar y desactivar fragmentos globalmente
	    fragments: true,
	    // Indica si la presentación se está ejecutando en modo embebido/empotrado,
	    // es decir, que se encuentra en una parte limitada de la pantalla
	    embedded: false,
	    // Indica si debemos mostrar un tooltip (descripción emergente de ayuda) cuando el signo de interrogación
	    // Se pulsa la tecla
	    help: true,
	     // Indica si las notas de los oradores deben ser visibles para todos los espectadores.
	    showNotes: false,
	    // Anulación global para la colocación automática de medios embebidos (vídeo/audio/iframe)
	    // - null: Los medios sólo se reproducirán automáticamente si hay reproducción automática de datos.
	    // - true: Todos los medios se reproducirán automáticamente, independientemente de la configuración individual
	    // - false: Ningún medio se reproducirá automáticamente, independientemente de la configuración individual
	    autoPlayMedia: null,
	    // Número de milisegundos entre el paso automático al
	    // siguiente diapositiva, desactivada cuando se ajusta a 0, este valor puede ser sobreescrito
	    // usando un atributo data-autoslide en tus diapositivas
	    autoSlide: 0,
    // Detener el deslizamiento automático después de la entrada del usuario
	    autoSlideStoppable: true,
	    // Activar la navegación de diapositivas mediante la rueda del ratón
	    mouseWheel: false,
	    // Ocultar la barra de direcciones en los dispositivos móviles
	    hideAddressBar: true,
	    // Abrir enlaces en una ventana superpuesta de vista previa de iframe
    	previewLinks: false,
	    // Estilo de transición
	    // none/fade/slide/convex/concave/zoom
	    // ninguno/desvanecimiento/deslizar/convexo/cóncavo/zoom
	    transition: 'convex', 
	    // Velocidad de transición
	    // default/fast/slow
	    // por defecto/rápido/lento
	    transitionSpeed: 'default',
	    // Estilo de transición para fondos de diapositivas a página completa

    		    // none/fade/slide/convex/concave/zoom
	    // ninguno/desvanecimiento/deslizar/convexo/cóncavo/zoom
backgroundTransition: 'fade', 
	    // Número de diapositivas visibles contando de la actual
    viewDistance: 3,
    // El modo de visualización que se utilizará para mostrar las diapositivas
    display: 'block'
};
```

### Estilo de presentación

Si ninguno de los temas disponibles te gustan, o si necesitas proporcionar algún CSS adicional, puedes hacerlo simplemente colocando una etiqueta `<style>` en algún lugar de tu presentación.

Necesitarás algún conocimiento de CSS para afinar el estilo, pero la apariencia de la presentación en sí debería ser satisfactoria por sí misma.

![presentations_styles.png](../img/presentations_styles.png)

### Imágenes

Una de las grandes desventajas de tales presentaciones HTML es que las imágenes no pueden ser contenidas en el archivo resultante.
 (Para ser correctos, pueden ser incluidos, pero eso aumentaría el tamaño del archivo por el tamaño de todas las imágenes multiplicado por el factor 1.3.)

Así que tienes que decidir dónde poner las imágenes.
 Existen básicamente tres métodos viables.

1. Crea una carpeta dedicada a las imágenes, por ejemplo, `img`, dentro del directorio con tus archivo de Markdown. Luego enlaza a todas las imágenes usando rutas relativas (`img/my-image.jpg`). Cuando exportas tu archivo, asegúrate de que la presentación esté en el mismo lugar relativo al directorio de la imagen que el archivo de origen.
2. Simplemente coloca todas las imágenes dentro del mismo directorio que tu archivo de presentación. Entonces debería bastar con vincularlas utilizando su nombre de archivo.
3. Subelas a la web, por ejemplo a un servicio de hosting de imágenes, y enlaza sus URLs. El sólo inconveniente: Necesitarás contar con una conexión a Internet que funcione en el lugar donde realizas tu presentación.

Una regla general es: Si Zettlr muestra correctamente tus imágenes, también será así en tu presentación, siempre y cuando te aseguras de que la presentación se encuentre en _exactamente_ el mismo directorio que tu archivo fuente relativo a las imágenes.
