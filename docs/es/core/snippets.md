# Fragmentos

Desde la versión 2.0, Zettlr tiene un sistema completo de fragmentos y plantillas. Esto te permite definir ciertos fragmentos de texto que tiendes a escribir con más frecuencia y también insertar variables dinámicas. El sistema en sí se basa en la sintaxis de TextMate y, como tal, hasta cierto punto es interoperable con fragmentos de código que ya posee para TextMate u otros sistemas que admitan esta sintaxis, como VisualStudio Code.

## Administrando tus fragmentos

Puede administrar tus fragmentos utilizando el [gestor de recursos](./ assets-manager.md).

A la izquierda, puedes encontrar una lista de todos los fragmentos; inicialmente estará vacío. Puedes agregar un nuevo fragmento haciendo click en el botón "+" - en la parte inferior de la lista. Inicialmente se llamará "snippet-X" (donde X es un número). Si seleccionas un fragmento, el editor de fragmentos mostrará el contenido del archivo en el editor y el nombre en el campo de texto que se encuentra encima.

Una vez que hayas realizado cambios en el fragmento, asegúrate de hacer click en "Guardar" o presiona `Cmd / Ctrl + S` para conservar los cambios. Para cambiar el nombre de un fragmento, simplemente escribe el nuevo nombre en el campo de texto del nombre sobre el editor de fragmentos y haz click en el botón.

> Ten en cuenta que el nombre del fragmento solo puede contener las letras de la A a la Z, números, guiones y guiones bajos. Esto se debe a que el nombre del fragmento se utilizará para el autocompletado en el editor. Si escribes otras letras, se reemplazarán con un guión.

Por último, el editor de admite un resaltado de sintaxis especial que te ayuda a escribir tus fragmentos. Las variables que no son compatibles se marcarán en rojo para que vea inmediatamente que puede haber un error.

> Tus fragmentos son en realidad archivos que residen en un directorio dentro de los datos de tu aplicación. Consulta [el manual de instalación](../ install.md) para conocer la ubicación exacta de esta carpeta. Los archivos de fragmentos siempre siguen el patrón `<nombre>.tpl.md`, donde`<nombre>`se refiere al nombre que le da a los fragmentos dentro de la IGU. Esto puede resultar útil para realizar copias de seguridad o compartir.

## Sintaxis del fragmento

Los fragmentos siguen la sintaxis conocida de TextMate que se puede resumir fácilmente:

* `$[1-9]`: Al escribir un signo de pesos seguido de un número, agrega un tabulador. Después de insertar un fragmento, esto te permitirá guiar tus pestañas de acuerdo con los números (por lo tanto, al escribir repetidamente "Tab" se moverá a través de estos números ascendentes).
* `$0`: El cero es una parada de tab especial. No es la primera parada de tab, sino la última. Si omites esto, el cursor terminará después del fragmento insertado, pero al colocarlo en algún lugar del texto, puedes controlar este comportamiento.
* `${[0-9]:[.]}`: Al rodear el tabulador con corchetes y agregar dos puntos, puedes definir un texto que se colocará por defecto en esta posición. Tan pronto como llegues a la pestaña especificada, se seleccionará este texto. Puedes dejarlo en su lugar simplemente presionando `Tab` nuevamente, o sobrescribirlo fácilmente. Ejemplo: `$ {5: Algún texto}` daría como resultado que el texto "Algún texto" se colocara en la pestaña número cinco, que se seleccionará cuando llegues presionando `Tab`.
* `$[A-Z_]`: Si usas caracteres latinos en lugar de números, define una variable que se puede reemplazar cuando insertas un fragmento. Las variables constan solo de caracteres en mayúscula y guiones bajos. Si cometes un error tipográfico, puedes detectarlo porque la variable será de color rojo.
* `${[A-Z_]:[.]}`: Al igual que con las pestañas, puedes definir texto predeterminado para las variables, que se insertará si la variable no se puede insertar (por ejemplo, la variable `CLIPBOARD` puede estar vacía si no hay texto en el portapapeles).

Por último, las variables disponibles son:

* `CURRENT_YEAR`: El año actual (4 dígitos)
* `CURRENT_YEAR_SHORT`: El año actual resumido (2 dígitos)
* `CURRENT_MONTH`: El mes actual (2 dígitos)
* `CURRENT_MONTH_NAME`: El nombre completo del mes (localizado según la configuración de su aplicación)
* `CURRENT_MONTH_NAME_SHORT`: El nombre corto del mes (localizado según la configuración de su aplicación)
* `CURRENT_DATE`: El día actual del mes (2 dígitos)
* `CURRENT_HOUR` La hora actual (formato de 24 horas; 2 dígitos)
* `CURRENT_MINUTE`: El minuto actual (2 dígitos)
* `CURRENT_SECOND` El segundo actual (2 dígitos)
* `CURRENT_SECONDS_UNIX`: La marca de tiempo actual de Unix en segundos
* `UUID`: Un UUID versión 4
* `CLIPBOARD`: El contenido de tu portapapeles (solo texto)
* `ZKN_ID`: Genera una ID de Zettelkasten (según tu patrón)

## Trabajando con tus fragmentos

Una vez que hayas creado tus fragmentos, puedes usarlos con la sintaxis de autocompletar conocida. Puedes activar el autocompletado de fragmentos escribiendo dos puntos (`:`), que abrirá una lista con los fragmentos disponibles. Puedes buscar un fragmento escribiendo algunos caracteres de su nombre. Dado que los nombres de los fragmentos no pueden contener espacios, los dos puntos son una forma fácil de activar esto: si no deseas insertar un fragmento, simplemente escribe un espacio (o cualquier carácter no alfanumérico) para cerrar el menú desplegable nuevamente.

Después de haber seleccionado un fragmento, Zettlr primero insertará el fragmento y luego reemplazará todas las variables de acuerdo con la sintaxis descrita anteriormente. Luego, creará marcadores de texto que denotan la posición de todas las pestañas y activará un nuevo mapa de teclas temporal que volverá a mapear dos teclas: `Tab` y` Esc`. Siempre que presione `Tab`, Zettlr se moverá a la siguiente pestaña. Si desea detener prematuramente la tabulación a través de estas pestañas, puede presionar "Esc". El mapa de teclas se eliminará y las teclas `Tab` y` Esc` funcionarán normalmente cuando se alcancen todas las pestañas o cuando presione `Esc`.

## Un fragmento para comenzar

En caso de que te interese lo que pueden hacer los fragmentos, simplemente copia y pega lo siguiente en un fragmento nuevo. ¡Pruébalo!

```markdown
---
title: "${1:Escribe un título}"
date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE
author: ${2:Escribe tu nombre}
id: $ZKN_ID
---

# ${1:Escribe un título}

$0
```

Así es como se ve después de haber completado automáticamente el nombre del fragmento. Puedes ver claramente que las pestañas restantes están coloreadas para que sean fácilmente discernibles.

![Un fragmento de código de ejemplo en el modo de autocompletar](../img/snippets_example.png)
