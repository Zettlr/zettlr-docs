# Guide: Zettlr as a note-taking app

![Zettlr as a Note-Taking app](../img/zettlr_notes.png)

You want to use Zettlr as a means to take notes with. Although Zettlr has a lot more features, it is designed as a slim and minimal app, so configuring Zettlr as a note-taking app is easy. This guide shows you what settings you should use and how to actually take notes.

> Using this guide, you can set up Zettlr to be a replacement for apps such as OneNote, Evernote, or nvALT.

## Step 1: Set up Zettlr to look as minimal as possible.

First, head over to the settings tab (press `Cmd/Ctrl+,` or click the cog in the toolbar). In the settings, make sure you set the settings according to this list:

- General tab
    - Snippets: Off
    - Sidebar: Thin
- Editor tab
    - Dictionaries: Select none (they slow down the app start and aren't necessary for simple notes)
    - Mute lines: Off

The other settings aren't needed for a note taking app and can therefore be ignored.

## Step 2: Create a folder for your notes

Now it's time to create a folder for your notes. Ideally, you'd want to place it inside a cloud-synchronised folder so that you can access them everywhere, not just on your current computer. The name of this folder is completely up to you, but "Notes" may be a good, simple start. If you want to use different categories for notes, you can create additional root folders and keep them open. That way, you may name your categories according to what you store in them:

- Students: "University", "Lectures", "Private"
- Teachers: "School"/"University", "Courses"
- Researcher: "University", "Research", "My Research Project"
- Journalist: "Topic 1", "Topic 2", "Topic 3", "Press Conferences"
- Writer: "My Novel", "Thoughts and Ideas", "Characters"
- Administrative Worker: "ToDo", "Meetings"
- etc. …

Choose directories using categories you personally need. Don't forget that you can always re-organise this and drag the files around if your workflow changes. The benefit of using different _root_ folders is that each folder is independent of each other. Thereby you can always keep the directory list hidden and only pull it up if you need to switch "notebooks".

**Alternative**: Instead of using multiple root folders, you can also go with the subdirectories-approach. This way the directory list doesn't look like a collection of categories, or "notebooks", but resembles an actual directory (I'm talking about how it _looks_ to you, as visuals are also an important aspect for efficient writing). But the benefit of this approach is, that you never need to pull up the directories list, but you can switch "notebooks" by first `ALT`- or `Ctrl`-clicking the current "notebook"/directory and then clicking another notebook. Zettlr will then use that as the current directory in which you can store notes.

## Step 3: Think of a system for naming your notes

Over time, your notebooks _will_ become full with notes. Each seminar, each meeting and each workshop will contribute to your notebook. And if you have sudden thoughts that you want to write down before you lose them, a new note is also recommended. So what to do to not lose the order of your system?

Zettlr offers several ways to order, sort, and find your files. If you know the filename, then it's easy to get to it: Simply start typing the filename in the global search bar. Zettlr will autocomplete the name for you. It takes the first file that contains what you've already written, so keep writing the filename until Zettlr autocompletes the correct file. Then hit `Return` and it will open the file.

Generally, your files should follow a certain system. For instance, if time matters (such as for workshops, congresses, or lectures), it is best to use the date in the international standard format (YYYY-MM-DD, e.g. 2018-10-12) as the first part of your file names. This way Zettlr will automatically sort the files in the default way (where a 2 is greater than a 1, e.g.), so that newer files are at the bottom by default. To pull them to the top, simply switch the sorting from A-Z to Z-A. By using this approach it becomes easy to find older notes, because you normally remember the rough date at which a workshop or a meeting has happened and can scroll through the list until you find it.

If time is not important, another approach is necessary. If you keep note files for different concepts, processes, or as some kind of manual, it may be better to use categories as the first part of the file name. For instance, if you take notes on how software in your office works, it may be good to sort them by processes. Then, filenames would look like this:

- HowTo - Finance - Excel
- HowTo - Finance - Company Database
- HowTo - Meetings - Beamer
- HowTo - Meetings - Conference Call

This way you can easily find what you are looking for by first searching for the files that begin with "HowTo" and then scroll until you find the process (Finance, Meetings, Mail guidelines, etc).

You can even use a combination of that. The bottom line is: Always keep in mind that Zettlr sorts by filename, so name your files accordingly to minimise the amount of time to spend until you find a file.

## Step 4: Write!

Now that all your folders are set and you have a general idea of how your filenames should look like, you can create notes by simply hitting `Cmd/Ctrl+N`. Type in your name (you don't need to add any file name extension) and press `Return` to create the file. It will be automatically opened. Zettlr will always create the files in your currently selected notebook. If you want to move files between notebooks, simply drag the file and drop it onto the notebook you want to move it to.

## Next: Markdown Tutorial

Now you may be interested in knowing how to write fast and efficiently using Zettlr. Head over to our [Markdown tutorial](../reference/markdown-basics.md)!
