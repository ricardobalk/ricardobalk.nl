import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Tooltip extends Vue {
  @Prop({ required: true, default: "This tooltip is missing its prop value" }) text!: string;
}