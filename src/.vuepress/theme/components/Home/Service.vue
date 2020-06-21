import Service from "*.vue";
<template>
  <div class="small-12 medium-6 large-3 cell card">
    <div class="service">
      <div class="inner">
        <div class="icon-container">
          <font-awesome-icon :icon="['fa', service.icon]" class="icon" />
        </div>
        <h3>{{ service.title }}</h3>
        <span class="caption">{{ service.caption }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Prop } from "vue-property-decorator";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { fas } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

  export interface ServiceDetails extends Object {
    title: string;
    caption: string;
    icon: string;
  }

  @Component({ name: "Service", components: { fas, FontAwesomeIcon } })
  export default class Service extends Vue {
    created() {
      library.add(fas); // TODO: Only add required icons to the library
    }

    @Prop({
      required: true,
      default: {
        title: "Service missing",
        caption: "Did you set up your binds correctly?",
        icon: "times",
      },
    })
    private service!: ServiceDetails;
  }
</script>

<style>
  .service {
    text-align: center;
  }

  .service .inner {
    margin: 1em;
    padding: 2em;
    border: 1px solid #eee;
    background-color: #fff;
    box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.05);
  }

  .icon-container {
    width: 75px;
    height: 75px;
    border-radius: 50px;
    margin: 0 auto 1em;
    background-color: #efefef;
    display: flex;
    align-items: center;
  }

  .icon-container .icon {
    font-size: 35px;
    text-align: center;
    line-height: 75px;
    display: block;
    margin: 0 auto;
  }

  h1 {
    color: #000;
  }
</style>
