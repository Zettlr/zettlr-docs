# Domande frequenti

## Ho provato a installare Zettlr su Windows/macOS, ma c'è un avviso di sicurezza che dice che non dovrei installare il programma!

Sia Windows sia macOS hanno bisogno di un certificato "code-signing" per potersi fidare di un programma. Si tratta di un ottimo strumento per proteggere il tuo computer da programmi dannosi, ma richiede anche una sottoscrizione con una tariffa annuale. Questo è il motivo per cui le versioni di Zettlr _non_ sono certificate e producono quegli avvisi di sicurezza. Puoi tranquillamente ignorarli e installare Zettlr, fintanto che lo hai scaricato dalla nostra pagina ufficiale. 

## Sono in programma versioni di Zettlr per smartphone e tablet, per Android o iOS?

Stiamo ricevendo sempre più richieste per versioni mobile di Zettlr. Siamo molto felici che ti piaccia Zettlr così tanto da volerlo su tutti i tuoi dispositivi, e vorremmo tanto accontentarti! Purtroppo, però, le nostre risorse sono appena sufficienti per lo sviluppo e la manutenzione di Zettlr, e aggiungere ulteriore lavoro non è al momento possibile. Ovviamente, appena cambierà la situazione, ci metteremo al lavoro!

## Cos'è Markdown?

Markdown è un semplice linguaggio di markup che ti consente di scrivere un testo elaborato come in un editor di testo standard, ma con molto meno impaccio. Invece di dover manualmente selezionare tutte le opzioni di formattazione, in Markdown è sufficiente digitare `#` per indicare un titolo! Vuoi saperne di più? Allora consulta la [guida di Markdown](reference/markdown-basics.md)!

## Se non volessi più usare Zettlr, cosa dovrei fare per cambiare programma?

Basta disinstallare Zettlr e usare un altro programma di tua scelta. Zettlr non scherza con i tuoi file. Se avrai usato cartelle virtuali o progetti, ci saranno piccoli file chiamati `.ztr-directory` e `.ztr-projects` in qualche cartella. Per rimuoverli, basta cancellare qualsiasi cartella virtuale, ripristinare l'ordinamento delle cartelle secondo l'ordine di default, e rimuovere tutti i progetti prima di disintallare il programma (oppure rimuovere manualmente questi file in un secondo momento).

## Sto usando Linux e se cancello i file, questi non si spostano nel cestino!

Zettlr non rimuove mai completamente i tuoi file. Si limita sempre a spostarli nel cestino in modo da poter sempre recuperarli, se mai dovessi rimuoverli accidentalmente. In macOS e in Windows il cestino è attivato di default, ma in alcune distribuzioni di Linux è necessario attivare il cestino manualmente. Su Linux, Zettlr (più precisamente: il sottostante framework Electron) usa `gvfs-trash` per spostare i file nel cestino. Per evitare spaventi non cercherà mai di "ritornarci" e rimuovere completamente i file. Pertanto, per usare il cestino, assicurati di avere `gvfs-trash` installato! Su Debian/Ubuntu puoi farlo utilizzando il seguente codice in una finestra di terminale:

```bash
$ sudo apt install gvfs-bin
```

## I collegamenti interni non aprono il file corrispondente!

Nel caso i collegamenti interni non funzionassero come ci si aspetterebbe, assicuratevi di aver fatto le seguenti cose:

1. Il collegamento è riconosciuto? Zettlr consente di impostare l'aspetto dei collegamenti interni. Di default sono racchiusi tra `[[` e `]]`. Quando Zettlr riconosce un collegamento interno, lo evidenzierà e al passare sopra con il mouse, il testo in esso contenuto viene sottolineato. Se questo non succede, Zettlr non pensa che quello che è scritto sia un collegamento. Puoi cambiare questo comportamento nelle impostazioni.
2. Hai premuto il tasto `Alt` oppure `Ctrl` quando hai cliccato il collegamento? Poiché cliccare sul testo normalmente significa che hai intenzione di modificarlo, è necessario dire a Zettlr che in realtà vuoi seguire il collegamento.
3. Hai usato un nome file o ID valido? Zettlr apre solo quei file che hanno _esattamente_ quell'ID o quel nome file. Se quando clicchi sul collegamento non succede niente, significa senz'altro che non esiste nel sistema nessun file con quel nome o con quell'ID. Tieni conto che l'estensione del file non va inserita nel collegamento. Per esempio, per creare un collegamento a `il-mio-file.md`, devi inserire solo `il-mio-file` all'interno delle parentesi.
4. Il file è in quel momento caricato in Zettlr? I collegamenti interni funzionano ovviamente solo se Zettlr ha letto il file

