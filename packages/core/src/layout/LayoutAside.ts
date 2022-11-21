import { LooseSize } from 'petals-ui/dist/basic';
import { ILayoutAsideComponent, LayoutAsideHeadlessComponent } from 'petals-ui/dist/layout';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class LayoutAsideStructuralComponent
  extends BaseStructuralComponent<LayoutAsideHeadlessComponent>
  implements ILayoutAsideComponent {
  @Prop({ type: [String, Number], default: 'none' })
  public readonly width!: LooseSize;

  public created(): void {
    this.setHeadlessComponent(new LayoutAsideHeadlessComponent(this));
  }
}

export { LayoutAsideStructuralComponent };
