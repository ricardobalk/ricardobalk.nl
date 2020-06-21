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

<script lang="ts">
  import { Vue, Component } from "vue-property-decorator";
  import NavLink from "@theme/components/NavLink.vue";
  import HomeHero from "@theme/components/Home/Hero.vue";
  import About from "@theme/components/Home/About.vue";
  import Services from "@theme/components/Home/Services.vue";
  import ProductAndProcess from "@theme/components/Home/ProductAndProcess.vue";
  import SuccessStories from "@theme/components/Home/SuccessStories.vue";
  import Conclusion from "@theme/components/Home/Conclusion.vue";

  @Component({ components: { HomeHero, About, Services, ProductAndProcess, SuccessStories, Conclusion, NavLink } })
  export default class Home extends Vue {
    get frontmatter() {
      return this.$frontmatter;
    }

    get services(): Object {
      return this.frontmatter.services;
    }

    get process(): Object {
      return this.frontmatter.process;
    }

    get successStories(): Object {
      return this.frontmatter.successStories;
    }

    get nextMove(): Object {
      return this.frontmatter.nextMove;
    }
  }
</script>

<style lang="stylus">
  @import "~@theme/styles/global/variables";

  .maxed
    max-width 1600px
    margin 0 auto

  .content-padding
    padding-left 1em
    padding-right 1em

  .hero
    margin-top 3.6rem
    @media screen and (max-width: 639px)
      margin-bottom 2rem

    @media screen and (prefers-color-scheme: dark)
      margin-top unset
</style>
