<template>
  <div class="theme-container">
    <Home v-if="$page.frontmatter.home" />
    <Page v-else :sidebar-items="sidebarItems">
      <slot name="page-top" #top />
      <slot name="page-bottom" #bottom />
    </Page>
  </div>
</template>

<script lang="js" src="./Layout.js" />
