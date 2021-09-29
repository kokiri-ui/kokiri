import { CheckableValue } from 'petals-ui/dist/basic';
import { ICheckboxComponent, CheckboxHeadlessComponent } from 'petals-ui/dist/checkbox';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class CheckboxStructuralComponent
  extends BaseStructuralComponent<CheckboxHeadlessComponent>
  implements ICheckboxComponent {
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
    this.setHeadlessComponent(new CheckboxHeadlessComponent(this));
  }
}

export { CheckboxStructuralComponent };
