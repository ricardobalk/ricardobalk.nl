<template>
  <nav class="breadcrumbs">
    <a v-for="(page, index) in breadcrumbs" :href="page.link" :key="index">{{ page.title }}</a>
  </nav>
</template>

<script lang="ts" src="./Breadcrumbs.ts" />
<style lang="stylus" src="./Breadcrumbs.styl" />