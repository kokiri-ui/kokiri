import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, CardHeaderStructuralComponent } from '@kokiri/core/dist/card';

import { Toolbar } from '../../toolbar';

@Component({
  name: getComponentName('cardHeader'),
})
export default class CardHeader extends CardHeaderStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      Toolbar,
      {
        class: this.getComponentClassNames(),
        props: {
          tag: this.tag,
          content: this.title,
          contentClassName: this.getDescendantClassName('title'),
          extraClassName: this.getDescendantClassName('extra'),
        },
      },
      this.image
        ? [h('img', { class: this.getDescendantClassName('image'), attrs: { src: this.image } })]
        : this.$slots.default,
    );
  }
}
