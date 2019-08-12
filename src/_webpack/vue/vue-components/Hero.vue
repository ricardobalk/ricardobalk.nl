<template>
  <section class="hero" tabindex="0">
    <div class="grid-x valign-center">
      <div class="small-12 cell text-container text-center">
        <h1>{{title}}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: ['title'],
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
  $hero-height-on-overview-pages: calc(30vh - #{$site-header-height});

  .hero {
    font-family: "Muli", "Overpass", Helvetica, Arial, sans-serif;
    height: $hero-height-on-overview-pages;

    background-color:      #004293;
    background-image:      linear-gradient(to right, #979797, #171717),
    url("/assets/img/hero.svg"),
    url("/assets/img/winder.svg"),
    url("/assets/img/winder-bl.svg");
    background-blend-mode: soft-light,
    soft-light,
    normal,
    normal;
    background-repeat:     no-repeat;
    background-size:       cover,
    contain,
    contain,
    contain;
    background-position:   left top,
    -100px -100px,
    right bottom -5px,
    left bottom -5px;

    color: #fff;
    text-shadow: 1px 1px 5px rgba(150, 150, 150, 0.33);
    outline: 0;

  @media screen and (max-width: 640px) {
    height: calc(30vh - #{$site-header-height})
  }

  .text-container {
    padding: 0 1em;
  h1, h2, h3 { font-family: inherit; text-transform: uppercase; }
  h1 {
    font-size: 2.25em;
    font-weight: 700;
    margin-bottom: 0;
  @media screen and (max-width: 640px) { font-size: 1.5em; margin-bottom: .25em; }
  }
  h2 {
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: .25em;
  @media screen and (max-width: 640px) { font-size: 1.5em; margin-bottom: .5em; }
  }
  h3 {
    font-size: .95em;
    font-weight: 700;
    text-transform: uppercase;
  @media screen and (max-width: 640px) { font-size: .95em; }
  }
  }
  }
</style>
