import { defineComponent, computed, ComputedRef } from 'vue'

export const Hero = defineComponent({
  name: "Hero",
  props: {
    image: {
      type: String,
      required: false,
      default: "/assets/img/site/home/hero.svg"
    },
    imageDark: {
      type: String,
      required: false,
      default: "/assets/img/site/home/hero.svg"
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    }
  },

  setup(context){
    const style : ComputedRef<String> = computed(() => `--image: url("${context.image}"); --image-dark: url("${context.imageDark}");`)
    return { style }
  },
  
})

export default Hero