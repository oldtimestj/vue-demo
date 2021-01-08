<template>
  <div class="child-1">
    <p>我是子组件</p>
    <p>我是子组件props继承的内容：{{pChild1}}</p>
    <hr>
    <p>我是没有被子组件继承的内容：{{$attrs}}</p>
    <hr>
    <Child2 v-bind="$attrs" v-on="$listeners">

    </Child2>
  </div>
</template>

<script>
  import Child2 from './Child2';

  export default {
    name: 'Child1.vue',
    components: {
      Child2,
    },
    props: ['pChild1'], // 继承父组件的pChild1属性
    data() {
      return {
      };
    },
    inheritAttrs: true,
    mounted() {
      this.$emit('test1');
      console.log('this.$attrs', this.$attrs);
    },
  };
</script>

<style scoped>

</style>
