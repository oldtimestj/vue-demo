<!--
Created by zhulixiao on 2020/4/22.
-->
<template>
  <div :class="{'pl-menu-panel': parentItem}" class="pl-menu-panel--medium" :style="panelStyle">
    <div
      class="pl-menu-panel--medium__block"
      v-for="menuItem in data.children"
      :key="menuItem.id"
    >
      <div
        class="pl-menu-panel--medium__subtitle"
      >
        <menu-item class="pl-menu-item" :menu-item="menuItem">
          <el-icon class="el-icon-d-arrow-right"/>
        </menu-item>
      </div>
      <menu-panel-small :data="menuItem"/>
    </div>
  </div>
</template>

<script>
  import MenuPanelSmall from '@/components/PlMenu/MenuPanelSmall';
  import MenuItem from '@/components/PlMenu/MenuItem';

  export default {
    name: 'MenuPanelMedium',
    components: { MenuItem, MenuPanelSmall },
    props: {
      data: Object,
      parentItem: HTMLDivElement,
    },
    data() {
      return {
        panelStyle: {},
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
    },
    methods: {
      init() {
        if (!this.parentItem) return;
        const {
          offsetLeft: parentLeft,
          offsetWidth: parentWidth,
        } = this.parentItem;
        const { offsetWidth: menuWidth, scrollLeft } = this.parentItem.parentElement;
        const dataLength = this.data.children.length;
        const columnCount = dataLength >= 5 ? 5 : dataLength;
        const curWidth = (menuWidth / 5) * columnCount;
        this.panelStyle = {
          width: `${curWidth}px`,
          columnCount,
        };
        if (curWidth >= document.body.offsetWidth - parentLeft - scrollLeft) {
          this.panelStyle = {
            ...this.panelStyle,
            right: parentLeft + parentWidth - scrollLeft > menuWidth ? 0 : '',
            ...(columnCount <= 2 ? { marginLeft: `${parentLeft - curWidth + parentWidth - scrollLeft}px` } : { right: 0 }),
          };
        } else {
          this.panelStyle = {
            ...this.panelStyle,
            marginLeft: columnCount <= 2 ? `${parentLeft - scrollLeft}px` : '0',
          };
        }
      },
    },
  };
</script>
