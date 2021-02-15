<template>
  <router-link class="nav-link" :to="link" @focusout.native="focusoutAction" v-if="!isExternal(link)" :exact="exact">{{
    item.text
  }}</router-link>
  <a
    v-else
    :href="link"
    @focusout="focusoutAction"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <OutboundLink />
  </a>
</template>

<script lang="js" src="./NavLink.js" />
