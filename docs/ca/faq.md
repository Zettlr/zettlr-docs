# Preguntes més Freqüents (FAQ)

## He intentat instal·lar Zettlr a Windows, però hi ha un avís de seguretat que diu que no hauria d'instal·lar l'aplicació.

Tant Windows com macOS requereixen l'anomenada "signatura de codi" per poder confiar en l'aplicació. Tot i que aquesta és una gran tècnica per evitar que el codi maliciós faci mal al vostre sistema, requereix un certificat de signatura de codi. Els fitxers binaris de Zettlr estan signats a macOS i Windows, però actualment estem en procés d’aconseguir instal·lacions suficients a Windows per guanyar-nos la “confiança” i que tant el Windows Defender com l'AntiVir (programa opcional) permetin la instal·lació sense cap advertència. Fins aleshores, molts paquets de programari AntiVir emetran almenys una advertència, dient "No tenim prou informació sobre l'origen d'aquest fitxer" (o similar). Si heu descarregat Zettlr [des de la nostra pàgina d'inici](https://www.zettlr.com/download) o des de la [pàgina de versions de GitHub](https://github.com/Zettlr/Zettlr/releases) (tots dos són els mateixos fitxers, ja que la pàgina d’inici de Zettlr us redirigeix ​​a la versió GitHub corresponent), podeu instal·lar l’aplicació de forma segura i ignorar l’advertència.

## No puc ignorar l'avís de seguretat al Windows i, per tant, no puc instal·lar l'aplicació.

Rebre un avís de seguretat a Windows és una cosa, però a moltes empreses el departament de TI estableix restriccions addicionals perquè no pugueu ignorar aquest avisos de seguretat i, per tant, no pugueu instal·lar l’aplicació. Si treballeu en un entorn tan restringit, és millor que parleu amb el vostre departament de TI i els hi demane que posin Zettler a la llista blanca perquè vosaltres (o els vostres administradors) pugueu instal·lar l’aplicació. Si tenen preguntes sobre els orígens i / o la seva fiabilitat, el millor és mostrar-los [el repositori GitHub de Zettlr](https://github.com/Zettlr/Zettlr).

## Hi ha plans per portar Zettlr a telèfons mòbils i tauletes, per a Android o iOS?

Cada cop rebem més sol·licituds de versions per a mòbils de Zettlr. Estem molt contents que Zettlr us agradi tant com per desitjar tenir-lo en tots els vostres dispositius i ens encantaria complir aquest desig! Malauradament, però, els nostres recursos són suficients per mantenir el desenvolupament de Zettlr en funcionament i, de moment, no és possible afegir més feina.

## Què és Markdown?

Markdown és un llenguatge de marques senzill que us permet escriure text de manera tan senzilla com en qualsevol programa d'ofimàtica, però amb molt menys desordre. En lloc d’haver de seleccionar manualment totes les opcions de format, a Markdown, escriviu un "#" és suficient per indicar un encapçalament. Voleu saber-ne més? Aneu a la [documentació sobre Markdown](reference/markdown-basics.md)!.

## A l'exportació de PDF, tinc problemes amb el tipus de lletra. Que he de fer?

LaTeX pot ser molt tiquis-miquis quan es tracta del tipus de lletra. Però no us preocupeu: us cobrim a la [secció sobre preferències de PDF](https://docs.zettlr.com/ca/reference/settings/#pdf-preferences).<!--comprovar-->

## Si ja no vull fer servir Zettlr, què he de fer per canviar de programa?

Simplement desinstal·leu Zettlr i comenceu a utilitzar un altre programa. Zettlr no s'embolica amb els vostres fitxers. Si heu utilitzat la funció Projectes o heu modificat els directoris, hi haurà fitxers petits anomenats `.ztr-directory` en algunes carpetes. Per eliminar-los, simplement restabliu la classificació per defecte dels directoris i elimineu tots els projectes abans de desinstal·lar l'aplicació (o elimineu aquests fitxers manualment després).

## De vegades no vull la correcció automàtica: com puc fer que no corregeixi automàticament en una instància específica?

Tot i que la correcció automàtica és una eina fantàstica, hi ha alguns casos en els que no volem que s'apliqui, per exemple a la capçalera YAML. Si escriviu els tres punts o guions de tancament, la Correcció automàtica de Zettlr els transformarà en punts suspensius o guions llargs, segons els caràcters utilitzats i la capçalera no quedarà tancada. Zettlr considerarà aleshores que tot el fitxer està escrit en YAML (i no en Markdown). Per a que la correcció automàtica de Zettlr no us molesti, podeu:

1. Si utilitzeu la correcció automàtica a l'estil del LibreOffice, simplement mantingueu premuda la tecla Maj mentre premeu Espai o Retorn (la correcció automàtica només s'aplica a Espai o Retorn). Això demanarà a Zettlr que no "corregeixi" automàticament en aquesta instància.
2. Si utilitzeu la correcció automàtica a l'estil de Word, només cal que premeu Retrocés tan bon punt hàgiu escrit un espai després que s'apliqui la correcció automàtica. D'aquesta manera es desferà la correcció automàtica i es restauraran els caràcters originals.

Si trobeu que alguns caràcters no s'han de substituir la majoria de les vegades, sinó només en poques ocasions, considereu eliminar-los de la taula predeterminada de substitucions de correcció automàtica.

## Utilitzo GNU/Linux i quan suprimeixo fitxers no van a parar a la paperera.

Zettlr mai no elimina completament els vostres fitxers. Sempre els mou a la paperera, de manera que, si eliminés accidentalment un fitxer que necessiteu, sempre es pot restaurar. Als sistemes macOS i Windows, la paperera s'activa per defecte, però en algunes distribucions de GNU/Linux, heu d'activar la funcionalitat de paperera manualment. A GNU/Linux, Zettlr (per ser més precisos: el framework d'Electron que utilitza) fa ús del binari `gvfs-trash` per moure fitxers a la paperera. Per evitar moments de xoc, mai intentarà "deixar enrere" l'eliminació total dels fitxers. Per això, si voleu utilitzar aquesta funcionalitat, assegureu-vos que teniu instal·lat `gvfs-trash`. A Debian / Ubuntu podeu fer-ho executant el codi següent en un terminal:

``` bash
$ sudo apt install gvfs-bin
```

## Quin és el format URI correcte per als enllaços Markdown?

Per defecte, Zettlr fa que es puguin fer clic als enllaços Markdown amb el format `[El vostre text de l'enllaç](el vostre enllaç)`, si manteniu premuda la tecla Ctrl o Alt. Tanmateix, els enllaços de Markdown poden apuntar tant a llocs web com a altres fitxers del vostre ordinador. Podeu ometre molta informació del vostre enllaç i Zettlr utilitzarà l'heurística per completar la informació automàticament, però pot malinterpretar el context i no fer el que voleu. Així és com funciona:

- Els enllaços amb tota la informació present (un protocol i un camí completament qualificat) no s’alteraran. Exemples: `file:///home/foo/documents/test.md` i `http://www.exemple.com/`.
- Els enllaços relatius que segueixin el protocol `file://` es convertiran en enllaços absoluts. Exemple: `file://./relative/file.md` es convertirà en `file:///home/foo/documents /relative/file.md`.
- Suposarà que els enllaços sense protocol segueixen `https://`. Exemple: `www.zettlr.com` es convertirà en `https://www.zettlr.com`.
- Els camins absoluts a fitxers, però sense `file://` se'ls afegirà aquest prefix. Exemple: `/home/bar/documents/absolute.md` es convertirà en `file:///home/bar/documents/absolute.md`.
- Els camins de fitxers relatius amb i sense l'indicador relatiu (`./`) es convertiran en camins de fitxers absoluts. Exemple: `./more/relative.md` i ` more/relative.md` es convertiran en `file:///home/foo/documents/more/relative.md`. **Excepció**: Si es troben a la mateixa carpeta: aleshores `file.extension` els tractarà com un URI (tret que el fitxer sigui `.md`).

Resumint: si us preocupa com es tracten els vostres enllaços, sigueu més explícit. Es poden utilitzar dues regles generals per obligar Zettlr a tractar un enllaç com un fitxer o enllaç web: Afegint el prefix `./` per sol·licitar explícitament un enllaç _a un fitxer_ i afegint `/` per sol·licitar explícitament un enllaç _web_.

## Els enllaços interns no obren el fitxer respectiu.

Si els enllaços interns que s’utilitzen per enllaçar fitxers no funcionin com s’espera, assegureu-vos que heu fet les accions següents:

1. Es reconeix l'enllaç? Zettlr permet definir com són els enllaços interns. Per defecte, estan encapsulats per `[[` i `]]`. Quan Zettlr reconeix un enllaç intern, el pintarà i, si hi passeu per sobre amb el cursor del ratolí, el text encapsulat hauria de subratllar-se. Si no ho fa, Zettlr no considerarà que el que heu escrit sigui un enllaç. Podeu canviar això a la configuració.
2. Heu premut la tecla `Alt` o `Ctrl` mentre feu clic a l'enllaç? Fer clic amb el ratolí en algun lloc del text normalment significa que voleu canviar alguna cosa: heu de dir (prement aquestes tecles) a Zettlr que el que voleu fer és seguir l'enllaç.
3. Heu utilitzat un nom de fitxer o un identificador (ID) vàlids? Zettlr només obre fitxers si coincideixen _exactament_ amb l'identificador o el nom de fitxer indicats. Si no passa res mentre feu clic a l’enllaç, segurament vol dir que no existeix al sistema un fitxer amb l’identificador o el nom de fitxer indicats. Tingueu en compte que heu d'ometre l'extensió del fitxer quan creeu un enllaç. Per exemple, per enllaçar a `my-file.md`, només heu de posar `my-file` dins dels claudàtors.
4. El fitxer està actualment carregat a Zettlr? Els enllaços interns només funcionen si Zettlr n'ha llegit els fitxers.

## Utilitzo LaTeX i vull fer-lo servir també als meus fitxers Markdown. És possible?

Sí. Simplement escriviu les declaracions de `LaTeX` on vulgueu. Tan bon punt exporteu a PDF, Pandoc s'encarregarà de la resta i les declaracions seran interpretades pel motor PDF. Malauradament, no es permet ressaltar la sintaxi `LaTeX`. Tingueu en compte, a més, que Pandoc esborrarà tots els blocs de `LaTeX` abans d’exportar a qualsevol altre format que no sigui PDF: això significa que, per exemple, els blocs que hi hagi entre `\begin` i `\ end` faltaran completament al fitxer d’Office final. En exportar a HTML, es conservaran tots els blocs `LaTeX`, però no es convertiran a cap altra cosa.

## No puc alinear correctament el text.

No és un error, és una característica: Markdown no té els signes de format respectius perquè el text sempre s’ha de justificar o alinear a l’esquerra (per als idiomes LTR) i, per tant, no pertany al conjunt de formats de bloc necessaris que ofereix Markdown. Tot i així, podeu utilitzar les ordres de `LaTeX` per mostrar-les a l'esquerra o a la dreta. Incloeu simplement el text que voleu alinear a la dreta o justificar-lo a `\begin{<option>}` i `\ end{<option>}`, on `<option>` pot referir-se a `flushleft`, `flushright` o poseu un `\justify` davant d'un paràgraf que vulgueu justificar. [Obteniu més informació a sharelatex.com](https://www.sharelatex.com/learn/Text_alignment).

## Voldria que certs encapçalaments no estiguin numerats/no apareguin a la Taula de Continguts al generar el PDF

Aquesta és una característica especial de Pandoc. Afegiu les classes especials `-` (signe menys) o `.unlisted` respectivament. El signe menys evita la numeració, mentre que `.unlisted` evita que l’encapçalament aparegui a la taula de continguts. Tingueu en compte que això només s'aplica al generar el PDF.

Exemples:

```
# Aquest encapçalament estarà numerat, però no apareixerà a la Taula de Continguts {-}

# Aquest encapçalament estarà numerat, però no apareixerà al ToC {.unlisted}

# Aquest encapçalament estarà sense numerar i no apareixerà al ToC {- .unlisted}
```

> Tingueu en compte que les classes especials han de ser l'últim element de la línia. Fins i tot els comentaris han d'anar abans.

## Voldria utilitzar salts de línia sense crear paràgrafs nous, però si premo Enter una vegada, s'elimina el salt d'una línia.

Per forçar Pandoc a representar salts de línia com a tals, finalitzeu la línia amb una barra invertida (`\`) o dos espais. La barra invertida i els dos espais no es representaran al fitxer resultant.

## Realment necessito Pandoc o LaTeX?

Per a l'exportació HTML simple, no. Per a la resta de formats d’exportació, sí. Zettlr depèn d'aquests programes per permetre l'exportació de fitxers. Però no us preocupeu: són de codi obert i totalment gratuits i estan disponibles per a tots els sistemes operatius.

## Com puc instal·lar Pandoc o LaTeX?

Consulteu les seccions de documentació creades específicament per ajudar-vos amb això: [Instal·lació de Pandoc](installation-pandoc.md) i [Instal·lació de LaTeX](installation-latex.md).

## Sembla que Zettlr no troba Pandoc i LaTeX, tot i que estan instal·lats.

Això pot passar si aquest programes s'instal·len en una carpeta no estàndard. Zettlr farà tot el possible per localitzar les aplicacions, però pot fallar si estan enterrades en algun altre lloc. Aquí és on entren en joc les opcions de camí de les preferències. En cas que Zettlr no trobi cap binari, podeu introduir-hi el **camí complet** a la pestanya `Avançat`.

A Windows, no us hauríeu de trobar mai amb aquest problema, sempre que deixeu el camí per defecte (`Fitxers de programa`) que us proposi l'instal·lador. Si heu instal·lat els programes a una altra carpeta, Zettlr no els trobarà, però li podeu indicar (utilitzeu l'explorador per trobar-los) on són dos fitxers: `pandoc.exe` i `xelatex.exe`. Copieu el camí d'accés complet (inclòs el nom de l'executable!) a la secció `Avançat` de les preferències de Zettlr.

A macOS podeu trobar el camí fàcilment obrint `Terminal.app` (es troba a la carpeta Aplicacions a la secció `Altres`) i, a continuació, escriviu `which pandoc` _o_ `which xelatex`, segons el programari que Zettlr no trobi. El terminal simplement emetrà el camí complet al programa.

A les distribucions de GNU/Linux, també heu d'obrir un terminal i utilitzar les mateixes ordres que a macOS: `which pandoc` per Pandoc i ` which xelatex` per a LaTeX.

## En exportar, Zettlr diu que no s'ha reconegut el motor PDF.

Aquest és un error comú de les versions Pandoc anteriors a la 2.x. Quan Zettlr us presenta el següent missatge d'error, vol dir que heu d'actualitzar a Pandoc 2.x:

`pandoc: unrecognized option '--pdf-engine=xelatex' Try pandoc --help for more information.`

La raó és que amb Pandoc 2.0, l’antiga opció `--latex-engine` es va reanomenar a ` --pdf-engine`. [Vegeu més al registre de canvis de Pandoc](https://github.com/jgm/pandoc/blob/master/changelog#L4349).

## En exportar a PDF, rebo constantment missatges d'error.

Per a les primeres exportacions, això és esperable i completament normal. Zettlr simplement passa el fitxer a Pandoc, que el transmet a LaTeX. Però la plantilla que utilitza Zettlr per a les vostres exportacions de PDF requereix alguns paquets addicionals que no sempre s’instal·len en instal·lar LaTeX.

L'error més comú té aquest aspecte:

**LaTeX Error: File \<some name\>.sty not found.**

Això significa que no s'ha trobat un determinat paquet (acaben en `.sty`). A Windows, aquests paquets s’haurien d’instal·lar automàticament tan aviat com siguin necessaris; a macOS i Linux, simplement heu d'executar l'ordre `tlmgr install <some name>`.

En cas d'altres errors, Zettlr permet copiar i enganxar el text del missatge d'error: gairebé sempre una ràpida cerca a Google us portarà a una solució; i en gairebé tots els casos l'única acció necessària serà la instal·lació d'un altre paquet.

## He trobat un error (bug).

Aquesta és una gran notícia! Bé, no és fantàstic, però és bo que ho hagueu trobat. En aquest cas, dirigiu-vos a [GitHub](https://github.com/Zettlr/Zettlr/) i obriu una incidència perquè sàpiguem què passa i puguem treballar per resoldre-ho.

## Tinc una proposta! / Tinc un suggeriment per fer una funció més eficient.

Fantàstic! L'experiència (però sobretot les propostes i suggerminets) d'altres persones ens ajuden a millorar l'eficiència de l'aplicació i a adaptar-la a les diferents necessitats de cada usuària o usuari. Dirigiu-vos a [GitHub](https://github.com/Zettlr/Zettlr/) i obriu una incideǹcia per a que poguem treballar-hi.

## Què passa amb la meva privacitat? Zettlr transfereix alguna dada o no m'he de preocupar?

Per a Zettlr, el primer és la privacitat. No envia cap dada i és totalment funcional fora de línia. Tot i això, hi ha un cas en què Zettlr envia dades a través del web: la comprovació de l’actualització. Sempre que obriu Zettlr o feu servir l'element del menú, Zettlr es connectarà a l'API de Zettlr per recuperar una llista de totes les versions. Aquesta llista s'utilitza per determinar si utilitzeu o no la versió més recent. Durant la connexió, Zettlr rebrà la vostra adreça IP i sabrà que una aplicació Electron accedeix a l'API. L'aplicació també transmetrà el tipus de sistema operatiu i l'identificador (ID) de l'aplicació.

Aquestes dades no es vendran mai a tercers. Això respon al fet que ens agraden les estadístiques i ens interessa saber qui fa servir l’aplicació. Tot i això, no podem identificar ningú en funció d'aquestes dades: seria massa feina. Nosaltres som partidaris del codi obert, no de Facebook.