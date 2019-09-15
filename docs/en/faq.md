# Frequently Asked Questions

## I tried to install Zettlr on Windows/macOS, but there's a security warning saying I shouldn't install the app!

Both Windows and macOS require so-called "code-signing" in order to be able to trust the application. While this is a great technique of keeping malicious code from harming your system, it requires an annual subscription fee. This is why Zettlr builds are _not_ code-signed and therefore produce warnings. You can safely ignore these warnings and install Zettlr, as long as you download it from our official page.

## Are there any plans of porting Zettlr to mobile phones and tables, for Android or iOS?

We are getting more and more requests for mobile versions of Zettlr. We are very happy that you like Zettlr enough to want it on all your devices, and we would love to fulfil your wish! Unfortunately, though, our resources are just enough to keep the development of Zettlr up and running, and adding more work is just not possible at the moment. Of course, as soon as this changes, we will get to it!

## Do you consider supporting more Linux platforms except Debian and Fedora based ones?

Due to our limited resources we cannot support more platforms out of the box. Debian- and Fedora-based distributions are by far the most popular platforms, which is why we support them officially. If you would like to take upon yourself the responsibility of building Zettlr for other platforms, please get in contact with us so that we can list the additional repository on our download page!

## What is Markdown?

Markdown is a simple markup language that enables you to write text just as complex as using standard office software, but with much less clutter. Instead of having to manually select all formatting options, in Markdown, typing a `#` suffices to indicate a heading! Want to hear more? Then head over to the [documentation on Markdown](reference/markdown-basics.md)!

## If I don't want to use Zettlr anymore, what would I need to do to switch programs?

Simply uninstall Zettlr and begin using another program of your choice. Zettlr does not mess with your files. If you have been using Virtual Directories or Projects, there will be small files named `.ztr-directory` and `.ztr-projects` present in some folders. To remove them, simply delete any virtual directories, reset the sorting of directories to default, and remove all projects prior to uninstalling the app (or manually remove these files afterwards).

## I'm using Linux and deleting files doesn't move them to the trash!

Zettlr never completely removes your files. It always only moves them to the trash so in case you accidentally remove a file you need, you can always restore it. On macOS and Windows systems, the trash is activated by default, but on some Linux distributions, you need to activate the trash functionality manually. On Linux, Zettlr (to be more precise: the underlying Electron framework) makes use of the binary `gvfs-trash` to move files to the trash. To avoid shock moments it'll never try to "fall back" to removing files completely. Therefore, to make use of this functionality, please make sure you have `gvfs-trash` installed! On Debian/Ubuntu you can do so by running the following code in a terminal:

```bash
$ sudo apt install gvfs-bin
```

## The internal links do not open the respective file!

In case the internal links used to interlink files don't work as expected, please make sure you've done the following things:

1. Is the link recognised? Zettlr enables you to define what internal links look like. By default, they are encapsulated by `[[` and `]]`. When Zettlr recognises an internal link, it will colour it and if you hover over it with your mouse, the contained text should become underlined. If it does not, Zettlr doesn't think that what you've written is a link. You can change this in the settings.
2. Did you press the `Alt`- or `Ctrl`-key while clicking on the link? As clicking with your mouse somewhere in the text normally means that you intend to change something, you have to tell Zettlr that you actually want to follow the link.
3. Did you use a valid filename or ID? Zettlr only opens files, if they report they _exactly_ have the given ID or the given filename. If nothing happens while clicking on the link, this surely means that a file with the given ID or filename does not exist in the system. Note that you must omit the file extension when creating a link. For example, to link to `my-file.md`, you only need to put `my-file` inside the brackets.
4. Is the file currently loaded into Zettlr? Internal linking obviously only works if Zettlr has read the file.

## I know LaTeX and want to use it inside my Markdown files as well. Is this possible?

Yes. Simply write your `LaTeX`-statements where you want them. As soon as you export to PDF, Pandoc will take care of the rest and the statements will be interpreted by the PDF engine. Unfortunately, `LaTeX` syntax highlighting is not supported. Also, please note that Pandoc will clear all `LaTeX`-blocks prior to exporting to anything other than PDF, which means that blocks within `\begin` and `\end`, for instance, will be missing completely from the final Office file. On HTML-export, all `LaTeX`-blocks will retained, but not converted to something else.

