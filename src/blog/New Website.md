---
date: 2019-12-27 06:00:00 +00:00
category: "front-end-development"
tags: ["personal", "website"]
lang: en-GB
images:
  featured:
     filename: "new-website-featured.webp"
     description: "Computer screen that visualizes the layout of a website and the associated code"
  hero:
     filename: "new-website-hero.webp"
     description: "Computer screen that visualizes the layout of a website and the associated code"
---

# New Website

I have a new website. Not so much in appearance but in terms of used technology. My website is now based on VuePress, which makes it much easier to maintain.

<!-- more -->

## Important Improvements

### VuePress

Previously I used a combination of Jekyll, Webpack, Vue, a custom 'prerenderer' and some other 'tools' to build my website. Jekyll is based on Ruby, while Webpack is a Node application. A very awkward combination, because it works very difficult and was also very difficult to maintain.

Thanks to VuePress it is now no longer necessary to call multiple standalone applications. VuePress is the solution for a Vue-based system within Node, it is easy to maintain and comes with some nice extras by default. 

You can think of support for multiple languages, a built-in prerendererer and the possibility to use Vue components within your blog posts. VuePress is very cool, works well and is well documented.

### CSS-based Masonry-layout

On the overview of my blog and portfolio I use a Masonry layout that is entirely based on CSS. Because of this, it does not depend on slow scripts and it's a lot faster.

### Multiple languages

You may have already noticed, it is now possible to view my website in both Dutch and English. I still have to write all content but there's a beginning.

## Future Improvements

There are a number of  improvements that are on my to-do list.

- **Tutorials** &mdash; I want to create a Tutorials section in addition to the blog. Currently these are between my regular blog posts.

- **Theme** &mdash; I want to split my theme from the content, to prevent the Git repository from becoming too large.

- **Content** &mdash; All content must use SVG graphics instead of raster graphics.

- **Navigation & Filters** &mdash; There are still a few things missing in my navigation, such as breadcrumbs, a button to go back and the option to filter blog posts.

- **Comments section** &mdash; The ability to respond to the blog posts is still missing. I am thinking of using Disqus as a temporary solution, maybe I can  build my own system for it later on.

- **Contact form** &mdash; A contact form is missing as well...




Curious about the status of these (and other) improvements? Check out the [issues on GitHub](https://github.com/ricardobalk/www/issues)!
