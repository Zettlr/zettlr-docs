# Custom Templates

While [Custom CSS](../core/custom-css.md) is a great way to make Zettlr your own through appearance, it doesn't make your papers truly yours. Once you are done with writing, aesthetics matter just as much as the content. Your ideas are worth a lot on their own, but without great design and a typography that invites you to read, your ideas will suffer.

You want your own font, a good line spacing and maybe even some colours. While the default templates of Zettlr do a good job, they are certainly not the most beautiful ones. And, oh boy, [there are so good examples](https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends).

Luckily, one of the core principles of Zettlr's philosophy is to not only give you the most amount of freedom to use tools like Pandoc and LaTeX to your benefit, it also makes it work _well_ for you. This page is meant to give you a headstart of using custom LaTeX templates for your work, so that both your writing and the final product is fit for showcasing!

> Note that a few export formats, such as Microsoft Word or LibreOffice, do not use templates but "reference documents". Read below on the differences.

## Preconsiderations

Before getting started with writing your own, custom LaTeX templates, we should spend some words on what templates are and some specifics of the templates that Pandoc uses. In general, a template is a blueprint that can be filled with your text to make sure that several different Markdown documents receive the same layout. As such, they require **variables**, and Pandoc has a pretty sophisticated templating system built in.

### The `$body$` variable

The most important variable within templates is the `$body$`-variable. That one will be replaced with the processed file contents on export. The `$body$`-variable should occur where the text should end up. For example, if you use an HTML template that uses some containers, the `$body$` variable could, for example, be put into an `<article>`-tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>$title$</title>
</head>
<body>
  <div class="container">
    <header><!-- Here you could put a small navigation, for example --></header>

    <article>
      $body$
    </article>
  </div>
</body>
</html>
```

Here you can also see a different variable, `$title$`, which will be replaced with your YAML frontmatter's `title`-property, or the filename if there is no such title defined.

The body's content, however, will be pre-processed by Pandoc using internal elements. That means that Pandoc will use specific LaTeX commands or HTML tags which you need to know, for example in order to style the document.

> It makes sense to export a document to LaTeX instead of PDF to find out about which LaTeX commands Pandoc requires, and to export a test-HTML version to see which of your elements end up becoming certain tags.

### Metadata Variables and Syntax

Since Pandoc accepts YAML frontmatters and allows you to set further options using defaults files, there are many more variables which you can use in your templates, including `if`-statements allowing to check for certain conditions. There are many pre-defined variables that you can use in the built-in templates, but if you define your own templates, you can also define custom ones.

Metadata variables must be explicitly set to use them — either in YAML frontmatters or in defaults files. For example, you have to name authors in your YAML frontmatter in order to have the `$author$` variable available. You can check if the `$author$` variable is set by using the pattern `$if(author)$`, `$else$`, and `$endif$`. A few metadata variables will be set even if you did not explicitly define them, for example the `$title$`-variable, since that one is required by many formats.

> Note that you can also make use of arbitrary metadata variables in your templates. For example, you could introduce a variable to toggle if a certain HTML-element should be used, or not, and then place this variable in the YAML frontmatters to control that element.

Pandoc's templating engine is pretty powerful, so we can not fully dive into the templating syntax. The [Pandoc documentation](https://pandoc.org/MANUAL.html#templates) has a long section on that, including all supported variables for the built-in templates.

### Templates versus "Reference Docs"

A final preconsideration is the differentiation between templates and reference documents. Most file formats are text-based, so these will use a template (e.g., HTML or LaTeX). A few, however, such as Word and LibreOffice, require so-called "reference documents". A reference document is basically a Word or LibreOffice file that you can open and modify its styles (for example, for headings level 1, or paragraphs). Then, you can save that and tell Pandoc to use the reference document to export your file. Inside these reference documents, you can not make use of metadata variables, unfortunately.

> For more information on reference documents, see the section on [`--reference-doc` in the Pandoc manual](https://pandoc.org/MANUAL.html#options-affecting-specific-writers).

## Getting Started with Templating

Now it's time to get to building a template! You can either use an external editor to write your template or use Zettlr itself. Zettlr allows you to write LaTeX templates directly inside it, so you don't have to use an external editor for that.

![Create TeX-Files by appending the appropriate extension](../img/create_tex_file.png)

If you create a new file, but **provide `.tex` as the file extension**, Zettlr will not create a Markdown file but an actual LaTeX file! This file will be indicated with a small `TeX` indicator in the file list (if file meta is turned on) and can be edited from within Zettlr. Hooray!

![Zettlr with a TeX file open](../img/zettlt_tex_file.png)

Zettlr will automatically detect if it's a LaTeX file and even switch the code highlighting from Markdown to LaTeX to help you write the file.

## Necessary Contents

All of your templates need two specific things. First, as we have already said, you must include the `$body$`-variable so that your processed file contents end up inside the file and are not dumped into oblivion.

The second part which all of your templates need is the boilerplate required to make your file compile. Especially LaTeX templates require a large amount of directives to work at all. Always remember that Pandoc will make use of LaTeX commands internally which must be defined in the head section of the template.

> Especially for LaTeX, it is best to start with an already existing template and modify it until it looks like you want.

## Final Thoughts

Zettlr strives to give its users full command over what they can do with their files. What we've outlined on this page is only the start. We've not tried to go crazy ourselves, but you can really do stuff. How do you use Zettlr's possibilities to do weird things? Tell us on [Twitter](https://www.twitter.com/Zettlr), the [Forum](https://forum.zettlr.com/), or on [Reddit](https://www.reddit.com/r/Zettlr)!
