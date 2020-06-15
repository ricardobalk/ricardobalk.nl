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
    display inline-block
    border-bottom 1px dotted black
    @media screen and (prefers-color-scheme dark)
      border-bottom-color #666

    &:hover
      .tooltip-text
        // display inline
        visibility visible
        opacity 1

    .tooltip-text
      // display none
      visibility hidden
      opacity 0
      background-color #555
      color #fff
      text-align center
      border-radius 6px
      padding .25em 1em
      position absolute
      z-index 1
      left 0
      width 100%
      transform translate(0, -105%)
      transition opacity .25s
      @media screen and (prefers-color-scheme dark)
        background-color #222
        color #aaa

      &:after
        content ""
        position absolute
        top 100%
        left 50%
        margin-left -5px
        border-width 5px
        border-style solid
        border-color #555 transparent transparent transparent
</style>
