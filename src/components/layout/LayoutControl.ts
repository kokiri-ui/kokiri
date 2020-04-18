import { Component } from 'vue-property-decorator';

import { LayoutRole } from '../../typing/aliases';
import { ILayoutContainerComponent } from '../../typing/interfaces/layout';
import { findSpecificAncestor } from '../../helper/utils';
import { BudsComponent } from '../basic/BudsComponent';

@Component
class LayoutControl extends BudsComponent {
  protected role!: LayoutRole;

  protected container!: ILayoutContainerComponent | null;

  public mounted(): void {
    const ancestor = findSpecificAncestor(this, 'BudsLayoutContainer');
    const container = ancestor ? (ancestor as ILayoutContainerComponent) : null;

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
