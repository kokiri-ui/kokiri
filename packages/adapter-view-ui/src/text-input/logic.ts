import { Component } from 'vue-property-decorator';

import { TextInputStructuralComponent } from '@kokiri/core/dist/text-input';
import { Input as IvuInput } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('textInput'),
  components: { IvuInput },
})
export default class TextInput extends TextInputStructuralComponent {
  private get resolvedProps(): Record<string, any> {
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

    return props;
  }
}
