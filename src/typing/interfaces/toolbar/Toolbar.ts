import { VueConstructor, VNode } from 'vue';

interface IToolbarComponent {
  title?: string | VNode;
  icon?: VNode | string;
  tag?: string | VueConstructor;
}

export { IToolbarComponent };
