<template><h1 id="主题-api"><a class="header-anchor" href="#主题-api">#</a> 主题 API</h1>
<p>VuePress 主题同样是一个插件，因此主题 API 可以接收 <RouterLink to="/src/zh/reference/plugin-api.html">插件 API</RouterLink> 的所有选项，但存在以下差别：</p>
<h2 id="基础配置项"><a class="header-anchor" href="#基础配置项">#</a> 基础配置项</h2>
<h3 id="name"><a class="header-anchor" href="#name">#</a> name</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>主题的名称。</p>
<p>它应遵从如下命名约定：</p>
<ul>
<li>非 Scoped: <code>vuepress-theme-foo</code></li>
<li>Scoped: <code>@org/vuepress-theme-foo</code></li>
</ul>
</li>
</ul>
<h3 id="multiple"><a class="header-anchor" href="#multiple">#</a> multiple</h3>
<ul>
<li>
<p>详情：</p>
<p>主题永远不能被多次使用，因此不应设置该配置项。</p>
</li>
</ul>
<h2 id="主题特定配置项"><a class="header-anchor" href="#主题特定配置项">#</a> 主题特定配置项</h2>
<h3 id="layouts"><a class="header-anchor" href="#layouts">#</a> layouts</h3>
<ul>
<li>
<p>类型： <code>string | Record&lt;string, string&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>指定主题的布局组件。</p>
<p>它可以接收布局目录的绝对路径。该目录下的所有 <code>.vue,.ts,.js</code> 文件都会被注册为布局组件。</p>
<p>它还可以接收一个普通对象，其键是布局名称，值是布局文件的绝对路径。</p>
<p>一个主题必须至少有两个布局： <code>Layout</code> 和 <code>404</code> 。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<p>布局目录：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>layouts
├─ Layout.vue
├─ <span class="token number">404</span>.vue
└─ FooBar.vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>使用布局目录的绝对路径：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  layouts<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/layouts'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用普通对象是等效的：</p>
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
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>要继承的主题名称。</p>
<p>父主题的所有主题 API 都会被继承，但是子主题不会覆盖父主题。</p>
<p>如果在子主题和父主题中都注册了具有相同名称的布局，则子主题的布局将具有更高的优先级。</p>
<p>不支持多级继承。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 继承默认主题</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">,</span>

  <span class="token comment">// 覆盖 `404` 布局</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'path/to/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>