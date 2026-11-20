<template>
  <FontAwesomeIcon :icon="faIcon" :size="props.size" class="icon" />
</template>

<script setup lang="ts">
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import type { FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faGithub, faLinkedin, faVuejs, faGolang, faGitAlt } from "@fortawesome/free-brands-svg-icons";
  import {
    faChevronLeft, faCode,  faCoffee,
    faHeart,       faPaste, faPhone,
    faSun,         faMoon, faArrowRight
  }  from  "@fortawesome/free-solid-svg-icons";
  
  const iconNames = {
    'arrow-right': faArrowRight,
    'chevron-left': faChevronLeft,
    'code':         faCode,
    'coffee':       faCoffee,
    'github':       faGithub,
    'heart':        faHeart,
    'linkedin':     faLinkedin,
    'vuejs':        faVuejs,
    'golang':       faGolang,
    'git':          faGitAlt,
    'pasteboard':   faPaste,
    'phone':        faPhone,
    'sun':          faSun,
    'moon':         faMoon,
  } as const;

  interface Props {
    iconName: string,
    size?:    FontAwesomeIconProps['size'],
  }
  const props = withDefaults(defineProps<Props>(), {
    iconName: 'code',
    size:     '1x',
  });  

  const faIcon = computed(() => {
    return iconNames[props.iconName as keyof typeof iconNames] ?? faCode;
  });

  library.add(faIcon.value);
</script>
