<template>
  <section class="about" title="Information about Ricardo" tabindex="0">
    <div class="grid-x">
      <div class="small-12 medium-offset-1 medium-10 large-offset-2 large-8 cell inner-container">
        <div class="grid-x">
          <div class="small-offset-1 small-10 medium-offset-0 medium-6 cell picture">
            <Polaroid :caption="polaroidImage.caption" :image="polaroidImage.path" />
          </div>

          <div class="small-12 medium-6 cell text-container">
            <slot>
              <h1>Uh oh!</h1>
              <p>
                You didn't fill in this slot, so I'm showing some example paragraphs instead.
              </p>
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
