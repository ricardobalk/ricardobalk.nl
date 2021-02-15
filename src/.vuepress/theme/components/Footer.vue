<template>
  <footer class="footer" tabindex="0">
    <div class="grid-x">
      <div class="small-12 cell">
        <div class="footer-message">
          <p>
            <i class="show-for-sr">This website was </i>
            Made with
            <font-awesome-icon :icon="['fas', 'heart']" class="icon" title="love" size="sm" />
            , a lot of
            <font-awesome-icon :icon="['fas', 'mug-hot']" class="icon" title="coffee" size="sm" />
            and some
            <font-awesome-icon :icon="['fas', 'code']" class="icon" title="code" size="sm" />
            by Ricardo Balk. Source code available on
            <a :href="links.social.github" target="_blank"
              ><font-awesome-icon :icon="['fab', 'github']" class="icon" title="GitHub" size="sm" />.</a
            >
            <span class="site-links show-for-large">
              <a v-for="(link, index) in links.navigation" :key="index" :href="link.location">{{ link.text }}</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" src="./Footer.ts" />
<style lang="stylus" src="./Footer.styl" />
