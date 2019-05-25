# Accesos directos

Esta página contiene una lista de todos los atajos de tecla que se usan en la app.

Para que los recuerdas mejor, te presentamos uno pensamientos sobre ellos. Generalmente, siguen un sistema (excepciones existen).

1. **Atajos comunes**: Algunos atajos son tan comunes que no encajan en nuestro sistema de atajos, pero todo el mundo los reconocerá. Un ejemplo es el acceso directo a las preferencias (`Cmd/Ctrl+,`), otro es el acceso directo para terminar de editar una nota a pie de página (`Mayús+Enter`). Intentamos utilizar tantos atajos como sea posible para reducir la fricción.
2. **Atajos de alta prioridad**: Usarás estos atajos _muchos_ mientras usas la aplicación. Estos son generalmente `Cmd/Ctrl` y una sola letra. Al nombrar los accesos directos, intentamos mantener los nombres en inglés del comando que activa (**N**ew (nuevo), **R**emove (eliminar), **F**ind (buscar), etc). A veces esto no es posible (por ejemplo, el modo Libre de Distracción se activa a través de `Cmd/Ctrl+J`, porque `Cmd/Ctrl+D` ya está ocupado por el editor).
3. **Acciones alternativas**: Tomamos en serio el significado semántico de la clave "Alt". Por lo tanto, toma un atajo de alta prioridad, añádele un `Alt` y normalmente tenderás a activar una acción alternativa en el mismo objetivo. Las excepciones notables a esto son el panel de desarrollador (se abre con `Cmd/Ctrl+Alt+I`, mientras que `Cmd/Ctrl+I` hace que el texto tenga cursiva). **Esto es cierto para _todas_ las acciones que puede desencadenar con clics del ratón. Todas las acciones alternativas del ratón se activan con un `Alt+Clic`. En caso de que `Alt-Click`s no produzca los resultados esperados, `Ctrl+Click`s también funcionan**.
4. **Objetivos alternativos**: En caso de que quieres realizar la misma _acción_, pero en un objetivo diferente, intente usar una tecla `Mayús`. A lo largo de la mayor parte de la aplicación, los comandos `Mayús` cambiarán el destino del archivo actualmente seleccionado al directorio actualmente seleccionado. La búsqueda también utiliza esta opción (`Cmd/Ctrl+F` busca el archivo, mientras que `Cmd/Ctrl+Mayús+F` busca en todo el directorio).

## Accesos directos de toda la aplicación

* `Cmd/Ctrl+,`: Abrir Preferencias
* `Cmd/Ctrl+Alt+,`: Abrir Preferencias de exportación PDF
* `Cmd/Ctrl+Q`: Salir de la aplicación
* `Cmd/Ctrl+N`: Crear un nuevo archivo dentro de la carpeta actualmente seleccionada.
 Si no se selecciona ninguno, el comando se desactiva.
* `Cmd/Ctrl+Mayús+N`: Crear un nueva carpeta dentro del directorio actualmente seleccionado. Si no se selecciona ninguno, el comando se desactiva.
* `Cmd/Ctrl+O`: Mostrar el diálogo para abrir otro directorio.
* `Cmd/Ctrl+S`: Guardar el archivo. Zettlr guarda automáticamente tus archivos, pero algunas personas tienden a sentirse mejor si tienen la opción de guardarlos manualmente.

* `Cmd/Ctrl+E`: Abrir la ventana emergente de exportación para exportar el archivo actual. Si no se selecciona ninguno, el comando se desactiva.
* `Cmd/Ctrl+R`: Renombrar el archivo abierto. Si no se selecciona ninguno, el comando se desactiva.
* `Cmd/Ctrl+Mayús+R`: Renombrar el directorio actual. Si no se selecciona ninguno, el comando se desactiva.
* `Cmd/Ctrl+Suprimir`: Eliminar el archivo actual. Si no se selecciona ninguno, el comando se desactiva.
* `Cmd/Ctrl+Mayús+Suprimir`: Eliminar el directorio actual. Si no se selecciona ninguno, el comando se desactiva.
* `Cmd/Ctrl+Mayús+F`: Dar enfoque al cuadro de búsqueda global.
* `Cmd/Ctrl+Alt+L`: Alternar entre el modo nocturno/día.
* `Cmd/Ctrl+Alt+S`: Cambiar la visualización de los metadatos de archivos.
* `Cmd/Ctrl+Mayús+1`: Cambiar el modo de la barra lateral para ver la lista de archivos o la vista de árbol. Desactivado en modo de barra lateral ampliada.
* `Cmd/Ctrl+?`: Cambiar la visualización de la barra lateral de adjuntos.
* `Cmd/Ctrl+[0-9]`: Abrir un documento reciente que está en la posición 0 a 9 de la lista de documentos recientes (Archivo->Documentos recientes).
* `Cmd+Ctrl+F` (macOS) `F11` (windows/Linux): Activar pantalla completa
* `Cmd/Ctrl+W`: Cerrar la ventana de la aplicación. En Windows y Linux también esto terminará la aplicación.
* `Cmd/Ctrl+M`: Minimizar la ventana de la aplicación.
* `F1`: Abrir esta documentación. Esto abrirá el enlace en tu navegador por defecto.

