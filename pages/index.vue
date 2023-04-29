<template>
  <NuxtLayout name="home">
    <template #site-header>
      <OrganismSiteHeader />
    </template>

    <template #default>
      <ContentDoc tag="main" />
    </template>

    <template #site-footer>
      <OrganismSiteFooter />
    </template>
  </NuxtLayout>
</template>