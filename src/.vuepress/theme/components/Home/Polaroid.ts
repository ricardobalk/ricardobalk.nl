import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "Polaroid" })
export default class Polaroid extends Vue {
  @Prop({ required: true, default: "https://placehold.it/500x500" }) private image!: string;
  @Prop({ required: true, default: "No caption given, did you forget to pass props?" }) private caption!: string;
}