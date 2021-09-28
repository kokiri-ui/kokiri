import { IIconComponent, IconHeadlessComponent } from 'petals-ui/dist/icon';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class IconStructuralComponent
  extends BaseStructuralComponent<IconHeadlessComponent>
  implements IIconComponent {
  @Prop({ type: String, default: '' })
  public readonly refs!: string;

  public created(): void {
    this.setHeadlessComponent(new IconHeadlessComponent(this));
  }
}

export { IconStructuralComponent };
