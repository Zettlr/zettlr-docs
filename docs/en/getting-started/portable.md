# Zettlr as a Portable App

Even though most people will simply install and use Zettlr as a program like any other one, some of you might want to set it up to be used as a *portable* app. Here we describe how this works.

> Note that "portable app" only makes sense in the context of Windows. Though this guide should work cross-platform, it is very uncommon for a Mac or Linux user to use a portable app.

## What is a Portable App?

A portable app is basically a Windows application that is completely independent of the computer it runs on. Frequently, people use apps in a portable configuration in order to store them on USB keys which they can plug into different computers.

The main problem for making an app portable is that many things such as settings, data files, and other important information the app needs to run are normally stored in a few default directories, mostly in the user account of the person currently running a program. However, these are always on the computer, and not on the USB key. The key to making an app portable is thus to teach the app to read and write its data not onto the computer, but onto the USB key.

> If you don't know whether a portable app is the right choice for you, we recommend you just install the app regularly. You can switch to a portable app at any time, as we outline below.

## How to Set Up Zettlr as a Portable App

A portable app in principle is distinguished by just a few characters from a regular install. What we are explaining here basically makes use of a command line switch we use internally to debug the application, but it works perfectly well for maintaining a portable installation.

The first step is to install the application regularly by downloading one of the Windows installers and executing it. However, instead of installing the app into a default location, you should install the app onto your thumb drive (or any other folder – since it will be a portable application, you can move the folder around later on).

After the installer has run, you should be able to see all the required files – `Zettlr.exe`, the `app.asar` file and others – in the folder you have directed the installer to use.

Since Windows 10 does not support relative paths in shortcuts, using a simple shortcut will not work. So what we do next is create a BAT-file that you can run. So create a file that ends in `.bat` – for example, `Zettlr.bat` – and add the following contents:

```
Zettlr.exe --data-dir="./zettlr-config"
```

Now, whenever you start the Batch-file, it should open Zettlr and direct it to use the folder `zettlr-config` to store its data – right where your app is. Of course, you can choose any other folder name.

> Make sure that the data-dir exists *before* starting the app.

## Converting a Static Installation into a Portable App

It is also possible to convert a static installation into a portable app. In order to do so, first copy over the **entire** application directory from Zettlr. All the files in there are necessary. Copy these into any folder you like.

Next, search for the application data directory. It should be `C:\Users\<your-user-name>\AppData\Roaming\Zettlr`, but you can find the correct path in the [setup instructions](setup.md). Copy this directory – also in its entirety – into the copied application directory. You probably want to rename it so you know what's in there.

Lastly, you also need to create a BAT-file like above:

```
Zettlr.exe --data-dir="./zettlr-config"
```

Remember to replace `zettlr-config` with the correct path.
