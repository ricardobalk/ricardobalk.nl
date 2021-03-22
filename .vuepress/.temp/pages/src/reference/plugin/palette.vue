<template><h1 id="palette"><a class="header-anchor" href="#palette">#</a> palette</h1>
<p>Provide palette support for your theme.</p>
<p>This plugin is mainly used to develop themes, and has been integrated into the default theme. You won't need to use it directly in most cases.</p>
<p>For theme authors, this plugin will help you to provide styles customization for users.</p>
<h2 id="palette-and-style"><a class="header-anchor" href="#palette-and-style">#</a> Palette and Style</h2>
<p>This plugin will provide a <code>@vuepress/plugin-palette/palette</code> (palette file) and a <code>@vuepress/plugin-palette/style</code> (style file) to be imported in your theme styles.</p>
<p>The palette file is used for defining style variables, so it's likely to be imported at the beginning of your theme styles. For example, users can define <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS variables<OutboundLink/></a>, <a href="https://sass-lang.com/documentation/variables" target="_blank" rel="noopener noreferrer">SASS variables<OutboundLink/></a>, <a href="http://lesscss.org/features/#variables-feature" target="_blank" rel="noopener noreferrer">LESS variables<OutboundLink/></a> or <a href="https://stylus-lang.com/docs/variables.html" target="_blank" rel="noopener noreferrer">Stylus variables<OutboundLink/></a> in the palette, and then you can use those variables in your theme styles.</p>
<p>The style file is used for overriding the default styles or adding extra styles, so it's likely to be imported at the end of your theme styles.</p>
<h2 id="usage"><a class="header-anchor" href="#usage">#</a> Usage</h2>
<p>Use this plugin in your theme, assuming you are using SASS:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-palette'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> preset<span class="token operator">:</span> <span class="token string">'sass'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Import the palette and style in the <code>Layout.vue</code> of your theme:</p>
<div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>palette-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello, Palette!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* import variables from palette */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@vuepress/plugin-palette/palette'</span><span class="token punctuation">;</span></span>

<span class="token comment">/* set default value for variables */</span>
$<span class="token property">color</span><span class="token punctuation">:</span> red !default<span class="token punctuation">;</span>

<span class="token comment">/* use variables in your styles */</span>
<span class="token selector">.palette-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@vuepress/plugin-palette/style<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>Then users can customize variables in <code>.vuepress/styles/palette.scss</code>:</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>And add extra styles in <code>.vuepress/styles/index.scss</code>:</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="preset"><a class="header-anchor" href="#preset">#</a> preset</h3>
<ul>
<li>
<p>Type: <code>'css' | 'sass' | 'less' | 'stylus'</code></p>
</li>
<li>
<p>Default: <code>'css'</code></p>
</li>
<li>
<p>Details:</p>
<p>Set preset for other options.</p>
<p>If you don't need advanced customization of the plugin, it's recommended to only set this option and omit other options.</p>
</li>
</ul>
<h3 id="userpalettefile"><a class="header-anchor" href="#userpalettefile">#</a> userPaletteFile</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code>'.vuepress/styles/palette.css'</code></li>
<li>sass: <code>'.vuepress/styles/palette.scss'</code></li>
<li>less: <code>'.vuepress/styles/palette.less'</code></li>
<li>stylus: <code>'.vuepress/styles/palette.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the user palette file, relative to source directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>The file is where users define style variables, and it's recommended to keep the default file path as a convention.</p>
</li>
</ul>
<h3 id="temppalettefile"><a class="header-anchor" href="#temppalettefile">#</a> tempPaletteFile</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code>'styles/palette.css'</code></li>
<li>sass: <code>'styles/palette.scss'</code></li>
<li>less: <code>'styles/palette.less'</code></li>
<li>stylus: <code>'styles/palette.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the generated palette temp file, relative to temp directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>You should import the palette file via <code>'@vuepress/plugin-palette/palette'</code> alias, so you don't need to change this option in most cases.</p>
</li>
</ul>
<h3 id="userstylefile"><a class="header-anchor" href="#userstylefile">#</a> userStyleFile</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code>'.vuepress/styles/index.css'</code></li>
<li>sass: <code>'.vuepress/styles/index.scss'</code></li>
<li>less: <code>'.vuepress/styles/index.less'</code></li>
<li>stylus: <code>'.vuepress/styles/index.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the user style file, relative to source directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>The file is where users override default styles or add extra styles, and it's recommended to keep the default file path as a convention.</p>
</li>
</ul>
<h3 id="tempstylefile"><a class="header-anchor" href="#tempstylefile">#</a> tempStyleFile</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code>'styles/index.css'</code></li>
<li>sass: <code>'styles/index.scss'</code></li>
<li>less: <code>'styles/index.less'</code></li>
<li>stylus: <code>'styles/index.styl'</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>File path of the generated style temp file, relative to temp directory.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>You should import the style file via <code>'@vuepress/plugin-palette/style'</code> alias, so you don't need to change this option in most cases.</p>
</li>
</ul>
<h3 id="importcode"><a class="header-anchor" href="#importcode">#</a> importCode</h3>
<ul>
<li>
<p>Type: <code>(filePath: string) =&gt; string</code></p>
</li>
<li>
<p>Default:</p>
<ul>
<li>css: <code>(filePath) =&gt; `@import '${filePath}';\n`</code></li>
<li>sass: <code>(filePath) =&gt; `@forward '${filePath}';\n`</code></li>
<li>less: <code>(filePath) =&gt; `@import '${filePath}';\n`</code></li>
<li>stylus: <code>(filePath) =&gt; `@require '${filePath}';\n`</code></li>
</ul>
</li>
<li>
<p>Details:</p>
<p>Function to generate import code.</p>
<p>The default value depends on the <a href="#preset">preset</a> option.</p>
<p>This option is used for generating <a href="#temppalettefile">tempPaletteFile</a> and <a href="#tempstylefile">tempStyleFile</a>, and you don't need to change this option in most cases.</p>
</li>
</ul>
</template>