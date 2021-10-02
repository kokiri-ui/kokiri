import { Component } from 'vue-property-decorator';

import { ComponentStyle } from 'petals-ui/dist/basic';
import { getComponentName, GridColStructuralComponent } from '@kokiri/core/dist/grid';

import { isSpecificComponent } from '../../../helper/utils';
import { Box } from '../../box';

@Component({
  name: getComponentName('gridCol'),
  components: { Box },
})
export default class GridCol extends GridColStructuralComponent {
  private get rowGutter(): number {
    let parent = this.$parent as any;

    while (
      parent &&
      parent.$vnode &&
      !isSpecificComponent(parent.$vnode, getComponentName('gridRow'))
    ) {
      parent = parent.$parent;
    }

    return parent && parent.getHeadlessComponent ? parent.getHeadlessComponent()!.getGutter() : 0;
  }

  private get computedStyle(): ComponentStyle {
    const gutter: number = this.rowGutter;

    if (gutter === 0) {
      return {};
    }

    const gutterSize = `${gutter / 2}px`;

    return { paddingLeft: gutterSize, paddingRight: gutterSize };
  }
}
