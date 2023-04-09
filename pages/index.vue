<template>
  <NuxtLayout name="default">
    <template #site-header>
      <Header />
    </template>

    <template #default>
      <LoremIpsum :paragraphCount="15" />
    </template>

    <template #site-footer>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<style lang="postcss">
main {
  @apply gap-2 p-4;
}
</style>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';
import LoremIpsum from '@/components/molecules/LoremIpsum.vue';

definePageMeta({
  layout: false,
});
</script>