# Il metodo Zettelkasten

L'idea di scrivere Zettlr mi venne in mente diversi anni fa, quando cercavo di elaborare dei validi flussi di lavoro per la scrittura accademica. Abbiamo testato molti stili differenti e idee di flussi di lavoro, e una che rimase impressa fu il metodo Zettelkasten. Il problema allora fu che la gran parte dei software non riuscivano efficacemente a implementarlo, ma poiché da allora ci sono stati molti sforzi per integrare il metodo, oggigiorno ci sono sempre più programmi che supportano alcune delle funzioni di questo metodo.

In origine, il metodo nasce dal sociologo tedesco Niklas Luhmann il quale, cercando di ricordare tutto ciò che leggeva o pensava, costruì la sua personale Zettelkasten (all'epoca analogica), contenente delle schede su cui erano scritte alcune informazioni e dei numeri. I numeri potevano essere usati per individuare altre schede a loro volta con altre informazioni che erano in qualche modo collegate ai contenuti della scheda. Questo era un modo per Luhmann per andare avanti e indietro tra gruppi di schede e, mentre l'archivio di riempiva con sempre più schede, in qualche modo "prendeva vita", mostrandogli connessioni tra determinati concetti a cui lui per primo non aveva pensato. 

L'idea di fondo, quindi, è permetterti di creare relazioni tra piccoli appunti (o, in tal senso, anche lunghi file) per consentirti non solo di andare avanti e indietro tra i file, ma anche di individuare relazioni che emergono tra i tuoi file.


## Gestire una Zettelkasten con Zettlr

Tre funzioni sono attualmente disponibili in Zettlr per dare il via alla tua Zettelkasten:

1. Generare identificativi per i file
2. Collegare ricerche e file
3. Taggare i file

###  Identificazione dei file

Uno dei problemi più grandi quando si scrivono programmi che si sforzino di lasciare i file privi di attributi specifici del programma è che comunque hai bisogno di identificare i file. Zettlr usa hashes a 32 bit per identificare file specifici. Ma questi dipendono dai percorsi e, siccome Zettlr è progettato per funzionare anche con file salvati su cloud, il percorso su un computer non sarà lo stesso su un altro computer, rendendo inutilizzabile l'hash come ID. La seconda difficoltà è data dal formato stesso: i file Markdown sono di solo testo e quindi non consentono molti metadati. Certo, ci sono stati approcci che integravano i titoli nei file markdown, ma non era l'approccio giusto, perché questo avrebbe compromesso la regola di Zettlr di scrivere file markdown non specifici per nessun programma. I metadati sono molto meno standardizzati della sintassi stessa di Markdown, rendendo difficile immaginare come potessero funzionare nella filosofia di Zettlr. La soluzione che abbiamo trovato è stato semplicemente di seppellire l'identificativo da qualche parte nel testo. Per aggiungere un ID a un file, basta premere `Cmd/Ctrl+L` per generarne uno o, se preferisci farlo manualmente, digitalo tu stesso. L'ID sarà evidenziato automaticamente per te.

> Dai un'occhiata alla [pagina delle impostazioni](../reference/settings.md) per vedere le opzioni di personalizzazione delle funzionalità di Zettelkasten a tuo piacimento.

L'ID di default è una buona soluzione, perché sfrutta la data/ora nel formato YYYYMMDDHHMMSS (Anno-Mese-Giorno-Ore-Minuti-Secondi), ed è unico per ogni secondo. Inoltre, per la nostra esperienza abbiamo notato che quando non si utilizzano ID facilmente riconoscibili, si è meno proni a supposizioni, rendendoli più adatti a creare legami incrociati. Prova tu stesso!

Zettlr proverà automaticamente a trovare l'ID di un file passando in rassegna tutti i suoi contenuti. Se ha trovato un ID che _non_ è racchiuso da un Wiki-Link (v. sotto), considererà quell'ID un riferimento a quel file. Se sono presenti più di un valido ID, **il primo ID ha la precedenza**. In questo modo, anche per file lunghi, se non riesci a trovare un ID, basta aggiungere un nuovo ID all'inizio del file per far diventare questo l'ID generale del file.

### Collegamenti interni

Ora che il problema dell'identificazione è stato risolto, ne salta fuori un altro: come collegare i file all'interno del programma senza compromettere il sopracitato obiettivo di Zettlr di rendere i file indipendenti da qualsiasi programma? Molti programmi, come nvALT o The Archive implementano un sistema di collegamenti interni che rende possibile ai file di far riferimento tra loro in modo da rendere la navigazione nel sistema il più facile possibile. Anche Zettlr include un sistema del genere. 

Un collegamento interno è scritto nella forma di `[[Questo è il collegamento]]`. Se ci fai clic tenendo premuto `Alt` o `Ctrl`, attiverai **due** diverse funzioni. La prima è quella di cercare una corrispondenza esatta dei contenuti del collegamento all'interno del programma. Significa che proverà a trovare un file tale per cui il contenuto corrisponde perfettamente. Questa corrispondenza può essere trovata in due modi: il primo è quando il contenuto del collegamento (nell'esempio di sopra "Questo è il collegamento") è **esattamente** identico al nome di un file, esclusa l'estensione, e tale file viene rilevato proprio come una corrispondenza identica. L'esempio di sopra avrebbe trovato una corrispondenza esatta nei file `Questo è il collegamento.md`, `Questo è il collegamento.markdown` e `Questo è il collegamento.txt`. Nota come la corrispondenza per nome del file è **case-insensitive** (maiuscole e minuscole vengono trattate allo stesso modo). macOS per esempio è case insensitive di default (per cui `nomefile.md` corrisponde esattamente a `NOMEFILE.MD`). Il secondo modo perché venga rilevata una corrispondenza identica è il caso in cui il contenuto del collegamento sia un ID nel formato `[[<il-tuo-ID>>]]`. Se qualunque file possiede `[[<il-tuo-ID>>]]`, Zettlr riporterà una corrispondenza esatta anche in quel caso. **Se viene trovata una corrispondenza esatta da qualche parte nel sistema, cliccare tenendo premuto Alt su un collegamento interno aprirà immediatamente il primo file che viene trovato**. Ciò significa che puoi usare questi collegamenti per navigare nel tuo sistema. Puoi, ad esempio, creare dei file indice che contengono collegamenti interni ad altri file, e in ognuno di quelli, inserire a loro volta dei collegamenti verso il rispettivo file indice.

La seconda funzione attivata da tale collegamento è una ricerca globale all'interno della tua cartella selezionata in un dato momento. Non farà altro che prendere i contenuti del collegamento, inserirli nella casella di ricerca e attivare automaticamente "premi Invio", per iniziare la ricerca. In questo modo puoi non solo aprire il file esatto, ma trovare anche tutti gli altri file che puntano al file che hai appena aperto. Quindi un collegamento nel formato `[[<il-tuo-ID>>]]` aprirà quel file specifico e in più cercherà anche tutti i file che puntano a quello.

### Tagging

Taggare (etichettare) i file è forse il modo più semplice per cercare internamente i file. Se clicchi tenendo premuto `Alt` o `Ctrl` su un tag, questo restituirà essenzialmente una ricerca di tutti i file nella tua cartella corrente che sono stati etichettati con quel tag. Poiché i tag nel formato `#parolachiave` non sono usati in nessun altro modo nella sintassi markdown, usare questo approccio consente a Zettlr di usare questi tag come strumento perfetto per un sistema di tagging.
