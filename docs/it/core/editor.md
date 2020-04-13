# L'Editor

Zettlr di base è un potente editor di Markdown. Utilizza un software altamente specializzato chiamato **CodeMirror** e pertanto offre fin da subito moltissime funzioni.

In questa sezione imparerai a scrivere in Markdown, i comandi a disposizione, alcune funzioni speciali di CodeMirror e come funziona il correttore ortografico.

## Scrivere in Markdown

L'idea alla base di Zettlr è rimuovere l'eccesso di formattazione e di marcatura nella tua attività di scrittura. Mentre scrivi, ciò che conta è il _contenuto_ che produci, non il formato in cui lo presenti. Un minimo di formattazione c'è, ovviamente. Ma quando si tratta di colori o di allineamento del testo, nessuno ha davvero bisogno di tutte quell'abbondanza di opzioni per iniziare a scrivere. La formattazione viene _dopo_.

Per questo in Zettlr si scrivono file `Markdown`. Markdown è un linguaggio di marcatura molto semplice che contiene solo pochi simboli di formattazione che magari conosci già! Negli ultimi anni sempre più programmi hanno scoperto le potenzialità di Markdown, e persino WhatsApp lo usa per consentire una semplice formattazione dei messaggi.

Un documento Markdown consiste solo e soltanto di testo e questo comporta molti vantaggi:

* Markdown è **piattaforma-indipendente**. Qualunque file Markdown scritto su macOS può—senza nessuna conversione—essere modificato su Windows o Linux. C'è solo bisogno di un editor di testo. E ogni sistema operativo ne ha uno già integrato, con "Blocco Note" (Windows), "TextEdit" (macOS) o "GEdit" (Ubuntu).
* La sintassi di Markdown è tale per cui **anche senza nessuna evidenziatura della sintassi, si capisce la struttura di un documento Markdown**. Anche senza l'utilizzo di stili è facile notare tutti i titoli perché iniziano con dei cancelletti (#), gli elenchi sono indicati con punti o numeri e il testo enfatizzato è incluso tra trattini bassi (underscore) o asterischi.
* Markdown è uno **standard open source**, il che significa che chiunque può includerlo in un programma (proprio come abbiamo fatto noi!) e cominciare a sviluppare usandolo come base. Significa anche che è possibile **aspettarsi che la gran parte dei programmi siano in grado di capirlo**.
* Anche se Markdown è così semplice e non aggiunge di per sé alcun tipo di formattazione, qualsiasi programma può rappresentarlo in maniera diversa. **Ci sono un'infinità di programmi di Markdown che usano differenti approcci alla scrittura**. Se Zettlr non è adatto a te, puoi sempre scegliere tra una pletora di diversi programmi gratis e open source.
* I documenti Markdown contengono solo la formattazione essenziale per poter essere compresi dai programmi.  Pertanto **i documenti Markdown sono circa dieci volte più piccoli rispetto ai formati degli editor di testo convenzionali**
* E molto altro ...

> Se vuoi sapere precisamente cosa possa fare Markdown o meno, consulta la [sezione **Markdown**](../reference/markdown-basics.md).

## Modificare il testo

Modificare il testo in Zettlr è semplice. Basta creare un nuovo file o selezionarne uno esistente, cliccare dentro l'editor e iniziare a scrivere. Usa la formattazione Markdown come ritieni necessario e utilizza alcune scorciatoie da tastiera per formattare con ancora più facilità:

* `Cmd/Ctrl+B`: Rende il testo in **grassetto**
* `Cmd/Ctrl+I`: _Enfatizza_ il testo
* `Cmd/Ctrl+K`: Crea un nuovo`[collegamento](https://www.zettlr.com)`. Il testo selezionato diventa la descrizione—devi solo aggiungere l'URL. E se è già presente negli appunti un URL valido, Zettlr lo legge come tale, il che significa che non devi fare nient'altro!
* `Cmd/Ctrl+Shift+I`: Inserisci un'immagine. Se hai selezionato del testo, esso diventerà la descrizione dell'immagine. È necessario solo aggiungere il percorso di un'immagine, oppure copia prima il percorso di un'immagine e Zettlr aggiungerà automaticamente il percorso copiato!
* `Tab`: Aumenta il rientro di una lista.
* `Shift-Tab`: Riduce il rientro di un lista di un livello.

Ovviamente tutte le altre scorciatoie di default che funzionano in un qualunque editor di testo funzioneranno anch'esse di default: copia un testo con `Cmd/Ctrl+C`,  incollalo con `Cmd/Ctrl+V` oppure taglialo utilizzando `Cmd/Ctrl+X`. Annulla e rifai sono anch'essi supportati, così come anche rimuovere intere parole o righe. Scrivi esattamente come sei abituato a scrivere.

## Mantenere il formato facendo Copia & Incolla

