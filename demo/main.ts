import Vue, { CreateElement, VNode } from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: (h: CreateElement): VNode => h(App),
});
