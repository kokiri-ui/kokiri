import { VNode } from 'vue';

interface IToolbarComponent {
  title?: string | VNode;
  icon?: VNode | string;
}

export { IToolbarComponent };
