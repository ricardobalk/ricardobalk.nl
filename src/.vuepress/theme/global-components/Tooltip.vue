<template>
  <div class="tooltip">
    <span class="text" :title="text"><slot>This tooltip is missing its slot value</slot></span>
  </div>
</template>

<script lang="ts" src="./Tooltip.ts" />
<style lang="stylus" src="./Tooltip.styl" />
