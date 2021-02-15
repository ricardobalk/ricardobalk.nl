<template>
  <section class="conclusion" title="" tabindex="0">
    <div class="maxed">
      <div class="grid-x">
        <div class="small-12 cell">
          <div class="text-container">
            <p class="title">{{ title }}</p>
            <p class="subtitle">{{ subtitle }}</p>
          </div>
          <section class="connect-on-social" title="Ways to contact me">
            <a v-for="contactingMethod in connect" :href="contactingMethod.url" :title="contactingMethod.title"
              ><font-awesome-icon :icon="contactingMethod.icon" size="lg"
            /></a>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./Conclusion.ts" />
<style lang="stylus" src="./Conclusion.styl" />
