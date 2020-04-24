# Frequently Asked Questions

## J'ai essayé d'installer Zettlr sur Windows, mais il y a un avertissement de sécurité disant que je ne dois pas installer l'application !

Windows et MacOS exigent tous deux une "signature de code" afin de pouvoir faire confiance à l'application. Bien qu'il s'agisse d'une excellente technique pour empêcher les codes malveillants de nuire à votre système, elle nécessite un certificat de signature de code. Bien que nos versions de macOS soient déjà signées, nous sommes encore en train de demander un certificat de signature de code pour Windows. D'ici là, vous pouvez ignorer ces avertissements et installer Zettlr, à condition de le télécharger depuis notre page officielle.

## Est-il prévu de porter Zettlr sur les téléphones mobiles et les tables, pour Android ou iOS ?

Nous recevons de plus en plus de demandes pour des versions mobiles de Zettlr. Nous sommes très heureux que vous aimiez suffisamment Zettlr pour le vouloir sur tous vos appareils, et nous aimerions réaliser votre souhait ! Malheureusement, nos ressources sont tout juste suffisantes pour maintenir le développement de Zettlr en marche, et il n'est pas possible d'ajouter du travail pour le moment.

## What is Markdown?

Markdown is a simple markup language that enables you to write text just as complex as using standard office software, but with much less clutter. Instead of having to manually select all formatting options, in Markdown, typing a `#` suffices to indicate a heading! Want to hear more? Then head over to the [documentation on Markdown](reference/markdown-basics.md)!

## Si je ne veux plus utiliser Zettlr, que dois-je faire pour changer de programme ?

Il suffit de désinstaller Zettlr et de commencer à utiliser un autre programme de votre choix. Zettlr ne touche pas à vos fichiers. Si vous avez utilisé Virtual Directories ou Projects, il y aura de petits fichiers nommés `.ztr-directory` présents dans certains dossiers. Pour les supprimer, il suffit de supprimer tout répertoire virtuel, de réinitialiser le tri des répertoires par défaut et de supprimer tous les projets avant de désinstaller l'application (ou de supprimer manuellement ces fichiers par la suite).
## Parfois, je ne veux pas d'AutoCorrect - comment puis-je faire en sorte qu'il cesse de s'autocorriger dans un cas précis ?

Bien qu'AutoCorrect soit un excellent outil, il y a ces quelques cas où nous ne voulons pas qu'il s'applique. Un exemple souvent cité est le YAML-frontmatter. Si vous écrivez les trois derniers points ou tirets, l'AutoCorrect de Zettlr les transforme en ellipse ou en tiret, selon les caractères utilisés. Zettlr analysera alors l'ensemble du fichier en tant que YAML, et non en tant que Markdown. Afin d'empêcher l'application de l'AutoCorrect de Zettlr, voici comment procéder :

1. Si vous utilisez l'AutoCorrection de type LibreOffice, il suffit de maintenir la touche Maj enfoncée tout en appuyant sur Espace ou Retour (l'AutoCorrection ne s'applique que sur Espace ou Retour). Cela incitera Zettlr à ne pas "corriger" automatiquement dans ce cas.
2. Si vous utilisez la correction automatique de mots, appuyez simplement sur la touche Retour arrière dès que vous avez tapé un espace après l'application de la correction automatique. Cela annulera l'autocorrection et restaurera les caractères originaux.

Si vous trouvez que certains caractères ne devraient la plupart du temps jamais être remplacés, seulement en de rares occasions, envisagez de les supprimer de la table par défaut des remplacements AutoCorrect.

## J'utilise Linux et la suppression de fichiers ne les met pas à la poubelle !

Zettlr ne supprime jamais complètement vos fichiers. Il ne fait que les déplacer vers la corbeille. Ainsi, si vous supprimez accidentellement un fichier dont vous avez besoin, vous pouvez toujours le restaurer. Sur les systèmes MacOS et Windows, la corbeille est activée par défaut, mais sur certaines distributions Linux, vous devez activer manuellement la fonctionnalité de la corbeille. Sous Linux, Zettlr (pour être plus précis : le framework Electron sous-jacent) utilise le binaire "gvfs-trash" pour déplacer les fichiers vers la corbeille. Pour éviter les chocs, il n'essaiera jamais de "retomber" sur la suppression complète des fichiers. Par conséquent, pour utiliser cette fonctionnalité, veuillez vous assurer que vous avez installé le `gvfs-trash` ! Sur Debian/Ubuntu, vous pouvez le faire en exécutant le code suivant dans un terminal :

