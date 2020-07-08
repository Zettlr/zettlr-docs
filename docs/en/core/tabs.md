# Document Tabs

Zettlr offers to open multiple documents at the same time in tabs. These tabs work similar to tabs in other applications, but as they are not browser tabs, there are certain differences to how they work.

All tabs are restored when you reopen the application.

## Transiency

When you open a new document in the file list, it will be opened in what is called a "transient" tab. When the filename on a tab is in italics, this means the tab is transient. If the filename is not in italics, the tab is not considered transient tabs. You can make a transient tab intransient by modifying the file.

If the currently active tab is transient, this means that opening a new document will not open in a new tab, but instead in that one. If the currently active tab is not transient, then a new document will open in a new tab.

![An example of transient tabs](../img/transient_tabs.png)

This means that the transiency only has an effect for opening new files if the active tab is transient. In all other cases, Zettlr will open the file in a new tab instead. This is useful when you want to quickly skim through multiple documents, as these documents will override each other unless you modify one.
