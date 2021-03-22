import { defineComponent, PropType } from 'vue'
import type { ImageProperties } from './types'

export const ProductAndProcess = defineComponent({
  name: 'ProductAndProcess',
  props: {
    title: {
      type: String,
      required: true,
      default: 'You forgot to add a title here\nPlease add a title.'
    },
    subtitle: {
      type: String,
      required: true,
      default: 'You forgot to add the subtitle here. Please add a subtitle.'
    },
    text: {
      type: Array as PropType<Array<String>>,
      required: true,
      default: [
      "You forgot to add some text, it can be added via props",
      "Please take a look in the Vue component to see which props and types are expected.",
      ],
    },
    image: {
      type: Object as PropType<ImageProperties>,
      required: true,
      default: {
        path: "https://placehold.it/1920x1080",
        description: "An example image.",
      },
    },
  },
})

export default ProductAndProcess