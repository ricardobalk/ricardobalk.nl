<!-- MultiSelectBox is a component that allows users to select one or multiple options in various ways.
  It can be used to create dropdowns, select boxes, tag inputs, and more. It is highly customizable and can be used in many different ways.
  The component emits an event when the user selects an option, which can be used to update the UI. This is done by using the v-model directive.
  In my case, it is used as a category selector for my blog articles, but it can be used for many other things as well.
-->

<template>
  <span class="filter">
    <span class="options">
      <template v-if="isDropdown">
        <select v-model="value">
          <option value="" disabled>
            Select an option&hellip;
          </option>
          <option v-for="(displayName, key, index) in options" :key="index" :value="key">
            {{ displayName }}
          </option>
        </select>
      </template>

      <template v-else>
        <label v-for="(displayName, key, index) in options" :key="index" :for="key" class="option">
          <span>{{ displayName }}</span>
          <input :type="type" :id="key" :value="key" v-model="value" />
          <span class="indicator-container" aria-hidden="true">
            <span class="indicator" />
          </span>
        </label>
      </template>
    </span>
  </span>
</template>

<style lang="postcss">
    $accentColor: #ff6b6b;
  .filter {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 0.25rem;
    margin: 1rem auto;
    color: #666;
    font-weight: 600;
    font-size: 0.9em;
    line-height: 0.9em;

    span {
      cursor: default;
    }

    .options {
      display: flex;
      flex-wrap: wrap;
      gap: .75rem;

      .option {
        position: relative;
        display: block;
        padding-left: 1.25rem;
        cursor: pointer;
        user-select: none;

        span {
          cursor: inherit;
        }

        input {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0;
          cursor: pointer;

          &[type="checkbox"] {
            & ~ .indicator-container .indicator {
              border-radius: 0.125rem;
              @apply dark:border dark:border-gray-700;
            }

            ~ .indicator-container .indicator::after {
              border-radius: 0;
            }
          }

          &:checked {
            & ~ .indicator-container .indicator {
              background-color: darken($accentColor, 5%);
              @apply dark:border-green-500;

              @media screen and (prefers-color-scheme: dark) {
                background-color: darken($accentColor, 33%);
                border: 1px solid darken($accentColor, 15%);
                box-sizing: content-box;
              }

              &:after {
                display: block;
              }
            }
          }
        }

        &:hover {
          input {
            & ~ .indicator-container .indicator {
              /* background-color: #ccc; */
            }
          }
        }

        .indicator-container {
          height: 100%;
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          align-items: center;
          justify-content: center;

          .indicator {
          position: relative;
          top: 0;
          left: 0;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background-color: #252525;

          &:after {
            top: 0.25rem;
            left: 0.25rem;
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 50%;
            background: #fff;
            @apply dark:bg-green-500;
            position: absolute;
            display: none;
            content: "";
          }
        }
        }
      }
    }
  }
</style>

<script setup lang="ts">
  export interface IFilterOptions {
    [key: string]: string;
  }

  const props = defineProps({
    type: {
      type: String,
      default: "checkbox",
      required: false,
    },
    modelValue: {
      type: Array,
      default: () => [],
      required: true,
    },
    options: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const value = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit("update:modelValue", value);
    },
  });

  const isDropdown = computed(() => {
    switch (props.type) {
      case "dropdown":
      case "select":
        return true;
      default:
        return false;
    }
  });
</script>