<template>
  <FontAwesomeIcon :icon="faIcon" :size="props.size" class="icon" />
</template>

<script setup lang="ts">
  import { FontAwesomeIcon, FontAwesomeIconProps }  from  "@fortawesome/vue-fontawesome";
  import { library, IconDefinition }                from  "@fortawesome/fontawesome-svg-core";
  import { faGithub, faLinkedin }                   from  "@fortawesome/free-brands-svg-icons";
  import {
    faChevronLeft, faCode,  faCoffee,
    faHeart,       faPaste, faPhone,
    faSun,         faMoon
  }  from  "@fortawesome/free-solid-svg-icons";
  
  const iconNames : { [ name: string ] : IconDefinition } = {
    'chevron-left': faChevronLeft,
    'code':         faCode,
    'coffee':       faCoffee,
    'github':       faGithub,
    'heart':        faHeart,
    'linkedin':     faLinkedin,
    'pasteboard':   faPaste,
    'phone':        faPhone,
    'sun':          faSun,
    'moon':         faMoon,
  } as const;

  interface Props {
    iconName: keyof typeof iconNames,
    size:     FontAwesomeIconProps['size'],
  }
  const props = withDefaults(defineProps<Props>(), {
    iconName: 'code',
    size:     '1x',
  });  

  library.add(iconNames[props.iconName]);

  const faIcon = computed(() => {
    return iconNames[props.iconName];
  });
</script>