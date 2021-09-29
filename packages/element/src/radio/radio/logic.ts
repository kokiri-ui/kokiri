import { Component } from 'vue-property-decorator';

import { RadioStructuralComponent } from '@kokiri/core/dist/radio';
import ElRadio from 'element-ui/lib/radio';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('radio'),
  components: { ElRadio },
})
export default class Radio extends RadioStructuralComponent {}
