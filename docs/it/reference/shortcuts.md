# Scorciatoie

Questa pagina contiene un elenco di tutte le scorciatoie disponibili nell'app.

Perché siano più facili da ricordare, ecco cosa avevo in mente quando le ho assegnate. In generale, cerchiamo di seguire queste regole, ma non valgono per tutte le scorciatoie.

1. **Scorciatoie comuni**: Alcune scorciatoie sono così comuni che non rientrano nel nostro sistema di scorciatoie, ma saranno riconosciute da tutti. Un esempio è la scorciatoia per le preferenze (`Cmd/Ctrl+,`), un altro è per finire di modificare una nota a piè di pagina (`Shift+Invio`). Cerchiamo di usare quante più scorciatoie possibili di questo tipo per facilitare gli utenti.
2. **Scorciatoie di alta priorità**: userai _tantissimo_ queste scorciatoie nel programma. Queste in genere sono formate da `Cmd/Ctrl` e una singola lettera. Nel nominare le scorciatoie ci siamo attenuti ai nomi in inglese dei comandi (**N**ew, **R**emove, **F**ind, ecc.). A volte questo non è possibile (per es. la modalità senza distrazioni si attiva con `Cmd/Ctrl+J`, perché `Cmd/Ctrl+D` è già in uso dall'editor).
3. **Scorciatoie alternative**: prendiamo sul serio il significato del tasto `Alt`. Quindi, prendi una scorciatoia di alta priorità, aggiungici un `Alt` e in genere attiverai una funzione alternativa sullo stesso bersaglio. Eccezioni notevoli sono il pannello sviluppatore (si apre con `Cmd/Ctrl+Alt+I`, quando `Cmd/Ctrl+I` rende il testo in corsivo). **Questo vale per _tutte_ le azioni che puoi attivare usando dei clic del mouse. Tutte le azioni alternative del mouse sono attivate con un `Alt+Clic`. Nel caso che `Alt+Clic` non dia i risultati sperati, va bene anche `Ctrl+Clic`**.
4. **Bersagli alternativi**: nel caso vuoi eseguire la stessa _azione_, ma su un bersaglio diverso, prova a usare il tasto `Shift`. In tutto il programma, i comandi `Shift` cambieranno il bersaglio dal file correntemente selezionato alla cartella correntemente selezionata. Vale anche per la funzione di ricerca (`Cmd/Ctrl+F` cerca il file, mentre `Cmd/Ctrl+Shift+F` cerca l'intera cartella).

## Scorciatoie per tutto il programma

* `Cmd/Ctrl+,`: Apri le Preferenze
* `Cmd/Ctrl+Alt+,`: Apri le Preferenze PDF
* `Cmd/Ctrl+Q`: Esci dal programma
* `Cmd/Ctrl+N`: Crea un nuovo file dentro la cartella correntemente selezionata. Se non è selezionata nessuna cartella, il comando non funziona.
* `Cmd/Ctrl+Shift+N`: Crea una nuova cartella dentro la cartella correntemente selezionata. Se non è selezionata nessuna cartella, il comando non funziona.
* `Cmd/Ctrl+O`: Mostra la finestra di dialogo per aprire un'altra cartella.
* `Cmd/Ctrl+S`: Salva il file. Zettlr salva automaticamente i tuoi file, ma alcuni si sentono meglio se possono salvare manualmente.
* `Cmd/Ctrl+E`: Apre il popup di esportazione per esportare il file corrente. Se non è selezionato nessun file, il comando non funziona.
* `Cmd/Ctrl+R`: Rinomina il file aperto. Se non è selezionato nessun file, il comando non funziona.
* `Cmd/Ctrl+Shift+R`: Rinomina la cartella corrente. Se non è selezionata nessuna cartella, il comando non funziona.
* `Cmd/Ctrl+Delete`: Elimina il file corrente. Se non è selezionato nessun file, il comando non funziona.
* `Cmd/Ctrl+Shift+Delete`: Elimina la cartella corrente. Se non è selezionata nessuna cartella, il comando non funziona.
* `Cmd/Ctrl+Shift+F`: Seleziona la casella di ricerca globale.
* `Cmd/Ctrl+Alt+L`: Passa tra la modalità chiara e quella scura.
* `Cmd/Ctrl+Alt+S`: Abilita la visualizzazione degli snippets di testo.
* `Cmd/Ctrl+Shift+1`: Abilita il pannello laterale per vedere o la lista dei file o l'albero delle cartelle. Disabilitata in modalità estesa.
* `Cmd/Ctrl+?`: Abilita la visualizzazione del pannello degli allegati.
* `Cmd/Ctrl+[0-9]`: Apri i documenti più recenti nelle posizioni da 0 a 9. (File->Documenti Recenti).
* `Cmd+Ctrl+F` (macOS) `F11` (windows/Linux): Abilita la modalità a schermo intero.
* `Cmd/Ctrl+W`: Chiude la finestra del programma. Su Windows e Linux chiuderà anche l'intero programma.
* `Cmd/Ctrl+M`: Riduce la finestra del programma.
* `F1`: Apre questa guida. Aprirà il collegamento nel tuo browser di default.

**Se è attiva la modalità di debug**

* `F5`: Ricarica l'interfaccia utente grafica.
* `Cmd+Alt+I` (macOs) `Ctrl+Shift+I` (Windows/Linux): Apre gli strumenti di sviluppatore di Chrome.

## Scorciatoie in tutto il programma relative ai campi di testo

* `Cmd/Ctrl+Z`: Annulla
* `Cmd/Ctrl+Shift+Z`: Rifai
* `Cmd/Ctrl+X`: Taglia
* `Cmd/Ctrl+C`: Copia
* `Cmd/Ctrl+V`: Incolla
* `Cmd/Ctrl+A`: Seleziona tutto

## Scorciatoie relative all'Editor

* `Cmd/Ctrl+Alt+C`: Copia come HTML. Se è selezionato del testo, sarà convertito in HTML e non copiato come testo semplice. Questo ti permette di incollarlo per es. in editor di testi.
* `Cmd/Ctrl+Shift+C`: Trasforma o ripristina il testo selezionato in un commento (oppure aggiunge un nuovo commento HTML nella posizione del cursore).
* `Cmd/Ctrl+X`: Taglia. Se l'editor è attivo, taglierà la selezione. Se non è selezionato niente verrà tagliata l'**intera linea** in cui si trova il cursore.
* `Cmd/Ctrl+V`: Incolla. Se l'editor è attivo, e hai appena tagliato un'intera linea, questa verrà incollata nella riga sopra a dove si trova il cursore. Se gli appunti contengono del testo formattato la formattazione verrà mantenuta quando vengono incollati. 
* `Cmd/Ctrl+Shift+V`: Come sopra, ma non proverà a mantenere la formattazione del testo da incollare.
* `Cmd/Ctrl+B`: Rende in grassetto la selezione, oppure inserisce dei nuovi caratteri per il formato grassetto.
* `Cmd/Ctrl+I`: Rende in corsivo la selezione, oppure inserisce dei nuovi caratteri per il formato corsivo.
* `Cmd/Ctrl+K`: Inserisce un nuovo template di collegamento oppure trasforma il testo selezionato in un nuovo collegamento (in parentesi quadre). Se gli appunti contengono un link riconoscibile, riempirà con esso anche le parentesi tonde per il collegamento vero e proprio.
* `Cmd/Ctrl+T`: Aggiunge una casella spuntabile all'inizio della riga dove si trova il cursore.
* `Cmd/Ctrl+F`: Apre il popup di ricerca dentro l'editor che è attualmente attivo (o l'editor principale o una finestra Quicklook).
* `Ctrl+Alt+F` (Windows/Linux) `Cmd+Alt+R` (macOS): Inserisce una nuova nota a piè di pagina nel punto dove si trova attualmente il cursore.
* `Cmd/Ctrl+L`: Genera un nuovo ID secondo lo lo schema di generazione impostato nella finestra delle preferenze e lo inserisce dove si trova attualmente il cursore.
* `Cmd/Ctrl+0`: Ripristina la dimensione standard dei caratteri dell'editor.
* `Cmd+Più` (macOS) `Ctrl+Shift+Più` (Windows/Linux): Aumenta la dimensione dei caratteri nell'editor.
* `Cmd/Ctrl+Meno`: Riduce la dimensione dei caratteri nell'editor.
* `Tab`: Aumenta il rientro in un elenco.
* `Shift-Tab`: Riduce il rientro in un elenco.
* `Shift-Invio`: Quando stai modificando una nota a piè di pagina, salva il testo della nota. Altrimenti impedirà l'auto-inserimento di una nuova nota.
* `Ctrl-Invio`: Inserisce una riga al di sotto di dove si trova attualmente il cursore, e sposterà il cursore all'inizio della nuova riga.
* `Ctrl-Shift-Invio`: Inserisce una riga al di sopra di dove si trova attualmente il cursore, e sposterà il cursore all'inizio della nuova riga.

## Scorciatoie dell'editor delle tabelle

Queste scorciatoie funzionano in ognuno degli editor di tabelle quando li attivi cliccando su una tabella.

* `Tab`: Si sposta alla cella successiva. Se sei nell'ultima colonna, si sposterà alla prima cella della riga successiva. Se il cursore era nell'ultima riga dell'ultima colonna, verrà aggiunta automaticamente una nuova riga.
* `Shift-Tab`: Si sposta alla cella precedente. Se sei nella prima colonna, si sposterà sull'ultima cella della colonna precedente.
* `Invio`: Si sposta alla riga successiva della stessa colonna. Se il cursore era nell'ultima riga, verrà aggiunta automaticamente una nuova riga.
* `Freccia su/Freccia giù`: Si sposta nella stessa colonna alla riga precedente/successiva. Non verranno aggiunte nuove righe se sei nella prima o ultima riga.
* `Freccia sinistra/Freccia destra`: Sposta il cursore a sinistra/destra. Se il cursore si trova all'inizio/fine della cella, si sposta alla cella precedente/successiva.

## Scorciatoie relative all'anteprima

* `Freccia su`: Apre il file precedente.
* `Freccia giù`: Apre il file successivo.
* `Cmd/Ctrl+Freccia su`: Vai in cima all'elenco.
* `Cmd/Ctrl+Freccia giù`: Vai in fondo all'elenco.

## Scorciatoie relative ai Popup

* `ESC`: se è attivo un qualunque campo di testo del popup, premere Esc chiuderà il popup.

**Nel popup di ricerca dell'editor principale**

* `Invio`: Quando è attivo il campo  _ricerca_, selezionerà la corrispondenza successiva del tuo termine di ricerca. Se è attivo il campo  _sostituisci_, sostituirà la corrispondenza successiva del tuo termine di ricerca con il tuo testo sostitutivo, e cercherà automaticamente la corrispondenza successiva.
* `Alt+Invio`: Quando è attivo il campo  _sostituisci_, questo sostituirà tutte le corrispondenze del tuo termine di ricerca con il tuo testo sostitutivo.