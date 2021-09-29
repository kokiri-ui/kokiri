import { Component } from 'vue-property-decorator';

import { DrawerStructuralComponent } from '@kokiri/core/dist/drawer';
import ElDrawer from 'element-ui/lib/drawer';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('drawer'),
  components: { ElDrawer },
})
export default class Drawer extends DrawerStructuralComponent {
  private get resolvedDirection(): string {
    let direction: string = '';

    switch (this.placement) {
      case 'top':
        direction = 'ttb';
        break;
      case 'right':
        direction = 'rtl';
        break;
      case 'bottom':
        direction = 'btt';
        break;
      case 'left':
        direction = 'ltr';
        break;
    }

    return direction;
  }
}
