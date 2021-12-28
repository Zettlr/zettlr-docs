# Solución de problemas

Como cualquier otro  software, Zettlr podría tener algunos problemas aquí y allá. Si encuentra alguno de estos problemas, esta página contiene instrucciones sobre cómo resolverlos. Ahora tenemos cuatro años de experiencia con esos problemas, y alguna de las siguientes opciones debería funcionar en la mayoría de estos casos.

> Por favor intente los pasos listados aquí y  consulte las Preguntas frecuentes primero antes de preguntar en el Foro, Reddit, o abrir un _issue_ en GitHub. Al preguntar cosas en estas plataformas que ya han sido contestadas, estas desperdiciando recursos que nos encantaría invertir en desarrollar la app.

## 1. Intenta apagar y encender de nuevo

Esto puede sonar trivial, pero muchos de los problemas se pueden solucionar simplemente reiniciando Zettlr. Si encuentra un problema, frecuentemente se soluciona reiniciando la app, a veces reiniciando su computador.

> Si puedes reproducir el problema, esto es: el problema _siempre_ aparece después de que re lizas una acción determinada, esto puede indicar que has encontrado una forma de crear lo que se conoce como "estado irrevocable". En ese caso, y sólo entonces, por favor abre un _issue_ en GitHub dándonos un ejemplo como mínimo con la forma de reproducirlo. Entonces lo arreglaremos.

## 2. Instala la versión más reciente

Tan pronto como escuchemos sobre un problema, lo arreglaremos y un tiempo después publicaremos una nueva versión. Asegúrate de siempre tener la última versión publicada, porque las versiones anteriores tienen errores (de lo contrario serían las versiones más nuevas ;).

¡Así que asegúrate de siempre tener la versión más actual de Zettlr!

## 3. Intenta reiniciar la app

Hemos escuchado muchas veces que la app parece no funcionar (que por ejemplo no arranca). Lo que hemos encontrado es que a veces limpiar el cache ayuda. Esto parece estar relacionado con el  _framework_ de Electron que usamos. Él crea sus propios archivos de cache, sobre los cuales no tenemos control y aveces al borrarlos se solucionan los problemas.

Zettlr mantiene configuraciones locales y metadatos (etiquetas definidas por los usuarios, ubicaciones de lugares de trabajo, configuraciones, etc.). Podría querer reiniciar, leer, o modificar estos datos en algunos casos (por ejemplo si su instalación parece estar rota, si accidentalmente cargó un espacio de trabajo erróneo,  etc.).

Estos datos están ubicados en la _dirección de aplicación de datos_ cuya ubicación depende de tu sistema operativo:

* **Windows:** `C:\Usuarios\<tu-nombre-de-usuario>\AppData\Roaming\Zettlr` (note que AppData es una carpeta oculta, así que debería cambiar la configuración de su explorador para que se muestre.
* **macOS:** `/Usuarios/<tu-nombre-de-usuario>/Library/Application Support/Zettlr` (abre una ventana de _Finder_, presiona y mantén "Alt" mientras abres el menú "Go", y le das click en la entrada que aparece de  "Library")
* **Linux:** `/home/<tu-nombre-de-usuario>/.config/Zettlr` (note que `.config` es un archivo oculto, por eso deberías acceder mediante líneas de comando para abrirlo)

Si quieres reiniciar completamente tu instalación local de Zettlr, sigue estos pasos:

1. Primero asegúrate que Fa aplicación está cerrada (en algunos casos, hay un proceso "zombie", que puedes cerrar desde tu Gestor de tareas o Monitor de actividades)
2. Asegúrate de opcionalmente tener una copia de seguridad de estos archivos:
    * `stats.json` (tus estadísticas de escritura)
    * `config.json` (la configuración de la app — incluyendo la ubicación de tu espacio de trabajo y archivos abiertos)
    * `custom.css` (tus CSS's personalizados, si existe)
    * `tags.json` (tus colores de etiquetas configurados)
    * `targets.json` (tus objetivos de escritura)
    * `user.dic` (tu propio diccionario personalizado)
3. Selecciona todo lo que esté en este directorio y bórralo.
4. Reinicia la aplicación. Algunos de estos archivos serán creados nuevamente.

## 4. Pídele ayuda a la comunidad

Si ninguno de los pasos anteriores parece servir, puedes pedirle ayuda a la comunidad. A veces, alguien más ha encontrado un problema similar y podría ayudarte. La comunidad es activa tanto en  [el subreddit de Zettlr](https://www.reddit.com/r/Zettlr) como en [Discord](https://discord.com/invite/PcfS3DM9Xj), así que puedes escoger el que prefieras.

## 5. Abrir un _issue_ de GitHub

Si la comunidad no puede ayudarte, o si se trata de un tema que aparece en una discusión que parece ser más bien un error, por favor abre un _issue_ en GitHub. Asegúrate de incluir tanta información como sea posible para que podamos rápidamente atender el problema.

> Si abres un _issue_ en GitHub, asegúrate de recibir notificaciones. Casi siempre los desarrolladores tienen preguntas adicionales sobre el problema. Entre más rápido respondas, más rápido te ayudaremos en corregir el error. Si nadie responde tu  _issue_, esto puede indicar que no estamos seguros sobre cómo ayudarte. En ese caso, podría ser de ayuda replantearlo o agregar información adicional.
