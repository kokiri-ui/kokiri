import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { RadioGroupStructuralComponent } from '@kokiri/core/dist/radio';
import { RadioGroup as IvuRadioGroup } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('radioGroup'),
})
export default class RadioGroup extends RadioGroupStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      IvuRadioGroup,
      {
        class: this.className,
        props: { name: this.name, value: this.value, disabled: this.disabled },
        on: { 'on-change': this.onChange },
      },
      this.$slots.default,
    );
  }
}
