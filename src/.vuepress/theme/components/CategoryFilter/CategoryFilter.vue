<template>
  <div class="category-filter">
    <form @change="onlyShowPostsWithCategory(chosenCategory)">
      <span v-if="pageLanguage === 'nl-NL'">Filteren op categorie:</span>
      <span v-else-if="pageLanguage === 'de-DE'">Nach Kategorie filtern:</span>
      <span v-else>Filter by category:</span>
      
      <label for="-1" class="container">
        <template v-if="pageLanguage === 'nl-NL'">Alles</template>
        <template v-else-if="pageLanguage === 'de-DE'">Alle anzeigen</template>
        <template v-else>Everything</template>
        <input type="radio" id="-1" value="" v-model="chosenCategory" />
        <span class="checkmark"></span>
      </label>
      <div v-for="(category, id) in availableCategories" :key="id">
        <label :for="id" class="container"
          >{{ category }}
          <input type="radio" :id="id" :value="category" v-model="chosenCategory" />
          <span class="checkmark"></span>
        </label>
      </div>
    </form>
  </div>
</template>

<script lang="ts" src="./CategoryFilter.ts" />
<style lang="stylus" src="./CategoryFilter.styl" />