import Vue, { CreateElement, VNode } from 'vue';
import VueRouter from 'vue-router';

import 'kokiri/dist/themes/antd/index.scss';

import routes from './routes';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h: CreateElement): VNode => h(App),
  router: new VueRouter({
    mode: 'history',
    routes,
  }),
});
