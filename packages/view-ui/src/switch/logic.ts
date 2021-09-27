import { CreateElement, VNode } from 'vue';
import { Component, Emit } from 'vue-property-decorator';

import { SwitchStructuralComponent } from '@kokiri/core/dist/switch';
import { Switch as IvuSwitch } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  name: getComponentName('switch'),
})
export default class Switch extends SwitchStructuralComponent {
  @Emit('change')
  private handleChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  private render(h: CreateElement): VNode {
    return h(
      IvuSwitch,
      {
        props: { name: this.name, value: this.value, disabled: this.disabled },
        on: { change: this.handleChange },
      },
      this.$slots.default,
    );
  }
}
