---
type: post
date: 2020-05-07 20:00:00 +00:00
lang: nl-NL
category: "Nieuws"
tags: ["personal", "website"]
images:
  featured:
    filename: "zoom-and-keybase.webp"
    description: "Het logo van Zoom en Keybase op een doorzichtige achtergrond"
permalink: /nl/blog/keybase-overgenomen-door-zoom/
---

# Zoom neemt Keybase over

> [An English version of this article is available here][0].

Op de openbare chat van Keybase barstte het los. Keybase zou overgenomen zijn door Zoom, een beursgenoteerd Amerikaans bedrijf dat bekend staat om zijn online beeldbel-oplossingen. Na navraag te doen bij [een van de medeoprichters van Keybase][1] kreeg ik te horen dat het echt waar was, met een doorverwijzing naar een [officieel blogartikel][2] van de Keybase-website.

## Online videocommunicatie

Tijdens de [COVID-19 pandemie van 2019-20][3] is er door verschillende overheden gevraagd aan inwoners om te werken vanuit huis. Dit thuiswerken zorgde voor een enorme groei in het gebruik van online videocommunicatie, waaronder Zoom.

Omdat veel bedrijfsgevoelige informatie gedeeld wordt tijdens online vergaderingen heeft dit ook de aandacht getrokken van cybersecurity-experts van over de hele wereld. Na onderzoek door de experts bleek dat Zoom gebruik maakt van centrale servers, gehost door Zoom zelf, zonder gebruik te maken van end-to-end versleuteling. Daarentegen is Keybase, het bedrijf dat overgenomen is door Zoom, juist een [geheel end-to-end versleuteld platform][5].

Keybase maakt het hiermee onder andere mogelijk om op een zeer veilige wijze chats en bestanden uit te wisselen, zonder dat het Keybase-personeel of anderen ze kunnen inzien. In September 2018 heeft Keybase bovendien een [security audit][6] ondergaan, waarmee de beveiliging onafhankelijk aan de tand is gevoeld.

## Reguliere versleuteling versus end-to-end versleuteling

Zoom en Keybase maken beide gebruik van centrale servers. Dat betekent dat de data tussen twee of meerdere personen getransporteerd wordt naar een centraal punt, waar het vervolgens doorgestuurd wordt naar de ontvanger. Vergelijk het met een pakketdienst.

Gegevens tussen Keybase-gebruikers worden op zodanige wijze versleuteld dat deze gegevens enkel zijn in te zien door de betreffende ontvanger(s), niet door anderen. Dit principe heet end-to-end versleuteling. Doordat de gegevens op deze wijze versleuteld worden, kunnen zij niet in handen vallen van derden. Ook niet als een van de servers gehackt zouden worden. De hacker heeft dan immers goed versleutelde gegevens in handen waar diegene niets aan heeft.

> Wat je niet hebt, kan men niet jatten.

Zoom maakt in tegenstelling tot Keybase momenteel (nog) geen gebruik van end-to-end versleuteling. Dit houdt in dat de verbinding tussen de gebruikers en de servers van Zoom beveiligd zijn maar dat het door het ontbreken van goede end-to-end versleuteling (in theorie) mogelijk is dat Zoom inzage heeft in de gegevens. De gegevens, in dit geval videobeelden, worden naar Zoom gestuurd en daar gedecodeerd, verwerkt, opnieuw versleuteld en verzonden naar de bestemming. Als Zoom gebruik zou maken van end-to-end-versleuteling, zou dit anders werken. De gegevens worden aan de kant van de zendende partij versleuteld voor de ontvanger en dus op zodanige wijze dat er geen inzage door derden mogelijk is.

> Houd in de gaten dat het _mogelijk_ is dat Zoom inzage heeft in je videogesprekken maar dat dit niet hoeft te betekenen dat zij dit ook daadwerkelijk doen.

Juist omdat gebruikers van Zoom afhankelijk zijn van een centrale server, is end-to-end versleutelen zo belangrijk. Daarmee houd je gegevens privé en voorkom je datalekken. Keybase doet dit al, dat is dan ook de reden dat Keybase overgenomen is door Zoom. De mensen van Keybase staan nu voor de grote uitdaging om Zoom veiliger te maken.

## De toekomst

Nu Keybase in handen is van Zoom, betekent het dat Zoom de touwtjes in handen heeft. Hoewel er op de Keybase chat hier en daar wat ophef over is, is mijn persoonlijke verwachting dat de overname leidt tot iets goeds. Mijn verwachting is namelijk dat Zoom met de kennis van de Keybase in ieder geval op het gebied van cybersecurity een stuk beter wordt. Daarnaast verwacht ik dat Zoom meer richting open-source software gaat en dat de populariteit van Keybase toeneemt. Wat de toekomst ook brengt, ik blijf het in ieder geval op de voet volgen.

## Nederlands Keybase-team

Heb je zin om te discussiëren over dit artikel? Meld je dan aan op Keybase en neem deel aan de chat op het [Nederlandse team (@europe.netherlands)][7], dat ik ongeveer een jaar geleden opgericht heb. Een berichtje achterlaten onder dit artikel kan natuurlijk ook.

[0]: /blog/keybase-joins-zoom "Engelse versie van dit artikel"
[1]: https://keybase.io/chris "Chris Coyne, medeoprichter van Keybase"
[2]: https://keybase.io/blog/keybase-joins-zoom "Keybase Blog: Keybase joins Zoom"
[3]: https://www.who.int/emergencies/diseases/novel-coronavirus-2019 "World Health Organization: Coronavirus disease 2019"
[4]: https://jitsi.org/jitsi-meet/ "Jitsi Meet: Secure, fully featured, and completely free video conferencing"
[5]: https://book.keybase.io/security#everything-you-store-or-share-on-keybase-is-end-to-end-encrypted "Keybase Book: Security"
[6]: https://www.nccgroup.com/us/our-research/keybase-protocol-security-review/ "NCC Group: Keybase Protocol Security Review"
[7]: https://keybase.io/team/europe.netherlands "Nederlands team op Keybase"
