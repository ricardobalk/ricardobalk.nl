<template><h1 id="theme-data"><a class="header-anchor" href="#theme-data">#</a> theme-data</h1>
<blockquote>
<p>@vuepress/plugin-theme-data</p>
</blockquote>
<p>Provide client data for your theme, with VuePress <RouterLink to="/src/guide/i18n.html">i18n</RouterLink> support.</p>
<p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won't need to use it directly in most cases.</p>
<p>For theme authors, this plugin will help you to use the same i18n mechanism as VuePress and the default theme. But if you don't want to provide i18n support, or you want to implement in your own way, you don't need this plugin.</p>
<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="themedata"><a class="header-anchor" href="#themedata">#</a> themeData</h3>
<ul>
<li>
<p>Type: <code>ThemeData</code></p>
</li>
<li>
<p>Default: <code>{}</code></p>
</li>
<li>
<p>Details:</p>
<p>The theme data object that you want to use in client side.</p>
<p>You can provide theme data in Node side via this option, and use it in client side via <a href="#useThemeData">useThemeData</a> and <a href="#useThemeLocaleData">useThemeLocaleData</a>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-theme-data'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        themeData<span class="token operator">:</span> <span class="token punctuation">{</span>
          foo<span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span>
          locales<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              foo<span class="token operator">:</span> <span class="token string">'zh-foo'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>The theme data object will be processed by <code>JSON.stringify()</code> before forwarding to client side, so you should ensure that you are providing a JSON-friendly object.</p>
</div>
<h2 id="composition-api"><a class="header-anchor" href="#composition-api">#</a> Composition API</h2>
<h3 id="usethemedata"><a class="header-anchor" href="#usethemedata">#</a> useThemeData</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the theme data ref object.</p>
<p>The value is provided by <a href="#themeData">themeData</a> option.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/lib/composables'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data'</span>

<span class="token keyword">type</span> <span class="token class-name">MyThemeData</span> <span class="token operator">=</span> ThemeData<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> themeData <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useThemeData</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyThemeData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>themeData<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="usethemelocaledata"><a class="header-anchor" href="#usethemelocaledata">#</a> useThemeLocaleData</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the theme data ref object in current locale.</p>
<p>The properties of current locale has been merged into the root-level properties.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useThemeLocaleData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data/lib/composables'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ThemeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-theme-data'</span>

<span class="token keyword">type</span> <span class="token class-name">MyThemeData</span> <span class="token operator">=</span> ThemeData<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  foo<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> themeLocaleData <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useThemeLocaleData</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyThemeData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>themeLocaleData<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>