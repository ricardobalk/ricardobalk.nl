<template>
  <header class="navbar">
    <router-link :to="$localePath" class="home-link">
      <template v-if="$withBase($site.themeConfig.logo).indexOf('svg') !== -1">
        <inline-svg
          v-if="$site.themeConfig.logo"
          class="site-logo can-hide"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
          @transformSource="transformSvg()"
          fill="black"
        />
      </template>

      <template v-else>
        <img
          class="site-logo can-hide"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
      /></template>
    </router-link>

    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <span ref="siteName" class="site-name" v-if="$siteTitle" :class="{ 'can-hide': $site.themeConfig.logo }">{{
      $siteTitle
    }}</span>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <NavLinks class="can-hide" />
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    </div>
  </header>
</template>

<script lang="js" src="./Navbar.js" />
<style lang="stylus" src="./Navbar.styl" />
