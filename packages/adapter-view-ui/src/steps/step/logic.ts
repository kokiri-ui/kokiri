import { Component } from 'vue-property-decorator';

import { StepStructuralComponent } from '@kokiri/core/dist/steps';
import { Steps as IvuSteps } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('step'),
  components: { IvuStep: (IvuSteps as any).Step },
})
export default class Step extends StepStructuralComponent {}
