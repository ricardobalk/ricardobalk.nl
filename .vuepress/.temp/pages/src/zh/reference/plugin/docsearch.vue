<template><h1 id="docsearch"><a class="header-anchor" href="#docsearch">#</a> docsearch</h1>
<blockquote>
<p>@vuepress/plugin-docsearch</p>
</blockquote>
<p>将 <a href="https://docsearch.algolia.com/" target="_blank" rel="noopener noreferrer">Algolia DocSearch<OutboundLink/></a> 集成到 VuePress 中，为你的文档网站提供搜索功能。</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>当你正确配置该插件后，默认主题会把 DocSearch 按钮添加到导航栏。</p>
<p>该插件不一定能在其他主题中直接使用，因此你应参考主题本身的文档来获取更多信息。</p>
</div>
<h2 id="获取搜索索引"><a class="header-anchor" href="#获取搜索索引">#</a> 获取搜索索引</h2>
<p>你需要 <a href="https://docsearch.algolia.com/apply/" target="_blank" rel="noopener noreferrer">提交你的网站 URL<OutboundLink/></a> 来加入 DocSearch 项目。当你的索引成功创建后， DocSearch 团队会将 <a href="#apikey">apiKey</a> 和 <a href="#indexname">indexName</a> 发送到你的邮箱。接下来，你就可以配置该插件，在 VuePress 中启用 DocSearch 了。</p>
<p>或者，你也可以 <a href="https://docsearch.algolia.com/docs/run-your-own/" target="_blank" rel="noopener noreferrer">运行你自己的爬虫<OutboundLink/></a> 来创建索引，然后使用你自己的 <a href="#appId">appId</a>, <a href="#apikey">apiKey</a> 和 <a href="#indexname">indexName</a> 来配置该插件。</p>
<h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<h3 id="apikey"><a class="header-anchor" href="#apikey">#</a> apiKey</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>是否必需： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>从 DocSearch 团队收到的 <code>apiKey</code> ，或者由你自己生成。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://autocomplete-experimental.netlify.app/docs/docsearch-js#apikey" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; apiKey<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h3 id="indexname"><a class="header-anchor" href="#indexname">#</a> indexName</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>是否必需： <code>true</code></p>
</li>
<li>
<p>详情：</p>
<p>从 DocSearch 团队收到的 <code>indexName</code> ，或者由你自己生成。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://autocomplete-experimental.netlify.app/docs/docsearch-js#indexname" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; indexName<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h3 id="appid"><a class="header-anchor" href="#appid">#</a> appId</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>只有在你 <a href="https://docsearch.algolia.com/docs/run-your-own/" target="_blank" rel="noopener noreferrer">运行你自己的 DocSearch 爬虫<OutboundLink/></a> 时，才需要配置该选项。用于设置你的 Application ID 。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://autocomplete-experimental.netlify.app/docs/docsearch-js#appid" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; appId<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h3 id="searchparameters"><a class="header-anchor" href="#searchparameters">#</a> searchParameters</h3>
<ul>
<li>
<p>类型： <code>Record&lt;string, any&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>Algolia API 的 API 参数。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://autocomplete-experimental.netlify.app/docs/docsearch-js#searchparameters" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; searchParameters<OutboundLink/></a></li>
<li><a href="https://www.algolia.com/doc/api-reference/api-parameters/" target="_blank" rel="noopener noreferrer">Algolia &gt; API Parameters<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h3 id="placeholder"><a class="header-anchor" href="#placeholder">#</a> placeholder</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'Search docs'</code></p>
</li>
<li>
<p>详情：</p>
<p>搜索输入框的 placeholder 属性。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://autocomplete-experimental.netlify.app/docs/docsearch-js#placeholder" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; placeholder<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h3 id="disableuserpersonalization"><a class="header-anchor" href="#disableuserpersonalization">#</a> disableUserPersonalization</h3>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>默认值： <code>false</code></p>
</li>
<li>
<p>详情：</p>
<p>是否禁用所有的个性化功能：最近的搜索、收藏的搜索结果等。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://autocomplete-experimental.netlify.app/docs/docsearch-js#disableuserpersonalization" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; disableUserPersonalization<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h3 id="initialquery"><a class="header-anchor" href="#initialquery">#</a> initialQuery</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>详情：</p>
<p>打开弹窗时的初始请求。</p>
</li>
<li>
<p>参考：</p>
<ul>
<li><a href="https://autocomplete-experimental.netlify.app/docs/docsearch-js#initialquery" target="_blank" rel="noopener noreferrer">DocSearch &gt; Options &gt; initialQuery<OutboundLink/></a></li>
</ul>
</li>
</ul>
<h3 id="locales"><a class="header-anchor" href="#locales">#</a> locales</h3>
<ul>
<li>
<p>类型： <code>Record&lt;string, DocsearchPluginOptions&gt;</code></p>
</li>
<li>
<p>详情：</p>
<p>在不同 locales 下对该插件进行不同的配置。</p>
<p>该插件的所有其他选项都可以在 locale 中进行配置。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/docsearch'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        apiKey<span class="token operator">:</span> <span class="token string">'&lt;API_KEY>'</span><span class="token punctuation">,</span>
        indexName<span class="token operator">:</span> <span class="token string">'&lt;INDEX_NAME>'</span><span class="token punctuation">,</span>
        locales<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            placeholder<span class="token operator">:</span> <span class="token string">'Search Documentation'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">'/zh/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            placeholder<span class="token operator">:</span> <span class="token string">'搜索文档'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>参考：
