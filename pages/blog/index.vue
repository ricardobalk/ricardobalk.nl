<template>
  <NuxtLayout name="default">
    <template #site-header>
      <OrganismSiteHeader />
    </template>

    <template #default>
      <ContentDoc />
    </template>

    <template #site-footer>
      <OrganismSiteFooter />
    </template>
  </NuxtLayout>
</template>