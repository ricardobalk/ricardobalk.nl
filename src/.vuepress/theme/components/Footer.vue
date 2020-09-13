<template>
  <footer class="footer" tabindex="0">
    <div class="grid-x">
      <div class="small-12 cell">
        <div class="footer-message">
          <p>
            <i class="show-for-sr">This website was </i>
            Made with
            <font-awesome-icon :icon="['fas', 'heart']" class="icon" title="love" size="sm" />
            , a lot of
            <font-awesome-icon :icon="['fas', 'mug-hot']" class="icon" title="coffee" size="sm" />
            and some
            <font-awesome-icon :icon="['fas', 'code']" class="icon" title="code" size="sm" />
            by Ricardo Balk. Source code available on
            <a :href="links.social.github" target="_blank"
              ><font-awesome-icon :icon="['fab', 'github']" class="icon" title="GitHub" size="sm" />.</a
            >
            <span class="site-links show-for-large">
              <a v-for="(link, index) in links.navigation" :key="index" :href="link.location">{{ link.text }}</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faGithub } from "@fortawesome/free-brands-svg-icons";
  import { faHeart, faMugHot, faCode } from "@fortawesome/free-solid-svg-icons";

  @Component({ name: "Footer", components: { FontAwesomeIcon } })
  export default class Footer extends Vue {
    @Prop({
      required: true,
      default: {
        navigation: [
          { text: "Privacy", location: "/privacy" },
          { text: "About", location: "/about" },
          { text: "Contact", location: "/contact" },
        ],
        social: {
          github: "https://github.com/",
        },
      },
    })
    private links!: Object;

    created() {
      library.add(faGithub, faHeart, faMugHot, faCode);
    }
  }
</script>

<style lang="stylus">
  .footer
    width 100%
    background-color #1e1e1e
    color #eee

    &.home
      @media screen and (prefers-color-scheme dark)
        background-color #002451

    .footer-message
      padding-right 1em
      padding-left 1em
      font-size 0.85em

      p
        margin 1em 0
        color #eee

      a
        color inherit
        font-size inherit

      .site-links
        display block
        float right

        a
          color inherit
          text-align center

          &:not(:last-of-type)
            margin-right 0.75em

      svg
        margin 0 0.2em

      span:not(:last-of-type):after
        margin 0 0.25em 0 0.5em
        content '\2022'
        font-size 0.75em
        line-height 0.95em
</style>
