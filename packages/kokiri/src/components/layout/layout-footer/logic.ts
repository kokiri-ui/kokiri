import { Component, Mixins } from 'vue-property-decorator';

import { ComponentStyle } from 'petals-ui/dist/basic';
import { LayoutRole } from 'petals-ui/dist/layout';
import { getComponentName, LayoutFooterStructuralComponent } from '@kokiri/core/dist/layout';

import { LayoutControl } from '../LayoutControl';

@Component({
  name: getComponentName('layoutFooter'),
})
export default class LayoutFooter extends Mixins(LayoutFooterStructuralComponent, LayoutControl) {
  protected role: LayoutRole = 'footer';

  private computeStyle(): ComponentStyle {
    const height: string = this.getHeadlessComponent()!.getHeight();

    return height ? { height, marginBottom: `-${height}` } : {};
  }
}
