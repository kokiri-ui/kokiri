import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { SelectStructuralComponent } from '@kokiri/core/dist/select';
import { Select as IvuSelect } from 'view-design';

import { getComponentName } from '../../basic';

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
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
      multiple: this.multiple,
      transfer: this.popupAppendToBody,
    };

    if (this.size === 'large' || this.size === 'small') {
      props.size = this.size;
    }

    return h(
      IvuSelect,
      { class: this.className, props, on: { 'on-change': this.onChange } },
      this.$slots.default,
    );
  }
}
