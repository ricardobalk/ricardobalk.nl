import { defineComponent, PropType } from 'vue'
import Service from "./Service";
import type { ServiceDetails } from "./Service/types";

export const Services = defineComponent({
  name: 'Services',
  components: {
    Service
  },
  props: {
    title: {
      type: String,
      required: true,
      default: "Things I could help you with"
    },
    services: {
      type: Array as PropType<Array<ServiceDetails>>,
      required: true,
      default: [
        {
          title: "Service 1",
          caption: "You might have forgotten to add services.",
          icon: "exclamation-triangle",
        },
        {
          title: "Service 2",
          caption: "Please take a look in the Vue templates to see what is expected.",
          icon: "eye",
        },
        {
          title: "Service 3",
          caption: "These are just some defaults.",
          icon: "check",
        },
        {
          title: "Service 4",
          caption: "At least things won't break this way.",
          icon: "ban",
        },
      ]
    },
  }
})

export default Services