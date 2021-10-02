import { Component, Mixins } from 'vue-property-decorator';

import { ComponentStyle } from 'petals-ui/dist/basic';
import { LayoutRole } from 'petals-ui/dist/layout';
import { getComponentName, LayoutAsideStructuralComponent } from '@kokiri/core/dist/layout';

import { LayoutControl } from '../LayoutControl';

@Component({
  name: getComponentName('layoutAside'),
})
export default class LayoutAside extends Mixins(LayoutAsideStructuralComponent, LayoutControl) {
  protected role: LayoutRole = 'aside';

  private computeStyle(): ComponentStyle {
    const width: string = this.getHeadlessComponent()!.getWidth();

    return width ? { width, marginLeft: `-${width}` } : {};
  }
}
