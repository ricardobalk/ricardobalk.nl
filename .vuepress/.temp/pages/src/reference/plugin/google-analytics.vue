<template><h1 id="google-analytics"><a class="header-anchor" href="#google-analytics">#</a> google-analytics</h1>
<blockquote>
<p>@vuepress/plugin-google-analytics</p>
</blockquote>
<p>Integrate <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics<OutboundLink/></a> into VuePress.</p>
<p>This plugin will import <a href="https://developers.google.com/analytics/devguides/collection/gtagjs" target="_blank" rel="noopener noreferrer">gtag.js<OutboundLink/></a> for <a href="https://support.google.com/analytics/answer/10089681" target="_blank" rel="noopener noreferrer">Google Analytics 4<OutboundLink/></a>.</p>
<h2 id="reporting-events"><a class="header-anchor" href="#reporting-events">#</a> Reporting Events</h2>
<p>Google Analytics will <a href="https://support.google.com/analytics/answer/9234069" target="_blank" rel="noopener noreferrer">automatically collect some events<OutboundLink/></a>, such as <code>page_view</code>, <code>first_visit</code>, etc.</p>
<p>So if you only want to collect some basic data of your site, you don't need to do anything else except setting the <a href="#id">Measurement ID</a> correctly.</p>
<p>After using this plugin, the global <code>gtag()</code> function is available on the <code>window</code> object, and you can use it for <a href="https://developers.google.com/analytics/devguides/collection/ga4/events" target="_blank" rel="noopener noreferrer">custom events reporting<OutboundLink/></a>.</p>
<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2>
<h3 id="id"><a class="header-anchor" href="#id">#</a> id</h3>
<ul>
<li>
<p>Type: <code>string</code></p>
</li>
<li>
<p>Details:</p>
<p>The Measurement ID of Google Analytics 4, which should start with <code>'G-'</code>.</p>
<p>You can follow the instructions <a href="https://support.google.com/analytics/answer/9539598" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a> to find your Measurement ID. Notice the difference between Google Analytics 4 Measurement ID (i.e. &quot;G-&quot; ID) and Universal Analytics Tracking ID (i.e. &quot;UA-&quot; ID).</p>
</li>
<li>
<p>Example:</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'@vuepress/plugin-google-analytics'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">'G-XXXXXXXXXX'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></template>