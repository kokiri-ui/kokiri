import { CreateElement, VNode } from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import { TextAreaStructuralComponent } from '@kokiri/core/dist/text-area';
import { Input as IvuInput } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  name: getComponentName('textArea'),
})
export default class TextArea extends TextAreaStructuralComponent {
  @Emit('input')
  private handleInput(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('change')
  private handleChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      type: 'textarea',
      name: this.name,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
      rows: this.rows,
      showWordLimit: this.wordage,
    };

    if (this.size === 'large' || this.size === 'small') {
      props.size = this.size;
    }

    if (this.maxLength) {
      props.maxlength = this.maxLength;
    }

    if (this.minLength) {
      props.minlength = this.minLength;
    }

    return h(
      IvuInput,
      { props, on: { input: this.handleInput, change: this.handleChange } },
      this.$slots.default,
    );
  }
}
