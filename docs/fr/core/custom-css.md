# CSS Personnalisés

> Le CSS personnalisé est une fonctionnalité pour les utilisateurs avancés. Il n'y a pas de support officiel pour les personnalisations, et vous effectuez les personnalisations à vos propres risques. En cas de problème, vous pouvez simplement supprimer le `custom.css` du répertoire de données Zettlr pour réinitialiser le CSS personnalisé.

Il est possible d'utiliser des CSS ([Cascading Style Sheets](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)) personnalisés pour modifier l'apparence complète de l'application. 
Vous pouvez trouver l'éditeur CSS personnalisé sous `Zettlr->Custom CSS…` (macOS) ou bien sous `File->Custom CSS…` (Windows et Linux)

Si vous n'êtes pas familier avec CSS, mais que vous ne souhaitez pas simplement copier et coller les guides de cette page, vous pouvez suivre un court [tutoriel sur CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS) ! Il y en a beaucoup sur Internet, donc une recherche rapide peut aussi vous fournir des tutoriels vidéo, si vous les préférez !

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QcJGI_3adhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Ecrire des CSS pour Zettlr

Les styles de Zettlr sont divisés à la fois en géométrie et en thème, vous pouvez donc vous contenter de changer le design des éléments sans changer la géométrie. Jouer avec la géométrie peut être amusant, mais cela peut produire un comportement complètement aléatoire, car certaines parties de l'application dépendent de la taille correcte des éléments. Au cas où vous auriez fait une erreur, ne vous inquiétez pas : il suffit de supprimer le fichier `custom.css`du répertoire de données de Zettlr. Vous pouvez trouver le répertoire de données de votre propre système en regardant les chemins d'accès fournis dans [la documentation d'installation](../install.md).

Les classes et les ID dans Zettlr sont toujours placées dans l'espace de noms des composants respectifs (à moins qu'ils ne soient globaux), donc pour vraiment outrepasser une règle, vous devrez utiliser l'espace de noms complet (ou, si vous ne voulez pas ajouter beaucoup de règles et que vous êtes paresseux, utilisez la règle de priorité `!important`).

Tout est toujours dans l'espace de nom (namespace) du `body`, qui a une classe` .dark` si l'application est actuellement en mode sombre. Donc, pour vous assurer qu'une certaine règle ne s'applique que lorsque l'application est en mode sombre, assurez-vous de la préfixer avec `body.dark`!

## Astuces pour trouver les sélecteurs

Les styles de Zettlr sont soumis à des changements constants. Bien qu'ils devraient rester assez stables, des modifications peuvent être introduites dans n'importe quelle version et, par conséquent, au lieu de vous fournir des exemples prêts à l'emploi, cette page explique comment trouver facilement les bons sélecteurs.

Tout d'abord, assurez-vous d'activer le mode débogage dans les [préférences](../reference/settings.md) avancées afin d'activer le menu Développer. Ensuite, ouvrez les outils de développement à partir de ce menu et assurez-vous de sélectionner l'onglet "Éléments".

![Zettlr avec les outils de développement ouverts](../img/zettlr_developer_tools.png)

Cliquez ensuite sur la flèche dans le coin supérieur droit des outils de développement. Vous pouvez maintenant cliquer sur n'importe quel élément de l'application pour le concentrer dans les outils de développement. Dans la zone inférieure des outils de développement, vous verrez alors les directives CSS utilisées pour styliser tous les éléments de votre sélection.

![Les directives CSS dans les outils de développement](../img/zettlr_developer_tools_css.png)

Les règles du haut remplacent toujours les règles du bas, donc ce qui vous intéresse est la directive suivante:

```css
body .cm-quote, body .cm-link, body .cm-strong, body .cm-em {
    color: var(--c-primary);
}
```

C'est le sélecteur que vous souhaitez copier dans votre boîte de dialogue CSS et que vous personnaliserez à votre guise. Comme vous pouvez le voir, il donne la couleur principale du thème aux guillemets, aux liens, au texte gras et italique.

## CSS Code Snippets

### Utiliser une police personnalisé avec Zettlr

Si vous n'aimez pas la police par défaut fournie avec Zettlr, ou avez besoin de la changer, collez simplement l'extrait de code suivant dans l'éditeur CSS personnalisé. Remplacez `your-font-name` par le ** nom complet ** de la police que vous souhaitez utiliser pour Zettlr. Veuillez remplacer `placeholder` en fonction de la police:

