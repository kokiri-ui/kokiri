import { Component } from 'vue-property-decorator';

import { LayoutAsideStructuralComponent } from '@kokiri/core/dist/layout';
import ElAside from 'element-ui/lib/aside';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutAside'),
  components: { ElAside },
})
export default class LayoutAside extends LayoutAsideStructuralComponent {}
