import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from './store'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mock from './mock';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import './styles/index.scss'; //全局样式
import '@/interceptors/permission'; //拦截
import echarts from 'echarts';
import 'echarts-liquidfill/src/liquidFill.js';

import highcharts from 'highcharts'
//import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)


Vue.use(Antd);
Vue.use(Element);
Vue.prototype.$Echarts = echarts;
Vue.config.productionTip = false;

window.audioComp = null;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");