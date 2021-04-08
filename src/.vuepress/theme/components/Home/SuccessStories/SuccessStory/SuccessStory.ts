import { defineComponent, PropType } from 'vue'
import type { Story } from "./types"

export const SuccessStory = defineComponent({
  name: 'SuccessStory',
  props: {
    story: {
      type: Object as PropType<Story>,
      required: true,
      default: {
      name: "Story missing",
      title: "Did you set up your binds correctly?",
      story:
        "A bind ensures that data is transferred between components, in this case from 'SuccessStories' to 'SuccessStory'. There might be going something wrong there.",
      avatar: "/assets/img/home/success-stories/empty.png",
    },
    }
  }
})

export default SuccessStory