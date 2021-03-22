<template><h1 id="container"><a class="header-anchor" href="#container">#</a> container</h1>
<blockquote>
<p>@vuepress/plugin-container</p>
</blockquote>
<p>Register markdown custom containers in your VuePress site.</p>
<p>This plugin simplifies the use of <a href="https://github.com/markdown-it/markdown-it-container" target="_blank" rel="noopener noreferrer">markdown-it-container<OutboundLink/></a>, but also retains its original capabilities.</p>
<p>The <RouterLink to="/src/reference/default-theme/markdown.html#custom-containers">Custom Containers</RouterLink> of default theme is powered by this plugin.</p>
<h2 id="container-syntax"><a class="header-anchor" href="#container-syntax">#</a> Container Syntax</h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span> [info]
[content]
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>The <code>type</code> is required and should be specified via <a href="#type">type</a> option.</li>
<li>The <code>info</code> is optional, and the default value can be specified via <code>defaultInfo</code> in <a href="#locales">locales</a> option.</li>
<li>The <code>content</code> can be any valid markdown content.</li>
</ul>
<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="type"><a class="header-anchor" href="#type">#</a> type</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The type of the container.</p>
<p>It will be used as the <code>name</code> param of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container<OutboundLink/></a>.</p>
</li>
</ul>
<h3 id="locales"><a class="header-anchor" href="#locales">#</a> locales</h3>
<ul>
<li>
<p>Type: <code>Record&lt;string, { defaultInfo: string }&gt;</code></p>
</li>
<li>
<p>Details:</p>
<p>The default <code>info</code> of the container in different locales.</p>
<p>If this option is not specified, the default <code>info</code> will fallback to the uppercase of the <a href="#type">type</a> option.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/container'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'tip'</span><span class="token punctuation">,</span>
        locales<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            defaultInfo<span class="token operator">:</span> <span class="token string">'TIP'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            defaultInfo<span class="token operator">:</span> <span class="token string">'提示'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul>
<li>Also see:
<ul>
<li><RouterLink to="/src/guide/i18n.html">Guide &gt; I18n</RouterLink></li>
</ul>
</li>
</ul>
<h3 id="before"><a class="header-anchor" href="#before">#</a> before</h3>
<ul>
<li>
<p>Type: <code>(info: string) =&gt; string</code></p>
</li>
<li>
<p>Default:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">(</span>info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span>
  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="custom-container </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p class="custom-container-title"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>A function to render the starting tag of the container.</p>
<p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p>
<p>This option will not take effect if you don't specify the <a href="#after">after</a> option.</p>
</li>
</ul>
<h3 id="after"><a class="header-anchor" href="#after">#</a> after</h3>
<ul>
<li>
<p>Type: <code>(info: string) =&gt; string</code></p>
</li>
<li>
<p>Default:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token string">'&lt;/div>\n'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>A function to render the ending tag of the container.</p>
<p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p>
<p>This option will not take effect if you don't specify the <a href="#before">before</a> option.</p>
</li>
</ul>
<h3 id="render"><a class="header-anchor" href="#render">#</a> render</h3>
<ul>
<li>Type:</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">MarkdownItContainerRenderFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  tokens<span class="token operator">:</span> Token<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> MarkdownEnv<span class="token punctuation">,</span>
  self<span class="token operator">:</span> Renderer
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>The <code>render</code> option of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container<OutboundLink/></a>.</p>
<p>This plugin uses a default <code>render</code> function. If you specify this option, the default <code>render</code> function will be replaced, and the <a href="#locales">locales</a>, <a href="#before">before</a> and <a href="#after">after</a> options will be ignored.</p>
</li>
</ul>
<h3 id="validate"><a class="header-anchor" href="#validate">#</a> validate</h3>
<ul>
<li>
<p>Type: <code>(params: string) =&gt; boolean</code></p>
</li>
<li>
<p>Details:</p>
<p>The <code>validate</code> option of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container<OutboundLink/></a>.</p>
</li>
</ul>
<h3 id="marker"><a class="header-anchor" href="#marker">#</a> marker</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The <code>marker</code> option of <a href="https://github.com/markdown-it/markdown-it-container#api" target="_blank" rel="noopener noreferrer">markdown-it-container<OutboundLink/></a>.</p>
</li>
</ul>
</template>