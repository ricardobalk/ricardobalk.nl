<template><h1 id="active-header-links"><a class="header-anchor" href="#active-header-links">#</a> active-header-links</h1>
<blockquote>
<p>@vuepress/plugin-active-header-links</p>
</blockquote>
<p>This plugin will listen to page scroll event. When the page scrolls to a certain <em>header anchor</em>, this plugin will change the route hash to that <em>header anchor</em> if there is a corresponding <em>header link</em>.</p>
<p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won't need to use it directly in most cases.</p>
<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="headerlinkselector"><a class="header-anchor" href="#headerlinkselector">#</a> headerLinkSelector</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default: <code>'.sidebar-link'</code></p>
</li>
<li>
<p>Details:</p>
<p>Selector of <em>header link</em>.</p>
<p>If a <em>header anchor</em> does not have a corresponding <em>header link</em>, this plugin won't change the route hash to that anchor when scrolling to it.</p>
</li>
</ul>
<h3 id="headeranchorselector"><a class="header-anchor" href="#headeranchorselector">#</a> headerAnchorSelector</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default: <code>'.header-anchor'</code></p>
</li>
<li>
<p>Details:</p>
<p>Selector of <em>header anchor</em>.</p>
<p>You don't need to specify this option unless you have changed the <code>permalinkClass</code> option of <a href="https://github.com/valeriangalliat/markdown-it-anchor#readme" target="_blank" rel="noopener noreferrer">markdown-it-anchor<OutboundLink/></a> via <RouterLink to="/src/reference/config.html#markdown-anchor">markdown.anchor</RouterLink>.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/src/guide/markdown.html#header-anchors">Guide &gt; Markdown &gt; Syntax Extensions &gt; Header Anchors</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="delay"><a class="header-anchor" href="#delay">#</a> delay</h3>
<ul>
<li>
<p>Type: <code>number</code></p>
</li>
<li>
<p>Default: <code>200</code></p>
</li>
<li>
<p>Details:</p>
<p>The delay of the debounced scroll event listener.</p>
</li>
</ul>
<h3 id="offset"><a class="header-anchor" href="#offset">#</a> offset</h3>
<ul>
<li>
<p>Type: <code>number</code></p>
</li>
<li>
<p>Default: <code>5</code></p>
</li>
<li>
<p>Details:</p>
<p>Even if you click the link of the <em>header anchor</em> directly, the <code>scrollTop</code> might not be exactly equal to <code>offsetTop</code> of the <em>header anchor</em>, so we add an offset to avoid the error.</p>
</li>
</ul>
</template>