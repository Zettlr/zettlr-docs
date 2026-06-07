# Migrating from Obsidian

Many users choose Zettlr after having already spent a considerable amount of
time working with the note-taking tool Obsidian. Fortunately, Obsidian and
Zettlr are, for the most part, compatible. As such, you will be able to take all
your notes from Obsidian with you without a hassle. Indeed, many Zettlr users
are even able to run both tools at the same time.

In this guide, we outline the general steps you will need to take to move your
"vault" to Zettlr, and some additional things to consider.

## Migrating your "Vault" to Zettlr

Before you can work with your existing notes, you will have to point Zettlr to
your Obsidian "vault." A "vault" is just a fancy term for folder, and all your
notes are stored within that folder as regular Markdown documents.

!!! tip

    Obsidian's "vaults" are the equivalent of Zettlr's
    [Workspaces](../first-time-users/workspaces.md).

To open this "vault" in Zettlr, simply open the app, select "Open Workspace"
(shortcut: <kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>) and navigate to
your "vault." Select it to open it as a workspace. Once Zettlr has indexed all
files in that folder, it will show you the "vault" in the file manager.

!!! caution

    Obsidian treats its "vaults" differently than Zettlr treats its workspaces.
    Zettlr is intended to use a more organized file structure, while Obsidian
    essentially dumps all notes into a single, large folder. That being said,
    Obsidian also allows you to manage multiple "vaults," which you might
    consider when planning to use Obsidian and Zettlr side by side.

## Notable Differences between Obsidian and Zettlr

While Zettlr is very flexible and can work with Markdown files created by
Obsidian, there are some notable distinctions that you should keep in mind to
maximize the compatibility between Obsidian and Zettlr.

First, while Zettlr keeps itself very strictly to the standard specification of
Markdown, Obsidian is more lenient. Zettlr files will work with no modification
in any other Markdown editor, including Obsidian, but the same is not true for
Obsidian files.

Obsidian uses some non-standard syntax that you should be aware of. Most
notably, while both Obsidian and Zettlr understand the same form of Wikilink
syntax (e.g.: `[[This is a link to another file|my-file.md]]`), Obsidian also
allows users to link *images* this way. While Obsidian understands this syntax,
Zettlr does not. However, Obsidian has a setting that you can use to ensure the
app uses standard syntax to link to your images. Then, Zettlr will also be able
to open them.

## Using Obsidian and Zettlr Side-by-Side

Many users choose to use Obsidian and Zettlr side-by-side. Since both tools are
largely compatible, with the main difference being the user experience
(Obsidian is more tuned towards short-form note taking, while Zettlr is tuned
towards long, structured writing projects), this is easily achievable.
Typically, both Obsidian and Zettlr should be able to pick up any changes that
you make to files from the respective other tool, and thus should work natively
side by side.

There will be a few small inconsistencies, however. First, Obsidian does not
support Zettlr projects and cannot read or parse the project files. So while you
can configure complex exporting projects with multiple files and specific
ordering in Zettlr, you won't be able to leverage this information in Obsidian.
But you will be able to edit files within any project easily in Obsidian. You
will just have to remember to switch to Zettlr in order to be able to export
your projects properly.

## Switching Entirely to Zettlr

In case you want to switch entirely to Zettlr and stop using Obsidian, we
recommend that you take an afternoon to re-organize your notes a bit so that you
get the maximum use of Zettlr.

Here are some of the steps we recommend to take before uninstalling Obsidian:

* If you have been using a single "vault," we recommend splitting the files up
  into multiple Workspaces for use in Zettlr. You can do this, e.g., by
  filtering for specific tags, or using a "Base" as a foundation to move a set
  of files into different folders. We recommend to consult the
  [workspaces documentation](../first-time-users/workspaces.md) for some
  inspiration of where to start.
* Ensure you exchange any non-standard syntax Obsidian uses with regular
  Markdown syntax (e.g., turn Wikilink-images to regular images and make sure
  you don't use any syntax that is exclusively provided by an Obsidian plugin).
* Verify that your notes or workflows do not depend on any Obsidian plugin,
  because those will not be supported by Zettlr.
