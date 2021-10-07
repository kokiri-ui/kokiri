import { Component } from 'vue-property-decorator';

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
  private get resolvedWidth(): string | undefined {
    const { width } = this.labelOption || {};

    return width ? `${width}` : undefined;
  }

  private get resolvedSize(): string | undefined {
    return this.controlSize ? convertSize(this.controlSize) : undefined;
  }
}
