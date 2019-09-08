# Zettlr Documentation

This repository holds the official documentation for the [Zettlr markdown app](https://www.zettlr.com/). It is hosted publicly on GitHub to give you the chance to easily submit modifications and help the Zettlr documentation stay comprehensive even for new users who need a hand in getting to grips with Zettlr.

**Contributions from the Community are encouraged!** If you spot typos, wrong our outdated information, or have other good input to improve the documentation, we appreciate all your ideas.

## How it Works

The whole documentation is written in Markdown. Therefore, to contribute you only need to know a little bit of [Markdown](https://www.markdownguide.org/basic-syntax/)! Simply [browse the documentation](https://docs.zettlr.com/), and click the "Edit on GitHub" button on the page you want to edit. Then, simply modify the page contents and create a pull request.

For advanced editing, here's the list of steps for contributing to the documentation:

1. Fork this repository.
2. Modify the Markdown source files, and other files as necessary.
3. Commit them and then open a Pull Request.

As soon as we run a new build, your changes will automatically be included and are available at https://docs.zettlr.com/.

## New Pages and Changes to the Structure

New pages in our documentation will require some structural adjustments, which you need to discuss beforehand. If you have an idea on how to structure the documentation, please discuss your proposal on our [forum](https://forum.zettlr.com).

## The Structure

These docs are multi-language. Inside the `docs`-subdirectory, you'll find all languages inside ISO-coded directories. Inside these, you will find one `assets`-folder, which contains a symbolic link to the top-level assets's `app.css`-file. The rest of the files are independent and unique for each language.

You can create a `resources` directory on the root level to store additional files that you may need, as the `.gitignore` file will not commit this directory.

## Testing and Building

To locally test how your changes work out, you'll need to install [MkDocs](https://www.mkdocs.org/). MkDocs is a comprehensive library that allows for easy building of whole documentations. Please follow the instructions by the creators of MkDocs on how to set up the software on your computer.

Most of the default commands won't work with our setup, so please use the custom scripts:

### serve.sh

The `serve.sh`-script serves a specific language for testing. Simply run:

```bash
$ ./scripts/serve.sh en
```

and replace "en" with an existing language code to spin up the development server. If you omit this, it will simply spin up the English language server.

### build.sh

The `build.sh`-scripts builds the full documentation. Simply run it. It will scan the `docs`-directory and run the corresponding `.yml`-configuration file located in the `config`-directory.

## Create More Languages

Want to add a language? Perfect, here's how you do it:

1. Copy any of the configuration files in `./config`. Rename it to the corresponding ISO-code (e.g. `es` for Spanish, `fr` for French, and so on).
2. Create a new directory corresponding to the same ISO-code in `./docs`.
3. Inside this directory, create an `assets`-subdirectory and create a symbolic link to the `./assets/app.css`-CSS file. This is important so that changes to the master file are propagated to all languages, keeping it DRY.
4. Head to the `./assets/index.html`-file and add your language to the bottom (simply copy one of the existing list items, the changes necessary should be self-explanatory).
5. Add your documentation and adapt the `./config/<code>.yml`-configuration file as appropriate.
6. Commit via PR.

## License

This documentation is licensed via the GNU GPL v3 license.
