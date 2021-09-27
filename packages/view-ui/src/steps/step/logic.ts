import { Component } from 'vue-property-decorator';

import { StepStructuralComponent } from '@kokiri/core/dist/steps';
import { StepsStep as IvuStepsStep } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  name: getComponentName('step'),
  components: { IvuStepsStep },
})
export default class Step extends StepStructuralComponent {}
