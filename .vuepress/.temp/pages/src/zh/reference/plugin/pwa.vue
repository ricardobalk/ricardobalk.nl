<template><h1 id="pwa"><a class="header-anchor" href="#pwa">#</a> pwa</h1>
<blockquote>
<p>@vuepress/plugin-pwa</p>
</blockquote>
<p>使你的 VuePress 站点成为一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">渐进式 Web 应用 (PWA)<OutboundLink/></a>.</p>
<p>该插件使用 <a href="https://developers.google.com/web/tools/workbox/modules/workbox-build" target="_blank" rel="noopener noreferrer">workbox-build<OutboundLink/></a> 来生成 Service Worker 文件，并通过 <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker<OutboundLink/></a> 来注册 Service Worker 。</p>
<h2 id="web-app-manifests"><a class="header-anchor" href="#web-app-manifests">#</a> Web App Manifests</h2>
<p>为了使你的网站符合 PWA 的要求，你需要创建一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">Web app manifests<OutboundLink/></a> 文件，并且为你的 PWA 设置图标、颜色等信息。</p>
<p>你需要将你的 Manifest 文件和图标放置在 <RouterLink to="/src/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6">Public 目录</RouterLink> 下。在下述的示例中，我们假设你正在使用默认的 Public 目录 <code>.vuepress/public</code> 。</p>
<ol>
<li>创建 Manifest 文件</li>
</ol>
<p>通常是 <code>.vuepress/public/manifest.webmanifest</code> ：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"VuePress"</span><span class="token punctuation">,</span>
  <span class="token property">"short_name"</span><span class="token operator">:</span> <span class="token string">"VuePress"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"Vue-powered Static Site Generator"</span><span class="token punctuation">,</span>
  <span class="token property">"start_url"</span><span class="token operator">:</span> <span class="token string">"/index.html"</span><span class="token punctuation">,</span>
  <span class="token property">"display"</span><span class="token operator">:</span> <span class="token string">"standalone"</span><span class="token punctuation">,</span>
  <span class="token property">"background_color"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>
  <span class="token property">"theme_color"</span><span class="token operator">:</span> <span class="token string">"#3eaf7c"</span><span class="token punctuation">,</span>
  <span class="token property">"icons"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"/images/icons/android-chrome-192x192.png"</span><span class="token punctuation">,</span>
      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"192x192"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"/images/icons/android-chrome-384x384.png"</span><span class="token punctuation">,</span>
      <span class="token property">"sizes"</span><span class="token operator">:</span> <span class="token string">"384x384"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"image/png"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="2">
<li>生成 PWA 图标</li>
</ol>
<p>为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public 目录下。</p>
<p>确保图标的路径匹配 Manifest 文件中的 <code>icons</code> 字段：</p>
<ul>
<li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li>
<li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>一些工具可以帮助你做这些事。比如 <a href="https://realfavicongenerator.net/" target="_blank" rel="noopener noreferrer">Favicon Generator<OutboundLink/></a> 可以帮助你生成图片以及一个 Manifest 文件样例。</p>
</div>
<ol start="3">
<li>设置 Head 中的标签</li>
</ol>
<p>你还需要通过 <RouterLink to="/src/zh/reference/config.html#head">head</RouterLink> 配置项来设置一些标签，用来 <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag" target="_blank" rel="noopener noreferrer">部署你的 Manifest 文件<OutboundLink/></a> 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">'manifest'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">'/manifest.webmanifest'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'meta'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'theme-color'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'#3eaf7c'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// ...其他标签</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="配置项"><a class="header-anchor" href="#配置项">#</a> 配置项</h2>
<p>该插件的配置项可以接收 workbox-build 中 <a href="https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW" target="_blank" rel="noopener noreferrer">generateSW 方法<OutboundLink/></a> 除了 <code>globDirectory</code> 和 <code>swDest</code> 以外的所有参数。</p>
<p>比如，你可以设置 <code>skipWaiting: true</code> ，这将在新的 Service Worker 就绪之后立即激活它：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/pwa'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        skipWaiting<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>但是如果你不设置 <code>skipWaiting</code> 或设置为 <code>false</code> ，你就需要手动激活新的 Service Worker 。</p>
<ul>
<li>对于用户，你可以配合我们提供的 <RouterLink to="/src/zh/reference/plugin/pwa-popup.html">pwa-popup</RouterLink> 插件一起使用。</li>
<li>对于开发者，你可以使用该插件提供的 <a href="#composition-api">Composition API</a> 来控制 Service Worker 的行为。</li>
</ul>
<h3 id="serviceworkerfilename"><a class="header-anchor" href="#serviceworkerfilename">#</a> serviceWorkerFilename</h3>
<ul>
<li>
<p>类型： <code>string</code></p>
</li>
<li>
<p>默认值： <code>'service-worker.js'</code></p>
</li>
<li>
<p>详情：</p>
<p>生成的 Service Worker 文件路径，该路径是 <RouterLink to="/src/zh/reference/config.html#dest">dest</RouterLink> 目录的相对路径。</p>
<p>Service Worker 文件只会在 <code>build</code> 模式下生成。</p>
</li>
</ul>
<h2 id="composition-api"><a class="header-anchor" href="#composition-api">#</a> Composition API</h2>
<h3 id="usepwaevent"><a class="header-anchor" href="#usepwaevent">#</a> usePwaEvent</h3>
<ul>
<li>
<p>详情：</p>
<p>返回该插件的 Event Emitter 。</p>
<p>你可以为 <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker<OutboundLink/></a> 提供的事件添加事件监听器。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePwaEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/lib/composables'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service worker 已经生效。'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="useskipwaiting"><a class="header-anchor" href="#useskipwaiting">#</a> useSkipWaiting</h3>
<ul>
<li>参数：</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>registration</td>
<td><code>ServiceWorkerRegistration</code></td>
<td>你想要激活的 Service Worker 的 Registration</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>详情：</p>
<p>调用 <a href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting" target="_blank" rel="noopener noreferrer">skipWaiting()<OutboundLink/></a> 来激活处于 Waiting 状态的 Service Worker 。</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  usePwaEvent<span class="token punctuation">,</span>
  useSkipWaiting<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/lib/composables'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在 Waiting 状态的 Service Worker 已经就绪。'</span><span class="token punctuation">)</span>
      <span class="token comment">// 激活 Waiting 状态的 Service Worker</span>
      <span class="token function">useSkipWaiting</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>