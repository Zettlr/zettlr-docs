# Participeu

Voleu fer de Zettlr una aplicació encara millor? Això és genial! Tant si sou una usuària o un usuari, si voleu proporcionar una traducció nova o si voleu començar a desenvolupar l'aplicació, heu arribat al lloc correcte.

## Recursos generals

Zettlr té una comunitat vibrant que s’ajuda mútuament a la xarxa. La llista següent conté els llocs comuns per començar per a qualsevol problema que pugueu tenir.

* [Fòrum d'usuaris de Zettlr](https://forum.zettlr.com): aneu aquí per fer preguntes generals, discutir els fluxos de treball i els conceptes de Zettlr i compartir els vostres temes personalitzats.
* [Zettlr subreddit](https://www.reddit.com/r/Zettlr): el subredit de Zettlr està destinat als redditors de la comunitat.
* [El compte oficial de Twitter](https://www.twitter.com/Zettlr): aquí podeu seguir les actualitzacions de l'aplicació en temps real. És l’únic lloc on anunciem regularment tot el que fem. A més, participem en la majoria de discussions, de manera que si teniu cap pregunta, podeu deixar-les aquí.
* [La pàgina oficial de Facebook](https://fb.me/Zettlrapp): aquí podeu enviar-nos un missatge si no teniu cap compte de Twitter.
* [El nostre canal de YouTube](https://www.youtube.com/c/Zettlr): si sou més visual, podeu trobar alguns vídeos introductoris aquí.
* [El rastrejador de problemes de GitHub](https://github.com/Zettlr/Zettlr/issues): aquest és el nucli dels nostres esforços per millorar i millorar l'aplicació. Si detecteu un error, teniu algun suggeriment o voleu proposar una funció, aquí teniu el lloc adequat. Tot i això, sobretot quan es tracta de preguntes sobre el flux de treball de l'usuari o les noves funcions, **és millor discutir primer les seves idees al fòrum o a reddit**.

## Contribucions dels usuaris

Com a usuari que vol una aplicació d’escriptura que tingui un aspecte bonic i que funcioni bé, només cal que mantingueu els ulls oberts davant de qualsevol error que es pugui produir a l’aplicació i, el que és més important, ens expliqueu com aconseguir que el flux de treball sigui encara més eficient! Nosaltres només coneixem el nostre propi flux de treball, de manera que per millorar l’aplicació també per a vosaltres, hem de saber com la feu servir. Recordeu sempre: no podem crear un únic flux de treball per defecte per a tothom, sinó que intentem que les funcions siguin més accessibles i afinables i busquem un punt mig entre els fluxus de treball existents i els nous suggeriments.

Informeu d’errors obrint una incidència al GitHub. D'aquesta manera, podem respondre ràpidament a l'informe i solucionar directament.

## Traduir l'aplicació

Donem la benvinguda a qualsevol ajuda per traduir l'aplicació a tots els idiomes d'aquest planeta. Les traduccions es gestionen al nostre servidor de traducció. Per traduir, haureu de crear un compte (això es només una mesura antispam). A més, però només si voleu, el vostre nom d'usuari apareixerà a totes les traduccions generades.

Traduir és senzill. Simplement feu clic a qualsevol idioma de la pàgina principal per veure la llista de tots els identificadors i totes les traduccions existents:

![Tecles de traducció](img/Translations_list.png)

A la part esquerra veureu tots els identificadors de traducció. La majoria s’expliquen per ells mateixos. Si no sabeu per on començar, només cal que mireu la traducció a l’anglès i l’aplicació. A continuació, sabreu quins identificadors de traducció es correspondran amb quins elements.

Hem implementat un sistema de gestió de qualitat basat en usuaris, que consisteix en poder votar les traduccions existents. Així, encara que no vulgueu traduir vosaltres mateixos, podeu revisar totes les traduccions i votar la que considereu correcta. Sempre que algú descarrega una traducció, el sistema prendrà les cadenes de traducció més ben valorades per garantir que totes les traduccions han estat verificades per vosaltres, els nostres usuaris.

[Per obtenir més informació, consulteu la breu guia del nostre servei de traducció](https://translate.zettlr.com/welcome).

## Desenvolupament

Per començar a desenvolupar, simplement [obriu una bifurcació](https://github.com/Zettlr/Zettlr), treballeu en les vostres modificacions, solucions d'errors, etc. i, a continuació, obriu les sol·licituds d'entrada (pull request) **només a la branca de desenvolupament.** La branca mestra només s'empila (push) amb cada nova versió. Per tant, si esteu desenvolupant una nova característica i es publica una nova versió de Zettlr, només haureu d'incorporar (pull) el "master upstream" per tornar a estar al dia i seguir desenvolupant la vostra branca.

Si esteu començant a desenvolupar una característica, és aconsellable anunciar-ho amb una incidència (issue): així els altres saben que ja hi ha algú treballant-hi i es maximitza l'eficiència.

## Configureu el vostre entorn de desenvolupament

Per configurar-ho tot, assegureu-vos d'iniciar el vostre IDE preferit i el terminal. Zettlr es basa en [NodeJS](https://nodejs.org/), de manera que haureu de tenir instal·lat el servidor de nodes actual al vostre sistema i un gestor de paquets de nodes. Zettlr prefereix [Yarn](https://yarnpkg.com/).

A continuació, assegureu-vos d’inicialitzar-ho tot.

** Amb Yarn **

```bash
$ git clon https://github.com/Zettlr/Zettlr.git
$ cd Zettlr
$ yarn install
$ cd source
$ yarn install
```

La segona ordre `install` a la carpeta `source` és necessària, perquè fem servir l'estructura de dos carpetes de l'[electron-builder](https://www.electron.build/).

> Les ordres `install` precompilaran tots els recursos per primera vegada perquè pugueu `start` immediatament l'aplicació. Tanmateix, si canvieu aquests recursos, els haureu de tornar a compilar per veure els canvis. Consulteu la secció sobre ordres de desenvolupament per esbrinar quines ordres podeu utilitzar.

### Ordres de desenvolupament

En aquesta secció s'enumeren totes les ordres disponibles que podeu utilitzar durant el desenvolupament de l'aplicació. Aquestes es defineixen a `package.json` i es poden executar des de la línia de comandes  prefixant-les amb `npm run` o `yarn`, en funció del gestor de paquets que utilitzeu. Executeu-les des de la carpeta base del repositori.

#### `build:quick`

Aquesta ordre crea l'aplicació localment sense empaquetar-la. Això vol dir que dins del directori `release` trobareu un binari preconstruït, en funció del vostre sistema operatiu.

#### `csl:refresh`

Es descarregaran els fitxers [CSL](https://citationstyles.org/), Citation Style Language (llenguatge d'estils de citació), amb els quals s’alimenta l’aplicació i els col·loca als fitxers `source/main/assets/csl-locales` i `source/main/assets/csl-styles`, respectivament. De tant en tant podeu executar aquesta ordre per obtenir possibles actualitzacions dels repositoris.

#### `handlebars`

Això torna a compilar els fitxers de les plantilles [Handlebars.js](https://handlebarsjs.com/) i les precompila a la carpeta `source/common/assets/handlebars`.

#### `lang:refresh`

Es descarregaran les quatre traduccions predeterminades de l'aplicació de [Zettlr Translate](https://translate.zettlr.com/), amb les quals s'empaqueta per defecte. Col·loca els fitxers al directori `source/common/lang`. Actualment, els idiomes predeterminats són: alemany (Alemanya), anglès (EUA), anglès (Regne Unit) i francès (França).

#### `less`

Això torna a generar els fitxers CSS de la font [LESS](http://lesscss.org/) i col·loca els fulls d’estil finals al directori `source/common/assets/css`. Heu d'executar aquesta ordre cada vegada que modifiqueu la font LESS per veure els canvis reflectits en l'aparença de l'aplicació. _Nota: durant un desenvolupament intens, pot ser que sigui més fàcil vigilar els fitxers LESS i recompilar-los automàticament. Podeu fer-ho executant l'ordre `watch`._

#### `lint`

Això simplement executa [ESLint](https://eslint.org/) amb la configuració i genera un fitxer `eslint_report.htm` a la carpeta base del repositori amb els resultats. Aplicacions com [Atom](https://atom.io/) o [Visual Studio Code](https://code.visualstudio.com/) executaran automàticament ESLint en segon pla, però si voleu assegurar-vos, executeu aquesta ordre abans d'enviar una sol·licituds d'entrada (pull request).

#### `release:this`

Aquesta ordre és bàsicament `build:quick`, però, a més, l'empaqueta per a la vostra plataforma. Això vol dir que escopirà un paquet `.deb`, `.rpm`, `.dmg` o `.exe`, segons el vostre sistema operatiu.

#### `release:app-image`

Crea explícitament l’instal·lador [AppImage](https://appimage.org/). Aquesta ordre compila versions de 32 i 64 bits.

#### `release: linux`

Crea explícitament paquets d’instal·lació per a Linux, és a dir: Un paquet `.deb` i un paquet `.rpm`.

#### `release:mac`

Crea explícitament una versió per a macOS. _Nota: aquesta ordre només funciona a macOS._

#### `release:win`

Crea explícitament un instal·lador per a Windows. El paquet d’instal·lació és significativament més gran que els altres instal·ladors, ja que `electron-builder` envia l’instal·lador amb ambdues versions (32 i 64 bits). _Nota: aquesta ordre requereix un sistema operatiu basat en Windows o una distribució Linux. Mentre els desenvolupadors de [WINE](https://www.winehq.org/) no portin la biblioteca a 64 bits, aquesta ordre fallarà en macOS Catalina i en versions posteriors._

#### `revelar:build`

Torna a compilar els fitxers font necessaris per a l'exportador per crear presentacions de [revel.js](https://revealjs.com/). A causa de la naturalesa de com [Pandoc](https://pandoc.org/) crea aquestes presentacions, Zettlr ha de modificar la sortida de Pandoc, motiu pel qual aquests fitxers han de ser prèviament compilats.

#### `start`

Aquesta ordre revoluciona (spins up) Electron i executa l'aplicació. L’utilitzaràs amb força freqüència durant el desenvolupament.

#### `test`

Això executa les proves unitàries al directori `./test`. Assegureu-vos d'executar aquesta ordre abans d'enviar una sol·licitud d'entrada al repositori (pull request), ja que s'executarà cada vegada que es publiqueu una proposta (commit) per al repositori. D'aquesta manera podeu assegurar-vos que els vostres canvis no trenquin cap prova, cosa que facilita tot el procés.

#### `test-gui`

Prepara una carpeta de prova (situat al vostre `./resources`) i li diu a Zettlr que s'executi amb una configuració senzilla modificada. D'aquesta manera, podeu provar algunes coses que poden destruir fitxers sense tocar els vostres propis fitxers.

#### `watch`

Això engega un procés que observa els canvis de la font LESS. Mentre s’executi aquest procés, cada canvi a un fitxer LESS activarà una compilació de manera que pugueu veure immediatament els canvis en una aplicació Electron en execució prement `F5` per actualitzar la GUI.

#### `wp:dev`

Compila els actius [Vue.js](https://vuejs.org/) de la carpeta `resources`. Això indica a [Webpack](https://webpack.js.org/) que compili en mode de desenvolupament, cosa que augmenta el registre i facilita la depuració. Assegureu-vos d'executar `wp:prod` si voleu crear una versió.

#### `wp:prod`

Compila els Vue-assets desde la carpeta de recursos. Això indica a Webpack que compileu en mode de producció, cosa que disminueix el registre i fa que els scripts generats s'executin més ràpidament. Es recomana executar `wp: dev` en cas que necessiteu depurar els fitxers Vue.

### Senyaladors de la línia de comandes

Zettlr també inclou alguns indicadors de línia d'ordres que es poden utilitzar tant a la versió de desenvolupament com a la versió final. Simplement executeu l'aplicació passant el senyalador. Durant el desenvolupament, n'hi ha prou amb fer servir `yarn start --flag` (substituïu "flag" per el senyalador corresponent).

#### `--config <configFile.json>`

Passeu aquest indicador per utilitzar temporalment un fitxer de configuració diferent. El fitxer de configuració ha de tenir el format que espera Zettlr (consulteu la classe ConfigProvider a la base de codis), però també pot ser un stub, és a dir, que només contingui les opcions necessàries que vulgueu utilitzar. Totes les opcions que Zettlr espera i que no estiguin establertes en aquest esquelet es configuraran per defecte. Això és extremadament útil si voleu canviar ràpidament l’arbre de fitxers que l’aplicació carregarà, per exemple, per a proves. L'ordre `test-gui` fa servir el senyalador `--config` per canviar ràpidament els fitxers carregats per fitxers inofensius amb els quals podeu jugar.

> Nota: el senyalador espera un camí absolut, així que assegureu-vos de passar-hi un camí absolut. Els camins relatius poden no funcionar com s’esperava (Correcte: `--config /Users/name/Documents/custom-config.json`; Incorrecte: `--config ../resources/my-custom-config.json`).

#### `--clear-cache`

Utilitzeu aquest indicador per obligar Zettlr a esborrar la memòria cau de FSAL. Això és especialment útil si canvieu alguna cosa a l’arquitectura subjacent del sistema de fitxers, ja que els canvis no es detectaran sense modificar el fitxer (és a dir, l’aplicació es comportarà com si no hi afegissiu les propietats addicionals, perquè sempre tornarà a la memòria cau). A més, això pot ajudar quan es produeixen problemes inesperats.

### Estructura del projecte

Ara passem a les qüestions tècniques reals: l’estructura del projecte. En la majoria dels aspectes, l’estructura s’adhereix a les millors pràctiques pel que fa al desenvolupament d’aplicacions E1ectron. Tot i això, l'aplicació és _enorme_ i, per tant, necessiteu algunes indicacions.

Primer abordem l'estructura de directoris (aquesta és una llista no exhaustiva; només es cobreixen les carpetes i fitxers en què treballareu principalment):

```
Zettlr                  // La carpeta arrel.
|
+ release               // Es crearà quan construiu l'aplicació.
|
+ resources             // Conté tot el necessari per al desenvolupament, però no s'enviarà.
|  |
|  + less               // Conté els fitxers font del CSS.
|  |
|  + templates          // Conté els diàlegs i les finestres emergents.
|  |
|  + vue                // Conté els components Vue.
|
+ scripts               // Conté els scripts de desenvolupament (com s'explica a dalt).
|
+ source                // Conté les fonts de l'aplicació actual.
|  |
|  + common             // Fitxers utilitzats habitualment.
|  |  |
|  |  + assets          // CSS, Tipus de lletra, HB-runtime, imatges, JS, plantilles.
|  |  |
|  |  + lang            // Llengües per defecte i mòdul i18n.
|  |  |
|  |  + util            // Funcions d'utilitat, utilitzades al voltant de l'aplicació.
|  |  |
|  |  + data.json       // Dades estadístiques per a l'aplicació.
|  |  |
|  |  + validate.js     // Mòdul de validació.
|  |  |
|  |  + validation.json // Regles de validació.
|  |
|  + main               // Fitxers del procés principal.
|  |  |
|  |  + assets          // Assets per al procés principal.
|  |  |
|  |  + commands        // Totes les comandes que es poden executar viuen aquí.
|  |  |
|  |  + modules         // Conté mòduls.
|  |  |
|  |  + providers       // Conté els proveïdors de servei per a l'aplicació.
|  |
|  + print              // Codi font per la finestra d'impressió.
|  |
|  + quicklook          // Codi font per la ullada ràpida.
|  |
|  + renderer           // Codi de la finestra principal.
|  |  |
|  |  + assets          // Alguns assets que només s'utilitzen en el procés de renderització.
|  |  |  |
|  |  |  + codemirror   // Conté tots els connectors CodeMirror.
|  |  |  |
|  |  |  + context      // Tots els fitxers que el menú contextual necessita.
|  |  |  |
|  |  |  + toolbar      // Conté la plantilla per a la barra d'eines.
|  |  |
|  |  + dialog          // Els mòduls per a tots els diàlegs de l'aplicació.
|  |  |
|  |  + util            // Funcions d'utilitat que només s'utilitzen per a la renderització.
|  |
|  + main.js            // Punt d'entrada de l'aplicació.
|
+ CHANGELOG.md          // Conté una llista detallada de tots els canvis.
```

### Diccionari

Un mòdul no sempre és necessàriament un mòdul, però els directoris i les carpetes poden significar el mateix. A causa de les ambigüitats semàntiques, vam decidir incloure aquesta secció de glossari perquè els termes que sovint s'utilitzen a l’ecosistema de Zettlr s’entenguin bé. _Nota: hem afegit en cursiva el terme en anglès_

#### Carpeta/Directori (_Folder/Directory_)

S’utilitza indistintament per indicar carpetes d’un sistema de fitxers. A la versió original (en anglès), Zettlr  utilitza majoritàriament "directory" que significa efectivament el mateix que "carpeta". Per a la traducció al català hem preferit "carpeta", que significa el mateix que "directori".

#### Barra lateral (_Sidebar_)

Es refereix a la barra lateral esquerra de la GUI que conté els directoris arrel carregats.

#### Arrel (carpeta/fitxer) (_Root (directory/file)_)

Això significa una carpeta de nivell superior que és visible a l'aplicació. Això n_no_ significa que és la carpeta arrel del sistema de fitxers del vostre ordinador. Exemple: Mentre `/home` és un directori de nivell arrel en una instal·lació de Linux, `/home/user/Zettlr` és un directori arrel _en el context de Zettlr_, si es carrega com a directori arrel. Totes les carpetes i fitxers d’aquest directori no són, per tant, arrel.

#### Barra lateral de fitxers adjunts (_Attachment Sidebar_)

Es refereix a la barra lateral dreta de la GUI que conté fitxers addicionals i la bibliografia. No estem del tot satisfets amb el terme, així que si en teniu un de millor, si us plau, proposeu-lo.

#### Mòdul (_Module_)

Tot i que Zettlr generalment segueix la definició de mòduls proposada per [NPM](https://www.npmjs.com/get-npm), també hi ha "submòduls" dins del procés principal, com ara la capa d'abstracció del sistema de fitxers o l'exportador. Els considerem mòduls perquè són mòduls autosuficients als quals l’aplicació accedeix i exposa una API que utilitza l’aplicació.

#### Proveïdor de servei (_Service Provider_)

Un proveïdor de serveis és una classe que s’instancia durant l’arrencada i que continua funcionant fins que l’aplicació es tanca. Aquests proveïdors ofereixen funcionalitat adjuntant determinats objectes funcionals (una espècie d'API interna) a l'objecte `global`. Un exemple és el proveïdor de registres, que es pot utilitzar per registrar, per exemple, `global.log.verbose ("Un missatge!")`. Una altra és la configuració, a la qual es pot accedir de manera similar, per exemple, `global.config.get ('config.value')`.

#### Ordre (_Command_)

Tot i que una ordre de l’ecosistema Zettlr denota principalment allò que generalment associaria amb el terme en un context d’enginyeria de programari, hi ha una classe d’ordres que és especial. Sobretot, si parlem d’ordres, ens referim a una de les ordres del subdirectori `source/main/commands`. Aquestes ordres es criden cada vegada que l'usuari realitza una acció conscient que fa alguna cosa, com ara obrir un fitxer, exportar o desar el fitxer.

#### Finestra (_Window_)

En el context de Zettlr, una finestra no només implica una finestra literal que l’aplicació pot obrir, sinó molt més. En general, a causa de l'estructura de les aplicacions Electron, una finestra està formada per: una classe de control en el procés principal, una classe de control en el procés de renderització respectiu que s'inicia per a cada finestra i un fitxer HTML que es carrega a la finestra.

#### Diàleg (_Dialog_)

Un diàleg a Zettlr és una superposició sobre la finestra principal que mostra informació i també pot proporcionar formularis per a la configuració, etc. Un exemple de diàleg pot ser les preferències, el gestor d'etiquetes, el núvol d'etiquetes o la configuració del PDF.

#### Finestra emergent (_Popup_)

Una finestra emergent és similar als diàlegs, només que no crea una superposició de pàgina completa, sinó una finestra més petita en pantalla amb una fletxa que apunta a l'element de referència. No s'ha de confondre amb els `tippy.js-tooltips` (consells) que no són interactius.

#### Notificació (_Notification_)

Per notificació entenem bàsicament les notificacions en pantalla que es mostren a l'extrem superior dret de l'aplicació.

#### Barra d'eines (_Toolbar_)

La barra d'eines és la col·lecció de botons a la part superior de la finestra principal de Zettlr.

#### Editor (_Editor_)

Per Editor entenem, en general, la instància principal de CodeMirror llançada a la finestra principal de Zettlr. No ens referim a les altres instàncies de CodeMirror que s'obren, per exemple, al quadre de diàleg CSS personalitzat o a les finestres QuickLook.

#### Dóna-hi una ullada/ullada (_QuickLook_)

De manera similar a la funció QuickLook de macOS, es tracta de finestres (natives) més petites que permeten previsualitzar un fitxer però no editar-lo.

#### Eines de desenvolupament (_DevTools / Development Tools_)

Les eines de desenvolupament són les que podeu obrir a les finestres Zettlr que us permeten depurar la GUI. Funcionen de la mateixa manera que els eines desenvolupament incloses amb els navegadors Chrome i es poden obrir quan el mode de depuració està habilitat.

#### Tema (_Theme_)

Tot i que un tema del context Zettlr denota el mateix que a qualsevol altre lloc, l’hem inclòs aquí per subratllar que hi ha un fitxer CSS addicional carregat: `geometry.css`. Aquest proporciona la disposició geomètrica i la mida dels elements, mentre que el tema només proporciona coloració.
