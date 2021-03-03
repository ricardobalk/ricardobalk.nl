<template>
  <div class="global-layout" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Navbar @toggle-sidebar="toggleSidebar" />

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" #top />
      <slot name="sidebar-bottom" #bottom />
    </Sidebar>

    <component :is="layout" />

    <Footer :links="$site.themeConfig.footer.links" :class="this.$frontmatter.home ? 'home' : ''" />
  </div>
</template>

<script lang="js" src="./GlobalLayout.js" />
<style lang="stylus" src="./GlobalLayout.styl" />
