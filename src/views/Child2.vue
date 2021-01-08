<template>
  <div class="child-2">
    <p>我是孙子组件</p>
    <p>props: {{$attrs}}</p>
    <p @click="test">点我告诉爷爷组件</p>
  </div>
</template>

<script>
  export default {
    name: 'Child2',
    methods: {
      test() {
        console.log('111', this.$listeners);
        this.$emit('test2');
      },
    },

  };
</script>

<style scoped>

</style>
