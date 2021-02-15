import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "Hero" })
export default class Hero extends Vue {
  @Prop({ required: false }) private image!: string;
  @Prop({ required: false }) private imageDark!: string;
  @Prop({ required: false }) private title!: string;
  @Prop({ required: false }) private subtitle!: string;

  hasImage() {
    return !!this.image;
  }

  hasDarkImage() {
    return !!this.imageDark;
  }

  get style(): string {
    let defaultHeroImage: string = "/assets/img/site/home/hero.svg",
      imageLocation: string = this.hasImage() ? this.image : defaultHeroImage,
      darkImageLocation: string = this.hasDarkImage() ? this.imageDark : imageLocation;
    return `--image: url("${imageLocation}"); --image-dark: url("${darkImageLocation}");`;
  }
}