import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { SelectOptionStructuralComponent } from '@kokiri/core/dist/select';
import { Option as IvuOption } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  name: getComponentName('selectOption'),
})
export default class Option extends SelectOptionStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      IvuOption,
      { props: { value: this.value, label: this.label, disabled: this.disabled } },
      this.$slots.default,
    );
  }
}
