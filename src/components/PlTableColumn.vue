<!--
Created by zhulixiao on 2020/4/30.
-->
<template functional>
  <el-table-column v-bind="data.attrs" v-on="listeners">
    <template v-slot="scope">
      <slot v-bind="scope">
        <pl-popover-word
          v-if="data.attrs.isPopoverWord !== false"
          :content="scope.row[data.attrs.prop]"
        />
        <template v-else>{{scope.row[data.attrs.prop]}}</template>
      </slot>
    </template>
    <template v-slot:header="scope">
      <slot name="header" v-bind="scope">
        <pl-popover-word v-if="data.attrs.isPopoverWord !== false" :content="data.attrs.label"/>
        <template v-else>{{data.attrs.label}}</template>
      </slot>
    </template>
  </el-table-column>
</template>

<script>
  import PlPopoverWord from '@/components/PlPopoverWord';

  export default {
    name: 'PlTableColumn',
    components: { PlPopoverWord },
  };
</script>

<style lang="scss" scoped>

</style>
