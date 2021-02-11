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
              ><font-awesome-icon :icon="contactingMethod.icon" size="lg"
            /></a>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Prop } from "vue-property-decorator";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { fas } from "@fortawesome/free-solid-svg-icons";
  import { fab } from "@fortawesome/free-brands-svg-icons";

  export interface WebService extends Object {
    serviceName: string; // "Example.com, an example website"
    title: string; // "An example profile on example.com"
    icon: Array<string>; // ["fas", "envelope"]
    url: string; // "https://example.com"
  }

  @Component({ name: "Conclusion", components: { fab, fas, FontAwesomeIcon } })
  export default class Conclusion extends Vue {
    created() {
      library.add(fab); // TODO: Only add required icons to the library
      library.add(fas);
    }

    @Prop({ required: false, default: "It's time for the next move" }) private title!: string;
    @Prop({ required: false, default: "Let's have a talk!" }) private subtitle!: string;
    @Prop({
      required: true,
      default: [
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
      ],
    })
    private connect!: Array<WebService>; // TODO: Rename this variable (check usage!), it is unclear
  }
</script>

<style lang="stylus">
  .conclusion
    margin 5em 0 0
    padding 4em 0
    background-color var(--conclusion-background-color)
    background-image linear-gradient(to right, #979797, #171717), url('/assets/img/site/home/winder-top-left.svg')
    background-position left top, left top -5px
    background-size cover, contain
    background-repeat no-repeat
    color var(--color-light-grey)
    background-blend-mode soft-light, normal

    @media screen and (prefers-color-scheme dark)
      margin 0
      padding 0 0 6em
      background-color #000
      background-image linear-gradient(to bottom, #000, #002451)
      color #bdbdbd
      background-blend-mode unset

    .text-container
      text-align center

      h1, h2, h3, p
        color inherit

      .title
        margin-top 1em
        margin-bottom 0
        text-transform uppercase
        font-weight 900
        font-size 1.45em
        line-height 1em

      .subtitle
        margin 0.1em 0 0.25em
        text-transform uppercase
        font-size 3em
        font-family var(--font-family-primary-headings)

    .connect-on-social
      text-align center
      font-size 2.25em

      a
        padding 0 .33em
        color rgba(255, 255, 255, 0.6)

        &:hover
          color #fff
          cursor pointer

          @media screen and (prefers-color-scheme dark)
            color #d9d677
</style>
