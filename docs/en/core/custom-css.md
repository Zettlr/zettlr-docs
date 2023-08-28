# Custom CSS

> Custom CSS is a feature for advanced users. There is no official support for customizations, and you perform any customizations at your own risk. In case something goes wrong, you can simply remove the `custom.css` from the Zettlr data directory to reset the custom CSS again.

It is possible to use custom CSS ([Cascading Style Sheets](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)) to modify the complete appearance of the app. You can find the Custom CSS editor in the [assets manager](./assets-manager.md).

If you are unfamiliar with CSS, but don't want to simply copy & paste the guides on this page, you may choose to follow a short [tutorial on CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS). There are many on the internet, so a quick Google search can also provide you with video tutorials, if you prefer those.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QcJGI_3adhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Writing CSS for Zettlr

The styles of Zettlr are divided into both geometry and the actual theme, so you may want to stick with only changing the design of elements _without_ changing **any** geometry. Playing around with the geometry may be fun, but it may yield completely random behaviour, as some parts of the app depend upon the correct sizes of elements. In case you made a mistake, don't worry: Simply remove the `custom.css` file from the data directory of Zettlr. You can find the data directory of your own system by looking at the paths provided in [the setup guide](../install.md).

Classes and IDs in Zettlr are always namespaced to the respective components (unless they're global), so to really override a rule you will have to use the complete namespace (you can also use the `!important` override rule, but this is widely regarded as bad practice).

Everything is always namespaced to the `body`, which has a class `.dark` if the app is currently in dark mode. So to make sure a certain rule only applies while the app is in dark mode, make sure to prefix it with `body.dark`!

## Tips for finding selectors

Zettlr's styles are subject to constant changes. While they should remain fairly stable, changes can be introduced in any version, and therefore, instead of providing you with ready-made examples, this page covers how you can find the correct selectors easily.

First of all, make sure to enable the debug mode in the advanced [preferences](../reference/settings.md) in order to enable the Develop menu. Next, open the developer tools from within this menu and make sure to select the "Elements" tab.

![Zettlr with the developer tools open](../img/zettlr_developer_tools.png)

Then click the arrow in the top-left corner of the developer tools. Now you can click any element in the application to focus it in the developer tools. In the bottom area of the developer tools, you will then see the CSS directives used to style all elements of this particular shape.

![The CSS directives in the developer tools](../img/zettlr_developer_tools_css.png)

The top rules always override the bottom rules, so what you are interested in is the following directive:

```css
body .cm-quote, body .cm-link, body .cm-strong, body .cm-em {
    color: var(--c-primary);
}
```

This is the selector you want to copy over to your custom CSS dialog and style to your liking. As you can see, it gives blockquotes, links, bold and italic text the primary color of the theme.

## CSS Code Snippets

### Using a Custom Font with Zettlr

In case you do not like the default font delivered with Zettlr, or need to change it, simply paste the following code snippet into the custom CSS editor. Replace `your-font-name` with the **full name** of the font you want to use for Zettlr. Please replace `placeholder` according to the font:

- In case you want to use a **serif** font, such as Times New Roman, or Georgia, please use `serif`
- In case your font is **sans serif**, such as Arial or Helvetica, please use `sans-serif`
- In case you want to switch to the classic **monospace**, please use the placeholder `monospace`

The placeholder will make sure that even if your font cannot be found, an equivalent font will be used. It serves as a fallback. Also, if your font name contains spaces, make sure to surround it with quotation marks, e.g., `"Times New Roman"`.

```css
body #editor .CodeMirror {
    font-family: '<your-font-name here>', <placeholder>;
}
```

### Custom Background Images

With the following code, you can make your editor have a different background image everytime you start it. The images are taken from Unsplash.com, a nice site with free photos. It uses the `Source API`, which will simply spit out a different image every time the URL is visited. You can test it out by simply [visiting the page and refreshing a few times](https://source.unsplash.com/random)! Please refer to the [Unsplash Source API reference](https://source.unsplash.com/) for more options (such as using an image of the day).

> You can also use a local image as a background image by replacing the corresponding line by `background-image: url('file:////absolute/path/to/your/file.jpg');`

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

![A preview of a Zettlr installation using above snippet](../img/custom_css_unsplash.png)

### Visualising Line Endings

In case you want to see where your linefeeds are, you can display the pilcrow symbol (¶) at the end of your lines by using the following Custom CSS:

```css
.CodeMirror-line:not(:last-child)::after {
  content: "¶";
  color: #666;
}
```

![A preview of Zettlr using above snippet](../img/custom_css_pilcrow.png)

### Set a maximum width for the text

If you have a large screen, you may find that lines of your text are very long.
If you wish to have shorter lines in the editor, with margins on both sides, you can use the following CSS snippet:

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

![A preview of Zettlr using above snippet](../img/custom_css_maxwidth.png)

For the distraction free mode, the CSS snippet needs to be modified as follows:

```css
#editor.fullscreen {
  --side-margin-fullscreen: calc( 50vw - 30em ); 
}
  
#editor.fullscreen .CodeMirror-fullscreen {
  margin-left: var(--side-margin-fullscreen) !important;
}
    
#editor.fullscreen .CodeMirror-fullscreen .CodeMirror-scroll { 
  padding-right: var(--side-margin-fullscreen) !important; 
}
```

By adjusting the calc functions for the two different modes, the same line width can be achieved with and without the file manager/sidebar. 

### Change the Active Line Styling in Typewriter Mode

You can change the styling of the active line in Typewriter mode. Replace `top-border-hex-code`, `bottom-border-hex-code` and `background-hex-code` in the CSS snippets below with your preferred Hex colour codes, which you can choose from a website such as [HTML Color Codes](https://htmlcolorcodes.com/). You may want to have different colour styling for light and dark mode.

*Light mode*

```css
body #editor .CodeMirror .CodeMirror-linebackground.typewriter-active-line, body .quicklook .body .CodeMirror .CodeMirror-linebackground.typewriter-active-line, body .dialog .CodeMirror .CodeMirror-linebackground.typewriter-active-line {
  border-top: 1px solid <top-border-hex-code>;
  border-bottom: 1px solid <bottom-border-hex-code>;
  background-color: <background-hex-code>;
}
```

*Dark mode*

```css
body.dark #editor .CodeMirror .CodeMirror-linebackground.typewriter-active-line, body.dark .quicklook .body .CodeMirror .CodeMirror-linebackground.typewriter-active-line, body.dark .dialog .CodeMirror .CodeMirror-linebackground.typewriter-active-line {
  border-top: 1px solid <top-border-hex-code>;
  border-bottom: 1px solid <bottom-border-hex-code>;
  background-color: <background-hex-code>;
}
```

### Individual Header Styles

```css
/* header h1, h2: smaller size */
#editor .heading-tag{
  font-size:.6em
}

/* header ###: color and font */
body #editor .CodeMirror .cm-formatting-header-1, body #editor .CodeMirror .cm-formatting-header-2, body #editor .CodeMirror .cm-formatting-header-3, body #editor .CodeMirror .cm-formatting-header-4, body #editor .CodeMirror .cm-formatting-header-5, body #editor .CodeMirror .cm-formatting-header-6, body #editor .CodeMirror .cm-url {
  color: rgb(136, 168, 210, 0.9);
  letter-spacing: -0.5px;
  font-family: 'PlayfairDisplay-regular';

/* header text: formatting and color */
.cm-header{
  font-family: 'Lora-medium', serif;
  line-height: 110%;
  }

#editor .cm-header-1{
  color: #ef6fab; 
  font-size:36px; 
  font-weight:500}

#editor .cm-header-2{
  color: #9781cf;
  font-size:28px;
  font-weight: 400;
}
#editor .cm-header-3{
  color: #39a2bd; 
  font-size:24px;
  font-weight: 400;
  }

#editor .cm-header-4{
  color: #64a08f;
  font-size:20px;
  font-weight: 400;
}

#editor .cm-header-5 {
  color: #7c90ab;
  font-size:18px;
  font-weight: 400
}

#editor .cm-header-6 {
  color: #987CAB;
  font-size:16px;
  font-weight: 400
}

```

#### Toggle marker for collapsing headers

This section deals with the formatting of the triangle and ellipses markers for opening and collapsing Headers. 


```css
/* color for toggle triangle */
body #editor .CodeMirror .CodeMirror-guttermarker-subtle {
    color: rgb(136, 168, 210, 1);
}

/* toggle when collapsed: add rounded box */
body #editor .CodeMirror .CodeMirror-foldgutter-folded {
  background-color: rgba(248, 245, 234, 0.2);
  border: 1px solid rgb(136, 168, 210, 0.2);}

/* ... on right of header when folded: rounded box */
body #editor .CodeMirror .CodeMirror-foldmarker {    
    background-color: rgba(248, 245, 234, 0.2) ;
    color: var(--grey-1);
    border-radius: 6px;
    border: 1px solid rgb(136, 168, 210, 0.2);
    
 ```
 

### Other elements

Highlight, comments, inline code, code blocks, block quote, citation

```css
/* highlight color: light green */
body #editor .CodeMirror .cm-highlight {
  background-color: rgba(179,242,171, 0.5); !important}
}

/* comments & inline code: pink text with rounded box */
 body #editor .CodeMirror .cm-comment:not(.cm-formatting):not(.cm-fenced-code)  {
   background-color: rgba(177, 234, 252,0); 
   color: #eb569c; /* pink */
   font-weight: 500;
   border-radius: 0px; /*1st and last child */
   border:0px solid #eb569c;
}

/* comment border: rounded edges */
body #editor .CodeMirror .cm-comment:not(.cm-formatting):not(.cm-fenced-code):first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
body #editor .CodeMirror .cm-comment:not(.cm-formatting):not(.cm-fenced-code):last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px; 
}

/* code block background: light purple/blue */
body #editor .CodeMirror .code-block-line {
  background-color: rgba(172,200,255,0.3)}

/* code block text: purple text */
body #editor .CodeMirror .cm-fenced-code {
  color: rgba(60, 65, 184, 0.7); !important}

/* block quote background color: grey purple */  
body #editor .CodeMirror .cm-quote, body #editor .CodeMirror .cm-quote-1{
  background-color: rgba(172,200,229,0.4);
}

/* citation color: grey purple */
body #editor .CodeMirror .citeproc-citation{
  background-color: rgba(172,200,229,0.4);
  border-radius:12px;
}

```
#### Tags

```css
/* tags: rounded box */
body #editor .CodeMirror .cm-zkn-tag{
  border:1.5px outset rgb(136, 168, 210, 0.3);
  border-radius: 10px;
  padding-left:4px;
  padding-right:5px;
  font-size: 16px;
  font-weight:200;
  font-family: 'SourceCodePro', monospace;
  letter-spacing: 0.4px;
  color: rgb( 83, 116, 155, 0.9);
  background-color: rgba(244, 254, 232,0.2)
  
}
```

Custom colors for custom tags. You can adjust by inserting the name of your tag in `.cm-zkn-tag-[]`
```css
/* custom tag colors */
body #editor .CodeMirror .cm-zkn-tag-current {
   /* Tags: current */
   background-color: rgb(235,86,156,0.8);
   color: rgba(234, 234, 252,1)
}

body #editor .CodeMirror .cm-zkn-tag-done {
   /* Tags: done */
   background-color: rgb(62, 162, 83,0.7);
   color: rgba(234, 234, 252,1)
}

```
