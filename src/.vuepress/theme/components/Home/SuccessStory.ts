import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

export interface Story extends Record<string, string> {
  name: string;
  title: string;
  story: string;
  avatar: string;
}

@Component({ name: "SuccessStory" })
export default class SuccessStory extends Vue {
  @Prop({
    required: true,
    default: {
      name: "Story missing",
      title: "Did you set up your binds correctly?",
      story:
        "A bind ensures that data is transferred between components, in this case from 'SuccessStories' to 'SuccessStory'. There might be going something wrong there.",
      avatar: "/assets/img/home/success-stories/empty.png",
    },
  })
  story!: Story;
}