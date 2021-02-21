import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Service from "@theme/components/Home/Service.vue";
import ServiceDetails from "@theme/components/Home/Service.vue";

@Component({ name: "Services", components: { Service } })
export default class Services extends Vue {
  @Prop({ required: false, default: "Things I could help you with" }) title!: string;
  @Prop({
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
    ],
  })
  services!: Array<ServiceDetails>;
}