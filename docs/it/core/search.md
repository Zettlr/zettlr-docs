# Ricerca

Uno degli enormi vantaggi di passare a Markdown quando si scrivono documenti è che i documenti stessi sono ricercabili dal motore di ricerca incluso nel tuo sistema operativo (es. Cortana su Windows, Spotlight su macOS o Dash sui sistemi Linux). Ma ovviamente è molto meglio se non devi uscire dal programma quando devi cercare qualcosa. É qui che entra in gioco la funzione di ricerca! Ci sono essenzialmente tre diverse funzioni diverse di ricerca: una funzione di filtro veloce che puoi usare ogni volta che selezioni un'altra cartella dall'elenco a sinistra, una ricerca ristretta al documento, e una ricerca globale.

## Filtro dei file

La prima funzione è stata già menzionata più volte. Poiché la lista di anteprima visualizza solo i file all'interno di una certa cartella e di tutte le sue sottocartelle, basta selezionare cartelle diverse per restringere la lista di tutti file soltanto a quelli di cui hai bisogno. Oppure, seleziona una cartella radice per l'elenco completo.

## Cercare nei file

Se stai cercando per specifiche frasi o parole all'interno del file attualmente aperto, premi `Cmd/Ctrl+F`. Si aprirà un piccolo popup sotto al simbolo della lente dandoti le normali opzioni di trova e sostituisci. Basta digitare qualcosa e premere `Invio` più volte per passare in rassegna tutte le corrispondenze nel testo. Premi `Esc` o clicca al di fuori del popup per chiuedere la ricerca.

