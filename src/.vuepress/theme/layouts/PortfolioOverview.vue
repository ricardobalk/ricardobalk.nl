<template>
  <section class="portfolio-overview">
    <BigHero title="Portfolio" image="/assets/img/site/portfolio/workbench.webp" class="blog-hero" />

    <div class="portfolio">
      <div class="masonry-container">
        <div class="masonry-columns items">
          <article
            v-for="(item, index) in portfolioItems"
            v-if="(item.frontmatter.lang || 'en') === language"
            class="masonry-brick item"
            :data-category="item.frontmatter.category"
            :key="index"
          >
            <a :href="item.path" class="clickable">
              <img
                v-if="item.frontmatter.images"
                :src="`${imagePath}/${item.frontmatter.images.featured.filename}`"
                alt=""
              />
              <div class="meta overlay">
                <div class="valign-center">
                  <p>
                    <span class="date">
                      <time :datetime="item.frontmatter.date"
                        ><HumanReadableDate :date="item.frontmatter.date" prefix=""
                      /></time> </span
                    ><span class="client">{{ item.frontmatter.client }}</span>
                  </p>
                  <h2 class="title btn">
                    {{ item.frontmatter.shortTitle || item.title }}
                    <font-awesome-icon class="icon" :icon="['fas', 'chevron-right']" size="sm" />
                  </h2>
                  <p class="excerpt">
                    {{ item.frontmatter.excerpt }}
                  </p>
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import retrievePosts from "../mixins/retrievePosts";
  import languageSelection from "../mixins/languageSelection";
  import Component from "vue-class-component";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import BigHero from "@theme/components/BigHero.vue";
  import HumanReadableDate from "@theme/global-components/HumanReadableDate.vue";

  @Component({
    name: "PortfolioOverview",
    components: { FontAwesomeIcon, BigHero, HumanReadableDate },
    mixins: [languageSelection],
  })
  export default class PortfolioOverview extends retrievePosts {
    created() {
      library.add(faChevronRight);
    }

    get portfolioItems() {
      return this.retrievePosts("portfolio");
    }

    get assets() {
      return this.$site.themeConfig.defaultAssetPaths;
    }

    get imagePath() {
      return `${this.assets.images}/content/portfolio`;
    }
  }
</script>

<style lang="stylus">
  @require '~@theme/styles/global/masonry'
  @require '~@theme/styles/global/variables'

  .portfolio-overview
    margin-top $navigation-bar-height

    .big-hero
      margin-bottom 0
      background-position center

    .portfolio
      masonry-layout(0)

      .page-container
        margin-bottom 5em

      .page-header
        margin 1em 0
        text-transform uppercase
        font-size 1.5em

      .items
        .item
          position relative
          page-break-inside avoid

          .meta
            h1, h2, h3, p
              color var(--color-light-grey)

            p
              margin 0

            span
              margin 0
              font-size 0.9em

            .date
              &:after
                margin 0 0.25em
                content '\2022'

            .btn
              display inline-block
              margin 1.25em 0
              padding 0.5em 1em 0.5em 1.25em
              border 1px solid #eee
              text-transform uppercase
              font-weight 700
              font-size 1.25em
              line-height 1em
              transition color 0.25s ease-in-out

              &:hover
                background-color #fff
                color var(--color-dark-grey)

              .icon
                padding 0.15em

            .excerpt
              color #ccc
              text-shadow 0 0 1px rgba(255, 255, 255, 0.5)
              font-size 0.8em

            &.overlay
              position absolute
              top 0
              padding 2em
              width 100%
              height 100%
              background-color #000
              color #eee
              text-align center
              opacity 0
              transition opacity 0.25s ease-in-out

              &:hover
                opacity 0.95

  @media screen and (prefers-color-scheme dark)
    .portfolio-overview
      margin-top 0

      .hero
        background-color rgb(11, 11, 11) !important
</style>
