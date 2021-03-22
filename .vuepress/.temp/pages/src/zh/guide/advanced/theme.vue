<template><h1 id="开发主题"><a class="header-anchor" href="#开发主题">#</a> 开发主题</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在阅读该指南之前，你最好先了解一下 <RouterLink to="/src/zh/guide/advanced/plugin.html">开发插件</RouterLink> 指南。</p>
</div>
<p>VuePress 主题是一个特殊的插件，它应该符合 <RouterLink to="/src/zh/reference/theme-api.html">主题 API</RouterLink> 。和插件一样，主题可以是一个 <em>主题对象</em> 或一个 <em>主题函数</em> 。</p>
<CodeGroup>
  <CodeGroupItem title="主题对象" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fooTheme <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'vuepress-theme-foo'</span><span class="token punctuation">,</span>
  layouts<span class="token operator">:</span> <span class="token punctuation">{</span>
    Layout<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/Layout.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">404</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'layouts/404.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="主题函数">
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
<h2 id="创建一个主题-package"><a class="header-anchor" href="#创建一个主题-package">#</a> 创建一个主题 Package</h2>
<p>一个典型的主题 Package 的结构如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vuepress-theme-foo
├─ lib
│  ├─ layouts
│  │  ├─ Layout.vue
│  │  └─ <span class="token number">404</span>.vue
│  └─ index.js
└─ package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="主题入口"><a class="header-anchor" href="#主题入口">#</a> 主题入口</h3>
<p><code>lib/index.js</code> 文件是主题入口，它应当直接导出主题：</p>
<CodeGroup>
  <CodeGroupItem title="CJS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> fooTheme
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> fooTheme
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>注意，主题入口会在 Node 中被加载，因此它应为 CommonJS 格式。</p>
<p>如果你使用 ESM 格式，你需要使用 <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">babel<OutboundLink/></a> 或 <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">typescript<OutboundLink/></a> 来将它编译成 CommonJS 。</p>
</div>
<h3 id="package-json"><a class="header-anchor" href="#package-json">#</a> package.json</h3>
<p>为了把 Package 发布到 NPM 上，<a href="https://docs.npmjs.com/cli/v6/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json<OutboundLink/></a> 文件是必需的：</p>
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
<li>将 <code>name</code> 按照约定命名： <code>vuepress-theme-xxx</code> 或 <code>@org/vuepress-theme-xxx</code> 。</li>
<li>在 <code>keywords</code> 中包含 <code>vuepress-theme</code> ，这样用户可以在 NPM 上搜索到你的主题。</li>
<li>将 <code>main</code> 设为主题入口文件。</li>
<li>设置 <code>files</code> ，仅发布 <code>lib</code> 目录下的文件。</li>
</ul>
<h3 id="布局"><a class="header-anchor" href="#布局">#</a> 布局</h3>
<p>主题必须提供至少两个布局：<code>Layout</code> 和 <code>404</code> 。</p>
<p><code>Layout</code> 布局应该包含 <RouterLink to="/src/zh/reference/components.html#content">Content</RouterLink> 组件来展示 Markdown 内容。</p>
<div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>404</code> 布局会被用于 <code>404.html</code> 页面：</p>
<div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>404 Not Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>你可以提供多个布局，用户可以通过 <RouterLink to="/src/zh/reference/frontmatter.html#layout">layout</RouterLink> Frontmatter 来修改布局。</p>
</template>