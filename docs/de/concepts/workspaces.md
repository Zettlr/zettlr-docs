# Workspaces und Dateien

Zettlr enthält einen vollständigen Dateimanager, der auf unserer eigenen Dateisystemabstraktionsschicht (FSAL) basiert. Das ist kein Zufall, denn Zettlr wurde mit dem Ziel der Immersion als Leitprinzip entwickelt. In der Praxis bedeutet dies, dass Zettlr von Ihnen erwartet, dass Sie irgendwo auf Ihrem Computer einen Ordner auswählen, in dem Sie den Großteil Ihrer Arbeit mit Zettlr erledigen.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2YX5n8-XVbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> In der gesamten Dokumentation werden die Begriffe "Ordner" und "Verzeichnis" synonym verwendet, da sie sich auf dieselbe Sache beziehen. Der einzige Unterschied ist, dass "Ordner" der Begriff ist, den die meisten Benutzer kennen, während "Verzeichnis" der technische Begriff für Ordner auf Ihrem Computer ist.

## Arbeitsbereiche

Ein Arbeitsbereich bildet die Grundlage für einen einzelnen Dateibaum. Wie Sie vielleicht wissen, werden Dateien hierarchisch in Ordnern auf Ihrem Computer gespeichert. Jedes Verzeichnis auf Ihrem Computer, das Sie mit Zettlr öffnen, wird als Arbeitsbereich bezeichnet.

Sie können mehrere Arbeitsbereiche gleichzeitig laden, z. B. wenn Sie verschiedene Arbeitsbereiche voneinander trennen wollen (z. B. einen Arbeitsbereich namens "Zettelkasten" und einen anderen namens "Projekte"). Wenn Sie das so genannte "PARA"-Prinzip für die Dokumentenarchivierung umsetzen möchten, ist es sinnvoll, vier Ordner auf Ihrem Computer anzulegen, "Projekte", "Archiv", "Ressourcen" und "Bereiche", und jeden als eigenen Arbeitsbereich in die Anwendung zu laden.

Ein Screenshot einer Konfiguration mit mehreren Arbeitsbereichen und Dateien](../img/file_tree_roots.png)

Zettlr überwacht alle Dateien innerhalb Ihrer Arbeitsbereiche auf Änderungen, die Sie aus der Ferne vornehmen. Wenn Sie beispielsweise einen Cloud-Dienst zur Sicherung Ihrer Dateien nutzen, z. B. Google Drive, Dropbox oder eine Nextcloud-Instanz, kann es sein, dass Ihre Cloud-Anwendung Änderungen an einer Datei erst synchronisiert, nachdem Sie Zettlr gestartet haben. Dann erkennt Zettlr dies und spiegelt diese Änderungen entsprechend in der Anwendung wider.

> Es wird dringend empfohlen, mindestens einen Arbeitsbereich in der Anwendung geöffnet zu haben. Es ist auch möglich, nur Dateien von Ihrem Computer zu öffnen und an ihnen zu arbeiten, aber davon wird abgeraten, da Sie sowohl viele Funktionen verlieren, die an Arbeitsbereiche gebunden sind, als auch, da Zettlr um dieses Konzept herum aufgebaut wurde, mit diesem Ansatz wahrscheinlich weniger produktiv sein werden.

## Eigenständige Dateien

Eigenständige Dateien sind Dateien, die Sie z. B. durch Doppelklick auf Ihrem Computer öffnen, die aber nicht in einem der geöffneten Arbeitsbereiche enthalten sind. Sie bilden selbst ein Element im Dateibaum von Zettlr, aber im Gegensatz zu Arbeitsbereichen bestehen diese "Bäume" nur aus einer einzigen Datei.

Sie können Dateien nicht direkt aus der Anwendung heraus öffnen. Vielmehr werden sie geöffnet, wenn Sie auf eine Datei irgendwo auf Ihrem Computer doppelklicken. Wenn sich diese Datei in einem Arbeitsbereich befindet, navigiert Zettlr einfach zu diesem Arbeitsbereich und öffnet die Datei entsprechend. Wenn die Datei jedoch in keinem der Arbeitsbereiche von Zettlr zu finden ist, öffnet Zettlr die Datei als eigenständige Datei.

Eigenständige Dateien werden immer an den Anfang der Arbeitsbereiche sortiert, so dass Sie leichten Zugang zu ihnen haben. Sie können sie auch "schließen", was bedeutet, dass sie einfach aus der Anwendung entladen werden, aber unberührt bleiben, oder sie entfernen, was bedeutet, dass Zettlr sie aus der Anwendung entlädt und sie in den Papierkorb verschiebt.

> Dieses Verhalten macht es einfach, ein oder zwei zusätzliche Markdown-Dateien in die Anwendung zu laden, die sich nicht in einem der Arbeitsbereiche befinden. Dies ist z.B. für Softwareentwickler sinnvoll, die nur die Readme-Datei ihres Projekts bearbeiten wollen, ohne das gesamte Verzeichnis in Zettlr zu laden.
