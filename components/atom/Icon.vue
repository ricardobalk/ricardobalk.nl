<template>
  <div class="icon">
    <FontAwesomeIcon :icon="faIcon" />
  </div>
</template>

<script setup lang="ts">
  import { FontAwesomeIcon }                   from  "@fortawesome/vue-fontawesome";
  import { library, IconDefinition }           from  "@fortawesome/fontawesome-svg-core";
  import { faMastodon, faGithub, faLinkedin }  from  "@fortawesome/free-brands-svg-icons";
  import { faHeart, faCode, faCoffee }         from  "@fortawesome/free-solid-svg-icons";
  
  const iconNames : { [ name: string ] : IconDefinition } = {
    'code':     faCode,
    'coffee':   faCoffee,
    'github':   faGithub,
    'heart':    faHeart,
    'linkedin': faLinkedin,
    'mastodon': faMastodon,
  }

  interface Props {
    iconName: string,
  }

  const props = defineProps<Props>();

  library.add(iconNames[props.iconName]);

  const faIcon = computed(() => {
    return iconNames[props.iconName];
  });
</script>