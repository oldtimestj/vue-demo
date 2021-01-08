<template>
  <div>
    <div id="myMap"  ref="myMap" style="width: 900px; height: 600px;"></div>

      <el-button size="medium" icon="el-icon-plus"></el-button>

  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china.js'; 
import 'echarts/theme/macarons';//引入主题
import option from './AntvL7/map-options'
  export default {
    data () {
      return {
        chart: null,
      }
    },
    mounted(){
      this.drawChinaMap();
    },
    updated() {
      if (!this.chart) {
        this.initChart()
      }
    },
    beforeDestroy() {
        if (!this.chart) {
          return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
      drawChinaMap() {
        this.chart = this.$echarts.init(document.getElementById('myMap'));
        this.chart.setOption(option);
      },
    }
  }
</script>
<style scoped>
