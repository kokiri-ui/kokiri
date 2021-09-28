import { CheckableValue } from 'petals-ui/dist/basic';
import { IRadioComponent, RadioHeadlessComponent } from 'petals-ui/dist/radio';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class RadioStructuralComponent
  extends BaseStructuralComponent<RadioHeadlessComponent>
  implements IRadioComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: [String, Number, Boolean] })
  public readonly value!: CheckableValue;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly checked!: boolean;

  @Emit('change')
  protected onChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new RadioHeadlessComponent(this));
  }
}

export { RadioStructuralComponent };
