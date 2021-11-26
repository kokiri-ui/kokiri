import { Component } from 'vue-property-decorator';

import { getComponentName, TabPaneStructuralComponent } from '@kokiri/core/dist/tabs';

@Component({
  name: getComponentName('tabPane'),
})
export default class TabPane extends TabPaneStructuralComponent {
  public updated(): void {
    this.$parent.$emit('tab-pane-update');
  }
}
