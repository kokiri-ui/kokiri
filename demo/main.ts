import Vue, { CreateElement, VNode } from 'vue';
import VueRouter from 'vue-router';

import { HomePage, BoxDemo, ButtonDemo, FlexDemo, PanelDemo } from './blocks';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: (h: CreateElement): VNode => h(App),
  router: new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', name: 'home', component: HomePage },
      { path: '/box', name: 'box', component: BoxDemo },
      { path: '/button', name: 'button', component: ButtonDemo },
      { path: '/flex', name: 'flex', component: FlexDemo },
      { path: '/panel', name: 'panel', component: PanelDemo },
    ],
  }),
});
