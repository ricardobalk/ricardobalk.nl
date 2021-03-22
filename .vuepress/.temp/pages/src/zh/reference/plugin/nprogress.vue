<template><!-- `# nprogress` 会被渲染成 `<h1 id="nprogress">` ，导致 id 和 nprogress 进度条冲突 （有点蠢） -->
<!-- 所以我们在 h1 标题后添加一个 '插件' 后缀，然后通过 title frontmatter 来设置页面标题 -->
<h1 id="nprogress-插件"><a class="header-anchor" href="#nprogress-插件">#</a> nprogress 插件</h1>
<blockquote>
<p>@vuepress/plugin-nprogress</p>
</blockquote>
<p>将 <a href="https://github.com/rstacruz/nprogress" target="_blank" rel="noopener noreferrer">nprogress<OutboundLink/></a> 集成到 VuePress 中，在切换到另一个页面时会展示进度条。</p>
<h2 id="样式"><a class="header-anchor" href="#样式">#</a> 样式</h2>
<p>你可以通过 CSS 变量来自定义进度条的样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--nprogress-color</span><span class="token punctuation">:</span> #29d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>