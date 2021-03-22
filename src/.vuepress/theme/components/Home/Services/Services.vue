<template>
  <section class="services" :title="title" tabindex="0">
    <div class="g-justify-center">
      <div class="c-sm-12 c-lg-offset-1 c-lg-10">
        <h2 class="title text-center">{{ title }}</h2>
        <div class="g-row cards">
          <Service v-for="(service, index) in services" :key="index" :service="service" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Services.ts" />
<style lang="stylus" src="./Services.styl" />