```bash
$ sudo apt install gvfs-bin
```

## À quoi devraient ressembler les liens réguliers Markdown pour fonctionner comme prévu ?

Par défaut, Zettlr rend les liens Markdown dans le format `[Your Link Text](your-link)` pour être cliquable (en maintenant la touche `Ctrl` ou `Alt`). Toutefois, les liens Markdown peuvent pointer à la fois vers des sites web et vers d'autres fichiers sur votre ordinateur. Vous pouvez omettre beaucoup d'informations de votre lien, et Zettlr utilise une heuristique pour déterminer les informations par lui-même, mais il pourrait déduire un faux contexte pour ce que vous voulez. Voici comment cela fonctionne :

- Les liens avec toutes les informations présentes (un protocole et un cheminement pleinement qualifié) ne seront pas modifiés. Exemples : `file:///home/foo/documents/test.md` et `http://www.example.com/`.
- Liens relatifs avec le `file://`-protocol seront convertis en valeur absolue. Exemple : `file://./relative/file.md` deviendra `file:///home/foo/documents/relative/file.md`.
- Les liens sans protocole seront supposés avoir `https://`. Exemple: `www.zettlr.com` devient `https://www.zettlr.com`.
- Les chemins de fichiers absolus, mais sans le `file://`-protocol aura ce préfixe. Exemple : `/home/bar/documents/absolute.md` devient `file:///home/bar/documents/absolute.md`.
- Les chemins d'accès relatifs aux fichiers avec et sans l'indicateur relatif (`./`) seront convertis en chemins d'accès absolus. Exemple : `./more/relative.md` et `more/relative.md` deviennent `file:///home/foo/documents/more/relative.md`. **Exception**: Ils résident dans le même dossier : `file.extension` sera dans ce cas traité comme un URI (sauf que le fichier est `.md`).

Pour résumer : Si vous vous inquiétez de la façon dont vos liens sont traités, soyez plus explicite. Deux règles générales peuvent être utilisées pour obliger Zettlr à traiter un lien comme un fichier ou un lien web : Préfixer un `./`pour demander explicitement un lien _file_ et ajouter `/` pour demander explicitement un lien _web_.

## Les liens internes n'ouvrent pas le dossier correspondant!

Au cas où les liens internes utilisés pour relier les fichiers ne fonctionneraient pas comme prévu, veuillez vous assurer que vous avez fait les choses suivantes :

1. Le lien est-il reconnu ? Zettlr vous permet de définir à quoi ressemblent les liens internes. Par défaut, ils sont encapsulés par `[[` et `]]`. Lorsque Zettlr reconnaît un lien interne, il le colore et si vous le survolez avec votre souris, le texte contenu doit être souligné. Dans le cas contraire, Zettlr ne pense pas que ce que vous avez écrit est un lien. Vous pouvez changer cela dans les paramètres.
2. Avez-vous appuyé sur la touche `Alt`- or `Ctrl` en cliquant sur le lien ? Comme cliquer avec votre souris quelque part dans le texte signifie normalement que vous avez l'intention de changer quelque chose, vous devez dire à Zettlr que vous voulez effectivement suivre le lien.
3. Avez-vous utilisé un nom de fichier ou une pièce d'identité valide ? Zettlr n'ouvre les fichiers que s'ils déclarent avoir _exactement_ l'ID ou le nom de fichier donné. Si rien ne se passe en cliquant sur le lien, cela signifie sûrement qu'un fichier avec l'ID ou le nom de fichier donné n'existe pas dans le système. Notez que vous devez omettre l'extension de fichier lorsque vous créez un lien. Par exemple, pour créer un lien vers`my-file.md`, il suffit de mettre `my-file` entre parenthèses.
4. Le fichier est-il actuellement chargé dans Zettlr ? La liaison interne ne fonctionne évidemment que si Zettlr a lu le fichier.

