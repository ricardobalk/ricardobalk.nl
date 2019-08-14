<template>
  <section class="hero" tabindex="0" :class="{ hasimage: hasImage }" :style="style">
    <div class="grid-x valign-center">
      <img :src="image" style="visibility: hidden;" v-if="image" />
      <div class="small-12 cell text-container text-center">
        <h1 class="title" v-if="title">{{title}}</h1>
        <h2 class="subtitle" v-if="subtitle">{{subtitle}}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FancyHero',
  props: ['title', 'subtitle', 'image'],
  computed: {
    hasImage () { return ( this.image ? true : false ); },
    style () {
      return  'background-color: #004293; ' +
              'background-image: linear-gradient(to right, #979797, #171717), ' +
              ( this.image ? 'url("' + this.image + '");' : 'url("/assets/img/hero.svg"); ' ) +
              'background-blend-mode: soft-light, ' + ( this.image ? 'normal;' : 'soft-light; ') +
              'background-repeat: no-repeat; ' +
              'background-size: contain, ' +  ( this.image ? 'cover' : 'contain' ) + '; ' +
              'background-position: left top, ' + ( this.image ? 'center;' : '-100px -100px; ' ) +
              ( this.image ? 'height: auto;' : '' );
    },
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  $contact-bar-height: 25px;
  $navigation-bar-height: 75px;
  $site-header-height: $contact-bar-height + $navigation-bar-height;
  $hero-height: calc(66vh - #{$site-header-height});
  $hero-height-on-overview-pages: calc(50vh - #{$site-header-height});

  .hero {
    font-family: "Muli", "Overpass", Helvetica, Arial, sans-serif;
    height: $hero-height-on-overview-pages;
    clip-path: ellipse(120% 66% at 50% 33%);
    margin-bottom: 5em;

    color: #fff;
    text-shadow: 1px 1px 5px rgba(150, 150, 150, 0.33);
    outline: 0;

    @media screen and (max-width: 640px) {
      height: calc(30vh - #{$site-header-height})
    }

    .text-container {
      padding: 0 1em;

      h1, h2, h3 {
        font-family: inherit;
        text-transform: uppercase;
        text-shadow: 0px 0px 0.05em rgba(0,0,0,.25);
      }

      h1 {
        font-size: 2.25em;
        font-weight: 700;
        margin-bottom: 0;
        @media screen and (max-width: 640px) {
          font-size: 1.5em;
          margin-bottom: .25em;
        }
      }

      h2 {
        font-size: 2.5em;
        font-weight: 700;
        margin-bottom: .25em;
        @media screen and (max-width: 640px) {
          font-size: 1.5em;
          margin-bottom: .5em;
        }
      }

      h3 {
        font-size: .95em;
        font-weight: 700;
        text-transform: uppercase;
        @media screen and (max-width: 640px) {
          font-size: .95em;
        }
      }
    }
    &, & img { max-height: 30vh; }
    &.hasimage, &.hasimage img { max-height: 66vh; }
  }
</style>