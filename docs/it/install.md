# Installazione

L'installazione di Zettlr è molto semplice e richiede solo un passaggio per ogni sistema operativo. Zettlr è multi-piattaforma per cui funzionerà sul tuo sistema qualunque esso sia. Zettlr è disponibile pre-compilato per macOS, Windows e sistemi Linux basati su Debian e RedHat (Ubuntu, Gnome, Xubuntu, Kubuntu, Fedora, RedHat e simili). [@abdelbary_whole-genome_2019]

Se vuoi far funzionare Zettlr su altri sistemi Linux come Arch o su dispositivi ARM (come ad esempio un Raspberry), dovrai costruire da te un pacchetto. Ci sono moltissimi facili tutorial in rete su come creare programmi electron. Ti invitiamo a rivolgerti alle piattaforme supportate da programmi electron per restare aggiornato sulle piattaforme supportate.

> É disponibile un pacchetto mantenuto dalla comunità per Arch Linux. [Puoi trovarlo sui repositories ufficiali](https://wiki.archlinux.org/title/Zettlr#Installation). Ti preghiamo di ricordare che si tratta di un pacchetto mantenuto dalla comunità e non abbiamo nessuna responsabilità per la sua stabilità, sicurezza o disponibilità di versioni.

## Windows (7 o successivi)

Per installare Zettlr su Windows, basta scaricare il programma dalla [pagina di download]((https://www.zettlr.com/download) e fare doppio click per aprirlo. Se desideri installare Zettlr per tutti gli utenti, viene installato nella cartella principale `Program Files`-in questo caso dovrai abilitare i permessi elevati durante il setup (ti chiederà automaticamente l'autorizzazione). Non sono invece necessari permessi se lo installi solo per te.

Per disinstallare Zettlr, avvia Uninstall.exe o dalla cartella stessa oppure più comodamente usando l'opzione nelle tue impostazioni di sistema. Se desideri rimuovere completamente i dati relativi al programma, rimuovi anche la cartella `C:\Users\<tuo-nome-utente>\AppData\Roaming\Zettlr`.

## macOS (10.10 o successivi)

Per installare Zettlr su macOS, è sufficiente scaricare il file dmg dell'ultima versione e montare il file immagine. Dopodiché trascina l'icona di Zettlr sulla cartella Applicazioni ed è fatta!

Per disinstallare Zettlr è sufficiente rimuovere Zettlr.app dalla tua cartella Applicazioni. Se desideri rimuovere completamente i dati relativi al programma, rimuovi anche la cartella `/Users/<tuo-nome-utente/Library/Application Support/Zettlr]`.

> Puoi installare Zettlr anche usando [Homebrew](https://formulae.brew.sh/cask/zettlr): `$ brew install --cask zettlr`

## Linux (Debian 8/Ubuntu 12.04/Fedora 21 o successivi)

Sono disponibili dei pacchetti `deb` e `rpm` precompilati. É sufficiente installare i pacchetti sul proprio sistema.

Per disinstallarli, segui i normali passaggi per rimuovere un paccchetto (di solito attraverso l'installer grafico oppure attraverso `dpkg`). Se desideri rimuovere inoltre completamente i dati relativi al programma, rimuovi anche la cartella `/home/<tuo-nome-utente/.config/Zettlr`.

## Aggiornare il programma

Il programma verifica la disponibilità di nuovi aggiornamenti ogni volta che viene avviato. Puoi inoltre avviare la ricerca di aggiornamenti attraverso la voce corrispondente dal menu Aiuto. Se è disponibile una nuova versione, Zettlr mostrerà una finestra contenente il numero della nuova versione, quello della versione corrente, e un elenco delle modifiche con tutte le funzionalità e le correzioni contenute nella nuova versione. Potrai successivamente aprire la pagina di download per scaricare il nuovo pacchetto. Basterà installarlo sovrascrivendo l'installazione esistente, e la vecchia versione verrà rimossa automaticamente. Tutti i dati verranno salvati e migrati alla nuova versione.

> Se sei interessato ai rilasci più avanzati, assicurati di mettere la spunta alla casella "Notificami il rilascio delle versioni beta" nel pannello "Avanzate" nella finestra delle Preferenze!

## Installare Pandoc

Ciò che rende capace Zettlr di interagire con altri software quali Microsoft Word, sistemi Wiki o OpenOffice è un pacchetto software aggiuntivo chiamato `Pandoc`. Pandoc è gratis e Open Source e ti permette di utilizzare tutte le funzionalità di esportazione e importazione di Zettlr, rendendolo la scelta ideale per l'interfaccia con altri programmi e con colleghi che non usano Markdown.

Installare Pandoc è una semplice operazione per tutte le piattaforme.

> Puoi installare Pandoc in qualsiasi momento. Utilizza la voce corrispondente del menu Aiuto per aprire le istruzioni di installazione

### Windows

Su Windows, Pandoc può essere installato andando alla [pagina di download](https://github.com/jgm/pandoc/releases/latest) e scaricando l'installer di Windows. É sufficiente eseguirlo. Al termine dovrebbe essere correttamente installato. Prova a esportare qualcosa. Se funziona tutto, hai finito!

> Ti preghiamo di notare che poiché Pandoc è un programma CLI (Command Line Interface), non può mostrarti se è disponibile o meno un aggiornamento. Dovrai farlo da solo. Basta ricordarsi di visitare la pagina di download di tanto in tanto.

### macOS

Su macOS, Pandoc può essere installato in modi diversi.

#### Metodo raccomandato: Homebrew

Il metodo preferenziale è [Homebrew](https://brew.sh/). Homebrew è un gestore di pacchetti che facilita l'installazione di programmi a linea di comando come pandoc e facilita la loro manutenzione. Assicurati di [installare Homebrew](https://brew.sh/), e poi esegui da Terminale il seguente comando:

```bash
$ brew install pandoc
```

Per aggiornare pandoc di tanto in tanto, usa il seguente comando:

```bash
$ brew upgrade
```

Questo aggiornerà tutte le formule installate (si chiamano così) all'ultima versione.

> Installare con Homebrew è raccomandato non solo perché è più veloce, ma anche perché è più pratico.

Dopo che pandoc è stato configurato, ti consigliamo di installare anche `citeproc`, poiché ti consente di poter [citare](academic/citations.md) in Zettlr. Su Windows, Citeproc è installato automaticamente, mentre su macOS dovrai installare Pandoc Citeproc a parte. Basta usare Homebrew anche per questo:

```bash
$ brew install pandoc-citeproc
```

#### Installazione usando l'installer ufficiale

Per installare Pandoc alla vecchia maniera, basta andare alla [pagina di download](https://github.com/jgm/pandoc/releases/latest) e ottenere l'installer per macOS. Una volta fatto, pandoc dovrebbe essere disponibile sul tuo sistema. Prova ad esportare qualcosa. Se funziona tutto, hai finito!

### Linux

Su Linux, installare Pandoc è incredibilmente semplice. Basta usare il tuo gestore di pacchetti per cercare e installare Pandoc. I pacchetti forniti non sono sempre aggiornati, ma dovrebbero andar bene. Se desideri installare la versione più recente, è necessario [scaricare l'installer per Linux](https://github.com/jgm/pandoc/releases/latest) e seguire le [istruzioni di installazione](https://pandoc.org/installing.html) sul sito di Pandoc.

> Potresti dover configurare manualmente `pandoc-citeproc` usando il tuo metodo preferito sul tuo sistema operativo.

## Installare LaTeX

Markdown funziona al meglio in combinazione con `LaTeX` per creare bellissimi files PDF. Per farlo, è necessario installare una distribuzione `TeX` insieme a Zettlr. Non preoccuparti: non dovrai imparare niente di `LaTeX` per usarlo. Ma sarà comunque necessario installarlo.

Per installare LateX devi fare esattamente come per qualsiasi altro software: su Windows e su macOS avrai bisogno del pacchetto di installazione, mentre su Linux puoi utilizzare il tuo gestore di pacchetti per installarne una distribuzione.

Le distribuzioni raccomandate sono:

- Windows: [MikTeX](https://miktex.org/download)
- macOS: [MacTex](https://www.tug.org/mactex/morepackages.html) (_attenzione: è sufficiente installare Basic Tex, che occupa molto meno spazio della versione completa!_)
- Linux: [TeX Live](https://www.tug.org/texlive/) (installare il pacchetto texlive-base: `sudo apt install texlive-base`)

> Puoi installare LaTeX in un secondo momento. Basta usare il menu Aiuto per aprire la pagina di panoramica dove puoi vedere tutte le distribuzioni disponibili.
