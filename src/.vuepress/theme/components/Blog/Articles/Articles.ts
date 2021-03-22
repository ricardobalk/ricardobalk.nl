import { defineComponent, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HumanReadableDate from "../../global/HumanReadableDate.vue";
import languageSelection from "../../../mixins/languageSelection";
import { PageOptions } from "@vuepress/core"

export const Articles = defineComponent({
  name: "Articles",
  components: { FontAwesomeIcon },
  //components: { FontAwesomeIcon, HumanReadableDate, languageSelection },
  props: {
    posts: {
      type: Object as PropType<PageOptions>,
      required: true,
      default: {}
    },
    showExcerpts: {
      type: Boolean,
      required: false
    }
  },
  created() {
    library.add(faCalendarAlt);
    library.add(faChevronRight);
  }
})

export default Articles