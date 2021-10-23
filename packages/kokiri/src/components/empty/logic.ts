import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { EmptyStructuralComponent } from '@kokiri/core/dist/empty';

@Component({
  name: getComponentName('empty'),
})
export default class Empty extends EmptyStructuralComponent {
  private get resolvedImage(): string {
    return this.image || './empty.png';
  }
}
