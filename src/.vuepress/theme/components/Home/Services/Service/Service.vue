<template>
  <div class="c-sm-12 c-md-6 c-lg-3 card">
    <div class="service">
      <div class="inner">
        <div class="icon-container">
          <font-awesome-icon :icon="['fa', service.icon]" class="icon" size="lg" />
        </div>
        <h3>{{ service.title }}</h3>
        <span class="caption">{{ service.caption }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Service.ts" />
<style lang="stylus" src="./Service.styl" />
