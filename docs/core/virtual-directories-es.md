# Carpetas Virtuales

Los Directorios Virtuales son una poderosa característica de Zettlr que te permiten ordenar y recolectar archivos arbitrariamente.
 Funcionan como una especie de caja en la que se pueden colocar los archivos manualmente.

## Crear carpetas virtuales

Carpetas virtuales representan subconjuntos de un determinado directorio. Las puedes crear haciendo clic con el botón derecho del ratón en cualquier directorio y seleccionando "Carpeta virtual nueva...". A continuación, puedes darles un nombre como lo harías con cualquier otro directorio. Las mismas reglas se aplican a los nombres de directorios virtuales que a los directorios regulares; no sólo para mantener un aspecto coherente en toda la aplicación, sino también para asegurarse de que el nombre es conforme con [JSON](https://en.wikipedia.org/wiki/JSON).

Los directorios virtuales aparecen entonces como sub-carpetas del directorio en el que los has creado. Se mantendrán por encima de todos los demás sub-carpetas, lo que te facilitará la búsqueda de los mismos. Además, están marcadas por un pequeño icono de recuadro y tienen un color diferente al de los directorios normales, lo que indica su estado especial.

## Añadir, eliminar y trabajar con archivos

Después de haber creado una carpeta virtual, actúa principalmente como una carpeta normal. Puede soltar archivos en ellas, renombrarlas y eliminarlas. Sin embargo, se aplica una restricción digna de mención:

> Sólo pueden añadir archivos que residan _dentro_ de la carpeta superior en la que se creó la carpeta virtual. Como las carpetas virtuales se supone que representan subconjuntos de una carpeta específica, eso significa que no se pueden añadir archivos que se encuentren _fuera_ de la carpeta.

Para eliminar archivos de la carpeta virtual, haz clic con el botón derecho del ratón en ellos dentro del directorio virtual (es decir: en su representación en color púrpura, **no en el archivo en sí) y, a continuación, seleccione la opción "Eliminar del directorio virtual".

Dentro del directorio virtual, todas las operaciones de los archivos están permitidas, incluso moverlos a diferentes directorios. Si renombras un archivo dentro de un directorio virtual, este cambio se reflejará tanto en el disco (es decir, en su carpeta "actual") como en la carpeta virtual. Si eliminas un archivo por completo, también se eliminará de todos las carpetas virtuales en los que haya estado.

## Otras restricciones de las carpetas virtuales

Entre no ser capaz de mantener archivos fuera de su carpeta superior, se aplican una serie de restricciones adicionales para trabajar con directorios virtuales..

1. No se pueden mover ya que están vinculados al directorio en el que se crean.
2. Las carpetas virtuales son persistentes (es decir, se almacenan en el disco), pero por supuesto no como una especie de directorio. Se almacenan en un llamado [Dot-file] (https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory), que presenta algunos problemas.
  1. En primer lugar: en los sistemas Windows siempre verá el archivo ``.ztr-virtual-directory`-, porque Windows no oculta archivos como todos los demás sistemas.
  2. En segundo lugar, muchos servicios en la nube no sincronizan los archivos Dot por razones de seguridad (por ejemplo, debe indicarle explícitamente a los clientes de Nextcloud que sincronicen los archivos Dot). Esto significa que si almacenas tus archivos utilizando un servicio de nube para acceder a ellos desde varios dispositivos, es probable que tus carpetas virtuales no se transfieran.