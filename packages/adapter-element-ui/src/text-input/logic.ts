import { Component, Inject } from 'vue-property-decorator';
import ElInput from 'element-ui/lib/input';

import { TextInputStructuralComponent } from '@kokiri/core/dist/text-input';

import { getComponentName, convertSize } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('textInput'),
  components: { ElInput },
})
export default class TextInput extends TextInputStructuralComponent {
  @Inject({ from: 'elFormItem', default: null })
  private readonly elFormItem!: any;

  private get resolvedProps(): Record<string, any> {
    const props: Record<string, any> = {
      name: this.name,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
      size: this.size
        ? convertSize(this.size)
        : (this.elFormItem && this.elFormItem.elFormItemSize) || 'medium',
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
