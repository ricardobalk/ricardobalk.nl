<template>
  <div class="posts">
    <ElementFilter />
    <div class="masonry-container">
      <div class="masonry-columns">
        <article
          class="masonry-brick post"
          v-for="(page, index) in posts"
          v-if="!page.frontmatter.layout && !page.frontmatter.home && (page.frontmatter.lang || 'en') === language"
          :data-category="page.frontmatter.category"
          :class="'post-' + index"
        >
          <a :href="page.path" class="clickable">
            <div v-if="page.frontmatter.images" class="show-for-medium image">
              <img
                v-if="page.frontmatter.images.featured"
                :src="`${assets.images}/content/blog/${page.frontmatter.images.featured.filename}`"
                :alt="page.frontmatter.images.featured.description"
              />
            </div>

            <div class="meta">
              <p v-if="page.frontmatter.date" class="date">
                <time :datetime="page.frontmatter.date">
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" size="sm" />&nbsp;<HumanReadableDate
                    prefix=""
                    suffix="ago"
                    :date="page.frontmatter.date"
                    lang="en"
                  />
                </time>
              </p>
              <h2 class="title">{{ page.title }}</h2>
              <p v-if="showExcerpts === true && page.frontmatter.excerpt" class="excerpt">
                {{ page.frontmatter.excerpt }}
              </p>
              <p class="continue-reading">
                <template v-if="showExcerpts === true && page.frontmatter.excerpt">Continue reading</template>
                <template v-else>Read this article</template>
                <font-awesome-icon :icon="['fas', 'chevron-right']" size="sm" />
              </p>
            </div>
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faCalendarAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import HumanReadableDate from "@theme/global-components/HumanReadableDate.vue";
  import languageSelection from "../../../mixins/languageSelection";
  import ElementFilter from "@theme/components/ElementFilter.vue";
  import { PageOptions } from "vuepress-types";

  @Component({
    name: "Articles",
    components: { FontAwesomeIcon, HumanReadableDate, ElementFilter },
    mixins: [languageSelection],
  })
  export default class Articles extends Vue {
    @Prop({ required: true, default: {} }) private posts!: PageOptions;
    @Prop({ required: true, default: "" }) private assets!: string;
    @Prop({ required: false, default: true }) private showExcerpts!: boolean;

    created() {
      library.add(faCalendarAlt);
      library.add(faChevronRight);
    }
  }
</script>

<style lang="stylus">
  @require '~@theme/styles/global/masonry'

  .posts
    masonry-layout(1em)

    .post
      box-shadow 0 0 12px rgba(0, 0, 0, 0.065)
      text-align center
      page-break-inside avoid

    .clickable
      color initial
      font initial

    .meta
      padding 2.5em 2em

      .date
        color #666
        font-weight 600
        font-size 0.85em

      .title
        margin-bottom 1em
        color #333
        font-weight 700
        font-size 1em
        font-family var(--font-family-primary)

        &:after
          display block
          margin 0 auto
          width 5em
          height 1em
          border-bottom 1px solid #eee
          content ' '

        .continue-reading
          padding-left 0.5em
          color #1779ba
          font-size 0.95em

  @media screen and (prefers-color-scheme dark)
    .post
      box-shadow none

      .image
        border 1px solid rgba(255, 255, 255, 0.14)
        border-bottom none

        & + .meta
          border-top-style none !important

      .meta
        border 1px solid rgba(255, 255, 255, 0.14)

        .title
          color #bcbcbc

          &:after
            border-bottom 1px solid rgba(255, 255, 255, 0.14)
</style>
