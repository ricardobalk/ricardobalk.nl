<template>
  <section tabindex="0" :style="style" class="big-hero" :class="{ hasimage: hasImage }">
    <div class="grid-x valign-center">
      <div class="small-12 cell text-container text-center">
        <h1 class="title" v-if="title">{{ title }}</h1>
        <h2 class="subtitle" v-if="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Hero",
    props: ["title", "subtitle", "image", "imageDark"],
    computed: {
      hasImage() {
        return !!this.image;
      },
      style() {
        return `${this.image ? ' --image: url("' + this.image + ";" : "/assets/img/hero.svg" + '");'} ${
          this.imageDark ? ' --image-dark: url("' + this.imageDark + '");' : ' --image-dark: url("' + this.image + '");'
        }`;
        // TODO: Refactor this.
      },
    },
  };
</script>

<style lang="stylus">
  $contact-bar-height = 25px
  $navigation-bar-height = 75px
  $site-header-height = $contact-bar-height + $navigation-bar-height
  $hero-height = calc(66vh - $site-header-height)
  $hero-height-on-overview-pages = "calc(50vh - %s)" % $site-header-height

  .big-hero
    font-family "Source Sans Pro", Helvetica, Arial, sans-serif
    height 25vh
    margin-bottom 5em

    color #fff
    text-shadow 1px 1px 5px rgba(150, 150, 150, 0.33)
    outline 0

    background-image var(--image)
    background-repeat no-repeat
    background-size cover
    background-position bottom

    @media screen and (max-width: 640px)
      height "calc(30vh - %s)" % $site-header-height

    @media screen and (prefers-color-scheme: dark)
      background-color #393939 !important
      background-image var(--image-dark)
      background-blend-mode overlay

      .text-container
        .title,
        .subtitle
          color #eee

    .text-container
      padding 0 1em

      .title
        color #fff

      h1,
      h2,
      h3
        font-family inherit
        text-transform uppercase
        text-shadow 0 0 0.05em rgba(0, 0, 0, 0.25)

      h1
        font-size 2.25em
        font-weight 700
        margin-bottom 0
        @media screen and (max-width: 640px)
          font-size 1.5em
          margin-bottom 0.25em

      h2
        font-size 2.5em
        font-weight 700
        margin-bottom 0.25em
        @media screen and (max-width: 640px)
          font-size 1.5em
          margin-bottom 0.5em

      h3
        font-size 0.95em
        font-weight 700
        text-transform uppercase
        @media screen and (max-width: 640px)
          font-size 0.95em
          &.hasimage,
          &.hasimage img
            max-height 33vh
</style>
