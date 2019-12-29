---
date: 2019-12-27 06:00:00 +00:00
title: "Nieuwe website (opnieuw)"
category: "front-end-development"
tags: ["personal", "website"]
lang: nl-NL
images:
  featured:
     filename: "blog/new-website-featured.png"
     description: "Computerscherm dat de layout van een website en de bijbehorende code visualiseert"
  hero:
     filename: "blog/new-website-hero.png"
     description: "Computerscherm dat de layout van een website en de bijbehorende code visualiseert"
---

Ik heb een nieuwe website. Niet zozeer niet qua uiterlijk maar wel op het gebied van de gebruikte techniek. Mijn website is nu namelijk gebaseerd op VuePress, waardoor het geheel veel beter te onderhouden is.

<!-- more -->

# Belangrijke verbeteringen

## VuePress

Voorheen maakte ik gebruik van een combinatie tussen Jekyll, Webpack, Vue, een prerenderer en wat andere 'tools' om mijn website te bouwen. Jekyll is gebaseerd op Ruby, terwijl Webpack een Node-applicatie is. Een erg onhandige combinatie, want het geheel werkte erg stroef en was bovendien erg moeilijk te onderhouden.

Dankzij VuePress is het niet meer nodig om allerlei losse applicaties aan te roepen. VuePress is dé oplossing voor een Vue-gebaseerd systeem binnen Node, het is makkelijk te onderhouden en komt standaard al met leuke extra's. Hierbij kun je denken aan ondersteuning voor meerdere talen, een ingebouwde prerendererer en de mogelijkheid om Vue-componenten te tonen in je blogposts. VuePress is erg gaaf, werkt goed en is goed gedocumenteerd.

## CSS-gebaseerde Masonry-layout

Op het overzicht van mijn blog en portfolio maak ik gebruik van een Masonry-layout die volledig gebaseerd is op CSS. Hierdoor is het niet afhankelijk van langzame scripts en het geheel dus een stuk sneller.

## Meerdere talen

Misschien was het je al opgevallen, het is nu mogelijk om mijn website zowel in Nederlands als Engels te bekijken. De content moet ik nog schrijven / aanvullen maar het begin is er.



# Toekomstige verbeteringen

Er zijn een aantal toekomstige verbeteringen die op mijn to-do-lijstje staan.

- **Tutorials** &mdash; Ik wil naast het blog een Tutorials-gedeelte maken, om zo tutorials aan te bieden. Momenteel staan deze nog tussen mijn reguliere blogposts.

- **Thema** &mdash; Ik wil mijn thema splitsen van de content, om te voorkomen dat de Git repository te groot wordt.

- **Content** &mdash; Alle content moet gebruik maken van SVG graphics in plaats van rasterafbeeldingen.

- **Navigatie & Filters** &mdash; Er ontbreekt nog een en ander aan mijn navigatie, zoals breadcrumbs, een knop om terug te keren en de mogelijkheid om te filteren op categorieën. Dat laatste heb ik technisch gezien al half geimplementeerd, trouwens.

- **Commentaarsectie** &mdash; De mogelijkheid om te reageren op de blogposts ontbreekt nog. In eerste instantie denk ik aan het gebruiken van Disqus, wellicht kan ik later mijn eigen systeem bouwen.

- **Contactformulier** &mdash; Ook een contactformulier ontbreekt nog.



Benieuwd naar de status van deze (en andere) verbeteringen? Check de [issues op GitHub](https://github.com/ellipticcurv3/www/issues)!

