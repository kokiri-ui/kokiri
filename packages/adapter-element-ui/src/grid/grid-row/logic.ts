import { Component } from 'vue-property-decorator';
import ElRow from 'element-ui/lib/row';

import { GridRowStructuralComponent } from '@kokiri/core/dist/grid';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('gridRow'),
  components: { ElRow },
})
export default class GridRow extends GridRowStructuralComponent {}
