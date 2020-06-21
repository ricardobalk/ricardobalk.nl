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
          <FontAwesomeIcon class="socialIcon" :icon="['fab', 'keybase']" />
        </a>
      </span>
      <span v-for="(proof, index) in userData.them.proofs_summary.by_presentation_group">
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via GitHub`"
          v-if="proof[0].proof_type === 'github'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'github']"
        /></a>
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via Reddit`"
          v-if="proof[0].proof_type === 'reddit'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'reddit']"
        /></a>
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via Twitter`"
          v-if="proof[0].proof_type === 'twitter'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'twitter']"
        /></a>
        <a
          :href="proof[0].service_url"
          target="_blank"
          :title="`Get in touch with ${userData.them.profile.full_name} via Mastodon`"
          v-if="proof[0].proof_type === 'mastodon.social'"
          ><FontAwesomeIcon class="socialIcon" :icon="['fab', 'mastodon']"
        /></a>
        <!-- <a :href="proof[0].service_url" v-if="proof[0].proof_type === 'generic_web_site'"><FontAwesomeIcon class="socialIcon" :icon="['fas', 'globe']" /></a> -->
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

<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faTwitter, faGithub, faReddit, faMastodon, faKeybase } from "@fortawesome/free-brands-svg-icons";
  // import { faGlobe } from "@fortawesome/free-solid-svg-icons";

  @Component({ name: "KeybaseUserCard", components: { FontAwesomeIcon } })
  export default class KeybaseUserCard extends Vue {
    @Prop({ required: true, default: "ricardobalk" }) private username!: string;
    private ready?: Boolean = false;
    private userData?: object = {
      them: {
        basics: {
          username: "",
        },
        profile: {
          full_name: "Fetching data...",
          bio: "Fetching bio from the Keybase servers...",
        },
        pictures: {
          primary: {
            url: "",
          },
        },
        proofs_summary: {},
      },
    };

    created() {
      library.add(faTwitter, faGithub, faReddit, faMastodon, faKeybase);

      let keybaseAPIEndpoint = `https://keybase.io/_/api/1.0/user/lookup.json?username=${this.username}&fields=basics,profile,proofs_summary,pictures`,
        self = this; // create a closure to access component in the callback below

      fetch(keybaseAPIEndpoint)
        .then(response => response.json())
        .then(data => (self.userData = data));
    }

    imagesLoaded() {
      this.ready = true;
    }
  }
</script>

<style lang="stylus" scoped>
  .keybaseUserCard
    border 1px solid #ccc
    border-radius 2%
    padding 1.75rem 2rem
    text-align center
    width 18rem
    opacity 1
    transition transform .5s
    transform translateX(0)

    &[v-cloak], &.loading
      opacity 0
      transform translateX(-300%)

    @media screen and (prefers-color-scheme dark)
      border 1px solid #333

    img.avatar
      display block
      border-radius 50%
      margin 0 auto .75rem
      max-width 60%
      max-height 33%

    .fullName
      font-weight 700
      margin 0

    .bio
      max-height 10em
      overflow hidden
      margin .75em 0

    .socialIcons
      display block
      font-size 1.2rem
      margin .5rem 0

      .socialIcon
        color #333
        @media screen and (prefers-color-scheme dark)
          color #aaa

        &:hover
          color dodgerblue
          @media screen and (prefers-color-scheme dark)
            color yellow
</style>
