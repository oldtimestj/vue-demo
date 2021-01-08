<!--
Created by zhulixiao on 2020/4/22.
-->
<template>
  <div class="pl-menu-panel pl-menu-panel--large" :style="panelStyle" @mouseleave="leaveParentItem">
    <ul class="pl-menu-panel--large__subtitle">
      <li
        class="pl-menu-item"
        :class="{'is-active': activeItem.id === parentItem.id}"
        v-for="parentItem in data.children"
        :key="parentItem.id"
        @mouseenter="enterParentItem(parentItem)"
        @click="handleClick(activeItem)"
      >
        {{parentItem.name}}
        <el-icon v-if="hasChild(parentItem)" class="el-icon-arrow-right"/>
      </li>
    </ul>
    <menu-panel-medium :data="activeItem"/>
    <div v-if="false" class="pl-menu-panel--medium">
        <div
          class="pl-menu-panel--medium__block"
          v-for="menuItem in activeItem.children || []"
          :key="menuItem.id"
        >
          <div
            v-if="hasChild(menuItem)"
            class="pl-menu-panel--medium__subtitle"
          >
            {{menuItem.name}}
          </div>
          <div v-else class="pl-menu-panel--medium__subtitle pl-menu-item">
            <router-link :to="menuItem.router">{{menuItem.name}}</router-link>
            <el-icon class="el-icon-d-arrow-right"/>
          </div>
          <ul class="pl-menu-panel--medium__list">
            <li class="pl-menu-item" v-for="childItem in menuItem.children" :key="childItem.id">
              {{childItem.name}}
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
  import MenuPanelMedium from '@/components/PlMenu/MenuPanelMedium';

  export default {
    name: 'MenuPanelLarge',
    components: { MenuPanelMedium },
    props: {
      data: Object,
      parentItem: HTMLDivElement,
    },
    data() {
      return {
        panelStyle: {},
        activeItem: {},
      };
    },
    watch: {
      data() {
        this.init();
      },
      parentItem() {
        this.init();
      },
    },
    mounted() {
      this.init();
      console.log('parentItem', this.parentItem.name);
    },
    methods: {
      init() {
      },
      enterParentItem(item) {
        this.activeItem = item;
      },
      leaveParentItem() {
        this.activeItem = {};
      },
      hasChild(menuItem) {
        return menuItem?.children?.[0];
      },
      handleClick(item) {
        console.log('11111', item);
      }
    },
  };
</script>

<style lang="scss" scoped>

</style>
