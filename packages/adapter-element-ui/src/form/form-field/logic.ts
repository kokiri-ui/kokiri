import { Component, Inject } from 'vue-property-decorator';

import { FormFieldStructuralComponent } from '@kokiri/core/dist/form';
import ElFormItem from 'element-ui/lib/form-item';

import { getComponentName, convertSize } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('formField'),
  components: { ElFormItem },
})
export default class FormField extends FormFieldStructuralComponent {
  @Inject({ from: 'elForm', default: null })
  private readonly elForm!: any;

  private get resolvedWidth(): string | undefined {
    const { width } = this.labelOption || {};

    return width ? `${width}` : undefined;
  }

  private get resolvedSize(): string {
    if (this.controlSize) {
      return convertSize(this.controlSize);
    }

    return (this.elForm && this.elForm.size) || 'medium';
  }
}
