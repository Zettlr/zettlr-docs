# Instalación

La instalación de  Zettlr es muy fácil y toma sólo un paso en cualquier sistema operativo. Zettlr es multiplataforma, así que funcionará en cualquier computador. Zettlr viene con una versión pre-instalada para macOS, Windows y muchas versiones de Linux.

> Por favor ten en cuenta en especial que las versiones de  macOS y Linux pueden cambiar en cualquier momento. Si usas un sistema operativo que apenas tiene soporte técnico y encuentra problemas, la lista más reciente de plataformas que soporta se puede encontrar [aquí](https://www.electronjs.org/docs/tutorial/support#supported-platforms).

## Windows (7 posterior)

Para instalar Zettlr en Windows, solo descargue la app desde la [página de descargas](https://www.zettlr.com/download) y abra con doble click el instalador. Si quiere instalar Zettlr para todos los usuarios, se instalará en la carpeta principal de `Archivos de programa` en caso de que tenga los permisos durante la configuración (le preguntará automáticamente por estos permisos). No necesitará ningún permiso para instalarlo como el usuario registrado.

Para desinstalar Zettlr, simplemente ejecute Uninstall.exe bien sea desde el directorio o use la interfaz del programa de agregar/eliminar software en su configuración del sistema. Si quiere remover completamente todos los datos asociados con la aplicación, borre también el directorio `C:\Usuarios\<su-nombre-de-usuario>\AppData\Roaming\Zettlr`.

> Al momento de escribir, el instalador ARM de Windows no viene con el empaquetado de  Pandoc. Esto quiere decir que la exportación podría no funcionar. Tienes que instalar Pandoc manualmente. Si Pandoc está instalado  en tu computador, Zettlr para Windows ARM utilizará automáticamente este.

## macOS (10.11 o posterior)

Para instalar  Zettlr en macOS, simplemente descarga el archivo dmg y móntalo haciéndole doble click. Luego arrastra el ícono de Zettlr a tu directorio de Aplicaciones ¡Y ya está!

Para desinstalar Zettlr, simplemente borra  Zettlr.app de tu directorio de Aplicaciones. Si quieres borrar completamente todos los datos asociados con la app, borra también el directorio `/Usuarios/<tu-nombre-de-usuario>/Library/Application Support/Zettlr`.

> También puedes instalar Zettlr usando [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew install --cask zettlr`

## Linux (Debian 8/Ubuntu 12.04/Fedora 24 o posteriores)

Hay  archivos `deb` y `rpm` así como paquetes preinstalados en `AppImage` para Linux.  Simplemente instala el paquete en tu sistema de acuerdo al que hayas descargado. Para instalar los paquetes AppImage, por favor [mira esta guía sobre cómo instalarlos](https://appimage.org/).

Para desinstalar, sigue los pasos usuales para desinstalar un paquete (usualmente a través de la aplicación gráfica de instalaciones o vía`dpkg`).  Si además quieres borrar todos los datos asociados a la app, borra también el directorio `/home/<tu-nombre-de-usuario>/.config/Zettlr`.

> Hay una comunidad de mantenimiento de paquetes para Arch Linux. [Puedes encontrarla en los repositorios oficiales](https://wiki.archlinux.org/title/Zettlr#Installation). Por favor ten en cuenta que esta es una comunidad de mantenimiento de paquetes y nosotros no tenemos ninguna responsabilidad en su estabiidad, seguridad o versión ofrecida.

## Actualizando Zettlr

La aplicación revisa las nuevas actualizaciones cada vez que arrancas la app. Puedes hacerlo también manualmente usando el respectivo ítem en el menú de Ayuda. Si hay una nueva versión disponible,  Zettlr mostrará un diálogo que contiene el número de la nueva versión y un registro de cambios con todas las nuevas características y correcciones de errores que la nueva versión tiene.

Para actualizar, simplemente tienes que hacer click en la versión apropiada para tu arquitectura (eso es, bien sea la versión de  64bit o la ARM). Zettlr comenzará automáticamente a bajar el instalador apropiado en su carpeta de Descargas y, una vez termine, puede darle  click a "Actualizar", donde después  Zettlr se cerrará y abrirá el archivo descargado.

Zettlr automáticamente descargará los mismos archivos que podrá encontrar en nuestra página de descargas. Para actualizar manualmente, solo descargue el instalador apropiado y ejecútelo. Esto sobreescribirá automáticamente la versión existente pero mantendrá su configuración.

> Si está interesado en las actualizaciones de prueba, asegúrese de marcar la casilla de "Notifíqueme sobre las versiones beta" en la pestaña de "Avanzado" en el diálogo de preferencias. Zettlr le ofrecerá las versiones en beta las cuales pueden no estar tan pulidas como las regulares, ¡pero obtendrá nuevas características antes que otras personas!

## Lanzamientos nocturnos

Desde la versión 2.0.0, estamos ofreciendo las así llamados lanzamientos nocturnos. Estos son los lanzamientos que se crean automáticamente cada viernes al mediodía (UTC) (pero a veces las creamos automáticamente).  Ellas contienen los cambios más recientes al código base. Esto quiere decir que hay actualizaciones incluso más recientes que las versiones beta , **pero** esto también quiere decir que pueden contener errores serios que todavía no hemos encontrado.

Las actualizaciones nocturnas son solo para usuarios avanzados que entienden el riesgo de usarlas. Si mantiene su configuración, las estadísticas de escritura y copias de sus archivos regularmente,  podría ser seguro que use los lanzamientos nocturnos. Apreciamos a quienes los usan y nos informan de los errores que encuentran.

Para instalar los lanzamientos nocturnos, necesita bajarlos manualmente desde <https://nightly.zettlr.com/>. El mensaje de actualización no le notificará sobre nuevos lanzamientos, pero desde que se está construyendo cada viernes, puede estar seguro que cada viernes tendrá una nueva actualización.

> **ATENCIÓN**: No garantizamos ningún grado de estabilidad. Los lanzamientos nocturnos se crean de forma automática, así que si accidentalmente introducimos un error severo poco después de que la construcción de la automatización empiece y se arregla una hora después, las actualizaciones nocturnas de esa semana _continuarán manteniendo_ ese error. Normalmente, lo peor que puede pasar es que la app no arranca y tiene que volver a una versión previa de ella, pero podría ser posible que esa construcción pueda dañar tu sistema operativo. Al usar un lanzamiento nocturno acepta que entiende ese riesgo.

Por favor note que no almacenamos ningún lanzamiento nocturno. Cada semana el lanzamiento nocturno reemplaza la versión anterior. Si un lanzamiento nocturno es inservible, siéntete libre de notificarnos para así programar manualmente una nueva construcción después de que hayamos arreglado el error.