- Si vous souhaitez utiliser une police **serif**, telle que Times New Roman ou Georgia, veuillez utiliser `serif`
- Si votre police est **sans serif**, comme Arial ou Helvetica, veuillez utiliser `sans-serif`
- Si vous souhaitez passer au classique **monospace**, veuillez utiliser l'espace réservé `monospace`

L'espace réservé garantira que même si votre police est introuvable, une police équivalente sera utilisée. Cela sert de solution de secours. De plus, si le nom de votre police contient des espaces, assurez-vous de l'entourer de guillemets, par exemple, `"Times New Roman"`.

```css
body #editor .CodeMirror {
    font-family: '<your-font-name here>', <placeholder>;
}
```

### Images de fond aléatoires issues de Unsplash.com

Avec le code suivant, vous pouvez faire en sorte que votre éditeur ait une image d'arrière-plan différente chaque fois que vous le démarrez. Les images sont tirées de Unsplash.com, un joli site avec des photos gratuites. Il utilise la `Source API`, qui crachera simplement une image différente à chaque fois que l'URL est visitée. Vous pouvez le tester simplement [en visitant la page et en la rafraîchissant plusieurs fois](https://source.unsplash.com/random)! Veuillez vous référer à la [Unsplash Source API reference](https://source.unsplash.com/) pour plus d'options (comme l'utilisation d'une image du jour).

```css
/* Enter your custom CSS here */

#editor {
    background-color: transparent;
    background-image: url('https://source.unsplash.com/random');
    background-size: cover;
    background-position: center center;
}

body #editor .CodeMirror-sizer, body #editor .CodeMirror-gutter {
    background-color: rgba(255, 255, 255, .8);
    height: 100%;
}

body.dark #editor .CodeMirror-sizer, body.dark #editor .CodeMirror-gutter {
    background-color: rgba(0, 0, 0, .8);
}

#editor .CodeMirror {
    background-color: transparent;
}
```

![Un aperçu d'une installation Zettlr utilisant l'extrait de code ci-dessus](../img/custom_css_unsplash.png)

### Image de fond locale

Afin d'utiliser une image de fond locale, vous pouvez utiliser le code CSS ci-dessus et remplacer
```css
background-image: url('https://source.unsplash.com/random');
```
par
```css
background-image: url('file:////chemin/absolu/vers/mon/image.jpg');
```

### Visualisation des fins de ligne

Si vous souhaitez voir où se trouvent vos sauts de ligne, vous pouvez afficher le symbole ¶ à la fin de vos lignes en utilisant le CSS personnalisé suivant:

```css
.CodeMirror-line:not(:last-child)::after {
  content: "¶";
  color: #666;
}
```

![Un aperçu de Zettlr en utilisant la snippet ci-dessus](../img/custom_css_pilcrow.png)

### Cacher la barre d'outils en mode "Distraction Free"

Certaines personnes préfèrent que le mode sans distraction soit _ vraiment_ sans distraction. Zettlr ne cache pas la barre d'outils par défaut, car la plupart des gens veulent avoir accès à tous les outils et boutons, même lorsqu'ils écrivent sans distraction. Pourtant, si vous faites partie du groupe de personnes qui préfèrent n'avoir que l'éditeur dans ce mode, réjouissez-vous! Cacher la barre d'outils en mode sans distraction est aussi simple qu'une seule ligne de CSS!

Collez simplement la ligne suivante de CSS dans la boîte de dialogue CSS personnalisé, et à partir de là, la barre d'outils sera toujours masquée:

```css
#editor.fullscreen, .CodeMirror-fullscreen { top: 0px; }
```

### Définir une largeur maximale pour le texte

Si vous avez un grand écran, vous constaterez peut-être que les lignes de votre texte sont très longues.
Si vous souhaitez avoir des lignes plus courtes dans l'éditeur, avec des marges des deux côtés, vous pouvez utiliser l'extrait de code CSS suivant:

```css
#editor {
  --side-margin: calc( 50vw - 30em ); 
}

#editor .CodeMirror {
  margin-left: var(--side-margin);
}

#editor .CodeMirror-scroll {
  padding-right: var(--side-margin);
}
```

![Un aperçu de Zettlr en utilisant l'extrait ci-dessus](../img/custom_css_maxwidth.png)
