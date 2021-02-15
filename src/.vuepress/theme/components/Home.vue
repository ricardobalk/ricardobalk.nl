<template>
  <main class="home" aria-labelledby="main-title">
    <HomeHero
      :name="frontmatter.heroText[0]"
      :occupation="frontmatter.heroText[1]"
      :tagline="frontmatter.heroText[2]"
    />
    <About :polaroidImage="frontmatter.polaroidImage">
      <Content class="theme-default-content custom" />
    </About>
    <Services :services="frontmatter.services.services || frontmatter.services" :title="frontmatter.services.title" />
    <ProductAndProcess
      :image="frontmatter.process.image"
      :title="frontmatter.process.title"
      :subtitle="frontmatter.process.subtitle"
      :text="frontmatter.process.text"
    />
    <SuccessStories
      :stories="successStories.stories || frontmatter.successStories"
      :title="successStories.title"
      :subtitle="successStories.subtitle"
    />
    <Conclusion :title="nextMove.text[0]" :subtitle="nextMove.text[1]" :connect="nextMove.connect" />
  </main>
</template>

<script lang="ts" src="./Home.ts" />
<style lang="stylus" src="./Home.styl" />
