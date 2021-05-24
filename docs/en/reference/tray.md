# Tray
Optionally, Zettlr can show a tray with the Zettlr icon and a context menu in the system's notification area. When enabled, Zettlr will stay running after closing the editor window.

## Platform support
- Windows 10
- MacOS
- Linux

## Activate Tray
To activate the tray, open Preferences using either the menu item, the toolbar button or pressing `Cmd/Ctrl+,`. In the Advanced tab, select **Show app in the notification area** (or **Show app in the notification area** when using MacOS).

## Guide
1. When the tray is active, Zettlr will stay running after closing the editor window using `x`. 

    ![taskbar wins10](../img/zettlr-taskbar-Windows-10.png)

2. To show the editor window again, select the Zettlr tray to display the context menu and select `Show Zettlr`.

3. To quit Zettlr, select the Zettlr tray to display the context menu and select `Quit` or select `File` `Quit` using the main menu. 

    ![close taskbar wins10](../img/zettlr-taskbar-with-quit-Windows-10.png)

    If there are unsaved changes, Zettlr will ask you if you want to save the changes.

    ![save change warning taskbar wins10](../img/zettlr-taskbar-change-save-warning-Windows-10.png)

**Notice**: 
For Linux Gnome desktop, gnome-shell extension [AppIndicator Support](https://extensions.gnome.org/extension/615/appindicator-support/) is required to activate the tray. If not available you will see:

'Tray is not supported. Gnome Extension "KStatusNotifierItem/AppIndicator Support" is required for Tray support on the Gnome Desktop.'

![Extension Support Preferences Warning](../img/zettlr-taskbar-extension-support-warning.png)
