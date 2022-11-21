import { Component } from 'vue-property-decorator';

import { getComponentName, NavMenuItemStructuralComponent } from '@kokiri/core/dist/nav-menu';
import ElMenuItem from 'element-ui/lib/menu-item';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('navMenuItem'),
  components: { ElMenuItem },
})
export default class NavMenuItem extends NavMenuItemStructuralComponent {}
