# Pregunas Frecuentes

**Intenté instalar Zettlr en Windows/macOS, pero hay una advertencia de seguridad que dice que no debería instalar la aplicación.**

Ambos, Windows y macOS requieren la llamada "firma de código" para poder confiar en la aplicación. Mientras eso es una excelente técnica para que código malicioso no dañe tu sistema, eso requiere una tasa anual de suscripción. Por dicha tasa los compilados de Zettlr _no_ están firmados y por eso producen advertencias. Está seguro instalar Zettlr e ignorar estás advertencias siempre y cuando descargas de nuestra pagina.

**¿Hay planes para portar Zettlr a teléfonos móviles, tablets, a Android u iOS?**

Recibimos más y más peticiones con referencia a versiones móviles de Zettlr. Somos muy felices que os guste Zettlr bastante para querer ver una versión en todos tus dispositivo, ¡y nos encantaría cumplir este deseo! Desafortunadamente, nuestros recursos son justo suficiente para seguir con el desarrollo de Zettlr y no podemos cargarnos con más trabajo en este momento.  Naturalmente, cuando las cosas cambian, ¡estaremos en ello!

**Que es Markdown**

Markdown es un sencillo lenguaje de marcado que te permite escribir textos tan complejos como cuando usas software de oficina estándar, pero con mucho menos desorden. En vez de tener que elegir y formatear manualmente, en Markdown es suficiente teclear una `#` para indicar un título  ¿Quieres saber más? ¡Entonces dirígete a la [documentación de Markdown](reference/markdown-basics-es.md)!

**No quiero usar Zettlr más, ¿que tengo que hacer para cambiar aplicaciones?**

Simplemente puedes desinstalar Zettlr y empezar a usar otro programa. Zettlr no se mete con tus archivos. Si usaste carpetas o proyectos virtuales hay unos archivos pequeños nombrados`.ztr-virtual-directories` y `.ztr-projects` en algunas de tus carpetas. Antes de desinstalar Zettlr, podrías deshacer carpetas o proyectos virtuales en la app para remover dichos archivos pequeños o simplemente borrarlos a mano luego.

**Estoy utilizando Linux y borrar archivos no los mueve a la papelera**

Zettlr nunca borra tus archivos de manera completa. Solo los mueve a la papelera tal que en caso de haber borrado un archivo por accidente lo puedes restaurar. En sistemas macOS y Windows, la funcionalidad de la papelera de reciclaje está activada por defecto, pro en algunos sistemas de Linux hay que habilitarla manualmente. En Linux, Zettlr (o más precisamente: el marco subyacente de Electron) hace uso del archivo binario `gvfs-trash` para mover archivos a la papelera. Para evitar momentos espeluznantes, nunca intentará "retroceder" a eliminar los archivos por completo.  Por tanto, para usar esta funcionalidad, ¡asegúrate, por favor, que tienes `gvfs-trash` instalado! En Debian/Ubuntu lo puedes conseguir por ejecutar el siguiente código en una terminal:

```bash
$ sudo apt install gvfs-bin
```

**Enlaces internos no abren los archivos respectivos**

En caso de que enlaces para vincular archivos para accederlos usando accesos directos no funciona como intentado, asegúrate de haber cumplido lo siguiente:

1. ¿Se reconoce el enlace? Zettlr te deja definir el aspecto de enlaces internos. Por defecto son encapsulados por `[[` and `]]`. Cuando Zettlr reconoce un enlace interno, será visualizado en colores y si colocas el ratón encima, el texto del enlace será subrayado. Si no es el caso, Zettlr no reconoce el constructo como enlace. Podrías cambiarlo en los ajustes.
2. ¿Pulsaste las etclas `Alt` o `Ctrl` mientras hiciste clic en el enlace?  Haciendo clic con el ratón en tu texto normalmente indica que quieres cambiar algo en este lugar. Tienes que indicar a Zettlr que quieres seguir el enlace de hecho.
3. ¿Usaste una ID o nombre de archivo valido? Zettlr solo abre archivos si tu enlace usa la ID o nombre _exactamente_ como dado en el archivo. Haciendo clic sin efecto quiere decir que la ID u el nombre indicado está en error o el archivo no existe en tu sistema. Nota que hay que omitir la extensón del archivo: para vincular a `my-file.md` solo necesitas `my-file` dentro de los marcadores de enlaces (por defecto: paréntesis rectangulares) 
4. ¿Se ha cargado el archivo correctamente a Zettlr? La vinculación interna solo funciona cuando Zettlr ha leído el archivo.

**Sé LaTeX y quiero usarlo den mis archivos markdown también. ¿Es posible?**

