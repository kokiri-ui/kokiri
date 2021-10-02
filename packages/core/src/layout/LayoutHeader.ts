import { LooseSize } from 'petals-ui/dist/basic';
import { ILayoutHeaderComponent, LayoutHeaderHeadlessComponent } from 'petals-ui/dist/layout';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class LayoutHeaderStructuralComponent
  extends BaseStructuralComponent<LayoutHeaderHeadlessComponent>
  implements ILayoutHeaderComponent {
  @Prop({ type: [String, Number], default: 'none' })
  public readonly height!: LooseSize;

  public created(): void {
    this.setHeadlessComponent(new LayoutHeaderHeadlessComponent(this));
  }
}

export { LayoutHeaderStructuralComponent };
