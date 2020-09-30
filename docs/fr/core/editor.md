# L'éditeur

Au cœur de Zettlr se trouve un puissant éditeur de Markdown. Il utilise un logiciel très sophistiqué appelé **[CodeMirror](https://codemirror.net/)** et offre donc de nombreuses fonctionnalités prêtes à l'emploi.

Dans ce document, vous apprendrez à écrire Markdown, les commandes disponibles, certaines caractéristiques spéciales de CodeMirror et comment fonctionne la vérification orthographique.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gnRMlm3_O5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Écrire en Markdown

L'idée derrière Zettlr est de supprimer les balises et le style inutiles de votre processus d'écriture. Au cours du processus d'écriture, ce qui compte, c'est le _contenu_ que vous produisez, et non la forme sous laquelle il est présenté. 
C'est pourquoi Zettlr vous permet d'écrire des fichiers `Markdown`. Markdown est un langage de balisage très simple qui ne contient qu'une petite quantité de symboles de formatage que vous connaissez peut-être déjà ! Ces dernières années, de plus en plus d'applications ont découvert la puissance de Markdown, et même WhatsApp l'utilise pour permettre un formatage simple des messages.

Un document Markdown n'est constitué que de texte pur et présente de nombreux avantages :

* Markdown est **indépendant de la plate-forme**. Tout fichier Markdown écrit sur macOS peut -- sans aucune conversion -- être édité sous Windows et Linux. Tout ce dont vous avez besoin est un éditeur de texte. Et avec "Notepad" (Windows), "TextEdit" (macOS) ou "GEdit" (Ubuntu), chaque système d'exploitation en a déjà un intégré.
* La syntaxe de Markdown est conçue de telle manière que **même sans aucune mise en évidence syntaxique, vous avez l'idée d'un document Markdown**. Même sans style, il est facile de repérer toutes les rubriques, car elles sont précédées d'un signe dièse (#), les listes sont indiquées par des puces ou des chiffres et le texte mis en avant est encapsulé dans des tirets bas (_) ou des astérisques.
* Markdown est une **norme source ouverte**, ce qui signifie que tout le monde peut l'implémenter dans un logiciel (comme nous l'avons fait !) et commencer à construire autour de lui. Cela signifie également que vous pouvez **vous attendre à ce que la plupart des applications le comprennent**.
* Comme Markdown est si simple et n'ajoute pas de formatage par lui-même, n'importe quelle application peut introduire une façon différente de prévisualisation. **Il existe des tonnes d'applications Markdown qui utilisent différentes approches de l'écriture**. Si Zettlr ne vous convient pas, vous pouvez toujours choisir parmi une pléthore d'applications libres et open source.
* Les documents Markdown ne contiennent que le formatage strictement nécessaire pour aider les applications à le comprendre. C'est pourquoi les documents **Markdown sont environ dix fois plus petits que les formats de traitement de texte classiques** !
* Et bien d'autres encore ...

> Si vous voulez savoir exactement ce que Markdown peut faire et ce qu'elle ne peut pas faire, consultez la [Section **Markdown**](../reference/markdown-basics.md).

## Editer du texte

L'édition de texte avec Zettlr est simple. Il suffit de créer un nouveau fichier ou de sélectionner un fichier existant, de cliquer dans l'éditeur et de commencer à écrire. Utilisez le formatage Markdown selon vos besoins et utilisez certains raccourcis qui rendent encore plus simple l'ajout de formatage :

* `Cmd/Ctrl+B`: Mettre en **gras**
* `Cmd/Ctrl+I`: _Emphase (italique)_ du texte
* `Cmd/Ctrl+K`: Créer un nouveau `[lien](https://www.zettlr.com)`. Le texte sélectionné deviendra la description - il vous suffit d'ajouter l'URL. Et s'il y a une URL valide dans le presse-papiers, Zettlr la prend même comme URL, ce qui signifie que vous n'avez pas à faire quoi que ce soit par vous-même !
* `Cmd/Ctrl+Shift+I`: Insérez une image. Si vous avez sélectionné un texte, il deviendra la description de l'image. Il suffit d'ajouter un chemin d'accès à votre image, ou de copier un chemin d'accès à une image précédente. Ensuite, Zettlr ajoutera automatiquement le chemin coupé !
* `Tab`: Mettez une liste donnée en retrait d'un niveau.
* `Shift-Tab`: Dé-indenter une liste d'un niveau.

Bien entendu, tous les autres raccourcis par défaut qui fonctionnent sur n'importe quel éditeur de texte fonctionneront également par défaut : Copier le texte avec `Cmd/Ctrl+C`, l'insérer avec `Cmd/Ctrl+V` ou le couper en appuyant sur `Cmd/Ctrl+X`. L'annulation et la reprise sont également possibles, tout comme la suppression de mots ou de lignes entières. Il suffit d'écrire comme vous avez l'habitude d'écrire.

## Préservation des formats lors du copier-coller

Bien entendu, il est obligatoire que vous puissiez également travailler avec du texte formaté. Par exemple, vous pouvez coller du texte formaté à partir d'un document Word ou d'une page web. Pour ce faire, il suffit de copier ce texte et de le coller. Zettlr détectera automatiquement qu'il s'agit d'un texte formaté et le convertira avant de l'insérer. Si vous ne souhaitez pas coller le texte avec des mises en forme mais en texte simple, maintenez la touche `Shift` lors du collage. Cela indiquera à Zettlr de ne pas convertir le texte en Markdown.

