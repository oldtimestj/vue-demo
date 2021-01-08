<template>
  <div id="app">
<!--    <antv-l7/>-->
    <router-view />
  </div>
</template>
<style lang="scss">
  @import "./assets/common.scss";
</style>
<script>
  import AntvL7 from '@/views/AntvL7';

  export default {
    components: { AntvL7 },
  };
</script>