Ovviamente è fondamentale che tu possa lavorare anche con del testo già formattato. Per esempio, potresti dover incollare del testo già formattato da un documento di Word o da una pagina web. Per farlo, semplicemente copia quel testo e incollalo. Zettlr rileva automaticamente che è un testo formattato e lo converte prima di incollarlo. Se invece non vuoi incollarlo come testo formattato, ma solo come testo, tieni premuto `Shift` mentre incolli. Questo dirà a Zettlr di non convertire il testo in Markdown.

> Consulta la sezione delle [Scorciatoie da tastiera](../reference/shortcuts.md) per un elenco di tutte le scorciatoie disponibili.

## Funzioni speciali di CodeMirror

Poiché CodeMirror è così potente, ci sono anche altre ottime opzioni che puoi usare (se ti servono).

* Premi `Cmd` (macOS) o `Alt` (Windows/Linux) mentre clicchi ovunque nel testo. In questo modo avrai **due cursori** a tua disposizione! È particolarmente utile per risparmiare tempo se devi scrivere del testo numerose volte. Per disabilitare la modalità multi-cursore, clicca ovunque nel testo senza premere nessun tasto.
* Premi `Cmd` (macOS) o `Alt` (Windows/Linux) e seleziona del testo. Adesso puoi selezionare insieme **diverse porzioni di testo**. È utile quando vuoi creare in una sola volta due o più collegamenti. Seleziona le porzioni di testo che dovranno servire come descrizioni del collegamento e premi `Cmd/Ctrl+K` per trasformare tutte le selezioni in collegamenti — tutte insieme! Funziona anche con tutti gli altri comandi, per esempio rendere il testo in grassetto o corsivo, o per creare citazioni.
* Se non è selezionato niente, premere `Cmd/Ctrl+X` **taglierà l'intera riga**. Premere dopo `Cmd/Ctrl+V` **inserirà un'intera riga sopra a quella in cui si trova il cursore **
* CodeMirror **chiude automaticamente le virgolette e le parentesi** per farti risparmiare tempo! Ogni volta che digiti un carattere " o ( ti presenterà automaticamente il corrispondente carattere di chiusura. Inoltre, quando hai finito di scrivere con il testo incluso tra quei caratteri premi di nuovo " o ), e _non verrà inserito quel carattere una seconda volta_, ma verrà semplicemente "saltato"! Funziona anche con del testo selezionato. Se hai selezionato qualcosa e premi uno di questi caratteri, la selezione verrà inclusa con la coppia di quei caratteri. 

## Correttore ortografico

Zettlr è dotato anche di correttore ortografico. Nelle Preferenze, puoi selezionare tutte le lingue per cui il tuo testo dovrebbe essere controllato. I dizionari sono caricati all'avvio del programma e il contenuto del tuo editor viene controllato. Zettlr utilizzerà tutti i dizionari per controllare una parola, e solo nel caso in cui non riesca a trovarla in nessuno dei dizionari caricati evidenzierà la parola come errata, con una piccola linea tratteggiata. 

Per correggere una parola, cliccala con il tasto destro e seleziona uno dei suggerimenti dal menu contestuale, se ce ne sono. Puoi anche aggiungere una parola al tuo dizionario utente.

Stai scrivendo in due lingue? Nessun problema! Basta caricare i dizionari di tutte le lingue in cui potresti potenzialmente scrivere in modo da correggere in tutte le lingue insieme. Tieni conto che i dizionari occupano molta memoria, per cui se ne carichi troppi potrebbero rallentare il programma.

> **Suggerimento**: per disabilitare del tutto il correttore ortografico, basta togliere la spunta a tutti i dizionari nelle preferenze.

## Lavorare con le note a piè di pagina

Le note a piè di pagina sono notoriamente complesse in Markdown, perché richiedono alcuni caratteri speciali, e necessitano anche di lavorare su due posizioni nel testo contemporaneamente: dove si vuole inserire la nota a piè di pagina e il piè di pagina in fondo. Zettlr fa del suo meglio per facilitarti il lavoro nei modi seguenti:

1. Puoi usare una scorciatoia da tastiera per inserire una nota a piè di pagina: `Cmd+Alt+R` (solo macOS) o `Ctrl+Alt+F` (macOS/Windows/Linux).
2. Il testo di riferimento (ovvero il testo della nota a piè di pagina) sarà mostrato in fondo alla finestra dell'editor quando passi con il mouse sopra una nota a piè di pagina.
3. Se fai `Alt`- o `Ctrl`-Clic su una nota a piè di pagina all'interno del testo compare una finestra pop-up che permette di modificare direttamente il testo di riferimento, senza scorrere fino in fondo. Quando hai finito, premi `Shift+Enter` per chiudere la finestra di pop-up e sostituire il testo della nota a piè di pagina.