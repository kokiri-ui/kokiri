import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, PanelStructuralComponent } from '@kokiri/core/dist/panel';

import { isSpecificComponent } from '../../../helper/utils';
import PanelHeader from './PanelHeader.vue';

@Component({
  name: getComponentName('panel'),
})
export default class Panel extends PanelStructuralComponent {
  private render(h: CreateElement): VNode {
    const children: VNode[] = [];
    const bodyNodes: VNode[] = [];

    let header: VNode | undefined;

    (this.$slots.default || ([] as VNode[])).forEach((vn: any) => {
      if (isSpecificComponent(vn, getComponentName('panelHeader'))) {
        header = vn;
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
      header = h(PanelHeader, { props: { title: this.title } });
    }

    if (header) {
      children.unshift(header);
    }

    return h('div', { class: this.getComponentClassNames() }, children);
  }
}
