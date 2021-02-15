<template>
  <aside class="sidebar">
    <NavLinks />
    <slot name="top" />
    <SidebarLinks :depth="0" :items="items" />
    <slot name="bottom" />
  </aside>
</template>

<script lang="js" src="./Sidebar.js" />
<style lang="stylus" src="./Sidebar.styl" />
