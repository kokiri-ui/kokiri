import { CreateElement, VNode } from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import { RadioStructuralComponent } from '@kokiri/core/dist/radio';
import { Radio as IvuRadio } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('radio'),
})
export default class Radio extends RadioStructuralComponent {
  @Emit('change')
  private handleChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private render(h: CreateElement): VNode {
    return h(
      IvuRadio,
      {
        props: { name: this.name, label: this.value, disabled: this.disabled },
        on: { input: this.handleChange },
      },
      this.$slots.default,
    );
  }
}
