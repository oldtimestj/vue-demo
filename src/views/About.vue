<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Child1
      :p-child1="child1"
      :p-child2="child2"
      v-on:test1="onTest1"
      v-on:test2="onTest2"
    >
    </Child1>
  </div>
</template>
<script>
  import Child1 from './Child1.vue';

  export default {
    components: {
      Child1,
    },
    data() {
      return {
        child1: '我是被子组件继承的内容',
        child2: '我是没有被子组件继承的内容',
      };
    },
    methods: {
      onTest1() {
        console.log('test1 running...');
      },
      onTest2() {
        alert('我是爷爷...');
      },
    },
  };

</script>
