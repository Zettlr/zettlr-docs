# Document Tabs

Zettlr allows opening multiple documents at the same time in tabs.

These tabs have similarities with tabs in other applications, but some of their features differ from tabs in browser for example.

All tabs are restored when you reopen the application.

## Transiency

There are two kinds of tabs: the "normal" ones, where the filename appears with a regular font, and the so-called "transient" ones, where the filename is written in italics.
A transient tab looses its "transiency" when the file it contains is modified.

If the currently active tab is transient, opening a new document will not occur in a new tab, but instead will replace the document displayed in that tab.
On the contrary, if the tab is not transient, the new document will be opened in a new tab.

![An example of transient tabs](../img/transient_tabs.png)

This is useful when you want to quickly skim through multiple documents, as these documents will override one another unless you modify one.
