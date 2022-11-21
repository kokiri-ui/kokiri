import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, ListStructuralComponent } from '@kokiri/core/dist/list';

import { isSpecificComponent } from '../../../helper/utils';
import { Box } from '../../box';

@Component({
  name: getComponentName('list'),
})
export default class List extends ListStructuralComponent {
  private render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;
    let footer: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach(vn => {
      if (isSpecificComponent(vn, 'BudsListHeader')) {
        header = vn;
      } else if (isSpecificComponent(vn, 'BudsListFooter')) {
        footer = vn;
      } else if (isSpecificComponent(vn, 'BudsListItem')) {
        bodyNodes.push(vn);
      }
    });

    const bodyClassNames: string[] = [this.getDescendantClassName('body')];

    if (this.bodyClassName) {
      bodyClassNames.push(this.bodyClassName);
    }

    if (bodyNodes.length > 0) {
      children.push(h(Box, { class: bodyClassNames }, [h('ul', bodyNodes)]));
    } else {
      children.push(h(Box, { class: bodyClassNames }));
    }

    if (header) {
      children.unshift(header);
    }

    if (footer) {
      children.push(footer);
    }

    return h(Box, { class: this.getComponentClassNames() }, children);
  }
}
