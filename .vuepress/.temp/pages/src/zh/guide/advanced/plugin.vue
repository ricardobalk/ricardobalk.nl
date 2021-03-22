<template><h1 id="开发插件"><a class="header-anchor" href="#开发插件">#</a> 开发插件</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>在阅读该指南之前，你最好先了解一下 VuePress 的 <RouterLink to="/src/zh/guide/advanced/architecture.html">架构</RouterLink> 。</p>
</div>
<p>VuePress 插件是一个符合 <RouterLink to="/src/zh/reference/plugin-api.html">Plugin API</RouterLink> 的普通 JavaScript 对象，称之为 <em>插件对象</em> 。</p>
<p>如果插件想要接收用户配置项，那么它可以是一个返回值为 <em>插件对象</em> 的函数，称之为 <em>插件函数</em> 。</p>
<CodeGroup>
  <CodeGroupItem title="插件对象" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fooPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-foo'</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="插件函数">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fooPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-foo'</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="创建一个插件-package"><a class="header-anchor" href="#创建一个插件-package">#</a> 创建一个插件 Package</h2>
<p>一个典型的插件 Package 的结构如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vuepress-plugin-foo
├─ lib
│  └─ index.js
└─ package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="插件入口"><a class="header-anchor" href="#插件入口">#</a> 插件入口</h3>
<p><code>lib/index.js</code> 文件是插件入口，它应当直接导出插件：</p>
<CodeGroup>
  <CodeGroupItem title="CJS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> fooPlugin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> fooPlugin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>注意，插件入口会在 Node 中被加载，因此它应为 CommonJS 格式。</p>
<p>如果你使用 ESM 格式，你需要使用 <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">babel<OutboundLink/></a> 或 <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">typescript<OutboundLink/></a> 来将它编译成 CommonJS 。</p>
</div>
<h3 id="package-json"><a class="header-anchor" href="#package-json">#</a> package.json</h3>
<p>为了把 Package 发布到 NPM 上，<a href="https://docs.npmjs.com/cli/v6/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json<OutboundLink/></a> 文件是必需的：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"vuepress-plugin-foo"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"vuepress-plugin"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"lib/index.js"</span><span class="token punctuation">,</span>
  <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"lib"</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>将 <code>name</code> 按照约定命名： <code>vuepress-plugin-xxx</code> 或 <code>@org/vuepress-plugin-xxx</code> 。</li>
<li>在 <code>keywords</code> 中包含 <code>vuepress-plugin</code> ，这样用户可以在 NPM 上搜索到你的插件。</li>
<li>将 <code>main</code> 设为插件入口文件。</li>
<li>设置 <code>files</code> ，仅发布 <code>lib</code> 目录下的文件。</li>
</ul>
</template>