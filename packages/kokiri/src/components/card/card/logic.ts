import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, CardStructuralComponent } from '@kokiri/core/dist/card';

import { isSpecificComponent } from '../../../helper/utils';
import CardHeader from './CardHeader.vue';

@Component({
  name: getComponentName('card'),
})
export default class Card extends CardStructuralComponent {
  private render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;
    let footer: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach((vn: any) => {
      if (isSpecificComponent(vn, getComponentName('cardHeader'))) {
        header = vn;
      } else if (isSpecificComponent(vn, getComponentName('cardFooter'))) {
        footer = vn;
      } else {
        bodyNodes.push(vn);
      }
    });

    children.push(
      h(
        'div',
        {
          class: [this.getDescendantClassName('body'), this.bodyClassName],
          style: this.bodyStyle,
        },
        bodyNodes,
      ),
    );

    if (!header && this.title) {
      header = h(CardHeader, { props: { title: this.title } });
    }

    if (header) {
      children.unshift(header);
    }

    if (footer) {
      children.push(footer);
    }

    return h('div', { class: this.getComponentClassNames() }, children);
  }
}
