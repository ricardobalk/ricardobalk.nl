<template>
  <section tabindex="0" :style="style" class="big-hero">
    <div class="g-row valign-center">
      <div class="c-sm-12 text-container text-center">
        <h1 class="title" v-if="title">{{ title }}</h1>
        <h2 class="subtitle" v-if="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Hero.ts" />
<style lang="stylus" src="./Hero.styl" />
