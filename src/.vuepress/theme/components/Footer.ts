import { Vue, Component, Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMugHot, faCode } from "@fortawesome/free-solid-svg-icons";

@Component({ name: "Footer", components: { FontAwesomeIcon } })
export default class Footer extends Vue {
  @Prop({
    required: true,
    default: {
      navigation: [
        { text: "Privacy", location: "/privacy" },
        { text: "About", location: "/about" },
        { text: "Contact", location: "/contact" },
      ],
      social: {
        github: "https://github.com/",
      },
    },
  })
  private links!: Object;

  created() {
    library.add(faGithub, faHeart, faMugHot, faCode);
  }
}