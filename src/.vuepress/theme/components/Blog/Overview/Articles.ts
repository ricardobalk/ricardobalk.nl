import { Vue, Component, Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import HumanReadableDate from "@theme/global-components/HumanReadableDate.vue";
import languageSelection from "../../../mixins/languageSelection";
import ElementFilter from "@theme/components/ElementFilter.vue";
import { PageOptions } from "vuepress-types";

@Component({
  name: "Articles",
  components: { FontAwesomeIcon, HumanReadableDate, ElementFilter },
  mixins: [languageSelection],
})
export default class Articles extends Vue {
  @Prop({ required: true, default: {} }) private posts!: PageOptions;
  @Prop({ required: true, default: "" }) private assets!: string;
  @Prop({ required: false, default: true }) private showExcerpts!: boolean;

  created() {
    library.add(faCalendarAlt);
    library.add(faChevronRight);
  }
}