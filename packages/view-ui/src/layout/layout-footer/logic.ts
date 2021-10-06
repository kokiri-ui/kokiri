import { Component } from 'vue-property-decorator';

import { isNumber } from '@kokiri/core/dist/basic';
import { LayoutFooterStructuralComponent } from '@kokiri/core/dist/layout';
import { Footer as IvuFooter } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutFooter'),
  components: { IvuFooter },
})
export default class LayoutFooter extends LayoutFooterStructuralComponent {
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
