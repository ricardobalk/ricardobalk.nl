<template><h1 id="tor-address-for-my-website"><a class="header-anchor" href="#tor-address-for-my-website">#</a> Tor address for my website</h1>
<p>I am running my site on a Tor Hidden Service, commonly called the 'dark web'. Most people know Tor as software for illegal online activities. But instead of using Tor for illegal activities — it also has legitimate purposes. I am running this website on it, for those people who prefer a high level of privacy.</p>
<p><strong>My Tor address: <a href="http://http://3rfoq3ia75hnxgpmtwyeyvbjbhym354tcy4ox2jaqjqhtcmd4i2mt2id.onion/" title="My website on Tor">3rfoq3ia75hnxgpmtwyeyvbjbhym354tcy4ox2jaqjqhtcmd4i2mt2id.onion</a>.</strong> You might want to add this address to your bookmarks.</p>
<p>Although I <strong>never</strong> keep access logs on my webserver, I can't prove it. Hosting a Tor Hidden Service guarantees that incoming and outgoing traffic is encrypted and anonymized. The IP addresses of both ends (server and visitor) stay unknown to each other. This guarantees that I won't keep access logs, as the information is not even available to me.</p>
<blockquote>
<p>Note: I keep error logs on my server for non 4xx-status codes — e.g. when something went wrong internally.</p>
</blockquote>
<hr>
<h2 id="how-to-run-your-own-tor-hidden-service"><a class="header-anchor" href="#how-to-run-your-own-tor-hidden-service">#</a> How to run your own Tor Hidden Service</h2>
<p>You might want to provide access to your website via Tor too.</p>
<p>If you're familiar with administring servers — it's quite easy to create a Tor Hidden Service.</p>
<h3 id="step-1-run-a-local-server"><a class="header-anchor" href="#step-1-run-a-local-server">#</a> Step 1: Run a local server</h3>
<p>You should run a local server that...</p>
<ul>
<li>Is fairly secure: Requests from your Tor Hidden Service are handled as if they come from <em>localhost</em>, so be sure that you gave the local server appropiate security measures)</li>
<li>Accepts HTTP requests (<strong>not HTTPS</strong>): It's recommended to listen for <code>localhost</code> connections only on a different port (e.g. <code>8081</code>). Also, Onion Routing is end-to-end encrypted, so you won't need an SSL certificate.</li>
</ul>
<blockquote>
<p>Note: Instead of an HTTP server, you could also use other types of servers, as long as they use TCP connections (e.g. SSH) — and you could also choose between creating one .onion address per server application or providing multiple local server applications from a single .onion address. It's quite flexible.</p>
</blockquote>
<h3 id="step-2-install-tor"><a class="header-anchor" href="#step-2-install-tor">#</a> Step 2: Install Tor</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> tor
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="step-3-edit-configuration"><a class="header-anchor" href="#step-3-edit-configuration">#</a> Step 3: Edit configuration</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/torrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Add the following lines:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SOCKSPort 0

## Website
HiddenServiceDir /var/lib/tor/website_hidden_service/
HiddenServicePort 80 127.0.0.1:8081
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>Note: <code>SOCKSPort 0</code> disables local proxy, as you won't need this when hosting a hidden service only.</p>
</blockquote>
<p>Save with Control-X, and Y.</p>
<h3 id="step-4-enable-service"><a class="header-anchor" href="#step-4-enable-service">#</a> Step 4: Enable service</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> tor@
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="step-5-run-hidden-service"><a class="header-anchor" href="#step-5-run-hidden-service">#</a> Step 5: Run hidden service</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> tor start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="step-6-retrieve-onion-address"><a class="header-anchor" href="#step-6-retrieve-onion-address">#</a> Step 6: Retrieve .onion address</h3>
<p>To retrieve your <code>.onion</code>-address, read it from the file <code>hostname</code> in <code>/var/lib/tor/website_hidden_service/</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">cat</span> /var/lib/tor/website_hidden_service/hostname
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Now visit the address and you're ready! It really is that easy.</p>
<blockquote>
<p>Note: It could be that you have to fix a few things, e.g. disabling the <code>Content-Security-Policy: upgrade-insecure-requests</code> header on the server that listens on port <code>8081</code>, etc.</p>
</blockquote>
</template>