import { Vue, Component, Prop } from "vue-property-decorator";
import Polaroid from "./Polaroid.vue";

interface polaroidImageData extends Record<string, string> {
  path: string;
  caption: string;
}

@Component({ name: "About", components: { Polaroid } })
export default class About extends Vue {
  @Prop({
    required: true,
    default: { path: "https://placehold.it/500x500", caption: "You might have forgotten to add an image." },
  })
  private polaroidImage!: polaroidImageData;
}