<template>
  <ul class="sidebar-links" v-if="items.length">
    <li v-for="(item, i) in items" :key="i">
      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="i === openGroupIndex"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
      <SidebarLink v-else :sidebarDepth="sidebarDepth" :item="item" />
    </li>
  </ul>
</template>

<script lang="js" src="./SidebarLinks.js" />