## Conosco LaTeX e voglio usarlo anche dentro i miei file in Markdown. È possibile?

Sì. Basta scrivere le tue espressioni `LaTeX` dove le vuoi. Quando esporti in PDF,  Pandoc farà il resto e si occuperà di interpretare le espressioni in PDF. Purtroppo non è supportata l'evidenziatura della sintassi `LaTeX`. Inoltre, ti preghiamo di ricordare che Pandoc eliminerà tutti i blocchi `LaTeX` prima di esportare in qualunque formato diverso da PDF, il che significa che i blocchi compresi tra `\begin` e `\end`, per esempio, mancheranno del tutto in un file Office finale. Esportando in HTML, tutti i blocchi `LaTeX` saranno mantenuti, ma non verranno convertiti in nient'altro.

## Non riesco ad allineare il testo giustificato, o a destra!

Non è un bug, ma una caratteristica: Markdown non ha i corrispettivi segni di formattazione perché il testo dovrebbe essere sempre giustificato o allineato a sinistra e quindi non appartiene al set dei formati di blocco necessari che Markdown offre. Tuttavia, puoi sempre usare comandi `LaTeX` per rendere il testo a sinistra o destra. Basta includere il testo che vuoi allineare a destra o giustificare tra 
`\begin{<option>}` e `\end{<option>}`, dove `\<option>` può essere `flushleft` o `flushright`, oppure inserisci `\justify` davanti a un paragrafo che vuoi giustificare. [Più informazioni su sharelatex.com](https://www.sharelatex.com/learn/Text_alignment). 

## Nell'esportazione in PDF, vorrei che alcuni titoli non fossero numerati o elencati nel sommario

Questa è una caratteristica speciale di Pandoc. Devi aggiungere rispettivamente `-` (semplicemente un trattino) oppure `.unlisted`. Il trattino previene la numerazione, mentre "unlisted" impedisce al titolo di comparire nell'indice. Tieni presente che questo si applica solo all'esportazione in PDF.

Esempi:

```
# Questo titolo non verrà numerato, ma sarà nel sommario {-}

# Questo titolo sarà numerato, ma non nel sommario {.unlisted}

# Questo titolo non sarà numerato e sarà nascosto nel sommario {- .unlisted}
```

> Tieni presente che le classi speciali devono essere l'ultima cosa nella riga. Persino i commenti spezzano questo comportamento.

## Voglio usare interruzioni di riga singole e non creare nuovi paragrafi. Quando premo Invio una volta, viene rimossa l'interruzione di riga!

Per forzare Pandoc a interpretare le interruzioni di riga singole come tali, termina la riga con una barra rovesciata (`\`) oppure due spazi. La barra rovesciata così come i due spazi non vengono resi nel file finale.


## Ho davvero bisogno di Pandoc o LaTeX?

Non per la semplice esportazione in HTML. Per tutti gli altri formati sì. Zettlr dipende da quei programmi per l'esportazione dei file. Ma non preoccuparti: sono open source e quindi completamente gratis, e disponibili per tutti i sistemi operativi!

## Come installo Pandoc o LaTeX?

Ti preghiamo di consultare la [guida di configurazione](install.md) per vedere come configurare Pandoc e LaTeX sul tuo sistema.

## Zettlr non trova Pandoc e LaTeX, eppure sono installati!

Può succedere se il tuo computer avesse deciso di installare i programmi in una cartella non standard. Zettlr fa del suo meglio per trovare quei programmi, ma può non farcela se sono sepolti da qualche parte. Qui è dove entrano in gioco le opzioni di percorso nelle preferenze. Se Zettlr non trova i programmi puoi inserire il **percorso completo** per essi nelle caselle di testo apposite nel pannello `Avanzate`.

Su WIndows, non dovresti mai avere questo problema, fintanto che tu abbia lasciato durante l'installazione il percorso di default nella cartella `Program Files` di Windows. Se vuoi installare i programmi in posizioni diverse, rendendo Zettlr incapace a trovarli, usa Esplora File per cercare i due file nel tuo sistema: il primo è `pandoc.exe` e il secondo è `xelatex.exe`. Copia il percorso completo nelle caselle di testo appropriate nelle preferenze di Zettlr.

Su macOS trovi facilmente il percorso aprendo `Terminale.app` (è nella tua cartella Applicazioni sotto `Altro`) e digitando `which pandoc` o `which xelatex`, a seconda di quale software Zettlr non riesca a trovare. Terminale restituirà il percorso completo al programma.

Anche nelle distribuzioni Linux devi aprire una linea di comando/terminale e usare gli stessi comandi di macOS: `which pandoc` per Pandoc e `which xelatex` per LaTeX. 

## Cercando di esportare, Zettlr dice che non è stato riconosciuto il PDF-Engine!

Questo è un comune errore di Pandoc, e indica che la versione di Pandoc è precedente alla 2.x. Quando Zettlr presenta il seguente messaggio di errore, significa che devi aggiornare a Pandoc 2.x:

`pandoc: unrecognized option '--pdf-engine=xelatex' Try pandoc --help for more information.`

Il motivo è che in Pandoc 2.0 la vecchia opzione `--latex-engine` è stata rinominata `--pdf-engine`. [Leggi di più sul changelog di Pandoc](https://github.com/jgm/pandoc/blob/master/changelog#L4349).


## Esportando a PDF, ottengo sempre messaggi di errore!

Nelle prime esportazioni ce lo si aspetta, ed è completamente normale. Semplicemente, Zettlr passa il file a Pandoc, il quale lo passa a LaTeX. Ma il modello che Zettlr usa per le tue esportazioni in PDF richiede alcuni pacchetti aggiuntivi che non vengono sempre installati quando si installa LaTeX.

L'errore più comune appare come:

**LaTeX Error: File \<qualche nome\>.sty not found.**

Questo significa soltanto che non è stato trovato un certo pacchetto (finiscono in `.sty`). Su Windows, questi pacchetti dovrebbero installarsi non appena si rendano necessari: su macOS e Linux devi solo eseguire il comando `tlmgr install <qualche nome>`.

In caso di altri errori, in Zettlr è possibile copiare e incollare il testo del messaggio di errore, perché in quasi tutti i casi, una breve ricerca su Google ci porta alla soluzione; e in quasi tutti i casi l'unica azione richiesta è l'installazione di un altro pacchetto. 

## Ho trovato un bug!

Ottime notizie! Beh, non esattamente, ma è un bene che tu l'abbia trovato! In tal caso per favore vai su [GitHub](https://github.com/Zettlr/Zettlr/) e apri un issue così che capiamo cosa stia succedendo e possiamo lavorarci per risolverlo.

## Ho una richiesta per una nuova funzionalità! / Ho un suggerimento per rendere una funzionalità più efficiente!

Buono a sapersi! Dipendiamo sempre dall'esperienza di altre persone con il programma per migliorare la sua efficienza e la sua capacità di adattamento a diverse situazioni. In questo caso, vai su [GitHub](https://github.com/Zettlr/Zettlr/) e apri un issue così che possiamo lavorarci subito.

## E la mia privacy? Zettlr trasferisce qualche dato, o non devo preoccuparmi?

Per Zettlr la privacy viene prima di tutto. Non invia alcun dato, ed è completamente operativa offline. Tuttavia, c'è una situazione in cui Zettlr invia dati sul web: il controllo per nuovi aggiornamenti. Ogni volta che apri Zettlr, o usi quella voce del menu, Zettlr si connette alla Zettlr-API per ottenere una lista di tutti i rilasci. La lista è poi usata per determinare se stai usando il rilascio più recente o meno. Durante la connession, Zettlr riceve il tuo indirizzo IP e saprà che un programma Electron sta accedendo a quell'API. Il programma trasmetterà inoltre il tipo del tuo sistema operativo e il tuo ID applicazione.

Questi dati non verranno mai venduti a terze parti. È solo perché ci piacciono le statistiche e siamo sempre interessati a capire chi sta usando il programma. Tuttavia, non possiamo identificare nessuno con quei dati, sono troppo grezzi per quello. Siamo open source, mica Facebook.
