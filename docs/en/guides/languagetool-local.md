# Setting up LanguageTool locally

Zettlr features an integration with LanguageTool, an online service that not only checks your spelling, but also grammar and style. However, being an online service, the default setting of Zettlr requires a connection to servers operated by LanguageTooler GmbH, which can constitute a privacy risk since your texts have to be sent over the internet to be checked.

However, one reason why Zettlr contains a LanguageTool integration is because there is also the possibility to install the service locally on your computer in which case none of your text makes it out into the internet.

!!! note

    The following guide requires administrative permissions on your computer. Furthermore, approximately 1.5 GB of free disk space are required. You do not need technical knowledge to follow this guide.

## Prerequisites

The LanguageTool server can be found online [in this repository](https://github.com/languagetool-org/languagetool). In this guide, we will be setting this up with Docker. The main reason is that LanguageTool requires Java, which can be a little bit more difficult to set up.

Docker is a way to download a small virtual machine that contains all the required software to run LanguageTool. Instead of installing a plentitude of different software packages just to get LanguageTool to run, in this guide we will set up a single piece of software – namely Docker Desktop – and then download and start a virtual machine that contains all the code that the LanguageTool server requires.

If you want to know more about what Docker is and how it works, a good primer is [the corresponding Wikipedia page](https://en.wikipedia.org/wiki/Docker_(software)).

## Setting up Docker Desktop

If you do not already have Docker installed, you'll need to set up Docker Desktop first. To do so, head over to [Docker's download page](https://www.docker.com/products/docker-desktop/) and download the appropriate installer. Supported are Macs with both Intel and Silicon chips, Windows, and Linux.

Install Docker Desktop now according to the operating system that you have.

During setup, Docker will ask for many different permissions to set up a variety of background services – more than you may be used to, especially on macOS. The reason is that Docker Desktop is just a shiny graphical user interface over a relatively complex command-line process that is normally found on large server infrastructure.

## Setting up LanguageTool

After you've set up Docker, it is time to install LanguageTool. To do so, you'll need to launch Docker and make sure the Docker Engine is running. To ensure that Docker always runs when you start your computer, you may need to go into the settings and select "Start Docker Desktop when you log in". (While you're there, you can also disable the telemetry by unchecking "Send usage statistics".)

After you've done so, click in the large search bar at the top of the window and type in `erikvl87/languagetool`. This will bring up a list of search results. In the "Images" tab, you'll need to select the entry "erikvl87/languagetool" and click "Pull".

To "pull" a Docker image just means to download it on your computer. As you can see, it roughly needs 500 MB of disk space.

After you have done so, click on "Images" in the left sidebar of Docker. You will see the image displayed there. In the "Actions" column click on the "Play" button to start the image.

A new window will pop up allowing you to "Run a new container". At this point, you will want to first expand the "Optional settings".

Give your container a readable name, such as "LanguageTool". If you do not do so, Docker will generate a random name that makes it harder to see what is running, especially if you have multiple containers running at the same time.

The second important setting you want to change is the Ports setting. Enter a port number (the default is 8010). This is important. You can also leave it blank to have it randomly generated, but you will need this number.

Finally, you can, if you want to, set a few environment variables that you can use to fine-tune the behavior of LanguageTool. These are not covered here, but if you want to learn more, please [read the Readme file of the image](https://hub.docker.com/r/erikvl87/languagetool).

Now, click on "Run". You should be automatically taken to the "Containers" tab where you will see some log output that shows you what LanguageTool is doing.

Look now below the container name at the top, you should see a link that says something like `8010:8010`. Click on that now. It should open your browser with a URL such as `http://localhost:8010`. If LanguageTool is running fine, it will say "Error: Missing arguments for LanguageTool API."

At this point, LanguageTool is running!

## Setting up Zettlr to use LanguageTool locally

It is now finally time to direct Zettlr how to connect to your local setup of LanguageTool. To do so, start Zettlr and open the preferences. Go into the Spellchecking tab.

In this tab, activate the "Use LanguageTool" switch and select "Custom server" as your LanguageTool Provider. In the Custom server field then, enter the URL you just opened, e.g., `http://localhost:8010/`.

That's it! Now, Zettlr should be able to use LanguageTool locally and none of your text will be sent over the internet again. This has the added benefit that your own setup of LanguageTool also works if you're offline, e.g., while travelling.

Additionally, if you use the LanguageTool browser extension to check your text input on websites, you can also direct that extension to connect to your local setup instead.

## Maintenance and Housekeeping

From time to time, LanguageTool will receive updates, and in turn the Docker image will also be updated. In that case you may need to delete the existing container and re-download the newer image to get the most recent updates. Also, you may need to double-check if Docker and LanguageTool are running whenever you start your computer.

If Zettlr complains that LanguageTool is offline (you need to have the status bar activated in your Zettlr preferences), this indicates that it does not seem to be running. In that case, it should suffice to start the container again.
