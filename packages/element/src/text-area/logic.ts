import { Component } from 'vue-property-decorator';

import { TextAreaStructuralComponent } from '@kokiri/core/dist/text-area';
import ElInput from 'element-ui/lib/input';

import { getComponentName, convertSize } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('textArea'),
  components: { ElInput },
})
export default class TextArea extends TextAreaStructuralComponent {
  private get resolvedProps(): Record<string, any> {
    const props: Record<string, any> = {
      type: 'textarea',
      name: this.name,
      value: this.value,
      size: convertSize(this.size),
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

    return props;
  }
}
