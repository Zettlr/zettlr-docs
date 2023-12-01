# Foire aux questions

## J'ai essayé d'installer Zettlr sur Windows, mais il y a un avertissement de sécurité disant que je ne dois pas installer l'application !

Zettlr utilise un certificat de signature de code comme le recommandent Microsoft et Apple afin de s'assurer que seules des applications dignent de confiance soient installées sur votre système.  Cependant, avec Windows, une application doit atteindre un nombre suffisement large d'installations pour faire disparaître cet avertissement.  Windows fait confiance au certificat de signature de code, pas à l'application elle-même.  Le certificat utilisé par Zettlr est un certificat privé avec une durée de vie limitée.  Le certificat actuel est valide jusqu'en 2022, après quoi Zettlr sera signé avec un nouveau certificat qui devra à nouveau atteindre un nombre suffisant d'installations. Vous pouvez ignorer ces avertissements et installer Zettlr en toute sécurité à condition de le télécharger [depuis notre page d'accueil](https://www.zettlr.com/download) ou depuis la [page de publication sur GitHub](https://github.com/Zettlr/Zettlr/releases) (il s'agit du même fichier dans les deux cas).

## Je ne peux pas ignorer l'avertissement de sécurité sur Windows et ne peux donc pas installer l'application !

Dans beaucoup d'entreprises, le département d'informatique mets en place des restrictions qui empêchent d'ignorer un avertissement de sécurité et donc d'installer l'application.  Si vous travaillez dans un environnement avec ces restrictions, le mieux est de simplement discuter avec votre département informatique et leur demander d'autoriser l'installation de Zettlr afin que vous (ou votre administrateur système) puisse installer l'application.  Si le département informatique a des questions sur l'origine ou la fiabilité de Zettlr, le mieux est de leur donner l'adresse du [dépot GitHub de Zettlr](https://github.com/Zettlr/Zettlr).

## macOS me demande si je souhaite installer les "outils de ligne de commande XCode" lorsque je démarre Zettlr

Zettlr offre des fonctionnalités de base `git`, et pour cela, il doit vérifier si `git` est installé sur l'ordinateur. Sous Windows et Linux, il s'agit d'une simple vérification au démarrage, macOS remarquera que Zettlr est intéressé par la commande et, si `git` n'est pas encore installé, proposera l'installation des "outils de ligne de commande XCode" qui, entre autres , inclut `git`. Nous n'avons aucun moyen de supprimer ce message de manière fiable, vous devrez donc soit refuser chaque fois que vous ouvrez Zettlr, soit simplement installer les outils de ligne de commande. L'installation des outils de ligne de commande est une procédure sûre et vous ne remarquerez pas qu'ils sont installés. Ils pourraient même potentiellement apporter des avantages. Voir [ce fil de discussion Apple sur les outils de ligne de commande](https://developer.apple.com/forums/thread/13781). Voir également le [problème associé sur GitHub](https://github.com/Zettlr/Zettlr/issues/4709).


## J'ai supprimé le tutoriel de mon ordinateur, et je ne parviens pas à le retrouver !

Quand Zettlr détecte qu'il est exécuté pour la première fois sur votre ordinateur, une copie automatique d'un dossier contenant quelques fichiers Markdown dans votre dossier "Documents".  Ces fichiers Markdown contiennent somes instructions de base sur l'utilisation de Zettlr, mais ils ne sont copiés qu'une seule fois.  Si vous voule retrouver ces fichiers après les avoir supprimés, vous avez deux options:

* Renommer ou supprimer le fichier `config.json` du dossier des données de l'application.  Si ce fichier n'est pas présent, Zettlr va penser qu'il est exécuté pour la première fois et copier le tutoriel à nouveau.
* [Télécharger le dossier directement depuis la source](https://github.com/Zettlr/Zettlr/tree/develop/static/tutorial) (attention, ce lien peut changer)

## Est-il prévu de porter Zettlr sur les téléphones mobiles et les tablettes, pour Android ou iOS ?

Nous recevons de plus en plus de demandes pour des versions mobile de Zettlr. Nous sommes très heureux que vous aimiez suffisamment Zettlr pour le vouloir sur tous vos appareils, et nous aimerions réaliser ce souhait ! Malheureusement, nos ressources sont tout juste suffisantes pour maintenir le développement de l'application sur ordinateur, et il n'est pas possible de fournir plus de travail pour le moment.

## Qu'est-ce que Markdown ?

Markdown est un langage de balisage léger qui vous permet de rédiger un texte aussi complexe qu'un logiciel de bureautique standard, mais avec beaucoup moins d'encombrement. Au lieu de devoir sélectionner manuellement toutes les options de formatage, dans Markdown, il suffit de taper un `#` pour indiquer un titre ! Vous voulez en savoir plus ? Consultez notre [documentation sur les bases de Markdown](reference/markdown-basics.md) !

## J'ai une limite très stricte de caractères ou de mots pour un texte, mais le nombre de caractères/mots de Zettlr est erroné !

Lorsque vous écrivez du texte dans Zettlr, vous écrivez du *code source* qui est ensuite exporté au format PDF, dans un document Word ou dans tout autre format requis. Lors de cet export, le texte sera « compilé », ce qui signifie : les citations sont correctement rendues, une liste de références est ajoutée, les puces seront converties en une liste appropriée, etc. Zettlr lui-même « voit » uniquement le code source et donc compte les caractères présents dans votre fichier, qui seront différents du document exporté.

Le nombre réel de mots ou de caractères dans le fichier final exporté peut donc varier en fonction de nombreuses variables :

* Le style de citation que vous utilisez : certains sont plus verbeux que d'autres
* Certains codes peuvent être entièrement supprimés
* Certains modèles peuvent générer des pages de titre ou des tables des matières, ce qui augmente le nombre de mots/caractères.

Zettlr ne peut pas prendre en compte toutes ces variables. Voici donc quelques conseils pour vous aider à atteindre votre objectif :

1. La plupart des enseignants ne se soucieront pas si vous dépassez la limite de quelques mots ou caractères tant que cela est raisonnable.
2. Si vous devez soumettre quelque chose au format PDF, personne ne s'assiéra et ne comptera réellement les caractères ou les mots visibles.
3. Si, pour une raison quelconque, vous ne pouvez pas dépasser la limite, ne serait-ce que d'un seul mot ou caractère, essayez de la **sous-dépasser** et exportez-la lorsque vous atteignez la ligne d'arrivée pour afficher le nombre réel de caractères ou de mots. Après quelques fois, vous aurez une bonne idée de la durée pendant laquelle le document exporté sera basé sur le nombre de mots/caractères de Zettlr.

## Si je ne veux plus utiliser Zettlr, que dois-je faire pour changer de programme ?

Il suffit de désinstaller Zettlr et de commencer à utiliser un autre programme de votre choix. Zettlr ne touche pas à vos fichiers. Si vous avez utilisé les Projets ou modifié les dossiers, il y aura de petits fichiers nommés `.ztr-directory` présents dans certains dossiers. Pour les supprimer, il suffit de réinitialiser le tri des répertoires par défaut et de supprimer tous les projets avant de désinstaller l'application (ou de supprimer manuellement ces fichiers par la suite).

## Quel est le formatage URI correct pour les liens Markdown ?

Par défaut, Zettlr rend les liens Markdown au format « [Votre texte de lien] (votre-lien) » pour qu'ils soient cliquables (en maintenant enfoncé « Cmd » ou « Ctrl »). Cependant, les liens Markdown peuvent pointer à la fois vers des sites Web et vers d’autres fichiers sur votre ordinateur. Vous pouvez omettre de nombreuses informations de votre lien, et Zettlr utilise une heuristique pour déterminer les informations par lui-même, mais cela peut déduire un faux contexte pour ce que vous souhaitez. Voici comment cela fonctionne:

- Les liens avec toutes les informations présentes (un protocole et un chemin complet) ne seront pas modifiés. Exemples : `file:///home/foo/documents/test.md` et `http://www.example.com/`.
- Les liens relatifs avec le protocole `file://` seront convertis en absolus. Exemple : `file://./relative/file.md` deviendra `file:///home/foo/documents/relative/file.md`.
- Les liens sans protocole seront supposés avoir `https://`. Exemple : `www.zettlr.com` deviendra `https://www.zettlr.com`.
- Les chemins de fichiers absolus, mais sans le protocole `file://` auront ce préfixe. Exemple : `/home/bar/documents/absolute.md` deviendra `file:///home/bar/documents/absolute.md`.
- Les chemins de fichiers relatifs avec et sans l'indicateur relatif (`./`) seront convertis en chemins de fichiers absolus. Exemple : `./more/relative.md` et `more/relative.md` deviendront `file:///home/foo/documents/more/relative.md`. **Exception** : Ils résident dans le même dossier : `file.extension` sera dans ce cas traité comme un URI (sauf que le fichier est `.md`).

Pour résumer : si vous vous inquiétez de la façon dont vos liens sont traités, soyez plus explicite. Deux règles générales peuvent être utilisées pour forcer Zettlr à traiter un lien comme un fichier ou un lien Web : ajoutez un `./` pour demander explicitement un lien _file_, et ajoutez `/` pour demander explicitement un lien _web_.

## Les liens internes n'ouvrent pas le fichier correspondant !

Au cas où les liens internes utilisés pour relier les fichiers ne fonctionneraient pas comme prévu, veuillez vous assurer que vous avez fait les choses suivantes :

1. Le lien est-il reconnu ? Zettlr vous permet de définir à quoi ressemblent les liens internes. Par défaut, ils sont encapsulés par `[[` et `]]`. Lorsque Zettlr reconnaît un lien interne, il le colore et si vous le survolez avec votre souris, le texte contenu doit être souligné. Dans le cas contraire, Zettlr ne pense pas que ce que vous avez écrit est un lien. Vous pouvez changer cela dans les paramètres.
2. Avez-vous appuyé sur la touche `Cmd` ou `Ctrl` en cliquant sur le lien ? Cliquer avec votre souris quelque part dans le texte signifie que vous avez l'intention de modifier le texte et sert donc à simplement positionner le curseur : vous devez "dire" à Zettlr que vous voulez effectivement suivre le lien.
3. Avez-vous utilisé un nom de fichier ou un identifiant (ID) valide ? Zettlr n'ouvre les fichiers que s'ils ont _exactement_ l'ID ou le nom de fichier donné. Si rien ne se passe en cliquant sur le lien, cela signifie sûrement qu'un fichier avec l'ID ou le nom de fichier donné n'existe pas dans le système. Notez que vous devez omettre l'extension de fichier lorsque vous créez un lien. Par exemple, pour créer un lien vers`my-file.md`, il suffit de mettre `my-file` entre parenthèses.
4. Le fichier est-il actuellement chargé dans Zettlr ? La liaison interne ne fonctionne que si Zettlr a lu le fichier.

## Je connais LaTeX et je veux l'utiliser aussi dans mes fichiers Markdown. Est-ce possible ?

Oui, il suffit d'écrire vos déclarations LaTeX là où vous les voulez. Lorsque que vous exportez au format PDF, Pandoc les prend en compte et les déclarations sont interprétées par le moteur PDF. Malheureusement, le surlignage de la syntaxe LaTeX n'est pas supporté. Par ailleurs, veuillez noter que Pandoc va supprimer tout bloc LaTeX avant d'exporter vers un autre format que le PDF, ce qui signifie que les informations entre `\begin` et `\end`, par exemple, seront complètement absentes de l'export. Pour les exports en HTML, tous les blocs LaTeX sont conservés, mais pas convertis en autre chose.


## Je ne peux pas justifier le texte ou l'aligner à droite ?

Ce n'est pas un bug mais une fonctionnalité : Markdown n'inclut pas de signes pour ce type de formatage qui relève de la mise en page spécifique à chaque type d'export. Vous pouvez ainsi utiliser des commandes LaTeX pour modifier localement la justification du texte dans l'export PDF. Vous pouvez inclure le texte que vous souhaitez aligner à droite ou justifier entre `\begin{<option>}` et `\end{<option>}`, où `<option>` peut soit se référer à `flushleft`, `flushright` ; vous pouvez également mettre `\justify` devant un paragraphe que vous voulez justifier. [Plus d'infos sur ces commandes  sur Overleaf](https://www.overleaf.com/learn/latex/Text_alignment).

## Dans l'export PDF, je souhaite que certains titres ne soient pas numérotés / soient exclus de la table des matières.

C'est possible grâce à Pandoc, qui ajoute quelques extensions à la syntaxe Markdown de base. Parmi elles, l'ajout des attributs à certains éléments du texte sous la forme `{.attribut}`. La plupart des attributs sont nommés (en anglais) ; certains utilisés fréquemment ont une forme raccourcie pour des raisons pratiques. Ainsi vous pouvez inclure les attributs `-` et `.unlisted` entre accolades après un titre : le moins empêche la numérotation du titre, tandis que "non listé" empêche le titre d'apparaître dans la table des matières. Notez que cela ne s'applique qu'à la sortie PDF.

Examples:

```markdown
# Ce titre ne sera pas numéroté, mais dans la TdM {-}

# Ce titre sera numéroté, mais pas dans la TdM {.unlisted}

# Ce titre sera à la fois non numéroté et absent de la TdM {- .unlisted}
```

!!! note
    Notez que les classes spéciales doivent être la dernière chose sur la ligne du titre. Un commentaire en fin de ligne, par exemple, empêche les attributs d'être pris en compte.

Pour en savoir plus, consulter [la documentation de Pandoc sur les attributs de titre](https://pandoc.org/MANUAL.html#heading-identifiers) (en anglais).

## Je veux insérer un simple retour à la ligne manuel, sans créer de nouveau paragraphe. Comment faire ?

Pour forcer Pandoc à créer un retour à la ligne, terminez votre ligne par une barre oblique inversée (`\`) ou deux espaces. La barre oblique inversée ou les deux espaces ne seront pas rendus dans le fichier exporté mais seront remplacés par un retour à la ligne comme voulu.

## Zettlr ne semble pas trouver LaTeX, qui est pourtant installé !

Cela peut arriver si votre ordinateur a décidé d'installer le logiciel dans un répertoire non standard. Zettlr fera de son mieux pour localiser les applications mais peut échouer si elles sont situées à un endroit inattendu. Assurez-vous que le binaire xelatex est bien dans votre PATH.

## Au moment de l'export en PDF, je reçois constamment des messages d'erreur !

Il peut arriver que vous obteniez certaines erreurs lorsque vous essayez d'exporter vos fichiers.  Il y a deux types d'erreures fréquentes, que vous pouvez résoudre vous-même.

L'erreur la plus courante ressemble à ceci :

**LaTeX Error: File \<nom du paquet\>.sty not found.**

Cela signifie simplement qu'un certain paquet n'a pas été trouvé (ils se terminent par `.sty`). Sous Windows, ces paquets sont installés automatiquement dès qu'ils sont requis par un fichier LaTeX (possiblement avec une fenêtre de confirmation) ; sous MacOS et Linux, il suffit d'exécuter la commande `tlmgr install <nom du paquet>`.

> Certains fichiers `.sty` font partie de paquets plus grands.  La façon la plus simple pour trouver quels paquets installer est de se rendre sur la [page d'accueil de CTAN](https://ctan.org) et de chercher pour le nom du paquet (le nom du fichier, sans le `.sty`).  Vous verrez alors dans la section "Contained in" le nom du paquet qu'il faut installer.  Par exemple, [le paquet `footnote.sty](https://ctan.org/pkg/footnote) est inclus dans le paquet `mdwtools`, donc au lieu d'exécuter `tlmgr install footnote`, il faut exécuter `tlmgr install mdwtools`.

En cas d'autres erreurs, Zettlr vous permet de copier le texte du message d'erreur et dans presque tous les cas, une courte recherche Google mène à une solution.  Et si ce n'est pas le cas, la communauté pourra mieux vous aider si elle voit l'erreur que vous obtenez.

## J'ai trouvé un bug !

C'est une excellente nouvelle ! Enfin, pas géniale, mais c'est bien que vous l'ayez trouvé ! Dans ce cas, veuillez vous rendre sur [GitHub](https://github.com/Zettlr/Zettlr/) et ouvrir un dossier (_issue_) afin que nous sachions ce qui se passe et puissions travailler à la résolution du bug.

## J'ai une requête de fonctionnalité ! / J'ai une suggestion pour rendre une fonctionnalité plus efficace !

C'est bon à entendre ! Nous dépendons toujours de l'expérience d'autres personnes avec l'application pour améliorer son efficacité et son adéquation à différentes situations. Dans ce cas, veuillez vous rendre sur [GitHub](https://github.com/Zettlr/Zettlr/) et ouvrir un dossier (_issue_) afin que nous puissions aller droit au but.

## Qu'en est-il de ma vie privée ? Zettlr transfère-t-il des données, ou ne dois-je pas m'inquiéter ?

Zettlr met la vie privée avant tout. Il est pleinement fonctionnel hors ligne. Toutefois, lorsque vous ouvrez Zettlr, ou que vous sélectionnez l'élément de menu correspondant, Zettlr se connecte à l'API Zettlr pour récupérer une liste de toutes les versions.  Cette liste est ensuite utilisée pour déterminer si vous utilisez la dernière version. Lors de la connexion, le serveur Zettlr recevra votre adresse IP et cette sauvera cette information pour un maximum de 30 jours, ce qui est assez fréquent pour un serveur.  L'information ne quitte jamais notre serveur et sera uniquement utilisée en cas d'incident pour déterminer la cause d'un problème.  Après les 30 jours, votre accès sera supprimé de notre serveur. Nous sommes Open Source, pas Facebook.
