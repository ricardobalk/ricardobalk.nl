import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import SuccessStory from "@theme/components/Home/SuccessStory.vue";
import Story from "@theme/components/Home/SuccessStory.vue";

@Component({ name: "SuccessStories", components: { SuccessStory } })
export default class SuccessStories extends Vue {
  @Prop({ required: true, default: "Success Stories" }) private title!: string;
  @Prop({ required: true, default: "What others say about my work" }) private subtitle!: string;
  @Prop({
    required: true,
    default: [
      {
        name: "John Doe",
        title: "Example person",
        story: "You might have forgotten to add stories.",
        avatar: "/assets/img/home/success-stories/empty.png",
      },
      {
        name: "John Travolta",
        title: "Example person",
        story: "Stories can be added from the index file (in Markdown).",
        avatar: "/assets/img/home/success-stories/empty.png",
      },
      {
        name: "Johnny Cash",
        title: "Example person",
        story: "The front-matter is the right place to add them.",
        avatar: "/assets/img/home/success-stories/empty.png",
      },
    ],
  })
  private stories!: Array<Story>;
}