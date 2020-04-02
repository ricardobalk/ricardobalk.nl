<template>
  <div class="small-12 large-6 cell card">
    <div class="success-story">
      <div class="inner">
        <div class="avatar-container">
          <img :src="story.avatar" :alt="story.name" class="avatar" />
        </div>
        <p class="client">{{ story.name }}</p>
        <p class="position">{{ story.title }}</p>
        <p class="caption">{{ story.story }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SuccessStory",
    props: {
      story: {
        type: Object,
        required: true,
        default() {
          return {
            name: "Story missing",
            title: "Did you set up your binds correctly?",
            story:
              "A bind ensures that data is transferred between components, in this case from 'SuccessStories' to 'SuccessStory'. There might be going something wrong there.",
            avatar: "/assets/img/home/success-stories/empty.png",
          };
        },
      },
    },
  };
</script>

<style lang="stylus">
  .success-story
    text-align center
    .inner
      margin 1em
      padding 2em
      border 1px solid #eee
      background-color #fff
      box-shadow 3px 3px 9px rgba(0, 0, 0, 0.05)

      .avatar-container
        width 100px
        height 100px
        margin 0 auto 1em

        .avatar
          border-radius 50px

  @media screen and (prefers-color-scheme dark)
    .card:not(:last-child)
      border-right 1px solid #111

    .success-story
      .inner
        color #8a8a8a
        border none
        background-color unset
        box-shadow none

        .avatar-container .avatar
          opacity 0.85
</style>
