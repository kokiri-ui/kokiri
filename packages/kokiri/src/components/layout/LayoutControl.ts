import { Vue, Component } from 'vue-property-decorator';

import { LayoutRole, ILayoutContainerComponent } from 'petals-ui/dist/layout';
import { getComponentName } from '@kokiri/core/dist/basic';

import { findSpecificAncestor } from '../../helper/utils';

type SelfContainer = ILayoutContainerComponent &
  Vue & {
    __registerRole: (role: LayoutRole, $role: Vue) => void;
    __removeRole: (role: LayoutRole) => void;
  };

@Component
class LayoutControl extends Vue {
  protected role!: LayoutRole;

  protected container!: SelfContainer | null;

  public mounted(): void {
    const ancestor: Vue | null = findSpecificAncestor(this, getComponentName('layoutContainer'));
    const container: SelfContainer | null = ancestor ? (ancestor as SelfContainer) : null;

    if (container) {
      container.__registerRole(this.role, this);
    }

    this.container = container;
  }

  public destroyed(): void {
    if (this.container) {
      this.container.__removeRole(this.role);
    }
  }
}

export { LayoutControl };
