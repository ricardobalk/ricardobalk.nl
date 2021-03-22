<template><h1 id="writing-a-plugin"><a class="header-anchor" href="#writing-a-plugin">#</a> Writing a Plugin</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Before reading this guide, you'd better learn the VuePress <RouterLink to="/src/guide/advanced/architecture.html">architecture</RouterLink> first.</p>
</div>
<p>A VuePress plugin is a plain JavaScript object that satisfies the <RouterLink to="/src/reference/plugin-api.html">Plugin API</RouterLink>, which is called a <em>Plugin Object</em>.</p>
<p>If a plugin wants to receive user options, it could be a function that returns a <em>Plugin Object</em>, which is called a <em>Plugin Function</em>.</p>
<CodeGroup>
  <CodeGroupItem title="Plugin Object" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fooPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-foo'</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Plugin Function">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fooPlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'vuepress-plugin-foo'</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="creating-a-plugin-package"><a class="header-anchor" href="#creating-a-plugin-package">#</a> Creating a Plugin Package</h2>
<p>The typical structure of a plugin package is as follow:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>vuepress-plugin-foo
├─ lib
│  └─ index.js
└─ package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="plugin-entry"><a class="header-anchor" href="#plugin-entry">#</a> Plugin Entry</h3>
<p>The <code>lib/index.js</code> file is the plugin entry, which should export the plugin directly:</p>
<CodeGroup>
  <CodeGroupItem title="CJS" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> fooPlugin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> fooPlugin
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Notice that the plugin entry will be loaded in Node, so it should be in CommonJS format.</p>
<p>If you are using ESM format, you'll need to use <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">babel<OutboundLink/></a> or <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">typescript<OutboundLink/></a> to transpile it into CommonJS.</p>
</div>
<h3 id="package-json"><a class="header-anchor" href="#package-json">#</a> package.json</h3>
<p>The <a href="https://docs.npmjs.com/cli/v6/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json<OutboundLink/></a> file is required to publish a package to NPM:</p>
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
<li>Set <code>name</code> to follow the naming convention: <code>vuepress-plugin-xxx</code> or <code>@org/vuepress-plugin-xxx</code>.</li>
<li>Set <code>keywords</code> to include <code>vuepress-plugin</code>, so that users can search your plugin on NPM.</li>
<li>Set <code>main</code> to the plugin entry file.</li>
<li>Set <code>files</code> to only publish those files inside <code>lib</code> directory.</li>
</ul>
</template>