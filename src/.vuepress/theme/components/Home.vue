<template>
    <main class="home" aria-labelledby="main-title">
        <Hero :heroText="data.heroText" :heroImage="data.heroImage"/>
        <About :polaroidImage="data.polaroidImage">
            <Content class="theme-default-content custom"/>
        </About>
        <Services :services="(data.services.services || data.services)" :title="data.services.title"/>
        <ProductAndProcess :image="data.process.image" :title="data.process.title" :subtitle="data.process.subtitle"
                           :text="data.process.text"/>
        <SuccessStories :stories="(data.successStories.stories || data.successStories)" :title="data.successStories.title" :subtitle="data.successStories.subtitle"/>
        <Conclusion :title="data.nextMove.text[0]" :subtitle="data.nextMove.text[1]" :button="data.nextMove.button" />
    </main>
</template>

<script>
    import NavLink from "@theme/components/NavLink";
    import Hero from '@theme/components/Home/Hero.vue';
    import About from '@theme/components/Home/About.vue';
    import Services from "@theme/components/Home/Services";
    import ProductAndProcess from "@theme/components/Home/ProductAndProcess";
    import SuccessStories from "@theme/components/Home/SuccessStories";
    import Conclusion from "@theme/components/Home/Conclusion";

    export default {
        components: {Hero, About, Services, ProductAndProcess, SuccessStories, Conclusion, NavLink},

        computed: {
            data() {
                return this.$page.frontmatter
            },

            actionLink() {
                return {
                    link: this.data.actionLink,
                    text: this.data.actionText
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '@theme/styles/global/variables';

    .maxed {
        max-width: 1600px;
        margin: 0 auto;
    }

    .content-padding {
        padding-left: 1em;
        padding-right: 1em;
    }

    .hero {
        margin-top: 3.6rem;
        @media screen and (max-width: 639px) { margin-bottom: 2rem; }
        @media screen and (prefers-color-scheme: dark) {
            margin-top: unset;
        }
    }
</style>
