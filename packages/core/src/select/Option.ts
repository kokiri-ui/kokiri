import {
  OptionValueType,
  ISelectOptionComponent,
  SelectOptionHeadlessComponent,
} from 'petals-ui/dist/select';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class SelectOptionStructuralComponent
  extends BaseStructuralComponent<SelectOptionHeadlessComponent>
  implements ISelectOptionComponent {
  @Prop({ type: [String, Number] })
  public readonly value!: OptionValueType;

  @Prop({ type: String })
  public readonly label!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  public created(): void {
    this.setHeadlessComponent(new SelectOptionHeadlessComponent(this));
  }
}

export { SelectOptionStructuralComponent };
