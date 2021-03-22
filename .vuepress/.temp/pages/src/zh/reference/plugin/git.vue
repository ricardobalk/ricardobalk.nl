<template><h1 id="git"><a class="header-anchor" href="#git">#</a> git</h1>
<blockquote>
<p>@vuepress/plugin-git</p>
</blockquote>
<p>该插件会收集你的页面的 Git 信息，包括创建和更新时间、贡献者等。</p>
<p>默认主题的 <RouterLink to="/src/zh/reference/default-theme/config.html#lastupdated">lastUpdated</RouterLink> 和 <RouterLink to="/src/zh/reference/default-theme/config.html#contributors">contributors</RouterLink> 就是由该插件支持的。</p>
<p>该插件主要用于开发主题，大部分情况下你不需要直接使用它。</p>
<h2 id="git-仓库"><a class="header-anchor" href="#git-仓库">#</a> Git 仓库</h2>
<p>该插件要求你的项目在 <a href="https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository" target="_blank" rel="noopener noreferrer">Git 仓库<OutboundLink/></a> 下，这样它才能从提交历史记录中收集信息。</p>
<p>在构建站点时，你应该确保所有的提交记录是可以获取到的。举例来说， CI 工作流通常会在克隆你的仓库时添加 <a href="https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt" target="_blank" rel="noopener noreferrer">--depth 1<OutboundLink/></a> 参数来避免拉取全部的提交记录，因此你需要禁用这个功能，以便该插件在 CI 可以中正常使用。</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>该插件会显著降低准备数据的速度，特别是在你的页面数量很多的时候。你可以考虑在 <code>dev</code> 模式下禁用该插件来获取更好的开发体验。</p>
</div>
<h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<h3 id="createdtime"><a class="header-anchor" href="#createdtime">#</a> createdTime</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否收集页面的创建时间。</p>
</li>
</ul>
<h3 id="updatedtime"><a class="header-anchor" href="#updatedtime">#</a> updatedTime</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否收集页面的更新时间。</p>
</li>
</ul>
<h3 id="contributors"><a class="header-anchor" href="#contributors">#</a> contributors</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>是否收集页面的贡献者。</p>
</li>
</ul>
<h2 id="页面数据"><a class="header-anchor" href="#页面数据">#</a> 页面数据</h2>
<p>该插件会向页面数据中添加一个 <code>git</code> 字段。</p>
<p>在使用该插件后，可以在页面数据中获取该插件收集到的 Git 信息：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GitPluginPageData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token generic-function"><span class="token function">usePageData</span><span class="token generic class-name"><span class="token operator">&lt;</span>GitPluginPageData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>value<span class="token punctuation">.</span>git<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="git-createdtime"><a class="header-anchor" href="#git-createdtime">#</a> git.createdTime</h3>
<ul>
<li>
<p>类型： <code>number</code></p>
</li>
<li>
<p>详情：</p>
<p>页面第一次提交的 Unix 毫秒时间戳。</p>
</li>
</ul>
<h3 id="git-updatedtime"><a class="header-anchor" href="#git-updatedtime">#</a> git.updatedTime</h3>
<ul>
<li>
<p>类型： <code>number</code></p>
</li>
<li>
<p>详情：</p>
<p>页面最后一次提交的 Unix 毫秒时间戳。</p>
</li>
</ul>
<h3 id="git-contributors"><a class="header-anchor" href="#git-contributors">#</a> git.contributors</h3>
<ul>
<li>类型： <code>GitContributor[]</code></li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GitContributor</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span>
  commits<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<p>详情：</p>
<p>页面的贡献者信息。</p>
</li>
</ul>
</template>