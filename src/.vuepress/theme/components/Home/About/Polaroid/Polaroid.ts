import { defineComponent } from 'vue'

export const Polaroid = defineComponent({
  name: 'Polaroid',
  props: {
    image: {
      type: String,
      required: true,
      default: "https://placehold.it/500x500"
    },
    caption: {
      type: String,
      required: true,
      default: "No caption given, did you forget to pass props?"
    },
  }
})

export default Polaroid