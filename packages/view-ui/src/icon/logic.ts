import { CreateElement, VNode } from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import { IconStructuralComponent } from '@kokiri/core/dist/icon';
import { Icon as IvuIcon } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  name: getComponentName('icon'),
})
export default class Icon extends IconStructuralComponent {
  @Emit('click')
  private onClick(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private render(h: CreateElement): VNode {
    return h(
      IvuIcon,
      { props: { type: this.refs }, on: { click: this.onClick } },
      this.$slots.default,
    );
  }
}
