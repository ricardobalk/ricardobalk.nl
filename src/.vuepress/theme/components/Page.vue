<template>
    <main class="page">
        <slot name="top"/>

        <BigHero v-if="this.$page.frontmatter.images && this.$page.frontmatter.images.hero" :image="`${assets.images}/${this.$page.frontmatter.images.hero.filename}`" />

        <h1 v-if="this.$page.title" class="page-title"><template v-if="this.$page.frontmatter.client">{{this.$page.frontmatter.client}} &mdash; </template>{{this.$page.title}}</h1> <!-- TODO: Make built-in title component for this -->

        <Content class="theme-default-content"/>

        <PageEdit/>

        <PageNav v-bind="{ sidebarItems }"/>

        <slot name="bottom"/>
    </main>
</template>

<script>
    import 'foundation-sites';
    import BigHero from "@theme/components/BigHero";
    import PageEdit from '@theme/components/PageEdit.vue'
    import PageNav from '@theme/components/PageNav.vue'

    export default {
        components: {BigHero, PageEdit, PageNav},
        props: ['sidebarItems'],
        computed: {
            assets() {
                return this.$site.themeConfig.defaultAssetPaths;
            }
        }
    }
</script>

<style lang="scss">
    @import '@theme/styles/global/foundation.scss';
    @import '@theme/styles/global/main.scss';
    @import '@theme/styles/global/main.dark.scss';
</style>


<style lang="stylus">
    @require '../styles/wrapper.styl'

    body
        min-height 100vh

    .page
        padding-bottom 2rem
        display block

        .page-title
            max-width: 740px
            margin: 0 auto
            padding: 0 2.5rem
            &:first-child
              margin-top 5.5rem

        .theme-default-content
            padding: 0 2.5rem

            > p:first-of-type
                margin-top: 1.5rem

    code
        border 1px solid #333;

    .custom-block
        &.danger p
            color: #555

</style>