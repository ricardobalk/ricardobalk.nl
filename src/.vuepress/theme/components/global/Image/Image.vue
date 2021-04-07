<template>
  <div class="annotated-image">
    <img :src="path" :alt="description" v-if="!showDescriptionAsCaption" />
    <figure v-else>
      <img :src="path" :alt="description" />
      <figcaption>{{ description }}</figcaption>
    </figure>
  </div>
</template>

<script lang="ts" src="./Image.ts" />
<style lang="styl" src="./Image.styl" />