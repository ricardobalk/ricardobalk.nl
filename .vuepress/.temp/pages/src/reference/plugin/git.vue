<template><h1 id="git"><a class="header-anchor" href="#git">#</a> git</h1>
<blockquote>
<p>@vuepress/plugin-git</p>
</blockquote>
<p>This plugin will collect git information of your pages, including the created and updated time, the contributors, etc.</p>
<p>The <RouterLink to="/src/reference/default-theme/config.html#lastupdated">lastUpdated</RouterLink> and <RouterLink to="/src/reference/default-theme/config.html#contributors">contributors</RouterLink> of default theme is powered by this plugin.</p>
<p>This plugin is mainly used to develop themes. You won't need to use it directly in most cases.</p>
<h2 id="git-repository"><a class="header-anchor" href="#git-repository">#</a> Git Repository</h2>
<p>This plugin requires your project to be inside a <a href="https://git-scm.com/book/en/Git-Basics-Getting-a-Git-Repository" target="_blank" rel="noopener noreferrer">Git Repository<OutboundLink/></a>, so that it can collect information from the commit history.</p>
<p>You should ensure all commits are available when building your site. For example, CI workflows usually clone your repository with <a href="https://git-scm.com/docs/git-clone#Documentation/git-clone.txt---depthltdepthgt" target="_blank" rel="noopener noreferrer">--depth 1<OutboundLink/></a> to avoid fetching all commits, so you should disable the behavior to make this plugin work properly in CI.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This plugin will significantly slow down the speed of data preparation, especially when you have a lot of pages. You can consider disabling this plugin in <code>dev</code> mode to get better development experience.</p>
</div>
<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="createdtime"><a class="header-anchor" href="#createdtime">#</a> createdTime</h3>
<ul>
<li>
<p>Type: <code>boolean</code></p>
</li>
<li>
<p>Default: <code>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether to collect page created time or not.</p>
</li>
</ul>
<h3 id="updatedtime"><a class="header-anchor" href="#updatedtime">#</a> updatedTime</h3>
<ul>
<li>
<p>Type: <code>boolean</code></p>
</li>
<li>
<p>Default: <code>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether to collect page updated time or not.</p>
</li>
</ul>
<h3 id="contributors"><a class="header-anchor" href="#contributors">#</a> contributors</h3>
<ul>
<li>
<p>Type: <code>boolean</code></p>
</li>
<li>
<p>Default: <code>true</code></p>
</li>
<li>
<p>Details:</p>
<p>Whether to collect page contributors or not.</p>
</li>
</ul>
<h2 id="page-data"><a class="header-anchor" href="#page-data">#</a> Page Data</h2>
<p>This plugin will add a <code>git</code> field to page data.</p>
<p>After using this plugin, you can get the collected git information in page data:</p>
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
<p>Type: <code>number</code></p>
</li>
<li>
<p>Details:</p>
<p>Unix timestamp in milliseconds of the first commit of the page.</p>
</li>
</ul>
<h3 id="git-updatedtime"><a class="header-anchor" href="#git-updatedtime">#</a> git.updatedTime</h3>
<ul>
<li>
<p>Type: <code>number</code></p>
</li>
<li>
<p>Details:</p>
<p>Unix timestamp in milliseconds of the last commit of the page.</p>
</li>
</ul>
<h3 id="git-contributors"><a class="header-anchor" href="#git-contributors">#</a> git.contributors</h3>
<ul>
<li>Type: <code>GitContributor[]</code></li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">GitContributor</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span>
  commits<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>
<p>Details:</p>
<p>The contributors information of the page.</p>
</li>
</ul>
</template>