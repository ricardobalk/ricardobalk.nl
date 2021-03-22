<template><h1 id="pwa"><a class="header-anchor" href="#pwa">#</a> pwa</h1>
<blockquote>
<p>@vuepress/plugin-pwa</p>
</blockquote>
<p>Make your VuePress site a <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">Progressive Web Application (PWA)<OutboundLink/></a>.</p>
<p>This plugin uses <a href="https://developers.google.com/web/tools/workbox/modules/workbox-build" target="_blank" rel="noopener noreferrer">workbox-build<OutboundLink/></a> to generate service worker file, and uses <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker<OutboundLink/></a> to register service worker.</p>
<h2 id="web-app-manifests"><a class="header-anchor" href="#web-app-manifests">#</a> Web App Manifests</h2>
<p>To make your website fully compliant with PWA, you need to create a <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">Web app manifests<OutboundLink/></a> file and set the icons, colors, etc. for your PWA.</p>
<p>You need to put your manifest file and icons into the <RouterLink to="/src/guide/assets.html#public-files">public files directory</RouterLink>. In the following example, we assume that you are using the default public directory <code>.vuepress/public</code>.</p>
<ol>
<li>Create manifest file</li>
</ol>
<p>Typically <code>.vuepress/public/manifest.webmanifest</code>:</p>
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
<li>Generate PWA icons</li>
</ol>
<p>To make your PWA more accessible, you need to generate some icons, and put them inside the public directory.</p>
<p>Make sure the path of icons matches the <code>icons</code> field in your manifest file:</p>
<ul>
<li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li>
<li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Some tools can help to do that. For example, <a href="https://realfavicongenerator.net/" target="_blank" rel="noopener noreferrer">Favicon Generator<OutboundLink/></a> would help you to generate icons together with a sample manifest file.</p>
</div>
<ol start="3">
<li>Set tags in head</li>
</ol>
<p>You also need to set some tags via <RouterLink to="/src/reference/config.html#head">head</RouterLink> option to <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag" target="_blank" rel="noopener noreferrer">deploy the manifest<OutboundLink/></a>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">'manifest'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">'/manifest.webmanifest'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'meta'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'theme-color'</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">'#3eaf7c'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// ...other tags</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<p>This plugin accepts all parameters of workbox-build's <a href="https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW" target="_blank" rel="noopener noreferrer">generateSW method<OutboundLink/></a> in its options, except <code>globDirectory</code> and <code>swDest</code>.</p>
<p>For example, you can set <code>skipWaiting: true</code> to auto activate the new service worker once it is ready:</p>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>But if you omit <code>skipWaiting</code> or set it to <code>false</code>, you have to activate the new service worker manually:</p>
<ul>
<li>For users, you can use our <RouterLink to="/src/reference/plugin/pwa-popup.html">pwa-popup</RouterLink> plugin together.</li>
<li>For developers, you can use our <a href="#composition-api">composition API</a> to take control of the service worker behavior.</li>
</ul>
<h3 id="serviceworkerfilename"><a class="header-anchor" href="#serviceworkerfilename">#</a> serviceWorkerFilename</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Default: <code>'service-worker.js'</code></p>
</li>
<li>
<p>Details:</p>
<p>File path of the generated service worker file, which is relative to the <RouterLink to="/src/reference/config.html#dest">dest</RouterLink> directory.</p>
<p>The service worker file will only be generated in <code>build</code> mode.</p>
</li>
</ul>
<h2 id="composition-api"><a class="header-anchor" href="#composition-api">#</a> Composition API</h2>
<h3 id="usepwaevent"><a class="header-anchor" href="#usepwaevent">#</a> usePwaEvent</h3>
<ul>
<li>
<p>Details:</p>
<p>Returns the event emitter of this plugin.</p>
<p>You can add listener function to events that provided by <a href="https://github.com/yyx990803/register-service-worker" target="_blank" rel="noopener noreferrer">register-service-worker<OutboundLink/></a>.</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> usePwaEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/plugin-pwa/lib/composables'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token function">usePwaEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>registration<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Service worker is active.'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="useskipwaiting"><a class="header-anchor" href="#useskipwaiting">#</a> useSkipWaiting</h3>
<ul>
<li>Parameters:</li>
</ul>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>registration</td>
<td><code>ServiceWorkerRegistration</code></td>
<td>The registration of the service worker you want activate</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Details:</p>
<p>Call <a href="https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting" target="_blank" rel="noopener noreferrer">skipWaiting()<OutboundLink/></a> to activate the waiting service worker.</p>
</li>
<li>
<p>Example:</p>
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
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'The waiting service worker is available.'</span><span class="token punctuation">)</span>
      <span class="token comment">// activate the waiting service worker</span>
      <span class="token function">useSkipWaiting</span><span class="token punctuation">(</span>registration<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>