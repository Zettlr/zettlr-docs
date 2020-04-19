# Template personalizzati

Anche se [Personalizza CSS](../core/custom-css.md) è uno strumento potente per fare tuo l'aspetto di Zettlr, non rende il tuo lavoro davvero tuo. Dopo che hai finito di scrivere, l'aspetto estetico conta tanto quanto il contenuto. Le tue idee valgono molto per sé stesse, ma senza una bella grafica e una tipografia che ti inviti a leggere, le tue idee saranno penalizzate.

Vorrai il tuo carattere, una buona interlinea e magari persino qualche colore. Anche se le [Preferenze PDF](../reference/settings.md) ti consentono di personalizzare alcune impostazioni generali sia per-progetto sia per esportare singoli file, non puoi davvero sfruttare di tutte le funzionalità di composizione che LateX offre. E, accidenti, [ci sono degli esempi molto belli](https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends).

Fortunatamente, uno degli principi fondamentali della filosofia di Zettlr riguarda non solo darti la più grande libertà di usare strumenti come Pandoc e LaTeX a tuo vantaggio, ma anche di farli funzionare _bene_ per te. Questa pagina vuole darti la giusta spinta per iniziare a usare template LaTeX personalizzati per il tuo lavoro, così che sia il tuo lavoro sia il tuo elaborato finale sia da mettere in bella mostra!

## Considerazioni preliminari

Prima di iniziare a scrivere i tuoi template LaTeX personalizzati, dobbiamo dire due parole su quello che succederà al momento dell'esportazione. Il motore di esportazione di Zettlr è un potente software che esegue molti comandi prima di passare i tuoi documenti a Pandoc per gli ultimi passaggi. É piuttosto importante sapere che cosa Zettlr farà ai tuoi documenti per assicurare un risultato coerente e prevenire problemi e incidenti, specialmente quando personalizzerai i template in modo più avanzato. Questo capitolo è dedicato a spiegare tutti i passaggi che saranno applicati da Zettlr ai tuoi progetti e nell'esportazione dei file prima di passarli a Pandoc (che a sua volta passa poi il file a LaTeX). 

### 1. Concatenazione di tutti i file di input (riguarda soltanto i progetti)

