<!-- Vue 3 iOS-style switch (checkbox), with support for using it with v-model -->

<template>
  <span class="switch">
    <input
      type="checkbox"
      :id="props.id"
      :value="modelValue"
      :checked="checkedVal"
      @change="onChangeHandler"
    />
    <label class="indicator-container" aria-hidden="true" :for="props.id">
      <span class="indicator" />
    </label>
  </span>
</template>

<script setup lang="ts">
  const props = defineProps({
    id: {
      type: String,
      required: true,
      default: 'switch',
    },
    modelValue: {
      type: Boolean,
      required: true
    },
  });

  const checkedVal = computed(() => {
    // This is a workaround for the following issue:
    // The checkbox is checked by default, however, the modelValue could undefined,
    // due to reactivity issues. This means that the checkbox will be unchecked
    // by default, even though the modelValue passed by the parent is true.
    return props.modelValue || true;
  });

  const emit = defineEmits(['update:modelValue']);

  const onChangeHandler = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const value = target.checked;

    emit('update:modelValue', value);
  };
</script>

<style lang="postcss" scoped>
  .switch {
    display: inline-block;
    position: relative;
    width: 2.5rem;
    height: 1.25rem;
    font-size: 0;
    line-height: 0;
    cursor: pointer;

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      opacity: 0;
      visibility: hidden;
    }
  }

  .indicator-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: #ccc;
    transition: background-color 0.2s ease-in-out;

    &::after {
      content: '';
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: #fff;
      transition: left 0.2s ease-in-out;
    }
  }

  .switch input:checked {
    ~ .indicator-container .indicator {
      background-color: #27b611;
    }

    ~ .indicator-container .indicator::after {
      left: 1.5rem;
    }
  }
</style>