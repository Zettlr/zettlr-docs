# AutoKorrektur und magische Anführungszeichen

AutoKorrektur ist eine bekannte Funktion, die auch in Zettlr unterstützt wird. Sie haben eine Fülle von Einstellungen zur Verfügung, um die Funktionsweise von AutoKorrektur anzupassen. Sie können sie in den [Einstellungen] (../reference/settings.md) aktivieren und deaktivieren.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/iPRDPTtJuCA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## AutoKorrektur

Die Autokorrektur überprüft ständig, was Sie eingeben, und sobald sie auf eine Zeichenfolge aus der Ersetzungstabelle stößt, ersetzt sie diese Zeichenfolge durch die von Ihnen angegebene Ersetzung.

Zettlr wird mit einem vordefinierten Satz von Ersetzungen für AutoKorrektur geliefert, der die gängigsten Ersetzungen abdeckt, z. B. das Ersetzen von zwei Bindestrichen (--) durch einen Bindestrich (-). In den Voreinstellungen können Sie Ersetzungen hinzufügen, ändern oder entfernen. Die linke Spalte enthält die Zeichen, nach denen das Programm sucht, während die rechte Spalte die jeweiligen Ersetzungen enthält.

AutoKorrektur gibt es in zwei Varianten: Sie können entweder den "Word"-Modus oder den "LibreOffice"-Modus wählen - je nachdem, ob Sie eher mit Microsoft Word oder LibreOffice vertraut sind. Die beiden Modi unterscheiden sich darin, wie sie ausgelöst werden. Der Word-Modus ist in der Regel aggressiver und versucht sofort, jede Zeichenfolge zu ersetzen, auf die er trifft. Im LibreOffice-Modus müssen Sie entweder die Leertaste oder die Eingabetaste drücken, bevor er versucht, etwas zu ersetzen. Sie können eine Ersetzung jederzeit rückgängig machen, indem Sie die Rücktaste drücken.

> Wir empfehlen den LibreOffice-Modus, da er es Ihnen erlaubt, eine Ersetzung selektiv zu verhindern, indem Sie "Umschalt+Leertaste" statt nur "Leertaste" und "Umschalt+Eingabetaste" statt nur "Eingabetaste" drücken.

## MagicQuotes

MagicQuotes ist eine Erweiterung, die Ihnen hilft, typografisch korrekte Anführungszeichen zu schreiben, anstatt der Standardzeichen (`"` und `'`). Sie können die Anführungszeichen entweder aus einer Dropdown-Liste auswählen oder einen vordefinierten Satz für einige Sprachen auswählen, indem Sie die entsprechende Schaltfläche in den Einstellungen drücken. Wenn Sie die erste Option (oder die Schaltfläche "Keine") wählen, werden die Standardanführungszeichen wiederhergestellt.

> MagicQuotes ist automatisch aktiv, solange AutoKorrektur aktiv ist. Wenn Sie AutoKorrektur deaktivieren, wird auch MagicQuotes deaktiviert. Um MagicQuotes selektiv zu deaktivieren, während die AutoKorrektur-Funktionalität beibehalten wird, setzen Sie MagicQuotes auf die Standardanführungszeichen.
