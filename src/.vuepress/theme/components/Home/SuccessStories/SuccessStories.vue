<template>
  <section class="success-stories" :title="title" tabindex="0">
    <div class="g-row">
      <div class="c-sm-12 text-container text-center">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <div class="g-row">
          <SuccessStory v-for="(story, index) in stories" :key="index" :story="story" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./SuccessStories.ts" />
<style lang="stylus" src="./SuccessStories.styl" />
