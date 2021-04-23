<template>
  <span class="tooltip" :title="text"><slot>This tooltip is missing its slot value</slot></span>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Tooltip",
    props: {
      text: {
        type: String,
        required: true,
        default: "This tooltip is missing its prop value",
      },
    },
  });
</script>

<style lang="stylus">
  .tooltip
    display inline
    border-bottom 1px dotted black

    @media screen and (prefers-color-scheme dark)
      border-bottom-color #666
</style>
