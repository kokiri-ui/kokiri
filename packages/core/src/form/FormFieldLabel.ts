import {
  FormFieldLabelWidth,
  FormFieldLabelAlignment,
  IFormFieldLabelComponent,
  FormFieldLabelHeadlessComponent,
} from 'petals-ui/dist/form';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class FormFieldLabelStructuralComponent
  extends BaseStructuralComponent<FormFieldLabelHeadlessComponent>
  implements IFormFieldLabelComponent {
  @Prop({ type: [Number, String] })
  public readonly width!: FormFieldLabelWidth;

  @Prop({ type: String, default: 'right' })
  public readonly align!: FormFieldLabelAlignment;

  public created(): void {
    this.setHeadlessComponent(new FormFieldLabelHeadlessComponent(this));
  }
}

export { FormFieldLabelStructuralComponent };
