import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { CheckboxStructuralComponent } from '@kokiri/core/dist/checkbox';
import { Checkbox as IvuCheckbox } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('checkbox'),
})
export default class Checkbox extends CheckboxStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      IvuCheckbox,
      {
        class: this.className,
        props: { name: this.name, value: this.checked, disabled: this.disabled },
        on: { 'on-change': this.onChange },
      },
      this.$slots.default,
    );
  }
}
