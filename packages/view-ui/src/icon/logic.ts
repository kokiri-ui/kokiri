import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { IconStructuralComponent } from '@kokiri/core/dist/icon';
import { Icon as IvuIcon } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('icon'),
})
export default class Icon extends IconStructuralComponent {
  private render(h: CreateElement): VNode {
    const props: Record<string, any> = {};

    if (this.iconType === 'font') {
      const hc = this.getHeadlessComponent()!;
      const { provider, ref } = hc.getOption();

      if (provider === 'ivu') {
        props.type = ref;
      } else {
        props.custom = hc.getFontIconClassNames().join(' ');
      }
    }

    return h(
      IvuIcon,
      { class: this.className, props, on: { click: this.onClick } },
      this.$slots.default,
    );
  }
}
