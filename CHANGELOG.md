---
 permalink: /changes/
 contributors: ['ricardobalk']
 page: true
---

# Changelog

This is the changelog, as found on the [GitHub repository](https://github.com/ricardobalk/www/blob/develop/CHANGELOG.md) of this website. It gives an overview of changes to my website.

## 3.3

**<Badge type="yellow">Planned</Badge>**

> [Version 3.3](https://github.com/ricardobalk/www/milestone/3) has been planned to be released on June 1, 2020.

**What can be expected?**

- There will be a guides section, so that it's easier to distinguish blog articles from guides/tutorials. Easier for humans, also better for SEO.
- On the technical side, I'll move away from Zurb Foundation and use my own 12 column grid instead.
- I will move from JavaScript to TypeScript. It makes my code more robust.

## 3.2

**<Badge>Released</Badge>**

> [Version 3.2](https://github.com/ricardobalk/www/milestone/2) has been released on May 1, 2020.

**What's new?**

- Homepage will be available in German. Blog posts and portfolio items will remain available in Dutch and English only.
- A "biography" card with my [Keybase profile](https://keybase.io/ricardobalk) will be shown besides my blog posts.
- Site navigation has been improved, by adding breadcrumbs.
- It is possible to comment on my blog posts again.
- There's a changelog available on [GitHub](https://github.com/ricardobalk/www/blob/develop/CHANGELOG.md) and on the [website](https://ricardobalk.nl/changes/).

## 3.1

**<Badge>Released</Badge>**

> [Version 3.1](https://github.com/ricardobalk/www/tree/v3.1.0) has been released on December 19, 2019.

**What's new?**

- Website is now multilingual ([English](https://ricardobalk.nl) and [Dutch](https://ricardobalk.nl/nl)).
- There was [an issue building my website](https://github.com/vuejs/vuepress/issues/2065). This issue has been resolved by myself after making [a small change](https://github.com/ricardobalk/www/commit/94bf85a10f5d6b2fc93dc895e7cabcc523f36fe1) to the source code.
- Foundation has been updated to version 6.6.0.

**Download**

- Repository: [GitHub](https://github.com/ricardobalk/www/tree/v3.1.0)
- Download: [ZIP](https://github.com/ricardobalk/www/archive/v3.1.0.zip) &bullet; [Tarball](https://github.com/ricardobalk/www/archive/v3.1.0.tar.gz)

## 3.0

**<Badge>Released</Badge>**

> [Version 3.0](https://github.com/ricardobalk/www/tree/v3.0.0) has been released on December 5, 2019.

**What's new?**

Moved to [VuePress](https://vuepress.vuejs.org/). Less bullshit, more overview. Builds are faster than ever.

- Moved to VuePress. No more need for Vue + Webpack + Jekyll :spaghetti:.
- Custom prerendering script (based on Puppeteer) removed, VuePress takes care of prerendering now :wink:.
- Dockerfile updated, documentation has been updated. Docker is now recommended for building the website :muscle:.
- Build times are a lot better now :stopwatch:.

**Download**

- Repository: [GitHub](https://github.com/ricardobalk/www/tree/v3.0.0)
- Download: [ZIP](https://github.com/ricardobalk/www/archive/v3.0.0.zip) &bullet; [Tarball](https://github.com/ricardobalk/www/archive/v3.0.0.tar.gz)



## 2.0

**<Badge>Released</Badge>**

> [Version 2.0](https://github.com/ricardobalk/www/tree/v2.0.0) has been released on November 10, 2019.

**What's new?**

New visual design, including dark mode and various technical enhancements.

- Webpack and Vue are added in this release.
- Vue components will be compiled by Webpack, the resulting bundle is then included with Jekyll.
- Support for dark mode has been added :sunglasses:
- [Prettier](https://prettier.io) is now used to add code consistency.
- Prerendering script included, based on Puppeteer.
- Dockerfile included, to make builds more consistent (and less error-prone!) across various platforms.

**Screenshot(s)**

<details>
<summary>Home &bullet; Landing page</summary>
![Screenshot_2020-04-11 Ricardo Balk.png](https://cloud.headwayapp.co/changelogs_images/images/big/000/045/439-1235d2be44e67e9b5691a131966b37d08f437d96.png =51%)
</details>

<details>
<summary>Portfolio &bullet; Overview page</summary>
![Screenshot_2020-04-11 Ricardo Balk.jpg](https://cloud.headwayapp.co/changelogs_images/images/big/000/045/440-8a1dee66d16fb08ee60b67c10060db6ad4fbc5b6.jpg =93%)
</details>

<details>
<summary>Portfolio &bullet; Individual Item</summary>
![Screenshot_2020-04-11 Sound Engineer.png](https://cloud.headwayapp.co/changelogs_images/images/big/000/045/441-f3344b119a5318d434387f2bddd52250fc12f6e2.png =81%)
</details>

**Download**

- Repository: [GitHub](https://github.com/ricardobalk/www/tree/v2.0.0)
- Download: [ZIP](https://github.com/ricardobalk/www/archive/v2.0.0.zip) &bullet; [Tarball](https://github.com/ricardobalk/www/archive/v2.0.0.tar.gz)

## 1.0

**<Badge>Released</Badge>**

> First version of the website. This particular version is made in Jekyll.

**What's new?**

- First website setup in Jekyll, a static page generator.

**Screenshot(s)**

<details>
<summary>Home &bullet; Landing page</summary>
![Home page of ricardobalk.nl](https://ricardobalk.keybase.pub/Documents/Portfolio/InDesign/Linked%20Files/RicardoBalk.nl/v1.0/Home.jpg)
</details>


<details>
<summary>Blog &bullet; Overview page</summary>
![Overview of blog articles on ricardobalk.nl](https://ricardobalk.keybase.pub/Documents/Portfolio/InDesign/Linked%20Files/RicardoBalk.nl/v1.0/Blog/Overview.png)
</details>

<details>
<summary>Blog &bullet; Single post</summary>
![Single blog post on ricardobalk.nl](https://ricardobalk.keybase.pub/Documents/Portfolio/InDesign/Linked%20Files/RicardoBalk.nl/v1.0/Blog/Post.png)
</details>

<details>
<summary>Portfolio &bullet; Overview</summary>
![Portfolio overview on ricardobalk.nl](https://ricardobalk.keybase.pub/Documents/Portfolio/InDesign/Linked%20Files/RicardoBalk.nl/v1.0/Portfolio/Overview.png)
</details>

<details>
<summary>Portfolio &bullet; Item details</summary>
![Single portfolio item on ricardobalk.nl](https://ricardobalk.keybase.pub//Documents/Portfolio/InDesign/Linked%20Files/RicardoBalk.nl/v1.0/Portfolio/Item.png)
</details>


**Download**

- Repository: [GitHub](https://github.com/ricardobalk/www/tree/v1.0)
- Download: [ZIP](https://github.com/ricardobalk/www/archive/v1.0.zip) &bullet; [Tarball](https://github.com/ricardobalk/www/archive/v1.0.tar.gz)
