<!-- Vue 3 iOS-style switch (checkbox), with support for using it with v-model -->

<template>
  <span class="switch">
    <input
      type="checkbox"
      role="switch"
      :id="props.id"
      :aria-label="props.label"
      :aria-checked="props.modelValue"
      :checked="props.modelValue"
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
    label: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const onChangeHandler = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const value = target.checked;

    emit('update:modelValue', value);
  };
</script>

<style scoped>
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
      width: 0.0625rem;
      height: 0.0625rem;
      opacity: 0;
      clip-path: inset(50%);
    }

    input:focus-visible + .indicator-container {
      outline: 0.125rem solid currentColor;
      outline-offset: 0.25rem;
      border-radius: 1rem;
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
