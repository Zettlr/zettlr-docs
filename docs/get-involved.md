# Get involved

Do you want to make Zettlr an even better app? That's great! Whether you are a user, want to provide a new translation, or get into developing, you've come to the right place.

Here I describe how.

## User

As a user who wants a good-looking, well-working writing app, just keep your eyes open for any error the app might produce and, more importantly, tell us how to make the workflow more efficient! We can only judge for our own workflow, so to make the app better for you as well, we need to know how. Always remember: We cannot build a workflow as-is into the design but have to make concessions to other workflows, but we'll try to make features more accessible or working smoother as long as the trade-offs for the existing workflows and the new suggestion are not too hard.

[Please report bugs by opening up issues on the GitHub repository](https://github.com/Zettlr/Zettlr/issues)! This way we are able to to quickly respond to the report and directly get to handle the problem.

## Translating the App

We welcome any help in translating the app in all languages of this planet. Translations are managed on our Translation Server. To translate, you'll need to create an account, which is only used as an anti-spam measure. Additionally — but only if you want to — you will be credited using your username in all generated translations.

Translating is simple. Just click on any language on the main page to see the list of all identifiers and all existing translations:

![Translation Keys](img/translations_list.png)

On the left side you'll see all translation IDs. They will mostly be self-explanatory. If you don't know where to start, simply have a look at the English translation and at the app. Then you'll know which translation IDs will correspond to which elements.

We've implemented a user-based quality management system in the service, which consists in you being able to vote on existing translations. So even if you don't want to translate yourself, you can look through all translations and vote for the one you deem correct. Whenever somebody downloads a translation, the system will take the best-rated translation strings to ensure all translations are verified by you, our users!

[For more information, please see the short guide to our translation service](https://translate.zettlr.com/welcome).

### Developing

To start developing, simply fork the repository, work on your features, bug fixes, etc. and then open pull-requests. Please remember to **only PR to the develop branch!** The master-branch is only pushed to once a new release is being drafted. So if you are developing a new feature and a new version of Zettlr is released, you can simply pull the `origin master` and merge it into your develop branch to be up to date again and continue writing your feature.

If you are beginning to develop a feature, it also may be wise to announce that using a new issue to just let the rest know that somebody is already doing it to maximise efficiency!