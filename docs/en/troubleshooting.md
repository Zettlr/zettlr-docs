# Troubleshooting

Like any software, Zettlr might have some problems here and there. If you encounter such problems, this page contains instructions on how to resolve the issues. We now have four years of experience with these problems, and as such the options listed below should work in most cases.

> Please attempt the steps listed here and consult the FAQ first before asking on the Forum, Reddit, or opening a GitHub issue. By asking questions on these platforms that are already answered somewhere here, you are binding resources by us that we would love to spend developing the app.

## 1. Try Turning it Off and On Again

This might sound trivial, but many problems can be solved by simply quitting Zettlr and restarting it. If you encounter a problem, it often helps to just restart the app, sometimes also your computer.

> If you can reliably reproduce the problem, that is: the problem _always_ appears after you perform a specific action, this might indicate that you've found a way to create what is called an "unrecoverable state". In that case, and only then, please open a GitHub issue providing us with a minimal example of how to reproduce the issue. We will then fix it.

## 2. Install the Most Recent Version

As soon as we hear about a problem, we fix it and some time later we release a new version. Make sure to always update to the newest version, because older versions do have bugs (otherwise they would be the most recent version ;).

So make sure you always use the most recent version of Zettlr!

## 3. Try Resetting the App

We have heard many times that the app appears to be broken (it does not even start, for example). What we found is that sometimes clearing the cache helps. This seems to be related to the Electron framework we use. That one creates its own cache files, over which we do not have any control, and sometimes it helps to delete these.

Zettlr maintains local settings and metadata (user-defined tags, workspace location, settings, etc.). You may want to reset, read, or modify this data in some cases (e.g. if your installation seems to be broken, if you accidentally loaded a bad workspace, etc.).

This data is located in the _application data path_ whose location depends on your Operating System:

* **Windows:** `C:\Users\<your username>\AppData\Roaming\Zettlr` (note that AppData is a hidden folder, so you might want to change the Explorer settings so it shows up)
* **macOS:** `/Users/<your username>/Library/Application Support/Zettlr` (open a Finder window, hold down "Alt" while opening the "Go"-menu, and click on the appearing "Library" entry)
* **Linux:** `/home/<your username>/.config/Zettlr` (note that `.config` is a hidden folder, so you might want to use a command line to open it)

If you want to completely reset your local Zettlr installation, follow these steps:

1. First ensure that the application is closed (in some error cases, there is a "zombie" process, which you can close from within your Task Manager or Activity Monitor)
2. Make sure to optionally backup these files:
    * `stats.json` (your writing statistics)
    * `config.json` (the app settings — including the location of your workspaces and open files)
    * `custom.css` (your custom CSS, if any)
    * `tags.json` (your colour-coded tags)
    * `targets.json` (your writing targets)
    * `user.dic` (your own custom dictionary)
3. Select everything in this directory and delete it.
4. Restart the application. Some of these files will be re-created.

## 4. Ask the Community for Help

If none of the above steps seem to help, you can ask the community. Sometimes, someone else has encountered a similar problem and might be able to help you. The community is active both on the [Zettlr subreddit](https://www.reddit.com/r/Zettlr) and on [Discord](https://discord.com/invite/PcfS3DM9Xj), so you can choose which one you like.

## 5. Open a GitHub Issue

If the community couldn't help you, or if it turns out while discussion the issue that it seems to be an actual bug, please open an issue on GitHub. Make sure to include as much information as possible so that we can quickly address the issue.

> If you open an issue on GitHub, make sure you receive notifications. Almost always the developers have additional questions regarding your issue. The faster you respond, the faster we can ensure the issue is being fixed. If no one answers on your issue, this might indicate that we are not sure how to help you. In this case, it might help to rephrase the issue or add additional information.