Sí. Simplemente escribe tus expresiones `LaTeX` donde quieres. Exportando a PDF, Pandoc se encargará de que las expresiones sean interpretadas correctamente por el motor de PDF. Desafortunadamente, el resaltado de sintaxis de `LaTeX` aún no está soportado. También nota, por favor, que Pandoc solo exportará bloques de `LaTeX` a PDF: exportar a otros formatos, Pandoc ignorará todo los bloques entre `\begin` y `\end` y esta parte faltará en un documento final en (por ejemplo) formato Word.  En exportar a HTML, todos los bloques de `LaTeX` están retenidos pero no convertidos a algo más.

**¡Parece que no puedo alinear mi text a la derecha u izquierda!**

No es un bug, es una característica: Markdown no tiene respectivos símbolos de formato porque el texto siempre debería estar justificado o alineado a la izquierda y, por lo tanto, no pertenece al conjunto de formatos de bloque necesarios que ofrece Markdown. Sin embargo, puedes usar instrucciones `LaTeX` para generar el efecto deseado. Simplemente encierra tu texto que quieres alinear entre `\begin{<opción>}` y `\end{<opción>}` donde `<opción>` se refiere a `flushleft` o `flushright`. O pon un `\justify` en frente del párrafo que quieres justificar.  [Aprende más en sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

**Quiero usar saltos de una linea solo y no crear un párrafo nuevo. Cuando pulso `Enter` una vez, ¡me quita el salto de una linea!** 

Para forzar Pandoc a visualizar saltos de solo una linea como tal, tienes que terminar tu linea con la barra invertida (`\`) o dos espacios(`  `). Ni la barra invertida ni los doe espacios estarán visualizados en el documento final.

**¿Realmente necesito Pandoc y / o LaTeX?**

Para exportar a HTML sencillo: no. Para exportar a todos los ortos formatos: sí. Zettlr depende en estos programas para habilitar la exportación de archivos. Pero no te preocupes: ¡Son programas de código abierto y por tanto son completamente gratis y disponible para todos los sistemas operativos!

**¿Como instalar Pandoc y / o LaTeX?**

Por favor, dirígete a [guía de instalación](install-es.md) para saber como instalar Pandoc y LaTeX en tu sistema.

**Parece que Zettlr no encuentra ni a Pandoc ni a LaTeX, ¡a pesar de haber instalado los dos!**

Eso puede ocurrir en caso tu ordenador instala el software en carpetas no estándar. Zettlr intentará su mejor para localizar dichas apps, pero puede fallar. En esta situación usamos las opciones de `path` (ruta) en los ajustes. Si Zettlr no puede encontrar los archivos binarios, puedes indicar la **ruta completa** en las respectivas cuadros de texto en ajustes, pestaña `avanzado`.

En sistemas Windows no deberías encontrar este problema si dejas la ruta de instalación usa la ruta por defecto de Windows (por ejemplo `Archivos de Programa`). Si usaste otros lugares para instalarlos, simplemente usa el explorador de Windows para buscar ambos: `pandoc.exe` y `xelatex.exe`.  Copia la ruta completa (¡menos el nombre del archivo ejecutable!) y pegala en la respectiva caja de en los ajsutes de Zettlr.

En sistemas macOS puedes encontrar la ruta por abrir `Terminal.app` (en la carpeta de aplicaciones bajo `otro`) y ejecutar `which pandoc` _o_ `which xelatex`, según que app Zettlr no puede encontrar. Terminal devolverá la ruta completa al archivo.

En las distribuciones de Linux, también tienes que abrir una línea de comandos/terminal y usar los mismos términos que en macOS: `which pandoc` para Pandoc y `which xelatex` para LaTeX.

**¡Encontré un error!**

¡Esas son buenas noticias! Pues...no tan buenas, sino ¡es bueno que lo hayas encontrado! En este caso, dirígete a[GitHub] (https://github.com/Zettlr/Zettlr/) y abre una incidencia (`issue`) para que sepamos qué pasa y podamos solucionar el bug.

**¡Tengo una petición de funciones! / ¡Tengo una sugerencia para hacer una función más eficiente!**

¡Me alegro de oírlo! Siempre dependemos de la experiencia que tienen otras personas con la app para mejorar su eficiencia y su utilidad para diferentes situaciones. En este caso, por favor, dirígete a[GitHub] (https://github.com/Zettlr/Zettlr/) y abra una incidencia (`issue`) para que podamos ir directamente al mismo.

**¿Qué sobre mi privacidad? Zettlr transmite mis datos o no tengo que preocuparme?**

En Zettlr todo es privacidad primero. No transmite datos ningunos,y funciona completamente sin conexión online. Sin embargo, comprobar si hay nueva versión de Zettlr sí envía datos. Cuando abres Zettlr, o usas el menú (`Ayuda` y luego `Buscar actualizaciones`), Zettlr se conectará a la API (Interfaz de programación de aplicaciones) para descargar una lista de todas las versiones estrenadas. Esta lista esta usada para determinar si usas la versión más reciente. Durante la conexión Zettlr recibe tu dirección IP y sabrá que una app Electron esta accediendo a la API. La app transmitirá también tu tipo de sistema operativo y la ID de tu app.
