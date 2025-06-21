# Tables in Zettlr

Markdown tables are a notoriously difficult thing. Due to the nature of Markdown to be as simple as possible, complexity is what suffers most. Markdown is the perfect choice for writing text and most of what we use during writing (e.g., links, images, headings, or quotes) is handled perfectly in Markdown. Yet, from time to time, we also want to include some data in our works, or tables are simply a better way of visualising ideas.

## Introduction to Tables

Tables in Markdown can be written in one of two styles: there are **grid** tables and there are **pipe** tables. These names refer to what the table will look like.

A grid table would look something like this:

```markdown
+----------+----------+
| Cell A:A | Cell A:B |
+==========+==========+
| Cell B:A | Cell B:B |
+----------+----------+
```

Result:

<!-- NOTE: MkDocs doesn't support grid tables -->

| Cell A:A | Cell A:B |
|----------|----------|
| Cell B:A | Cell B:B |

The same table can be produced with only pipes:

```markdown
| Cell A:A | Cell A:B |
|----------|----------|
| Cell B:A | Cell B:B |
```

Result:

| Cell A:A | Cell A:B |
|----------|----------|
| Cell B:A | Cell B:B |

!!! note

    The entire syntax for grid tables can be found in the [Pandoc manual](https://pandoc.org/MANUAL.html#extension-grid_tables). The syntax for pipe tables are located [here](https://pandoc.org/MANUAL.html#extension-pipe_tables).

Alignment of the table columns can be specified with colons (`:`). A single left colon or none specifies the default left-alignment, whereas a right colon specifies right alignment, and two colons specify centered alignment:

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

Note that it doesn't matter how you align the table's contents in your documents, as long as the colons are placed accordingly. The table will be exported using the correct alignment later on.

But as you can see, Markdown tables tends to get rather wide due to the many characters involved. Take for instance the following example:

```markdown
| # | Name              | Description                                                                                                                                                                     | Price     | Quantity |
|--:|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------|
| 1 | Sonic Screwdriver | A device for all purposes. It replaces all of your current tools to account for a multi-dimensional journey through space and time.                                             | $99.99    | 1        |
| 2 | E-11 Rifle        | Trusted by imperial troops, this rifle is the least accurate, but still most used weapon in the Galaxy.                                                                         | $329.95   | 2.000    |
| 3 | Towel             | We all know that you always should bring a towel to any intergalactic journey. This multi-purpose towel is the ideal companion in case your planet is about to be exterminated. | $12.30    | 157      |
| 4 | Your Mom          | Are you in an argument with a philosopher? Try this Freudian-tested kill-all-argument!                                                                                          | priceless | 1        |
```

In Zettlr, it would look like the following:

![long_markdown_table.png](../img/long_markdown_table.png)

Even though the table cells are each aligned to fit the total width of each column, you cannot make out the fact that this is indeed a valid Markdown table, as each line gets wrapped and the table structure is impossible to discern. Without the counter in the first column, you would even have a hard time making out the number of rows in it.

## Inserting Tables

Since creating the basic structure of a table can be cumbersome, Zettlr includes a feature that can generate the correct syntax. To insert a table in your document, click on the corresponding toolbar button that looks like a table.

A pop-up will open that shows you a grid. When you move your mouse over the grid, the top-left cells of this grid will be highlighted. Move the mouse cursor until the correct amount of columns and rows are highlighted, and click. Zettlr will then insert the basic scaffold for a table of that size.

## The Table Editor

Obviously, writing Markdown tables is sometimes unavoidable, but always painful. To make creating tables easier, Zettlr ships with a table editor that is enabled by default. The table editor will detect Markdown tables in your document and render them as actual tables that support line wrapping and contain less cluttered borders.

With the table editor, the above mentioned table looks like this:

![A table as displayed by the table editor](../img/zettlr_table.png)

### Editing Tables

To edit tables with the table editor, click into any of the cells of the table and begin writing. The regular Markdown syntax is supported.

Whenever a cell is currently active (indicated by a shimmer around its borders), you will see the Markdown source of the cell. Every cell that is not active will be rendered as HTML to make the display less cluttered.

There is a slightly translucent icon on the top of the table that will turn from green to red as you edit your table. In order to save the changes to the table, you need to click that icon. Once the changes are applied to the underlying Markdown document, the icon will turn green again. You can also press <kbd>Cmd/Ctrl</kbd>+<kbd>S</kbd> while the table is focused.

!!! warning

    While the table editor aims to make editing tables easier, it does so at the expense of having the table contents automatically update. Therefore, always remember to click the icon or press <kbd>Cmd/Ctrl</kbd>+<kbd>S</kbd> before leaving or closing the document. As a tip: You can press <kbd>Cmd/Ctrl</kbd>+<kbd>S</kbd> twice after modifying a table to first apply the changes to the table to the document and immediately afterwards save the entire document.

## Keyboard Navigation

While editing a table, the following keyboard shortcuts are available:

- <kbd>Tab</kbd>: Move to the next cell. If the last column is active, move to the first cell in the next row. If your cursor was in the last column of the last row, a new row will be added automatically.
- <kbd>Shift</kbd>+<kbd>Tab</kbd>: Move to the previous cell. If your cursor was in the first column, move to the last cell in the previous column.
- <kbd>Return</kbd>: Move to the same column in the next row. If your cursor was in the last row, a new row will be added automatically.
- <kbd>Arrow Up</kbd>/<kbd>Arrow Down</kbd>: Move to the same column in the previous/next row. No new rows will be added if you are in the first or last row.
- <kbd>Arrow Left</kbd>/<kbd>Arrow Right</kbd>: Move the cursor left/right. If the cursor is at the beginning/end of the cell's contents, move to the previous/next cell.

With these shortcuts, you can easily enter content into your tables using natural movements. You would first want to fill out the table header and afterwards you want to add one set of data per line. Therefore, <kbd>Tab</kbd> is your friend here:

![A visual explainer how the keyboard navigation works](../img/zettlr_table_movement.png)

## The Edge Buttons

The table editor also features so-called **edge buttons**. These are two groups of buttons and four directional buttons that will appear once you hover over a table with your mouse:

![The table editor's edge buttons](../img/table_with_edge_buttons.png)

They are transparent and turn opaque once you move your mouse cursor over them.

The four `(+)` buttons at the center of the edges of the table will **add a row or column respectively** at the indicated position. So click the left add button to prepend a column to the left side of the currently active cell, and click the bottom add button to append a row below the currently active cell.

At the top of each table, there are two additional button groups. The left button group contains three buttons that **align the active table column** left, center or right. Click one of the buttons to apply the alignment. The change will be displayed immediately for your visual confirmation.

The right button group contains two buttons for **removing the active table row or column**. Simply place your cursor inside any cell inside the row or column you wish to remove and hit one of the buttons.

!!! note

    Always make sure to place your cursor in the correct cell before removing columns or rows.

![How to determine the active row and column](../img/table_active_cell.png)

## Complex tables

Even though Markdown strictly supports tables, these will only suffice for tables up to a certain complexity. Sometimes, you'll want to insert more complex tables, however. For example, regression model result tables can be quite complex and thus it can be difficult to represent them as simple Markdown tables.

Cells spanning multiple rows or columns are simply impossible given the limited syntax of Markdown tables. To add these, you'll have to use native HTML or LaTeX commands. These give you the maximum amount of freedom to do whatever you like.

What you can do in this case is to include such tables as raw LaTeX or HTML source code. There are great tools out there to [transform your RDataset](https://tex.stackexchange.com/questions/364225/export-tables-from-r-to-latex) or Stata datafile into LaTeX or HTML.

To include such a file in a larger research project, you can make use of Zettlr's [project feature](../advanced/projects.md).
