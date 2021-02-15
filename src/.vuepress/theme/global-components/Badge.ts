import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "Badge" })
export default class Badge extends Vue {
  @Prop({ type: String, required: false, default: "tip" }) private type!: string;
  @Prop({ type: String, required: false, default: "" }) private text!: string;
  @Prop({ type: String, required: false, default: "top" }) private vertical!: string;
}