## I can't seem to align the text just or right!

It's not a bug, it's a feature: Markdown does not have the respective formatting signs because text should always be justified or aligned left and therefore it does not belong to the set of necessary block formats Markdown offers. Yet, you can still use `LaTeX`-commands to render them left or right. Simply enclose the text you want to align right or justify in `\begin{<option>}` and `\end{<option>}`, where `<option>` may either refer to `flushleft`, `flushright` or  put a `\justify` in front of a paragraph you want to be justified. [Learn more at sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

## I want to use single line breaks and not create new paragraphs. When I simply hit Enter once, it removes the single line break!

To force Pandoc to render single line breaks as such, end your line with a backslash (`\`) or two spaces. The backslash as well as the two spaces will not be rendered in the resulting file.

## Do I really need Pandoc or LaTeX?

For plain HTML export, no. For all other export formats, yes. Zettlr depends on those programs to enable exporting of files. But don't worry: They are Open Source and therefore completely free of charge, and available on all operating systems!

## How do I install Pandoc or LaTeX?

Please refer to the [setup guide](install.md) for instructions on how to set up Pandoc and LaTeX on your system.

## Zettlr does not seem to find Pandoc and LaTeX, which are nonetheless installed!

This can happen in case your computer decided to install the software in a non-standard directory. Zettlr will try its best to locate the applications but may fail if they are buried somewhere. That's where the path-options in the preferences come into play. In case Zettlr does not find any of the binaries, you can enter the **full path** to them in the appropriate text fields in the `Advanced`-tab.

On Windows, you should never encounter this issue, as long as you leave the default installation path during install set to the default `Program Files` directory of Windows. If you wanted to install the programs to different locations, rendering Zettlr unable to find them, simply search your system using the Explorer for two files, the first being `pandoc.exe` and the second being `xelatex.exe`. Copy the full path (including the executable's name!) to the appropriate text field in the Zettlr preferences.

On macOS you can easily find the path by opening up `Terminal.app` (it's in your Applications folder under `Other`) and then type `which pandoc` _or_ `which xelatex`, depending on which software Zettlr does not find. Terminal will simply output the full path to the program.

On Linux distributions, you also need to open up a Command Line/Terminal and use the same commands as on macOS: `which pandoc` for Pandoc and `which xelatex` for LaTeX.

## On Export, Zettlr says the PDF-Engine wasn't recognised!

This is a common Pandoc error, indicating that your Pandoc version is pre-2.x. When Zettlr presents you the following error message, it means you need to update to Pandoc 2.x:

`pandoc: unrecognized option '--pdf-engine=xelatex' Try pandoc --help for more information.`

The reason is that with Pandoc 2.0, the older option `--latex-engine` was renamed to `--pdf-engine`. [See more in Pandoc's changelog](https://github.com/jgm/pandoc/blob/master/changelog#L4349).

## I found a bug!

That's great news! Well, not great, but it's good that you found it! In this case please head over to [GitHub](https://github.com/Zettlr/Zettlr/) and open up an issue so that we know what's up and can work to resolve the bug.

## I have a feature request! / I have a suggestion for making a feature more efficient!

That's good to hear! We always depend on other people's experience with the app to improve its efficiency and its suitability for different situations. In this case, please head over to [GitHub](https://github.com/Zettlr/Zettlr/) and open up an issue so that we can get right to it.

## What about my privacy? Does Zettlr transfer any data, or don't I have to worry?

Zettlr is privacy-first. It does not send any data, and it is fully functional offline. Yet, there is one instance where Zettlr sends data over the web: The update check. Whenever you open Zettlr, or use the menu item, Zettlr will connect to the Zettlr-API to retrieve a list of all releases. This list is then used to determine whether or not you are using the newest release, or not. During the connection, Zettlr will receive your IP-address and will know that an Electron app is accessing the API. The app will also transmit your operating system type and the application ID.

This data will never be sold to third parties. It's just because we like statistics and we are always interested in finding out who's using the app. Nevertheless, we can't identify anyone based on that data, it's much too coarse for this. We're Open Source, not Facebook.
