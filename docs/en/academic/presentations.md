# Presentations

Zettlr is able to export your Markdown files directly as presentation files using the [reveal.js](https://revealjs.com/#/)-framework. `reveal.js` is a lightweight solution for creating presentations using plain HTML and JavaScript. Therefore, these presentations can be shown on _all_ computers that run a browser — nowadays this means: they run on _every_ computer.

A Markdown document that should be compiled into a presentation has a slightly different structure than other Markdown documents. On this page, we guide you to creating such a presentation.

Zettlr already ships with a profile that allows you to export files as presentations. You can customize it similarly to all other profiles to your preferences. You can find a documentation on settings particular to presentations [in the Pandoc documentation](https://pandoc.org/MANUAL.html#slide-shows).

## Creating slides

You can create new slides in two ways. First, each heading level 1 will begin a new slide and also act as the title of the slide. But in case the heading level 1 is too big for your taste, or you simply don't want a title on that slide, you can also delimit slides by using Markdown dividers (either `***` or `---`).

Everything that follows the heading or the divider will end up being the content of the slides. You do not have to explicitly "end" the last slide with a divider.

Inside the slides, you can use Markdown elements and HTML code for more versatility. They will be rendered as you would expect them. If you add footnotes, they will be placed on their own, respective slide at the end.

## Advanced Tools

You can use CSS classes to tell the presentation that certain elements should be triggered before forwarding the presentation. These are called "fragments". Due to limitations in Pandoc's engine, you'll have to use plain HTML to achieve this. Consider, for instance, the HTML code from the demo presentation:

```html
<ul>
    <li class="fragment fade-in">This item will fade in.</li>
    <li class="fragment highlight-blue">This will be highlighted blue.</li>
    <li class="fragment highlight-red">All available transitions are documented [here](https://github.com/hakimel/reveal.js/#fragments).</li>
</ul>
```

This will create a list with three items. All items are "fragments", which means that by pressing the shortcut for the next slide, the first will `fade-in`, as the class says. On the next press of the right arrow key, the second item will be highlighted in blue color. The third press of the right arrow key will highlight the last item red. And on the fourth press of the arrow key the next slide will be shown.

## Choosing a Theme

By default, Zettlr will use the black theme for your presentation. However, there are several themes available which you can choose with the `theme` frontmatter variable.

The available themes are:

* `beige`
* `black` (the default, in this case you can omit the `theme` variable)
* `blood`
* `league`
* `moon`
* `night`
* `serif`
* `simple`
* `sky`
* `solarized`
* `white`

## Image Handling

One of the drawbacks of such HTML presentations is that images are by default not included in the file. That means: If you move the resulting presentation around on your computer, any images that are in your presentation will break.

There is a workaround, however. Image files and other assets can be incorporated in the resulting HTML file so that the file is truly self-contained and can be moved around without anything breaking.

To achieve this you can use two variables in the profile:

1. Set `standalone: true` to ensure that the resulting file will be a proper HTML file
2. Set `embed-resources: true` to ensure that images, JavaScript, and styles are all included in the resulting file and therefore move around alongside the presentation file.

> Note that embedding images can increase the size of the presentation by a large margin. Every image that is included in the file will increase in size by approximately 30 percent. In other words, a presentation that includes a 1MB image will increase in size by 1.3MB.
