import { Component } from 'vue-property-decorator';

import { LayoutMainStructuralComponent } from '@kokiri/core/dist/layout';
import ElMain from 'element-ui/lib/main';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutMain'),
  components: { ElMain },
})
export default class LayoutMain extends LayoutMainStructuralComponent {}
