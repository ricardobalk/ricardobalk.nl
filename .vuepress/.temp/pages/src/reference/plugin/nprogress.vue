<template><!-- `# nprogress` will be rendered as `<h1 id="nprogress">`, and the id will conflict with the nprogress bar (stupid) -->
<!-- so we add a 'plugin' suffix in the h1 title, and use title frontmatter to set the page title -->
<h1 id="nprogress-plugin"><a class="header-anchor" href="#nprogress-plugin">#</a> nprogress Plugin</h1>
<blockquote>
<p>@vuepress/plugin-nprogress</p>
</blockquote>
<p>Integrate <a href="https://github.com/rstacruz/nprogress" target="_blank" rel="noopener noreferrer">nprogress<OutboundLink/></a> into VuePress, which can provide a progress bar when navigating to another page.</p>
<h2 id="styles"><a class="header-anchor" href="#styles">#</a> Styles</h2>
<p>You can customize the style of the progress bar via CSS variables:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--nprogress-color</span><span class="token punctuation">:</span> #29d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>