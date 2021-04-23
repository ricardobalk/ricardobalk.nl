import { defineComponent, PropType } from "vue";
import SuccessStory from "./SuccessStory";
import type { Story } from "./SuccessStory/types";

export const SuccessStories = defineComponent({
  name: "SuccessStories",
  components: { SuccessStory },
  props: {
    title: {
      type: String,
      required: true,
      default: "Success Stories",
    },
    subtitle: {
      type: String,
      required: true,
      default: "What others say about my work",
    },
    stories: {
      type: Array as PropType<Array<Story>>,
      required: true,
      default: [
        {
          name: "John Doe",
          title: "Example person",
          story: "You might have forgotten to add stories.",
          avatar: "/assets/img/home/success-stories/empty.png",
        },
        {
          name: "John Travolta",
          title: "Example person",
          story: "Stories can be added from the index file (in Markdown).",
          avatar: "/assets/img/home/success-stories/empty.png",
        },
        {
          name: "Johnny Cash",
          title: "Example person",
          story: "The front-matter is the right place to add them.",
          avatar: "/assets/img/home/success-stories/empty.png",
        },
      ],
    },
  },
});

export default SuccessStories;
