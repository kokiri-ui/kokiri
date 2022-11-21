import { Component } from 'vue-property-decorator';
import ElStep from 'element-ui/lib/step';

import { StepStructuralComponent } from '@kokiri/core/dist/steps';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('step'),
  components: { ElStep },
})
export default class Step extends StepStructuralComponent {}
