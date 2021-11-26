import { Component } from 'vue-property-decorator';

import { getComponentName } from '@kokiri/core/dist/basic';
import { EmptyStructuralComponent } from '@kokiri/core/dist/empty';

import { EmptyImage } from '../empty-image';

@Component({
  name: getComponentName('empty'),
  components: { EmptyImage },
})
export default class Empty extends EmptyStructuralComponent {}
