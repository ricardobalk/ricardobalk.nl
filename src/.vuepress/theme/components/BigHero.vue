<template>
  <section tabindex="0" :style="style" class="big-hero" :class="{ hasimage: hasImage }">
    <div class="grid-x valign-center">
      <div class="small-12 cell text-container text-center">
        <h1 class="title" v-if="title">{{ title }}</h1>
        <h2 class="subtitle" v-if="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./BigHero.ts" />
<style lang="stylus" src="./BigHero.styl" />
