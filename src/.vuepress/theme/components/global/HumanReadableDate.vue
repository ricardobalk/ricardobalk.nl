<template>
  <span v-if="date" class="human-readable-date">{{ prefix }} {{ humanFormatted }} {{ suffix }}</span>
</template>

<script lang="js" src="./HumanReadableDate.js" />