Ensuite, à un moment donné, vous souhaitez copier un texte de Zettlr mais de manière à ce que d'autres applications puissent comprendre son format. Pour copier le texte non pas comme Markdown, mais avec un format commun, vous devez sélectionner `Copy as HTML`. Le raccourci est `Cmd/Ctrl+Alt+C`.

> Reportez-vous à la section [Raccourcis](../reference/keyboard-shortcuts.md), pour obtenir une liste de tous les raccourcis disponibles.

## Particularités du CodeMirror

Le CodeMirror étant très puissant, il existe d'autres options intéressantes que vous pouvez utiliser (si vous en avez besoin).

* Pressez `Cmd` (macOS) ou `Alt` (Windows/Linux) et cliquez quelque part dans le texte. Vous aurez maintenant **deux curseurs** à votre disposition ! Ceci est surtout utile si vous êtes sur le point d'écrire un texte plusieurs fois pour gagner du temps. Pour quitter ce mode multi-curseur, il vous suffit de cliquer n'importe où dans le texte sans avoir à appuyer sur les touches de modification.
* Pressez `Cmd` (macOS) ou `Alt` (Windows/Linux) et sélectionnez un texte. Vous pouvez maintenant **sélectionner plusieurs portions de texte** à la fois. Ceci est utile si vous voulez créer deux ou plusieurs liens à la fois : Sélectionnez simplement les portions de texte qui doivent servir de description à ces liens et appuyez sur `Cmd/Ctrl+K` pour transformer toutes les sélections en liens — en une seule fois ! Cela fonctionne avec toutes les autres commandes, comme la mise en gras ou en italique du texte, ou la création de guillemets.
* Si vous n'avez rien sélectionné, un appui sur `Cmd/Ctrl+X` **coupera toute la ligne**. Presser ensuite `Cmd/Ctrl+V` **va insérer toute cette ligne au-dessus de la ligne dans laquelle se trouve votre curseur**.
* CodeMirror **referme automatiquement les citations et les parenthèses** pour vous faire gagner du temps ! Chaque fois que vous tapez un `"` ou un `(`, il vous présentera automatiquement le caractère de clôture. Et lorsque vous aurez terminé votre citation, tapez simplement `"` ou `)`, il n'ajoutera _pas le caractère une deuxième fois_ mais "sautera" par-dessus ! Cela fonctionne également avec le texte sélectionné. Si vous avez sélectionné quelque chose et que vous appuyez sur l'un de ces caractères, votre sélection sera encapsulée avec la paire de caractères.

## Modes d'édition Vim et Emacs

Certaines personnes préfèrent une manière différente d'insérer du texte dans l'éditeur, et aiment donc utiliser les raccourcis clavier Vim ou Emacs. Ce mode de saisie peut être activé dans les [settings](../ reference / settings.md) et vous permet d'insérer du texte différemment de la normale. Ce paramètre est recommandé uniquement aux utilisateurs avancés.

## Vérification orthographique

Zettlr propose également un service de vérification orthographique. Dans vos préférences, vous pouvez sélectionner toutes les langues pour lesquelles votre texte doit être vérifié. Les dictionnaires sont chargés au démarrage de l'application et le contenu de votre éditeur est vérifié par rapport à ceux-ci. Zettlr se déplacera dans tous les dictionnaires pour vérifier un mot, et seulement si aucun des dictionnaires chargés ne le trouve, il sera marqué comme erroné avec une petite ligne pointillée.

Pour corriger un mot, il suffit de faire un clic droit dessus et de sélectionner une suggestion dans le menu contextuel, s'il y en a. Vous pouvez également ajouter un mot à votre dictionnaire utilisateur.

Vous écrivez dans les deux langues ? Pas de problème ! Il vous suffit de charger tous les dictionnaires dans lesquels vous écrivez potentiellement du texte pour vérifier toutes les langues en même temps. N'oubliez pas que les dictionnaires peuvent utiliser beaucoup de mémoire, donc si vous en chargez trop, cela peut ralentir l'application.

> **Astuce**: Pour désactiver complètement le correcteur orthographique, il suffit de décocher tous les dictionnaires dans les préférences.

## Travailler avec des notes de bas de page

Les notes de bas de page sont notoirement difficiles à réaliser dans le cadre de Markdown, car elles nécessitent des caractères spéciaux pour les réaliser, et il faut aussi travailler à deux endroits à la fois dans le document : L'endroit où vous voulez mettre votre note de bas de page et, en bas, l'endroit où se trouve le texte de référence. Zettlr fait de son mieux pour vous soulager de ces difficultés de la manière suivante :

1. Vous pouvez utiliser un raccourci pour placer des notes de bas de page : `Cmd+Alt+R` (macOS only) or `Ctrl+Alt+F` (macOS/Windows/Linux).
2. Le texte de référence (c'est-à-dire le contenu de la note de bas de page) sera affiché dans la partie inférieure de la fenêtre de l'éditeur lorsque vous passerez au-dessus d'une note de bas de page.
3. Si vous cliquez avec `Alt` ou `Ctrl` sur une ancre de note de bas de page quelque part dans votre texte, un popup apparaîtra qui vous permettra de modifier la note de bas de page en place. Une fois que vous avez fini d'éditer votre note de bas de page, appuyez simplement sur `Shift+Enter` pour fermer le popup et remplacer le texte de la note de bas de page.
