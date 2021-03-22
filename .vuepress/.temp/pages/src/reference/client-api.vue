<template><h1 id="client-api"><a class="header-anchor" href="#client-api">#</a> Client API</h1>
<p>Client API is provided by <a href="https://www.npmjs.com/package/@vuepress/client" target="_blank" rel="noopener noreferrer">@vuepress/client<OutboundLink/></a> package, which is used for developing client files.</p>
<h2 id="composition-api"><a class="header-anchor" href="#composition-api">#</a> Composition API</h2>
<h3 id="usesitedata"><a class="header-anchor" href="#usesitedata">#</a> useSiteData</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the site data ref object.</p>
</li>
</ul>
<h3 id="usesitelocaledata"><a class="header-anchor" href="#usesitelocaledata">#</a> useSiteLocaleData</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the site data ref object of current locale.</p>
<p>The properties of current locale have been merged into the root-level properties.</p>
</li>
</ul>
<h3 id="useroutelocale"><a class="header-anchor" href="#useroutelocale">#</a> useRouteLocale</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the locale path ref object of current route.</p>
<p>The value is one of the keys of the <RouterLink to="/src/reference/config.html#locales">locales</RouterLink> config.</p>
</li>
</ul>
<h3 id="usepagedata"><a class="header-anchor" href="#usepagedata">#</a> usePageData</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the page data ref object of current page.</p>
</li>
</ul>
<h3 id="usepagefrontmatter"><a class="header-anchor" href="#usepagefrontmatter">#</a> usePageFrontmatter</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the frontmatter ref object of current page.</p>
<p>The value is the <code>frontmatter</code> property of the page data.</p>
</li>
</ul>
<h3 id="usepagehead"><a class="header-anchor" href="#usepagehead">#</a> usePageHead</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the head config ref object of current page.</p>
<p>The value is obtained by merging and deduplicating <RouterLink to="/src/reference/frontmatter.html#head">head</RouterLink> frontmatter and <RouterLink to="/src/reference/config.html#head">head</RouterLink> config.</p>
</li>
</ul>
<h3 id="usepageheadtitle"><a class="header-anchor" href="#usepageheadtitle">#</a> usePageHeadTitle</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the head title ref object of current page.</p>
<p>The value is obtained by joining the page title and site title.</p>
</li>
</ul>
<h3 id="usepagelang"><a class="header-anchor" href="#usepagelang">#</a> usePageLang</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the language ref object of current page.</p>
<p>The value is the <code>lang</code> property of the page data.</p>
</li>
</ul>
<h2 id="utils"><a class="header-anchor" href="#utils">#</a> Utils</h2>
<h3 id="withbase"><a class="header-anchor" href="#withbase">#</a> withBase</h3>
<ul>
<li>
<p>Details:</p>
<p>Prefix URL with site <RouterLink to="/src/reference/config.html#base">base</RouterLink>.</p>
</li>
<li>
<p>Also see:</p>
<ul>
<li><RouterLink to="/src/guide/assets.html#base-helper">Guide &gt; Assets &gt; Base Helper</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="types"><a class="header-anchor" href="#types">#</a> Types</h2>
<p>In addition to the type helpers mentioned below, we also provide type definitions related to the above composition API, such as <code>SiteData</code> and <code>PageData</code>.</p>
<h3 id="clientappsetup"><a class="header-anchor" href="#clientappsetup">#</a> ClientAppSetup</h3>
<ul>
<li>
<p>Details:</p>
<p>Type helper for <RouterLink to="/src/reference/plugin-api.html#clientappsetupfiles">clientAppSetupFiles</RouterLink>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<p>Create <code>clientAppSetup.ts</code> file:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ClientAppSetup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">const</span> clientAppSetup<span class="token operator">:</span> <span class="token function-variable function">ClientAppSetup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> clientAppSetup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="clientappenhance"><a class="header-anchor" href="#clientappenhance">#</a> ClientAppEnhance</h3>
<ul>
<li>
<p>Details:</p>
<p>Type helper for <RouterLink to="/src/reference/plugin-api.html#clientappenhancefiles">clientAppEnhanceFiles</RouterLink>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<p>Create <code>clientAppEnhance.ts</code> file:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ClientAppEnhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/client'</span>

<span class="token keyword">const</span> clientAppEnhance<span class="token operator">:</span> <span class="token function-variable function">ClientAppEnhance</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> clientAppEnhance
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>