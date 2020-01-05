<template>
  <section class="conclusion" title="" tabindex="0">
    <div class="maxed">
      <div class="grid-x">
        <div class="small-12 cell">
          <div class="text-container">
            <p class="title">{{ title }}</p>
            <p class="subtitle">{{ subtitle }}</p>
          </div>
          <section class="connect-on-social" title="Ways to contact me">
            <a v-for="contactingMethod in connect" :href="contactingMethod.url" :title="contactingMethod.title"
              ><font-awesome-icon :icon="contactingMethod.icon"
            /></a>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import FancyButton from "../FancyButton";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { fas } from "@fortawesome/free-solid-svg-icons";
  import { fab } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

  export default {
    name: "Conclusion",
    components: { FancyButton, library, fas, fab, FontAwesomeIcon },
    props: {
      title: {
        type: String,
        required: false,
        default() {
          return "It's time for the next move";
        },
      },
      subtitle: {
        type: String,
        required: false,
        default() {
          return "Let's have a talk!";
        },
      },
      connect: {
        type: Array,
        required: false,
        default() {
          return [
            {
              serviceName: "Email",
              title: "Contact me by sending an email",
              icon: ["fas", "envelope"],
              url: "mailto:someone@example.com",
            },
            {
              serviceName: "GitHub",
              title: "My profile on GitHub, a platform for open source software development",
              icon: ["fab", "github"],
              url: "https://github.com/",
            },
            {
              serviceName: "Telephone",
              title: "Contact my by phone",
              icon: ["fas", "phone"],
              url: "tel:+1234",
            },
          ];
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
  .conclusion {
    color: var(--color-light-grey);
    background-color: var(--conclusion-background-color);
    background-image: linear-gradient(to right, #979797, #171717), url("/assets/img/winder-top-left.svg");
    background-blend-mode: soft-light, normal;
    background-repeat: no-repeat;
    background-size: cover, contain;
    background-position: left top, left top -5px;

    margin: 5em 0 0;
    padding: 4em 0;

    .text-container {
      text-align: center;

      .title {
        text-transform: uppercase;
        font-size: 1.45em;
        font-weight: 900;
        margin-bottom: 0;
        line-height: 1em;
        margin-top: 1em;
      }

      .subtitle {
        font-family: var(--font-family-primary-headings);
        text-transform: uppercase;
        font-size: 3em;
        margin: 0.1em 0 0.25em;
      }
    }

    .connect-on-social {
      text-align: center;
      font-size: 2em;
      a {
        padding: 0 0.5em;
        color: rgba(255, 255, 255, 0.6);
        &:hover {
          color: #fff;
          cursor: pointer;
          @media screen and (prefers-color-scheme: dark) {
            color: #d9d677;
          }
        }
      }
    }

    h1,
    h2,
    h3,
    p {
      color: inherit;
    }
  }

  // Dark
  @media screen and (prefers-color-scheme: dark) {
    .conclusion {
      color: #bdbdbd;
      background-color: #000;
      background-image: linear-gradient(to bottom, #000, #002451);
      background-blend-mode: unset;
      padding: 0 0 6em;
      margin: 0;
    }
  }
</style>
