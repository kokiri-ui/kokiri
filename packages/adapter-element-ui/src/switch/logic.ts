import { Component } from 'vue-property-decorator';
import ElSwitch from 'element-ui/lib/switch';

import { SwitchStructuralComponent } from '@kokiri/core/dist/switch';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('switch'),
  components: { ElSwitch },
})
export default class Switch extends SwitchStructuralComponent {}
