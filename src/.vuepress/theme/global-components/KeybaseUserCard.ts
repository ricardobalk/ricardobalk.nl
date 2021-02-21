import { Vue, Component, Prop } from "vue-property-decorator";
import fetch from "cross-fetch";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faGithub, faReddit, faMastodon, faKeybase } from "@fortawesome/free-brands-svg-icons";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";

@Component({ name: "KeybaseUserCard", components: { FontAwesomeIcon } })
export default class KeybaseUserCard extends Vue {
  @Prop({ required: true, default: "ricardobalk" }) private username!: string;
  private ready?: Boolean = false;
  userData?: Record<string, any> = {
    them: {
      basics: {
        username: "",
      },
      profile: {
        full_name: "Fetching data...",
        bio: "Fetching bio from the Keybase servers...",
      },
      pictures: {
        primary: {
          url: "",
        },
      },
      proofs_summary: {},
    },
  };

  created() {
    library.add(faTwitter, faGithub, faReddit, faMastodon, faKeybase);

    let keybaseAPIEndpoint = `https://keybase.io/_/api/1.0/user/lookup.json?username=${this.username}&fields=basics,profile,proofs_summary,pictures`,
      self = this; // create a closure to access component in the callback below

    fetch(keybaseAPIEndpoint)
      .then(response => response.json())
      .then(data => (self.userData = data));
  }

  imagesLoaded() {
    this.ready = true;
  }
}