<template>
  <section class="success-stories" :title="title" tabindex="0">
    <div class="grid-x">
      <div class="small-12 cell text-container text-center">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <div class="grid-x">
          <SuccessStory v-for="(story, index) in stories" :key="index" :story="story" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SuccessStory from "./SuccessStory";

  export default {
    name: "SuccessStories",
    components: { SuccessStory },
    props: {
      title: {
        type: String,
        required: false,
        default() {
          return "Success Stories";
        },
      },
      subtitle: {
        type: String,
        required: false,
        default() {
          return "What others say about my work";
        },
      },
      stories: {
        type: Array,
        required: true,
        default() {
          return [
            {
              name: "John Doe",
              title: "Example person",
              story: "You might have forgotten to add stories.",
              avatar: "/assets/img/home/success-stories/empty.png",
            },
            {
              name: "John Travolta",
              title: "Example person",
              story: "Stories can be added from the index file (in Markdown).",
              avatar: "/assets/img/home/success-stories/empty.png",
            },
            {
              name: "Johnny Cash",
              title: "Example person",
              story: "The front-matter is the right place to add them.",
              avatar: "/assets/img/home/success-stories/empty.png",
            },
          ];
        },
      },
    },
  };
</script>

<style lang="scss">
  // Standard
  .success-stories {
    margin: 12em auto;
    padding: 0 2em;
    max-width: 1600px;

    .card {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-flow: row wrap;
    }

    .title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 2em;
    }

    h2 {
      font-family: var(--font-family-primary);
      margin-bottom: 3em;
      font-weight: 400;
    }

    .success-story {
      display: flex;
      text-align: center;
      justify-self: stretch;

      p {
        margin: 0;
      }

      .client {
        font-size: 1.15em;
        margin-bottom: 0.5em;
      }

      .position {
        font-size: 0.85em;
        font-weight: 600;
        color: #666;
        margin-bottom: 1em;
      }

      .caption {
        font-size: 0.9em;
      }
    }
  }

  // Dark
  @media screen and (prefers-color-scheme: dark) {
    .success-stories {
      .card:not(:last-child) {
        border-right: 1px solid #111;
      }

      .success-story {
        .inner {
          .avatar-container .avatar {
            opacity: 0.85;
          }

          color: #8a8a8a;
          border: none;
          background-color: unset;
          box-shadow: none;
        }
      }
    }
  }
</style>
