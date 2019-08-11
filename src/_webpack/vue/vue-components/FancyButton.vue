<template>
  <div class="fancy-button">
    <a :href="link" class="button">{{title}}</a>
  </div>
</template>

<script>
export default {
  name: 'FancyButton',
  props: ['title', 'link'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .fancy-button {
    text-align: center;
    font-size: .95em;
    font-weight: 700;
  }

  .fancy-button .button {
    border: none;
    display: inline-block;
    width: auto;
    height: auto;
    padding: .75em 1.5em;
    color: #000;
    background: #fff;
    border-radius: 5px;
  }
</style>
