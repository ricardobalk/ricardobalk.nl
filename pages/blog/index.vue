<template>
  <NuxtLayout name="blog">
    <template #site-header>
      <OrganismSiteHeader />
    </template>

    <template #default>
      <ContentDoc>
        <template #empty>
          <h1>
            Ricardo's Blog
          </h1>

          <p>
            A collection of articles about web development, software engineering, and other
            things I find interesting.
          </p>
        </template>
      </ContentDoc>
    </template>

    <template #site-footer>
      <OrganismSiteFooter />
    </template>
  </NuxtLayout>
</template>