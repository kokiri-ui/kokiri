import { Component } from 'vue-property-decorator';

import { getComponentName, TabNavStructuralComponent } from '@kokiri/core/dist/tab-bar';

@Component({
  name: getComponentName('tabNav'),
})
export default class TabNav extends TabNavStructuralComponent {
  private handleClick(): void {
    if (this.active || this.disabled) {
      return;
    }

    this.$emit('change', this.flag);
  }
}
