# Instal·lació

La instal·lació de Zettlr és molt senzilla i només necessita un pas en tots els sistemes operatius. Zettlr és multiplataforma, de manera que s’executarà a la majoria d’ordinadors. Zettlr ve pre-construït per a macOS, Windows i molts sistemes Linux.

## Windows (7 o versions posteriors)

Per instal·lar Zettlr al Windows, descarregueu l'aplicació des de la [pàgina de descàrrega](https://www.zettlr.com/download) i feu doble clic per obrir l'instal·lador. Si voleu instal·lar Zettlr per a tots els usuaris, instal·leu-lo al directori principal de `Fitxers de programa` i, doneu-li drets elevats durant la configuració (us demanarà automàticament el vostre permís). No necessiteu cap dret si l’instal·leu per a l’usuari connectat.

Per desinstal·lar Zettlr, simplement executeu Uninstall.exe des del propi directori o utilitzeu la interfície de programa adequada per afegir / eliminar a la configuració del vostre sistema. Si voleu eliminar completament totes les dades associades a l'aplicació, també traieu el directori `C:\Users\<el vostre-nom-d'usuari>\AppData\Roaming\Zettlr`.

> L'instal·lador de Windows conté tant una versió de 32 bits com una versió de 64 bits del programa i s'instal·larà el que s'adapti al vostre sistema operatiu.

## macOS (10.10 o superior)

Per instal·lar Zettlr a macOS, només heu de descarregar el fitxer dmg de la versió més recent i muntar-lo. A continuació, arrossegueu la icona Zettlr al directori d'aplicacions i ja està!

Per desinstal·lar Zettlr, només cal eliminar Zettlr.app del directori d'aplicacions. Si voleu eliminar completament totes les dades associades a l’aplicació, també elimineu la carpeta `/Users/<el-vostre-nom-d'usuari>/Library/Application Support/Zettlr`.

> També podeu instal·lar Zettlr amb [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew install --cask zettlr`

## Linux (Debian 8 / Ubuntu 12.04 / Fedora 21 o posterior)

Hi ha paquets predefinits `deb` i `rpm` per a sistemes Linux. Simplement instal·leu el paquet al vostre sistema.

Per desinstal·lar-lo, seguiu els passos habituals que es necessiten per eliminar un paquet (normalment a través de l'aplicació de l'instal·lador gràfic o mitjançant `dpkg`). Si també voleu eliminar totes les dades associades a l'aplicació, també suprimiu el directori `/home/<el-vostre-nom-d'usuari>/.config/Zettlr`.

> Hi ha disponible un paquet mantingut per la comunitat d'Arch Linux. [El podeu trobar als repositoris oficials d'AUR](https://aur.archlinux.org/packages/zettlr-bin/). Tingueu en compte que aquest paquet està gestionat per la comunitat i no assumim cap responsabilitat quant a la seva estabilitat, seguretat o la versió que ofereix.

## AppImages

Si no utilitzeu una distribució Linux basada en Debian ni Fedora, sempre podeu instal·lar els fitxers AppImage. Si us plau, [consulteu la seva guia sobre com instal·lar-los](https://appimage.org/). AppImages es proporcionen tant per a sistemes de 32 bits com de 64 bits.

## Actualització de l'aplicació

L'aplicació comprova si hi ha actualitzacions noves cada vegada que inicieu l'aplicació. També podeu activar manualment la cerca d’actualitzacions mitjançant l’element de menú corresponent del menú Ajuda. Si hi ha disponible una nova versió, Zettlr us mostrarà un quadre de diàleg que contindrà el número de la nova versió, la vostra versió actual i un registre de canvis amb totes les funcions i correccions d'errors que conté la nova versió. A continuació, podeu obrir la pàgina de descàrrega per descarregar el nou paquet. Simplement instal·leu-lo sobre la vostra instal·lació actual, ja que primer eliminarà la versió anterior. Es conservaran totes les dades i es migrarà a la nova versió.

> Si esteu interessats en versions avançades, assegureu-vos de marcar la casella de selecció "Avisa'm de les versions beta" a la pestanya Avançat de la finestra de preferències.


## Restabliment de l'aplicació

Zettlr manté la configuració i les metadades locals (etiquetes definides per l'usuari, ubicació de l'espai de treball, configuració, etc.).
És possible que vulgueu restablir, llegir o modificar aquestes dades en casos particulars (per exemple, instal·lació fallida, error al camí de l’espai de treball, etc.).

Aquestes dades es troben a la _ruta d'accés de dades d'aplicació_, la ubicació del qual depèn del vostre sistema operatiu:

* ** Windows: ** `C:\Users\<el-vostre-nom-d'usuari>\AppData\Roaming\zettlr`
* ** macOS: ** `/Users/<el-vostre-nom-d'usuari>/Library/ Application Support/zettlr` (obriu una finestra del Finder, manteniu premuda la tecla "Alt" mentre obriu el menú "Go" i feu clic a "Library")
* ** Linux: ** `/home/<el-vostre-nom-d'usuari>/.config/zettlr`

Si voleu restablir completament la instal·lació local de Zettlr, seguiu aquests passos:

1. En primer lloc, assegureu-vos que l'aplicació està tancada (en alguns casos d'error, hi ha un procés "zombie", que podeu tancar des del gestor de tasques o el monitor d'activitats).
2. Assegureu-vos de fer una còpia de seguretat opcional d'aquests fitxers:
    * `stats.json` (les vostres estadístiques d'escriptura)
    * `config.json` (la configuració de l'aplicació, inclosa la ubicació dels vostres espais de treball i fitxers oberts)
    * `custom.css` (el vostre CSS personalitzat, si n'hi ha)
    * `tags.json` (les vostres etiquetes amb codis de colors)
    * `target.json` (els vostres objectius d'escriptura)
    * `user.dic` (el vostre propi diccionari personalitzat)
3. Seleccioneu tot el contingut d'aquest directori i suprimiu-lo.
4. Reinicieu l'aplicació. Alguns d’aquests fitxers es tornaran a crear.