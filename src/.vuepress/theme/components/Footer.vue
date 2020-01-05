<template>
  <footer class="footer" tabindex="0">
    <div class="grid-x">
      <div class="small-12 cell">
        <div class="footer-message">
          <p>
            <i class="show-for-sr">This website was </i>
            Made with
            <font-awesome-icon :icon="['fas', 'heart']" class="icon" title="love" />
            , a lot of
            <font-awesome-icon :icon="['fas', 'mug-hot']" class="icon" title="coffee" />
            and some
            <font-awesome-icon :icon="['fas', 'code']" class="icon" title="code" />
            by Ricardo Balk. Design available on
            <a :href="links.social.behance" target="_blank"
              ><font-awesome-icon :icon="['fab', 'behance']" class="icon" title="Behance" />.</a
            >
            Source code available on
            <a :href="links.social.github" target="_blank"
              ><font-awesome-icon :icon="['fab', 'github']" class="icon" title="GitHub" />.</a
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

<script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { fas } from "@fortawesome/free-solid-svg-icons";
  import { fab } from "@fortawesome/free-brands-svg-icons";

  export default {
    name: "Footer",
    components: { library, fas, fab, FontAwesomeIcon },
    props: {
      links: {
        type: Object,
        required: false,
        default() {
          return {
            navigation: [
              { text: "Privacy", location: "/privacy" },
              { text: "About", location: "/about" },
              { text: "Contact", location: "/contact" },
            ],
            social: {
              behance: "https://behance.net/",
              github: "https://github.com/",
            },
          };
        },
      },
    },
    created() {
      library.add(fab);
      library.add(fas);
    },
  };
</script>

<style lang="scss">
  // Standard
  .footer {
    color: #eee;
    background-color: #1e1e1e;
    width: 100%;

    .footer-message {
      font-size: 0.85em;
      padding-left: 1em;
      padding-right: 1em;

      p {
        color: #eee;
        margin: 1em 0;
      }

      a {
        color: inherit;
        font-size: inherit;
      }

      .site-links {
        display: block;
        float: right;
        a {
          color: inherit;
          text-align: center;

          &:not(:last-of-type) {
            margin-right: 0.75em;
          }
        }
      }

      svg {
        margin: 0 0.2em;
      }

      span:not(:last-of-type):after {
        font-size: 0.75em;
        line-height: 0.95em;
        content: "\2022";
        margin: 0 0.25em 0 0.5em;
      }
    }
  }

  // Dark
  @media screen and (prefers-color-scheme: dark) {
    .footer.home {
      background-color: #002451;
    }
  }
</style>
