export default {
  methods: {
    retrievePosts(postType) {
      let posts = [];

      if(!postType) { postType = "blogpost" }

      Array.prototype.forEach.call(this.$site.pages, function(page) {
        if(page.frontmatter.type === postType) { posts.push(page); }
      });

      return posts;
    }
}
};