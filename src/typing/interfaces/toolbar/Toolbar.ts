import { VNode } from 'vue';
import { IBaseComponent } from '../basic';

interface IToolbarComponent extends IBaseComponent {
  title?: string | VNode;
  icon?: VNode | string;
}

export { IToolbarComponent };
