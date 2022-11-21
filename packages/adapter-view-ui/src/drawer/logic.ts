import { Component } from 'vue-property-decorator';

import { DrawerStructuralComponent } from '@kokiri/core/dist/drawer';
import { Drawer as IvuDrawer } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('drawer'),
  components: { IvuDrawer },
})
export default class Drawer extends DrawerStructuralComponent {}
