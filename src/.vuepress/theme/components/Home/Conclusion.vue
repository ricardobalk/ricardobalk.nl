<template>
    <section class="conclusion" title="" tabindex="0">
        <div class="maxed">
            <div class="grid-x">
                <div class="small-12 cell">
                    <div class="text-container">
                        <p class="next-move">It's time for the next move</p>
                        <h2 class="section-title">Ready? Let's go!</h2>
                    </div>
                    <FancyButton :title="'Contact me today'" :link="'/contact'"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FancyButton from "../FancyButton";

    export default {
        name: "Conclusion",
        components: {FancyButton}
    }
</script>

<style lang="scss">
    // Standard
    .conclusion {
        color: var(--color-light-grey);
        background-color: var(--conclusion-background-color);
        background-image: linear-gradient(to right, #979797, #171717),
        url('/assets/img/winder-top-left.svg');
        background-blend-mode: soft-light, normal;
        background-repeat: no-repeat;
        background-size: cover, contain;
        background-position: left top, left top -5px;

        margin: 5em 0 0;
        padding: 4em 0;

        .text-container {
            text-align: center;

            .next-move {
                text-transform: uppercase;
                font-size: 1.45em;
                font-weight: 900;
                margin-bottom: 0;
                line-height: 1em;
                margin-top: 1em;
            }

            .section-title {
                text-transform: uppercase;
                font-size: 3em;
                margin: .1em 0 .5em;
            }
        }

        .fancy-button {
            text-align: center;

            .button {
                color: #fff;
                background: linear-gradient(60deg, #377fea69, #377fead6);
            }
        }

        h1,
        h2,
        h3,
        p {
            color: inherit;
        }
    }

    // Dark
    @media screen and (prefers-color-scheme: dark) {
        .conclusion {
            color: #bdbdbd;
            background-color: #000;
            background-image: linear-gradient(to bottom, #000, #002451);
            background-blend-mode: unset;
            padding: 0 0 6em;
            margin: 0;
        }
    }
</style>