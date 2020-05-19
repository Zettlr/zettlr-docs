# Foire aux questions

## J'ai essayé d'installer Zettlr sur Windows, mais il y a un avertissement de sécurité disant que je ne dois pas installer l'application !

Windows et MacOS exigent tous deux une "signature de code" afin de pouvoir faire confiance à l'application. Bien qu'il s'agisse d'une excellente technique pour empêcher les codes malveillants de nuire à votre système, elle nécessite un certificat de signature de code. Bien que nos versions de macOS soient déjà signées, nous sommes encore en train de demander un certificat de signature de code pour Windows. D'ici là, vous pouvez ignorer ces avertissements et installer Zettlr, à condition de le télécharger depuis notre page officielle.

## Est-il prévu de porter Zettlr sur les téléphones mobiles et les tablettes, pour Android ou iOS ?

Nous recevons de plus en plus de demandes pour des versions mobile de Zettlr. Nous sommes très heureux que vous aimiez suffisamment Zettlr pour le vouloir sur tous vos appareils, et nous aimerions réaliser ce souhait ! Malheureusement, nos ressources sont tout juste suffisantes pour maintenir le développement de l'application sur ordinateur, et il n'est pas possible de fournir plus de travail pour le moment.

## Qu'est-ce que Markdown ?

Markdown est un langage de balisage léger qui vous permet de rédiger un texte aussi complexe qu'un logiciel de bureautique standard, mais avec beaucoup moins d'encombrement. Au lieu de devoir sélectionner manuellement toutes les options de formatage, dans Markdown, il suffit de taper un `#` pour indiquer un titre ! Vous voulez en savoir plus ? Consultez notre [documentation sur les bases de Markdown](reference/markdown-basics.md) !

## Si je ne veux plus utiliser Zettlr, que dois-je faire pour changer de programme ?

Il suffit de désinstaller Zettlr et de commencer à utiliser un autre programme de votre choix. Zettlr ne touche pas à vos fichiers. Si vous avez utilisé les Dossiers virtuels ou les Projets, il y aura de petits fichiers nommés `.ztr-directory` présents dans certains dossiers. Pour les supprimer, il suffit de supprimer tout répertoire virtuel, de réinitialiser le tri des répertoires par défaut et de supprimer tous les projets avant de désinstaller l'application (ou de supprimer manuellement ces fichiers par la suite).

## Parfois, je ne veux pas d'AutoCorrect - comment puis-je faire en sorte qu'il cesse d'autocorriger dans un cas précis ?

Bien qu'AutoCorrect soit un excellent outil, il peut y avoir quelques cas où nous ne voulons pas qu'il s'applique. Un exemple souvent cité est le bloc de métadonnées en YAML (YAML *frontmatter*). Lorsque vous voulez fermer le bloc en écrivant trois points ou trois tirets, l'AutoCorrect de Zettlr les transforme en ellipse ou en tiret long, respectivement. Zettlr analysera alors l'ensemble du fichier en tant que YAML, et non en tant que Markdown, ce que nous voulons éviter. Afin d'empêcher manuellement l'application de l'AutoCorrect de Zettlr, voici comment procéder :

1. Si vous utilisez l'AutoCorrect de type LibreOffice, il suffit de maintenir la touche Maj enfoncée tout en appuyant sur Espace ou Retour (l'AutoCorrection ne s'applique que sur Espace ou Retour). Cela incitera Zettlr à ne pas "corriger" automatiquement dans ce cas.
2. Si vous utilisez l'AutoCorrect de type Word, appuyez simplement sur la touche Retour arrière dès que vous avez tapé un espace après l'application de la correction automatique. Cela annulera l'autocorrection et restaurera les caractères originaux.

Si vous trouvez que certains caractères ne devraient la plupart du temps jamais être remplacés, seulement en de rares occasions, vous pouvez également envisager de les supprimer de la table par défaut des remplacements AutoCorrect.

## J'utilise Linux et la suppression de fichiers ne les met pas à la corbeille !

Zettlr ne supprime jamais complètement vos fichiers. Il ne fait que les déplacer vers la corbeille. Ainsi, si vous supprimez accidentellement un fichier dont vous avez besoin, vous pouvez toujours le restaurer. Sur les systèmes MacOS et Windows, la corbeille est activée par défaut, mais sur certaines distributions Linux, vous devez activer manuellement la fonctionnalité de la corbeille. Sous Linux, Zettlr (pour être plus précis : le framework Electron sous-jacent) utilise le binaire `gvfs-trash` pour déplacer les fichiers vers la corbeille. Pour éviter les problèmes, il n'essaiera jamais de "retomber" sur la suppression complète des fichiers. Par conséquent, pour utiliser cette fonctionnalité, veuillez vous assurer que vous avez installé le `gvfs-trash` ! Sur Debian/Ubuntu, vous pouvez le faire en exécutant le code suivant dans un terminal :

