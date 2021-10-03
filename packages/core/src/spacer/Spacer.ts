import { ISpacerComponent, SpacerHeadlessComponent } from 'petals-ui/dist/spacer';

import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class SpacerStructuralComponent
  extends BaseStructuralComponent<SpacerHeadlessComponent>
  implements ISpacerComponent {
  public created(): void {
    this.setHeadlessComponent(new SpacerHeadlessComponent(this));
  }
}

export { SpacerStructuralComponent };
