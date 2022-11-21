import { Component } from 'vue-property-decorator';

import { CheckboxStructuralComponent } from '@kokiri/core/dist/checkbox';
import ElCheckbox from 'element-ui/lib/checkbox';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('checkbox'),
  components: { ElCheckbox },
})
export default class Checkbox extends CheckboxStructuralComponent {}
