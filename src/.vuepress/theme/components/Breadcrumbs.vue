<template>
  <nav class="breadcrumbs">
    <a v-for="page in breadcrumbs" :href="page.path">{{ page.title }}</a>
  </nav>
</template>

<script lang="js" src="./Breadcrumbs.js" />
<style lang="stylus" src="./Breadcrumbs.styl" />
