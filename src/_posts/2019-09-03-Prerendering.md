---
layout: post
title: "Prerendering"
excerpt: "Dankzij Prerendering laadt mijn website iets sneller."
category: "front-end-development"
tags: ["prerendering", "puppeteer"]
date: 2019-08-20 06:00:00 +00:00
lang: nl
---

Ik doe mijn website sinds vandaag prerenderen. Dit prerenderen zorgt ervoor dat de website beter is te vinden en dat delen van de website een stuk sneller laden. Dat is zowel fijn voor de vindbaarheid van mijn site als de bezoekers.

# Prerenderen uitgelegd

In mijn website bevinden zich een aantal dynamische onderdelen, zoals bijvoorbeeld de afbeelding bovenaan dit artikel. Die dynamische onderdelen zijn gemaakt met Vue. Zonder al te technisch te spreken, is dat een basis waarmee je websites op een gestructureerde manier kunt samenstellen en er interactie en dynamiek aan kunt toevoegen - zoals bijvoorbeeld het aanpassen van een bepaalde uitstraling van het geheel, afhankelijk van de context.

Zodra je een pagina op mijn website bekijkt, worden de dynamische onderdelen geladen en passen ze zich aan. Dit proces heet renderen, en zorgt er bijvoorbeeld voor dat er een passende achtergrondafbeelding wordt geladen in het betreffende onderdeel.

## Het probleem van dynamische onderdelen

Het nadeel van dit proces is dat het telkens herhaald wordt zodra de bezoeker een nieuwe pagina bekijkt. Iedere pagina wordt dus steeds volledig opnieuw opgebouwd, terwijl deze mate van dynamiek in werkelijkheid niet nodig is op alle pagina's. Bovendien laden de pagina's minder snel. Het is dus niet altijd even effici&euml;nt.

Een bijkomend probleem is zoekmachineoptimalisatie (SEO). Dynamisch opgebouwde pagina's zijn moeilijker te indexeren door zoekmachines. Moderne zoekmachines hebben technieken om pagina's te renderen maar zij zijn er ook meer tijd mee kwijt dan gebruikelijk (met minder dynamische pagina's), waardoor je op een wachtlijst terecht komt. Uiteindelijk betekent het dat je nieuwste blogartikel pas later ge&iuml;ndexeerd wordt en dus ook pas later vindbaar is.

## De oplossing

Als oplossing voor deze problemen bestaat er een techniek genaamd **prerenderen**. Door een deel van de pagina's vooraf te laden in een browser wordt de pagina opgebouwd en zijn de dynamische onderdelen ingevuld. Het resultaat wordt vervolgens opgeslagen en deze momentopname wordt daarna aangeboden bij de bezoekers. Het blog kan met minder dynamiek nog prima zijn doel vervullen, de pagina's laden een stuk sneller en zoekmachines hebben minder werk om de pagina's te indexeren.

Let wel, er zijn ook omstandigheden waarin prerenderen geen meerwaarde biedt, bijvoorbeeld als hoge mate van dynamiek erg gewenst is en een vereiste is van het soort website &mdash; bijvoorbeeld een veilingwebsite. Dan is de applicatie van nature dynamisch en moet het continu gegevens ophalen ten behoeve van de gebruiker. Weeg daarom eerst alle voordelen af tegenover de nadelen en gebruik daarna prerenderen pas als oplossing.