<template>
  <header class="hero" tabindex="0">
    <div class="grid-x valign-center">
      <div class="small-12 cell text-container text-center">
        <h1 class="name">{{ name }}</h1>
        <h2 v-if="occupation" class="occupation">
          {{ occupation }}
        </h2>
        <h3 v-if="tagline" class="tagline">
          {{ tagline }}
        </h3>
      </div>
    </div>
  </header>
</template>

<script lang="ts" src="./Hero.ts" />
<style lang="stylus" src="./Hero.styl" />
