import { IFormFieldHintComponent, FormFieldHintHeadlessComponent } from 'petals-ui/dist/form';

import { Component } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class FormFieldHintStructuralComponent
  extends BaseStructuralComponent<FormFieldHintHeadlessComponent>
  implements IFormFieldHintComponent {
  public created(): void {
    this.setHeadlessComponent(new FormFieldHintHeadlessComponent(this));
  }
}

export { FormFieldHintStructuralComponent };
