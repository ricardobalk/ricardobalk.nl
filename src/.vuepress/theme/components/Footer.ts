import { Vue, Component, Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faMugHot, faCode } from "@fortawesome/free-solid-svg-icons";

interface FooterLink extends Record<string, string> {
  text: string,
  location: string
}

interface FooterLinks extends Record<string, any> {
  navigation: Array<FooterLink>,
  social: Record<string, string>
}

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
  links!: FooterLinks;

  created() {
    library.add(faGithub, faHeart, faMugHot, faCode);
  }
}