import { defineComponent, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMugHot, faCode } from "@fortawesome/free-solid-svg-icons";

export const Footer = defineComponent({
  name: "Footer",
  components: { FontAwesomeIcon },
  created() {
    library.add(faGithub, faHeart, faMugHot, faCode);
  },
});

export default Footer;
