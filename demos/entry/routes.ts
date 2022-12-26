import Layout from '@/shared/Layout.vue';
import kokiriRoutes from '../kokiri/routes';

const routes = [
  { path: '/', name: 'root', redirect: '/controls' },
  {
    path: '/controls',
    name: 'kokiri',
    component: Layout,
    children: kokiriRoutes.map(({ text, ...others }) => ({ ...others, meta: { text } })),
  },
];

export default routes;
