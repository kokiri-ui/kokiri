import Vue from 'vue';
import { LayoutRole } from '../../aliases';
import { IBaseComponent } from '../basic';

interface ILayoutContainerComponent extends IBaseComponent {
  __registerRole: (role: LayoutRole, $role: Vue) => void;
  __removeRole: (role: LayoutRole) => void;
}

export { ILayoutContainerComponent };
