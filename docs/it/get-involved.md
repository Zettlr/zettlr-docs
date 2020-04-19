# Partecipa

Vuoi rendere Zettlr un programma ancora migliore? Grande! Sia che tu sia un utente, che tu voglia creare una nuova traduzione, o iniziare a sviluppare, sei nel posto giusto!

Do you want to make Zettlr an even better app? That's great! Whether you are a user, want to provide a new translation, or get into developing, you've come to the right place!

## Risorse generali

Zettlr possiede una vivace comunità che si aiuta a vicenda in rete. La lista che segue contiene i classici punti di partenza per ogni problema che potresti incontrare.

* [Forum utenti di Zettlr](https://forum.zettlr.com) — Qui potrai chiedere domande generali, discutere flussi di lavoro e concetti di Zettlr e anche condividere i tuoi temi personalizzati!
* [Subreddit di Zettlr](https://www.reddit.com/r/Zettlr) — Il subreddit di Zettlr è dedicato agli utenti di Reddit della comunità.
* [L'account ufficiale su Twitter](https://www.twitter.com/Zettlr) — Qui potrai seguire gli aggiornamenti in tempo reale del porgramma. È l'unico posto in cui annunciamo regolarmente tutto ciò che facciamo. In più partecipiamo alla gran parte delle discussioni, per cui se hai delle domande puoi farle qui.
* [La pagina ufficiale su Facebook](https://fb.me/Zettlrapp) — Puoi scriverci un messaggio qui, se non hai un account su Twitter. Normalmente, rispondiamo non appena possibile appena riceviamo la notifica, ma non possiamo garantirlo. Abbiamo questa pagina solo perché, beh — tutti hanno una pagina Facebook ormai 🤷‍♂️
* [Il nostro canale su YouTube](https://www.youtube.com/c/Zettlr) — Se sei più un tipo visuale, puoi trovare qui qualche video di introduzione.
* [L'issue tracker su GitHub](https://github.com/Zettlr/Zettlr/issues) — Questo è il centro dei nostri sforzi per migliorare costantemente il programma. Se trovi un bug, hai un suggerimento o vuoi proporre una funzionalità, questo è il posto giusto. Tuttavia, specialmente quando si tratta di domande che riguardano il flusso di lavoro utente o nuove funzionalità, **è meglio discuterne prima sul forum o su reddit**.

## Contributi degli utenti

In quanto utente che desidera un programma ben funzionante e bello da vedere, puoi stare in guardia per ogni errore che il programma potrebbe produrre e, più importante, segnalarcelo per rendere il lavoro più efficiente! Possiamo giudicare solo il nostro lavoro, per cui per migliorare il programma anche per te, abbiamo bisogno di sapere come. Ricorda sempre: non possiamo inserire nel programma flussi di lavoro in quanto tali bensì dobbiamo lasciare spazio anche ad altri flussi di lavoro. Tuttavia cercheremo di rendere più accessibili le funzionalità o farle funzionare meglio, fintanto che le conseguenze per i flussi di lavoro già esistenti non siano troppo in contrasto con i nuovi suggerimenti.

Ti preghiamo di segnalare errori aprendo un issue nel repository di GitHub. In questo modo potremo rispondere rapidamente e gestire direttamente il problema.

## Traduzione del programma

Accettiamo ogni aiuto per tradurre il programma in tutte le lingue del pianeta. Le traduzioni sono gestite dal nostro server delle traduzioni. Per tradurre, dovrai creare un account, che sarà usato solo come misura anti-spam. In più — ma solo se sei d'accordo — verrà riportato il tuo nome utente in tutte le traduzioni prodotte.

Tradurre è semplice. Basta cliccare su qualsiasi lingua sulla pagina principale per vedere la lista di tutti gli identificativi e tutte le traduzioni esistenti:

![Translation Keys](img/translations_list.png)

Nella prima colonna è possibile vedere tutti gli ID delle traduzioni. Saranno per la gran parte piuttosto intuitivi. Se non sai da dove cominciare, guarda la traduzione in inglese e all'interno del programma, in modo da capire a quale elemento corrisponda ciascun ID.

Abbiamo inserito un sistema di gestione della qualità basato sugli utenti, che consiste nella possibilità di votare le traduzioni presenti. Pertanto anche se non riesci a tradurre tu stesso, puoi votare tra tutte le traduzioni quella che giudichi più corretta. Quando qualcuno scarica una traduzione, il sistema sceglierà la stringa di traduzione più votata in modo da garantire che tutte le traduzioni siano verificate da voi, i nostri utenti!

[Per maggiori informazioni, si prega di consultare la nostra guida rapida al nostro servizio di traduzione](https://translate.zettlr.com/welcome).

## Sviluppo

Per iniziare a sviluppare, basta [fare un fork del repository](https://github.com/Zettlr/Zettlr), lavorare sulle tue modifiche, correzioni di bug ecc. e poi creare una pull request. Ti preghiamo di ricordarti di **effettuare una PR solo al develop branch!**
Il push del master branch è effettuato solo una volta che un nuovo rilascio è in sviluppo. Per cui se stai sviluppando una nuova funzionalità e viene rilasciata una nuova versione di Zettlr, ti basta effettuare un comando di pull per l`origin master` per essere di nuovo aggiornato e continuare a lavorare sulla tua funzionalità.

Se stai iniziando a sviluppare una funzionalità, è inoltre buona norma annunciarlo usando una nuova issue per far sapere a tutti che se ne sta già occupando qualcuno e massimizzare l'efficienza!

### Iniziare a sviluppare

Per iniziare, assicurati di avviare il tuo IDE preferito e fai partire il terminale. Zettlr è basato su NodeJS, per cui avrai bisogno dell'ultima versione di Node-Server e di un Node Package Manager. Zettlr preferisce [Yarn](https://yarnpkg.com/), ma ovviamente puoi usare anche NPM (viene installato insieme a Node).

Infine, assicurati di far partire tutto.

### Comandi CLI

Zettlr include molti comandi utili che puoi usare nel tuo processo di sviluppo. Vediamoli tutti.

> Puoi eseguire qualsiasi comando tra quelli che seguono o con `npm run <command>` o `yarn <command>`, a seconda del tuo gestore di pacchetti. Assicurati di eseguirli dalla cartella principale di Zettlr.

* `start`: Avvia il programma
* `build:quick`: Crea velocemente una build del programma per il tuo sistema operativo (se supportato da electron-builder) e la invia a `/release`.
* `release:this`: Come `build:quick`, ma il programma sarà inoltre creato in un pacchetto (come file `.dmg` su macOS, come installer `.exe` su Windows, o come pacchetto di Linux).
* `release:mac`: Rilascia esplicitamente una build per macOS
* `release:win`: Rilascia esplicitamente una build per Windows.
* `release:linux`: Rilascia esplicitamente una build per Linux.
* `less`: Esegue il convertitore LESS per convertire i tuoi file sorgente in `/resources/less` nei file finali di CSS in `source/common/assets/css`. Ogni volta che effettui dei cambiamenti agli stili, dovresti eseguire questo comando.
* `less:extract`: Estrae tutti gli ID e classi CSS dai file sorgente e li invia a `/resources/css_list.md`, uno per linea. É usato soltanto per generare il nostro [elenco di riferimento CSS personalizzato](https://docs.zettlr.com/core/custom-css/#complete-css-class-and-id-reference).
* `handlebars`: avvia il precompilatore Handlebars per convertire i template (per le finestre di dialogo e i popup) in quelli che saranno spediti insieme al programma nella cartella `/source/common/assets/tpl`. Ogni volta che cambi qualsiasi cosa in un file dentro `/resources/templates`, dovresti eseguirlo, altrimenti i tuoi cambiamenti non saranno visibili.
* `lang:refresh`: Scarica le più recenti versioni delle traduzioni di default `German (Germany)`, `English (United States)`, `English (United Kingdom)`, e `French (France)` da [translate.zettlr.com](https://translate.zettlr.com/) e li inserisce nella cartella `/source/common/lang`.
* `reveal:build`: ricostruisce i template per generare presentazioni revealJS.

Al di là di questi comandi, c'è un "comando master" che usiamo per un ciclo intero di rilascio di Zettlr. Si trova in `/scripts/make.sh` ed è una comando shell che eseguirà gran parte dei comandi di cui sopra per generare gli installers per Windows, macOS distribuzioni Linux basate su Debian, e distribuzioni Linux basate su Fedora. In più genererà un file `SHASUMS.txt`contenente i checksums per tutti e quattro gli installer. 

> Attenzione: attualmente il Make-script richiede Yarn e macOS. Non funziona con NPM o altre piattaforme. Questo è dovuto al comando per generare i checksums SHA256, che cambia tra macOS e le distribuzioni Linux.

### Struttura del progetto

E ora le cose davvero tecniche: La struttura del progetto! Per molti aspetti, la struttura segue le migliori pratiche dello sviluppo di programmi Electron. Tuttavia, il programma è _enorme_, e ti servirà quindi un po' di guida.

Iniziamo con la struttura delle cartelle (non è una lista esaustiva; sono elencate solo le cartelle e i file con cui lavorerai maggiormente):

```
Zettlr                 // The root directory
|
+ release              // Will be created when you build the app.
|
+ resources            // Contains everything for dev, but won't be shipped.
|  |
|  + less              // Contains the source-files for the CSS
|  |
|  + templates         // Contains the dialog and popup templates.
|
+ scripts               // Contains dev-scripts as mentioned above.
|
+ source                // Contains the actual application source.
|  |
|  + common             // Commonly used files
|  |  |
|  |  + assets          // CSS, Fonts, HB-runtime, images, JS, templates.
|  |  |
|  |  + lang            // Default languages and the i18n module.
|  |  |
|  |  + util            // Utility functions, used around the app.
|  |  |
|  |  + data.json       // Static data for the application.
|  |  |
|  |  + validate.js     // The validation module
|  |  |
|  |  + validation.json // Validation rules.
|  |
|  + main               // The main process files
|  |  |
|  |  + assets          // Assets for the main process
|  |  |
|  |  + commands        // All commands that can be executed reside here.
|  |  |
|  |  + providers       // Contains service providers for the app.
|  |
|  + print              // Source code for the print window
|  |
|  + quicklook          // Source code for the QuickLooks.
|  |
|  + renderer           // The main window code.
|  |  |
|  |  + assets          // Some assets used only in the renderer process.
|  |  |  |
|  |  |  + codemirror   // Contains all CodeMirror plugins
|  |  |  |
|  |  |  + context      // All files needed for the context menu
|  |  |  |
|  |  |  + toolbar      // Contains the toolbar template.
|  |  |
|  |  + dialog          // The modules for all dialogs in the app
|  |  |
|  |  + util            // Utility functions solely used in the renderer.
|  |
|  + main.js            // Entry point of the application.
|
+ CHANGELOG.md          // Contains a detailed list of all changes.
```
