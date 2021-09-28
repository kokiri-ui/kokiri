import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { ButtonStructuralComponent } from '@kokiri/core/dist/button';

@Component({
  name: getComponentName('button'),
})
export default class Button extends ButtonStructuralComponent {
  private render(h: CreateElement): VNode {
    const attrs: { [key: string]: any } = {};

    if (this.disabled) {
      attrs.disabled = 'disabled';
    }

    return h(
      'button',
      {
        class: this.getComponentClassNames(),
        attrs,
        on: { click: this.onClick },
      },
      this.$slots.default,
    );
  }
}
