import { Component, Watch } from 'vue-property-decorator';

import { TabNavFlag, TabNavType } from 'petals-ui/dist/tab-bar';
import { getComponentName, TabsStructuralComponent } from '@kokiri/core/dist/tabs';

import { isSpecificComponent } from '../../../helper/utils';
import { ViewStack } from '../../view-stack';
import { TabBar } from '../../tab-bar';

@Component({
  name: getComponentName('tabs'),
  components: { ViewStack, TabBar },
})
export default class Tabs extends TabsStructuralComponent {
  private activeIndex: number = 0;

  private panes: any[] = [];

  private get tabNavs(): TabNavType[] {
    return this.panes.map(({ label, title, disabled = false }) => ({
      label: label || title,
      disabled,
    }));
  }

  @Watch('activeFlag', { immediate: true })
  private handleActiveChange(flag: TabNavFlag): void {
    const activeIndex: number = Number(flag);

    this.activeIndex = isNaN(activeIndex) ? 0 : activeIndex;
  }

  private getPaneSlots(): any[] {
    return this.$slots.default
      ? this.$slots.default.filter(vn => isSpecificComponent(vn, getComponentName('tabPane')))
      : [];
  }

  private calcPanes(isForceUpdate = false): void {
    if (this.$slots.default) {
      const panes = this.getPaneSlots().map(({ componentInstance }) => componentInstance);
      const panesChanged = !(
        panes.length === this.panes.length &&
        panes.every((pane, index) => pane === this.panes[index])
      );

      if (isForceUpdate || panesChanged) {
        this.panes = panes;
      }
    } else if (this.panes.length !== 0) {
      this.panes = [];
    }
  }

  private handleTabNavChange(...args): void {
    this.activeIndex = args[0];

    this.$forceUpdate();
    this.$nextTick(() => this.$emit('change', ...args));
  }

  public created(): void {
    this.$on('tab-pane-update', this.calcPanes.bind(null, true));
  }

  public mounted(): void {
    this.calcPanes();
  }

  public updated(): void {
    this.calcPanes();
  }
}
