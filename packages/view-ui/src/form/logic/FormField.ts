import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { FormFieldStructuralComponent } from '@kokiri/core/dist/form';
import { FormItem as IvuFormItem } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('formField'),
})
export default class FormField extends FormFieldStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      showMessage: !this.hideMessage,
      required: this.required,
      label: this.label,
      error: this.message,
    };

    const { width } = this.labelOption || {};

    if (width) {
      props.labelWidth = width;
    }

    return h(IvuFormItem, { props }, this.$slots.default);
  }
}
