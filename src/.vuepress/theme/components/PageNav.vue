<template>
  <div class="page-nav" v-if="prev || next">
    <p class="inner">
      <span v-if="prev" class="prev">
        ←
        <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
      </span>

      <span v-if="next" class="next">
        <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>
        →
      </span>
    </p>
  </div>
</template>

<script lang="js" src="./PageNav.js" />
<style lang="stylus" src="./PageNav.styl" />
