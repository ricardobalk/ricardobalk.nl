<template>
  <div class="polaroid-container">
      <div class="photo-container outside" aria-hidden="true">
          <div class="inside" :style="{ backgroundImage: 'url(' + image + ')' }">
              <img :src="image" :alt="caption" class="photo" />
          </div>
      </div>
      <h3 class="caption">{{caption}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Polaroid',
  props: ['image', 'caption'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
    .polaroid-container {
        background-color: #fff;
        border: 1px solid #eee;
        box-shadow: 2px 2px 11px 0 rgba(50, 50, 50, 0.08);
        margin: .5em 0;
        .photo-container {
            &.outside {
                padding: 8% 8% 0;
                .inside {
                    width: 100%;
                    height: auto;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    box-shadow: inset 2px 2px 2px 0 rgba(50, 50, 50, 0.11);
                    .photo {
                        width: 100%;
                        height: auto;
                        position: relative;
                        z-index: -1;
                        visibility: hidden;
                    }
                }
            }
        }
        .caption {
            text-align: center;
            margin: 1.33em 0 1.5em;
        }
    }
</style>
