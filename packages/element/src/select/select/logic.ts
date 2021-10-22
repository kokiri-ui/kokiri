import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { SelectStructuralComponent } from '@kokiri/core/dist/select';
import ElSelect from 'element-ui/lib/select';

import { getComponentName, convertSize } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('select'),
})
export default class Select extends SelectStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      name: this.name,
      value: this.value,
      size: convertSize(this.size),
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
      multiple: this.multiple,
      popperAppendToBody: this.popupAppendToBody,
    };

    return h(
      ElSelect,
      { class: this.className, props, on: { change: this.onChange } },
      this.$slots.default,
    );
  }
}
