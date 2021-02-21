<template>
  <nav class="breadcrumbs">
    <a v-for="page in breadcrumbs" :href="page.link">{{ page.title }}</a>
  </nav>
</template>

<script lang="ts" src="./Breadcrumbs.ts" />
<style lang="stylus" src="./Breadcrumbs.styl" />
