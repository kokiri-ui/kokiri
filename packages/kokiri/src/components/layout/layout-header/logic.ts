import { Component, Mixins } from 'vue-property-decorator';

import { ComponentStyle } from 'petals-ui/dist/basic';
import { LayoutRole } from 'petals-ui/dist/layout';
import { getComponentName, LayoutHeaderStructuralComponent } from '@kokiri/core/dist/layout';

import { Flex } from '../../flex';
import { LayoutControl } from '../LayoutControl';

@Component({
  name: getComponentName('layoutHeader'),
  components: { Flex },
})
export default class LayoutHeader extends Mixins(LayoutHeaderStructuralComponent, LayoutControl) {
  protected role: LayoutRole = 'header';

  private computeStyle(): ComponentStyle {
    const height: string = this.getHeadlessComponent()!.getHeight();

    return height ? { height, marginTop: `-${height}` } : {};
  }
}
