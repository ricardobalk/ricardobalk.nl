import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "HomeHero" })
export default class HomeHero extends Vue {
  @Prop({ required: true, default: "Ricardo Balk" }) name!: string;
  @Prop({ required: false }) occupation!: string;
  @Prop({ required: false }) tagline!: string;
}