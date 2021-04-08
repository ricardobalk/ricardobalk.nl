import { defineComponent } from "vue";

const Image = defineComponent({
  name: "Image",
  props: {
    path: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    showDescriptionAsCaption: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
});

export default Image;
