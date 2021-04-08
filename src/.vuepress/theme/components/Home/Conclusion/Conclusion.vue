<template>
  <section class="conclusion" title="" tabindex="0">
    <div class="maxed">
      <div class="g-row">
        <div class="c-sm-12">
          <div class="text-container">
            <h1 class="title">{{ title }}</h1>
            <h2 class="subtitle">{{ subtitle }}</h2>
          </div>
          <section class="connect-on-social" title="Ways to contact me">
            <a
              v-for="(contactingMethod, index) in socialLinks"
              :href="contactingMethod.url"
              :title="contactingMethod.title"
              :key="index"
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