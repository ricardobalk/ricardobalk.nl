<template><h1 id="pwa-popup"><a class="header-anchor" href="#pwa-popup">#</a> pwa-popup</h1>
<blockquote>
<p>@vuepress/plugin-pwa-popup</p>
</blockquote>
<p>提供一个弹窗组件，允许用户手动刷新 PWA Service Worker 。</p>
<p>该插件必须和 <RouterLink to="/src/zh/reference/plugin/pwa.html">pwa 插件</RouterLink> 一起使用，并且 <code>skipWaiting</code> 配置项不能设置为 <code>true</code> 。</p>
<p>当新的 Service Worker 就绪时，会在页面右下角出现一个弹窗，询问用户是否需要激活处于 Waiting 状态的 Service Worker 。</p>
<h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<h3 id="locales"><a class="header-anchor" href="#locales">#</a> locales</h3>
<ul>
<li>
<p>类型： <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>弹窗在不同 locales 下的信息。</p>
<p>如果没有指定该配置项，它会降级使用默认信息。</p>
</li>
<li>
<p>示例：</p>
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
<li>参考：
<ul>
<li><RouterLink to="/src/zh/guide/i18n.html">指南 &gt; 多语言支持</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="样式"><a class="header-anchor" href="#样式">#</a> 样式</h2>
<p>你可以通过 CSS 变量来自定义弹窗的样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--pwa-popup-color</span><span class="token punctuation">:</span> #3eaf7c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>