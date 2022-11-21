import { FormControlSize } from 'petals-ui/dist/form-control';
import {
  FormFieldLabelOption,
  IFormFieldComponent,
  FormFieldHeadlessComponent,
} from 'petals-ui/dist/form';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class FormFieldStructuralComponent
  extends BaseStructuralComponent<FormFieldHeadlessComponent>
  implements IFormFieldComponent {
  @Prop({ type: Object, default: () => ({}) })
  public readonly labelOption!: FormFieldLabelOption;

  @Prop({ type: String })
  public readonly controlSize!: FormControlSize;

  @Prop({ type: Boolean, default: false })
  public readonly hideMessage!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly required!: boolean;

  @Prop({ type: String })
  public readonly label!: string;

  @Prop({ type: String })
  public readonly hint!: string;

  @Prop({ type: String })
  public readonly message!: string;

  @Prop({ type: String })
  public readonly separator!: string;

  public created(): void {
    this.setHeadlessComponent(new FormFieldHeadlessComponent(this));
  }
}

export { FormFieldStructuralComponent };
