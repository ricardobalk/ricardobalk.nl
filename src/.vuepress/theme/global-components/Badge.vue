<!--
  Component: Badge

  Description:
    Displays a badge, allows various background colours and
    text is either provided by a slot or prop value.

  Props:
    *type['tip','green','warning','warn','yellow','error','red']
      The type and/or background colour of the badge.
    *text[String]
      The text to be displayed inside the badge. The preferred way
      is to use the slot for this.
    *vertical['baseline','length','sub','super','top',
      'text-top','middle','bottom','text-bottom',
      'initial','inherit']
            Sets the vertical alignment.

  Examples:
    <Badge>Hello World</Badge>
      Shows a green badge with 'Hello World'.

    <Badge text="Hello World"/>
      Shows the same green badge with 'Hello World'.

    <Badge type="warning">Missing configuration</Badge>
      Shows a yellow badge with 'Missing configuration'.

    <Badge type="error" vertical="top">Wrong permissions</Badge>
      Shows a red badge with 'Wrong permissions',
      vertically aligned on top of the current paragraph line.
-->

<template>
  <span class="badge" :class="type" :style="{ 'vertical-align': vertical }"
    ><slot>{{ text }}</slot>
  </span>
</template>

<script lang="ts" src="./Badge.ts" />
<style lang="stylus" src="./Badge.styl" />
