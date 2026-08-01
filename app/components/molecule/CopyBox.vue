<!-- Input box with Font Awesome pasteboard image that copies text to clipboard on click -->

<template>
  <div class="copy-box" ref="root">

    <div class="input-container">
      <input type="text" :value="props.value" readonly />
      <button @click="handleClick" @mouseenter="showTooltip(true)" @mouseleave="showTooltip(false)">
        <AtomIcon iconName="pasteboard" />
      </button>
    </div>

    <span class="tooltip">
      {{ tooltipText }}
      <div class="arrow" data-popper-arrow />
    </span>
  </div>
</template>


<script setup lang="ts">
  import { createPopper } from '@popperjs/core';

  interface Props {
    value: string; // The text to copy to clipboard
  }

  const props = defineProps<Props>();

  const root = ref<HTMLElement | null>(null);
  const tooltipText = ref<string>('Click to copy');

  const showTooltip = (show: boolean) => {
    if (!root.value) {
      return;
    }

    const hoverTarget    = root.value.querySelector<HTMLElement>('button');
    const tooltipElement = root.value.querySelector<HTMLElement>('.tooltip');
    if (!tooltipElement || !hoverTarget) {
      return;
    }

    if (show) {
      tooltipElement.setAttribute('data-show', '');

      createPopper(hoverTarget, tooltipElement, {
        placement: 'right',
        modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
      });

      return;
    }

    tooltipElement.removeAttribute('data-show');
  }

  const createTimeout = async (ms: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  const copyText = async (value: string) => {
    try {
      if (!navigator.clipboard) {
        return;
      }
      await navigator.clipboard.writeText(value);
    } catch (err: unknown) {
      throw new Error(`Could not copy text: ${err}`);
    }
  }

  const handleClick = async (event: MouseEvent) => {
    event.preventDefault();

    if (!root.value) {
      return;
    }
    const inputContainer = root.value.querySelector<HTMLElement>('.input-container');

    if (!inputContainer) {
      return;
    }

    const inputbox = root.value.querySelector<HTMLInputElement>('input[type="text"]');

    if (!inputbox) {
      return;
    }

    // Remove any existing classes
    inputContainer.classList.remove('success');
    inputContainer.classList.remove('error');

    // Select the text in the input box as if the user had highlighted it.
    inputbox.select();

    try {
      // Copy the text to the clipboard.
      await copyText(props.value);
      // Add a success class to the input box, and change the tooltip text.
      inputContainer.classList.add('success');
      tooltipText.value = 'Copied!';
    } catch (err) {
      inputContainer.classList.add('error');
      tooltipText.value = 'Error copying text. Try using Ctrl+C.';
    } finally {
      // Wait 5 seconds, then change everything back to normal.
      await createTimeout(5000);
      inputbox.blur();
      tooltipText.value = 'Click to copy';
      inputContainer.classList.remove('error');
      inputContainer.classList.remove('success');
    }
  }
</script>

<style lang="postcss">
.copy-box {
  .input-container {
    @apply flex gap-2 border border-gray-300 rounded-md px-2 py-1;

    &.success,
    &.error {
      @apply border-2;
    }

    &.success {
        @apply border-green-500 text-green-800;
        &, input[type="text"] {
          @apply bg-green-100;
        }
      }
  
    &.error {
      @apply border-red-500 text-red-700;
    }

    input[type="text"] {
      @apply w-full text-gray-500 outline-none;
    }

    .icon {
      @apply text-gray-500 hover:cursor-pointer hover:text-gray-700;
    }
  }

  .tooltip {
    @apply text-gray-200 text-xs hidden px-2 py-1 bg-black rounded-md;
    &[data-show] {
      @apply block;
    }

    .arrow,
    .arrow::before {
      @apply absolute w-2 h-2 bg-inherit;
    }

    .arrow {
      @apply invisible;
      &::before {
        @apply visible content-[""] rotate-45;
      }
    }

    &[data-popper-placement^='top'] > .arrow {
      @apply -bottom-1;
    }

    &[data-popper-placement^='bottom'] > .arrow {
      @apply -top-1;
    }

    &[data-popper-placement^='left'] > .arrow {
      @apply -right-1;
    }

    &[data-popper-placement^='right'] > .arrow {
      @apply -left-1;
    }
  }
}
</style>