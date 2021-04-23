<template>
  <section class="about" title="Information about Ricardo" tabindex="0">
    <div class="g-row">
      <div class="c-sm-12 c-md-offset-1 c-md-10 c-lg-offset-2 c-lg-8 inner-container">
        <div class="g-row g-justify-center">
          <div class="c-sm-offset-1 c-sm-10 c-md-offset-0 c-md-6 picture">
            <Polaroid :caption="polaroidImage.caption" :image="polaroidImage.path" />
          </div>

          <div class="c-sm-12 c-md-6 text-container">
            <slot>
              <h1>Uh oh!</h1>
              <p>You didn't fill in this slot, so I'm showing some example paragraphs instead.</p>
              <p>
                Sed nibh libero, scelerisque quis viverra in, egestas id magna. Etiam vel dolor vel mauris fringilla
                molestie sodales vitae metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Mauris et efficitur elit.
              </p>
              <p>
                Phasellus malesuada metus porttitor rutrum convallis. Donec convallis tellus felis, nec commodo erat
                lacinia vitae.
              </p>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" src="./About.ts" />
<style lang="stylus" src="./About.styl" />
