<template><h1 id="active-header-links"><a class="header-anchor" href="#active-header-links">#</a> active-header-links</h1>
<blockquote>
<p>@vuepress/plugin-active-header-links</p>
</blockquote>
<p>该插件会监听页面滚动事件。当页面滚动至某个 <em>标题锚点</em> 后，如果存在对应的 <em>标题链接</em> ，那么该插件会将路由 Hash 更改为该 <em>标题锚点</em> 。</p>
<p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p>
<h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<h3 id="headerlinkselector"><a class="header-anchor" href="#headerlinkselector">#</a> headerLinkSelector</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'.sidebar-link'</code></p>
</li>
<li>
<p>详情：</p>
<p><em>标题链接</em> 的选择器。</p>
<p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么及时滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p>
</li>
</ul>
<h3 id="headeranchorselector"><a class="header-anchor" href="#headeranchorselector">#</a> headerAnchorSelector</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'.header-anchor'</code></p>
</li>
<li>
<p>详情：</p>
<p><em>标题锚点</em> 的选择器。</p>
<p>你通常不需要设置该选项，除非你通过 <RouterLink to="/src/zh/reference/config.html#markdown-anchor">markdown.anchor</RouterLink> 修改了 <a href="https://github.com/valeriangalliat/markdown-it-anchor#readme" target="_blank" rel="noopener noreferrer">markdown-it-anchor<OutboundLink/></a> 的 <code>permalinkClass</code> 选项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/src/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9">指南 &gt; Markdown &gt; 语法扩展 &gt; 标题锚点</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="delay"><a class="header-anchor" href="#delay">#</a> delay</h3>
<ul>
<li>
<p>类型： <code>number</code></p>
</li>
<li>
<p>默认值： <code>200</code></p>
</li>
<li>
<p>详情：</p>
<p>滚动事件监听器的 Debounce 延迟。</p>
</li>
</ul>
<h3 id="offset"><a class="header-anchor" href="#offset">#</a> offset</h3>
<ul>
<li>
<p>类型： <code>number</code></p>
</li>
<li>
<p>默认值： <code>5</code></p>
</li>
<li>
<p>详情：</p>
<p>即便直接点击 <em>标题锚点</em> 的链接， <code>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p>
</li>
</ul>
</template>