```bash
$ sudo apt install gvfs-bin
```

## Comment écrire les liens pour s'assurer qu'ils ne soient pas cassés ?

Par défaut, Zettlr affiche un rendu des liens Markdown `[Your Link Text](your-link)` sous forme cliquable (en maintenant la touche `Ctrl` ou `Alt`). Toutefois, les liens Markdown peuvent pointer à la fois vers des sites web et vers d'autres fichiers sur votre ordinateur. Vous pouvez omettre beaucoup d'informations de votre lien, et Zettlr utilise une méthode heuristique pour déterminer les informations par lui-même, qu'il faut connaître pour éviter qu'il déduise un mauvais contexte au lieu de ce que vous voulez. Voici comment cela fonctionne :

- Les liens avec toutes les informations présentes (un protocole et un chemin pleinement qualifié) ne seront pas modifiés. Exemples : `file:///home/foo/documents/test.md` et `http://www.example.com/`.
- Les liens relatifs avec le protocole `file://` seront convertis en valeur absolue. Exemple : `file://./relative/file.md` deviendra `file:///home/foo/documents/relative/file.md`.
- Les liens sans protocole seront traités comme ayant `https://`. Exemple: `www.zettlr.com` devient `https://www.zettlr.com`.
- Les chemins de fichiers absolus, mais sans le protocole `file://` seront traités comme ayant ce préfixe. Exemple : `/home/bar/documents/absolute.md` devient `file:///home/bar/documents/absolute.md`.
- Les chemins d'accès relatifs aux fichiers avec et sans l'indicateur relatif (`./`) seront convertis en chemins d'accès absolus. Exemple : `./more/relative.md` et `more/relative.md` deviennent `file:///home/foo/documents/more/relative.md`. **Exception** s'ils résident dans le même dossier : `file.extension` sera dans ce cas traité comme un URI (sauf si le fichier est `.md`).

Pour résumer : si vous vous inquiétez de la façon dont vos liens sont traités, soyez plus explicite. Deux règles générales peuvent être utilisées pour obliger Zettlr à traiter un lien comme un fichier ou un lien web : préfixer par `./`pour demander explicitement un lien _file_ et ajouter `/` pour demander explicitement un lien _web_.

## Les liens internes n'ouvrent pas le fichier correspondant !

Au cas où les liens internes utilisés pour relier les fichiers ne fonctionneraient pas comme prévu, veuillez vous assurer que vous avez fait les choses suivantes :

1. Le lien est-il reconnu ? Zettlr vous permet de définir à quoi ressemblent les liens internes. Par défaut, ils sont encapsulés par `[[` et `]]`. Lorsque Zettlr reconnaît un lien interne, il le colore et si vous le survolez avec votre souris, le texte contenu doit être souligné. Dans le cas contraire, Zettlr ne pense pas que ce que vous avez écrit est un lien. Vous pouvez changer cela dans les paramètres.
2. Avez-vous appuyé sur la touche `Alt`- or `Ctrl` en cliquant sur le lien ? Cliquer avec votre souris quelque part dans le texte signifie normalement que vous avez l'intention de changer quelque chose et sert donc à simplement positionner le curseur : vous devez "dire" à Zettlr que vous voulez effectivement suivre le lien.
3. Avez-vous utilisé un nom de fichier ou un identifiant (ID) valide ? Zettlr n'ouvre les fichiers que s'ils ont _exactement_ l'ID ou le nom de fichier donné. Si rien ne se passe en cliquant sur le lien, cela signifie sûrement qu'un fichier avec l'ID ou le nom de fichier donné n'existe pas dans le système. Notez que vous devez omettre l'extension de fichier lorsque vous créez un lien. Par exemple, pour créer un lien vers`my-file.md`, il suffit de mettre `my-file` entre parenthèses.
4. Le fichier est-il actuellement chargé dans Zettlr ? La liaison interne ne fonctionne évidemment que si Zettlr a lu le fichier.

## Je connais LaTeX et je veux l'utiliser aussi dans mes fichiers Markdown. Est-ce possible ?

