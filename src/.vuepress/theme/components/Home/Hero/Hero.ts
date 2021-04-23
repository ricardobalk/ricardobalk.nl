import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "HomeHero",
  props: {
    name: {
      type: String,
      required: true,
      default: "Ricardo Balk",
    },
    occupation: {
      type: String,
      required: false,
    },
    tagline: {
      type: String,
      required: false,
    },
  },
});
