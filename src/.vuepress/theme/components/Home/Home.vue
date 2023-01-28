<template>
  <main class="home" aria-labelledby="main-title">
    <Hero :name="heroText[0]" :occupation="heroText[1]" :tagline="heroText[2]" />
    <About :polaroidImage="polaroidImage">
      <Content class="theme-default-content custom" />
    </About>
    <ProductAndProcess
      :title="process.title"
      :image="process.image"
      :subtitle="process.subtitle"
      :text="process.text"
    />
    <SuccessStories
      :stories="successStories.stories"
      :title="successStories.title"
      :subtitle="successStories.subtitle"
    />
    <Conclusion :title="callToAction.text[0]" :subtitle="callToAction.text[1]" :socialLinks="callToAction.connect" />
  </main>
</template>

<script lang="ts" src="./Home.ts" />
<style lang="stylus" src="./Home.styl" />
