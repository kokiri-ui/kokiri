import { Component } from 'vue-property-decorator';
import ElDropdownItem from 'element-ui/lib/dropdown-item';

import { DropdownMenuItemStructuralComponent } from '@kokiri/core/dist/dropdown';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('dropdownMenuItem'),
  components: { ElDropdownItem },
})
export default class DropdownMenuItem extends DropdownMenuItemStructuralComponent {}
