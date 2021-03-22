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
      <div v-for="(category, id) in categories" :key="id">
        <label :for="id" class="container"
          >{{ category }}
          <input type="radio" :id="id" :value="category" v-model="chosen" />
          <span class="checkmark"></span>
        </label>
      </div>
    </form>
  </div>
</template>

<script lang="ts" src="./Filter.ts" />
<style lang="stylus" src="./Filter.styl" />