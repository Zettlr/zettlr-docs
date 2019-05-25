# Participa

¿Quieres hacer Zettlr una app aún mejor? ¡Fantástico! Si seas un usuario, si quieras ayudar con una nueva traducción o si quieras empezar a desarrollar: eso es el lugar. 

Aquí voy a describir como hacerlo.

## Usuario

Como usuario que quiere una app atractiva para escribir, y que funcione bien, simplemente mantén tus ojos abiertos ante cualquier error que la aplicación pueda producir y, lo que es más importante, dínos cómo hacer que el flujo de trabajo sea más eficiente. Solo podemos juzgar nuestro propio flujo, así que para mejorar la app para ti también tenemos que saber como. Acuérdate: no podemos integrar un flujo de trabajo en sí en el diseño. Tenemos que hacer concesiones a otros flujos, pero intentaremos de que las funciones sean más accesibles o funcionen mejor siempre y cuando las desventajas para los flujos ya existentes y flujo sugerido no sean tan graves.

[Por favor, informanos de bugs abriendo `incidentes` el repositorio de GitHub](https://github.com/Zettlr/Zettlr/issues)! De este modo podemos responder al problema de manera rápida y directa. 

## Traducir la App

Agradecemos cualquier ayuda para traducir la aplicación a todos los idiomas del mundo. Las traducciones están administradas en nuestro servidor de traducciones. Para traducir necesitas una cuenta, la cual sólo sirve como medida anti-spam. Adicionalmente—pero sólo si lo deseas—te acreditarámos con tu nombre de usuario en todas las traducciones generadas que asististe.

Traducir es sencillo. Justo haz clic en un idioma en la página principal para ver una lista de todos los identificadores y todos sus traducciones ya existentes.

![Translation Keys](img/translations_list.png)

A la izquierda veras las IDs de traducción. La mayoría sera autoexplicativo. Si no sabe spor donde empezar, echale un vistazo a la traducción de inglés y a la app. Así sabrás que ID corresponda a que elemento.

Hemos implementado un sistema de control de calidad basado en los votos de nuesrtos usuarios. Así que incluso si no quieres traducir tu mismo, podrías revisar la traducciones existentes y votar por la que consideras correcta. Siempre cuando alguien descarga un archivo de localización, el sistema elegirá las partes con los más votos para asegurar que las mejores traducciones verificados por nuestros usuarios entren al archivo.

[Para más información, échale un vistazo al breve guía sobre el servicio de traduccion](https://translate.zettlr.com/welcome).

### Desarrollar

Para empezar el desarrollo, simplemente haz un `fork` (bifurcación) de Zettlr en GitHub, trabaja en las funciones que quieres desarrollar, corrección de bugs, etc., y abierta una petición de `pull` (para que el proyecto incorpoer tus cambios). Por favor, acuérdate hacer las ** `pull requests`(petición de incorporación) ¡sólo en la rama de desarrollo!** La rama principal se actualiza sólo cuando redactamos una versión nueva. Entonces, si estás desarrollando una funcionalidad nueva y nosortos publicamos nueva versión de Zettlr, simplemente haz un `pull` de `origin master` y fusionalo en tu rama de desarrollo para estar puesto al día y sigue a producir codigo.

¡Si estás empezando a desarrollar una nueva funcionalidad se recommiende annunciarlo usando `new issues` (incidente nuevo) para dejarnos saber y para maximizar la eficaz!