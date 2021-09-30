import { IBoxComponent, BoxHeadlessComponent } from 'petals-ui/dist/box';
import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class BoxStructuralComponent
  extends BaseStructuralComponent<BoxHeadlessComponent>
  implements IBoxComponent {
  public created(): void {
    this.setHeadlessComponent(new BoxHeadlessComponent(this));
  }
}

export { BoxStructuralComponent };
