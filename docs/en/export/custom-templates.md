# Custom Templates and Reference Documents

While the profiles that Zettlr ships with will be sufficient for many use-cases, you may either want or need to implement custom templates. This can mean to adapt one of the [many great LaTeX templates that others have created](https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends) to your needs and use it. Or, it can mean that you want to adapt an existing template for a conference or journal to prepare your paper for submission.

Regardless of what your use-case is, you will need to adapt an existing template to work with Pandoc.

!!! note

	We will be using two terms in this section: "template" and "reference document." A template is a file that contains Pandoc's template syntax to allow Pandoc to insert your Markdown documents into that template. A reference document is just that: a *reference* from which Pandoc can *copy* styles to populate a new file with.

    Almost all export formats use templates, with the exception being complex binary formats. Currently, this includes Word files, LibreOffice files, and Powerpoint presentations. Read more in Pandoc's [template documentation](https://pandoc.org/MANUAL.html#templates).

## About Custom Templates and Reference Documents

Templates and reference documents are what drive Pandoc’s exporting engine. Templates allow you to create complex and individual styles which will take your Markdown documents, and transform them into something beautiful. Reference documents work similarly, with a few more limitations in that they only support changing the styles of your content, not necessary the entire layout.

A **template** is any plain text source file that contains styling and layout directives, and some template directives. Pandoc will take such a template, convert your file to the correct target syntax, embed it in the template, and write the entire file to disk. To see what such a template looks like, [see Pandoc’s template directory](https://github.com/jgm/pandoc/tree/main/data/templates).

A **reference document** works slightly different from templates. A template lets you directly specify where you want which content from your Markdown document to end up at; a reference document does not. Instead, a reference document specifies some typesetting and styling rules, which Pandoc will copy over to a new document that forms the actual file that you will export.

In the following sections, we first describe the basic principles of templating, Pandoc's template syntax, and finally how reference documents work. We will use LaTeX as an example for how templating works, but the same principles apply to all other templates, such as HTML.

## Creating a Custom Template

Each custom template roughly consists of at least two, sometimes three files, which you need to create:

1. The template itself. Below, we will broadly introduce you into the basics of templating.
2. A profile that uses this template.
3. Optional: Especially if you define many custom variables for a template, it is a good idea to create a snippet to go alongside the template.

!!! tip

	For a full guide to taking an existing template, and adapting it for usage in Zettlr, see our [templating guide for journal submissions](../guides/journal-latex-template.md).

Let's write your first LaTeX template, which can be done directly in Zettlr. When complete, your template file will be passed to Zettlr, Citeproc (if applicable), Pandoc, and then finally LaTeX. 

First, create a new TeX file (“File” -> “New File,” or by right-clicking a folder). Ensure to use the filename extension `.tex`. Start writing your LaTeX template and then save your file.

![Creating a TeX file](../img/create_tex_file.png)

Zettlr will automatically switch code highlighting from Markdown to LaTeX, and a small `TeX` indicator will appear beneath the filename in the file list.

![How a TeX file looks in Zettlr](../img/zettlr_tex_file.png)

### Pandoc Templating Basics

You can use a lot of different variables in Pandoc templates, depending on your needs. The default templates of Pandoc already contain many useful variables which are documented there. However, you are free to not use variables which you deem not important, and you can even introduce your own variables using Pandoc’s templating engine. For example, let’s assume you want to add additional information to some, but not all of your exports. Then you could define a variable `my-variable` and define if in all YAML front matters where the exported files should contain that information:

```markdown
---
title: "My file title"
date: 2021-10-18
my-variable: "Some additional piece of information"
---
```

Inside your template, you would then need to do something with this variable:

```
$if(my-variable)$
This is some text that will only be contained if "my-variable" has been defined.

You can even insert the contents of the variable by typing $my-variable$.
$endif$
```

!!! note

    Note that this is just an example. A more full-fledged example that arguably drives the principle of variables to the max, see [this template for a curriculum vitae](https://github.com/nathanlesage/cv).

While many variables are optional, there is one Pandoc variable that needs to be present at all times:

```
$body$
```

Pandoc will replace this variable with the contents of your Markdown file(s). If you leave it out, your content will not appear in the output file.

### Ensuring Compatibility with Pandoc

One issue with templates and data is that Pandoc needs to sometimes make assumptions about how to represent the data in the target syntax. In order to ensure that everything works well, you need to make sure to include the following in any of your LaTeX templates:

```latex
$common.latex()$
```

This directive tells Pandoc to include some code that will ensure that your content will be exported without errors.

!!! warning

    With new Pandoc updates, the steps necessary to ensure your template works with Pandoc may change. Always refer to the [current default Pandoc LaTeX template](https://github.com/jgm/pandoc/blob/main/data/templates/default.latex) if something looks off.

### Create a Profile for Your Template

Once you have adapted your template to work with Pandoc, you will need to create a profile for it to work. To do so, open the assets manager with the keyboard shortcut <kbd>/Cmd/Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>,</kbd>, or the corresponding menu entry. Ensure you are in the “export” profiles, and search for the default XeLaTeX export profile.

Focus the filename text field, change the name to a recognizable new name, and click “Rename.” This will create a copy of the profile which you can now adapt. The only setting you definitely have to adapt is to set the `template` key. For example:

```yaml
# ... some settings
reader: markdown
writer: pdf
pdf-engine: xelatex
template: "/path/to/your/template.tex" # <-- new
# ... other settings
```

Surround the path to your template with quotation marks, just in case. Of course, depending on what is necessary to make the template work well, you may want to adapt further settings.

!!! danger

	As soon as you specify a `template` in a profile, do not specify a template in your project properties, and do not use this profile with a project that requires a custom template! If you specify a custom project template in the project properties, this will overwrite the template defined in your profile. That means that Zettlr will use the settings of your custom profile, but without the accompanying template, which will lead to unexpected results.

### Optional: Define a New Snippet for This Template

This step is optional for most templates, but becomes helpful if you have a template that defines many useful non-standard variables that you can use. By creating a new snippet that defines all possible new variables and provides some default values, you don’t have to remember all variables that you can use when exporting with your custom template.

For example, if you create a template for an application cover letter that lets you specify an address, a subject line, and various kinds of information, you may want to create a snippet similar to the following:

```yaml
---
fontsize: 12pt # Sets the font size
sans_style: ${1:true} # Allows switching between sans and serif style
author:
  # You may want to hard-code these variables
  firstname: ${2:First name}
  lastname: ${3:Last name}
  email: "${4:john.doe@example.com}"
subject: "$5"
to_address:
  - "${6:Name}"
  - "${7:Department}"
  - "${8:Institution/University}"
  - "${9:Street}"
  - "${10:Country}"
---
```

This allows you to use all the custom variables from your template. Ideally, you’d name the snippet something similar to your profile (and your template file!).

## Creating a Custom Reference Document

After having introduced templates, it is now time to introduce Pandoc's concept of **reference docs**.

### Creating a Reference Doc

If you're exporting to a format that requires a reference doc instead of a template for customization, such as Microsoft Word (`.docx`), you can do so by specifying a reference doc. This is simply an existing Word document that uses your preferred style presets (e.g., the fonts or other style attributes you've assigned to different elements, like `Title`, `Heading 1`, `Body Text`, etc.). When Zettlr exports your document to a `.docx` file, it will look at this reference doc to determine what styles to use.

If you're unsure how to define styles in your word processor, here are some handy guides for doing so in:

- [Microsoft Word](https://support.microsoft.com/en-us/office/customize-or-create-new-styles-d38d6e47-f6fc-48eb-a607-1eb120dec563)
- [Apple Pages](https://support.apple.com/guide/pages/intro-to-paragraph-styles-tanaa39b0aa3/mac)
- [LibreOffice Writer](https://help.libreoffice.org/latest/en-US/text/shared/01/styles.html?&DbPAR=SHARED&System=UNIX)
- [OnlyOffice Document Editor](https://helpcenter.onlyoffice.com/docs/userguides/document_editor/formattingpresets.aspx)
- [Google Docs](https://it.umn.edu/services-technologies/how-tos/google-docs-apply-modify-heading-styles)

If your word processor saves to the cloud—or if it saves by default in a format other than `.docx`—remember that once you've defined your styles you will need to export/save a _local_ copy of your document in `.docx` format.

### Customizing Pandoc's Default Reference Doc

The content of your reference doc does not matter, so long as it contains examples of the styles you're going to be using in the documents you author in Zettlr. If you need a place to start, though, you can begin by using Pandoc's custom reference doc. Pandoc allows you to export its reference doc (see below). This reference doc contains a sampling of the different text elements—headings, body text, captions, etc.—that Zettlr can export. Open the document in Microsoft Word or your favorite word processor, reformat each element as you see fit, and update the document styles accordingly. Remember to save the document as a `.docx` file when you're done.

To export a custom reference doc for any of the available formats, you can run one of the following commands. The “custom-reference” will become the new filename.

```bash
# Export the Word reference doc
pandoc -o custom-reference.docx --print-default-data-file reference.docx
# Export the OpenOffice/LibreOffice reference doc
pandoc -o custom-reference.odt --print-default-data-file reference.odt
# Export the PowerPoint reference doc
pandoc -o custom-reference.pptx --print-default-data-file reference.pptx
```

Then, you can open these files and adapt the styles as explained above.

!!! tip

    If you're using Microsoft Word as your word processor and you would like to export using Word's default style sheet, you can open the `custom-reference.docx` file in Word and select the down-pointing chevron (⌄) that appears next to the style palette. This will spawn a dropdown menu that includes a submenu titled "Manage Default Styles." Navigate to this submenu and choose "Reset Document to Word Default Styles." This will apply all of Microsoft Word's default styles to your reference doc.

![Menu location of the option to apply MS Word's default styles.](../img/word-default-styles.png)

### Creating a Custom Export Profile

Once you've created and saved your reference doc (or decided on an existing `docx` file that you'd like to use for this purpose), you'll need to point Zettlr to it. In Zettlr, open the Assets Manager. Under the “Exporting” tab, you'll see a “Microsoft Word” export profile.

Select it, and focus the filename text field. Change the name to another, recognizable name and click “Rename.” This will create a copy of this profile that you can adapt.

The one setting you must adjust is the “reference-doc” setting:

```yaml
reference-doc: /path/to/your/custom-reference.docx
```

You may change any additional settings as you wish and as is necessary for your custom export.

!!! note

	Windows users need to make sure of two things. First, be sure to use forward slashes (`/`) rather than backslashes (`\`) when specifying the location of your reference doc. Windows users should also place the file location in quotes, like so:
    
    ```
	reference-doc: "C:/Users/user/Documents/Custom Templates/custom-reference.docx"
	```

## Using Your Custom Template

To use your custom template, simply select the corresponding profile that you have created when you export an individual file, or select the profile in your project properties. Remember that for projects you should not specify a custom template if you plan to use a special export profile that comes with its own template.