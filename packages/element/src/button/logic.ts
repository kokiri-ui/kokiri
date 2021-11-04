import { includes } from '@ntks/toolbox';

import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { ButtonStructuralComponent } from '@kokiri/core/dist/button';
import ElButton from 'element-ui/lib/button';

import { getComponentName, convertSize } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('button'),
})
export default class Button extends ButtonStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      size: convertSize(this.size),
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
