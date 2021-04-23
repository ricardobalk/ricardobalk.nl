import { defineComponent, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";
import { PageOptions } from "@vuepress/core";

export const Articles = defineComponent({
  name: "Articles",
  components: { FontAwesomeIcon, DateTime },
  props: {
    posts: {
      type: Object as PropType<PageOptions>,
      required: true,
      default: {},
    },
    showExcerpts: {
      type: Boolean,
      required: false,
    },
  },
  created() {
    library.add(faCalendarAlt);
    library.add(faChevronRight);
  },
  setup() {
    return { DateTime };
  },
});

export default Articles;
