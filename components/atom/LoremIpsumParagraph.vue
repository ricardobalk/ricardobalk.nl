<!-- Renders a random lorem ipsum paragraph. -->
<template>
  {{ paragraph }}
</template>

<script setup lang="ts">
  const lipsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices vulputate blandit. Etiam vulputate pellentesque lacus, sit amet pharetra erat finibus et. Ut hendrerit libero in est dictum, accumsan congue tellus sollicitudin. Integer ante arcu, sodales quis dapibus eu, consectetur ac magna. Vivamus porta diam id erat ullamcorper, sit amet suscipit nisl faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor interdum nibh sit amet lacinia. Donec et turpis et sem tempus porta.',
    'Fusce feugiat nisl mauris, nec aliquet metus imperdiet ac. Etiam blandit imperdiet lacus eu rhoncus. Duis eu convallis eros. Suspendisse dictum felis ipsum, ut ultrices erat imperdiet id. Curabitur pellentesque non odio ac eleifend. Morbi commodo augue turpis, quis tincidunt orci aliquet quis. Donec eros lorem, dictum in elementum a, tincidunt sit amet quam. Duis laoreet ex at ipsum tristique egestas. Proin in pulvinar justo, at consectetur velit. Donec vitae mi lorem.',
    'Morbi cursus, tellus vitae sollicitudin molestie, quam risus varius lorem, id elementum eros nisl eu tortor. Integer imperdiet scelerisque risus eu interdum. Proin rutrum consectetur interdum. Donec placerat laoreet augue, ut consequat nibh pretium et. Aenean ante neque, blandit sit amet fringilla ut, congue at nibh. Vestibulum eget scelerisque neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id pulvinar lorem.',
    'Quisque id purus sapien. Etiam ultrices ipsum eu dui ornare molestie. Proin tempus nec nisi eget cursus. Suspendisse interdum velit eu ex sodales, at consequat nunc lobortis. Donec bibendum lectus est. Cras venenatis porta libero. Etiam non enim consequat, semper nulla auctor, lacinia lectus. Proin sodales viverra nulla et sagittis. Suspendisse dignissim augue elit, eget auctor mi congue in. Fusce sodales quam eu nibh semper aliquet a non ligula.',
    'Phasellus hendrerit aliquam porttitor. Praesent sagittis velit et sapien congue, quis sollicitudin felis pellentesque. Nulla mattis consequat est, ultricies ultrices ex semper vel. Cras lobortis ac ligula non ultrices. Donec interdum in mauris at consectetur. Sed ac consequat quam. Aliquam ac ante ligula. Praesent lacinia molestie est. Ut tincidunt, libero at interdum vulputate, ipsum quam mattis dui, id cursus velit lectus vel mi. Quisque ultrices ex eget malesuada pellentesque. Duis non mi eu ante hendrerit vulputate non ut nisi. Donec eu hendrerit nibh. Cras consectetur hendrerit turpis, vel consequat mi suscipit ut.'
  ];

  const paragraph = computed(() => {
    return lipsum[Math.floor(Math.random() * lipsum.length)];
  });
</script>