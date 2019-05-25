# Instalación

La instalación de Zettlr es muy fácil y sólo necesita un paso en cada sistema operativo. Zettlr es una app multi-plataforma así que corra en tu sistema, no importa cuál es. Zettlr viene pre-compilado para macOS, Windows y sistemas de Linux basados en Debian y RedHat (Ubuntu, Gnome, Xubuntu, Kubuntu, Fedora, RedHat y similares).

Si quieres usar Zettlr en ortos sistemas Linux o en dispositivos tipo ARM (como Raspberry), tendrías que crear un paquete tu mismo. Hay muchas guías en la red sobre como crear una app tipo Electron. Por favor, dirígete a las [plataformas soportadas para apps electron](https://github.com/electron/electron/blob/master/docs/tutorial/support.md) para quedarte actualizado.

> Un paquete para Arch-Linux, mantenido por la comunidad, está disponible. [Puedes encontrarlo en el deposito oficial de AUR](https://aur.archlinux.org/packages/zettlr-bin/). Por favor, toma nota que dicho paquete esta mantenido por la comunidad y no tomamos responsabilidad por su estabilidad, seguridad o la versión ofrecida.

## Windows (7 o más recién)

Para instalar Zettlr en Windows simplemente descarga la app de la [página de descargas](https://www.zettlr.com/download) y haz un doble-clic para abrirla. Si quieres instalar Zettlr para todos los usuarios de tu dispositivo, se instala en la carpeta `Archivos de Programa`—en esta caso deberías darle a la app derechos elevados durante la instalación (el sistema te preguntara por permiso automáticamente). No necesitas derechos ningunos si solo instalas por tu mismo.

Para desinstalar Zettlr, simplemente ejecuta Uninstall.exe o desde la carpeta de instalación o a través de los ajuntes de tu sistema. Si quieres borrar de manera completa todo los datos asociados con Zettlr, también remueve la carpeta `C:\Usuarios\<tu-nombre-de-usuario>\AppData\Roaming\Zettlr`. 

## macOS (10.10 o más nuevo)

Para instalar Zettlr en macOS simplemente descarga el archivo dmg de la ultima publicación y montalo. Luego, mueve el icono de Zettlr en tu carpeta de aplicaciones ¡y listo!

Para desinstalar Zettlr, simplemente remueve Zettlr.app de tu carpeta de aplicaciones. Si quieres borrar de manera completa todo los datos asociados con Zettlr, también remueve la carpeta `Usuarios/<tu-nombre-de-usuario>/Library/Application Support/Zettlr`. 

Puedes instalar Zettlr usando  [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew install zettlr`

## Linux (Debian 8/Ubuntu 12.04/Fedora 21 o más recién)

Hay paquetes tipo `deb` y `rpm` pre-hechos para sistemas de Linux. Simplemente instala el paquete en tu sistema.

Para desinstalar, sigue los pasos habituales, normalmente a través a la aplicación gráfica de instalación o a través `dpkg`. Si quieres borrar de manera completa todo los datos asociados con Zettlr, también remueve la carpeta `/home/<tu-nombre-de-usuario>/.config/Zettlr`. 

## Actualizar la app

La app comprueba si hay actualizaciones, cada vez que la arrancas. También puedes iniciar la búsqueda por actualizaciones manualmente en el menú Ayuda. Si hay nueva versión disponible, Zettlr te mostrará un dialogo con los números de la versión actual, de la versión nueva, e incluso el changelog (lista de cambios) con todas las características nuevas y las correcciones de errores. Puedes continuar a la página de descargas para descargar el paquete nuevo. Simplemente instala encima de la instalación actual, ya que la app se encarga de borrar la versión antigua primero. Todos los datos serán conservados y migraran a la versión nueva.

> Si estás interesado en las versiones del último momento, marca la casilla "Avísame sobre versiones beta" en la pestaña "Avanzado" en los ajustes.

## Instalar Pandoc

Lo que hace que Zettlr interactúe con otros programas como Microsoft Word, Wiki-systems u OpenOffice es un paquete de software adicional llamado `Pandoc`. Pandoc es gratuito y de código abierto y te permite utilizar todas las funciones de exportación e importación de Zettlr, haciéndolo la opción ideal para ser la interfaz entre otros programas y compañeros de trabajo que no utilizan Markdown.

La instalación de Pandoc es fácil en todas las plataformas.

> Puedes instalar Pandoc en cualquier momento. Simplemente utiliza la opción del menú Ayuda para abrir las instrucciones de instalación.

### Windows

En Windows, Pandoc se puede instalar visitando la [página de descargas] (https://github.com/jgm/pandoc/releases/latest) y buscando el instalador de Windows. Simplemente ejecútalo. A continuación, debería estar instalado correctamente. Intenta exportar algo. ¡Si funciona, estás listo!

> Ten en cuenta que debido al hecho de que Pandoc es un programa CLI (interfaz de línea de comandos), no podemos mostrarle si hay o no una actualización disponible. Tendrás que hacerlo tú mismo. Simplemente visita la página de descargas de vez en cuando.

## macOS

En macOS, Pandoc se puede instalar de varias maneras.

#### Método recomendado: Homebrew

El método preferido es [Homebrew](https://brew.sh/). Se trata de un gestor de paquetes que facilita la instalación de programas de línea de comandos como Pandoc y hace que su mantenimiento sea fácil. Asegúrate de [instalar Homebrew correctamente] (https://brew.sh/), y luego simplemente ejecuta el siguiente comando en la terminal:

```bash
$ brew install pandoc
```

Para actualizar Pandoc de vez en cuando, usa este comando:

```bash
$ brew upgrade
```

Esto actualizará todas las fórmulas instaladas (es como se llaman) a la versión más reciente.

> Se recomienda la instalación con Homebrew, ya que no sólo es más rápida, sino también más cómoda.

Una vez Pandoc está configurado, quizás quieres instalar `Citeproc` también, ya que te proporciona la capacidad de [citar](academic/citations.md) con Zettlr.
 En Windows, Citeproc se instala automáticamente, mientras que en macOS tendrás que instalar Pandoc Citeproc adicionalmente. Simplemente usa Homebrew para esto también:

```bash
$ brew install pandoc-citeproc
```

#### Instalar usando el instalador oficial

Para instalar Pandoc de manera convencional, simplemente dirígete a la [página de descargas] (https://github.com/jgm/pandoc/releases/latest) y obtén el instalador de macOS.
 Una vez hecho esto, Pandoc debería estar disponible en tu sistema. Intenta exportar algo. ¡Si funciona, estás listo!

### Linux

En Linux, instalar Pandoc es muy sencillo. Utiliza tu gestor de paquetes para buscar e instalar Pandoc. Los paquetes proporcionados no siempre están actualizados, pero deberían encajar. Si quieres instalar la versión más reciente, tendrás que [descargar el instalador de Linux] (https://github.com/jgm/pandoc/releases/latest) y seguir las [instrucciones de instalación] (https://pandoc.org/installing.html) en el web de Pandoc.

> Es posible que tengas que configurar `pandoc-citeproc` manualmente instalándolo utilizando el método preferido en su sistema operativo.

## Instalar LaTeX

Markdown funciona mejor si se combina con `LaTeX` para crear hermosos archivos PDF. Para ello, tendrás que instalar una distribución `TeX` con Zettlr. No te preocupes: No hace falta aprender `LaTeX` para usarlo. Pero tendrías que instalarlo.

La instalación del software funciona exactamente igual que cualquier otro software: En Windows y macOS necesitarás el paquete de instalación, mientras que en Linux puedes usar su gestor de paquetes para instalar una distribución.

Las distribuciones recomendadas son:

- Windows: [MikTeX](https://miktex.org/download)
- macOS:[MacTex](https://www.tug.org/mactex/morepackages.html) (_Atención: Basta con instalar el TeX Básico, que es mucho más pequeño que la versión completa!_)
- Linux: [TeX Live](https://www.tug.org/texlive/) (instala el paquete texlive-base: `sudo apt install texlive-base`)

> Puedes instalar LaTeX más tarde. Simplemente utiliza la opción del menú Ayuda para abrir la página de resumen donde podrás ver inmediatamente todas las distribuciones disponibles.
