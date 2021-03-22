<template><h1 id="medium-zoom"><a class="header-anchor" href="#medium-zoom">#</a> medium-zoom</h1>
<blockquote>
<p>@vuepress/plugin-medium-zoom</p>
</blockquote>
<p>Integrate <a href="https://github.com/francoischalifour/medium-zoom#readme" target="_blank" rel="noopener noreferrer">medium-zoom<OutboundLink/></a> into VuePress, which can provide the ability to zoom images.</p>
<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="selector"><a class="header-anchor" href="#selector">#</a> selector</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default: <code>':not(a) &gt; img'</code></p>
</li>
<li>
<p>Details:</p>
<p>Selector for zoomable images.</p>
<p>By default this plugin will make all images zoomable except those inside <code>&lt;a&gt;</code> tags.</p>
</li>
</ul>
<h3 id="delay"><a class="header-anchor" href="#delay">#</a> delay</h3>
<ul>
<li>
<p>Type: <code>number</code></p>
</li>
<li>
<p>Default: <code>500</code></p>
</li>
<li>
<p>Details:</p>
<p>Delay in milliseconds.</p>
<p>After navigating to a new page, this plugin will make images zoomable with a delay.</p>
</li>
</ul>
<h3 id="zoomoptions"><a class="header-anchor" href="#zoomoptions">#</a> zoomOptions</h3>
<ul>
<li>
<p>Type: <code>Object</code></p>
</li>
<li>
<p>Details:</p>
<p>Options for medium-zoom.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><a href="https://github.com/francoischalifour/medium-zoom#options" target="_blank" rel="noopener noreferrer">medium-zoom &gt; Options<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h2 id="styles"><a class="header-anchor" href="#styles">#</a> Styles</h2>
<p>You can customize most of the zoom styles via <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides some CSS variables for additional customization:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* z-index of the zoom overlay */</span>
  <span class="token property">--medium-zoom-z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="composition-api"><a class="header-anchor" href="#composition-api">#</a> Composition API</h2>
<h3 id="usemediumzoom"><a class="header-anchor" href="#usemediumzoom">#</a> useMediumZoom</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the <code>Zoom</code> instance that used by this plugin, so that you can use the instance <a href="https://github.com/francoischalifour/medium-zoom#methods" target="_blank" rel="noopener noreferrer">methods<OutboundLink/></a> directly.</p>
<p>This plugin will make images zoomable after navigating to current page. But if you are going to add new images dynamically, you may need this method to make those new images zoomable, too.</p>
<p>This plugin adds an extra <code>refresh</code> method on the <code>Zoom</code> instance, which will call <code>zoom.detach()</code> then <code>zoom.attach()</code> with the <a href="#selector">selector</a> as the default parameter. It will help you to refresh the zoomable images for current page.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMediumZoom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-medium-zoom/lib/composables'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">useMediumZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// ... do something to add new images in current page</span>
  
    <span class="token comment">// then you may need to call `refresh` manually to make those new images zoomable</span>
    <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      zoom<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>