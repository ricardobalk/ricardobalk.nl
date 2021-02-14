import Vue from "vue";
import Component from "vue-class-component";
import { Page } from "vuepress-types";

@Component
export default class retrievePosts extends Vue {
  retrievePosts(postType: string): Page {
    // @ts-ignore
    let posts = [];

    if (!postType) {
      postType = "blogpost";
    }

    Array.prototype.forEach.call(this.$site.pages, function(page) {
      if (page.frontmatter.type === postType) {
        posts.push(page);
      }
    });

    // @ts-ignore
    return posts;
  }
}
