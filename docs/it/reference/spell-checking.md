# Dizionari e Controllo ortografico

Come tutti i programmi di scrittura moderni, Zettlr possiede alla sua base una potente funzione di controllo ortografico. Di default è disattiva, poiché molti utenti vogliono ancora separare il controllo ortografico dall'attività di scrittura vera e propria, ma puoi attivarla facilmente. In più, Zettlr ti consente di controllare per più lingue contemporaneamente, rendendolo ideale per testi bilingue (per esempio un articolo di rivista scientifica in inglese con alcune citazioni in tedesco).

## Attivare il controllo ortografico

Per attivare il controllo ortografico, apri le preferenze usando o la voce del menu, o cliccando sul pulsante sulla barra degli strumenti, oppure premendo `Cmd/Ctrl+,`. Nel pannello dell'Editor, puoi selezionare tutti i dizionari che vuoi attivare. A sinistra sono elencati tutti i dizionari disponibili. Cliccane uno per muovere il selettore a destra, dove il verde indica tutti i dizionari attivi. Clicca una delle caselle in verde per disattivare di nuovo il dizionario.

Puoi filtrare l'elenco di tutti i dizionari disponibili digitando una chiave di ricerca nella casella di testo in alto. Zettlr nasconderà automaticamente tutti i dizionari che non contengono la tua chiave di ricerca. Rimuovi tutto dalla casella di ricerca per mostrare di nuovo tutti i dizionari.

Dopo aver salvato le tue nuove impostazioni del controllo ortografico, Zettlr inizierà automaticamente a caricare tutti i dizionari. Potrai osservare un po' di rallentamenti mentre Zettlr carica i dizionari; specialmente con i dizionari molto grandi come quello di Italiano o di Tedesco ci potrà volere del tempo. Quando chiudi il programma, Zettlr dopo un breve ritardo caricherà i dizionari ad ogni avvio . 

## Disattivare il controllo ortografico

Per disattivare di nuovo il controllo ortografico, basta disattivare tutti i dizionari cliccando sulle caselle in verde nella parte destra del pannello Editor della finestra delle preferenze. Se nessuno è attivo, Zettlr non condurrà nessun controllo ortografico sui tuoi testi.

## Dizionari personalizzati

Dalla versione `1.3.0` in poi, Zettlr supporta l'aggiunta di alcune parole al tuo dizionario definito dall'utente. Questo è particolarmente utile per i nomi, poiché puoi segnarli come corretti in modo da eliminare la sottolineatura rossa. Per aggiungere una parola al dizionario utente, basta cliccare con il tasto destro su un nome o su una parola segnalata e selezionare "Aggiungi al dizionario". Zettlr non segnalerà mai più come errata quella parola.

## Aggiungere nuovi Dizionari

Anche se Zettlr è già fornito di diversi dizionari quando lo installi, potresti voler aggiungere nuovi dizionari delle lingue in cui scrivi. Per aggiungere tali dizionari, dovrai cercare dei dizionari hunspell-compatibili. Sostanzialmente, questi sono cartelle che contengono due file – un file `.dic` e un file `.aff`. Il file `.dic` contiene tutte le parole di una lingua con dei cosiddetti affissi, es. piccoli flag che dicono all'algoritmo che una determinata parola, per esempio, può prevedere anche un altro termine (considera ad esempio la parola controllore – anche se la radice è "controllo", possono esistere sia la parola "controllo" che la parola "controllore" – il flag affisso indicherebbe quindi che "questa parola puà finire anche con `re`!"). Il file `.aff` contiene la definizione di questi flag.

Per aggiungere questi dizionari, devi cercarli online. Un buon punto di partenza è il [repository dell'utente wooorm di GitHub](https://github.com/wooorm/dictionaries), che contiene parecchie lingue. Basta scaricarne una sul tuo computer. Poi, da Zettlr, clicca su File->"Importa dizionario...". Questo aprirà il browser dei file del tuo computer sulla cartella `dict` di Zettlr. Copia l'intera cartella del dizionario che hai appena scaricato nella cartella `dict`. Potrai quindi selezionare questo dizionario nelle impostazioni.

Tieni presente che Zettlr farà qualche prova di base per capire se un dizionario è valido o meno. Perché Zettlr visualizzi il dizionario e possa selezionarlo, il dizionario deve rispettare le seguenti regole:

1. La cartella che contiene i file `.dic` e `.aff` deve essere nominata secondo il corrispondente [tag BCP-47](https://tools.ietf.org/html/bcp47) della lingua che il dizionario contiene. Anche se non conoscevi il termine "BCP-47", è solo il comune tag di lingua, per cui per esempio un dizionario di Tedesco sarà nominato `de-DE` (per il Tedesco tedesco) o `de-CH` (per il Tedesco svizzero), o semplicemente `it` (Italiano). Una [lista completa di tutte le lingue disponibili la puoi trovare qui](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).
2. Dentro a questa cartella, devono essere presenti almeno due file: il file `.dic` e il file `.aff`. Questi devono essere nominati o con lo stesso tag BCP-47 della cartella, oppure `index.dic`/`index.aff`.
3. La cartella del dizionario può contenere altri file (come la lista degli autori, o una LICENSE). Questi saranno ignorati.

Per riassumere, Zettlr controllerà se un dizionario è valido verificando che esistano i seguenti percorsi:

- `bcp-47/bcp-47.dic` e `bcp-47/bcp-47.aff` _o_
- `bcp-47/index.dic` e `bcp-47/index.aff`

> Attenzione: gli algoritmi hunspell implementati in JavaScript non sono ancora così potenti come l'algoritmo principale che usa LibreOffice, quindi può benissimo succedere che alcuni dizionari si rivelino troppo grandi da caricare. Se Zettlr si blocca dopo aver caricato un dizionario, basta forzare la chiusura del programma e assicurarsi di disattivare quel dizionario.