# Setting up LanguageTool locally

Zettlr features an integration with LanguageTool, an online service that not only checks your spelling, but also grammar and style. However, being an online service, the default setting of Zettlr requires a connection to servers operated by a company, which can constitute a privacy risk since your texts have to be sent over the internet to be checked.

One reason why Zettlr contains a LanguageTool integration is because there is also the possibility to install the service locally on your computer in which case your text remains on your device.

!!! note

    The following guide requires administrative permissions on your computer. Furthermore, approximately 1.5 GB of free disk space are required. You do not need technical knowledge to follow this guide.

## Prerequisites

The LanguageTool server can be found online [in this repository](https://github.com/languagetool-org/languagetool). In this guide, we will be setting this up with [Docker](https://en.wikipedia.org/wiki/Docker_(software)). The primary reason is that LanguageTool requires Java, which is difficult to set up. Docker makes this process much simpler.

!!! note

	On macOS, this guide will work as-is. On non-Apple-computers, you will have to enable Hardware virtualization. This must sometimes be enabled in the computer's BIOS, and/or in the Windows settings. [Here is one guide](https://www.windowscentral.com/software-apps/windows-11/how-to-enable-virtualization-on-windows-11).

## Setting up Docker Desktop

If you do not already have Docker installed, you'll need to set up Docker Desktop first. To do so, head over to [Docker's download page](https://www.docker.com/products/docker-desktop/) and download the appropriate installer. Supported are Macs with both Intel and Silicon chips, Windows, and Linux.

Install Docker Desktop according to the instructions for your operating system.

During setup, Docker will ask for various permissions to set up a variety of background services – more than you may be used to, especially on macOS. The reason is that Docker is a virtualization environment that needs to communicate directly with your hardware.

## Setting up LanguageTool

After you've set up Docker, it is time to install LanguageTool. To do so, you'll need to launch Docker and make sure the Docker Engine is running. To ensure that Docker always runs when you start your computer, you may need to go into the settings and select “Start Docker Desktop when you log in.” (While you’re there, you can also disable the telemetry by unchecking “Send usage statistics.”)

After you're done, click in the large search bar at the top of the Docker window and type `erikvl87/languagetool`. This will bring up a list of search results. In the “Images” tab, you'll need to select the entry `erikvl87/languagetool` and click “Pull.”

!!! note

	To “pull” a Docker image just means to download it on your computer. The LanguageTool image needs roughly 500 MB of disk space.

Once the download is finished, click on “Images” in the left sidebar of Docker. You will see the image displayed there. In the “Actions” column click on the “Play” button to start the image.

A new window will pop up allowing you to “Run a new container.” At this point, you will want to first expand the “Optional settings.”

Give your container a readable name, such as “LanguageTool.” If you do not do so, Docker will generate a random name that makes it harder to see what is running, especially if you have multiple containers running at the same time.

The second important setting you want to change is for the ports. Enter a port number (the default is 8010). This is crucial. You can also leave it blank to have it randomly generated, but you will need this number.

Finally, you can set a few environment variables to fine-tune the behavior of LanguageTool. These are optional. If you want to learn more, please [see the README file of the image](https://hub.docker.com/r/erikvl87/languagetool).

Now, click on “Run.” You should be automatically taken to the “Containers” tab where you will see some log output that shows you what LanguageTool is doing.

Below the container name at the top, you should see a link that says something like `8010:8010`. Click on that now. It should open your browser with a URL such as `http://localhost:8010`. If LanguageTool is running fine, it will say “Error: Missing arguments for LanguageTool API.”

At this point, LanguageTool is running!

## Setting up Zettlr to use LanguageTool locally

It is now finally time to direct Zettlr how to connect to your local setup of LanguageTool. To do so, start Zettlr and open the preferences. Go into the Spellchecking tab.

In this tab, activate the “Use LanguageTool” switch and select “Custom server” as your LanguageTool Provider. In the Custom server field then, enter the URL you just opened, e.g., `http://localhost:8010/`.

That's it! Now, Zettlr should be able to use LanguageTool locally and none of your text will be sent over the internet again. This has the added benefit that your own setup of LanguageTool also works if you’re offline, e.g., while travelling.

Additionally, if you use the LanguageTool browser extension to check your text input on websites, you can also direct that extension to connect to your local setup instead.

## Maintenance and Housekeeping

From time to time, LanguageTool will receive updates, and in turn the Docker image will also be updated. In that case you may need to delete the existing container and re-download the newer image to get the most recent updates. Also, you may need to double-check if Docker and LanguageTool are running whenever you start your computer.

If Zettlr complains that LanguageTool is offline (shown in the status bar), this indicates that it does not seem to be running. In that case, it should suffice to start the container again.
