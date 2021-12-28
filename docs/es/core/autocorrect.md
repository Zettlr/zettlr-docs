# Autocorrección y citas mágicas

Autocorrección es una característica conocida que también es compatible con Zettlr. Tiene una gran cantidad de configuraciones manuales para personalizar la forma en que funciona Autocorrección. Puedes habilitarlo y deshabilitarlo en las [preferencias](../ reference / settings.md).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iPRDPTtJuCA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Autocorrección

Autocorrección funciona comprobando constantemente lo que escribes y, tan pronto como encuentre una secuencia de caracteres de la tabla de reemplazo, reemplazará esa secuencia de caracteres con el reemplazo que hayas especificado.

Zettlr viene con un conjunto predefinido de reemplazos para Autocorrección que cubre los reemplazos más comunes, como reemplazar dos guiones (--) con un guión en blanco (-). Puedes agregar, modificar y eliminar reemplazos en las preferencias. La columna de la izquierda contiene los caracteres que buscará la aplicación, mientras que la columna de la derecha contiene los respectivos reemplazos.

Autocorrección viene en dos versiones: puedes elegir el modo "Word" o el modo "LibreOffice", dependiendo de si usas más a Microsoft Word o LibreOffice. Los dos modos difieren en cómo se activan. El modo Word es generalmente más agresivo e inmediatamente intentará reemplazar cada secuencia de caracteres que encuentre. El modo LibreOffice requiere que presione Espacio o Entrar antes de intentar reemplazar algo. Siempre puedes deshacer un reemplazo presionando la tecla Retroceso. " 

> Recomendamos el modo LibreOffice, ya que te permite evitar selectivamente un reemplazo presionando `Shift + Espacio` en lugar de solo` Espacio` y `Shift + Enter` en lugar de solo` Enter`.

## Citas mágicas

Las citas mágicas es una extensión que te ayuda a escribir comillas tipográficamente correctas, en lugar de las predeterminadas (`" `y` '`). Puedes elegirlas de una lista desplegable o seleccionar un conjunto predefinido para algunos idiomas presionando el botón correspondiente en las preferencias. Seleccionar la primera opción (o el botón de opción "Ninguno") restaura las comillas predeterminadas.

> Las citas mágicas se activa automáticamente siempre que la autocorrección esté activa. Si eliges desactivar Autocorrección, esto también desactiva las citas mágicas. Para deshabilitar las citas mágicas de forma selectiva mientras se mantiene la función de Autocorrección, establece las citas mágicas con las comillas predeterminadas.
