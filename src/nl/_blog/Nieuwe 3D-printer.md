---
type: post
date: 2021-03-01 08:00:00 +01:00
lang: "nl-NL"
category: "3D Printen"
tags: ["persoonlijk", "3d", "hobby", "technologie", "3d printen", "creativiteit"]
images:
  featured:
    filename: "3D-printing-Printer-part-closeup_sm.webp"
    description: "Close-up van een 3D-printer-onderdeel"
  hero:
    filename: "3D-printing-Printer-part-closeup_g.webp"
    description: "Close-up van een 3D-printer-onderdeel"
permalink: /nl/blog/3d-printer/
---

# Nieuwe 3D-printer

> Englishman in New York? This article is also available in English. [Click here to read the English version][English article version].

Afgelopen week heb ik een 3D-printer gekocht die ik deze week heb mogen ontvangen. Ik heb er nog niet héél veel mee kunnen doen, omdat ik mijn <tooltip text="ik klink nu heel dom">twee laatste verstandskiezen heb laten verwijderen</tooltip> en ik een <tooltip text="luie hond">paar dagen op bed lag</tooltip>. Toch dacht ik: laat ik weer eens bloggen, want de 3D-printer is wel erg tof.

De 3D-printer die ik voor ogen had, moest voldoen aan een paar eisen...

- Goede kwaliteit van zowel de printer(onderdelen) als de prints. Anders is het een loze investering.
- Niet te duur, ben namelijk pas een beginner. Als je net je rijbewijs hebt, stap je normaal gesproken ook niet in een <tooltip text="hele dure auto">Maserati</tooltip>, toch? :wink:
- Het liefst <tooltip text="iets waarvan alle ins en outs openbaar zijn gemaakt">open-source</tooltip> hardware en/of software. Ik houd van open-source, omdat het mensen in staat stelt om het product door en door te verbeteren.

## Creality, het bedrijf achter de Ender 3 (Pro)

Ik ben gegaan voor de [Ender 3 Pro][] van Creality, een Chinees bedrijf dat 3D-printers met <tooltip text="printbaar materiaal op een rol">filament</tooltip>-toevoer en <tooltip text="hars dat hard wordt door het met UV-licht te belichten">harsprinters</tooltip> maakt. Ze richten zich op zowel <tooltip text="zolderkamerautisten, zoals ik">hobbyisten</tooltip> als de commerciële markt. Creality werd bekend toen zij in maart 2018 het 3D-printen voor hobbyisten aantrekkelijk maakte door een budget 3D-printer uit te brengen: de Ender 3.

In juli 2018 maakten ze de Ender 3-printer volledig open-source, wat inhoudt dat alle (hardware)specificaties, blauwdrukken, elektrische schema's en (<tooltip text="stukje software dat de hardware aanstuurt, zoals de motors ">firmware</tooltip>-)software openbaar gemaakt werd, zodat mensen aanpassingen kunnen maken om het product nóg beter te maken. Erg interessant!

---

# Mijn eerste prints...

Hoewel ik pas enkele dagen in het bezit was van mijn 3D-printer, leek het me toch leuk om wat te vertellen over mijn eerste pogingen van het 3D-printen. Ik was nog een beetje ziek van mijn getrokken kiezen en het is een behoorlijke tijd geleden dat ik met 3D-software werkte &mdash; dus in plaats van het tekenen van mijn eigen 3D-ontwerpen, heb ik de eerste prints gemaakt met de vooraf meegeleverde bestanden op de microSD-kaart.

## Poging 1: Spaghetti, nom!

Ik had de printer in elkaar gezet, een bestand gekozen en begonnen met printen. Ik dacht: laten we eens kijken wat er gebeurt! De printer kalibreerde zichzelf en begon met printen. Maar deze eerste print eindigde in 'spaghetti', de term die door fanatiekelingen gebruikt wordt om mislukte prints aan te duiden. Hieronder is wat spaghetti te zien:

