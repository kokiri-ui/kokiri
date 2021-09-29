import { Component } from 'vue-property-decorator';

import { RadioGroupStructuralComponent } from '@kokiri/core/dist/radio';
import ElRadioGroup from 'element-ui/lib/radio-group';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('radioGroup'),
  components: { ElRadioGroup },
})
export default class RadioGroup extends RadioGroupStructuralComponent {}
