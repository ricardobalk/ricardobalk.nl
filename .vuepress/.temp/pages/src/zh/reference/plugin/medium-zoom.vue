<template><h1 id="medium-zoom"><a class="header-anchor" href="#medium-zoom">#</a> medium-zoom</h1>
<blockquote>
<p>@vuepress/plugin-medium-zoom</p>
</blockquote>
<p>将 <a href="https://github.com/francoischalifour/medium-zoom#readme" target="_blank" rel="noopener noreferrer">medium-zoom<OutboundLink/></a> 集成到 VuePress 中，为图片提供可缩放的功能。</p>
<h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<h3 id="selector"><a class="header-anchor" href="#selector">#</a> selector</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>':not(a) &gt; img'</code></p>
</li>
<li>
<p>详情：</p>
<p>可缩放的图片的选择器。</p>
<p>默认情况下，该插件会使 <code>&lt;a&gt;</code> 标签以外的所有图片都支持缩放。</p>
</li>
</ul>
<h3 id="delay"><a class="header-anchor" href="#delay">#</a> delay</h3>
<ul>
<li>
<p>类型： <code>number</code></p>
</li>
<li>
<p>默认值： <code>500</code></p>
</li>
<li>
<p>详情：</p>
<p>以毫秒为单位的延迟。</p>
<p>在切换路由进入一个新页面时，该插件会在一定延迟后才使页面内的图片支持缩放。</p>
</li>
</ul>
<h3 id="zoomoptions"><a class="header-anchor" href="#zoomoptions">#</a> zoomOptions</h3>
<ul>
<li>
<p>类型： <code>Object</code></p>
</li>
<li>
<p>详情：</p>
<p>medium-zoom 的配置项。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://github.com/francoischalifour/medium-zoom#options" target="_blank" rel="noopener noreferrer">medium-zoom &gt; Options<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h2 id="样式"><a class="header-anchor" href="#样式">#</a> 样式</h2>
<p>你可以通过 <a href="#zoomoptions">zoomOptions</a> 对大部分的缩放样式进行自定义，不过作为补充，该插件同样提供了一些 CSS 变量：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* zoom 遮罩的 z-index */</span>
  <span class="token property">--medium-zoom-z-index</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="composition-api"><a class="header-anchor" href="#composition-api">#</a> Composition API</h2>
<h3 id="usemediumzoom"><a class="header-anchor" href="#usemediumzoom">#</a> useMediumZoom</h3>
<ul>
<li>
<p>详情：</p>
<p>返回该插件使用的 <code>Zoom</code> 实例，便于你直接使用实例上的 <a href="https://github.com/francoischalifour/medium-zoom#methods" target="_blank" rel="noopener noreferrer">methods<OutboundLink/></a> 。</p>
<p>该插件会在切换路由进入当前页面时使图片支持缩放。但如果你要动态添加新图片，那么你可能就需要这个方法来让这些新图片也支持缩放。</p>
<p>该插件在 <code>Zoom</code> 实例上额外添加了一个 <code>refresh</code> 方法，它将使用 <a href="#selector">selector</a> 作为默认参数，先调用 <code>zoom.detach()</code> 再调用 <code>zoom.attach()</code> ，便于你快速刷新当前页面图片的缩放状态。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nextTick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMediumZoom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-medium-zoom/lib/composables'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> zoom <span class="token operator">=</span> <span class="token function">useMediumZoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// ... 进行了一些操作，在当前页面添加了新的图片</span>

    <span class="token comment">// 此时你可能需要手动调用 `refresh` 来让这些新图片支持缩放</span>
    <span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      zoom<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>