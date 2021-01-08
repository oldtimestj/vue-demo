<!--
Created by zhulixiao on 2020/5/11.
-->
<template>
  <el-select
    class="pl-select"
    :class="{'pl-select-all': enableSelectAll}"
    :popper-append-to-body="false"
    ref="select"
    :value="value"
    :multiple="multiple"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <li
      v-if="enableSelectAll"
      @mouseenter.prevent="$refs.select.hoverIndex = Infinity"
      @click.prevent="clickSelectAll"
      class="el-select-dropdown__item"
    >
      <el-checkbox
        :indeterminate="!isAllSelected && !isNoneSelected"
        :value="isAllSelected"
      >
        全选
      </el-checkbox>
    </li>
    <el-option
      v-for="item in options"
      :key="item[optionProps.value]"
      ref="option"
      :value="item[optionProps.value]"
      :label="item[optionProps.label]"
    >
      <span v-if="enableSelectAll" @click.prevent>
        <el-checkbox
          :value="value.indexOf(item[optionProps.value]) > -1"
          :label="item[optionProps.label]"
        />
      </span>
      <template v-else>{{item[optionProps.label]}}</template>
    </el-option>
    <template slot="empty"><slot name="empty"></slot></template>
    <template slot="prefix"><slot name="prefix"></slot></template>
  </el-select>
</template>

<script>
  export default {
    name: 'PlSelect',
    props: {
      value: {
        type: [Array, String],
        default() {
          return '';
        },
      },
      options: {
        type: Array,
        default() {
          return [];
        },
      },
      optionProps: {
        type: Object,
        default() {
          return { value: 'value', label: 'label' };
        },
      },
      hasSelectAll: Boolean,
      multiple: Boolean,
    },
    computed: {
      isAllSelected() {
        return this.value.length === this.optionsLength;
      },
      isNoneSelected() {
        return this.value.length === 0;
      },
      optionsLength() {
        return this.options.length;
      },
      enableSelectAll() {
        return this.multiple && this.hasSelectAll;
      },
    },
    data() {
      return {
      };
    },
    watch: {
      value: {
        async handler(val) {
          if (!this.enableSelectAll) return;
          if (val.length === this.optionsLength) {
            await this.$nextTick();
            this.getElSelectTagsDom().style.display = 'none';
            this.getElSelectInputDom().value = '全部';
          } else {
            await new Promise(resolve => setTimeout(resolve, 10));
            this.getElSelectTagsDom().style.display = '';
            this.getElSelectInputDom().value = '';
          }
        },
        immediate: true,
      },
    },
    methods: {
      clickSelectAll() {
        this.$emit('input', this.isAllSelected ? [] : this.options.map(item => item[this.optionProps.value]));
      },
      getElSelectTagsDom() {
        this.elSelectTagsDom = this.elSelectTagsDom || this.$refs.select.$el.querySelector('.el-select__tags');
        return this.elSelectTagsDom;
      },
      getElSelectInputDom() {
        this.elSelectInputDom = this.elSelectInputDom || this.$refs.select.$el.querySelector('.el-input__inner');
        return this.elSelectInputDom;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pl-select-all {
    ::v-deep {
      .el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after {
        display: none;
      }
    }
  }
</style>