## Je connais LaTeX et je veux l'utiliser aussi dans mes fichiers Markdown. Est-ce possible ?

Oui, il suffit d'écrire vos éléments (statements)`LaTeX`où vous les voulez. Dès que vous exportez au format PDF, Pandoc s'occupe du reste et les déclarations sont interprétées par le moteur PDF. Malheureusement, le surlignage de la syntaxe `LaTeX` n'est pas supporté. Par ailleurs, veuillez noter que Pandoc va supprimer tout bloc `LaTeX`avant d'exporter vers un autre format que le PDF, ce qui signifie que les informations entre `\begin` et `\end`, par exemple, sera complètement absent du dossier final. Sur l'export HTML, tous les blocs`LaTeX`seront conservés, mais pas convertis en autre chose.

## Je n'arrive pas à aligner le texte juste ou correct !

Ce n'est pas un bug, c'est une fonctionnalité : Markdown n'a pas les signes de formatage y relatifs car le texte doit toujours être justifié ou aligné à gauche et n'appartient donc pas à l'ensemble des formats de blocs nécessaires que propose Markdown. Pourtant, vous pouvez toujours utiliser des commandes `LaTeX`pour les rendre à gauche ou à droite. Il suffit d'inclure le texte que vous souhaitez aligner à droite ou justifier dans `\begin{<option>}` et `\end{<option>}`, où `<option>` peut soit se référer à `flushleft`, `flushright` ou bien mettre `\justify` devant un paragraphe que vous voulez justifier. [Learn more at sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

## En sortie PDF, je souhaite que certaines rubriques ne soient pas numérotées/numérotées dans la table des matières

C'est une particularité de Pandoc. Ajouter les classes spéciales (simplement signe moins) `-`ou `.unlisted` respectivement. Le moins empêche les chiffres, tandis que "non listé" empêche le titre d'apparaître dans la table des matières. Notez que cela ne s'applique qu'à la sortie PDF.

Examples:

```
# This heading will be unnumbered, but in the ToC {-}

# This heading will be numbered, but not in the ToC {.unlisted}

# This heading will both be unnumbered, and hidden from the ToC {- .unlisted}
```

> Note that the special classes need to be the last thing on the line. Even comments will break this behaviour.

## Je veux utiliser des sauts de ligne simples et ne pas créer de nouveaux paragraphes. Lorsque je clique une fois sur la touche Entrée, le saut de ligne est supprimé !

Pour forcer Pandoc à rendre des sauts de ligne simples en tant que tels, terminez votre ligne par une barre oblique inversée (`\`) ou deux espaces. La barre oblique inversée ainsi que les deux espaces ne seront pas rendus dans le fichier résultant.

## Ai-je vraiment besoin de Pandoc ou de LaTeX ?

Pour l'exportation en HTML simple, non. Pour tous les autres formats d'exportation, oui. Zettlr dépend de ces programmes pour permettre l'exportation des fichiers. Mais ne vous inquiétez pas : ils sont Open Source et donc totalement gratuits, et disponibles sur tous les systèmes d'exploitation !

## Comment installer Pandoc ou LaTeX ?

Please refer to the [setup guide](install.md) for instructions on how to set up Pandoc and LaTeX on your system.

## Zettlr ne semble pas trouver Pandoc et LaTeX, qui sont pourtant installés !

Cela peut arriver si votre ordinateur a décidé d'installer le logiciel dans un répertoire non standard. Zettlr fera de son mieux pour localiser les applications mais peut échouer si elles sont enterrées quelque part. C'est là que les options de cheminement dans les préférences entrent en jeu. Au cas où Zettlr ne trouverait aucun des binaires, vous pouvez entrer le **chemin complet** dans les champs de texte appropriés de l'onglet `Avancé`-.

On Windows, you should never encounter this issue, as long as you leave the default installation path during install set to the default `Program Files` directory of Windows. If you wanted to install the programs to different locations, rendering Zettlr unable to find them, simply search your system using the Explorer for two files, the first being `pandoc.exe` and the second being `xelatex.exe`. Copy the full path (including the executable's name!) to the appropriate text field in the Zettlr preferences.

On macOS you can easily find the path by opening up `Terminal.app` (it's in your Applications folder under `Other`) and then type `which pandoc` _or_ `which xelatex`, depending on which software Zettlr does not find. Terminal will simply output the full path to the program.

On Linux distributions, you also need to open up a Command Line/Terminal and use the same commands as on macOS: `which pandoc` for Pandoc and `which xelatex` for LaTeX.

## À propos de l'exportation, Zettlr affirme que le moteur PDF n'a pas été reconnu !

Il s'agit d'une erreur Pandoc courante, indiquant que votre version de Pandoc est antérieure à 2.x. Lorsque Zettlr vous présente le message d'erreur suivant, cela signifie que vous devez passer à Pandoc 2.x :

`pandoc: unrecognized option '--pdf-engine=xelatex' Try pandoc --help for more information.`

The reason is that with Pandoc 2.0, the older option `--latex-engine` was renamed to `--pdf-engine`. [See more in Pandoc's changelog](https://github.com/jgm/pandoc/blob/master/changelog#L4349).

## Sur Export vers PDF, je reçois constamment des messages d'erreur !

Pour les premières exportations, il faut s'attendre à ce que cela soit tout à fait normal. Zettlr transmet simplement le fichier à Pandoc, qui le transmet à LaTeX. Mais le modèle que Zettlr utilise pour vos exportations PDF nécessite quelques paquets supplémentaires qui ne sont pas toujours installés lors de l'installation de LaTeX.

L'erreur la plus courante ressemble à ceci :

**LaTeX Error: File \<some name\>.sty not found.**

Cela signifie simplement qu'un certain paquet n'a pas été trouvé (ils se terminent par `.sty`). Sous Windows, ces paquets doivent être installés automatiquement dès qu'ils sont nécessaires ; sous MacOS et Linux, il suffit d'exécuter la commande `tlmgr install <some name>`.

En cas d'autres erreurs, Zettlr vous permet de copier et de coller du texte à partir du message d'erreur, car dans presque tous les cas, une courte recherche Google mène à une solution ; et dans presque tous les cas, la seule action requise est l'installation d'un autre paquet.

## J'ai trouvé un bug !

C'est une excellente nouvelle ! Enfin, pas géniale, mais c'est bien que vous l'ayez trouvée ! Dans ce cas, veuillez vous rendre sur [GitHub](https://github.com/Zettlr/Zettlr/) et ouvrir un dossier (_issue_) afin que nous sachions ce qui se passe et puissions travailler à la résolution du bug.

## J'ai une requête de fonctionnalité ! / J'ai une suggestion pour rendre une fonctionnalité plus efficace !

C'est bon à entendre ! Nous dépendons toujours de l'expérience d'autres personnes avec l'application pour améliorer son efficacité et son adéquation à différentes situations. Dans ce cas, veuillez vous rendre sur [GitHub](https://github.com/Zettlr/Zettlr/) et ouvrir un dossier afin que nous puissions aller droit au but.

## Qu'en est-il de ma vie privée ? Zettlr transfère-t-il des données, ou ne dois-je pas m'inquiéter ?

Zettlr, c'est la vie privée avant tout. Il n'envoie aucune donnée et il est pleinement fonctionnel hors ligne. Pourtant, il existe un cas où Zettlr envoie des données sur le web : La vérification de la mise à jour. Chaque fois que vous ouvrez Zettlr, ou que vous utilisez l'élément de menu, Zettlr se connecte à l'API Zettlr pour récupérer une liste de toutes les versions. Cette liste est ensuite utilisée pour déterminer si vous utilisez la dernière version ou non. Lors de la connexion, Zettlr recevra votre adresse IP et saura qu'une application Electron accède à l'API. L'application transmettra également votre type de système d'exploitation et l'ID de l'application.

Ces données ne seront jamais vendues à des tiers. C'est simplement parce que nous aimons les statistiques et que nous sommes toujours intéressés de savoir qui utilise l'application. Néanmoins, nous ne pouvons identifier personne sur la base de ces données, c'est beaucoup trop grossier pour cela. Nous sommes Open Source, pas Facebook.
