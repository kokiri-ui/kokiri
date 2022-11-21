import { includes } from '@ntks/toolbox';

import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { ButtonStructuralComponent } from '@kokiri/core/dist/button';
import { Button as IvuButton } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('button'),
})
export default class Button extends ButtonStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      disabled: this.disabled,
      ghost: this.outlined,
      htmlType: this.nativeType,
    };

    if (includes(this.color, ['primary', 'success', 'warning', 'danger', 'info'])) {
      props.type = this.color === 'danger' ? 'error' : this.color;
    }

    if (this.border === 'dashed') {
      props.type = 'dashed';
    } else if (this.border === 'none') {
      props.type = 'text';
    }

    if (includes(this.size, ['large', 'small'])) {
      props.size = this.size;
    }

    return h(
      IvuButton,
      { class: this.className, props, on: { click: this.onClick } },
      this.$slots.default,
    );
  }
}
