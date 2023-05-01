<template>
  <div class="icon">
    <FontAwesomeIcon :icon="faIcon" />
  </div>
</template>

<script setup lang="ts">
  import { FontAwesomeIcon }                                             from  "@fortawesome/vue-fontawesome";
  import { library, IconDefinition }                                     from  "@fortawesome/fontawesome-svg-core";
  import { faGithub, faLinkedin }                                        from  "@fortawesome/free-brands-svg-icons";
  import { faChevronLeft, faCode, faCoffee, faHeart, faPaste, faPhone }  from  "@fortawesome/free-solid-svg-icons";
  
  const iconNames : { [ name: string ] : IconDefinition } = {
    'chevron-left': faChevronLeft,
    'code':         faCode,
    'coffee':       faCoffee,
    'github':       faGithub,
    'heart':        faHeart,
    'linkedin':     faLinkedin,
    'pasteboard':   faPaste,
    'phone':        faPhone,
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