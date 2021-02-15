import Service from "*.vue";
<template>
  <div class="small-12 medium-6 large-3 cell card">
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
