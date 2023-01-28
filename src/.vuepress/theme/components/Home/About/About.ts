import { defineComponent, PropType } from "vue";
import Polaroid from "./Polaroid";
import type { polaroidImageData } from "./Polaroid/types";

export const About = defineComponent({
  name: "About",
  components: { Polaroid },
  props: {
    polaroidImage: {
      type: Object as PropType<polaroidImageData>,
      required: true,
      default: {
        path: "https://placehold.it/500x500",
        caption: "You might have forgotten to add an image.",
      },
    },
  },
});

export default About;
