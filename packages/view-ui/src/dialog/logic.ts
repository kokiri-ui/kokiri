import { Component } from 'vue-property-decorator';

import { DialogStructuralComponent } from '@kokiri/core/dist/dialog';
import { Modal as IvuModal } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('dialog'),
  components: { IvuModal },
})
export default class Dialog extends DialogStructuralComponent {}
