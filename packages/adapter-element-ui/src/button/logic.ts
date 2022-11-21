import { includes } from '@ntks/toolbox';

import { CreateElement, VNode } from 'vue';
import { Component, Inject } from 'vue-property-decorator';

import { ButtonStructuralComponent } from '@kokiri/core/dist/button';
import ElButton from 'element-ui/lib/button';

import { getComponentName, convertSize } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('button'),
})
export default class Button extends ButtonStructuralComponent {
  @Inject({ from: 'elFormItem', default: null })
  private readonly elFormItem!: any;

  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      size: this.size
        ? convertSize(this.size)
        : (this.elFormItem && this.elFormItem.elFormItemSize) || 'medium',
      disabled: this.disabled,
      plain: this.outlined,
      nativeType: this.nativeType,
    };

    if (includes(this.color, ['primary', 'success', 'warning', 'danger', 'info'])) {
      props.type = this.color;
    }

    if (this.border === 'none') {
      props.type = 'text';
    }

    return h(
      ElButton,
      { class: this.className, props, on: { click: this.onClick } },
      this.$slots.default,
    );
  }
}
