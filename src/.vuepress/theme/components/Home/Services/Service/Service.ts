import { defineComponent, PropType } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { ServiceDetails } from "./types";

export const Service = defineComponent({
  name: "Service",
  components: {
    FontAwesomeIcon,
    fas,
  },
  props: {
    service: {
      type: Object as PropType<ServiceDetails>,
      required: true,
      default: {
        title: "Service missing",
        caption: "Did you set up your binds correctly?",
        icon: "times",
      },
    },
  },
  created: () => {
    library.add(fas); // TODO: Only add required icons to the library
  },
});

export default Service;
