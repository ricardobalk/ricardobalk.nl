import { Vue, Component } from 'vue-property-decorator'

@Component
export default class languageSelection extends Vue {
  get language(): string {
    /* Replaces "de" with "en" to show English posts on German version. */
    return this.$lang === "de" ? "en" : this.$lang;
  }
}