import { Component } from 'vue-property-decorator';

import { EllipsisStructuralComponent } from '@kokiri/core/dist/ellipsis';

import { getComponentName } from '../basic';
import { Tooltip } from '../tooltip';

@Component({
  name: getComponentName('ellipsis'),
  components: { Tooltip },
})
export default class Ellipsis extends EllipsisStructuralComponent {}
