import { Component } from 'vue-property-decorator';
import ElCol from 'element-ui/lib/col';

import { GridColStructuralComponent } from '@kokiri/core/dist/grid';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('gridCol'),
  components: { ElCol },
})
export default class GridCol extends GridColStructuralComponent {}
