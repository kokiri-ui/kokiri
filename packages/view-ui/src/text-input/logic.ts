import { CreateElement, VNode } from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import { TextInputStructuralComponent } from '@kokiri/core/dist/text-input';
import { Input as IvuInput } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('textInput'),
})
export default class TextInput extends TextInputStructuralComponent {
  @Emit('input')
  private handleInput(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('change')
  private handleChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      name: this.name,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
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
