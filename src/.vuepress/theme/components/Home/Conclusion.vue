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
    color var(--color-light-grey)
    background-color var(--conclusion-background-color)
    background-image linear-gradient(to right, #979797, #171717), url("/assets/img/site/home/winder-top-left.svg")
    background-blend-mode soft-light, normal
    background-repeat no-repeat
    background-size cover, contain
    background-position left top, left top -5px
    margin 5em 0 0
    padding 4em 0

    @media screen and (prefers-color-scheme dark)
      color #bdbdbd
      background-color #000
      background-image linear-gradient(to bottom, #000, #002451)
      background-blend-mode unset
      padding 0 0 6em
      margin 0

    .text-container
      text-align center

      h1, h2, h3, p
        color inherit

      .title
        text-transform uppercase
        font-size 1.45em
        font-weight 900
        margin-bottom 0
        line-height 1em
        margin-top 1em


      .subtitle
        font-family var(--font-family-primary-headings)
        text-transform uppercase
        font-size 3em
        margin 0.1em 0 0.25em


    .connect-on-social
      text-align center
      font-size 2em

      a
        padding 0 0.5em
        color rgba(255, 255, 255, 0.6)

        &:hover
          color #fff
          cursor pointer
          @media screen and (prefers-color-scheme: dark)
            color #d9d677
</style>
