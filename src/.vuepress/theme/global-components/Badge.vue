<template>
  <span class="badge" :class="type" :style="{ 'vertical-align': vertical }"
    ><slot>{{ text }}</slot>
  </span>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";

  @Component({ name: "Badge" })
  export default class Badge extends Vue {
    @Prop({ type: String, required: false, default: "tip" }) private type!: string;
    @Prop({ type: String, required: false, default: "" }) private text!: string;
    @Prop({ type: String, required: false, default: "top" }) private vertical!: string;
  }
</script>

<style lang="stylus" scoped>
  .badge
    display inline-block
    padding 0 6px
    height 18px
    border-radius 3px
    background-color #42b983
    color white
    font-size 14px
    line-height 18px

    &.tip, &.green
      background-color #42b983

      @media screen and (prefers-color-scheme dark)
        background-color darken(@background-color, 40%)

    &.error, &.red
      background-color #DA5961 // #f66

      @media screen and (prefers-color-scheme dark)
        background-color darken(@background-color, 40%)

    &.warning, &.warn, &.yellow
      background-color #e7c000

      @media screen and (prefers-color-scheme dark)
        background-color darken(@background-color, 40%)

    & + &
      margin-left 5px
</style>
