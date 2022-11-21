import { Component } from 'vue-property-decorator';

import { PopoverStructuralComponent } from '@kokiri/core/dist/popover';
import ElPopover from 'element-ui/lib/popover';

import { getComponentName, convertPlacement } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('popover'),
  components: { ElPopover },
})
export default class Popover extends PopoverStructuralComponent {
  private get resolvedPlacement(): string {
    return convertPlacement(this.placement);
  }
}
