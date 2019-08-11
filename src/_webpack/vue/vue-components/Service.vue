<template>
  <div class="service">
    <div class="inner">
      <div class="icon-container">
        <i class="icon fa" :class="icon"></i>
      </div>

      <h3>{{title}}</h3>
      <span class="caption">{{caption}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  props: ['title', 'icon', 'caption'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .service {
    text-align: center;
  }

  .service .inner {
    margin: 1em;
    padding: 2em;
    border: 1px solid #eee;
    background-color: #fff;
    box-shadow: 3px 3px 9px rgba(0,0,0,.05);
  }
  .icon-container {
    width: 75px;
    height: 75px;
    border-radius: 50px;
    margin: 0 auto 1em;
    background-color: #efefef;
  }
  .icon-container .icon {
    font-size: 35px;
    text-align: center;
    vertical-align: middle;
    line-height: 75px;
    display: block;
  }
  h1 {color: #000}
</style>
