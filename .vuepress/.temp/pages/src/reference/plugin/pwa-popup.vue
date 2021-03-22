<template><h1 id="pwa-popup"><a class="header-anchor" href="#pwa-popup">#</a> pwa-popup</h1>
<blockquote>
<p>@vuepress/plugin-pwa-popup</p>
</blockquote>
<p>Provide a popup component for users to activate the new PWA service worker manually.</p>
<p>This plugin must be used together with <RouterLink to="/src/reference/plugin/pwa.html">pwa plugin</RouterLink>, and the <code>skipWaiting</code> option must not be set to <code>true</code>.</p>
<p>When the new service worker is ready, a popup will appear in the right bottom of the page to ask users to activate the waiting service worker.</p>
<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="locales"><a class="header-anchor" href="#locales">#</a> locales</h3>
<ul>
<li>
<p>Type: <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p>
</li>
<li>
<p>Details:</p>
<p>The messages of the popup in different locales.</p>
<p>If this option is not specified, it will fallback to default messages.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'@vuepress/plugin-pwa'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-pwa-popup'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        locales<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            message<span class="token operator">:</span> <span class="token string">'New content is available.'</span><span class="token punctuation">,</span>
            buttonText<span class="token operator">:</span> <span class="token string">'Refresh'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            message<span class="token operator">:</span> <span class="token string">'发现新内容可用'</span><span class="token punctuation">,</span>
            buttonText<span class="token operator">:</span> <span class="token string">'刷新'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li>Also see:
<ul>
<li><RouterLink to="/src/guide/i18n.html">Guide &gt; I18n</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="styles"><a class="header-anchor" href="#styles">#</a> Styles</h2>
<p>You can customize the style of the popup via CSS variables:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--pwa-popup-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>