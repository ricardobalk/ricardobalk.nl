<template>
  <div class="polaroid-container">
    <div class="photo-container outside" aria-hidden="true">
      <div class="inside" :style="{ backgroundImage: 'url(' + image + ')' }">
        <img :src="image" :alt="caption" class="photo" />
      </div>
    </div>
    <h3 class="caption">{{ caption }}</h3>
  </div>
</template>

<script lang="ts" src="./Polaroid.ts" />
<style lang="stylus" src="./Polaroid.styl" />
