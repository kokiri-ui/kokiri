import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, PanelHeaderStructuralComponent } from '@kokiri/core/dist/panel';

import { Toolbar } from '../../toolbar';

@Component({
  name: getComponentName('panelHeader'),
})
export default class PanelHeader extends PanelHeaderStructuralComponent {
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
      this.$slots.default,
    );
  }
}
