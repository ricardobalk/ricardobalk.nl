<template><h1 id="客户端-api"><a class="header-anchor" href="#客户端-api">#</a> 客户端 API</h1>
<p>客户端 API 是由 <a href="https://www.npmjs.com/package/@vuepress/client" target="_blank" rel="noopener noreferrer">@vuepress/client<OutboundLink/></a> Package 提供的，用于开发客户端文件。</p>
<h2 id="composition-api"><a class="header-anchor" href="#composition-api">#</a> Composition API</h2>
<h3 id="usesitedata"><a class="header-anchor" href="#usesitedata">#</a> useSiteData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回站点数据的 Ref 对象。</p>
</li>
</ul>
<h3 id="usesitelocaledata"><a class="header-anchor" href="#usesitelocaledata">#</a> useSiteLocaleData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前 locale 的站点数据的 Ref 对象。</p>
<p>当前 locale 中的配置已经合并到顶层配置中。</p>
</li>
</ul>
<h3 id="useroutelocale"><a class="header-anchor" href="#useroutelocale">#</a> useRouteLocale</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前路由对应的 locale path 的 Ref 对象。</p>
<p>它的值是 <RouterLink to="/src/zh/reference/config.html#locales">locales</RouterLink> 配置的键之一。</p>
</li>
</ul>
<h3 id="usepagedata"><a class="header-anchor" href="#usepagedata">#</a> usePageData</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面数据的 Ref 对象。</p>
</li>
</ul>
<h3 id="usepagefrontmatter"><a class="header-anchor" href="#usepagefrontmatter">#</a> usePageFrontmatter</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面 Frontmatter 的 Ref 对象。</p>
<p>它的值是页面数据的 <code>frontmatter</code> 属性。</p>
</li>
</ul>
<h3 id="usepagehead"><a class="header-anchor" href="#usepagehead">#</a> usePageHead</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面 Head 配置的 Ref 对象。</p>
<p>它的值是合并 <RouterLink to="/src/zh/reference/frontmatter.html#head">head</RouterLink> Frontmatter 和 <RouterLink to="/src/zh/reference/config.html#head">head</RouterLink> 配置，并进行去重后得到的。</p>
</li>
</ul>
<h3 id="usepageheadtitle"><a class="header-anchor" href="#usepageheadtitle">#</a> usePageHeadTitle</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面 Head 中的标题的 Ref 对象。</p>
<p>它的值是连接页面标题和站点标题后得到的。</p>
</li>
</ul>
<h3 id="usepagelang"><a class="header-anchor" href="#usepagelang">#</a> usePageLang</h3>
<ul>
<li>
<p>详情：</p>
<p>返回当前页面语言的 Ref 对象。</p>
<p>它的值是页面数据的 <code>lang</code> 属性。</p>
</li>
</ul>
<h2 id="工具函数"><a class="header-anchor" href="#工具函数">#</a> 工具函数</h2>
<h3 id="withbase"><a class="header-anchor" href="#withbase">#</a> withBase</h3>
<ul>
<li>
<p>详情：</p>
<p>在 URL 前添加站点 <RouterLink to="/src/zh/reference/config.html#base">base</RouterLink> 前缀。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><RouterLink to="/src/zh/guide/assets.html#base-helper">指南 &gt; 静态资源 &gt; Base Helper</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="类型"><a class="header-anchor" href="#类型">#</a> 类型</h2>
<p>除了下列提到的类型 Helper 以外，我们同样提供了和上述 Composition API 相关的类型定义，如 <code>SiteData</code>, <code>PageData</code> 等。</p>
<h3 id="clientappsetup"><a class="header-anchor" href="#clientappsetup">#</a> ClientAppSetup</h3>
<ul>
<li>
<p>详情：</p>
<p>为 <RouterLink to="/src/zh/reference/plugin-api.html#clientappsetupfiles">clientAppSetupFiles</RouterLink> 提供的类型 Helper 。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<p>创建 <code>clientAppSetup.ts</code> 文件：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ClientAppSetup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">const</span> clientAppSetup<span class="token operator">:</span> <span class="token function-variable function">ClientAppSetup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> clientAppSetup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="clientappenhance"><a class="header-anchor" href="#clientappenhance">#</a> ClientAppEnhance</h3>
<ul>
<li>
<p>详情：</p>
<p>为 <RouterLink to="/src/zh/reference/plugin-api.html#clientappenhancefiles">clientAppEnhanceFiles</RouterLink> 提供的类型 Helper 。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<p>创建 <code>clientAppEnhance.ts</code> 文件：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">const</span> clientAppEnhance<span class="token operator">:</span> <span class="token function-variable function">ClientAppEnhance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> clientAppEnhance
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>