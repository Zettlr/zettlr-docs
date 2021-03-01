# Fondamenti di Markdown

Come tanti altri programmi, Zettlr usa `Markdown`, creato originariamente da [John Gruber](https://daringfireball.net/). Ovviamente, dopo così tanto tempo sono avvenuti un'enorme quantità di nuovi sviluppi, che hanno reso possibili i moderni programmi di Markdown. In questa sezione sono descritti i seguenti argomenti:

1. [Breve storia di Markdown](#una-breve-storia)
2. [Dialetti di Markdown](#dialetti-di-markdown)
3. [Implementazione di Markdown in Zettlr](#implementazione-di-markdown-in-zettlr)
4. [Markdown Capitolo 1: Titolii, Blocchi, Elementi in-linea, collegamenti, immagini, e note a piè di pagina](#markdown-capitolo-1-i-fondamentali)
5. [Altre risorse su Markdown](#altre-risorse-su-markdown)

***

## Una breve storia

Da quando i personal computer divennero ampiamenti diffusi negli anni 90, sono esistiti insieme due tipi di formato: i documenti degli editor di testo come i `.doc` o gli `.odt`, e i documenti in linguaggi di programmazione come `js`, `.cpp` o `.py`. Entrambi i tipi di formato contenevano del testo umanamente leggibile, ma c'era una semplice ed enorme distinzione: a differenza dei file di Javascript o C++ che contevano solo testo (solo il testo che veniva visualizzato all'apertura del file), i documenti degli editor di testo contenevano _molta_ altra roba. I documenti degli editor di testo contenevano sempre informazioni sulla dimensione delle pagine (es. A4 o Lettera), le diverse formattazioni dei paragrafi (es. il font dei titoli o il rientro delle citazioni). Se apri anche adesso un documento di Word/Office  sul tuo computer, vedrai subito cosa intendo: capisci immediatamente che cosa sia un titolo sulla base della dimensione o della formattazione dei caratteri.

Per molto tempo, entrambi i tipi di documenti erano tanto separati quanto coloro che li usavano. Gran parte degli impiegati degli uffici sapevano usare solo Microsoft Word o Excel, magari anche le controparti di LibreOffice, mentre quasi nessuno proveniente da un ambiente STEM (Science, Technology, Engineering and Mathematics) avrebbe usato di sua volontà Word o altri software simili. Quegli scienziati scelsero un'altra strada: svilupparono un linguaggio di programmazione chiamato LaTeX, che permetteva di creare dei file PDF perfettamente formattati a partire da un po' di codice---procedevano alla stessa maniera dei ricercatori in materie umanistiche e artistiche o anche dei normali impiegati in amministrazione, ma usavano tipi diversi di documento.

Quando John Gruber creò Markdown nel 2004, praticamente disse: "Perché non entrambi?" Markdown unisce l'esperienza di chiara lettura dei documenti degli editor di testo con i vantaggi dei linguaggi di programmazione, ed è sia versatile sia facile da usare---anche per persone che sanno usare solo Word o Writer. Ad esempio: mentre negli editor di testo per creare un titolo devi digitare un po' di testo e poi selezionare il formato `Titolo 1` su qualche menu, in Markdown è sufficiente scrivere `# Il mio Titolo`, dove il cancelletto segnala immediatamente: "Questo è un titolo di primo livello!"

All'inizio Markdown era solo un piccolo script che John Gruber scrisse per sé stesso in modo da avere questi vantaggi, era pieno di contraddizioni e non supportava molte cose. Ma progredì negli anni. Due anni sono particolarmente rilevanti:

- 2004: [John Gruber](https://daringfireball.net/projects/markdown/) lancia Markdown.
- 2012: Un gruppo di sviluppatori crea [CommonMark](https://spec.commonmark.org/) per standardizzare Markdown in una forma accettata a livello internazionale.

## Dialetti di Markdown

Ad oggi, coesistono diverse implementazioni della sintassi di Markdown. Le più importanti sono:

- **MultiMarkdown**: Amplifica la sintassi iniziale per aggiungere le note a piè di pagina, le tabelle, e alcuni dati aggiuntivi (metadata).
- **Markdown Extra**: Di nuovo, aggiunte alla sintassi iniziale.
- **GitHub Flavoured Markdown**: Questa è una variante di Markdown creata dalla piattaforma di hosting GitHub (sulla quale è ospitato anche Zettlr!) ed è attualmente uno dei dialetti più diffusi.
- **Pandoc Markdown**: Il Markdown Pandoc è un sovrainsieme del GitHub flavoured Markdown e supporta ancora più elementi.
- **CommonMark**: Tenta di implementare tutti gli elementi impossibili senza ambiguità. Da notare che CommonMark non supporta ancora nessuna specifica per le note a piè di pagina.

## Implementazione di Markdown in Zettlr

Zettlr include a sua volta una commistione di diversi dialetti. Di per sé l'editor evidenzia soltanto il GitHub flavoured Markdown (più alcuni altri elementi per estendere la sintassi di Markdown anche ai componenti di una Zettelkasten. Sono descritti nella rispettiva [sezione sulla metodica Zettelkasten](../academic/zkn-method.md)). Se esporti i tuoi documenti in HTML senza aver installato Pandoc, Zettlr convertirà i tuoi documenti usando il _GitHub flavoured Markdown_. Se Pandoc è disponibile, Zettlr usa invece Pandoc per esportare, che a sua volta legge i documenti in Markdown usando la propria _sintassi Markdown di Pandoc_.

Ma Zettlr non ti obbliga ad usare solo Markdown. Se vuoi, puoi aggiungere anche comandi in `LaTeX`. Questi comandi sono interpretati correttamente quando converti in PDF. Sono invece omessi quando converti in DOCX o ODT. E sono conservati quando converti in HTML. Ovviamente puoi in qualunque punto usare anche codice HTML.

## Markdown Capitolo 1: i fondamentali

Anche se Markdown può fare un sacco di cose, in questa sezione vogliamo descrivere solo quelle più importanti e che si usano più spesso, e come puoi usarle in Zettlr.

### Titoli

I titoli sono banali. Devono possedere una riga loro e devono essere segnalate con un cancelletto. Hai a disposizione sei livelli di titoli:

- `# Testo titolo` — restituisce un titolo di primo livello
- `## Testo titolo` — restituisce un titolo di secondo livello
- `### Testo titolo` — restituisce un titolo di terzo livello
- `#### Testo titolo` — restituisce un titolo di quarto livellor
- `##### Testo titolo` — restituisce un titolo di quinto livello
- `###### Testo titolo` — restituisce un titolo di sesto livello

### Formattazione in-linea

Ovviamente, come in un qualunque editor di testo, poi usare la formattazione in-linea, come il **grassetto**, o il _corsivo_, o il `testo a spaziatura fissa` (linguaggi di programmazione).

- `**testo di esempio**` — restituisce il testo in grassetto
- `_testo di esempio_` — restituisce il testo in corsivo
- \`testo di esempio\` — restituisce il testo a spaziatura fissa

### Blocchi di testo

A volte hai bisogno di enfatizzare un intero paragrafo (per esempio una lunga citazione), oppure di creare un elenco. Anche questo è possibile ed estremamente semplice in Markdown.

- crea elementi di un elenco anteponendo per ogni riga il carattere `-`, `*` oppure `+` . Se ti piace puoi anche scambiarli!
- per gli elenchi numerati è necessario anteporre numeri, nel formato `1.`

> **Attenzione**: I numeri _non_ devono essere in ordine. Ad ogni esportazione il convertitore correggerà automaticamente i numeri in una sequenza crescente, per cui ad esempio una lista di numeri 1, 6, 14, 2 sarà convertita nei numeri 1, 2, 3, 4!

### Collegamenti e immagini

I collegamenti sono elementi in-linea e le immagini sono elementi a blocco, e seguono la stessa semantica discussa finora. Tuttavia meritano un po' più di attenzione, perché mettono più opzioni a disposizione.

I collegamenti sono stabiliti secondo la seguente sintassi: `[Questo è il testo che appare effettivamente nel documento finale](http://questo-invece-è-il-collegamento.tld)`. Zettlr converte automaticamente questo sintassi in un collegamento cliccabile (per aprire il collegamento è necessario cliccarci sopra mantenendo premuto il tasto `ALT`- o `Ctrl`), per semplicità di accesso (ma anche per accorciare i solitamenti lunghi indirizzi di collegamento).

Le immagini funzionano esattamente come i collegamenti, tranne per il fatto che iniziano con un punto esclamativo (!). Anche le immagini hanno bisogno di un percorso, perché di certo non puoi salvarle dentro a un documento di testo. Puoi usare tre approcci diversi per collegare un'immagine nel tuo documento:

1. Usare un URL assoluto, come ad esempio https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1000px-Markdown-mark.svg.pngMarkdown.
2. Usare un percorso assoluto a un file sul tuo computer, come ad esempio `C:\Users\nome-utente\Immagini\la-mia-immagine.jpg`.
3. Usare un percorso relativo a un file sul tuo computer, come ad esempio`../img/la-mia-immagine.png`.

> **Suggerimento**: Puoi indicare un percorso immagini di default nel pannello "Editor" nelle impostazioni, che verrà usato da Zettlr ogni volta che incolli un'immagine nell'editor.

Il percorso relativo è sempre relativo al documento in cui lo inserisci. La cartella `..` indica a Zettlr di cercare l'immagine nella cartella superiore (cioé di risalire di una cartella). Se salvi i tuoi documenti in un cloud a cui accedi da diversi dispositivi, ti converrebbe usare i percorsi relativi per le immagini, perché sicuramente i percorsi assoluti saranno diversi (specialmente se lavori con due diversi sistemi operativi).

> **Suggerimento**: Prova a usare sempre le scorciatoie da tastiera per inserire immagini e collegamenti, `Cmd/Ctrl+K` per i collegamenti e `Cmd/Ctrl+Shift+I` per le immagini. Se negli appunti di sistema c'è un percorso valido, questo verrà persino inserito automaticamente, facilitandoti le cose. Il miglior modo per inserire un collegamento, per esempio, sarebbe quindi di copiare il collegamento negli appunti di sistema, selezionare il testo che si vuole diventi il collegamento e premere `Cmd/Ctrl+K`. A quel punto il testo selezionato verrà evidenziato come collegamento, e conterrà il percorso del collegamento che si era salvato negli appunti di sistema.

### Note a piè di pagina

Di sicuro le note a piè di pagina interessano alla gran parte dei ricercatori nelle scienze umanistiche e nelle arti. Ecco quindi alcune regole generali per inserire note a piè di pagina e come Zettlr ci interagisce. Secondo la sintassi standard di Markdown, le note a piè di pagina hanno bisogno di due elementi: prima di tutto un riferimento da qualche parte nel testo nel formato `[^x]`.  La `x` è un identificatore unitario. Sostanzialmente, puoi usare qualsiasi cosa, basta che l'identificatore non sia usato anche per un'altra nota a piè di pagina. Normalmente ti basterà usare dei numeri crescenti. (Inoltre: questi numeri non devono essere sequenziali—se esporti da Markdown, Pandoc ri-numererà correttamente le note a piè di pagina. Per cui se tu decidessi successivamente di cancellare una nota a piè di pagina, non devi preoccuparti che la sequenza di numeri si interrompa nel tuo documento).

Il secondo elemento richiede un elemento a blocco, il _testo della nota a piè di pagina_. E' sempre nel seguente formato: `[^x]: Testo della nota a piè di pagina.` Come vedi, l'identificatore è uguale a quello che appare nel testo, solo che è seguito da due punti. E' ovvio che le note a piè di pagina siano in fondo al tuo documento. Andare avanti e indietro tra la nota a piè di pagina e il testo è farraginoso, e Zettlr cerca di facilitarti la vita. Sposta il cursore su un riferimento a una nota a piè di pagina per vederne il testo. Cliccaci tenendo premuto `Alt` o `Ctrl` per modificarlo. Premi `Shift+Invio` per salvare le tue modifiche.

### Blocchi recintati di codice

Zettlr supporta anche i cosiddetti "blocchi di codice recintati". Questi sono delle varianti a blocco degli elementi di codice in-linea. Per iniziare un blocco di codice, digita tre "backtick" (accento grave) "\`" in una riga vuota. Chiudi il blocco di codice con altri tre backticks in una riga vuota. Tutto ciò che si troverà tra questi due "recinti" sarà reso con un carattere a spaziatura fissa per indicare che si tratta effettivamente di un codice.

Zettlr supporta l'evidenziatura della sintassi per numerosi script e linguaggi di programmazione. Devi indicare esplicitamente a Zettlr quale linguaggio usare, semplicemente aggiungendo il suo identificativo _subito dopo il "recinto superiore"_. Per cui ad esempio per indicare a Zettlr di evidenziare un blocco di codice usando un interpreter di Javascript, dovrai iniziare il blocco di codice con i tre backticks in una riga vuota subito seguiti dalla parola "javascript".

Al momento, sono supportati i seguenti linguaggi (tra parentesi sono riportati gli identificatori da usare in Zettlr, i quali non contengono caratteri speciali che potrebbero creare problemi all'interpretazione):

- C (`c`)
- C# (`c#`; `csharp`; `cs`)
- C++ ( `c++`; `cpp`)
- Clojure ( `clojure` )
- Common Lisp (`clisp`; `commonlisp`)
- CSS (`css`)
- Elm (`elm`)
- F# (`f#`; `fsharp`)
- Go (`go`)
- Haskell (`haskell`; `hs`)
- HTML (`html`)
- Java (`java`)
- JavaScript (`javascript`; `js`; `node`)
- JSON (`json`)
- Julia (`julia`; `jl`)
- Kotlin (`kotlin`; `kt`)
- LESS (`less`)
- Markdown (`markdown`; `md`)
- Objective C (`objective-c`; `objectivec`, `objc`)
- PHP (`php`)
- Python (`python`; `py`)
- R (`r`)
- Ruby (`ruby`; `rb`)
- Rust (`rust`; `rs`)
- Scala (`scala`)
- Scheme (`scheme`)
- Shell (`shell`; `sh`; `bash`)
- SparQL (`sparql`)
- SQL (`sql`)
- Swift (`swift`)
- SystemVerilog (`systemverilog`; `sv`)
- Tcl (`tcl`)
- Turtle (`turtle`; `ttl`)
- TypeScript (`typescript`; `ts`)
- Verilog (`verilog`; `v`)
- VHDL (`vhdl`; `vhd`)
- Visual Basic (`vb.net`; `vb`; `visualbasic`)
- XML (`xml`)
- YAML (`yaml`; `yml`)

Possono essere implementati più linguaggi di programmazione se lo richiedi. Se hai bisogno di un linguaggio specifico, ti preghiamo di [fare riferimento a quelli disponibili]((https://codemirror.net/mode/) e di aprire una issue su GitHub così da sapere quali aggiungere!

## Altre risorse su Markdown

Vuoi sapere _tutto_ su Markdown? Fantastico! Una buona fonte che copre tutti gli elementi è data da [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/). Se desideri abituarti a scrivere in maniera pulita e senza ambiguità  [guarda le specifiche di CommonMark](https://spec.commonmark.org/0.28/). Esiste inoltre un libro sulla sintassi di GitHub flavoured Markdown. [Leggilo qui](https://gitbookio.gitbooks.io/markdown/content/).
