<template>
  <div class="post">
    <h1>
      我是标题
      
    </h1>
    <!-- <svg-icon icon-class="weixin" class-name="test-class"></svg-icon>
     <svg-icon icon-class="qq"></svg-icon> -->
    <h2>hello</h2>
    <p>我是文章的第一个段落</p>
    <p>我是文章的第二个段落</p>
  </div>
</template>

<script>
  export default {
    name: '',
    template: '',
    components: {
    },
    props: {
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
.post>p:nth-child(2) {
  color: red;
}
.post>p:nth-of-type(2){
  color:red;
  }
  .test-class {
    height: 40px!important;
    width: 40px!important;
  }
</style>
