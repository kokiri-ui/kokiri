import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { BoxStructuralComponent } from '@kokiri/core/dist/box';

@Component({
  name: getComponentName('box'),
})
export default class Box extends BoxStructuralComponent {}
