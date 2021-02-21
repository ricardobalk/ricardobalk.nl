import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

export interface WebService extends Record<string, string | string[]> {
  serviceName: string; // "Example.com, an example website"
  title: string; // "An example profile on example.com"
  icon: Array<string>; // ["fas", "envelope"]
  url: string; // "https://example.com"
}

@Component({ name: "Conclusion", components: { fab, fas, FontAwesomeIcon } })
export default class Conclusion extends Vue {
  created() {
    library.add(fab); // TODO: Only add required icons to the library
    library.add(fas);
  }

  @Prop({ required: false, default: "It's time for the next move" }) private title!: string;
  @Prop({ required: false, default: "Let's have a talk!" }) private subtitle!: string;
  @Prop({
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
  })
  private connect!: Array<WebService>; // TODO: Rename this variable (check usage!), it is unclear
}