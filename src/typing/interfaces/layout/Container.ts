import Vue from 'vue';
import { LayoutRole } from '../../aliases';

interface ILayoutContainerComponent {
  __registerRole: (role: LayoutRole, $role: Vue) => void;
  __removeRole: (role: LayoutRole) => void;
}

export { ILayoutContainerComponent };
