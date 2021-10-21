import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { TextStructuralComponent } from '@kokiri/core/dist/text';

import { getComponentName } from '../basic';
import { Ellipsis } from '../ellipsis';

@Component({
  name: getComponentName('text'),
})
export default class Text extends TextStructuralComponent {
  private render(h: CreateElement): VNode {
    return this.ellipsis
      ? h(
          Ellipsis,
          { props: { tag: 'span', className: ['Text', 'Text--ellipsis'] } },
          this.$slots.default,
        )
      : h('span', { staticClass: 'Text' }, this.$slots.default);
  }
}
