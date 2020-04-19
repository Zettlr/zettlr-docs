# Cartelle virtuali

Le cartelle virtuali sono una potente funzionalità di Zettlr che ti consente di ordinare e raccogliere i file arbitrariamente. Funzionano come una specie di contenitore in cui puoi manualmente inserire i file.

## Creare cartelle virtuali

Le cartelle virtuali rappresentano dei sottoinsiemi di determinate cartelle. Puoi crearle cliccando con il tasto destro qualsiasi cartella e selezionare "Nuova cartella virtuale...". Potrai quindi nominarle come faresti con qualsiasi altra cartella. I nomi di cartelle virtuali e delle cartelle normali seguono le stesse regole; non soltanto per mantenere un aspetto coerente nel programma, ma anche per garantire che il nome sia "a prova di [JSON](https://en.wikipedia.org/wiki/JSON)".

Le cartelle virtuali appaiono come sottocartelle della cartella in cui le hai create. Restano al di sopra di tutte le altre sottocartelle, aiutandoti a trovarle. Inoltre, sono segnalate da una piccola icona a forma di scatola e sono colorate diversamente dalle altre cartelle, indicandone lo status speciale.

## Aggiungere, rimuovere e lavorare sui file

Dopo aver creato una cartella virtuale, funzionerà come una normale cartella. Puoi metterci dei file, rinominarli e rimuoverli. Tuttavia, esiste una notevole limitazione:

> Puoi aggiungere soltanto dei file che siano _dentro_ la cartella in cui hai creato la cartella virtuale. Poiché le cartelle virtuali sono pensate per rappresentare dei sottoinsiemi di una specifica cartella, ciò significa che non puoi aggiungervi file che si trovano al di  _fuori_ di quella cartella.

Per rimuovere dei file, cliccaci con il tasto destro da dentro la cartella virtuale (cioé sulla loro visualizzazione in viola, **non** il file stesso!) e seleziona l'opzione "Elimina da cartella virtuale".

Dentro la cartella virtuale, sono permesse tutte le operazioni sui file, anche muoverli in altre cartelle. Se rinomini un file dentro una cartella virtuale, questa modifica verrà applicata sia su disco (cioé nella cartella "vera") sia nella cartella virtuale. Se rimuovi completamente un file, sarà rimosso anche da tutte le cartelle virtuali in cui si venisse a trovare.

## Altre limitazioni delle cartelle virtuali

Oltre a non poter includere file esterni alla cartella che le contiene, lavorare con le cartelle virtuali ha anche alcune altre limitazioni.

1. Non puoi spostarle perché sono vincolate alla cartella in cui le hai create.
2. Le cartelle virtuali sono permanenti (cioé salvate su disco) ma ovviamente non come cartelle. Sono archiviate in un cosiddetto [Dot-file](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory), il che comporta alcuni problemi.
    1. Prima di tutto: su Windows vedrai sempre il file `.ztr-virtual-directory`, perché Windows non nasconde questi file come fanno tutti gli altri sistemi.
    2. In secondo luogo, molti servizi di cloud non sincronizzano i Dot-file per motivi di sicurezza (per esempio, devi esplicitamente istruire i client Nextcloud di sincronizzare i Dot-files). Ciò significa che se archivi i tuoi file in un servizio cloud per potervi accedere da multipli dispositivi, è possibile che le tue cartelle virtuali non vengano trasferite.