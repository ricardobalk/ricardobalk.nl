<template>
  <div class="success-story">
    <div class="inner">
      <div class="avatar-container">
        <img :src="avatar" :alt="client" class="avatar">
      </div>
      <h3 class="client">{{client}}</h3>
      <p class="position">{{position}}</p>
      <div class="caption">{{caption}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessStory',
  props: ['client', 'position', 'avatar', 'caption'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .success-story {
    text-align: center;
  }
  .success-story .inner {
    margin: 1em;
    padding: 2em;
    border: 1px solid #eee;
    background-color: #fff;
    box-shadow: 3px 3px 9px rgba(0,0,0,.05);
  }
  .success-story .inner .avatar-container {
    width: 100px;
    height: 100px;
    margin: 0 auto 1em;
  }
  .success-story .inner .avatar-container .avatar {
    border-radius: 50px;
  }
  .success-story .inner .client {
  }

  .success-story .inner .position {
    margin-top: .25em;
    margin-bottom: 1em;
  }
  .success-story .inner .caption {

  }
</style>
