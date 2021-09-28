import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { RadioStructuralComponent } from '@kokiri/core/dist/radio';
import { Radio as IvuRadio } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('radio'),
})
export default class Radio extends RadioStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      IvuRadio,
      {
        class: this.className,
        props: { name: this.name, label: this.value, disabled: this.disabled },
        on: { 'on-change': this.onChange },
      },
      this.$slots.default,
    );
  }
}
