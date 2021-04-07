<template>
  <form @change="onlyShowPostsWithCategory(chosenCategory)" class="category-filter">
    <span v-if="pageLanguage === 'nl-NL'">Filteren op categorie:</span>
    <span v-else-if="pageLanguage === 'de-DE'">Nach Kategorie filtern:</span>
    <span v-else>Filter by category:</span>
    <label for="-1" class="option">
      <template v-if="pageLanguage === 'nl-NL'">Alles</template>
      <template v-else-if="pageLanguage === 'de-DE'">Alle anzeigen</template>
      <template v-else>Everything</template>
      <input type="radio" id="-1" value="" v-model="chosenCategory" />
      <span class="checkmark"></span>
    </label>
    <label v-for="(category, id) in availableCategories" :key="id" :for="id" class="option"
      >{{ category }}
      <input type="radio" :id="id" :value="category" v-model="chosenCategory" />
      <span class="checkmark"></span>
    </label>
  </form>
</template>

<script lang="ts" src="./CategoryFilter.ts" />
<style lang="stylus" src="./CategoryFilter.styl" />