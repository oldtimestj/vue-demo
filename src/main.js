import Vue from 'vue';
import PlPopoverWord from '@/components/PlPopoverWord';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import './icons';
import JsonExcel from "vue-json-excel";
import Blob from './excel/Blob';
import Export2Excel from './excel/Export2Excel.js';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.component('pl-popover-word', PlPopoverWord);
Vue.component('downloadExcel', JsonExcel);
Vue.use(ElementUI, { size: 'medium' });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
