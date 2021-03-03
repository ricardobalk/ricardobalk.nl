<template>
  <main class="page">
    <slot name="top" />

    <BigHero
      v-if="this.$page.frontmatter.images && this.$page.frontmatter.images.hero"
      :image="`${heroImage}`"
      class="big"
    />

    <div class="content-area">
      <div v-if="pageContributors" class="aside left">
        <div class="keybaseUserCards">
          <KeybaseUserCard v-for="(contributor, id) in pageContributors" :username="contributor" :key="id" />
        </div>
      </div>

      <article class="main-article">
        <Breadcrumbs />
        <Content class="theme-default-content custom content" />
      </article>
    </div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <Disqus />

    <slot name="bottom" />
  </main>
</template>

<script lang="js" src="./Page.js" />
<style lang="stylus" src="./Page.styl" />
