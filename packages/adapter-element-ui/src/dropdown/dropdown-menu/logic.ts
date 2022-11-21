import { Component } from 'vue-property-decorator';

import { DropdownMenuStructuralComponent } from '@kokiri/core/dist/dropdown';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('dropdownMenu'),
})
export default class DropdownMenu extends DropdownMenuStructuralComponent {}
