<template>
  <div>
    <div id="myMap" ref="myMap" style="width: 900px; height: 600px;"></div>
    <div class="btn-class">
      <el-button size="medium" icon="el-icon-plus"></el-button>
      <el-button size="medium" icon="el-icon-minus"></el-button>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china.js';
import 'echarts/theme/macarons'; //引入主题
import option from './AntvL7/map-options';
export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.drawChinaMap();
  },
  updated() {
    if (!this.chart) {
      this.initChart();
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    drawChinaMap() {
      this.chart = this.$echarts.init(document.getElementById('myMap'));
      this.chart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-class {
  width: 20px;
  position: absolute;
  top: 60px;
  display: flex;
  flex-direction: column;
}
</style>
