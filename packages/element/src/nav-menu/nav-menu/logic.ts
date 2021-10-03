import { VNode, CreateElement } from 'vue';
import { Component, Watch } from 'vue-property-decorator';

import { MenuDirection } from 'petals-ui/dist/nav-menu';
import { getComponentName, NavMenuStructuralComponent } from '@kokiri/core/dist/nav-menu';
import ElMenu from 'element-ui/lib/menu';
import { MenuDisplayMode } from 'element-ui/types/menu';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('navMenu'),
})
export default class NavMenu extends NavMenuStructuralComponent {
  private menuMode!: MenuDisplayMode;

  private isCollapsed!: boolean;

  private updateCollapsed(): void {
    this.isCollapsed = this.menuMode === 'vertical' ? this.collapsed : false;
  }

  @Watch('direction', { immediate: true })
  private handleModeChange(val: MenuDirection): void {
    this.menuMode = val === 'horizontal' ? 'horizontal' : 'vertical';

    this.updateCollapsed();
  }

  @Watch('collapsed')
  private handleCollapsedChange(val: boolean): void {
    this.updateCollapsed();
  }

  private render(h: CreateElement): VNode {
    return h(
      ElMenu,
      {
        class: this.className,
        props: {
          mode: this.menuMode,
          collapse: this.isCollapsed,
          collapseTransition: false,
        },
        on: {
          select: this.onMenuItemSelect,
          open: this.onMenuItemOpen,
          close: this.onMenuItemClose,
        },
      },
      this.$slots.default,
    );
  }
}
