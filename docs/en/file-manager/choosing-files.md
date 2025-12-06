# Choosing Which Files To Display

By default, the file manager only displays a small set of all files inside your workspaces: Markdown files, plain text files, JSON and YAML data files, and LaTeX files.

However, depending on what works for you, you can additionally have Zettlr display a wide variety of additional file types. For example, it may be that you have to work a lot with images. Having them show up in the file manager could be a quick way for you to see which images you have inside your folders, and open them from there.

To configure which files Zettlr displays in its file manager, you can peruse the “File Treatment” configuration in the “Advanced” section of the preferences.

![preferences_file_treatment.png](../img/preferences_file_treatment.png)

The file treatment setting is roughly divided into two sections. First, a tabular enumeration of some common file types, and second a field that allows you to define arbitrary filename extensions. Any filename extensions defined in that second configuration setting will only be available in the sidebar.

## Configuring Common File Types

“Common” file types are file types which we believe are common for users of Zettlr. This includes, first and foremost, built-in Markdown and code files. These are the files mentioned above, and they will always be shown in the file manager and always opened with Zettlr.

The other classes of common file types are images and PDF documents, Office documents (including Word and LibreOffice files, presentations, and Excel files), and data files (CSV files, State files, or RData files).

You can choose whether those files will be shown in the file manager (first column), or in the sidebar (second column). For images and PDF files, you can also select to have them open directly within Zettlr using the image and PDF viewers.