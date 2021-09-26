import { includes } from '@ntks/toolbox';

import { CreateElement, VNode } from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import { ButtonStructuralComponent } from '@kokiri/core/dist/button';
import ElButton from 'element-ui/lib/button';

import { getComponentName } from '../basic';
import { convertSize } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('button'),
})
export default class Button extends ButtonStructuralComponent {
  @Emit('click')
  private handleClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private render(h: CreateElement): VNode {
    const props: Record<string, any> = { size: convertSize(this.size), disabled: this.disabled };

    if (includes(this.color, ['primary', 'success', 'warning', 'danger', 'info'])) {
      props.type = this.color;
    }

    if (this.border === 'none') {
      props.type = 'text';
    }

    return h(ElButton, { props, on: { click: this.handleClick } }, this.$slots.default);
  }
}
