<!--
Created by zhulixiao on 2020/4/22.
-->
<template>
  <div class="pl-menu" @mouseleave="leaveMenuItem">
    <div ref="scrollList" class="pl-menu-item__list">
      <div
        v-for="(parentItem, parentIndex) in data"
        :key="parentItem.id"
        class="pl-submenu-item"
        :class="{'is-active': activeItem.id === parentItem.id || curMenu.id === parentItem.id}"
        @mouseenter="enterMenuItem(parentItem, $refs.parentItem[parentIndex])"
        ref="parentItem"
      >
        <menu-item :menu-item="parentItem"/>
      </div>
    </div>
    <transition v-for="parentItem in data" name="fade" :key="parentItem.id">
      <div
        v-if="activeItem.id && parentItem.id === activeItem.id && activeItemDom"
      >
        <menu-panel-small
          v-if="activeItem.depth === 1"
          :data="activeItem"
          :parentItem="activeItemDom"
        />
        <menu-panel-medium
          v-else-if="activeItem.depth === 2"
          :data="activeItem"
          :parentItem="activeItemDom"
        />
        <menu-panel-large
          v-else-if="activeItem.depth === 3"
          :data="activeItem"
          :parentItem="activeItemDom"
        />
      </div>
    </transition>
  </div>
</template>

<script>
  import debounce from 'lodash/debounce';
  import MenuPanelSmall from '@/components/PlMenu/MenuPanelSmall';
  import MenuPanelMedium from '@/components/PlMenu/MenuPanelMedium';
  import MenuPanelLarge from '@/components/PlMenu/MenuPanelLarge';
  import props from '@/components/PlMenu/props';
  import MenuItem from '@/components/PlMenu/MenuItem';

  export default {
    name: 'PlMenu',
    components: {
      MenuItem, MenuPanelLarge, MenuPanelMedium, MenuPanelSmall, 
    },
    data() {
      return {
        data: [],
        activeItem: {},
        activeItemDom: {},
      };
    },
    props,
    mounted() {
      this.init();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setDataDebounce);
      this.$refs.scrollList.removeEventListener('scroll', this.setDataDebounce);
    },
    computed: {
      curMenu() {
        const curMenu = this.data.find((obj) => {
          let arr = [obj];
          while (arr.length) {
            const activeMenu = arr.find(item => item.router === this.$route.path);
            if (activeMenu) return true;
            const temp = arr.map(item => ({ ...item }));
            arr = temp.filter(item => item.children)
              .reduce((total, cur) => [...total, ...cur.children], []);
          }
          return false;
        });
        return curMenu || {};
      },
    },
    watch: {
      menuTree() {
        this.init();
      },
    },
    methods: {
      init() {
        this.setData(this.menuTree);
        this.setDataDebounce = debounce(() => this.setData(), 200);
        window.removeEventListener('resize', this.setDataDebounce);
        window.addEventListener('resize', this.setDataDebounce);
        this.$refs.scrollList.removeEventListener('scroll', this.setDataDebounce);
        this.$refs.scrollList.addEventListener('scroll', this.setDataDebounce);
      },
      enterMenuItem(item, dom) {
        this.activeItem = item;
        this.activeItemDom = dom;
      },
      leaveMenuItem() {
        // this.activeItem = {};
      },
      setCurMenu(item) {
        this.curMenu = this.curMenu || item;
      },
      setData(data = this.menuTree) {
        this.data = data.map(item => ({
          ...item,
          depth: this.getDepth(item),
        }));
        this.activeItem = { ...this.activeItem };
      },
      getDepth(obj) {
        let arr = [obj];
        let depth = 0;
        while (arr.length) {
          const temp = arr.map(item => ({ ...item }));
          arr = temp.filter(item => item.children)
            .reduce((total, cur) => [...total, ...cur.children], []);
          if (arr.length) depth += 1;
        }
        return depth;
      },
    },
  };
</script>
<style lang="sass">
  @import './index.scss'
</style>