Oui, il suffit d'écrire vos déclarations LaTeX là où vous les voulez. Lorsque que vous exportez au format PDF, Pandoc les prend en compte et les déclarations sont interprétées par le moteur PDF. Malheureusement, le surlignage de la syntaxe LaTeX n'est pas supporté. Par ailleurs, veuillez noter que Pandoc va supprimer tout bloc LaTeX avant d'exporter vers un autre format que le PDF, ce qui signifie que les informations entre `\begin` et `\end`, par exemple, seront complètement absentes de l'export. Pour les exports en HTML, tous les blocs LaTeX sont conservés, mais pas convertis en autre chose.

## Je ne peux pas justifier le texte ou l'aligner à droite ?

Ce n'est pas un bug mais une fonctionnalité : Markdown n'inclut pas de signes pour ce type de formatage qui relève de la mise en page spécifique à chaque type d'export. Vous pouvez ainsi utiliser des commandes LaTeX pour modifier localement la justification du texte dans l'export PDF. Vous pouvez inclure le texte que vous souhaitez aligner à droite ou justifier entre `\begin{<option>}` et `\end{<option>}`, où `<option>` peut soit se référer à `flushleft`, `flushright` ; vous pouvez également mettre `\justify` devant un paragraphe que vous voulez justifier. [Plus d'infos sur ces commandes  sur Overleaf](https://www.overleaf.com/learn/latex/Text_alignment).

## Dans l'export PDF, je souhaite que certains titres ne soient pas numérotés / soient exclus de la table des matières.

C'est possible grâce à Pandoc, qui ajoute quelques extensions à la syntaxe Markdown de base. Parmi elles, l'ajout des attributs à certains éléments du texte sous la forme `{.attribut}`. La plupart des attributs sont nommés (en anglais) ; certains utilisés fréquemment ont une forme raccourcie pour des raisons pratiques. Ainsi vous pouvez inclure les attributs `-` et `.unlisted` entre accolades après un titre : le moins empêche la numérotation du titre, tandis que "non listé" empêche le titre d'apparaître dans la table des matières. Notez que cela ne s'applique qu'à la sortie PDF.

Examples:

```
# Ce titre ne sera pas numéroté, mais dans la TdM {-}

# Ce titre sera numéroté, mais pas dans la TdM {.unlisted}

# Ce titre sera à la fois non numéroté et absent de la TdM {- .unlisted}
```

> Notez que les classes spéciales doivent être la dernière chose sur la ligne du titre. Un commentaire en fin de ligne, par exemple, empêche les attributs d'être pris en compte.

Pour en savoir plus, consulter [la documentation de Pandoc sur les attributs de titre](https://pandoc.org/MANUAL.html#heading-identifiers) (en anglais).

## Je veux insérer un simple retour à la ligne manuel, sans créer de nouveau paragraphe. Comment faire ?

Pour forcer Pandoc à créer un retour à la ligne, terminez votre ligne par une barre oblique inversée (`\`) ou deux espaces. La barre oblique inversée ou les deux espaces ne seront pas rendus dans le fichier résultant mais seront remplacés par un retour à la ligne comme voulu.

## Ai-je vraiment besoin de Pandoc ou de LaTeX ?

Pour l'exportation en HTML simple, non. Pour tous les autres formats d'exportation, oui. Zettlr dépend de ces programmes pour permettre l'exportation des fichiers. Mais ne vous inquiétez pas : ils sont Open Source, gratuits et disponibles sur tous les systèmes d'exploitation !

## Comment installer Pandoc ou LaTeX ?

Veuillez consulter le [guide d'installation](install.md) pour savoir comment installer Pandoc et LaTeX sur votre système.

## Zettlr ne semble pas trouver Pandoc et LaTeX, qui sont pourtant installés !

Cela peut arriver si votre ordinateur a décidé d'installer le logiciel dans un répertoire non standard. Zettlr fera de son mieux pour localiser les applications mais peut échouer si elles sont situées à un endroit inattendu. C'est là qu'entre en jeu l'option pour spécifier le chemin de ces logiciels dans les Préférences. Au cas où Zettlr ne trouverait pas d'exécutable pour Pandoc ou LateX, vous pouvez entrer le **chemin complet** dans les champs de texte appropriés de l'onglet "Avancé" des Préférences.

Sous Windows, vous ne devriez jamais rencontrer ce problème tant que vous laissez le chemin d'installation par défaut défini lors de l'installation comme étant le répertoire "Program Files" par défaut de Windows. Toutefois vous pouvez souhaiter installer les programmes à des endroits différents. Il vous suffit alors de rechercher les exécutables sur votre système à l'aide de l'explorateur, le premier étant `pandoc.exe` et le second `xelatex.exe`. Copiez le chemin d'accès complet (y compris le nom de l'exécutable !) dans le champ de texte approprié dans les Préférences de Zettlr.

Sous macOS, vous pouvez facilement trouver les chemins manquants en ouvrant l'application Terminal (qui se trouve dans votre dossier Applications sous "Outils" ou bien "Autres") et en saisissant `which pandoc` _ou_ `which xelatex`, selon le logiciel que Zettlr ne trouve pas. Le Terminal affichera simplement le chemin complet du programme, que vous pouvez copier dans le champ de texte approprié dans les Préférences de Zettlr.

Sous Linux, vous devez également ouvrir la ligne de commande et utiliser les mêmes commandes que sur macOS : `which pandoc` pour Pandoc et `which xelatex` pour LaTeX.

## Au moment de l'export en PDF, Zettlr affirme que le moteur PDF n'a pas été reconnu !

Il s'agit d'une erreur Pandoc courante, indiquant que votre version de Pandoc est antérieure à 2.x. Lorsque Zettlr vous présente le message d'erreur suivant :

`pandoc: unrecognized option '--pdf-engine=xelatex' Try pandoc --help for more information.`

Cela signifie que vous devez passer à Pandoc 2.x.

La raison est qu'à partir de Pandoc 2.0, l'ancienne option `--latex-engine` a été rebaptisée `--pdf-engine`. [Pour en savoir plus, consultez le journal des modifications de Pandoc](https://github.com/jgm/pandoc/blob/master/changelog#L4349).

## Au moment de l'export en PDF, je reçois constamment des messages d'erreur !

Pour les premières exportations, cela peut arriver. Zettlr transmet le fichier à Pandoc, qui le transmet à LaTeX. Mais le modèle LaTeX que Zettlr utilise pour les exports PDF nécessite un certain nombre de paquets qui ne sont pas toujours installés par défaut dans les distributions LaTeX de base. L'erreur la plus courante ressemble à ceci :

**LaTeX Error: File \<nom du paquet\>.sty not found.**

Cela signifie simplement qu'un certain paquet n'a pas été trouvé (ils se terminent par `.sty`). Sous Windows, ces paquets sont installés automatiquement dès qu'ils sont requis par un fichier LaTeX ; sous MacOS et Linux, il suffit d'exécuter la commande `tlmgr install <nom du paquet>`.

En cas d'autres erreurs, Zettlr vous permet de copier le texte du message d'erreur et dans presque tous les cas, une courte recherche Google mène à une solution, dont la seule action requise la plupart du temps l'installation d'un autre paquet.

## J'ai trouvé un bug !

C'est une excellente nouvelle ! Enfin, pas géniale, mais c'est bien que vous l'ayez trouvé ! Dans ce cas, veuillez vous rendre sur [GitHub](https://github.com/Zettlr/Zettlr/) et ouvrir un dossier (_issue_) afin que nous sachions ce qui se passe et puissions travailler à la résolution du bug.

## J'ai une requête de fonctionnalité ! / J'ai une suggestion pour rendre une fonctionnalité plus efficace !

C'est bon à entendre ! Nous dépendons toujours de l'expérience d'autres personnes avec l'application pour améliorer son efficacité et son adéquation à différentes situations. Dans ce cas, veuillez vous rendre sur [GitHub](https://github.com/Zettlr/Zettlr/) et ouvrir un dossier (_issue_) afin que nous puissions aller droit au but.

## Qu'en est-il de ma vie privée ? Zettlr transfère-t-il des données, ou ne dois-je pas m'inquiéter ?

Zettlr met la vie privée avant tout. Il est pleinement fonctionnel hors ligne. Il n'existe qu'un cas où Zettlr envoie des données sur le web : lorsqu'il vérifie l'existence d'une mise à jour. Chaque fois que vous ouvrez Zettlr, ou que vous sélectionnez l'élément de menu correspondant, Zettlr se connecte à l'API Zettlr pour récupérer une liste de toutes les versions. Cette liste est ensuite utilisée pour déterminer si vous utilisez la dernière version ou non. Lors de la connexion, Zettlr recevra votre adresse IP et saura qu'une application Electron accède à l'API. L'application transmettra également votre type de système d'exploitation et l'ID de l'application.

Ces données ne seront jamais vendues à des tiers. C'est simplement parce que nous aimons les statistiques et que nous sommes toujours intéressés par le fait de savoir qui utilise l'application. Néanmoins, nous ne pouvons identifier personne sur la base de ces données, qui sont beaucoup trop brutes pour cela. Nous sommes Open Source, pas Facebook.
