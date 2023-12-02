# Raccourcis

Cette page contient une liste de tous les raccourcis disponibles dans l'application.

Pour en faciliter la mémorisation, voici quelques réflexions que nous avons mises en place pour attribuer les raccourcis. En général, nous essayons de suivre ces règles, mais tous les raccourcis ne les suivent pas.

1. **Raccourcis communs** : Certains raccourcis sont si courants qu'ils ne rentrent pas dans notre système de raccourcis, mais tout le monde les reconnaîtra. Un exemple est le raccourci des préférences (`Cmd/Ctrl+,`), un autre le raccourci pour terminer l'édition d'une note de bas de page (`Shift+Enter`). Nous essayons d'utiliser autant de ces raccourcis que possible pour réduire les difficultés.
2. **Raccourcis de haute priorité** : Vous utiliserez _beaucoup_ de ces raccourcis lorsque vous utiliserez l'application. Il s'agit généralement de `Cmd/Ctrl` et d'une seule lettre. En nommant les raccourcis, nous essayons de nous en tenir aux noms anglais de la commande qu'elle déclenche (**N**ew, **R**emove, **F**ind, etc). Parfois, cela n'est pas possible (par exemple, le mode "Distraction Free" est déclenché via `Cmd/Ctrl+J`), car `Cmd/Ctrl+D` est déjà pris par l'éditeur).
3. **Autres actions** : Nous prenons au sérieux la signification sémantique de la touche `Alt`. Par conséquent, prenez un raccourci de haute priorité, ajoutez-y un `Alt` et vous aurez normalement tendance à déclencher une action alternative sur la même cible. Les exceptions notables à cette règle sont le panneau des développeurs (qui s'ouvre avec `Cmd/Ctrl+Alt+I`), tandis que `Cmd/Ctrl+I` rend le texte en italique. **C'est vrai pour _toutes_ les actions que vous pouvez déclencher en utilisant des clics de souris. Toutes les actions alternatives de la souris sont déclenchées par un `Alt+Click`. Au cas où les `Alt-Click`s ne donnent pas les résultats attendus, les `Ctrl+Click`s fonctionnent également**.
4. **Cibles alternatives** : Si vous voulez effectuer la même _action_, mais sur une cible différente, essayez d'utiliser une touche `Maj`. Dans la plupart des applications, les commandes `Maj` changent la cible du fichier sélectionné au répertoire sélectionné. La recherche utilise également cette fonction (`Cmd/Ctrl+F` recherche le fichier, tandis que `Cmd/Ctrl+Shift+F` recherche le répertoire entier).

> Les actions dans l'éditeur qui nécessitent la souris impliquent généralement d'appuyer sur `Cmd / Ctrl` tout en cliquant, par exemple pour suivre les liens dans l'éditeur.

## Raccourcis à l'échelle de l'application

* `Cmd/Ctrl+,`: Ouvrir les préférences
* `Cmd/Ctrl+Alt+,`: Ouvrir les préférences d'exportation en PDF
* `Cmd/Ctrl+Q`: Sortir de l'application
* `Cmd/Ctrl+N`: Créez un nouveau fichier dans le répertoire actuellement sélectionné. Si aucun n'est sélectionné, la commande est désactivée.
* `Cmd/Ctrl+Shift+N`: Créer un nouveau répertoire à l'intérieur du répertoire actuellement sélectionné. Si aucun n'est sélectionné, la commande est désactivée.
* `Cmd/Ctrl+O`: Affichez la boîte de dialogue pour ouvrir un autre répertoire.
* `Cmd/Ctrl+S`: Enregistrez le fichier. Zettlr enregistre automatiquement vos fichiers, mais certaines personnes ont tendance à se sentir mieux en ayant la possibilité de les enregistrer manuellement.
* `Cmd/Ctrl+E`: Ouvrez le popup d'exportation pour exporter le fichier actuel. Si aucun n'est sélectionné, la commande est désactivée.
* `Cmd/Ctrl+R`: Rename the opened file. If none is selected, the command is disabled.
* `Cmd/Ctrl+Shift+R`: Renommez le répertoire actuel. Si aucun n'est sélectionné, la commande est désactivée.
* `Cmd/Ctrl+Delete`: Supprimez le fichier en cours. Si aucun n'est sélectionné, la commande est désactivée.
* `Cmd/Ctrl+Shift+Delete`: Supprimez le répertoire actuel. Si aucun n'est sélectionné, la commande est désactivée.
* `Cmd/Ctrl+Shift+F`: Permet de focaliser la recherche au niveau global.
* `Cmd/Ctrl+Shift+E`: Donne le focus à l'éditeur.
* `Cmd/Ctrl+Shift+T`: Donne le focus à l'arborescence (Champ _filtre_).
* `Cmd/Ctrl+Alt+L`: Bascule le thème entre le mode clair et le mode foncé (_NdT : attention avec Ubuntu - verrouille l'écran_).
* `Cmd/Ctrl+Alt+S`: Bascule l'affichage des bribes de texte (NdT ?).
* `Cmd/Ctrl+Shift+1`: Bascule le mode barre latérale pour afficher soit la liste des fichiers, soit l'arborescence. Désactivé en mode barre latérale étendue.
* `Cmd/Ctrl+?`: Affichage alterné de la barre latérale des pièces jointes.
* `Cmd+Ctrl+F` (macOS) `F11` (windows/Linux): Basculer en plein écran
* `Cmd/Ctrl+W`: Fermez la fenêtre de l'application. Sous Windows et Linux, l'application se fermera également.
* `Cmd/Ctrl+M`: Réduisez la fenêtre de l'application.
* `F1`: Ouvrez cette documentation. Cela ouvrira le lien dans votre navigateur par défaut.
* `clic bouton du milieu`: Cliquer Sur un fichier de l'arborescence, ouvre le fichier dans un nouvel onglet.

**Si le mode de débogage est activé**

* `F5`: Rechargez l'interface utilisateur graphique.
* `Cmd+Alt+I` (macOs) `Ctrl+Maj+I` (Windows/Linux): Ouvrir les outils de développement Chrome.

## Raccourcis de l'application liés aux champs de texte

* `Cmd/Ctrl+Z`: défaire
* `Cmd/Ctrl+Shift+Z`: refaire
* `Cmd/Ctrl+X`: couper
* `Cmd/Ctrl+C`: copier
* `Cmd/Ctrl+V`: coller
* `Cmd/Ctrl+A`: sélectionner tout le texte

## Raccourcis liés à la rédaction

* `Cmd/Ctrl+Alt+C`: Copie en HTML. S'il y a une sélection, elle sera convertie en HTML et non pas copiée en texte brut. Cela vous permet de la coller, par exemple, dans un traitement de texte.
* `Cmd/Ctrl+Shift+C`: (Dé-)Commentez la sélection de texte donnée (ou ajoutez un nouveau commentaire HTML à la position du curseur).
* `Cmd/Ctrl+X`: Coupez. Si une sélection a été faite par l'éditeur, elle sera coupée. Si rien n'est sélectionné, il coupera **la ligne entière**, dans laquelle se trouve le curseur.
* `Cmd/Ctrl+V`: Coller. Si l'éditeur comprend une sélection, et que vous venez de couper une ligne entière, il collera cette ligne entière au-dessus de la ligne dans laquelle se trouve le curseur (NdT : ?). Le formatage sera préservé si le presse-papiers contient du texte formaté.
* `Cmd/Ctrl+Shift+V`: Même chose que ci-dessus, sauf qu'il n'essaiera pas de préserver le formatage du texte collé.
* `Cmd/Ctrl+B`: Mettez la sélection en gras ou insérez de nouveaux caractères de formatage en gras.
* `Cmd/Ctrl+I`: Mettez la sélection en italique ou insérez de nouveaux caractères de formatage en italique.
* `Cmd/Ctrl+K`: Insérez un nouveau modèle de lien ou convertissez le texte sélectionné en légende d'un nouveau lien. Si le presse-papiers contient un lien reconnaissable, indiquez également les accolades de la cible.
* `Cmd/Ctrl+T`: Faites de la ligne actuelle un élément de la liste des tâches.
* `Cmd/Ctrl+F`: Ouvre la fenêtre contextuelle de recherche dans l'éditeur qui a le focus actuel (soit l'éditeur principal ou une fenêtre Quicklook).
* `Ctrl+Alt+F` (Windows/Linux) `Cmd+Alt+R` (macOS): Insérez une nouvelle note de bas de page à la position actuelle du curseur.
* `Cmd/Ctrl+L`: Générez un nouvel ID à l'aide du modèle de générateur de la boîte de dialogue des paramètres et insérez-le à la position actuelle du curseur.
* `Cmd/Ctrl+0`: Remettre la taille de la police de l'éditeur à la valeur standard.
* `Cmd/Ctrl+[1-9]`: Sélectionner les onglets de 1 à 9.
* `Cmd/Ctrl+Minus`: Diminuer la taille de la police de l'éditeur.
* `Tab`: Indenter une liste.
* `Maj-Tab`: Désindenter une liste.
* `Shift-Enter`: Lors de l'édition d'une note de bas de page, enregistre le texte de référence. Sinon, cela empêchera l'insertion automatique d'un nouvel élément de liste.
* `Ctrl-Enter`: Insérez une ligne sous celle dans laquelle votre curseur se trouve actuellement, et placez le curseur au début de celle-ci.
* `Ctrl-Shift-Enter`: Insérez une ligne au-dessus de celle où se trouve actuellement votre curseur, et placez le curseur au début de celle-ci.
* Option/Alt+Flêche haut: Déplace la ligne où se trouve le curseur, vers le haut.
* Option/Alt+Flêche bas: éplace la ligne où se trouve le curseur, vers le bas.


## Raccourcis de l'éditeur de tableau

Ces raccourcis fonctionnent dans chaque éditeur de tableau une fois que vous entrez dans le mode d'édition en cliquant dans le tableau.

* `Tab`: Passez à la cellule suivante. Si la dernière colonne est active, passez à la première cellule de la ligne suivante. Si votre curseur se trouvait dans la dernière colonne de la dernière ligne, une nouvelle ligne sera automatiquement ajoutée.
* `Shift-Tab`: Passez à la cellule précédente. Si votre curseur était dans la première colonne, passez à la dernière cellule de la colonne précédente.
* `Return`: Passez à la même colonne dans la rangée suivante. Si votre curseur se trouvait dans la dernière ligne, une nouvelle ligne sera automatiquement ajoutée.
* `Flêche Haut/Flêche Bas`: Passez à la même colonne dans la ligne précédente/suivante. Aucune nouvelle ligne ne sera ajoutée si vous êtes dans la première ou la dernière ligne.
* `Flêche Gauche/Flêche Droite`: Déplacez le curseur à gauche/droite. Si le curseur se trouve au début/à la fin du contenu de la cellule, déplacez-vous vers la cellule précédente/suivante.

## Raccourcis liés à l'aperçu

* `Flêche haut`: Ouvre le fichier précédent.
* `Flêche bas`: Ouvre le fichier suivant.
* `Cmd/Ctrl+Flêche haut`: Passez en tête de liste.
* `Cmd/Ctrl+Flêche bas`: Passez au bas de la liste.

## Raccourcis liés aux popups

* `ESC`: Si un champ de texte à l'intérieur du popup a un focus, la touche Echap permet de fermer le popup.

**Dans le popup de recherche de l'éditeur principal**

* `Return`: While the _search_ textfield is focused, it will select the next occurrence of your search term. While the _replace_ textfield is focused, it will replace the next occurrence of your search term with the replacement text and automatically search for the next occurrence.
* `Alt+Return`: While the _replace_ textfield is focused, this will replace all occurrences of your search term with the replacement text.
