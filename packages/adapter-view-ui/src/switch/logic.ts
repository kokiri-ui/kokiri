import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { SwitchStructuralComponent } from '@kokiri/core/dist/switch';
import { Switch as IvuSwitch } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('switch'),
})
export default class Switch extends SwitchStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      IvuSwitch,
      {
        class: this.className,
        props: { name: this.name, value: this.value, disabled: this.disabled },
        on: { 'on-change': this.onChange },
      },
      this.$slots.default,
    );
  }
}
