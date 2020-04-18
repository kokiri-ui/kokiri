import Vue from 'vue';
import { LayoutRole } from '../../aliases';

interface ILayoutContainerComponent extends Vue {
  __registerRole: (role: LayoutRole, $role: Vue) => void;
  __removeRole: (role: LayoutRole) => void;
}

export { ILayoutContainerComponent };
