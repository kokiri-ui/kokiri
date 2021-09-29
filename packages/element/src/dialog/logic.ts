import { Component } from 'vue-property-decorator';

import { DialogStructuralComponent } from '@kokiri/core/dist/dialog';
import ElDialog from 'element-ui/lib/dialog';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('dialog'),
  components: { ElDialog },
})
export default class Dialog extends DialogStructuralComponent {}
