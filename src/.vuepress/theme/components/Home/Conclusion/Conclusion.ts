import { defineComponent, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import type { WebService } from "./types";

export const Conclusion = defineComponent({
  name: "Conclusion",
  components: { fab, fas, FontAwesomeIcon },
  props: {
    title: {
      type: String,
      required: false,
      default: "It's time for the next move",
    },
    subtitle: {
      type: String,
      required: false,
      default: "Let's get in touch",
    },
    socialLinks: {
      type: Array as PropType<Array<WebService>>,
      required: true,
      default: [
        {
          serviceName: "Email",
          title: "Contact me by sending an email",
          icon: ["fas", "envelope"],
          url: "mailto:someone@example.com",
        },
        {
          serviceName: "GitHub",
          title: "My profile on GitHub, a platform for open source software development",
          icon: ["fab", "github"],
          url: "https://github.com/",
        },
        {
          serviceName: "Telephone",
          title: "Contact my by phone",
          icon: ["fas", "phone"],
          url: "tel:+1234",
        },
      ],
    },
  },
  created() {
    library.add(fab); // TODO: Only add required icons to the library
    library.add(fas);
  },
});

export default Conclusion;
