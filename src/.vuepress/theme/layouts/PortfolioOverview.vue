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

<script lang="ts" src="./PortfolioOverview.ts" />
<style lang="stylus" src="./PortfolioOverview.styl" />