**Si el modo de depuración está activado**

* `F5`: Recargar la interfaz gráfica de usuario.
* `Cmd+Alt+I` (macOs) `Ctrl+Mayús+I` (Windows/Linux): Abrir las herramientas de desarrollo de Chrome.

## Accesos directos relacionados con texto en toda la aplicación

* `Cmd/Ctrl+Z`: Deshacer
* `Cmd/Ctrl+Mayús+Z`: Rehacer
* `Cmd/Ctrl+X`: Cortar
* `Cmd/Ctrl+C`: Copiar
* `Cmd/Ctrl+V`: Pegar
* `Cmd/Ctrl+A`: Seleccionar todo el texto

## Accesos directos relacionados con el editor

* `Cmd/Ctrl+Alt+C`: Copiar como HTML. Si hay una selección, se convertirá a HTML en tu portapapeles y no se copiará como texto plano. Esto te permite pegarlo, por ejemplo, en procesadores de texto.
* `Cmd/Ctrl+Mayús+C`: (Des)Comentar la selección de texto dada (o añadir un nuevo comentario HTML en la posición del cursor).
* `Cmd/Ctrl+X`: Cortar. Si el editor tiene foco, cortará la selección. Si no se selecciona nada, se cortará **la línea entera**, en la que se encuentra el cursor.
* `Cmd/Ctrl+V`: Pegar. Si el editor tiene foco, y acabas de cortar una línea entera, pegarás esta línea entera encima de la línea en la que se encuentra el cursor. El formato se conservará si el portapapeles contiene texto formateado.
* `Cmd/Ctrl+Mayús+V`: Lo mismo que el anterior, excepto que no intentará conservar el formato del texto pegado.
* `Cmd/Ctrl+B`: Hacer la selección en negrita o insertar nuevos caracteres de formato en negrita.
* `Cmd/Ctrl+I`: Hacer la selección en cursiva o insertar nuevos caracteres de formato en cursiva.
* `Cmd/Ctrl+K`: Insertar nueva plantilla de enlace o convertir el texto seleccionado en el título de un nuevo enlace. Si el portapapeles contiene un enlace reconocible, rellenar también los paréntesis para el destino.
* `Cmd/Ctrl+F`: Abrir la ventana emergente de búsqueda dentro del editor que tiene el foco actual (ya sea el editor principal o una ventana de Vista Rápida).
* `Ctrl+Alt+F` (Windows/Linux) `Cmd+Alt+R` (macOS): Insertar una nueva nota a pie de página en la posición actual del cursor.
* `Cmd/Ctrl+L`: Generar una nueva ID utilizando el generador de patrones desde el cuadro de diálogo de configuración e insertarlo en la posición actual del cursor.
* `Cmd/Ctrl+0`: Volver a establecer el tamaño de fuente del editor como estándar.
* `Cmd+Más` (macOS) `Ctrl+Mayús+Plus` (Windows/Linux): Aumentar el tamaño de la fuente del editor.
* `Cmd/Ctrl+Menos`: Disminuir el tamaño de la fuente del editor.
* `Tab`: Sangrar una lista.
* `Mayús-Tab`: Desangrar una lista.
* `Mayús-Enter`: Al editar una nota al pie de página, guardar el texto de referencia. De lo contrario, evitará la auto-inserción de un nuevo elemento de la lista.
* `Ctrl-Enter`: Insertar una línea debajo de la línea en la que se encuentra el cursor y colocar el cursor al principio de la misma.
* `Ctrl-Mayús-Enter`: Insertar una línea encima de la línea en la que se encuentra el cursor y coloque el cursor al principio de la misma.

## Accesos directos relacionados con la vista previa

* `Flecha arriba`: Abrir el archivo anterior.
`Flecha abajo`: Abrir el siguiente archivo.
 `Cmd/Ctrl+Flecha arriba`: Saltar al principio de la lista.
 `Cmd/Ctrl+Flecha abajo`: Saltar al final de la lista.

## Accesos directos relacionados con ventanas emergentes

* `ESC`: Si algún cuadro de texto dentro de la ventana emergente tiene foco, al presionar Escape se cerrará la ventana emergente.

**En la ventana emergente de búsqueda del editor principal**

* `Enter`: Mientras el cuadró de texto _búsqueda_ está enfocado, seleccionará la siguiente ocurrencia de tu término de búsqueda. Mientras el cuadro de texto _reemplazar_ está enfocado, reemplazará la siguiente ocurrencia de tu término de búsqueda con el texto de reemplazo y buscará automáticamente la siguiente ocurrencia.
* `Alt+Enter`: Mientras el cuadro de texto _reemplazar_ está enfocado, éste reemplazará todas las ocurrencias de tu término de búsqueda con el texto de reemplazo.