Se stai esportando un progetto, Zettlr eseguirà prima un semplice compito: concatenerà tutti i tuoi file così come ti sono visualizzati nella lista dei file e li scriverà in un singolo file temporaneo. Per farlo, leggerà la cartella del progetto allo stesso modo della lista dei file (mantenendo quindi l'ordine), e leggerà all'interno dei file. Durante questo passaggio, **vengono eseguite due operazioni sulla sorgente Markdown**:

1. Tutti i percorsi immagine saranno convertiti in immagini assolute. Questo è per motivi di sicurezza, poiché LaTeX non riuscirà a esportare se i percorsi immagine non sono assoluti (poiché la cartella attualmente aperta (CWD) non sarà la stessa del tuo file Markdown). In questo modo, puoi continuare a usare i percorsi relativi ovunque senza doverti preoccupare di che cosa ci farà LaTeX.
2. Rendere uniche tutte le note a piè di pagina. Ognuno dei tuoi capitoli inizierà con la nota a piè di pagina numero 1. Quindi, nella gran parte dei casi avresti note a pié di pagina doppie che potranno non essere esportate o, anche peggio, sarà usato uno dei duplicati, mentre le altre saranno omesse. Zettlr rende uniche le note a pié di pagina aggiungendo l'hash interno del file. Per cui da un `[^1]`, Zettlr crea per esempio `[^1934976181]`. In questo modo ogni nota a pié di pagina sarà unica.

Successivamente, salverà il file risultante nella cartella temporanea e avvierà l'esportatore, che ci porta nel passo 2.

### 2. Lettura del file sorgente

Il compito ovvio di Zettlr è leggere nel tuo file sorgente. Si tratta o del file che vuoi esportare velocemente usando la funzione `Condividi`, o il risultato della concatenazione di file dal tuo progetto (vedi passo 1). Quando legge dentro il file, renderà tutti i percorsi immagine assoluti (non se stai esportando un progetto visto che tutti i percorsi immagine sono già assoluti dal passo 1).

Successivamente, sostituirà tutti i tags, se hai spuntato l'opzione corrispondente nelle preferenze. In questo passaggio gestirà anche i tuoi collegamenti interni Zettelkasten, se presenti. Rimuoverà o i caratteri di formattazione dei collegamenti (`[[` e `]]` di default) o rimuoverà tutto completamente. Se hai disattivato questa funzionalità, lascerà intatti i collegamenti. Inoltre, se hai specificato l'opzione corrispondente, rimuoverà tutti gli ID ZKN.

> Questo è il motivo per cui l'opzione "Rimuovi gli ID" è disattivata di default: poiché gli ID di default sono costituiti soltanto di numeri, renderebbe inusabili alcuni tipi di collegamenti web.

Dopo aver preparato il file, questo verrà salvato in una posizione temporanea.

### 3. Preparazione del Template

Quando il file è pronto, Zettlr leggerà il template e lo scriverà in un file temporaneo. In questo passaggio, alcune variabili del template vengono sostituite. Questo sono:

- `$PAGE_NUMBERING$`: La numerazione di pagine che hai scelto nelle preferenze PDF, per es. Numeri arabi.
- `$PAPER_TYPE$`: Il formato documento che hai fornito, per es.`a4paper`.
- `$TOP_MARGIN$`: Il margine superiore di pagina (es. 3cm).
- `$RIGHT_MARGIN$`: Il margine destro di pagina (es. 3cm).
- `$BOTTOM_MARGIN$`: Il margine inferiore di pagina (es. 3cm).
- `$LEFT_MARGIN$`: Il margine sinistro di pagina (es. 3cm).
- `$MAIN_FONT$`: Il carattere principale (per la gran parte del testo) che hai fornito (es. Times New Roman)
- `$SANS_FONT$`: Il carattere secondario (principalmente per i titoli) che hai fornito (es. Arial)
- `$LINE_SPACING$`: L'interlinea che hai fornito (es. 150%)
- `$FONT_SIZE$`: La dimensione carattere che hai fornito (es. 12pt).
- `$PDF_TITLE$`: Il titolo del PDF (il nome del file oppure un nome personalizzato, nel caso si stia esportando un progetto).
- `$PDF_SUBJECT$`: L'argomento del PDF.
- `$PDF_AUTHOR$`: I metadati dell'autore del PDF.
- `$PDF_KEYWORDS$`: Parole chiave del file PDF.
- `$TITLEPAGE$`: O una stringa vuota oppure `\\maketitle\n\\pagebreak\n`, se stai esportando un progetto con l'opzione titlepage attiva.
- `\$GENERATE_TOC$`: O una stringa vuota oppure `\\setcounter{tocdepth}{<number>}\n\\tableofcontents\n\\pagebreak\n`, se stai esportando un progetto con l'opzione attiva per generare un sommario. `<number>` sarà sostituito dal livello (da 1 a 6).

Queste variabili saranno sostituite globalmente, il che significa che se la variabile `\$PDF_AUTHOR$` si trova in più parti del template, sarà sostituita per ognuna.

### 4. Preparazione all'Esportazione in PDF

Ora, preparato il file, Zettlr preriempirà le variabili di comando che saranno date al motore Pandoc. In questo passaggio, il template LaTeX così preparato sarà aggiunto ai flag del comando, Se non esiste un template personalizzato, Zettlr userà il suo template di default, [che puoi trovare qui](https://github.com/Zettlr/Zettlr/blob/master/source/main/assets/export.tex). Il template di default di Zettlr è un adattamento al template di default di Pandoc ([che trovi qui](https://github.com/jgm/pandoc/blob/master/data/templates/default.latex)), spogliato degli abbellimenti aggiuntivi per la massima compatibilità.

> Molti dei comandi del template di default di Pandoc richiedono dei pacchetti aggiuntivi di LaTeX. Il template PDF di Zettlr mira alla massima compatibilità, non al PDF perfetto, per non confondere gli utenti che hanno bisogno solo delle cose fondamentali.

### 5. Esecuzione del comando!

Adesso, dopo aver soddisfatto tutti i requisiti, Zettlr eseguirà finalmente il comando di Pandoc. Gli passerà il file input temporaneo insieme ai template temporanei e gli lascerà fare il suo lavoro. Nel caso abbiate deciso di creare un sommario, a Pandoc verrà istruito di generarne uno. Questo vuol dire, internamente, che Pandoc eseguirà il binario XeLaTeX **due volte**. Questo perché il comando XeLaTeX richiede di costruire un PDF di cui sappia dove finiscano tutti i titoli con la spaziatura definitiva, e poi deve ricostruirlo ancora, stavolta con il sommario incluso.

> É di estrema importanza di mantenere il flag ToC nel comando Pandoc (che puoi modificare nel pannello avanzato nelle preferenze) perché se lo rimuovi, il sommario non verrà incluso a prescindere dal selettore nelle impostazioni del Progetto!

Dopo che il comando è stato eseguito con successo, Zettlr dirà al tuo sistema operativo di aprire il file, come se avessi fatto doppio clic sul file finale. Questo significa che sarà aperto con il tuo lettore PDF di default (o editor di documenti Word se hai scelto di esportare in Word, per esempio). Se Pandoc produce un errore, questo ti sarà mostrato usando una finestra di dialogo di errore estesa, che puoi copiare e cercare su google. 

> **Attenzione**: se LaTeX produce un errore, ti verrà mostrato l'intero output di console, che è --di solito-- molto prolisso e anche deludentemente vuoto. Per esempio, se anche manca un solo pacchetto di LaTeX, verrà prodotto un lungo output di messaggi di errore dove devi riuscire a trovare `File <package-name>.sty is missing`. Come regola generale: se non stai usando un template personalizzato né stai usando codice LaTeX nel tuo file di Markdown, e _ancora_ stai avendo degli errori, significa che c'è un problema con il template di default. In altri casi, per favore consulta gli aiuti di LaTeX o di Pandoc come prima cosa. 

## Iniziare a lavorare con i Template

Ora è il momento di mettersi a costruire un template! Puoi usare un editor esterno per scrivere il tuo template LaTeX prima di farlo puntare a Zettlr. Ma ovviamente sarebbe bello se potessi modificare il tuo template LaTeX all'interno di Zettlr, giusto?

![Crea file TeX usando l'estensione appropriata](../img/create_tex_file.png)

Oh beh, abbiamo proprio buone notizie. Se crei un nuovo file, ma **fornisci come estensione del file `.tex`**, Zettlr non creerà un file Markdown, ma proprio un file LaTeX! Questo file potrà essere indicato da un piccolo indicatore `Tex` nella lista dei file (se le informazioni dei file sono attivate) e può essere modificato senza uscire da Zettlr. Evviva! 

![Zettlr con un file TeX aperto](../img/zettlt_tex_file.png)

Zettlr rileverà automaticamente se si tratta di un file LaTeX e cambierà addirittura l'evidenziatura del codice da Markdown a LaTeX per aiutarti a scrivere il file!

## Contenuti necessari

Oltre alle solite cose di LaTeX, ci sono alcune cose che ci devono essere nei tuoi file. Ricordati che i tuoi file saranno passati attraverso un filtro dentro Zettlr, poi Citeproc (se del caso), e infine a Pandoc, prima di essere passati al motore di LaTeX. Quindi, se vuoi puoi anche togliere tutte le variabili specifiche di Zettlr, ma una ci deve sempre essere:

```
$body$
```

Questa variabile sarà sostituita dentro Pandoc con i contenuti scomposti dei tuoi file Markdown. Se la togli, i tuoi contenuti saranno incollati nel vuoto, per cui assicurati di non dimenticarti mai di posizionare questa variabile nel punto in cui vorresti i tuoi contenuti!

> Ciò significa inoltre che, anche se il template di default di Zettlr omette molte variabili dal template di default di Pandoc, tu sei libero di includerle tutte! Puoi sfruttare l'intero arsenale delle variabili di Pandoc, e delle variabili Zettlr --- oppure no. É qui che i template diventano davvero potenti.

## Hackera i tuoi Template!

E ora passiamo alle cose divertenti. Nel tempo, Zettlr ha incorporato sempre più opzioni per affinare il tuo controllo nel processo di esportazione. Questo vuol dire che puoi fare delle cose davvero divertenti con Zettlr. Per esempio, puoi aggirare completamente tutte le belle modifiche che il tuo motore di esportazione aggiunge ai tuoi file (eccetto scomporre i file sorgenti), semplicemente sostituendo il comando di Pandoc nelle tue preferenze con uno fisso.

Un'altra cosa che puoi fare è inserire le variabili di Pandoc all'interno delle tue variabili di Zettlr (per esempio definire l'autore del PDF come qualcosa che includa una variabile Pandoc). Poi, quando Zettlr è passato sul tuo file, Pandoc sostituirà le sue variabili dopo la sostituzione delle variabili di Zettlr.

E se _davvero_ te la senti di hackerare tutto, dai un'altra occhiata al comando Pandoc. Se guardi con attenzione, vedrai che davanti al comando c'è scritto `pandoc`. Sai cosa vuol dire? Forse ci sei arrivato: il comando Pandoc non è solo qualcosa che viene passato a Pandoc, ma è il **comando completo di console che sarà eseguito**! Cosa significhi dovrebbe ora essere ovvio: puoi eseguire qualche script e logiche personalizzate prima e dopo eseguire il vero comando Pandoc!

Magari vuoi passare il file Markdown temporaneo a uno script personalizzato per eseguire ancora più opzioni, e successivamente spostare il file in un'altra posizione? Osserva il seguente adattamento del comando Pandoc nelle preferenze:

```shell
pandoc "$infile$" -f markdown $outflag$ $tpl$ $toc$ $tocdepth$ $citeproc$ $standalone$ --pdf-engine=xelatex -o "$outfile$" && cp "$outfile$" /Users/zettlr/Desktop/Final.pdf
```

Questo comando copia il file di output finale sulla Scrivania di un utente fittizio "zettlr" e lo nomina "Final.pdf" (supponendo tu sia su macOS). Invece di usare un semplice comando shell come `cp`, potresti anche passare alcuni script che verrebbero eseguiti successivamente. Davvero non ci sono limiti!

## Pensieri conclusivi

Zettlr punta a dare ai suoi utenti un controllo totale su quello che possono fare con i loro file. Quello che abbiamo descritto in queste pagine è solo l'inizio. Non ci siamo sbizzarriti, ma c'è davvero tanto che puoi fare. Per quali strani cose utilizzi le possibilità di Zettlr? Raccontacelo su [Twitter](https://www.twitter.com/Zettlr), nel [Forum](https://forum.zettlr.com/), o su [Reddit](https://www.reddit.com/r/Zettlr)!