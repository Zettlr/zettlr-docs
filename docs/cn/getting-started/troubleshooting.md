# Troubleshooting

Like any software, Zettlr might cause problem from time to time. This page contains instructions on how to resolve many of these issues. We have years of experience, and as such the options listed below should work in most cases.

!!! note

    Please attempt the steps listed here and consult [the FAQ](../reference/faq.md) first if you encounter any problems. If these steps do not solve your issue, please [ask our community](get-involved.md/#general-resources). If our community cannot help you as well, please open an issue on GitHub.

## 1. Try Turning it Off and On Again

Many problems can be solved by simply quitting Zettlr and restarting it. Sometimes, a restart of your computer might help, too.

!!! note

    If you can reliably reproduce the problem, that is: the problem _always_ appears after you perform a specific action, this indicates that you've found a replicable bug. In that case, please provide us with a these steps when you open an issue.

## 2. Install the Most Recent Version

Many issues are fixed in newer versions. If you encounter an issue, make sure you have the most recent version installed.

## 3. Try Clearing the Cache

Sometimes, Zettlr can experience a hiccup, which may corrupt the FSAL cache. This can be annoying, because it means that unwanted behavior persists across restarts. A very simple remedy for those instances is to clear the FSAL cache. To clear the cache, in the menu simply click "Help" &rarr; "Clear FSAL cache…" and confirm to restart the app.

The app will immediately restart and recreate the FSAL cache. Especially if you have a slower computer, a slower disk, or simply have a lot of files loaded, this restart will take some time. Zettlr will only show you the application window after it has completed the recreation of the FSAL cache, so it can take several seconds or even longer. Please be patient during this process – the next restart of the app will be fast again.

!!! note

    Alternatively, there are two manual ways of doing the same, which we list here only in case you may need them. In both instances, first ensure that Zettlr is closed. Then, for option (a) head over to Zettlr's config folder and just remove the `fsal/cache` directory. Option (b) is to start Zettlr from the command-line with the flag `--clear-cache`.

## 4. Try Resetting the App

Sometimes, the app appears to be entirely broken (it does not even start, for example). We have noticed that sometimes the cache of the underlying Electron framework can cause a hiccup as well. As we have no control over the cache of the framework, sometimes it helps to delete those files.

Zettlr maintains local settings and metadata in the same folder as Electron keeps its files. You may want to reset, read, or modify this data in some cases (e.g., if your installation seems to be broken, if you accidentally loaded a bad workspace, etc.).

This data is located in the _application data path_ whose location depends on your Operating System:

* **Windows:** `C:\Users\<your username>\AppData\Roaming\Zettlr` (note that AppData is a hidden folder, so you might want to change the Explorer settings so it shows up)
* **macOS:** `/Users/<your username>/Library/Application Support/Zettlr` (open a Finder window, hold down "Alt" while opening the "Go"-menu, and click on the appearing "Library" entry)
* **Linux:** `/home/<your username>/.config/Zettlr` (note that `.config` is a hidden folder, so you might want to use a command line to open it)

If you want to completely reset your local Zettlr installation, follow these steps:

1. First ensure that the application is closed (in some error cases, there is a "zombie" process, which you can close from within your Task Manager or Activity Monitor)
2. Make sure to optionally backup these files and folders:
    * `stats.json` (your writing statistics)
    * `config.json` (the app settings — including the location of your workspaces and open files)
    * `custom.css` (your custom CSS, if any)
    * `tags.json` (your colour-coded tags)
    * `targets.json` (your writing targets)
    * `user.dic` (your own custom dictionary)
    * `snippets` (a folder of your Snippets)
    * `profiles` (a folder of your profiles)
3. Select everything in this directory and delete it.
4. Restart the application. Some of these files will be re-created.

## 5. Ask the Community for Help

If none of the above steps seem to help, you can ask the community. Sometimes, someone else has encountered a similar problem and might be able to help you. The community is active both on [Discord](https://discord.gg/PcfS3DM9Xj) and on the [Zettlr subreddit](https://www.reddit.com/r/Zettlr).

## 6. Open a GitHub Issue

If the community couldn't help you, or if it seems to be an actual bug, please open an issue on GitHub. Make sure to include as much information as possible so that we can quickly address the issue.

!!! note

    If you open an issue on GitHub, make sure you receive notifications. We have follow-up questions almost always regarding your issue. The faster you respond, the faster we can fix your issue. If no one responds to your issue, this might indicate that we are not sure how to help you. In this case, it might help to rephrase the issue or add additional information.

## 7. Revert to a previous version

Sometimes, an issue can hinder your productivity. Some users decide to revert to a previous version until we are able to fix the issue. We do not recommend this, as it can cause a host of other problems, so apply your judgment.

!!! warning

    Always backup everything before reverting! Never just run an older version. This may lead to data loss or corrupt the configuration files that Zettlr needs.

While our homepage only displays the latest stable release, you can always find all releases (even the antique ones) on [our GitHub releases page](https://github.com/Zettlr/Zettlr/releases).

Before installing an older release, you'll want to do a backup first and ensure a clean installation. Especially when we update the configuration which the app uses, older versions may outright crash because they do not understand the (newer) format. Therefore, go back to step three and remove the entire directory for good (after backing up the files). This ensures that the older version will run on the first attempt.
