import { Vue, Component, Watch } from "vue-property-decorator";

@Component({ name: "ElementFilter" })
export default class ElementFilter extends Vue {
  categories: Array<string> = [];
  chosen = "";

  filterPosts = ({ category }: { category: string }): void => {
    Array.prototype.forEach.call(document.querySelectorAll("article[data-category]"), e => {
      e.style.display = category == "" || e.dataset.category == category ? "" : "none";
    });
  };

  fetchCategories(): Array<string> {
    let categories: Set<string> = new Set();
    Array.prototype.forEach.call(document.querySelectorAll("article[data-category]"), e => {
      categories.add(e.dataset.category);
    });
    return Array.from(categories);
  }

  mounted() {
    this.categories = this.fetchCategories();
  }

  @Watch("$route")
  onPropertyChanged(value: string, oldValue: string) {
    if (value !== oldValue) {
      this.categories = this.fetchCategories();
    }
  }
}