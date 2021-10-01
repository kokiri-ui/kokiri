import { CreateElement, VNode, VNodeChildren } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, ToolbarStructuralComponent } from '@kokiri/core/dist/toolbar';

import { Flex } from '../flex';

@Component({
  name: getComponentName(),
})
export default class Toolbar extends ToolbarStructuralComponent {
  private render(h: CreateElement): VNode {
    const newNodes: VNode[] = [];

    if (this.content) {
      newNodes.push(
        h(
          'div',
          {
            class: [this.getDescendantClassName('content'), this.contentClassName],
          },
          [this.content],
        ),
      );
    }

    const children: VNodeChildren = this.$slots.default;

    if (children) {
      newNodes.push(
        h(
          'div',
          {
            class: [this.getDescendantClassName('extra'), this.extraClassName],
          },
          children,
        ),
      );
    }

    return h(
      Flex,
      { class: this.getComponentClassNames(), props: { tag: this.tag, align: 'center' } },
      newNodes,
    );
  }
}
