import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { TextAreaStructuralComponent } from '@kokiri/core/dist/text-area';
import { Input as IvuInput } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('textArea'),
})
export default class TextArea extends TextAreaStructuralComponent {
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
      { class: this.className, props, on: { input: this.onInput, 'on-change': this.onChange } },
      this.$slots.default,
    );
  }
}
