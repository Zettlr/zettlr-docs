# Citing with Zettlr

Starting with version `1.0.0`, it's possible to cite sources directly using Zettlr. This feature makes writing academic papers a lot easier than in the past, because you don't need to circumvent the Zettlr export function to actually cite academic papers anymore!

Citing in Zettlr is done using `citeproc-js`, a library that works exactly like, for instance, pandoc's citeproc-engine, or Zotero. So what you will be seeing in Zettlr matches what Zotero's Word or LibreOffice plugins generate. Zettlr's citation engine is composed of three components: A CSL JSON or BibTex library which contains all items that can be cited, optionally a CSL Stylesheet which can alter Zettlr's default citation style (which is the [American Psychological Association's 6th edition](https://www.apastyle.org/manual/index), short: APA), and a preview engine. This guide will help you enable citations and produce beautifully looking files (not just PDF!) that contain correct and consistent citations.

> Beginning from `1.3.0`, you can also use BibTex libraries to cite.

## Enabling Citations in Zettlr

There are two different engines that belong to the realm of citing: the previews (citations can be previewed just as images or links) and the actual process of generating citations (which happens only on export). Both of these functions are triggered by selecting a citation library that contains references. Without such a library, Zettlr will still "preview" citations (so that you can see what will trigger pandoc's citeproc), but Zettlr won't replace the citation's contents with a generated citation. Also, if you do not specify such a library, Zettlr will _not_ run Pandoc with its citeproc-engine, and therefore will not parse the citations.

So the first step is to create such a file. Zotero is the recommended application for managing your library, so this tutorial will assume you use Zotero. If you use another program, please check out how to export from your software to the CSL JSON format.

> If you use Mendeley, Citavi, or any other references management software that does not export to CSL JSON, you can simply use BibTex-files. They will work the same way as CSL JSON files.

### Step 1: Install BetterBibTex

The first step is to install [the BetterBibTex-plugin for Zotero](https://github.com/retorquere/zotero-better-bibtex/releases/latest). This plugin's main benefit is that it keeps your citation IDs unique throughout your entire library. Each citation item has its own unique ID. This is necessary so that when you, for instance, realise that the publication date has been saved wrong, you can easily change it in Zotero and afterwards citeproc will use the corrected information. If you do not use BetterBibTex, it may always happen that an ID is issued multiple times, which would either generate errors (the good way, because you know there's something wrong) or simply use the first item that matches this ID (the bad way, because this way you'd have to be lucky to spot the wrong citation after export).

After you've installed BetterBibTex, you may want to play around a little bit with the settings (for instance in how the IDs are generated).

> **Tip**: BetterBibTex automatically generates unique keys using an algorithm that you can customise. For most part, it makes use of the established [JabRef Patterns](http://help.jabref.org/en/BibtexKeyPatterns) but extends them significantly. It will even make sure that each entry is unique by optionally adding a suffix to publications which yield the same keys (e.g. you'll have something like `Harvey2005a`, `Harvey2005b`, `Harvey2005c`, and so forth). You can find [all abilities of BetterBibTex in the plugin's extensive documentation](https://retorque.re/zotero-better-bibtex/citation-keys/).

### Step 2: Export your library

The next step is to actually export your library. Zotero's task is to manage your references, but to cite them is another task, which is done by citeproc. And citeproc needs a separate file for that.

To export such a library that both Zettlr and pandoc's citeproc can use, first select the collection you want to export in the left sidebar. To always have all your items at your disposal and to prevent having to export multiple different libraries, you can select your entire library. (_As a measure: We've run tests with a library containing about 700 items, and we have not experienced any performance issues._)

![Export your Library as Better CSL JSON](../img/export-to-csl-json.png)

Next, click on `File` and select `Export library …`. As the format, select `Better CSL JSON` (if you opted against installing BetterBibTex you may choose `CSL JSON`). If you check the checkbox labeled "Keep updated", BetterBibTex will make sure that every change in Zotero will automatically be exported to the file, keeping it in sync with Zotero (and, therefore, transmit your changes automatically to Zettlr, which in turn will always cite correctly).

If you ticked the checkbox, you can check the status of the library file by opening the Zotero Preferences, selecting the `BetterBibTex`-tab, and selecting `Automatic Export`, which allows you to further finetune what is exported, and when.

### Step 3: Open your library in Zettlr

Now it is time to import your library to Zettlr. To do so, simply open Zettlr's preferences, go to the `Export`-tab and click the small folder-icon right to the `Citation Database`-input field. A dialog will appear that lets you navigate to your database file. Select it, save the preferences and Zettlr will automatically load the database. Now you are ready to cite!

![Point Zettlr to your database file](../img/settings_export.png)

## Citing in Zettlr

Citing in Zettlr is very easy. Zettlr supports pandoc's citeproc-syntax for writing citations, so you'll have two options on how to write citations. First, you can simply throw a single identifier somewhere in your text to simply render a citation for this key. It should look like this: `@Harvey2005a`. All citation keys begin with an `@` followed by the citation key.

> Zettlr has an autocomplete-feature that will prompt you with a selection of all available citation keys as soon as you type an `@`-character. This is a first check if you're using the correct ID: If Zettlr doesn't offer you anything, the ID has probably not been found in the library file.

But normally you'll want to be somewhat more specific, add a certain page range or something like that to your citation. That is what the more extended square-bracket citation is for. To cite in this way simply use square brackets. A citation with a so-called prefix and a page-range would look like this:

`[See @Harvey2005a, 45-51]`

To cite multiple authors, simply divide the blocks with semicolons:

`[See @Harvey2005a, 45-51; also @Ciepley2007, 8-9]`

For more information on how to use citations in line with pandoc's citeproc engine, [please refer to the guide](http://pandoc.org/demo/example19/Extension-citations.html).

> **Please note** that Zettlr's citeproc-engine is **only for preview purposes**. For simplicity reasons, Zettlr does not perfectly parse all citations and will therefore lack some precision. You can be sure that pandoc's citeproc will do the job correctly on export. Therefore, the preview citations are **only to check that your citations are detected correctly so you won't have missing citations on export**.

## Checking the references

After you're done citing and want to check that you've cited everything you planned to, you can open the `Attachment Sidebar` (Shortcut: `Ctrl/Cmd+3`). Beneath all files that are in your currently selected directory, Zettlr will display a list of all references it has found in your current file. If something's missing from there, it's probably not been cited in your file.

![References in the Attachment Pane](../img/attachment-pane-references.png)

## Changing the citation style

Internally, Zettlr will always only use the APA-style to generate citations. Therefore, your previewed citations will always be "in-text," and never in footnote-style. This is meant as a convenience for you to simply see that everything works out.

But of course you can also use different citation styles, depending on either the journal requirements for which you are writing, or your personal preferences. To change the style in which pandoc's citeproc will render your citations, you'll need to download the respective CSL-file. A very good starting point is the [Zotero style repository](https://www.zotero.org/styles). There you can search for specific citation styles, preview them and download them.

You can point Zettlr to such CSL-files at two obvious points. First in the general preferences. In the `Export`-tab, beneath the field for your citation database file, you can select your preferred CSL-style which will then be used for all single-page exports that you export using the toolbar button.

But obviously, for projects you may want to use a different CSL-style. Therefore, if you open any project's preferences, you can select a CSL-file as well. The project will then use this on export.

## Formatting the List of References

Of course, as soon as you cite reference works in your files, you'll want the references to be formatted neatly. If you export to Word or LibreOffice, you can change the respective formatting styles as you edit your file before sending it out. But as soon as you export to PDF, this won't be possible. And as `pandoc-citeproc` simply glues all your references to the end of the document with no formatting whatsoever, you'll need to perform a little trick to make the references list look nicely.

LaTeX uses lengths to determine the overall measurements of the exported PDF. These lengths are normally set globally, but can be transformed during the course of the source file. One of these lengths is `parindent`, which controls the hanging indent of all paragraphs. There are additional lengths for when paragraphs follow a heading, for example, but we won't be concerned with these for now.

The `parindent`-variable can be set using Zettlr's PDF-options, but it will only be set globally for all paragraphs. As the references are also formatted using general paragraph styles, they will be indented in the same manner as all other paragraphs. But there's a small trick you can use to make the bibliography look nice: simply overwrite the paragraph lengths _after_ your document, that is: after the heading `## References` (or however you call it in your file).

Simply re-set them to what looks nicely to you. The following code snippet gives you an example:

```latex
\setlength{\parindent}{-1cm} % Negative hanging indent
\setlength{\leftskip}{0.5cm} % Overall indentation
\setlength{\parskip}{0.1cm} % Spacing between paragraphs
```

The above example would render the bibliography with a negative indentation of minus one centimetre. Additionally it'll apply an overall indentation of half a centimetre (relative to the page margins, so if your left page margin is set to 3 centimetres, the bibliography paragraphs will be offset 3.5 centimetres as opposed to the normal paragraphs, which are offset only 3 centimetres). The last value (`parskip`) controls the spacing _between_ paragraphs, so each one will be 10 millimetres away from each other.

Simply start from there, maybe search for more lengths to tweak and adjust these lengths to your liking.
