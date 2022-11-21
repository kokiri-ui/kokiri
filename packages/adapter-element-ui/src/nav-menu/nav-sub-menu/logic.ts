import { Component } from 'vue-property-decorator';

import { getComponentName, NavSubMenuStructuralComponent } from '@kokiri/core/dist/nav-menu';
import ElSubmenu from 'element-ui/lib/submenu';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('navSubMenu'),
  components: { ElSubmenu },
})
export default class NavSubMenu extends NavSubMenuStructuralComponent {}
