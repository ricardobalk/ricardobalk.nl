<template><h1 id="palette"><a class="header-anchor" href="#palette">#</a> palette</h1>
<p>为你的主题提供调色板功能。</p>
<p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p>
<p>对于主题作者，该插件可以帮助你提供用户自定义样式的能力。</p>
<h2 id="调色板和样式"><a class="header-anchor" href="#调色板和样式">#</a> 调色板和样式</h2>
<p>该插件会提供一个 <code>@vuepress/plugin-palette/palette</code> （调色板文件）和一个 <code>@vuepress/plugin-palette/style</code> （样式文件），用于在你的主题样式中引入。</p>
<p>调色板文件用于定义样式变量，因此它一般会在你主题样式的开头引入。举例来说，用户可以在调色板中定义 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" target="_blank" rel="noopener noreferrer">CSS 变量<OutboundLink/></a> 、 <a href="https://sass-lang.com/documentation/variables" target="_blank" rel="noopener noreferrer">SASS 变量<OutboundLink/></a> 、 <a href="http://lesscss.org/features/#variables-feature" target="_blank" rel="noopener noreferrer">LESS 变量<OutboundLink/></a> 或 <a href="https://stylus-lang.com/docs/variables.html" target="_blank" rel="noopener noreferrer">Stylus 变量<OutboundLink/></a> ，然后你可以在你的主题样式中使用这些变量。</p>
<p>样式文件用于覆盖默认样式或添加额外样式，因此它一般会在你主题样式的末尾引入。</p>
<h2 id="使用"><a class="header-anchor" href="#使用">#</a> 使用</h2>
<p>在你的主题中使用该插件，假设你使用 SASS 作为 CSS 预处理器：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-palette'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> preset<span class="token operator">:</span> <span class="token string">'sass'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在你主题的 <code>Layout.vue</code> 中引入调色板和样式：</p>
<div class="language-markup ext-vue line-numbers-mode"><pre v-pre class="language-markup"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>palette-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>你好，调色板！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 从调色板中引入变量 */</span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">'@vuepress/plugin-palette/palette'</span><span class="token punctuation">;</span></span>

<span class="token comment">/* 设置变量的默认值 */</span>
$<span class="token property">color</span><span class="token punctuation">:</span> red !default<span class="token punctuation">;</span>

<span class="token comment">/* 在你的样式中使用变量 */</span>
<span class="token selector">.palette-title</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@vuepress/plugin-palette/style<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>然后，用户就可以在 <code>.vuepress/styles/palette.scss</code> 中自定义变量：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>并在 <code>.vuepress/styles/index.scss</code> 中添加额外样式：</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">:root </span><span class="token punctuation">{</span>
  <span class="token property">scroll-behavior</span><span class="token punctuation">:</span> smooth<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<h3 id="preset"><a class="header-anchor" href="#preset">#</a> preset</h3>
<ul>
<li>
<p>类型： <code>'css' | 'sass' | 'less' | 'stylus'</code></p>
</li>
<li>
<p>默认值： <code>'css'</code></p>
</li>
<li>
<p>详情：</p>
<p>设置其他选项的预设。</p>
<p>如果你没有对该插件进行进阶定制化的需要，建议只设置该配置项并忽略其他选项。</p>
</li>
</ul>
<h3 id="userpalettefile"><a class="header-anchor" href="#userpalettefile">#</a> userPaletteFile</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值：</p>
<ul>
<li>css: <code>'.vuepress/styles/palette.css'</code></li>
<li>sass: <code>'.vuepress/styles/palette.scss'</code></li>
<li>less: <code>'.vuepress/styles/palette.less'</code></li>
<li>stylus: <code>'.vuepress/styles/palette.styl'</code></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>用户调色板文件的路径，是针对源文件目录的相对路径。</p>
<p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p>
<p>该文件用于用户定义样式变量，建议保持默认值作为约定的文件路径。</p>
</li>
</ul>
<h3 id="temppalettefile"><a class="header-anchor" href="#temppalettefile">#</a> tempPaletteFile</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值：</p>
<ul>
<li>css: <code>'styles/palette.css'</code></li>
<li>sass: <code>'styles/palette.scss'</code></li>
<li>less: <code>'styles/palette.less'</code></li>
<li>stylus: <code>'styles/palette.styl'</code></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>生成的调色板临时文件的路径，是针对临时文件文件目录的相对路径。</p>
<p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p>
<p>你应该使用 <code>'@vuepress/plugin-palette/palette'</code> 别名来引入调色板文件，因此在绝大多数情况下你不需要修改该配置项。</p>
</li>
</ul>
<h3 id="userstylefile"><a class="header-anchor" href="#userstylefile">#</a> userStyleFile</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值：</p>
<ul>
<li>css: <code>'.vuepress/styles/index.css'</code></li>
<li>sass: <code>'.vuepress/styles/index.scss'</code></li>
<li>less: <code>'.vuepress/styles/index.less'</code></li>
<li>stylus: <code>'.vuepress/styles/index.styl'</code></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>用户样式文件的路径，是针对源文件目录的相对路径。</p>
<p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p>
<p>该文件用于用户覆盖默认样式和添加额外样式，建议保持默认值作为约定的文件路径。</p>
</li>
</ul>
<h3 id="tempstylefile"><a class="header-anchor" href="#tempstylefile">#</a> tempStyleFile</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值：</p>
<ul>
<li>css: <code>'styles/index.css'</code></li>
<li>sass: <code>'styles/index.scss'</code></li>
<li>less: <code>'styles/index.less'</code></li>
<li>stylus: <code>'styles/index.styl'</code></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>生成的样式临时文件的路径，是针对临时文件文件目录的相对路径。</p>
<p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p>
<p>你应该使用 <code>'@vuepress/plugin-palette/style'</code> 别名来引入样式文件，因此在绝大多数情况下你不需要修改该配置项。</p>
</li>
</ul>
<h3 id="importcode"><a class="header-anchor" href="#importcode">#</a> importCode</h3>
<ul>
<li>
<p>类型： <code>(filePath: string) =&gt; string</code></p>
</li>
<li>
<p>默认值：</p>
<ul>
<li>css: <code>(filePath) =&gt; `@import '${filePath}';\n`</code></li>
<li>sass: <code>(filePath) =&gt; `@forward '${filePath}';\n`</code></li>
<li>less: <code>(filePath) =&gt; `@import '${filePath}';\n`</code></li>
<li>stylus: <code>(filePath) =&gt; `@require '${filePath}';\n`</code></li>
</ul>
</li>
<li>
<p>详情：</p>
<p>用于生成引入代码的函数。</p>
<p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p>
<p>该配置项用于生成 <a href="#temppalettefile">tempPaletteFile</a> 和 <a href="#tempstylefile">tempStyleFile</a> ，在绝大多数情况下你不需要修改该配置项。</p>
</li>
</ul>
</template>