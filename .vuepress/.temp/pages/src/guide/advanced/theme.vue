<template><h1 id="writing-a-theme"><a class="header-anchor" href="#writing-a-theme">#</a> Writing a Theme</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Before reading this guide, you'd better learn the guide of <RouterLink to="/src/guide/advanced/plugin.html">Writing a Plugin</RouterLink> first.</p>
</div>
<p>A VuePress theme is a special plugin, which should satisfy the <RouterLink to="/src/reference/theme-api.html">Theme API</RouterLink>. Like plugins, a theme can also be a <em>Theme Object</em> or a <em>Theme Function</em>.</p>
<CodeGroup>
  <CodeGroupItem title="Theme Object" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fooTheme <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'vuepress-theme-foo'</span><span class="token punctuation">,</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    Layout<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/Layout.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Theme Function">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fooTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'vuepress-theme-foo'</span><span class="token punctuation">,</span>
    layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
      Layout<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/Layout.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="creating-a-theme-package"><a class="header-anchor" href="#creating-a-theme-package">#</a> Creating a Theme Package</h2>
<p>The typical structure of a theme package is as follow:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vuepress-theme-foo
├─ lib
│  ├─ layouts
│  │  ├─ Layout.vue
│  │  └─ <span class="token number">404</span>.vue
│  └─ index.js
└─ package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="theme-entry"><a class="header-anchor" href="#theme-entry">#</a> Theme Entry</h3>
<p>The <code>lib/index.js</code> file is the theme entry, which should export the theme directly:</p>
<CodeGroup>
  <CodeGroupItem title="CJS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> fooTheme
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> fooTheme
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Notice that the theme entry will be loaded in Node, so it should be in CommonJS format.</p>
<p>If you are using ESM format, you'll need to use <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">babel<OutboundLink/></a> or <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">typescript<OutboundLink/></a> to transpile it into CommonJS.</p>
</div>
<h3 id="package-json"><a class="header-anchor" href="#package-json">#</a> package.json</h3>
<p>The <a href="https://docs.npmjs.com/cli/v6/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json<OutboundLink/></a> file is required to publish a package to NPM:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"vuepress-theme-foo"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"vuepress-theme"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"lib/index.js"</span><span class="token punctuation">,</span>
  <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"lib"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>Set <code>name</code> to follow the naming convention: <code>vuepress-theme-xxx</code> or <code>@org/vuepress-theme-xxx</code>.</li>
<li>Set <code>keywords</code> to include <code>vuepress-theme</code>, so that users can search your theme on NPM.</li>
<li>Set <code>main</code> to the theme entry file.</li>
<li>Set <code>files</code> to only publish those files inside <code>lib</code> directory.</li>
</ul>
<h3 id="layouts"><a class="header-anchor" href="#layouts">#</a> Layouts</h3>
<p>A theme must provide at least two layouts: <code>Layout</code> and <code>404</code>.</p>
<p>The <code>Layout</code> layout should contain the <RouterLink to="/src/reference/components.html#content">Content</RouterLink> component to display the markdown content:</p>
<div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The <code>404</code> layout will be used for the <code>404.html</code> page:</p>
<div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>404 Not Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>You can provide more layouts, and users can change layout via <RouterLink to="/src/reference/frontmatter.html#layout">layout</RouterLink> frontmatter.</p>
</template>