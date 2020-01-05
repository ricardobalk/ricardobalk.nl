<template>
  <section class="product-and-process" title="" tabindex="0">
    <div class="maxed">
      <div class="grid-x">
        <div class="show-for-large large-6 cell picture">
          <img :src="image.path" :alt="image.description" />
        </div>
        <div class="small-12 medium-12 large-6 cell">
          <div class="text-container">
            <h2 class="section-title">{{ title }}</h2>
            <span class="design-process">{{ subtitle }}</span>
            <p v-for="(paragraph, index) in text" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ProductAndProcess",
    props: {
      title: {
        type: String,
        required: true,
        default() {
          return "You forgot to add a title here\nPlease add a title.";
        },
      },
      subtitle: {
        type: String,
        required: true,
        default() {
          return "You forgot to add the subtitle here. Please add a subtitle.";
        },
      },
      text: {
        type: Array,
        required: true,
        default() {
          return [
            "You forgot to add some text, it can be added via props",
            "Please take a look in the Vue component to see which props and types are expected.",
          ];
        },
      },
      image: {
        type: Object,
        required: true,
        default() {
          return {
            path: "https://placehold.it/1920x1080",
            description: "An example image.",
          };
        },
      },
    },
  };
</script>

<style lang="scss">
  // Standard
  .product-and-process {
    background-color: var(--splitter-background-color);
    background-image: linear-gradient(to right, #979797, #171717), url("/assets/img/winder-bl.svg");
    background-blend-mode: soft-light, normal;
    background-repeat: no-repeat;
    background-size: cover, contain;
    background-position: left top, left bottom -5px;

    margin: 6em 0 0;
    padding: 3em 0;

    .picture {
      position: relative;
      top: 1em;
      img {
        display: block;
        margin: 0 auto;
        padding-left: 1em;
      }
    }

    .text-container {
      position: relative;
      right: 1em;
      color: var(--color-light-grey);
      padding: 0 2em;
      margin-bottom: 3em;
      .section-title {
        text-transform: uppercase;
        font-size: 2.6em;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 1.3;
        margin-bottom: 0;
        @media screen and (max-width: 640px) {
          font-size: 2em;
        }
      }
      .design-process {
        display: block;
        font-size: 0.85em;
        font-weight: 700;
        margin: 1em 0;
      }

      h1,
      h2,
      h3,
      p {
        color: inherit;
      }
    }
  }

  // Dark
  @media screen and (prefers-color-scheme: dark) {
    .product-and-process {
      background-image: none !important;
      background-color: unset !important;

      .picture {
        filter: brightness(60%) contrast(110%);
      }

      .section-title {
        color: #bcbcbc;
      }

      .text-container {
        color: #bcbcbc;
      }
    }
  }
</style>
