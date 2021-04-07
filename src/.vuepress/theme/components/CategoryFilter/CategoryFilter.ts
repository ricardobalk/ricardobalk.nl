import { defineComponent, watch, ref, computed, PropType} from "vue"
import getPageLanguage from "../../mixins/getPageLanguage"

export const CategoryFilter = defineComponent({
  name: "CategoryFilter",
  props: {
    availableCategories: {
      type: Set as PropType<Set<string>>,
      required: true
    }
  },
  setup() {
    const pageLanguage = computed(() => getPageLanguage());
    const chosenCategory = ref("");

    /**
     * onlyShowPostsWithCategory hides or shows posts based on the given category.
     * 
     * @param category - Category of elements' [data-category] to filter on.
     * @example onlyShowPostsWithCategory("Software Development")
     *          Hides all HTML elements except those with `data-category="Software Development"`.
     *          i.e. `<article data-category="Random"> [...] </article>` will be hidden,
     *               `<article data-category="Software Development"> [...] </article>` stays visible.
     */
    const onlyShowPostsWithCategory = (category : string): void => {
      Array.prototype.forEach.call(document.querySelectorAll("[data-category]"), e => {
        e.style.display = (category == "" || e.dataset.category == category) ? "" : "none";
      });
    };

    watch(chosenCategory, (value, oldValue) => {
      if (value !== oldValue) {
        // TODO: Emit a changed value!
      }
    })
    return { pageLanguage, onlyShowPostsWithCategory, chosenCategory };
  }

});

export default CategoryFilter