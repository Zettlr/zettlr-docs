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

New pages in our documentation will require some structural adjustments, which you need to discuss beforehand. If you have an idea on how to structure the documentation, please discuss your proposal on our [forum](https:/7forum.zettlr.com).

## The Structure

All source files reside in the `docs` directory. The images reside in the `img` directory within the `docs`-directory. The names of the files should speak for themselves. The `assets`-subdirectory holds additional files that are necessary for building the docs.

You can create a `resources` directory on the root level to store additional files that you may need, as the `.gitignore` file will not commit this directory.

## Testing and Building

To locally test how your changes work out, you'll need to install [MkDocs](https://www.mkdocs.org/). MkDocs is a comprehensive library that allows for easy building of whole documentations. Please follow the instructions by the creators of MkDocs on how to set up the software on your computer.

If MkDocs is set up, inside your directory run:

```bash
$ mkdocs serve
```

to start up a local development server which will watch the files as you go. To build the page locally, run:

```bash
$ mkdocs build
```

Further commands and options are available at their [homepage](https://www.mkdocs.org/).

## License

This documentation is licensed via the GNU GPL v3 license.
