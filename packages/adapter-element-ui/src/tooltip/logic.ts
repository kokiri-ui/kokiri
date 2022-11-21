import { Component } from 'vue-property-decorator';

import { TooltipStructuralComponent } from '@kokiri/core/dist/tooltip';
import ElTooltip from 'element-ui/lib/tooltip';

import { getComponentName, convertPlacement } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('tooltip'),
  components: { ElTooltip },
})
export default class Tooltip extends TooltipStructuralComponent {
  private get resolvedPlacement(): string {
    return convertPlacement(this.placement);
  }
}
