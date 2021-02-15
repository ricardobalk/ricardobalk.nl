import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "HomeHero" })
export default class HomeHero extends Vue {
  @Prop({ required: true, default: "Ricardo Balk" }) private name!: string;
  @Prop({ required: false }) private occupation!: string;
  @Prop({ required: false }) private tagline!: string;
}