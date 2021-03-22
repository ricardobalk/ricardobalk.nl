import { defineComponent, onMounted, watch } from "vue"
import { useRouter } from 'vue-router'

// TODO: Refactor.
export const Filter = defineComponent({
  name: "Filter",
  setup() {
    const router = useRouter()
    let availableCategories: Array<string> = [];
    let chosenCategory = "";
  
    const filterPosts = ({ category }: { category: string }): void => {
      Array.prototype.forEach.call(document.querySelectorAll("article[data-category]"), e => {
        e.style.display = category == "" || e.dataset.category == category ? "" : "none";
      });
    };
  
    const fetchCategories = () : Array<string> => {
      let categories: Set<string> = new Set();
      Array.prototype.forEach.call(document.querySelectorAll("article[data-category]"), e => {
        categories.add(e.dataset.category);
      });
      return Array.from(categories);
    }
  
    onMounted(() => {
      availableCategories = fetchCategories();
    })

    watch(router.currentRoute, (value, oldValue) => {
      if (value.path !== oldValue.path) {
        availableCategories = fetchCategories();
      }
    })
    return { availableCategories, chosenCategory, filterPosts };
  }

});

export default Filter