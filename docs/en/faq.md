# Frequently Asked Questions

## I tried to install Zettlr on Windows, but there's a security warning saying I shouldn't install the app!

Zettlr uses code signing as recommended by both Microsoft and Apple to ensure that you install only trustworthy software. However, on Windows, an application needs a sufficiently large amount of installations in order to suppress this security warning. This "trust" is assigned to a code signing certificate, not the application itself. As Zettlr uses private-issued certificates, these have a limited lifetime. The current certificate is valid until 2022, after which Zettlr will be signed using a new certificate which has to go through the whole process once again. As long as you download Zettlr either [from our homepage](https://www.zettlr.com/download) or from the [GitHub releases page](https://github.com/Zettlr/Zettlr/releases) (both are the same files) you can safely install the application and dismiss the warning.

## I cannot dismiss the security warning on Windows and therefore cannot install the app!

In many companies the IT department puts restrictions in place so that you cannot dismiss a security warning on your own and therefore cannot install the app. If you work in such a restricted environment, it may be best to just talk to your IT department and ask them to whitelist Zettlr so that you (or your admins) can install the app. If they have questions regarding the origins and/or trustworthyness, it may be best to point them [to Zettlr's GitHub repository](https://github.com/Zettlr/Zettlr).

## I removed the tutorial folder from my computer, and now I cannot get it back!

When Zettlr detects it is being run for the very first time on a computer, it will automatically copy a folder with some Markdown files into your Documents-folder. These Markdown files contain some basic introduction on how to use Zettlr. However, they will only be copied once. In order to get these files if you later realised that you would like to revisit the tutorial, you have two options:

1. Rename or remove the `config.json`-file from your application data directory. If that file is not there, Zettlr will think it is being run for the first time and copy the tutorial again.
2. Simply [download the folder directly from source](https://github.com/Zettlr/Zettlr/tree/develop/static/tutorial) (note that this location might change).

## Are there any plans of porting Zettlr to mobile phones and tables, for Android or iOS?

We are getting more and more requests for mobile versions of Zettlr. We are very happy that you like Zettlr enough to want it on all your devices, and we would love to fulfill your wish! Unfortunately, though, our resources are just enough to keep the development of Zettlr up and running, and adding more work is just not possible at the moment.

## What is Markdown?

Markdown is a simple markup language that enables you to write text just as complex as using standard office software, but with much less clutter. Instead of having to manually select all formatting options, in Markdown, typing a `#` suffices to indicate a heading! Want to hear more? Then head over to the [documentation on Markdown](reference/markdown-basics.md)!

## On PDF export, I have problems regarding the font. What should I do?

LaTeX can be picky when it comes to fonts. But don't worry: We got you covered in the [section on PDF-preferences](https://docs.zettlr.com/en/reference/settings/#pdf-preferences).

## If I don't want to use Zettlr anymore, what would I need to do to switch programs?

Simply uninstall Zettlr and begin using another program of your choice. Zettlr does not mess with your files. If you have been using Projects or modified the directories, there will be small files named `.ztr-directory` present in some folders. To remove them, simply reset the sorting of directories to default, and remove all projects prior to uninstalling the app (or manually remove these files afterwards).

## I'm using Linux and deleting files doesn't move them to the trash!

Zettlr never completely removes your files. It always only moves them to the trash so in case you accidentally remove a file you need, you can always restore it. On macOS and Windows systems, the trash is activated by default, but on some Linux distributions, you need to activate the trash functionality manually. On Linux, Zettlr (to be more precise: the underlying Electron framework) makes use of the binary `gvfs-trash` to move files to the trash. To make use of this functionality, please make sure you have `gvfs-trash` installed! On Debian/Ubuntu you can do so by running the following code in a terminal:

```bash
$ sudo apt install gvfs-bin
```

> If you do not want to use the trash functionality, you can also enable the setting in the advanced preferences telling Zettlr to terminally remove a file if moving it to the trash fails. Please note that this will remove files irreversibly!

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

1. Is the link recognised? Zettlr enables you to define what internal links look like. By default, they are encapsulated by `[[` and `]]`. When Zettlr recognises an internal link, it will colour it and if you hover over it with your mouse cursor, the contained text should become underlined. If it does not, Zettlr doesn't think that what you've written is a link. You can change this in the settings.
2. Did you press the `Cmd` or `Ctrl` key while clicking on the link? Clicking with your mouse somewhere in the text means that you intend to edit the text, so you have to tell Zettlr that you actually want to follow the link.
3. Did you use a valid filename or ID? Zettlr only opens files, if they report they _exactly_ have the given ID or the given filename. If nothing happens while clicking on the link, this surely means that a file with the given ID or filename does not exist in the system. Note that you must omit the file extension when creating a link. For example, to link to `my-file.md`, you only need to put `my-file` inside the brackets.
4. Is the file currently loaded into Zettlr? Internal linking only works if Zettlr has read in the file.

## I know LaTeX and want to use it inside my Markdown files as well. Is this possible?

Yes. Simply write your `LaTeX` statements where you want them. As soon as you export to PDF, Pandoc will take care of the rest and the statements will be interpreted by the PDF engine. Unfortunately, `LaTeX` syntax highlighting is not supported. Also, please note that Pandoc will clear all `LaTeX` blocks prior to exporting to anything other than PDF, which means that blocks within `\begin` and `\end`, for instance, will be missing completely from the final Office file. On HTML-export, all `LaTeX` blocks will be retained, but not converted to something else.

## I can't seem to align the text just or right!

It's not a bug, it's a feature: Markdown does not have the respective formatting signs because text should always be justified or aligned left (for LTR languages) and therefore it does not belong to the set of necessary block formats Markdown offers. Yet, you can still use `LaTeX` commands to render them left or right. Simply enclose the text you want to align right or justify in `\begin{<option>}` and `\end{<option>}`, where `<option>` may either refer to `flushleft`, `flushright` or  put a `\justify` in front of a paragraph you want to be justified. [Learn more at sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

## In PDF output, I want certain headings to be unnumbered/not listed in the Table of Contents

This is a special feature of Pandoc. Add the special classes `-` (simply a minus) or `.unlisted` respectively. The minus prevents numbers, while “unlisted” prevents the heading to appear in the table of contents. Note that this only applies to PDF output.

Examples:

```markdown
# This heading will be unnumbered, but in the ToC {-}

# This heading will be numbered, but not in the ToC {.unlisted}

# This heading will both be unnumbered, and hidden from the ToC {- .unlisted}
```

> Note that the special classes need to be the last thing on the line. Even comments will break this behaviour.

## I want to use single line breaks and not create new paragraphs. When I simply hit Enter once, it removes the single line break!

To force Pandoc to render single line breaks as such, end your line with a backslash (`\`) or two spaces. The backslash as well as the two spaces will not be rendered in the exported file.

## Zettlr does not seem to find LaTeX, which is nonetheless installed!

This can happen in case your computer decided to install the software in a non-standard directory. Zettlr will try its best to locate the applications but may fail if they are buried somewhere. Make sure the xelatex binary is within your PATH.

## On Export to PDF, I constantly get error messages!

It might happen that you get certain errors when trying to export your files. There are two common types of errors, which you can solve by yourself.

The most common error looks like this:

**LaTeX Error: File \<some name\>.sty not found.**

This simply means that a certain package was not found (they end in `.sty`). On Windows, these packages should be installed automatically as soon as they are needed (a window might pop up asking you for confirmation); on macOS and Linux you simply need to run the command `tlmgr install <some name>`.

> Note that some `.sty`-files are part of larger packages. The easiest way to find out which package to install, go to [the CTAN homepage](https://ctan.org/) and search for the package name (the file name without the `.sty`). You will then see in the "Contained in"-section the actual name of the package you have to install. Example: [The `footnote.sty`-package](https://ctan.org/pkg/footnote) is contained in the package `mdwtools`, so instead of running `tlmgr install footnote` you must run `tlmgr install mdwtools`.

In case of other errors, Zettlr enables you to copy and paste text from the error message, because in almost all cases, a short Google search leads to a solution. And if it doesn't the community can better help you if they see the error you are getting.

## I found a bug!

That's great news! Well, not great, but it's good that you found it! In this case please head over to [GitHub](https://github.com/Zettlr/Zettlr/) and open up an issue so that we know what's up and can work to resolve the bug.

## I have a feature request! / I have a suggestion for making a feature more efficient!

That's good to hear! We always depend on other people's experience with the app to improve its efficiency and its usability for different situations. In this case, please head over to [GitHub](https://github.com/Zettlr/Zettlr/) and open up an issue so that we can get right to it.

## What about my privacy? Does Zettlr transfer any data, or don't I have to worry?

Zettlr is privacy-first. It does not send any data, and it is fully functional offline. Yet, there is one instance where Zettlr sends data over the web: the update check. Whenever you open Zettlr, or use the menu item, Zettlr will connect to the Zettlr-API to retrieve a list of all releases. This list is then used to determine whether or not you are using the newest release. During the connection, Zettlr will receive your IP-address and will know that an Electron app is accessing the API. The app will also transmit your operating system type and the application ID.

This data will never be sold to third parties. It's just because we like statistics and we are always interested in finding out who's using the app. Nevertheless, we can't identify anyone based on that data, it's much too coarse for this. We're Open Source, not Facebook.
