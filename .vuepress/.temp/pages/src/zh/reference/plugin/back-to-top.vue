<template><h1 id="back-to-top"><a class="header-anchor" href="#back-to-top">#</a> back-to-top</h1>
<blockquote>
<p>@vuepress/plugin-back-to-top</p>
</blockquote>
<p>该插件会给你的站点添加一个 <em>返回顶部</em> 按钮。当页面向下滚动时，该按钮会显示在页面的右下角，点击它就会滚动到页面顶部。</p>
<h2 id="样式"><a class="header-anchor" href="#样式">#</a> 样式</h2>
<p>你可以通过 CSS 变量来自定义 <em>返回顶部</em> 按钮的样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 颜色 */</span>
  <span class="token property">--back-to-top-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
  <span class="token comment">/* 鼠标悬停时的颜色 */</span>
  <span class="token property">--back-to-top-color-hover</span><span class="token punctuation">:</span> #71cda3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></template>