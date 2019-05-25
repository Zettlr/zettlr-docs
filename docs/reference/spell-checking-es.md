# Diccionarios y correctores ortográficos

Como con todas las aplicaciones de escritura modernas, Zettlr cuenta con un potente motor de corrección ortográfica en su fondo. Está desactivado por defecto, ya que a muchos usuarios les gustaría separar el corrector ortográfico del proceso de escritura real, pero se puede activar con facilidad. Además, Zettlr te permite comparar con varios idiomas a la vez, lo que lo convierte en la herramienta ideal para escribir textos bilingües (por ejemplo, un artículo en inglés con algunas citas en alemán).

## Activar la corrección ortográfica

Para activar el corrector ortográfico, abre las ajustes utilizando el elemento del menú, el botón de la barra de herramientas o pulsando `Cmd/Ctrl+,`. En la pestaña Editor, puedes seleccionar todos los diccionarios que deseas activar. A la izquierda hay una lista que muestra todos los diccionarios disponibles. Haz clic en el icono delante del idioma para moverlo a la derecha. Cintas en verde indican todos los diccionarios activos. Haz clic en la cinta verde para desactivar el diccionario de nuevo.

Puedes filtrar la lista de diccionarios disponibles escribiendo en el cuadro de búsqueda en arriba. Zettlr ocultará automáticamente todos los diccionarios cuyo nombre no contenga tu cadena de búsqueda. Elimina cualquier letra del cuadro de búsqueda para volver a mostrar todos los diccionarios.

Después de guardar los ajustes con tu nueva configuración de corrección ortográfica, Zettlr comenzará automáticamente a cargar todos los diccionarios. Es posible que experimentes un cierto retraso mientras Zettlr arranca los diccionarios; especialmente con diccionarios grandes como el italiano o el alemán, esto puede llevar algún tiempo. Después de salir de la aplicación, Zettlr cargará los diccionarios en cada inicio después de un corto retraso.

## Desactivar la corrección ortográfica

Para desactivar la corrección ortográfica de nuevo, simplemente elimine todos los diccionarios activos haciendo clic en todas las cintas verdes en el lado derecho de la pestaña Editor en la ventana de preferencias. Si no hay ninguna activada, Zettlr no intentará revisar la ortografía de tus textos.

## Diccionario personalizado

A partir de la versión `1.3.0`, Zettlr soporta añadir ciertas palabras a tu diccionario definido por el usuario. Especialmente para los nombres esto es útil, ya que puedes marcarlos como correctos para eliminar la pequeña línea roja debajo de esos nombres. Para añadir una palabra al diccionario del usuario, simplemente haz clic con el botón derecho del ratón en una palabra o nombre marcado y seleccione "Añadir al diccionario". Zettlr no volverá a marcar esta palabra como errónea.

## Añadir nuevos diccionarios

Mientras que Zettlr viene con varios diccionarios instalados, es posible que quieras agregar nuevos diccionarios para los idiomas en los que escribes. Para añadir dichos diccionarios, deberás buscar diccionarios compatibles con Hunspell. Básicamente, consisten en carpetas que contienen dos archivos: un archivo `.dic` y un archivo `.aff`. El archivo `.dic`- contiene todas las palabras en un idioma con los llamados afijos, por ejemplo, pequeñas banderas que indican al algoritmo que una determinada palabra también puede tener una terminación diferente (por ejemplo, la palabra `transporte`: la raíz léxica es `transport-` que da lugar a distintas palabras que pertenecen a la misma familia léxica: transport-ación, transport-ador, transport-ista, etc. La bandera de afijo indicaría entonces que "esta palabra también puede tener otras terminaciones"). El archivo `.aff` contiene las definiciones de estas banderas.

Así que para agregar estos diccionarios, ve online para buscar algunos. Un buen punto de partida es [el repositorio de GitHub del usuario wooorm](https://github.com/wooorm/dictionaries), que incluye muchos idiomas. Simplemente descarga una de las carpetas a tu ordenador. Luego, en Zettlr, haz clic en Archivo -> "Importar diccionario...". Esto abrirá el navegador de archivos de tu ordenador con la carpeta `dict` en Zettlr ya abierto. Copia toda la carpeta del diccionario que acabas de descargar en la carpeta `dict`. A continuación, puedes seleccionar este diccionario en la configuración.

Ten en cuenta que Zettlr realizará algunas pruebas básicas para determinar si un diccionario es válido o no. Para que Zettlr muestre el diccionario y puedas seleccionarlo, el diccionario debe seguir las siguientes reglas:

1. La carpeta que contiene los archivos `.dic`- y `.aff` debe ser nombrada usando la correspondiente [etiqueta BCP-47](https://tools.ietf.org/html/bcp47) del idioma que contiene el diccionario. Aunque no conozcas el término "BCP-47", es simplemente la etiqueta de idioma común, así que por ejemplo un diccionario alemán se llamaría `de-DE` (para alemán de Alemania) o `de-CH` (para alemán suizo), o simplemente `it` (para italiano). Una [lista completa de todos los idiomas disponibles se puede encontrar aquí](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
2. Dentro de esta carpeta, deben estar presentes al menos dos archivos: un archivo `.dic` y un archivo `.aff`. Estos deben ser nombrados usando la etiqueta BCP-47 de la carpeta, o `index.dic`/`index.aff`.
3. La carpeta del diccionario puede contener otros archivos (como una lista de autores o una LICENCIA). Estos serán ignorados.

En resumen, Zettlr se asegurará de que un diccionario es válido comprobando que existen las siguientes rutas:

- `bcp-47/bcp-47.dic` y `bcp-47/bcp-47.aff` _o_
- `bcp-47/index.dic` y `bcp-47/index.aff`

> Atención: Los algoritmos Hunspell implementados en JavaScript aún no son tan potentes como el algoritmo principal utilizado por LibreOffice, por lo que es muy posible que algunos diccionarios simplemente resulten demasiado grandes para ser cargados. Si Zettlr se cuelga después de cargar un diccionario, simplemente fuerza la salida de la aplicación y asegúrate de que el diccionario no esté seleccionado.