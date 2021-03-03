<template>
  <div class="blog-overview-container">
    <BigHero :title="pageTitle" :image="heroImages.regular" :image-dark="heroImages.dark" class="blog-hero" />
    <section class="blog-overview">
      <div class="g-row g-justify-center limited-width">
        <div class="c-sm-offset-1 c-sm-10 c-lg-offset-2 c-lg-8">
          <Articles :posts="posts" :assets="assets" showExcerpts="false" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./BlogOverview.ts" />
<style lang="stylus" src="./BlogOverview.styl" />
