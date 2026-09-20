# Tables

Another element that Zettlr supports are tables. Tables originate in the “GitHub flavored” dialect of Markdown, but have been extensively improved upon by Pandoc and others.

> [!important]
> While pipe-tables are supported widely and should be correctly identified by many other editors and tools, the same cannot be said for grid tables. In general, tables are difficult to handle, and as such they are not necessarily as widespread as one would like. The best table support is provided by Pandoc, meaning that exports from Zettlr should always work best.

## Introduction to Tables

Tables in Markdown can be written in one of two styles: there are **grid** tables and there are **pipe** tables. These names refer to the shape of the table syntax.

A grid table looks like this:

```markdown
+----------+----------+
| Cell A:A | Cell A:B |
+==========+==========+
| Cell B:A | Cell B:B |
+----------+----------+
```

Result:

| Cell A:A | Cell A:B |
|----------|----------|
| Cell B:A | Cell B:B |

The same table can be produced with pipe characters:

```markdown
| Cell A:A | Cell A:B |
|----------|----------|
| Cell B:A | Cell B:B |
```

Result:

| Cell A:A | Cell A:B |
|----------|----------|
| Cell B:A | Cell B:B |

::: tip
The complete syntax reference for grid tables can be found in the [Pandoc manual](https://pandoc.org/MANUAL.html#extension-grid_tables). The syntax for pipe tables is located [here](https://pandoc.org/MANUAL.html#extension-pipe_tables).
:::

Specify the alignment of the table columns with colons (`:`). A single left colon (or none) specifies the default left alignment, whereas a right colon specifies right alignment. Two colons specify centered alignment:

```markdown
| Amount | Description | Price |
|:-------|:-----------:|------:|
| 3      | Carottes    | $1    |
| 1      | Celery      | $0.50 |
| 1      | Bread       | $4.69 |
```

Result:

| Amount | Description | Price |
|:-------|:-----------:|------:|
| 3      | Carottes    | $1    |
| 1      | Celery      | $0.50 |
| 1      | Bread       | $4.69 |

It doesn't matter how you align the table's contents in your documents, as long as the colons are placed accordingly. The table will be exported using the correct alignment later on. In addition, the [table editor](../editor/tables.md) will correctly pre-render your tables.

## Table Captions

Zettlr supports table captions that describe their contents. You do so by creating a new block directly below the table that describes it:

```markdown
| Amount | Description | Price |
|:-------|:-----------:|------:|
| 3      | Carottes    | $1    |
| 1      | Celery      | $0.50 |
| 1      | Bread       | $4.69 |

: This table lists items alongside their amount and price.
```

While Zettlr does not pre-render table captions in a special way, they will be correctly transformed when you export the document.

## Inserting Tables

Since creating the basic structure of a table can be cumbersome, Zettlr includes a feature that can generate the correct syntax. To insert a table in your document, click on the corresponding toolbar button that looks like a table.

A pop-up will open that shows you a grid. When you move your mouse over the grid, the top-left cells of this grid will be highlighted. Move the mouse cursor until the correct amount of columns and rows are highlighted, and click. Zettlr will then insert the basic scaffold for a pipe table of that size.

## Keyboard Shortcuts

To further aid in working with tables, all of the shortcuts that are supported in the [table editor](../editor/tables.md) are also supported when working with raw Markdown tables.

In addition, even though the table editor cannot preview grid tables, several commands work correctly in grid tables.