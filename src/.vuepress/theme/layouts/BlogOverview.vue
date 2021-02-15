<template>
  <div class="blog-overview-container">
    <BigHero :title="pageTitle" :image="heroImages.regular" :image-dark="heroImages.dark" class="blog-hero" />
    <section class="blog-overview">
      <div class="grid-x limited-width">
        <div class="small-offset-1 small-10 large-offset-2 large-8 cell">
          <Articles :posts="posts" :assets="assets" showExcerpts="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./BlogOverview.ts" />
<style lang="stylus" src="./BlogOverview.styl" />
