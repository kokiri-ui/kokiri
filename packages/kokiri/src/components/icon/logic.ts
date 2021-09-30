import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { IconStructuralComponent } from '@kokiri/core/dist/icon';

@Component({
  name: getComponentName('icon'),
})
export default class Icon extends IconStructuralComponent {
  private get computedClassNames(): string[] {
    return this.getComponentClassNames();
  }

  private get computedDescendantClassName(): string {
    return this.getDescendantClassName('content');
  }
}