> **Consiglio**: puoi anche sfruttare le potenti espressioni regolari per la ricerca. Zettlr di default effettua una ricerca di default, ma quando viene rilevata un'espressione di ricerca (cioé la tua ricerca è racchiusa tra barre oblique), effettuerà una ricerca RegExp. Quando Zettlr rileva un'espressione regolare, il campo di ricerca cambierà il suo carattere in uno monospazio per aiutarti a scrivere espressioni regolari. Per cercare tutte le cifre per esempio, cercherai `/\d+/`. [Qui maggiori informazioni sulle espressioni regolari di JavaScript](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Se premi `Invio` mentre è selezionato il campo di sostituzione, Zettlr sostituirà quel risultato di ricerca e evidenzierà automaticamente la corrispondenza successiva del tuo termine di ricerca. Premi `Invio` più volte per sostituire più corrispondenze. Se vuoi sostituire tutte le corrispondenze insieme, puoi premere `Alt+Invio` mentre è selezionato il campo di sostituzione.

> **Consiglio**: proprio come negli altri editor, puoi usare delle variabili mentre stai cercando utilizzando un'espressione regolare. Se cerchi qualcosa con un'espressione regolare che contiene almeno un gruppo di cattura, puoi usare la variabile `$1` dentro il tuo testo sostitutivo. Tali variabili saranno sostituite con il contenuto trovato dei gruppi di cattura. Riscontri multipli della variabile saranno anch'essi sostituiti. Il numero che segue `\$` si riferisce all'indice del gruppo di cattura (il secondo gruppo di cattura è riferito con `\$2` e così via). [Qui maggiori informazioni sulle espressioni regolari di JavaScript](https://codeburst.io/javascript-learn-regular-expressions-for-beginners-bb6107015d91).

Ovviamente, puoi usare la ricerca in finestre Quicklook. Quindi, clicca nel contenuto che vuoi venga cercato da Quicklook (per evidenziarlo ed evitare che `Cmd/Ctrl+F` attivi la ricerca sul tuo file principale) e premi `Cmd/Ctrl+F` per iniziare la ricerca.

## Ricerca globale

L'aspetto più importante della funzione di ricerca è, in effetti, la ricerca globale che puoi attivare premendo `Cmd/Ctrl+Shift+F`. La casella di input della ricerca nella barra degli strumenti verrà selezionata, così che tu possa cercare un sottogruppo specifico di file nella tua cartella radice: soltanto quelli attualmente visibili nel pannello a sinistra. Ciò significa che puoi selezionare quali file saranno ricercati selezionando la giusta cartella radice dalla lista---usa la funzione filtro a tuo vantaggio!

Se vuoi ricercare _tutti_ i file insieme, seleziona una cartella radice. Se vuoi cercare solo in una specifica cartella, selezionala prima di cercare. Nella gran parte dei casi avrai una qualche idea di dove sarà il testo di cui hai bisogno. Per esempio, se stai cercando una citazione su un certo tema che può essere usata in una ricerca scientifica non vuoi cercare tra tutti i tuoi pensieri e idee, ma limitare la tua ricerca all'interno della cartella dove mantieni tutti gli estratti dei testi e paper scientifici.

La ricerca stessa è piuttosto potente. Puoi usare diversi operatori per specificare esattamente quello che stai cercando:

* **operatore AND:** Digita `Boat Ship` per visualizzare soltanto i file che contengono _entrambe_ le parole "boat" e "ship". Ogni spazio è interpretato come un "AND".
* **operatore OR:** Digita `Boat | Ship` (| è l'operatore pipe, inserito con `Alt+7` in macOS o `AltGr+<` in altri sistemi) per selezionare tutti i file che contengono _o_ la parola "boat" _o_ la parola "ship".
* **operatore di corrispondenza esatta:** Digita `"Boat Ship"` per cercare i tuoi file che contengono esattamente quella sequenza.

Ovviamente, puoi combinare tutti questi operatori. Per cui potresti cercare `"Boat Ship" | vessel captain` per visualizzare solo i file che contengono o la sequenza esatta "Boat Ship" oppure la parola "vessel" insieme alla parola "captain".

Non preoccuparti se non ricordi il termine esatto che stai cercando: Zettlr cercherà di far corrispondere i tuoi termini di ricerca anche a parti di parole, per cui il termine "trooper" riuscirà a trovare anche "stormtrooper" o "Troopership", così come anche la frase "Boat Ship" troverà anche un "Steamboat ship". **Anche le ricerche sono case-insensitive**. Quindi non devi preoccuparti di piccoli errori di battitura che potresti avere in qualche file.

Mentre Zettlr sta cercando, mostrerà un indicatore di ricerca alla destra della casella di ricerca. Quando ha finito, colorerà tutti i tuoi file. Quanto più verdi sono, quanto più sono rilevanti (cioé quanto migliori sono le corrispondenze trovate nei tuoi file). Questa è una sorta di **heat map dei risultati di ricerca** che ti consente di identificare facilmente i file rilevanti trovati.

> Ti preghiamo di notare che Zettlr nasconderà tutti i file in cui i termini ricercati non hanno trovato corrispondenze, così come anche tutte le cartelle.

Per ottenere migliori risultati, Zettlr peserà diversamente diversi tipi di corrispondenze. Per esempio, una corrispondenza esatta nel titolo può voler dire che quel file è altamente rilevante per te. Quindi, Zettlr considererà quel file di maggior peso rispetto agli altri. Inoltre, se un termine di ricerca trova una corrispondenza case-sensitive, quella corrispondenza riceverà un punteggio più alto di un'altra che corrisponde solo case-insensitive (cioé con diverse maiuscole e minuscole).

Per trovare il punto esatto della corrispondenza della tua ricerca, seleziona un file e Zettlr evidenzierà automaticamente in giallo chiaro tutte le corrispondenze per aiutarti a trovarle. Inoltre, sulla barra di scorrimento all'estrema destra verranno visualizzati delle piccole linee orizzontali che indicheranno le posizioni nel documento in cui compaiono i tuoi termini di ricerca.

## Uscire dalla ricerca globale

La ricerca globale per molti aspetti è persistente. In questo modo puoi passare in rassegna i risultati della tua ricerca senza temere che nessuna azione possa farti uscire accidentalmente dalla ricerca. Questo è specialmente utile in lunghissime liste di file, quando la ricerca può impiegare molto tempo. Ad ogni modo, _ci sono_ modi di uscire da una ricerca globale.

Esegui una delle seguenti azioni per uscire dalla ricerca e visualizzare di nuovo i file normalmente: 

* Mentre è selezionata la casella di ricerca, premi `ESC`. (Puoi riselezionarla con `Cmd/Ctrl+Shift+F`)
* Clicca la `x` sulla destra della casella di ricerca.
* Seleziona una diversa cartella nell'albero delle cartelle.
