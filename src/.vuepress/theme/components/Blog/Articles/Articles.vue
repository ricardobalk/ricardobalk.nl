<template>
  <div class="posts">
    <div class="masonry-container">
      <div class="masonry-columns">
        <article
          class="masonry-brick post"
          v-for="(page, index) in posts"
          :data-category="page.frontmatter.category"
          :class="`entry-${index}`"
          :key="index"
        >
          <a :href="page.path" class="clickable">
            <div v-if="page.frontmatter.images" class="show-for-medium image">
              <img
                v-if="page.frontmatter.images.featured"
                :src="`/assets/img/content/blog/${page.frontmatter.images.featured.filename}`"
                :alt="page.frontmatter.images.featured.description"
              />
            </div>

            <div class="meta">
              <p v-if="page.frontmatter.date" class="date">
                <time :datetime="page.frontmatter.date">
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" size="sm" />&nbsp;
                  {{ DateTime.fromISO(page.frontmatter.date).toFormat("LLL yyyy", { locale: page.frontmatter.lang }) }}
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

<script lang="ts" src="./Articles.ts" />
<style lang="stylus" src="./Articles.styl" />
