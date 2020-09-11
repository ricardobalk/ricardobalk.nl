<template>
  <div class="category-filter container">
    <form @change="filterPosts({ category: chosen })">
      <span v-if="$lang === 'nl'">Filteren op categorie:</span>
      <span v-else-if="$lang === 'de'">Nach Kategorie filtern:</span>
      <span v-else>Filter by category:</span>
      <label for="-1" class="container">
        <template v-if="$lang === 'nl'">Alles</template>
        <template v-else-if="$lang === 'de'">Alle anzeigen</template>
        <template v-else>Everything</template>
        <input type="radio" id="-1" value="" v-model="chosen" />
        <span class="checkmark"></span>
      </label>
      <template v-for="(category, id) in categories">
        <label :for="id" class="container"
          >{{ category }}
          <input type="radio" :id="id" :value="category" v-model="chosen" />
          <span class="checkmark"></span>
        </label>
      </template>
    </form>
  </div>
</template>

<style lang="stylus">
  .category-filter
    margin 0 auto 1em
    padding 0 1.15em
    font-size .9em
    font-weight 600
    line-height .9em
    color #666

    span
      margin-right .5em

    form, label
      cursor pointer

    form
      display flex
      span
        cursor default

    label
      margin-left .33em
      margin-right .5em

  .container
  	display block
  	position relative
  	padding-left 20px
  	margin-bottom 12px
  	cursor pointer
  	user-select none
  	input
  		position absolute
  		opacity 0
  		cursor pointer
  		height 0
  		width 0
  		&:checked
  			& ~ .checkmark
  				background-color #2196F3
  				&:after
  					display block

  	&:hover
  		input
  			& ~ .checkmark
  				//background-color #ccc
  	.checkmark
  		&:after
  			top 3px
  			left 3px
  			width 4px
  			height 4px
  			border-radius 50%
  			background white
  .checkmark
  	position absolute
  	top 0
  	left 0
  	height 10px
  	width 10px
  	background-color #eee
  	border-radius 50%
  	&:after
  		content ""
  		position absolute
  		display none


  @media screen and (prefers-color-scheme dark)
    .container
      .checkmark
        background-color #252525
      input
        &:checked ~ .checkmark
          background-color #666
</style>

<script lang="ts">
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
</script>
