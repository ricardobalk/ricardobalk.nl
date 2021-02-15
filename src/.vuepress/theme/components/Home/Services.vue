<template>
  <section class="services" :title="title" tabindex="0">
    <div class="grid-x">
      <div class="small-12 large-offset-1 large-10 cell">
        <h2 class="title text-center">{{ title }}</h2>
        <div class="grid-x cards">
          <Service v-for="(service, index) in services" :key="index" :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Services.ts" />
<style lang="stylus" src="./Services.styl" />
