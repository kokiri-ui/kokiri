import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { IconStructuralComponent } from '@kokiri/core/dist/icon';
import ElIcon from 'element-ui/lib/icon';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('icon'),
})
export default class Icon extends IconStructuralComponent {
  private render(h: CreateElement): VNode | null {
    if (this.iconType !== 'font') {
      return null;
    }

    const hc = this.getHeadlessComponent()!;
    const { provider, ref } = hc.getOption();

    return provider === 'el'
      ? h(
          ElIcon,
          { class: this.className, props: { name: ref }, on: { click: this.onClick } },
          this.$slots.default,
        )
      : h(
          'i',
          {
            class: [...hc.getFontIconClassNames(), this.className],
            on: { click: this.onClick },
          },
          this.$slots.default,
        );
  }
}
