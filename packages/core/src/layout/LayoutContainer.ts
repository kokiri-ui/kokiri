import { ILayoutContainerComponent, LayoutContainerHeadlessComponent } from 'petals-ui/dist/layout';

import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class LayoutContainerStructuralComponent
  extends BaseStructuralComponent<LayoutContainerHeadlessComponent>
  implements ILayoutContainerComponent {
  public created(): void {
    this.setHeadlessComponent(new LayoutContainerHeadlessComponent(this));
  }
}

export { LayoutContainerStructuralComponent };
