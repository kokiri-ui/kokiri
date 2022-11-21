import { Component } from 'vue-property-decorator';

import { TooltipStructuralComponent } from '@kokiri/core/dist/tooltip';
import { Tooltip as IvuTooltip } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('tooltip'),
  components: { IvuTooltip },
})
export default class Tooltip extends TooltipStructuralComponent {
  private get resolvedPlacement(): string {
    const parts = this.placement.split('-');

    if (parts.length === 1) {
      return this.placement;
    }

    return parts[0] === 'top' || parts[0] === 'bottom'
      ? `${parts[0]}-${parts[1] === 'left' ? 'start' : 'end'}`
      : `${parts[0]}-${parts[1] === 'top' ? 'start' : 'end'}`;
  }
}