<ul>
<li><RouterLink to="/src/zh/guide/i18n.html">指南 &gt; 多语言支持</RouterLink></li>
</ul>
</li>
</ul>
<h2 id="样式"><a class="header-anchor" href="#样式">#</a> 样式</h2>
<p>你可以通过 <a href="https://autocomplete-experimental.netlify.app/docs/docsearch-css" target="_blank" rel="noopener noreferrer">@docsearch/css<OutboundLink/></a> 提供的 CSS 变量来自定义样式：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--docsearch-primary-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-text-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>28<span class="token punctuation">,</span> 30<span class="token punctuation">,</span> 33<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-spacing</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-icon-stroke-width</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>
  <span class="token property">--docsearch-highlight-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-muted-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>150<span class="token punctuation">,</span> 159<span class="token punctuation">,</span> 175<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-container-background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>101<span class="token punctuation">,</span> 108<span class="token punctuation">,</span> 133<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-logo-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>84<span class="token punctuation">,</span> 104<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* modal */</span>
  <span class="token property">--docsearch-modal-width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>245<span class="token punctuation">,</span> 246<span class="token punctuation">,</span> 247<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-modal-shadow</span><span class="token punctuation">:</span> inset 1px 1px 0 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0 3px 8px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>85<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 100<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* searchbox */</span>
  <span class="token property">--docsearch-searchbox-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-background</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>235<span class="token punctuation">,</span> 237<span class="token punctuation">,</span> 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-focus-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-searchbox-shadow</span><span class="token punctuation">:</span> inset 0 0 0 2px <span class="token function">var</span><span class="token punctuation">(</span>--docsearch-primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* hit */</span>
  <span class="token property">--docsearch-hit-height</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>68<span class="token punctuation">,</span> 73<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-hit-shadow</span><span class="token punctuation">:</span> 0 1px 3px 0 <span class="token function">rgb</span><span class="token punctuation">(</span>212<span class="token punctuation">,</span> 217<span class="token punctuation">,</span> 225<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* key */</span>
  <span class="token property">--docsearch-key-gradient</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>
    -225deg<span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>213<span class="token punctuation">,</span> 219<span class="token punctuation">,</span> 228<span class="token punctuation">)</span> 0%<span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>248<span class="token punctuation">,</span> 248<span class="token punctuation">,</span> 248<span class="token punctuation">)</span> 100%
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--docsearch-key-shadow</span><span class="token punctuation">:</span> inset 0 -2px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>205<span class="token punctuation">,</span> 205<span class="token punctuation">,</span> 230<span class="token punctuation">)</span><span class="token punctuation">,</span>
    inset 0 0 1px 1px #fff<span class="token punctuation">,</span> 0 1px 2px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>30<span class="token punctuation">,</span> 35<span class="token punctuation">,</span> 90<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* footer */</span>
  <span class="token property">--docsearch-footer-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--docsearch-footer-shadow</span><span class="token punctuation">:</span> 0 -1px 0 0 <span class="token function">rgb</span><span class="token punctuation">(</span>224<span class="token punctuation">,</span> 227<span class="token punctuation">,</span> 232<span class="token punctuation">)</span><span class="token punctuation">,</span>
    0 -3px 6px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>69<span class="token punctuation">,</span> 98<span class="token punctuation">,</span> 155<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="组件"><a class="header-anchor" href="#组件">#</a> 组件</h2>
<h3 id="docsearch-1"><a class="header-anchor" href="#docsearch-1">#</a> Docsearch</h3>
<ul>
<li>
<p>详情：</p>
<p>该插件会全局注册一个 <code>&lt;Docsearch /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p>
<p>将该组件放置在你想要显示 docsearch 按钮的地方。例如，默认主题将这个组件放在了导航栏的末尾。</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p>
</div>
</template>