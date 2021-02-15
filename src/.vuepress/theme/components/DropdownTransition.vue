<template>
  <transition name="dropdown" @enter="setHeight" @after-enter="unsetHeight" @before-leave="setHeight">
    <slot />
  </transition>
</template>

<script lang="js" src="./DropdownTransition.js" />
<style lang="stylus" src="./DropdownTransition.styl" />
