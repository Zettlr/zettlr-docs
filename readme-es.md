# Documentación Zettlr

Este repositorio contiene la documentación traducida al Castellano de la [aplicación de Markdown Zettlr](https://www.zettlr.com/). 
(La versión oficial en inglés se encuentra aquí: [https://github.com/Zettlr/zettlr-docs](https://github.com/Zettlr/zettlr-docs))  Está alojado públicamente en GitHub para darte la oportunidad de enviar fácilmente modificaciones y ayudar a que la documentación de Zettlr se mantenga comprensiva incluso para los nuevos usuarios que necesitan ayuda para familiarizarse con Zettlr.

**Si encuentras errores tipográficos, errores en nuestra información obsoleta, o tiene alguna otra información para mejorar la documentación, apreciamos todas vuestras ideas.

## Cómo funciona

Toda la documentación está escrita en Markdown. Por lo tanto, para contribuir sólo necesitas saber un poco de [Markdown](https://www.markdownguide.org/basic-syntax/)! Simplemente [navega por la documentación] (https://docs.zettlr.com/), y haz clic en el botón "Editar en GitHub" en la página que deseas editar. Luego, simplemente modifica el contenido de la página y crea una solicitud 'pull'.

Para la edición avanzada, aquí está la lista de los pasos para contribuir a la documentación:

1. Bifurca este repositorio.
2. Modifica los ficheros fuente de Markdown y otros ficheros según sea necesario.
3. Confírmalos y luego abre una 'Pull Request' (solicitud de extracción de tu cambio al original).

Tan pronto como ejecutemos una nueva versión, tus cambios se incluirán automáticamente y estarán disponibles en https://docs.zettlr.com/.

## Nuevas páginas y cambios en la estructura

Las nuevas páginas de nuestra documentación requerirán algunos ajustes estructurales, que deberás discutir de antemano. Si tienes una idea de cómo estructurar la documentación, por favor discuta tu propuesta en nuestro [foro](https://forum.zettlr.com).

## La estructura

Todos los archivos fuente residen en el directorio `docs`. Las imágenes residen en el directorio `img` dentro del directorio `docs`. Los nombres de los archivos deben hablar por sí mismos. El sub-directorio `assets` contiene archivos adicionales que son necesarios para construir los documentos.

Puedes crear un directorio `recursos` en el nivel raíz para almacenar archivos adicionales que puedas necesitar, ya que el archivo `.gitignore` no transmitir este directorio en una solicitud de extracción `pull`.

## Pruebas y construcción

Para probar localmente cómo funcionan los cambios, deberás instalar [MkDocs](https://www.mkdocs.org/). MkDocs es una biblioteca completa que permite crear fácilmente documentos completos. Por favor, sigue las instrucciones de los creadores de MkDocs sobre cómo configurar el software en tu ordenador.

Si MkDocs está configurado, dentro del directorio ejecuta esta secuencia:

```bash
$ mkdocs serve
```

para poner en marcha un servidor de desarrollo local que vigilará los archivos a medida que avanzas. Para construir la página localmente, ejecuta:

```bash
$ mkdocs construir
```

Más comandos y opciones están disponibles en su [página de inicio] (https://www.mkdocs.org/).

## Licencia

Esta documentación se licencia a través de la licencia GNU GPL v3.
