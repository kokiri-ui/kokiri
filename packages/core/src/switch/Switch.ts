import { ISwitchComponent, SwitchHeadlessComponent } from 'petals-ui/dist/switch';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class SwitchStructuralComponent
  extends BaseStructuralComponent<SwitchHeadlessComponent>
  implements ISwitchComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: Boolean })
  public readonly value!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly checked!: boolean;

  public created(): void {
    this.setHeadlessComponent(new SwitchHeadlessComponent(this));
  }
}

export { SwitchStructuralComponent };
