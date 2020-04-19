import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { LayoutRole } from '../../typing/aliases';
import { ILayoutContainerComponent } from '../../typing/interfaces/layout';
import { findSpecificAncestor } from '../../helper/utils';
import { BaseComponent } from '../basic/BaseComponent';

type SelfContainer = ILayoutContainerComponent & Vue;

@Component
class LayoutControl extends BaseComponent {
  protected role!: LayoutRole;

  protected container!: SelfContainer | null;

  public mounted(): void {
    const ancestor = findSpecificAncestor(this, 'BudsLayoutContainer');
    const container = ancestor ? (ancestor as SelfContainer) : null;

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
