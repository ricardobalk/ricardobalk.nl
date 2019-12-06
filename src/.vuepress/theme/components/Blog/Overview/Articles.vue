<template>
    <div class="posts">
        <div class="masonry-container">
            <div class="masonry-columns">
                <article class="masonry-brick post" v-for="(page, index) in posts"
                         v-if="!page.frontmatter.layout && !page.frontmatter.home && !page.frontmatter.portfolio === true"
                         :data-category="page.frontmatter.category" :class="'post-' + index">
                    <a :href="page.path" class="clickable">
                        <div v-if="page.frontmatter.images" class="show-for-medium image">
                            <img v-if="page.frontmatter.images.featured" :src="`${assets.images}/${page.frontmatter.images.featured.filename}`"
                                 :alt="page.frontmatter.images.featured.description">
                        </div>

                        <div class="meta">
                            <p v-if="page.frontmatter.date" class="date">
                                <time :datetime="page.frontmatter.date">
                                    <font-awesome-icon :icon="['fas', 'calendar-alt']"/>&nbsp;<HumanReadableDate
                                        prefix="" suffix="ago" :date="page.frontmatter.date" lang="en"/>
                                </time>
                            </p>
                            <h2 class="title">{{ page.title }}</h2>
                            <p v-if="showExcerpts === true && page.frontmatter.excerpt" class="excerpt">{{
                                page.frontmatter.excerpt }}</p>
                            <p class="continue-reading">
                                <template v-if="showExcerpts === true && page.frontmatter.excerpt">Continue reading
                                </template>
                                <template v-else>Read this article</template>
                                <font-awesome-icon :icon="['fas', 'chevron-right']"/>
                            </p>
                        </div>
                    </a>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {fas} from '@fortawesome/free-solid-svg-icons';
    import HumanReadableDate from '@theme/global-components/HumanReadableDate.vue';

    export default {
        name: "Articles",
        props: ['posts', 'assets', 'showExcerpts'],
        components: {library, fas, FontAwesomeIcon, HumanReadableDate},
        created() {
            library.add(fas);
        }
    }
</script>

<style lang="scss">
    @import '@theme/styles/global/masonry';

    .posts {
        .masonry-columns {
            @include vendor-prefix('column-gap', '1em');
        }

        .masonry-brick {
            margin: 1em 0;

            &:first-of-type {
                margin-top: 0;
            }
        }

        .post {
            text-align: center;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.065);
            page-break-inside: avoid;

            .clickable {
                font: initial;
                color: initial;
            }

            .meta {
                padding: 2.5em 2em;

                .date {
                    font-size: 0.85em;
                    font-weight: 600;
                    color: #666;
                }

                .title {
                    color: #333;
                    font-family: var(--font-family-primary);
                    font-size: 1em;
                    font-weight: 700;
                    margin-bottom: 1em;

                    &:after {
                        content: ' ';
                        display: block;
                        width: 5em;
                        height: 1em;
                        margin: 0 auto;
                        border-bottom: 1px solid #eee;
                    }
                }

                .continue-reading {
                    font-size: 0.95em;
                    padding-left: 0.5em;
                    color: #1779ba;
                }
            }
        }

        @media screen and (prefers-color-scheme: dark) {
            .post {
                box-shadow: none;

                .image {
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    border-bottom: none;

                    & + .meta {
                        border-top-style: none !important;
                    }
                }

                .meta {
                    border: 1px solid rgba(255, 255, 255, 0.14);

                    .title {
                        color: #bcbcbc;

                        &:after {
                            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
                        }
                    }
                }
            }
        }
    }

</style>