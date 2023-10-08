# Frequently Asked Questions

## I tried to install Zettlr on Windows, but there's a security warning saying I shouldn't install the app!

Zettlr uses code signing as recommended by both Microsoft and Apple to ensure that you install only trustworthy software. However, on Windows, an application needs a sufficiently large amount of installations in order to suppress this security warning. This "trust" is assigned to a code signing certificate, not the application itself. As Zettlr uses private-issued certificates, these have a limited lifetime. The current certificate is valid until 2025, after which Zettlr will be signed using a new certificate which has to go through the whole process once again. As long as you download Zettlr either [from our homepage](https://www.zettlr.com/download) or from the [GitHub releases page](https://github.com/Zettlr/Zettlr/releases) (both are the same files) you can safely install the application and dismiss the warning.

## I cannot dismiss the security warning on Windows and therefore cannot install the app!

In many companies the IT department puts restrictions in place so that you cannot dismiss a security warning on your own and therefore cannot install the app. If you work in such a restricted environment, it may be best to just talk to your IT department and ask them to whitelist Zettlr so that you (or your admins) can install the app. If they have questions regarding the origins and/or trustworthyness, it may be best to point them [to Zettlr's GitHub repository](https://github.com/Zettlr/Zettlr).

## macOS asks me whether I want to install "XCode Commandline tools" when I start Zettlr

Zettlr offers some basic `git` functionality, and for that must check whether `git` is installed on the computer. While on Windows and Linux, this is a simple check during startup, macOS will notice that Zettlr is interested in the command and, if `git` is not yet installed, offer the installation of the "XCode commandline tools" that, among other things, includes `git`. There is no way for us to reliably suppress this message, so you'll either need to decline everytime you open Zettlr, or simply install the command line tools. Installing the commandline tools is a safe procedure and you won't notice that they are installed. They could potentially even bring benefits. See [this Apple discussion thread on what the commandline tools are](https://developer.apple.com/forums/thread/13781). See also the [related issue on GitHub](https://github.com/Zettlr/Zettlr/issues/4709).

## I removed the tutorial folder from my computer, and now I cannot get it back!

When Zettlr detects it is being run for the very first time on a computer, it will automatically copy a folder with some Markdown files into your Documents-folder. These Markdown files contain some basic introduction on how to use Zettlr. However, they will only be copied once. In order to get these files if you later realised that you would like to revisit the tutorial, you have two options:

* Rename or remove the `config.json`-file from your application data directory. If that file is not there, Zettlr will think it is being run for the first time and copy the tutorial again.
* Simply [download the folder directly from source](https://github.com/Zettlr/Zettlr/tree/develop/static/tutorial) (note that this location might change).

## Are there any plans of porting Zettlr to mobile phones and tables, for Android or iOS?

We are getting more and more requests for mobile versions of Zettlr. We are very happy that you like Zettlr enough to want it on all your devices, and we would love to fulfill your wish! Unfortunately, though, our resources are just enough to keep the development of Zettlr up and running, and adding more work is just not possible at the moment.

## What is Markdown?

Markdown is a simple markup language that enables you to write text just as complex as using standard office software, but with much less clutter. Instead of having to manually select all formatting options, in Markdown, typing a `#` suffices to indicate a heading! Want to hear more? Then head over to the [documentation on Markdown](markdown-basics.md)!

## I have a very strict character or word limit for a text, but Zettlr's character/word counts are off!

When writing text in Zettlr, you are writing *source code* that gets then exported into PDF, a Word document, or whatever format is required. During that export, the text will be "compiled", which means: citations are properly rendered, a list of references is added, bullet points will be converted to a proper list, etc. Zettlr itself only "sees" the source code and thus counts the characters that are present in your file, which will differ from the exported document.

The actual word count or character count in the final exported file therefore can vary based on many variables:

* The citation style you use — some are more verbose than others
* Some code may get removed entirely
* Some templates may generate title pages or tables of content, which increase the word/character count

Zettlr cannot account for all of these variables. Therefore, here are a few tips to help you hit the goal:

1. Most teachers won't care if you overshoot the mark by a few words or characters as long as it's reasonable.
2. If you have to submit something as PDF, nobody will sit down and actually count the visible characters or words.
3. If you for any reason cannot exceed the limit by even a single word or character, try to **undershoot** it, and export it when you're reaching the finish line to view the actual character or word count. After a few times, you will get a good gut feeling for how long the exported document will be based on Zettlr's word/character count.

## If I don't want to use Zettlr anymore, what would I need to do to switch programs?

Simply uninstall Zettlr and begin using another program of your choice. Zettlr does not mess with your files. If you have been using Projects or modified the directories, there will be small files named `.ztr-directory` present in some folders. To remove them, simply reset the sorting of directories to default, and remove all projects prior to uninstalling the app (or manually remove these files afterwards).

## I'm using Linux and deleting files doesn't move them to the trash!

Zettlr never completely removes your files. It always only moves them to the trash so in case you accidentally remove a file you need, you can always restore it. On macOS and Windows systems, the trash is activated by default, but on some Linux distributions, you need to activate the trash functionality manually. On Linux, Zettlr (to be more precise: the underlying Electron framework) makes use of the binary `gvfs-trash` to move files to the trash. To make use of this functionality, please make sure you have `gvfs-trash` installed! On Debian/Ubuntu you can do so by running the following code in a terminal:

```bash
$ sudo apt install gvfs-bin
```

!!! note

    If you do not want to use the trash functionality, you can also enable the setting in the advanced preferences telling Zettlr to terminally remove a file if moving it to the trash fails. Please note that this will remove files irreversibly!

## What is the correct URI formatting for Markdown links?

By default, Zettlr renders Markdown links in the format `[Your Link Text](your-link)` to be clickable (when holding down `Cmd` or `Ctrl`). However, Markdown links can point both to websites and to other files on your computer. You can omit a lot of information from your link, and Zettlr makes use of a heuristic to determine the information on its own, but it might infer false context for what you intend. Here's how it works:

- Links with all information present (a protocol and a fully qualified path) will not be altered. Examples: `file:///home/foo/documents/test.md` and `http://www.example.com/`.
- Relative links with the `file://`-protocol will be converted to absolute. Example: `file://./relative/file.md` will become `file:///home/foo/documents/relative/file.md`.
- Links without a protocol will be assumed to have `https://`. Example: `www.zettlr.com` will become `https://www.zettlr.com`.
- Absolute file paths, but without the `file://`-protocol will have that prefixed. Example: `/home/bar/documents/absolute.md` will become `file:///home/bar/documents/absolute.md`.
- Relative file paths with and without the relative-indicator (`./`) will be converted to absolute file paths. Example: `./more/relative.md` and `more/relative.md` will become `file:///home/foo/documents/more/relative.md`. **Exception**: They reside in the same folder: `file.extension` will in that case be treated like an URI (except the file is `.md`).

To sum up: If you worry about how your links are treated, be more explicit. Two general rules of thumb can be used to force Zettlr to treat a link as a file or web-link: Prepend a `./` to explicitly request a _file_ link, and append `/` to explicitly request a _web_ link.

## The internal links do not open the respective file!

In case the internal links used to interlink files don't work as expected, please make sure you've done the following things:

1. Is the link recognised? Such links are encapsulated by `[[` and `]]`. When Zettlr recognises an internal link, it will colour it and if you hover over it with your mouse cursor, a tooltip should show up that gives you some initial information on the file, or tell you that the given file has not been found.
2. Did you press the `Cmd` or `Ctrl` key while clicking on the link? Clicking with your mouse somewhere in the text means that you intend to edit the text, so you have to tell Zettlr that you actually want to follow the link.
3. Did you use a valid filename or ID? Zettlr only opens files that _exactly_ have the given ID or the given filename (case-insensitive). If nothing happens while clicking on the link, this surely means that a file with the given ID or filename does not exist in the system. Note that you must omit the file extension when creating a link. For example, to link to `my-file.md`, you only need to put `my-file` inside the brackets.
4. Is the file currently loaded into Zettlr? Internal linking only works if Zettlr has read in the file.

## I know LaTeX and want to use it inside my Markdown files as well. Is this possible?

Yes. Simply write your `LaTeX` statements where you want them. As soon as you export to PDF, Pandoc will take care of the rest and the statements will be interpreted by the PDF engine. Unfortunately, `LaTeX` syntax highlighting is not supported. Also, please note that Pandoc will clear all `LaTeX` blocks prior to exporting to anything other than PDF, which means that blocks within `\begin` and `\end`, for instance, will be missing completely from the final Office file. On HTML-export, all `LaTeX` blocks will be retained, but not converted to something else.

## I can't seem to align the text justified or right!

It's not a bug, it's a feature: Markdown does not have the respective formatting signs because text should always be justified or aligned left (for LTR languages) and therefore it does not belong to the set of necessary block formats Markdown offers. Yet, you can still use `LaTeX` commands to render them left or right. Simply enclose the text you want to align right or justify in `\begin{<option>}` and `\end{<option>}`, where `<option>` may either refer to `flushleft`, `flushright` or  put a `\justify` in front of a paragraph you want to be justified. [Learn more at sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

## In PDF output, I want certain headings to be unnumbered/not listed in the Table of Contents

This is a special feature of Pandoc. Add the special classes `-` (simply a minus) or `.unlisted` respectively. The minus prevents numbers, while “unlisted” prevents the heading to appear in the table of contents. Note that this only applies to PDF output.

Examples:

```markdown
# This heading will be unnumbered, but in the ToC {-}

# This heading will be numbered, but not in the ToC {.unlisted}

# This heading will both be unnumbered, and hidden from the ToC {- .unlisted}
```

!!! note

    Note that these brackets need to be the last thing on the line. Even comments afterward will break this behaviour.

## I want to use single line breaks and not create new paragraphs. When I simply hit Enter once, it removes the single line break!

To force Pandoc to render single line breaks as such, end your line with a backslash (`\`) or two spaces. The backslash as well as the two spaces will not be rendered in the exported file.

## Zettlr does not seem to find LaTeX, which is nonetheless installed!

This can happen in case your computer decided to install the software in a non-standard directory. Zettlr will try its best to locate the applications but may fail if they are buried somewhere. Make sure the xelatex binary is within your PATH.

## On Export to PDF, I constantly get error messages!

It might happen that you get certain errors when trying to export your files. There are two common types of errors, which you can solve by yourself.

The most common error looks like this:

**LaTeX Error: File \<some name\>.sty not found.**

This simply means that a certain package was not found (they end in `.sty`). On Windows, these packages should be installed automatically as soon as they are needed (a window might pop up asking you for confirmation); on macOS and Linux you simply need to run the command `tlmgr install <some name>`.

!!! note

    Note that some `.sty`-files are part of larger packages. The easiest way to find out which package to install, go to [the CTAN homepage](https://ctan.org/) and search for the package name (the file name without the `.sty`). You will then see in the "Contained in"-section the actual name of the package you have to install. Example: [The `footnote.sty`-package](https://ctan.org/pkg/footnote) is contained in the package `mdwtools`, so instead of running `tlmgr install footnote` you must run `tlmgr install mdwtools`.

In case of other errors, Zettlr enables you to copy and paste text from the error message, because in almost all cases, a short Google search leads to a solution. And if it doesn't the community can better help you if they see the error you are getting.

## I found a bug!

That's great news! Well, not great, but it's good that you found it! In this case please head over to [GitHub](https://github.com/Zettlr/Zettlr/) and open up an issue so that we know what's up and can work to resolve the bug.

## I have a feature request! / I have a suggestion for making a feature more efficient!

That's good to hear! We always depend on other people's experience with the app to improve its efficiency and its usability for different situations. In this case, please head over to [GitHub](https://github.com/Zettlr/Zettlr/) and open up an issue so that we can get right to it.

## What about my privacy? Does Zettlr transfer any data, or don't I have to worry?

Zettlr is privacy-first. It does not send any data, and it is fully functional offline. However, whenever you open Zettlr, or use the corresponding menu item, Zettlr will connect to the Zettlr-API to retrieve a list of all releases. This list is then used to determine whether or not you are using the newest release. During the connection, the Zettlr server will receive your IP-address, and this information stored for a maximum of 30 days (using logrotation), which is pretty common among servers. This information will never leave our server and will only be used during incidents to determine what happened. After the 30 days, the access will be removed from the server logs. We're Open Source, not Facebook.
