import { Component } from 'vue-property-decorator';
import ElHeader from 'element-ui/lib/header';

import { LayoutHeaderStructuralComponent } from '@kokiri/core/dist/layout';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutHeader'),
  components: { ElHeader },
})
export default class LayoutHeader extends LayoutHeaderStructuralComponent {}
