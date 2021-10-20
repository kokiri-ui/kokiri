import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { EllipsisStructuralComponent } from '@kokiri/core/dist/ellipsis';

@Component({
  name: getComponentName('ellipsis'),
})
export default class Ellipsis extends EllipsisStructuralComponent {
  private get resolvedTitle(): string {
    return this.contentOverflow ? this.content : '';
  }
}
