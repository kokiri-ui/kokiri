import { ILayoutMainComponent, LayoutMainHeadlessComponent } from 'petals-ui/dist/layout';

import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class LayoutMainStructuralComponent
  extends BaseStructuralComponent<LayoutMainHeadlessComponent>
  implements ILayoutMainComponent {
  public created(): void {
    this.setHeadlessComponent(new LayoutMainHeadlessComponent(this));
  }
}

export { LayoutMainStructuralComponent };
