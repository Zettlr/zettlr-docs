# El gestor de archivos

El administrador de archivos es básicamente un Explorador integrado (o Finder, si está en una Mac) adaptado a las necesidades de Zettlr. Es uno de los componentes principales de la aplicación.

## Generalidades

En las preferencias, puede elegir el modo de administrador de archivos:

* **Expandir**: En el modo extendido, tanto el archivo _árbol_ como el archivo _lista_ serán visibles. El árbol de archivos no muestra archivos individuales (excepto archivos independientes).
* **Combinar**: En el modo combinado, solo verá el árbol de archivos que luego también incluirá archivos.
* **Comprimir**: en el modo comprimido, tiene acceso tanto al árbol de archivos como a la lista de archivos, pero solo se mostrará uno a la vez.

El modo Comprimido se permiten varias formas de alternar entre su árbol de archivos y la lista de archivos. Si actualmente ve el árbol de archivos, pero desea ver la lista de archivos, simplemente haga click en cualquier directorio. Zettlr luego cambiará a la lista de archivos, mostrándote todos los archivos dentro de ese directorio. Si actualmente ve la lista de archivos, simplemente mueva el mouse sobre el área superior de la lista de archivos. Aparecerá una flecha en la que puede hacer clic para volver al árbol de archivos.

Si tiene un trackpad o un mouse que admita el desplazamiento horizontal, también puede hacer uso del desplazamiento horizontal para cambiar de un lado a otro, que en muchos casos es mucho más rápido que hacer clic en algún lugar.

> **Nota**:  Por favor consulte el [manual de configuración](../ reference / settings.md) para obtener más información sobre los modos del gestor de archivos. 

## La lista de archivos

La lista de archivos muestra todos los directorios y archivos dentro del directorio que está seleccionado actualmente en la vista de árbol, pero no como un navegador de archivos normal: **la lista de archivos trata todos los subdirectorios como iguales y los muestra todos uno tras otro.** Por lo tanto, no es necesario que se adentre más en el árbol de directorios para llegar a los directorios ocultos.

Si desactivó la metainformación, tanto los directorios como los archivos se mostrarán como una sola línea. Si muestra la *información del archivo*, verá información adicional: los directorios le mostrarán la cantidad de archivos y carpetas que contienen. Los archivos, por otro lado, muestran su última fecha de modificación, cualquier etiqueta, una identificación y más.


> You can toggle the file information via the "View" menu, by pressing `Cmd/Ctrl+Alt+S`, or the relevant setting in the preferences dialog under the General tab

![The possible meta information of files](../img/file_meta.png)

Additionally, you can traverse the directory tree within the file list by clicking on the directories. A simple click will select the directory and move further down the tree, while `Alt+Click` will select its parent directory. This is useful if you have to switch directories often, but prefer the thin mode of the sidebar and don't want to switch to the tree view repeatedly.

> Within the file manager, you can perform most actions that you can also perform in your Explorer/Finder/file browser as you would expect it, such as opening, duplicating, creating, and removing files, dragging them around, and more.

### File and Folder Properties

Each file and each folder also has properties. You can view them by right-clicking any file or folder, and choosing the corresponding menu item.

![A properties dialog for a directory](../img/directory_properties.png)

Each folder can be turned into a [Project](../academic/projects.md) by clicking the switch in its property popover. Afterwards you can fine-tune its project settings. Also, you can select a directory icon which makes it easier to identify the directory visually. Lastly, you can sort directories in their property popovers. Files, on the other hand, show you their tags, ID, and other useful information. You can also set writing targets in the properties of a file.

![Writing Targets Counter](../img/writing_targets.png)

> To remove the writing target from a file, simply set the writing counter to zero.

Both file and folder property popovers show you some general information, like the last modification time, their creation time, and their size.

## Structural Implications for the File List

Each time you select a directory, the file list will display _all_ files and folders in this directory. Simply put, it flattens all your different subdirectories and files from the tree-like structure that is being resembled by the file tree into a one-dimensional list. The list will always change its contents whenever you select a different directory in the tree view.

> The list only displays all directories and files _within_ the currently selected directory. Therefore it works a little bit like a very fast search function. You only see the files in a specific directory and, when you move down level by level, less and less files are visible until only one directory and its files are visible. Given a good structure inside your root, this is a powerful way to only have those files in the list that you actually need.

As the file list flattens your complex directory tree, it has to make some assumptions on how to adequately _display_ the files. Therefore the following rules help you distinguish where the files are actually present on your disk:

1. The currently selected directory will be on top of the list of files. Always.
2. All files that are inside this directory are placed directly beneath this directory name.
3. All subdirectories that are _inside_ this directory will always be at the bottom of the file list, i.e., _after_ the files in the selected directory.
4. If directories are empty, they will be placed immediately after each other with no files in between.

So what is important to remember is: All directories will be displayed as if they reside on the very same level; as if they weren't nested. To identify which directories contain which, please refer to the tree view.

> If you do not like the "natural" sorting of Zettlr (so that 10 comes after 2), you can switch to "ASCII" sorting in the General tab of the settings dialog (so that 2 comes after 10).
