# Zettlr Documentation

This repository holds the official documentation for the [Zettlr markdown app](https://www.zettlr.com/). It is hosted publicly on GitHub to give you the chance to easily submit modifications and help the Zettlr documentation stay comprehensive even for new users who need a hand in getting to grips with Zettlr.

**Contributions from the Community are encouraged!** If you spot typos, wrong or outdated information, or have other good input to improve the documentation, we appreciate all your ideas.

## Improving the documentation

The whole documentation is written in Markdown, which means that if you already use Zettlr, you have all the necessary skills. To improve a page, simply [browse the documentation](https://docs.zettlr.com/). If you wish to improve a page, click on the "Edit on GitHub" button on the bottom of that page. This will lead you to the correct file in this repository. Make your changes and then follow the guides to open a Pull Request. You can [use a set of special syntax elements](#special-features-of-vuepress-markdown) to improve the legibility of the documentation.

Of course, you can also edit the documentation using Zettlr. If you want to do so, or simply need to edit multiple pages at once, the suggested workflow is to clone the entire repository to your computer.

In this case, here are the necessary steps:

First, fork this repository. You can do so at the top of this page. This will create a copy of the documentation in your own user account. Then, clone this repository:

```bash
cd /path/to/where/you/want/it
# Replace <your username> with your GitHub username where the fork lives.
git clone https://github.com/\<your username\>/zettlr-docs.git
cd zettlr-docs
# It is highly recommended to work on a separate branch for this. Name it however you like.
git checkout -b my-changes
```

Now, you can open the `docs` folder in whichever app you like to make all changes you need to. Once you are done, commit your changes:

```bash
git add .
git commit -m "My improvements"
git push
```

Finally, head back to your fork on GitHub which should now show you a button to open a Pull Request.

We will then review your changes and let you know if there are some additional changes we need you to make. Once everything looks good, we will merge your PR to include your improvements on the documentation website at https://docs.zettlr.com.

If you wish to add a contribution after some time, but re-use the same repository on your computer, make sure to include any changes in between before starting your work. To do so, first go to your fork on GitHub and use the UI to pull any changes from upstream into your fork. Then, on your computer in the git repository, run the following steps:

```bash
# Fetch all changes that you have just added to your fork
git checkout master
git pull
# Then, go to the branch you want to update. Replace "my branch" with whatever
# branch you are working on
git checkout my-branch
# Merge in all new changes. This might introduce merge conflicts, which you should fix.
git merge master
```

Afterwards, make your changes as usual. You can also fully delete your old branch and create a new one from master. This could be easier for you.

## New Pages and Changes to the Structure

Sometimes, it makes most sense to create additional, new pages for a new feature or some description, rather than adjusting existing pages. Also, sometimes it makes sense to change the order of some pages around. This is typically fine, but to ensure we don't add bloat to the documentation, we would like you to discuss new pages or any structural adjustments you think are in order with the community. You can do so either on the [community forum](https://forum.zettlr.com) or on [Discord](https://go.zettlr.com/discord).

The reason we want you to discuss new pages or structural changes beforehand is that this serves as an additional sanity check. If no obvious arguments against your changes emerge, doing that and opening a PR is usually fine.

## Understanding the Structure of the Documentation

These docs are multi-language. At the time of writing, the documentation is available in English (the official reference documentation), German, Spanish, French, Italian, Japanese, Portuguese, and Russian. There are three relevant folders for the documentation:

1. `./docs`: This contains all the documentation, sorted into ISO-coded directories (e.g., `pt` for Portuguese). Inside these folders, you will find mostly the same files and the same structure, but obviously with the file contents translated into various languages.
2. `./config`: This folder contains the language configuration for all available languages. Each language defines a set of translated strings for some UI elements, as well as translations for the navigation bar and a fully custom sidebar.
3. `./docs/.vuepress`: This folder contains the configuration for VuePress, which is the framework these docs use.

You should usually not need to make any changes to the VuePress configuration. If you wish to improve the translation for a navigation link or another UI element, you will find those in the corresponding config file. All the content lives in the relevant docs-folder for the language.

## Testing and Building

Especially if you make bigger changes, you might want to see a preview of what the documentation will look like to ensure you don't miss obvious issues. To do so, you will need to install the corresponding dependencies. Since the documentation, is based on VuePress, the process looks very similar to how installing dependencies for Zettlr itself work.

First, make sure to have [Node.js](https://nodejs.org/en/download) and [Yarn](https://yarnpkg.com/getting-started/install) installed on your computer.

Then, follow the above steps to clone the repository, but in addition, install all the development dependencies:

```bash
cd zettlr-web # If not already in the correct directory
yarn install --immutable
```

Once that is done, you have two commands available that you can use:

```bash
yarn docs:dev
```

This command starts a custom development server that looks and feels like the actual documentation. This way you can preview your changes, and also test how various redirects between the different languages work.

```bash
yarn docs:build
```

This command actually builds the documentation and places it in the `build` folder. This might be useful to ensure that a build online will succeed. Sometimes, building the documentation can surface other issues that the dev build might not have spotted.

## Add a New Language

Want to add a language? Perfect, here's how you do it:

1. First, follow the steps above to create a fork and clone it to your computer. Also, make sure you install the development dependencies, as you will need them.
2. Copy the English config file from `./config/en.config.ts`. Rename it to the corresponding two-letter ISO-code for your language (e.g. `es` for Spanish, `fr` for French, and so on).
3. Create a new folder under `./docs` using your two-letter ISO-code. Copy all the top-level documents into it.
4. Begin translating using any way that suits you.
5. Once you're done translating, head back to the config file that you have copied, and adjust it. If you kept the exact same folder structure, you will need to adjust both in the `navbar` and `sidebar` configuration the prefixes so that they don't point to `/` but to whichever language you translated in (e.g., `/fr/` for French). Furthermore, translate all UI strings (towards the bottom of the config) into the correct language, and do the same with any link texts in both `sidebar` and `navbar`.
6. Test your changes by starting the dev server (`yarn docs:dev`) and browsing your language. The dev server utilizes hot module reloading (HMR), so any changes you make to the config or your translation should show up automatically. If not, restart the dev server.
7. Commit your changes and open a PR.

Lastly, check out the features of the documentation below to learn how VuePress behaves to use this to your advantage as you are translating.

## Features of the Documentation

### Automatic Language Navigation

VuePress is a modern framework for writing documentation that comes with a set of perks. For example, switching between various languages is incredibly easy. This is done via the language selector in the navigation bar up top. The algorithm with which VuePress determines where to go when the user switches the language is based on the file names: If the user is currently browsing the file `/fr/getting-started/setup.md`, and switches to English, VuePress checks if there is a file `/en/getting-started/setup.md`. If there is one, it will load this one. If not, it will navigate to the `index.md` file. This is important: If every translation keeps the exact same folder structure, users can switch languages in between, with the system figuring out where to go.

### Language Notice

Since we officially only maintain the English documentation, users will see a notification when they browse any other language informing them that the reference documentation is the English translation. This notice will only be shown once per user.

### Locale Configuration

Each configuration file in the `./config`-folder is a locale config for VuePress. VuePress is organized around themes and plugins, and each theme and plugin typically has a `locale` config that allows users to translate various parts of the UI. The config file typically only contains the custom navbar and sidebar definitions, plus a few strings that need to be translated. Sometimes, you may wish to add additional translations (for example, at the time of writing, some plugins are missing Portuguese and Italian localizations, which the dev server will tell you). You do so by providing them using the locale config of the corresponding plugin. Our recommendation is to add this translation to the correct config file for your language, and inserting this in the main config at the correct position, similar to how we did this with the main locale config of the theme.

Additionally, there are a few options that VuePress demands to be configured per locale, but which we here treat as language-agnostic. These include, for example, the branch where people are sent if they click the GitHub edit link in the bottom of a page. These are located in `./docs/.vuepress/shared-locale.config.ts`. These are first included in each of the locales, before the locales are included in the theme.

## Special Features of VuePress Markdown

Writing Markdown for this documentation is, for the vast part, exactly how you would write documents in Zettlr. However, since this is a documentation and it also uses a not completely standard Markdown parser, there are a few additional elements that you can make use of, if you like.

### Admonitions

VuePress supports admonitions in two flavors. Both work exactly the same, they just use a slightly different syntax. The first one uses Pandoc div-syntax, while the second one uses GitHub syntax. Take the following examples:

```markdown
::: note
This is a note with the default title.
:::

> [!tip]
> This is a tip with the default title.

::: warning A custom warning
This is a warning with a custom title.
:::

> [!danger] Something dangerous
> This is a danger alert with a custom title.
```

These would render like so:

> [!note]
> This is a note with the default title.

> [!tip]
> This is a tip with the default title.

> [!warning] A custom warning
> This is a warning with a custom title.

> [!caution] Something dangerous
> This is a danger alert with a custom title.

The available types are:

* `tip`: A tip admonition with a green background
* `warning`: A yellow warning
* `danger`: A red alert
* `info`: A blue information
* `important`: Uses a purple background
* `note`: Uses a gray background
* `details`: This is a special block that hides its contents by default, and only shows the title. If users click on it, the contents expand.

### Code Blocks

Code blocks work exactly the same in Zettlr and in this documentation. By default, they do not show line numbers. However, sometimes you may want to add line numbers. To do so, add `:line-numbers` to the block:

~~~markdown
```ts:line-numbers
// In this code block, line numbers are enabled
const var = 1
```

```ts:line-numbers=10
// Line numbers start at 10
const var = 1
```
~~~

### Preview Containers

Especially to demonstrate Markdown syntax to new users, a particularly helpful feature are preview containers. These let you specify some Markdown syntax that will get rendered, and also offer the users the ability to show the source code for them:

```markdown
::: preview This is a title for the container
Preview Contents
:::
```

This will render the preview contents as regular Markdown inside a container. That container also has a button that, when clicked, shows the original source for the rendered Markdown.

## License

This documentation is licensed via the GNU GPL v3 license.
