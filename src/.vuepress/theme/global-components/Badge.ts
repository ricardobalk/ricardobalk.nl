import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "Badge" })
export default class Badge extends Vue {
  @Prop({ type: String, required: false, default: "tip" }) type!: string;
  @Prop({ type: String, required: false, default: "" }) text!: string;
  @Prop({ type: String, required: false, default: "top" }) vertical!: string;
}