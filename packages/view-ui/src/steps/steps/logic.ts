import { Component } from 'vue-property-decorator';

import { StepsStructuralComponent } from '@kokiri/core/dist/steps';
import { Steps as IvuSteps } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  name: getComponentName('steps'),
  components: { IvuSteps },
})
export default class Steps extends StepsStructuralComponent {}
