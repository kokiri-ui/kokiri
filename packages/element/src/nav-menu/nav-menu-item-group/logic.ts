import { VNode, CreateElement } from 'vue';
import { Component } from 'vue-property-decorator';

import { getComponentName, NavMenuItemGroupStructuralComponent } from '@kokiri/core/dist/nav-menu';
import ElMenuItemGroup from 'element-ui/lib/menu-item-group';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('navMenuItemGroup'),
})
export default class NavMenuItemGroup extends NavMenuItemGroupStructuralComponent {
  private render(h: CreateElement): VNode {
    return h(
      ElMenuItemGroup,
      { class: this.className, props: { title: this.title } },
      this.$slots.default,
    );
  }
}
