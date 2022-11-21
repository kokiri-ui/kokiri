import { Component } from 'vue-property-decorator';

import { ComponentStyle } from 'petals-ui/dist/basic';
import { getComponentName, GridRowStructuralComponent } from '@kokiri/core/dist/grid';

@Component({
  name: getComponentName('gridRow'),
})
export default class GridRow extends GridRowStructuralComponent {
  private get computedStyle(): ComponentStyle {
    const gutter: number = this.getHeadlessComponent()!.getGutter();

    if (gutter === 0) {
      return {};
    }

    const gutterSize = `-${gutter / 2}px`;

    return { marginLeft: gutterSize, marginRight: gutterSize };
  }
}
