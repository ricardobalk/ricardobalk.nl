<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0,
      },
      `depth-${depth}`,
    ]"
  >
    <router-link
      v-if="item.path"
      class="sidebar-heading clickable"
      :class="{
        open,
        active: isActive($route, item.path),
      }"
      :to="item.path"
      @click.native="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span class="arrow" v-if="collapsable" :class="open ? 'down' : 'right'"> </span>
    </router-link>

    <p v-else class="sidebar-heading" :class="{ open }" @click="$emit('toggle')">
      <span>{{ item.title }}</span>
      <span class="arrow" v-if="collapsable" :class="open ? 'down' : 'right'"> </span>
    </p>

    <DropdownTransition>
      <SidebarLinks
        class="sidebar-group-items"
        :items="item.children"
        v-if="open || !collapsable"
        :sidebarDepth="item.sidebarDepth"
        :depth="depth + 1"
      />
    </DropdownTransition>
  </section>
</template>

<script lang="js" src="./SidebarGroup.js" />
<style lang="stylus" src="./SidebarGroup.styl" />
