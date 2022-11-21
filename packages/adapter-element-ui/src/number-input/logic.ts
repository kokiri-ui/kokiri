import { Component, Inject } from 'vue-property-decorator';
import ElInputNumber from 'element-ui/lib/input-number';

import { isNumber } from '@kokiri/core/dist/basic';
import { NumberInputStructuralComponent } from '@kokiri/core/dist/number-input';

import { getComponentName, convertSize } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('numberInput'),
  components: { ElInputNumber },
})
export default class NumberInput extends NumberInputStructuralComponent {
  @Inject({ from: 'elFormItem', default: null })
  private readonly elFormItem!: any;

  private get resolvedProps(): Record<string, any> {
    const props: Record<string, any> = {
      name: this.name,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      size: this.size
        ? convertSize(this.size)
        : (this.elFormItem && this.elFormItem.elFormItemSize) || 'medium',
      step: this.step,
      controlsPosition: 'right',
    };

    if (isNumber(this.max)) {
      props.max = this.max;
    }

    if (isNumber(this.min)) {
      props.min = this.min;
    }

    return props;
  }
}
