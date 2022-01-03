# Facilità di lettura

Scrivere bene implica aspetti diversi. Oltre a un contenuto conciso, i tuoi testi hanno bisogno di una commistione equilibrata di frasi lunghe e brevi. Inoltre dovresti evitare di usare troppe parole complesse e difficili. Infine, è sempre buona norma fare in modo che i tuoi paragrafi non siano troppo lunghi, usare la forma attiva, e strutturare di conseguenza i tuoi paragrafi.

Da quando esistono i testi, la creatività dell'uomo ha fatto emergere diversi consigli per una buona scrittura. Anche se Zettlr ti fornisce l'ambiente perfetto per scrivere, assicurando una perfetta _leggibilità_ dei tuoi testi, devi occuparti anche della _facilità di lettura_ . Fortunatamente, a partire dall `1.4`, Zettlr ha uno strumento per te: i **livelli di leggibilità**.

> Ti preghiamo di notare che il punteggio di leggibilità è solo uno dei diversi parametri che possono aiutarti a capire la facilità di lettura, ma non va preso troppo sul serio. Se l'algoritmo di leggibilità evidenzia una frase in rosso scuro, questo non vuol dire necessariamente che devi riscrivere la frase. Piuttosto, osserva il contenuto della frase, che l'algoritmo non tiene in considerazione, per capirne la qualità. **Raccomandiamo di scrivere i tuoi testi prima senza questa modalità, e attivarla solo dopo su alcuni passaggi che hai la sensazione possano essere difficili da capire**.


## Come funzionano gli algoritmi di leggibilità

Essenzialmente, i livelli di leggibilità sono una modalità di evidenziatura della sintassi per CodeMirror che calcola un punteggio base per ciascuna delle tue frasi, dandoti una prima impressione della leggibilità dei tuoi testi. Evidenzia ogni tua frase con un colore che va dal verde al rosso, dove il verde significa che la tua frase è facile da capire, mentre il rosso che la tua frase è difficile da capire.

Questa modalità ha a disposizione quattro diversi algoritmi: la [Dale-Chall-formula](https://en.wikipedia.org/wiki/Dale%E2%80%93Chall_readability_formula), il [Gunning-Fog index](https://en.wikipedia.org/wiki/Gunning_fog_index), il [Coleman-Liau-index](https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index), e il [Automated Readability index](http://www.readabilityformulas.com/automated-readability-index.php). Questi si differenziano in base a cosa valutano difficile della tua scrittura, e nell'"asprezza" dei punteggi che danno alle frasi. Non tutti gli indici vanno bene per tutti i testi. Devi scegliere saggiamente gli algoritmi.

### La Dale-Chall

La formula Dale-Chall è stata creata durante le prime ricerche in scienze della formazione da Edgar Dale e Jeanne Chall. L'obiettivo era di quantificare la leggibilità dei testi per i bambini in età scolare. Utilizza una lista di 3000 parole facili da capire per un bambino americano di quarta elementare e dà un punteggio che approssimativamente va da 0 a 10, che grossolanamente indica gli anni di istruzione necessari per capire un testo. Ciò significa: se una frase ha punteggio 10, hai bisogno di una laurea per capire il testo, mentre una frase con punteggio 1 può essere compresa dai principianti.

**Dovresti usare l'indice Dale-Chall, se** stai scrivendo per un pubblico vasto, poiché l'algoritmo privilegia frasi brevi e concise senza forzarti a eccessi ridicoli.

### L'Indice Gunning-Fog

Il Gunning-Fog è stato creato ai tempi delle prime riviste e delle facili letture. Nel 1952, Robert Gunning stava cercando un modo per avere una misura dei libri e dei giornali che stava pubblicando. L'indice Gunning-Fog restituisce quindi un punteggio approsimativamente correlato agli anni di istruzione formale necessari per un lettore per capire un testo. Tuttavia, poiché si trattava di un uomo d'affari e quindi interessato alla più ampia diffusione delle sue pubblicazioni, l'algoritmo di Gunning tende a dare punteggi alti anche a testi relativamente facili da capire. Se provi i diversi algoritmi uno dopo l'altro, ti accorgerai che il Gunning-Fog tende ad evidenziare tutto in ~~nero~~ rosso.

**Dovresti usare l'indice Gunning-Fog, se** vuoi scrivere brevi testi pubblicitari (es. per siti web) che non possono fare affidamento su un'intrinseca motivazione di base per essere letti.

### L'indice Coleman/Liau

Con l'abbattersi dei prezzi dei computer, le statistiche computer-assistite divennero una possibilità diffusa per processare enormi quantità di dati e cavarne fuori una valida misura. L'indice Coleman/Liau proviene da quest'epoca ed è un algoritmo che non si basa soltanto sul conteggio delle sillabe o elenchi di "parole difficili". Pertanto, l'indice Coleman/Liau è estremamente accurato nella sua implementazione in Zettlr. Come gli altri, dà un punteggio che approssima gli anni di istruzione formale necessari per capire una frase. In più, il Coleman/Liau dà risultati ragionevoli e non ti obbliga necessariamente a scrivere frasi brevi.

**Dovresti usare l'indice Coleman/Liau, se** hai bisogno di una misura accurata della leggibilità di qualsiasi testo. Non funziona bene con le frasi di una sola parola, ma fornisce punteggi comprensibili anche a testi più difficili da capire.


### Automated Readability Index (ARI)

L'Automated Readability Index segue immediatamente il Coleman/Liau, poiché usa una formula più recente per calcolare i punteggi di leggibilità basandosi su semplici analisi statistiche. É il più "clemente" degli algoritmi e fornisce risultati che non ti portano a riscrivere metà del tuo testo a causa di un'evidenziatura in rosso.

**Dovresti usare l'Automated Readability Index, se** stai scrivendo testi più impegnativi come paper universitari, poiché ti darà punteggi più bassi anche per alcune frasi difficili. 

### Un appunto sulle "parole difficili"

Nella sua implementazione, Zettlr non è fornito di un elenco di parole facili da capire come richiesto dal Dale-Chall. Usa invece un approccio diverso. L'elenco delle parole facili da capire cambia di volta in volta e, ovviamente, di lingua in lingua. Pertanto, Zettlr tiene in considerazione un'altra quantità per capire le parole considerate difficili: la varianza di linguaggio.

Le parole difficili per Zettlr sono definite come quelle più lunghe di due volte la deviazione standard rispetto alla lunghezza media delle parole. Così come descritto da Coleman e Liau nella loro ricerca del 1975 _A Computer Readability Formula Designed for Machine Scoring_, la lunghezza delle parole è un indicatore molto migliore della difficoltà delle parole rispetto al numero di sillabe. Quindi, l'algoritmo può calcolare i punteggi di ogni scrittura occidentale, non soltanto l'inglese. Puoi leggere una spiegazione dell'algoritmo [nella nostra pagina sulla funzione di leggibilità](https://zettlr.com/readability).

Inoltre, Zettlr cambia ancora un'altra cosa degli algoritmi: mentre tutti i quattro algoritmi sono stati sviluppati per essere applicati a testi interi, i livelli di leggibilità di Zettlr considerano ogni frase una alla volta, isolandola dal suo contesto. In generale questo si avvicina alla difficoltà della frase, ma ovviamente può evidenziare in verde alcune frasi che sono difficili da capire nel contesto in cui si trovano, mentre evidenzierà in rosso alcune frasi che tuttavia sono ben posizionate nel loro contesto.
