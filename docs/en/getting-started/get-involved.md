# Get involved

Do you want to make Zettlr an even better app? That's great! Whether you are a user, want to provide a new translation, or get into development of the application, you've come to the right place!

## Join the Community

Zettlr has a vibrant community helping each other all around the net. The following list contains the common places to start for any issue you might have.

* The [Zettlr Community Forum](https://forum.zettlr.com/) — The official forum is a great place to ask for help, answer questions, and discuss customizations.
* [Zettlr Discord](https://go.zettlr.com/discord) — The Zettlr Discord is a place for the Discordians (there doesn’t appear to be an official term).
* [Zettlr Subreddit](https://www.reddit.com/r/Zettlr) — The Zettlr Subreddit is meant for the Redditors in the community.
* The [official Mastodon account](https://fosstodon.org/@zettlr) – Here you can follow the updates to the app in real time. It's the only place where we regularly announce everything we do. Additionally, we engage in most discussions, so if you have questions, you can drop them here.
* The [official Bluesky account](https://bsky.app/profile/zettlr.com) — The same as our Mastodon Account
* [Our YouTube channel](https://www.youtube.com/c/Zettlr) — If you are more the visual type, you can find some introductory videos here. Note that we do not regularly maintain the channel, so the videos may be outdated.
* [GitHub Discussions](https://github.com/Zettlr/Zettlr/discussions) — A slightly more modern version of classic internet forums.
* [The GitHub issue tracker](https://github.com/Zettlr/Zettlr/issues) — This is the core of our endeavors to make the app better. If you spot a bug, have a suggestion or want to propose a feature, here's the right place. Nevertheless, especially when it comes to questions regarding the user workflow or new features, **it's best to discuss your ideas on the forum or on Discord first**.

## User Contributions

As a user who wants a good-looking, well-working writing app, just keep your eyes open for any error the app might produce and, more importantly, tell us how to make the workflow more efficient! We can only judge for our own workflow, so to make the app better for you as well, we need to know how. Remember: We cannot build a workflow as-is into the design. When we make concessions to other workflows, we try to make features more accessible or work more smoothly as long as the trade-offs are not too hard.

Please report bugs by opening up issues on the GitHub repository. This way we are able to respond quickly to the report and directly get to handling the problem.

## Translating the App

We welcome any help in translating the app in all languages of this planet. Zettlr utilizes the `gettext` system for translating content.

Translations are maintained [alongside the source code of this app in our repository](https://github.com/Zettlr/Zettlr/tree/develop/static/lang). To translate, you will need a GitHub account, but it does not require technical knowledge.

!!! note

    If you do possess technical knowledge, you can also skip the explanations below and [clone the repository](https://github.com/Zettlr/Zettlr) directly.

To improve a translation, head over to the `static/lang`-folder and download the `*.po`-file that corresponds to the language code you want to improve (e.g., `pt-BR.po` for Brazilian Portuguese).

After you have downloaded the file, you'll need a program to modify the translations. We recommend the application [POedit](https://poedit.net/). It also offers a “pro” version, but you will not need that to translate.

Once you have modified the translation to your liking, it is time to add the translations to the application. To do so, follow the steps in [this excellent guide on how to propose changes on GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing-files-in-another-users-repository).

### Creating a new translation

If you wish to create a translation for a language that does not yet exist, the process is a bit more involved.

!!! note

    If you do not trust your own skills in creating a new translation, please get in contact with us. We will happily create the corresponding file for you so that you can then follow the simpler steps above.

1. To create a new translation file, ensure the `gettext` system is installed on your computer
2. Clone the repository: `git clone https://github.com/Zettlr/Zettlr.git`
3. Move into the directory: `cd Zettlr`
4. Run the initialization command, replacing `<lang>` with the corresponding language code, e.g., “pt-BR” or “de-DE”: `msginit --input=static/i18n.pot --locale=<lang> --output=static/lang/<lang>.po`
5. A new file called `<lang>.po` should have appeared in the translation directory. Proceed to translate and then open a PR.

## Developing

To start developing, [fork the repository](https://github.com/Zettlr/Zettlr), work on your features, bug fixes, etc. and then open pull-requests. Please remember to **only open PRs against the develop branch!** The master-branch is only pushed to once a new release is being drafted. So if you are developing a new feature and a new version of Zettlr is released, you can simply pull the `upstream master` to be up-to-date again and continue writing your feature.

If you are beginning to work on something, remember to announce this on the issue tracker so that we know what is being worked on.

!!! note

    [The development guide can be found in our README](https://github.com/Zettlr/Zettlr#contributing-code), including setup instructions and a documentation of available commands.
