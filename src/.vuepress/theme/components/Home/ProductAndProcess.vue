<template>
  <section class="product-and-process" title="" tabindex="0">
    <div class="maxed">
      <div class="grid-x">
        <div class="show-for-large large-6 cell picture">
          <img :src="image.path" :alt="image.description" />
        </div>
        <div class="small-12 medium-12 large-6 cell">
          <div class="text-container">
            <h2 class="section-title">{{ title }}</h2>
            <span class="design-process">{{ subtitle }}</span>
            <p v-for="(paragraph, index) in text" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./ProductAndProcess.ts" />
<style lang="stylus" src="./ProductAndProcess.styl" />
