import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { WaitStructuralComponent } from '@kokiri/core/dist/wait';

import { getComponentName } from '../basic';
import { getDirective } from './helper';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('wait'),
  directives: { busy: getDirective() },
})
export default class Wait extends WaitStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      this.tag || 'div',
      {
        class: this.className,
        attrs: { 'element-loading-text': this.text },
        directives: [{ name: 'busy', value: this.busy }],
      },
      this.$slots.default,
    );
  }
}
