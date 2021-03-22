<template><h1 id="google-analytics"><a class="header-anchor" href="#google-analytics">#</a> google-analytics</h1>
<blockquote>
<p>@vuepress/plugin-google-analytics</p>
</blockquote>
<p>将 <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics<OutboundLink/></a> 集成到 VuePress 中。</p>
<p>该插件会通过引入 <a href="https://developers.google.com/analytics/devguides/collection/gtagjs" target="_blank" rel="noopener noreferrer">gtag.js<OutboundLink/></a> 来启用 <a href="https://support.google.com/analytics/answer/10089681" target="_blank" rel="noopener noreferrer">Google Analytics 4<OutboundLink/></a> 。</p>
<h2 id="上报事件"><a class="header-anchor" href="#上报事件">#</a> 上报事件</h2>
<p>Google Analytics 会 <a href="https://support.google.com/analytics/answer/9234069" target="_blank" rel="noopener noreferrer">自动收集部分事件<OutboundLink/></a> ，比如 <code>page_view</code>, <code>first_visit</code> 等。</p>
<p>因此，如果你只是想收集站点的一些基础数据，你只需要正确设置 <a href="#id">Measurement ID</a> ，不需要再额外做其他事情。</p>
<p>在引入该插件之后，一个全局的 <code>gtag()</code> 函数会被挂载到 <code>window</code> 对象上，你可以使用它进行 <a href="https://developers.google.com/analytics/devguides/collection/ga4/events" target="_blank" rel="noopener noreferrer">自定义事件的上报<OutboundLink/></a> 。</p>
<h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<h3 id="id"><a class="header-anchor" href="#id">#</a> id</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>Google Analytics 4 的 Measurement ID ，应以 <code>'G-'</code> 开头。</p>
<p>你可以通过 <a href="https://support.google.com/analytics/answer/9539598" target="_blank" rel="noopener noreferrer">这里<OutboundLink/></a> 的指引来找到你的 Measurement ID 。注意区分 Google Analytics 4 的 Measurement ID （即 &quot;G-&quot; 开头的 ID） 和 Universal Analytics 的 Tracking ID （即 &quot;UA-&quot; 开头的 ID）。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-google-analytics'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">'G-XXXXXXXXXX'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>