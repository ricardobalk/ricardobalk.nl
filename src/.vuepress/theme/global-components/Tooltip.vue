<template>
  <div class="tooltip">
    <span class="text"><slot>This tooltip is missing its slot value</slot></span>
    <span class="tooltip-text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component
  export default class Tooltip extends Vue {
    @Prop({ required: true, default: "This tooltip is missing its prop value" }) private text!: string;
  }
</script>

<style lang="stylus" scoped>
  .tooltip
    position relative
    display inline-flex
    border-bottom 1px dotted black

    @media screen and (prefers-color-scheme dark)
      border-bottom-color #666

    &:hover
      .tooltip-text
        // display inline
        visibility visible
        opacity 1

    .tooltip-text
      position absolute
      left 0
      z-index 1
      visibility hidden
      padding 0.25em 1em
      min-width max-content
      width auto
      border-width 1px
      border-style solid
      border-color #222
      border-radius 6px
      background-color #555
      color #fff
      text-align center
      opacity 0
      transition opacity 0.25s
      transform translate(-45%, -100%)

      @media screen and (prefers-color-scheme dark)
        border-color #9cb44a
        background-color #222
        color #aaa

      &:after
        position absolute
        top 100%
        left 50%
        margin-left -5px
        border-width 5px
        border-style solid
        border-color #555 transparent transparent transparent
        content ''
</style>
