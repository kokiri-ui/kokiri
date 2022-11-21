import { Component } from 'vue-property-decorator';

import { PopoverStructuralComponent } from '@kokiri/core/dist/popover';
import { Poptip as IvuPoptip } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('popover'),
  components: { IvuPoptip },
})
export default class Popover extends PopoverStructuralComponent {
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
