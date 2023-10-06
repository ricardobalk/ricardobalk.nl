<script setup>
  const { locale, t } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">English</option>
        <option value="nl">Nederlands</option>
      </select>
      <p>{{ t('welcome') }}</p>
    </form>
  </div>
</template>