<template>
  <div class="c-sm-12 c-lg-6 card">
    <div class="success-story">
      <div class="inner">
        <div class="avatar-container">
          <img :src="story.avatar" :alt="story.name" class="avatar" />
        </div>
        <p class="client">{{ story.name }}</p>
        <p class="position">{{ story.title }}</p>
        <p class="caption">{{ story.story }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SuccessStory.ts" />
<style lang="stylus" src="./SuccessStory.styl" />