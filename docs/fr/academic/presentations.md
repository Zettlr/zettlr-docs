# Presentations

Depuis la version `0.19.0`, Zettlr est en mesure d'exporter vos fichiers Markdown directement sous forme de fichiers de présentation en utilisant le cadre [reveal.js](https://revealjs.com/#/). `reveal.js` est une solution légère pour créer des présentations super compatibles en utilisant `HTML` et `JavaScript`. Par conséquent, ces présentations peuvent être affichées sur _tous_ les ordinateurs qui utilisent un navigateur - de nos jours, cela signifie : elles s'exécutent sur _tous_ les ordinateurs.

Pour exporter des fichiers Markdown vers `reveal.js`, vous devez vous assurer que Pandoc est installé sur votre ordinateur. Rendez-vous dans la [section sur l'exportation](../core/export.md) pour voir comment installer Pandoc.

Si vous voulez d'abord être impressionné par une exportation concrète de Zettlr vers `reveal.js`, veuillez consulter  [la présentation de démonstration](https://zettlr.com/slides.revealjs.htm) ! Vous pouvez également lire [le fichier source](https://www.zettlr.com/themes/zettlr/assets/slides.md) en suivant les instructions sur cette page.

## Considérations préalables

Bien entendu, un document Markdown qui doit être compilé sous forme de présentation a une structure légèrement différente des autres documents Markdown.

### Création de diapositives

Vous pouvez créer de nouvelles diapositives de deux façons. Premièrement, chaque niveau de titre 1 commencera une nouvelle diapositive et servira également de titre à la diapositive. Mais si le niveau de titre 1 est trop grand à votre goût, ou si vous ne voulez tout simplement pas de titre sur cette diapositive, vous pouvez également délimiter les diapositives en utilisant les séparateurs Markdown (soit`***` ou `---`).

Tout ce qui suit le titre ou le séparateur finira par être le contenu des diapositives. Il n'est pas nécessaire de "terminer" explicitement la dernière diapositive par un intercalaire.

### Utilisation des éléments de Markdown

À l'intérieur des diapositives, vous pouvez utiliser tous les éléments Markdown. Ils seront rendus comme vous vous y attendez. Vous pouvez même utiliser des notes de bas de page qui permettront à Tout ce qui suit le titre ou le séparateur finira par être le contenu des diapositives. Il n'est pas nécessaire de "terminer" explicitement la dernière diapositive par un intercalaire.n être placés sur leur propre, diapositive respective à la fin !

### Outils avancés

Bien sûr, `reveal.js` Les présentations ont également la même polyvalence que PowerPoint ou Impress lorsqu'il s'agit de contrôler votre présentation. Par exemple, vous pouvez utiliser des classes CSS pour indiquer à la présentation que certains éléments doivent être déclenchés avant de transmettre la présentation. Ces éléments sont appelés "fragments". En raison des limitations du moteur de Pandoc, vous devrez utiliser du HTML simple pour y parvenir. Prenons, par exemple, le code HTML de la présentation de démonstration :

```html
<ul>
    <li class="fragment fade-in">This item will fade in.</li>
    <li class="fragment highlight-blue">This will be highlighted blue.</li>
    <li class="fragment highlight-red">All available transitions are documented [here](https://github.com/hakimel/reveal.js/#fragments).</li>
</ul>
```

Cela permettra de créer une liste de trois éléments. Tous les éléments sont des "fragments", ce qui signifie qu'en appuyant sur le raccourci de la diapositive suivante, le premier `fade-in`(_fondu enchaîné_), comme le veut la classe. À la prochaine pression sur la touche fléchée droite, le deuxième élément sera mis en évidence en bleu. La troisième pression sur la touche fléchée droite mettra en évidence le dernier élément en rouge. Et à la quatrième pression sur la touche fléchée, la diapositive suivante s'affiche.

### Paramètres de présentation

![presentations_scripts.png](../img/presentations_scripts.png)

Bien entendu, la présentation elle-même comporte également des paramètres que vous pouvez utiliser. Il s'agit de simples directives JavaScript que vous pouvez manipuler en insérant une balise `<script>`comme le montre la capture d'écran. Vous pouvez les ignorer en définissant les attributs sur l'objet `zettlrRevealOptions`. Voici les options que vous pouvez définir :

```javascript
const zettlrRevealOptions = {
	    // Affichage des commandes dans le coin inférieur droit
	    controls: true,
	    // Afficher une barre de progression de la présentation
    	progress: true,
	    // Afficher le numéro de page de la diapositive en cours
	    slideNumber: true,
	    // Poussez chaque changement de diapositive dans l'historique du navigateur
    	history: true,
	    // Activer les raccourcis clavier pour la navigation
	    keyboard: true,
	    // Activer le mode aperçu des diapositives
    	overview: true,
	    // Vertical centering of slides
	    center: true,
	    // Permet la navigation tactile sur les appareils à saisie tactile
	    touch: true,
	    // Bouclez la présentation
    	loop: false,
	    // Changer la direction de la présentation pour être droite à gauche
	    rtl: false,
	    // Répartit au hasard l'ordre des diapositives à chaque chargement de la présentation
	    shuffle: false,
	    // Activation et désactivation de fragments globalement
	    fragments: true,
	    // Indique si la présentation se déroule en mode encadré,
	    // c'est-à-dire contenus dans une partie limitée de l'écran
	    embedded: false,
	    // Indique si nous devons montrer une aide en surimpression lorsque le point d'interrogation est appuyé
	    help: true,
	    // Signale si les notes de l'orateur doivent être visibles par tous les téléspectateurs
	    showNotes: false,
	    // Global override for autolaying embedded media (video/audio/iframe)
	    // - null: Media will only autoplay if data-autoplay is present
	    // - true: All media will autoplay, regardless of individual setting
	    // - false: No media will autoplay, regardless of individual setting
	    autoPlayMedia: null,
	    // Number of milliseconds between automatically proceeding to the
	    // next slide, disabled when set to 0, this value can be overwritten
	    // by using a data-autoslide attribute on your slides
	    autoSlide: 0,
    // Stop auto-sliding after user input
	    autoSlideStoppable: true,
	    // Enable slide navigation via mouse wheel
	    mouseWheel: false,
	    // Hides the address bar on mobile devices
	    hideAddressBar: true,
	    // Opens links in an iframe preview overlay
    	previewLinks: false,
	    // Transition style
	    transition: 'convex', // none/fade/slide/convex/concave/zoom
	    // Transition speed
	    transitionSpeed: 'default', // default/fast/slow
	    // Transition style for full page slide backgrounds
    	backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
	    // Number of slides away from the current that are visible
    viewDistance: 3,
    // The display mode that will be used to show slides
    display: 'block'
};
```

### Style de présentation

Si aucun des thèmes disponibles ne vous intéresse, ou si vous avez besoin de fournir un CSS supplémentaire, vous pouvez le faire simplement en déposant une balise `<style>`quelque part dans votre présentation.

Il vous faudra une certaine connaissance du CSS pour peaufiner le style, mais l'apparence de la présentation elle-même devrait être satisfaisante en soi.

![presentations_styles.png](../img/presentations_styles.png)

### Images

L'un des grands inconvénients de ces présentations HTML est que les images ne peuvent pas être contenues dans le fichier résultant. (Pour être correct, elles _peuvent_ être incluses, mais cela augmenterait la taille du fichier de la taille de toutes les images multipliée par le facteur 1,3).

Vous devez donc décider où placer les images. Il y a en gros trois méthodes possibles.

1. Créez un répertoire dédié aux images, par exemple `img`, dans le répertoire avec votre fichier markdown. Ensuite, liez toutes les images en utilisant les chemins relatifs (`img/my-image.jpg`). Lorsque vous exportez votre fichier, assurez-vous que la présentation se trouve au même endroit par rapport au répertoire de l'image que votre fichier source.
2. Il suffit de placer toutes les images dans le même répertoire que votre fichier de présentation. Ensuite, il devrait suffire de les relier à l'aide de leur nom de fichier.
3. Téléchargez-les vers le web, par exemple vers un service d'hébergement d'images, et liez leurs URL. Seul inconvénient : Vous devez disposer d'une connexion Internet fonctionnelle à l'endroit où vous faites votre présentation.

Une règle empirique est la suivante : si Zettlr affiche correctement vos images, votre présentation le fera aussi, à condition que vous vous assuriez que la présentation se trouve _exactement_ dans le même répertoire que votre fichier source relatif aux images.
