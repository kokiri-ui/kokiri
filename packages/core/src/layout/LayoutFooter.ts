import { LooseSize } from 'petals-ui/dist/basic';
import { ILayoutFooterComponent, LayoutFooterHeadlessComponent } from 'petals-ui/dist/layout';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class LayoutFooterStructuralComponent
  extends BaseStructuralComponent<LayoutFooterHeadlessComponent>
  implements ILayoutFooterComponent {
  @Prop({ type: [String, Number], default: 'none' })
  public readonly height!: LooseSize;

  public created(): void {
    this.setHeadlessComponent(new LayoutFooterHeadlessComponent(this));
  }
}

export { LayoutFooterStructuralComponent };
