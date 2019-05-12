# Zettlr Documentation

This repository holds the official documentation for the Zettlr markdown app. It is hosted publicly on GitHub to give you the chance to easily submit modifications and help the Zettlr documentation stay comprehensive even for new users who need a hand in getting to grips with Zettlr.

**Contributions from the Community are encouraged!** If you spot typos, wrong our outdated information, or have other good input to improve the documentation, we appreciate all your ideas.

## How it Works

The whole documentation is written in Markdown. Therefore, to contribute you only need to know a little bit of Markdown, and then you can modify the documentation! Before we get to the details, here's the list of steps for contributing to the documentation:

1. Fork this repository.
2. Modify the Markdown source files, and other files as necessary.
3. Commit them and then open a Pull Request **to the develop branch**.

As soon as we run a new build, your changes will automatically be included and are available at https://docs.zettlr.com/.

## New Pages and Changes to the Structure

New pages in our documentation will require some structural adjustments, which you need to discuss beforehand. If you have an idea on how to structure the documentation, please discuss your structure on our forum. If your changes are reasonable, we will see to making the changes as soon as possible so that you can begin your work.

## The Structure

All source files reside in the `docs` directory. The images reside in the `assets` directory within the `docs`-directory. The names of the files should speak for themselves.

You can create a `resources` directory to store additional files that you may need, as the `.gitignore` file will not commit this directory.

## Testing and Building

To locally test how your changes work out, you'll need to install MkDocs. MkDocs is a comprehensive library that allows for easy building of whole documentations. Please follow the instructions by the creators of MkDocs on how to set up the software on your computer.

If MkDocs is set up, inside your directory run:

```bash
$ mkdocs serve
```

to start up a local development server which will watch the files as you go. To build the page locally, run:

```bash
$ mkdocs build
```

Further commands and options are available at their homepage.
