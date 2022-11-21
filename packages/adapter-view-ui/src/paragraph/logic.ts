import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { ParagraphStructuralComponent } from '@kokiri/core/dist/paragraph';

import { getComponentName } from '../basic';
import { Ellipsis } from '../ellipsis';

@Component({
  name: getComponentName('paragraph'),
})
export default class Paragraph extends ParagraphStructuralComponent {
  private render(h: CreateElement): VNode {
    return this.ellipsis
      ? h(
          Ellipsis,
          { props: { tag: 'p', className: ['Paragraph', 'Paragraph--ellipsis'] } },
          this.$slots.default,
        )
      : h('p', { staticClass: 'Paragraph' }, this.$slots.default);
  }
}
