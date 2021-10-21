import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { HeadingStructuralComponent } from '@kokiri/core/dist/heading';

import { getComponentName } from '../basic';
import { Ellipsis } from '../ellipsis';

@Component({
  name: getComponentName('heading'),
})
export default class Heading extends HeadingStructuralComponent {
  private render(h: CreateElement): VNode {
    return this.ellipsis
      ? h(
          Ellipsis,
          { props: { tag: this.resolvedTag, className: ['Heading', 'Heading--ellipsis'] } },
          this.$slots.default,
        )
      : h(this.resolvedTag, { staticClass: 'Heading' }, this.$slots.default);
  }
}
