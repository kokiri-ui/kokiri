import { FormControlSize } from 'petals-ui/dist/form-control';
import {
  FormFieldLabelOption,
  FormValidationOption,
  FormLayoutType,
  IFormComponent,
  FormHeadlessComponent,
} from 'petals-ui/dist/form';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class FormStructuralComponent
  extends BaseStructuralComponent<FormHeadlessComponent>
  implements IFormComponent {
  @Prop({ type: Object, default: () => ({}) })
  public readonly labelOption!: FormFieldLabelOption;

  @Prop({ type: String, default: 'medium' })
  public readonly controlSize!: FormControlSize;

  @Prop({ type: Boolean, default: false })
  public readonly hideMessage!: boolean;

  @Prop({ type: Object, default: () => ({}) })
  public readonly value!: Record<string, any>;

  @Prop({ type: Object, default: () => ({}) })
  public readonly validation!: FormValidationOption;

  @Prop({ type: String, default: 'horizontal' })
  public readonly layout!: FormLayoutType;

  public created(): void {
    this.setHeadlessComponent(new FormHeadlessComponent(this));
  }
}

export { FormStructuralComponent };
