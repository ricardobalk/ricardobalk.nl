
  import { Vue, Component, Prop } from "vue-property-decorator";

interface ImageProperties extends Record<string, string> {
    path: string;
    description: string;
  }

  @Component({ name: "ProductAndProcess" })
  export default class ProductAndProcess extends Vue {
    @Prop({ required: true, default: "You forgot to add a title here\nPlease add a title." }) private title!: string;
    @Prop({ required: true, default: "You forgot to add the subtitle here. Please add a subtitle." })
    private subtitle!: string;
    @Prop({
      required: true,
      default: [
        "You forgot to add some text, it can be added via props",
        "Please take a look in the Vue component to see which props and types are expected.",
      ],
    })
    private text!: Array<string>[2];
    @Prop({
      required: true,
      default: {
        path: "https://placehold.it/1920x1080",
        description: "An example image.",
      },
    })
    private image!: ImageProperties;
  }