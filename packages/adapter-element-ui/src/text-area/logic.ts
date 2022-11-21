import { Component, Inject } from 'vue-property-decorator';

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
  @Inject({ from: 'elFormItem', default: null })
  private readonly elFormItem!: any;

  private get resolvedProps(): Record<string, any> {
    const props: Record<string, any> = {
      type: 'textarea',
      name: this.name,
      value: this.value,
      size: this.size
        ? convertSize(this.size)
        : (this.elFormItem && this.elFormItem.elFormItemSize) || 'medium',
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
      rows: this.rows,
      showWordLimit: this.showWordage,
    };

    if (this.maxLength) {
      props.maxlength = this.maxLength;
    }

    if (this.minLength) {
      props.minlength = this.minLength;
    }

    return props;
  }
}
