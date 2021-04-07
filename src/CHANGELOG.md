---
permalink: /changes/
contributors: ["ricardobalk"]
page: true
---

# Changelog

This is the changelog, as found on the [GitHub repository](https://github.com/ricardobalk/website/blob/main/src/CHANGELOG.md) of this website. It gives an overview of changes to my website.

## 3.4

**<Badge>Released</Badge>**

> [Version 3.4](https://github.com/ricardobalk/website/milestone/4) has been released on April 8, 2021.

**What's new?**

- VuePress has been upgraded to VuePress 2, a modern version of VuePress that uses TypeScript and has been built on top of Vue 3. :sunglasses:
- All components have been split into separate Template, Style and TypeScript files. It's the opposite of Vue's SFC-approach, but it increases maintainability of the website as it becomes easier to run linters and check for errors. &bullet; [57c207](https://github.com/ricardobalk/website/commit/d903d0bac96e4ee547d6ea4b062878ce8e57c207)
- The website now uses a Flexbox-based approach for its 12-column grid layout, instead of relying on Zurb Foundation. This also means that we got rid of JQuery :vomiting_face:, SCSS and the Webpack SCSS loader. :tada: &bullet; [57c207](https://github.com/ricardobalk/website/commit/d903d0bac96e4ee547d6ea4b062878ce8e57c207)

## 3.3

**<Badge>Released</Badge>**

> [Version 3.3](https://github.com/ricardobalk/www/milestone/3) has been released on September 13, 2020.

**What's new?**

- There is now a guides section available, that makes it easier to distinguish blog articles from guides/tutorials. Easier for humans, also better for SEO &bullet; [cee9f8](https://github.com/ricardobalk/www/commit/8a36b32fad215a4192ccc01a2d2a1ffdaacee9f8)
- The blog and guides sections got a filter that automatically adapts to the available categories &bullet; [796538](https://github.com/ricardobalk/www/commit/dfdb12ef6e2b7b66f0003f5ac743ac189c796538).
- Much of the JavaScript has been converted to TypeScript. It makes the code more robust &bullet; [0636a5](https://github.com/ricardobalk/www/commit/eafe2cf64c61b49380cb244213bab7bc760636a5), [97f919](https://github.com/ricardobalk/www/commit/add5d7a5bc19a26293cbc083be81e43ea897f919).
- Made some small improvements, like the sidebar that didn't work correctly and removed the huge icons during page load &bullet; [5e904e](https://github.com/ricardobalk/www/commit/adb58c6f5013dc233b56aa3778d60869f75e904e), [a356bc](https://github.com/ricardobalk/www/commit/18501fe1bb0e63a1a194e764da49fecc77a356bc)

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
