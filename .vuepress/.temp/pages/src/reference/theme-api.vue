<template><h1 id="theme-api"><a class="header-anchor" href="#theme-api">#</a> Theme API</h1>
<p>VuePress theme also works as a plugin, so Theme API can accept all the options of <RouterLink to="/src/reference/plugin-api.html">Plugin API</RouterLink> with following differences.</p>
<h2 id="basic-options"><a class="header-anchor" href="#basic-options">#</a> Basic Options</h2>
<h3 id="name"><a class="header-anchor" href="#name">#</a> name</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Details:</p>
<p>Name of the theme.</p>
<p>It should follow the naming convention:</p>
<ul>
<li>Non-scoped: <code>vuepress-theme-foo</code></li>
<li>Scoped: <code>@org/vuepress-theme-foo</code></li>
</ul>
</li>
</ul>
<h3 id="multiple"><a class="header-anchor" href="#multiple">#</a> multiple</h3>
<ul>
<li>
<p>Details:</p>
<p>A theme should never be used multiple times, so this option should not be set.</p>
</li>
</ul>
<h2 id="theme-specific-options"><a class="header-anchor" href="#theme-specific-options">#</a> Theme Specific Options</h2>
<h3 id="layouts"><a class="header-anchor" href="#layouts">#</a> layouts</h3>
<ul>
<li>
<p>Type: <code>string | Record&lt;string, string&gt;</code></p>
</li>
<li>
<p>Details:</p>
<p>Specify layout components of the theme.</p>
<p>It accepts absolute path of the layouts directory. All the <code>.vue,.ts,.js</code> files in the directory will be registered as layout components.</p>
<p>It also accepts a plain object, of which the key is the layout name and the value is the absolute path of the layout file.</p>
<p>A theme must have at least two layouts: <code>Layout</code> and <code>404</code>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<p>The layout directory:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>layouts
├─ Layout.vue
├─ <span class="token number">404</span>.vue
└─ FooBar.vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Using the absolute path of layout directory:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/layouts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Using a plain object is equivalent:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    Layout<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/layouts/Layout.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/layouts/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    FooBar<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/layouts/FooBar.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="extends"><a class="header-anchor" href="#extends">#</a> extends</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The name of the theme to inherit.</p>
<p>All of the Theme API of the parent theme will be inherited, but the child theme will not override the parent theme.</p>
<p>If a layout with the same name is registered in both the child theme and the parent theme, the layout of the child theme will have a higher priority.</p>
<p>Multi-level inheritance is not supported.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// inherit the default theme</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">,</span>

  <span class="token comment">// override the `404` layout</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>