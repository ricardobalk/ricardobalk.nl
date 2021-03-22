import { defineComponent, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMugHot, faCode } from "@fortawesome/free-solid-svg-icons";
import type { FooterLinks } from "./types"

export const Footer = defineComponent({
  name: "Footer",
  components: { FontAwesomeIcon },
  props: {
    links: {
      type: Object as PropType<FooterLinks>,
      required: true,
      default: {
          navigation: [
            { text: "Privacy", location: "/privacy/" },
            { text: "About", location: "/about/" },
            { text: "Contact", location: "/contact/" },
          ],
          social: {
            github: "https://github.com/ricardobalk",
          },
        },
      },
  },
  created() {
    library.add(faGithub, faHeart, faMugHot, faCode);
  }
})

export default Footer