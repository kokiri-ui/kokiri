import { CreateElement, VNode } from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import { RadioGroupStructuralComponent } from '@kokiri/core/dist/radio';
import { RadioGroup as IvuRadioGroup } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  name: getComponentName('radioGroup'),
})
export default class RadioGroup extends RadioGroupStructuralComponent {
  @Emit('change')
  private handleChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private render(h: CreateElement): VNode {
    return h(
      IvuRadioGroup,
      {
        props: { name: this.name, value: this.value, disabled: this.disabled },
        on: { input: this.handleChange },
      },
      this.$slots.default,
    );
  }
}
