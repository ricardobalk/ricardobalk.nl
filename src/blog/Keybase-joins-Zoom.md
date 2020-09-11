---
type: blogpost
date: 2020-05-07 20:00:00 +00:00
category: "News"
tags: ["personal", "website"]
images:
  featured:
     filename: "zoom-and-keybase.webp"
     description: "Zoom logo and Keybase logo on a transparant background"
permalink: /blog/keybase-joins-zoom
---

# Keybase joins Zoom

Keybase has been acquired by Zoom, a publicly traded American company known for its online video calling solutions. After verifying the news with [one of Keybase's co-founders][1], I was told that it was really true, with a redirect to an [official blog article][2] from the Keybase website.

## Online video communication

During the [COVID-19 pandemic of 2019-20][3], various governmental authorities asked their residents to work from home. This resulted in an enormous growth in the use of online video communication, including Zoom.

Because much business-sensitive information is shared during online meetings, this has also caught the attention of cybersecurity experts from all over the world. After research by the experts, it turned out that Zoom is using central servers, hosted by Zoom itself, without using end-to-end encryption. In contrast, Keybase, the company that was acquired by Zoom, is actually offering a [fully end-to-end encrypted platform][5].

Keybase makes it possible to exchange chats and files in a very secure way, without letting third parties have access to this data. In September 2018, Keybase also got a [security audit][6], to independently test Keybase's security standards.

## Regular encryption versus end-to-end encryption

Zoom and Keybase both use central servers. This means that data between two or more people is transported to a central point, the server(s), where it then gets forwarded to the recipient. Kinda like a parcel service.

Data between Keybase users is encrypted in such a way that this data can only be decrypted by the intended recipient (s), not by others. This principle is called end-to-end encryption. Because data is encrypted in this way, third parties cannot get access to it. Even not if one of the servers were compromised, because the data that is transported is decryptable by the recipient(s) only.

> People can't steal things from you that you don't have.

Unlike Keybase, Zoom currently does not (yet) use end-to-end encryption. This means that the connection between the users and the servers of Zoom is secured, but that due to the lack of proper end-to-end encryption it is (in theory) possible that Zoom (and third parties) could gain access to the data going over the lines. The data, in this case videoconferences, is sent to Zoom and decrypted there, processed, encrypted again and then sent to the  final destination. If Zoom would use end-to-end encryption, it would work in a different way. The data would be encrypted on the side of the sender, in such a way that no one but the intended recipient could decrypt it. The only task left for the Zoom servers, is to relay this data.

> Keep in mind that it is _possible_ that Zoom could peep into your video calls, but that this does not have to mean that they actually do that. But, again, making it impossible by design is the ultimate goal.

Because Zoom users depend on a central server, adding end-to-end encryption is very important to keep users' data private at all times (even when something gets hacked in future) and to prevent data leaks. Keybase already uses end-to-end encryption, that's why Zoom acquired Keybase. The people at Keybase are now facing the challenge of adding end-to-end encryption to Zoom and make the platform technically more secure.

## The future

Now that Keybase got acquired by Zoom, it means that Zoom is in full control over the future of Keybase. Although there are some discussions about this on the public Keybase chat, from a personal point of view, my expectation is that it will have a positive outcome. Zoom will improve a lot with the knowledge of the people from Keybase, regarding cyber security practices. I also expect that Zoom will move more towards a more open-source software product and that Keybase will become more popular over time. Whatever the future holds, I will keep an eye on it.



[1]: https://keybase.io/chris "Chris Coyne, co-founder of Keybase"
[2]: https://keybase.io/blog/keybase-joins-zoom	"Keybase Blog: Keybase joins Zoom"
[3]: https://www.who.int/emergencies/diseases/novel-coronavirus-2019 "World Health Organization: Coronavirus disease 2019"
[4]: https://jitsi.org/jitsi-meet/	"Jitsi Meet: Secure, fully featured, and completely free video conferencing"
[5]: https://book.keybase.io/security#everything-you-store-or-share-on-keybase-is-end-to-end-encrypted	"Keybase Book: Security"
[6]: https://www.nccgroup.com/us/our-research/keybase-protocol-security-review/	"NCC Group: Keybase Protocol Security Review"