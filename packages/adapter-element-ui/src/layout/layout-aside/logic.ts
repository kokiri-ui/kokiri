import { Component } from 'vue-property-decorator';
import ElAside from 'element-ui/lib/aside';

import { LayoutAsideStructuralComponent } from '@kokiri/core/dist/layout';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutAside'),
  components: { ElAside },
})
export default class LayoutAside extends LayoutAsideStructuralComponent {}
