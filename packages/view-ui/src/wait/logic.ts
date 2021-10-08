import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { WaitStructuralComponent } from '@kokiri/core/dist/wait';
import { Spin as IvuSpin } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('wait'),
})
export default class Wait extends WaitStructuralComponent {
  private render(h: CreateElement): VNode {
    const children: VNode[] = [...(this.$slots.default || [])];

    if (this.busy) {
      children.push(h(IvuSpin, { props: { fix: true } }, this.text || undefined));
    }

    return h(
      this.tag || 'div',
      { staticClass: 'Wait', class: [{ 'Wait--busy': this.busy }, this.className] },
      children,
    );
  }
}
