# A Note on Security

The Markdown format is in general a very safe way to write. Unlike Word documents which can only be safely opened in a restricted mode, Markdown documents can be viewed with much less caution.

Nevertheless, even Markdown documents can come with certain security implications. Such documents could contain malicious code that can put your safety at risk. Additionally, templates or other resources that you download from the internet could contain malicious code or even download viruses and malware onto your computer.

On this page, we outline the various ways in which working with Zettlr could expose you to potential security issues if you are not careful. If you follow the general security guidance in this document and be vigilant, you should always be on the safe side.

As a general note: Zettlr gives you large amounts of freedom when it comes to working with your Markdown files. Therefore, Zettlr's ability to execute arbitrary code while importing, viewing, and exporting Markdown documents is not a security flaw but a conscious design decision. If we prevented any arbitrary code from executing, working with Markdown and exporting your documents would constrain you unreasonably. To cite an old adage: “With great power comes great responsibility.”

!!! note

    Zettlr is constantly vetted by security researchers who audit the app for any ways in which malicious actors could execute code where you would not expect it. If we receive notification of such a security-critical issue, we will rectify the issue as soon as possible, and inform you on our social media channels. So please make sure to follow Zettlr on Mastodon or Bluesky, or join our Discord.

## Code Execution while Reading and Writing Markdown Documents

Markdown is a perfectly safe format because it consists only of source code. In other words, Markdown can be read as-is, just by taking notice of the various formatting characters contained in the document.

Sometimes, however, viewing plain Markdown text can become arduous. For example, when you proofread a text, you will want to read the descriptions of links, but not the actual links. Likewise, when you create a table, you oftentimes do not wish to see the many formatting characters but only the actual table contents.

Zettlr aims to make viewing and writing Markdown easier for you. For this, Zettlr needs to pre-render some elements in your documents. For example, pre-rendering images is very helpful. However, images can contain malicious code. A similar issue occurs with rendering tables in the Table Editor: each cell in the table could contain malicious HTML code that will be executed upon rendering it.

Therefore, many of the renderers that make Markdown readable can execute malicious code in documents and put your safety at risk.

If you only open files from sources you trust, this should not be an issue. However, if you frequently have to open Markdown documents from the internet or from sources you cannot fully trust, it may make sense to disable these renderers to ensure that no Markdown document with malicious code can harm you. Disabling these renderers will make your Markdown code a bit more difficult to read, but it will also prevent any malicious code from putting you in harm's way.

By disabling all renderers, Zettlr will not accidentally execute any unsafe code contained within Markdown files. You can quickly switch between Zettlr’s Preview mode and Zettlr’s raw mode using the statusbar toggle. Otherwise, you can use the corresponding setting.

!!! note

    This advice also applies to pasting something: As soon as you paste some text into a document with active preview mode, Zettlr will immediately attempt to render this. If this contains any harmful code, it would be immediately executed. So be vigilant when copying seemingly harmless text.

## Markdown Documents Downloaded from the Internet

One infamous attack vector is to distribute Markdown documents with malicious code. Therefore, the best bet is to never download Markdown documents from the internet.

If you have to download a Markdown file and doubt its safety, we recommend opening it with a regular text editor beforehand (for example, Notepad on Windows, TextEdit on macOS, or any of the various available Linux-based text editors) and remove any raw HTML and other unusual code from the file before opening it in Zettlr.

If you activate the raw mode, it is also safe to open such a document directly in Zettlr instead.

This way, even if there is a way for bad actors to compromise your computer via Zettlr that we do not yet know about (a so-called “zero day exploit”), it won't work because you removed the potentially harmful code beforehand.

!!! note

    **Rule of thumb**: If a Markdown document contains almost exclusively HTML code, this should raise your suspicion. Markdown syntax is not of much use for malicious actors, so they will try to inject their code with HTML instead.

## Templates Downloaded from the Internet

Another attack vector is to distribute malicious templates. During exports, you can specify templates that will be used to typeset your Markdown documents. These can be HTML-files, LaTeX-files, or even Word documents. All of these files can contain malicious code.

It is likely that at some point you wish to download a template in order to customize your exports. However, because of the ability to insert malicious code into templates, this can be an easy way for attackers to compromise your computer.

Since templates are not written in Markdown, we recommend caution when you download templates from the internet. Unlike Markdown documents, which can be displayed safely, this is much harder with templates.

If you really want to download a template from the internet, **make sure to have someone you trust with technical experience verify that the document is safe before you use it**!

!!! note

    **Rule of thumb**: Even if a colleague sends you a template, make sure to double-check it, since your colleague may have accidentally downloaded a harmful template and overlooked the malicious code.

## Code Execution During Import and Export

While you can prevent any code execution when reading and writing Markdown documents by disabling all renderers and switching to “raw” mode, it is impossible to prevent code execution during import and export. In order to properly import or export your files, Zettlr must allow code execution.

For example, if you include equations in your document and then export it to HTML, code is executed that will properly render these equations. Likewise, some templates may require code or resources from the internet to work properly.

Even if you do not download any additional templates, exporting and importing could still pose a security risk. Specifically, some of the standard templates that ship with Zettlr include online resources. While these are deemed safe, it could under some circumstances happen that malicious actors gain access to these online resources and inject harmful code.

This means that even when you export a Markdown document that you yourself created without any specific template, there is still a small chance that this could pose a security risk.

Imports and exports are always facilitated with the help of Pandoc. Pandoc itself has collected a set of security recommendations that we recommend you to read, understand, and follow to ensure you and your computer remain safe. [Read the Pandoc security note here](https://pandoc.org/MANUAL#a-note-on-security).

### Custom Export Commands

Zettlr allows you to specify arbitrary commands for exporting in the settings. This comes in handy when you, for example, use a pre-made Docker container that contains a specialized installation of Pandoc, or when you want to, e.g., upload the file somewhere. However, this means that you need to be able to trust whichever command you run. Never, under any circumstances, add or run a custom command in the settings which you do not fully trust.

!!! note

    **Rule of thumb**:  Always treat all exports and imports as potentially unsafe.
