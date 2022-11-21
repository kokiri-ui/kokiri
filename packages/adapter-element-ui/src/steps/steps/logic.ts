import { Component } from 'vue-property-decorator';
import ElSteps from 'element-ui/lib/steps';

import { StepsStructuralComponent } from '@kokiri/core/dist/steps';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('steps'),
  components: { ElSteps },
})
export default class Steps extends StepsStructuralComponent {}
