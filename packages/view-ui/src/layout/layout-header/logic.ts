import { Component } from 'vue-property-decorator';

import { isNumber } from '@kokiri/core/dist/basic';
import { LayoutHeaderStructuralComponent } from '@kokiri/core/dist/layout';
import { Header as IvuHeader } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutHeader'),
  components: { IvuHeader },
})
export default class LayoutHeader extends LayoutHeaderStructuralComponent {
  private get resolvedStyle(): Record<string, any> {
    const style: Record<string, any> = {};

    if (isNumber(this.height)) {
      style.height = `${this.height}px`;
    } else if (this.height !== 'none') {
      style.height = this.height;
    }

    return style;
  }
}
