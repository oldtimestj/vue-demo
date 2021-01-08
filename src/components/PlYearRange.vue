<!--
Created by zhulixiao on 2020/5/19.
-->
<template>
  <div class="pl-year-range" @click="clickYearRange">
    <el-date-picker
      ref="start"
      type="year"
      value-format="yyyy"
      @blur="blurStartEditor"
      @change="changeStartYear"
      v-model="startYear"
    />
    <div class="split">至</div>
    <el-date-picker
      ref="end"
      type="year"
      value-format="yyyy"
      @blur="blurEndEditor"
      @change="changeEndYear"
      v-model="endYear"
    />
  </div>
</template>

<script>
  export default {
    name: 'PlYearRange',
    data() {
      return {
        startYear: '',
        endYear: '',
      };
    },
    props: {
      value: {
        type: [Array, String],
        default() {
          return [];
        },
      },
    },
    watch: {
      value: {
        handler(val) {
          this.startYear = val?.[0];
          this.endYear = val?.[1];
        },
        immediate: true,
      },
    },
    created() {
      
    },
    mounted() {
    },
    methods: {
      getStartRef() {
        this.startRef = this.startRef || this.$refs.start;
        return this.startRef;
      },
      getEndRef() {
        this.endRef = this.endRef || this.$refs.end;
        return this.endRef;
      },
      clickYearRange() {
        this.getStartRef().focus();
      },
      blurStartEditor() {
        if (!this.isChangeStartYear) return;
        this.isChangeStartYear = false;
        this.getEndRef().focus();
      },
      changeStartYear() {
        this.isChangeStartYear = true;
      },
      blurEndEditor() {
        if (!this.isChangeEndYear) {
          this.$emit('input', this.value instanceof Array ? [...this.value] : []);
          return;
        }
        this.isChangeEndYear = false;
      },
      changeEndYear() {
        this.isChangeEndYear = true;
        this.$emit('input', [this.startYear, this.endYear]);
      },
    },
  };
</script>

<style lang="less" scoped>
  .pl-year-range {
    display: inline-flex;
    width: 300px;
    cursor: pointer;
    .split {
      margin: auto;
      width: 50px;
      text-align: center;
    }
    ::v-deep {
      .el-date-editor {
        flex: 1;
        pointer-events: none;
        input {
          text-align: center;
        }
      }
    }
  }
</style>