<figure><img src="/assets/img/content/blog/3D-printing-Spaghetti.webp"/><figcaption>Een mislukte 3D-print, resulterend in typische spaghetti-achtige vormen. Overigens is dit niet mijn eigen printer maar een afbeelding van het web.</figcaption></figure>

## Poging 2: Nog niet helemaal goed...

Ik heb de printer gestopt, vervolgens het <tooltip text="de plaat waar de printer het materiaal op spuit">bed</tooltip> waterpas en op 3/10 mm van de <tooltip text="spuitkop van de printer">nozzle</tooltip> gezet. Kortom, ècht een precisiewerkje. Vervolgens heb ik de 3D-printer de instructie gegeven om nogmaals te proberen...

<figure><img src="/assets/img/content/blog/3D-printing-Second-failed-print.webp"/><figcaption>Mijn tweede poging. Het mislukte, nu hebben we een hondje zonder kop. Laat de Partij van de Dieren dit niet weten! &#x1f609;</figcaption></figure>

Op een of andere manier raakte de nozzle vast in het object en sleepte hij het hele project over het <tooltip text="de plaat waar de printer het materiaal op spuit">bed</tooltip>. Dat kun je zien aan de voorzijde van de bovenkant. Jammer. Weer een mislukte print... en ik was er bijna!

## Poging 3: Ah, nu werkt het!

Ik bedacht me... De nozzle is gemaakt van messing, een metaallegering. Metaal zet uit als het warm wordt, dus de 3/10 mm die ik ingesteld had toen de printer nog koud was, kan wel eens minder zijn zodra hij warm is. In andere woorden &mdash; de nozzle kan zich wel eens te dicht boven het bed bevinden door het verwarmen en uitzetten. Daarom heb ik de nozzle iets verder verwijderd van het bed, zo'n 5/10 mm. Daarnaast stelde ik in dat het bed 60&deg;C moest zijn in plaats van 40&deg;C, zodat de bodem van het geprinte model ook wat beter vastplakt. Dit resulteerde dit in mijn eerste geslaagde 3D-print:

<figure><img src="/assets/img/content/blog/3D-printing-First-successful-print.webp"/><figcaption>Mijn eerste geslaagde print!</figcaption></figure>

Erg leuk om te zien! Mijn volgende stap is om het 3D-modelleren weer op te pakken, zodat ik eigen ontwerpjes kan maken en kan printen. Het is erg leuk om te doen en het biedt veel mogelijkheden in en rondom het huis. Als je op zoek bent naar inspiratie, kijk dan eens op [Makerbot's Thingiverse][], een website waar andere fanatiekelingen hun 3D-modellen delen.

3D-printen is erg tof, en door de prijs/kwaliteitsverhouding van Creality wordt het voor de '<tooltip text="échte nerds">gewone thuisgebruiker</tooltip>' ook erg aantrekkelijk gemaakt. Het instellen van de printer vereist wel wat meer tijd dan dat je zou verwachten. Houd daar rekening mee. Als alles eenmaal goed is ingesteld en het model blijft goed plakken, <tooltip text="dus altijd nog">kan het bijna niet meer mis gaan</tooltip>. Je kunt vrijwel alles maken wat je wil. Plantenpotjes, pennenbakjes, laptopsteunen, noem het maar op. De Ender 3 Pro is zelfs groot genoeg om een menselijke schedel te printen, en zelfs al zou je aan het limiet zitten, dan kun je je model altijd nog in delen printen dus &mdash; met een beetje creativiteit &mdash; zijn de mogelijkheden eindeloos.

In de toekomst zal ik ook wat meer gaan bloggen over het 3D-printen, want het is echt übervet :+1:

[English article version]: /blog/3d-printer
[Ender 3 Pro]: https://www.creality3dofficial.com/products/creality-ender-3-pro-3d-printer	"Bestelpagina van de Ender 3 Pro, een 3D-printer van Creality"
[Makerbot's Thingiverse]: https://www.thingiverse.com/	"Makerbot Thingiverse, een website waarop 3D-artiesten hun creaties delen."
