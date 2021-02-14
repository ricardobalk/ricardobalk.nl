<template>
  <section class="about" title="Information about Ricardo" tabindex="0">
    <div class="grid-x">
      <div class="small-12 medium-offset-1 medium-10 large-offset-2 large-8 cell inner-container">
        <div class="grid-x">
          <div class="small-offset-1 small-10 medium-offset-0 medium-6 cell picture">
            <Polaroid :caption="polaroidImage.caption" :image="polaroidImage.path" />
          </div>

          <div class="small-12 medium-6 cell text-container">
            <slot>
              <h1>Uh oh!</h1>
              <p>
                You didn't fill in this slot, so I'm showing some example paragraphs instead.
              </p>
              <p>
                Sed nibh libero, scelerisque quis viverra in, egestas id magna. Etiam vel dolor vel mauris fringilla
                molestie sodales vitae metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Mauris et efficitur elit.
              </p>
              <p>
                Phasellus malesuada metus porttitor rutrum convallis. Donec convallis tellus felis, nec commodo erat
                lacinia vitae.
              </p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import Polaroid from "./Polaroid.vue";

  interface polaroidImageData extends Object {
    path: string;
    caption: string;
  }

  @Component({ name: "About", components: { Polaroid } })
  export default class About extends Vue {
    @Prop({
      required: true,
      default: { path: "https://placehold.it/500x500", caption: "You might have forgotten to add an image." },
    })
    private polaroidImage!: polaroidImageData;
  }
</script>

<style lang="stylus">
  .about
    outline 0
    color #333 // TODO: Check usage
    position relative
    margin -4em 0 4em
    @media screen and (prefers-color-scheme dark)
      color $textColorDarkmode // TODO: Same

    .inner-container
      max-width 920px
      margin 0 auto

    .picture
      padding 0 2em

      .polaroid-container
        .caption
          text-transform uppercase
          font-weight 500
          font-size 1.2em
        @media screen and (prefers-color-scheme dark)
          background-color unset
          box-shadow none
          border 2px solid #112


    .text-container
      margin-top 5em
      padding 0 2em
      @media screen and (min-width 640px)
        margin-top 6em


      h1
        text-transform uppercase
        font-size 2.2em
        font-weight 600
        margin 0

    .grid-x:not(:first-of-type)
      margin-top 2em
</style>
