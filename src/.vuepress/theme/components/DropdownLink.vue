<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <button class="dropdown-title" type="button" :aria-label="dropdownAriaLabel" @click="toggle">
      <span class="title">{{ item.text }}</span>
      <span class="arrow" :class="open ? 'down' : 'right'"></span>
    </button>

    <DropdownTransition>
      <ul class="nav-dropdown" v-show="open">
        <li class="dropdown-item" :key="subItem.link || index" v-for="(subItem, index) in item.items">
          <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

          <ul class="dropdown-subitem-wrapper" v-if="subItem.type === 'links'">
            <li class="dropdown-subitem" :key="childSubItem.link" v-for="childSubItem in subItem.items">
              <NavLink
                @focusout="
                  isLastItemOfArray(childSubItem, subItem.items) && isLastItemOfArray(subItem, item.items) && toggle()
                "
                :item="childSubItem"
              />
            </li>
          </ul>

          <NavLink v-else @focusout="isLastItemOfArray(subItem, item.items) && toggle()" :item="subItem" />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script lang="js" src="./DropdownLink.js" />
<style lang="stylus" src="./DropdownLink.styl" />
