<template>
  <div class="keybaseUserCard" :class="{ loading: !ready }" v-cloak>
    <img
      class="avatar"
      :src="userData.them.pictures.primary.url || ''"
      :title="`${userData.them.profile.full_name}'s profile picture`"
      @load="imagesLoaded"
    />

    <p class="fullName" :data-keybase-username="userData.them.basics.username">
      {{ userData.them.profile.full_name || userData.them.basics.username }}
    </p>

    <span v-if="userData.them.proofs_summary.by_presentation_group" class="socialIcons">
      <span class="social-icon">
        <a
          :href="`https://keybase.io/${userData.them.basics.username}`"
          :title="`Get in touch with ${userData.them.profile.full_name} via Keybase`"
          target="_blank"
        >
          <FontAwesomeIcon class="socialIcon" :icon="['fab', 'keybase']" size="sm" />
        </a>
      </span>
      <span v-for="(proof, index) in userData.them.proofs_summary.by_presentation_group">
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via GitHub`"
          v-if="proof[0].proof_type === 'github'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'github']" size="sm"
        /></a>
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via Reddit`"
          v-if="proof[0].proof_type === 'reddit'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'reddit']" size="sm"
        /></a>
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via Twitter`"
          v-if="proof[0].proof_type === 'twitter'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'twitter']" size="sm"
        /></a>
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via Mastodon`"
          v-if="proof[0].proof_type === 'mastodon.social'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'mastodon']" size="sm"
        /></a>
        <!-- <a :href="proof[0].service_url" v-if="proof[0].proof_type === 'generic_web_site'"><FontAwesomeIcon class="socialIcon" :icon="['fas', 'globe']" size="sm"/></a> -->
      </span>
    </span>

    <p
      v-if="userData.them.profile.bio"
      class="bio"
      :title="`Biography of ${userData.them.profile.full_name}, retrieved from Keybase`"
    >
      {{ userData.them.profile.bio }}
    </p>
  </div>
</template>

<script lang="ts" src="./KeybaseUserCard.ts" />
<style lang="stylus" src="./KeybaseUserCard.styl" />
