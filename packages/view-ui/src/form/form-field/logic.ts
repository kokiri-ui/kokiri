import { Component } from 'vue-property-decorator';

import { FormFieldStructuralComponent } from '@kokiri/core/dist/form';
import { FormItem as IvuFormItem } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('formField'),
  components: { IvuFormItem },
})
export default class FormField extends FormFieldStructuralComponent {
  private get resolvedWidth(): number | undefined {
    const resolvedWidth = parseFloat((this.labelOption || {}).width as any);

    return isNaN(resolvedWidth) ? undefined : resolvedWidth;
  }
}
