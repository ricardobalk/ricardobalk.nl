<template>
    <header class="hero" tabindex="0">
        <div class="grid-x valign-center">
            <div class="small-12 cell text-container text-center">
                <h1 class="name">{{ heroText[0] }}</h1>
                <h2 v-if="heroText[1] !== null" class="occupation">{{ heroText[1] }}</h2>
                <h3 v-if="heroText[2] !== null" class="tagline">{{ heroText[2] }}</h3>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Hero",
        props: {
            "heroText": {
                type: Array, required: true, default() {
                    return []
                }
            },
            "heroImage": {type: Object, required: false}
        }
    }
</script>

<style lang="scss">
    // Standard
    .hero {
        font-family: var(--font-family-primary);
        height: var(--height-hero);

        background-color: var(--hero-background-color);
        background-image: linear-gradient(to right, #979797, #171717),
        url('/assets/img/hero.svg'), url('/assets/img/winder.svg');
        background-blend-mode: soft-light, soft-light, normal;
        background-repeat: no-repeat;
        background-size: cover, contain, contain;
        background-position: left top, -100px -100px, right bottom -5px;

        color: #fff;
        text-shadow: 1px 1px 5px rgba(150, 150, 150, 0.33);
        outline: 0;

        @media screen and (max-width: 640px) {
            height: calc(50vh - var(--height-site-header));
        }

        .text-container {
            padding: 0 1em;
            h1,
            h2,
            h3 {
                font-family: inherit;
                color: var(--color-white);
                text-transform: uppercase;
            }
            h1 {
                font-size: 2.25em;
                font-weight: 300;
                margin-bottom: 0;
                @media screen and (max-width: 640px) {
                    font-size: 2em;
                    margin-bottom: 0.25em;
                }
            }
            h2 {
                font-size: 2.5em;
                font-weight: 700;
                margin: 0.25em 0;
                @media screen and (max-width: 640px) {
                    font-size: 1.5em;
                    margin-bottom: 0.5em;
                }
            }
            h3 {
                font-size: 0.95em;
                font-weight: 700;
                text-transform: uppercase;
                @media screen and (max-width: 640px) {
                    font-size: 0.95em;
                }
            }
        }
    }

    // Dark
    @media screen and (prefers-color-scheme: dark) {
        .hero {
            background-image: url('/assets/img/hero.svg'),
            linear-gradient(to bottom, #00000073, #000) !important;
            background-blend-mode: soft-light, luminosity;
            background-size: contain, contain, cover;
            background-position: -100px -100px, top;

            .text-container {
                h1,
                h3 {
                    color: #ccc;
                }

                h2 {
                    color: #ccc;
                }
            }
        }
    }
</style>