<template>
  <main class="blog">
    <Hero :title="pageTitle" :image="heroImages.regular" :image-dark="heroImages.dark" class="blog-hero" />
    <section class="blog-overview">
      <div class="g-row g-justify-center">
        <div class="c-sm-offset-1 c-sm-10 c-lg-offset-2 c-lg-8">
          <Breadcrumbs />
          <CategoryFilter :availableCategories="availableCategories" />
          <Articles :posts="posts" :showExcerpts="false" />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" src="./Blog.ts" />
<style lang="stylus" src="./Blog.styl" />