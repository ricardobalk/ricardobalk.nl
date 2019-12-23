<template>
    <section class="portfolio-overview">

        <BigHero title="Portfolio" image="/assets/img/site/workbench.jpg" class="blog-hero"/>

        <div class="portfolio">
            <div class="masonry-container">
                <div class="masonry-columns items">
                    <article v-for="(item, index) in items" v-if="item.frontmatter.portfolio === true && (item.frontmatter.lang || 'en-GB') === $lang"
                             class="masonry-brick item" :data-category="item.frontmatter.category">
                        <a :href="item.path" class="clickable">
                            <img v-if="item.frontmatter.images"
                                 :src="`${assets.images}/${ item.frontmatter.images.featured.filename }`"
                                 alt="">
                            <div class="meta overlay">
                                <div class="valign-center">
                                    <p>
                                    <span class="date">
                                        <time :datetime="item.frontmatter.date"><HumanReadableDate
                                                :date="item.frontmatter.date" prefix=""/></time>
                                    </span><span class="client">{{ item.frontmatter.client }}</span>
                                    </p>
                                    <h2 class="title btn">{{ item.title }}
                                        <font-awesome-icon class="icon" :icon="['fas', 'chevron-right']"/>
                                    </h2>
                                    <p class="excerpt">{{ item.frontmatter.excerpt }}</p>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BigHero from "@theme/components/BigHero";
    import {library} from "@fortawesome/fontawesome-svg-core";
    import {fas} from "@fortawesome/free-solid-svg-icons";
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import HumanReadableDate from "@theme/global-components/HumanReadableDate";

    export default {
        name: "PortfolioOverview",
        components: {library, fas, FontAwesomeIcon, BigHero, HumanReadableDate},
        created() {
            library.add(fas); // TODO: Reduce load time! We don't need a whole library for the chevron icon.
        },
        computed: {
            items() {
                return this.$site.pages;
            },
            assets() {
                return this.$site.themeConfig.defaultAssetPaths;
            }
        }
    }
</script>

<style lang="scss">
    @import '@theme/styles/global/mixins'; // Contains the Masonry-layout

    // Standard
    .navbar .site-logo {
        fill: #fff;
    }

    .portfolio-overview {
        .big-hero {
            margin-bottom: 0;
            background-position: center;
        }

        .portfolio {
            .page-container {
                margin-bottom: 5em;
            }

            .page-header {
                font-size: 1.5em;
                text-transform: uppercase;
                margin: 1em 0;
            }

            @include masonry-layout(0);

            .items {
                .item {
                    position: relative;
                    page-break-inside: avoid;

                    .meta {
                        h1,
                        h2,
                        h3,
                        p {
                            color: var(--color-light-grey);
                        }

                        p {
                            margin: 0;
                        }

                        span {
                            font-size: 0.9em;
                            margin: 0;
                        }

                        .date {
                            &:after {
                                content: '\2022';
                                margin: 0 0.25em;
                            }
                        }

                        .btn {
                            text-transform: uppercase;
                            font-size: 1.25em;
                            font-weight: 700;
                            line-height: 1em;
                            border: 1px solid #eee;
                            display: inline-block;
                            padding: .5em 1em .5em 1.25em;
                            margin: 1.25em 0;
                            transition: color 0.25s ease-in-out;

                            .icon {
                                padding: 0.15em;
                            }

                            &:hover {
                                background-color: #fff;
                                color: var(--color-dark-grey);
                            }
                        }

                        .excerpt {
                            font-size: 0.8em;
                            color: #ccc;
                            text-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
                        }

                        &.overlay {
                            position: absolute;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            padding: 2em;
                            text-align: center;
                            background-color: #000;
                            color: #eee;
                            opacity: 0;
                            transition: opacity 0.25s ease-in-out;

                            &:hover {
                                opacity: 0.95;
                            }
                        }
                    }
                }
            }
        }
    }

    // Dark

    @media screen and (prefers-color-scheme: dark) {
        .portfolio-overview {
            .hero {
                background-color: rgb(11, 11, 11) !important;
            }
        }
    }


</style>