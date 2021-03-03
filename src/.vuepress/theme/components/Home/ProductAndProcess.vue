<template>
  <section class="product-and-process" title="" tabindex="0">
    <div class="maxed">
      <div class="g-row">
        <div class="show-from-lg c-lg-6 picture">
          <img :src="image.path" :alt="image.description" />
        </div>
        <div class="c-sm-12 c-md-12 c-lg-6">
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
