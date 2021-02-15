import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export interface ServiceDetails extends Object {
  title: string;
  caption: string;
  icon: string;
}

@Component({ name: "Service", components: { fas, FontAwesomeIcon } })
export default class Service extends Vue {
  created() {
    library.add(fas); // TODO: Only add required icons to the library
  }

  @Prop({
    required: true,
    default: {
      title: "Service missing",
      caption: "Did you set up your binds correctly?",
      icon: "times",
    },
  })
  private service!: ServiceDetails;
}