# Zettlr como una aplicación portable

Incluso si la mayoría de personas simplemente instalarán y usarán Zettlr como un programa como cualquier otro, algunas personas podrían querer configurarlo para ser usado como una aplicación *portable*. Aquí describimos cómo funciona.

> Note que "aplicación portable" solo tiene sentido en el contexto de Windows. Aunque esta guía debería funcionar entre diversas plataformas, es muy poco común que un usuario de  Mac o Linux use aplicaciones portables.

## ¿Qué es una aplicación portable?

Una aplicación portátil es básicamente una aplicación de  Windows que es completamente independiente del computador en el que se ejecuta. Frecuentemente,  la gente usa apps en una configuración portable  para almacenarlas en USBs para conectarlas a diferentes computadores. Estas puede ser un software de desarrollo para administradores de sistemas o simplemente aplicaciones de escritura como Zettlr.

El principal problema de hacer una aplicación portable es que muchas cosas, como la configuración, archivos de datos y otra información importante de la app que necesita ejecutarse, se almacena normalmente en algunos directorios por defecto, principalmente en la cuenta de usuario de la persona que actualmente ejecuta el programa. Sin embargo, estos están siempre en el computador y no en la memoria USB. La clave para hacer una app portable es que se dirija a la app a que lea y escriba sus datos no en el computador que lo usa, sino en la memoria USB.

> Si no sabe si una aplicación portable es la mejor elección para sumercé, le recomendamos que solo instale la versión estándar. Podrá cambiarse a la versión portable en cualquier momento, como describimos a continuación.

## Cómo configurar Zettlr como una aplicación portable

Una aplicación portable en principio se distingue por apenas unas cuantas características de una instalación normal. Lo que explicaremos aquí básicamente hace uso de la línea de comandos que usamos internamente para desarrollar la aplicación, pero que funcionará perfectamente bien para mantener una instalación portable.

El primer paso para instalar la aplicación estándar para descargar uno de los instaladores de Windows y ejecutarlo. Como sea, en vez de instalar la app en la ubicación por defecto, deberías instalar la aplicación en tu memoria USB (o en otra carpeta - desde que sea una aplicación portable, puedes mover el folder a otro lugar más adelante).

Después de haber ejecutado la aplicación, debería poder ver todos los archivos requeridos – `Zettlr.exe`, el archivo `app.asar` y otros – en la carpeta que hayas direccionado desde el instalador.

A partir de Windows 10 no hay soporte para rutas relavitas en accesos directos, usando un acceso directo simple esto no va a funcionar. Así que lo que hay que hacer a continuación es crear un archivo BAT que puedas ejecutar. Crea un archivo que termine en `.bat` – por ejemplo `Zettlr.bat` – e inclúyele lo siguiente:

```
Zettlr.exe --data-dir="./zettlr-config"
```

Ahora, cada vez que ejecutes el archivo BAT, debería abrir Zettlr y dirigirlo al usar la carpeta `zettlr-config` para almacenar sus datos – justo donde la aplicación está. Por supuesto, puedes escoger cualquier otro nombre de carpeta. ¡Asegúrate de crear la carpeta antes de iniciar la aplicación!

## Convirtiendo una instalación estática en una aplicación portable

También es posible convertir una instalación estática en una aplicación portable. Para hacerlo, primero copia  la carpeta de aplicación **completa**  de Zettlr. Todos los archivos de allí son necesarios. Copia esos archivos en cualquier otra carpeta que quieras.

A continuación, busca el directorio de datos de la aplicación. Debería estar en `C:\Usuarios\<tu-nombre-de-usuario>\Datos de programa\Roaming\Zettlr`, pero puedes encontrar la dirección correcta en las [instrucciones de configuración](install.md). Copia este directorio – también en su totalidad – en la carpeta de aplicación copiada. Probablemente quieras renombrarla para que sepas qué hay allí.

Finalmente, necesitarás crear el archivo BATcomo sigue:

```
Zettlr.exe --data-dir="./zettlr-config"
```

Recuerda reemplazar `zettlr-config` con la dirección correcta.
