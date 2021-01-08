<!--
Created by zhulixiao on 2020/5/7.
-->
<template>
  <div class="pl-popover-word">
    <el-popover
      :disabled="disabled"
      :trigger="trigger"
      :placement="placement"
      popper-class="pl-popover-word-reference"
      ref="pop"
    >
      <p style="max-width: 300px" slot v-html="formatContent"></p>
      <p
        slot="reference"
        ref="container"
        :class="line > 1 ? 'ellipsis-lines' : 'ellipsis'"
        :style="{webkitLineClamp: this.line, maxHeight: containerMaxHeight}"
        style="height: inherit;"
      >
        <span @click="clickContent" ref="content" v-html="formatContent"></span>
      </p>
    </el-popover>
  </div>
</template>

<script>
  import { debounce } from 'lodash';

  export default {
    name: 'PlPopoverWord',
    props: {
      line: {
        type: Number,
        default: 1,
      },
      content: String,
      length: Number,
      placement: {
        type: String,
        default: 'top',
      },
      trigger: {
        type: String,
        default: 'hover',
      },
    },
    data() {
      return {
        isInit: false,
        disabled: true,
        containerMaxHeight: 'inherit',
        t: 0,
        abc: false,
        cWidth: 0,
      };
    },
    computed: {
      formatContent() {
        return `${this.content || ''}`.replace(/\s/g, '&nbsp;');
      },
    },
    mounted() {
      if (!this.isInit && !this.length) {
        this.isInit = true;
        this.setDisabledDebounce = debounce(this.setDisabled, 500);
        window.removeEventListener('resize', this.setDisabledDebounce);
        window.addEventListener('resize', this.setDisabledDebounce);
      }
      this.setDisabled();
    },
    beforeDestroy() {
      this.t && clearTimeout(this.t);
      window.removeEventListener('resize', this.setDisabledDebounce);
    },
    watch: {
      content() {
        this.setDisabled();
      },
      line() {
        this.setDisabled();
      },
    },
    methods: {
      getContainerDom() {
        this.containerDom = this.containerDom || this.$refs.container;
        return this.containerDom;
      },
      getContentDom() {
        this.contentDom = this.contentDom || this.$refs.content;
        return this.contentDom;
      },
      calcLength() {
        if (this.length) return this.length;
        if (window.navigator.msSaveBlob) {
          const fontSize = window.getComputedStyle(this.getContentDom()).fontSize.split('px')[0] / 2;
          const containerWidth = window.getComputedStyle(this.getContainerDom()).width.split('px')[0] * 1;
          return (containerWidth / fontSize).toFixed(0) * this.line + 1;
        }
        const { width: cWidth, height: cHeight } = this.getContentDom().getBoundingClientRect();
        const { width, height } = this.getContainerDom().getBoundingClientRect();
        if (this.line > 1) return cHeight > height ? 0 : Infinity;
        return cWidth > width ? 0 : Infinity;
      },
      calcStrLen(str) {
        let len = 0;
        for (let i = 0; i < str.length; i += 1) {
          if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) len += 1;
          else len += 2;
        }
        return len;
      },
      setDisabled() {
        this.setContainerMaxHeight();
        this.t = setTimeout(() => {
          this.disabled = !this.content || this.calcStrLen(this.content) < this.calcLength();
        }, 100);
      },
      setContainerMaxHeight() {
        if (!this.content || this.line <= 1 || !this.getContentDom()) return;
        this.containerMaxHeight = `${window.getComputedStyle(this.getContentDom()).lineHeight.split('px')[0] * this.line}px`;
      },
      clickContent() {
        this.$emit('click');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pl-popover-word {
    padding: 0;
    width: 100%;
    overflow: hidden;
    line-height: unset;
    vertical-align: middle;
  }
  .ellipsis-lines {
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>
