import { CheckableValue } from 'petals-ui/dist/basic';
import { IRadioGroupComponent, RadioGroupHeadlessComponent } from 'petals-ui/dist/radio';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class RadioGroupStructuralComponent
  extends BaseStructuralComponent<RadioGroupHeadlessComponent>
  implements IRadioGroupComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: [String, Number, Boolean] })
  public readonly value!: CheckableValue;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Emit('change')
  protected onChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new RadioGroupHeadlessComponent(this));
  }
}

export { RadioGroupStructuralComponent };
