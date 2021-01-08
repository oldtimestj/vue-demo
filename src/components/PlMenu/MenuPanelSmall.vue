<!--
Created by zhulixiao on 2020/4/22.
-->
<template>
  <div
    ref="panel"
    :class="{'pl-menu-panel': parentItem}"
    class="pl-menu-panel--small"
    :style="panelStyle"
  >
    <menu-item
      v-for="menuItem in data.children"
      :key="menuItem.id"
      :menu-item="menuItem"
    />
  </div>
</template>

<script>
  import MenuItem from '@/components/PlMenu/MenuItem';

  export default {
    name: 'MenuPanelSmall',
    components: { MenuItem },
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
        const curWidth = this.getCurDom().getBoundingClientRect().width;
        if (curWidth >= document.body.offsetWidth - parentLeft - scrollLeft) {
          this.panelStyle = {
            ...this.panelStyle,
            marginLeft: `${parentLeft - curWidth + parentWidth - scrollLeft}px`,
            right: parentLeft + parentWidth - scrollLeft > menuWidth ? 0 : '',
          };
        } else {
          this.panelStyle = {
            ...this.panelStyle,
            marginLeft: `${parentLeft - scrollLeft}px`,
          };
        }
      },
      getCurDom() {
        this.curDom = this.curDom || this.$refs.panel;
        return this.curDom;
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>
