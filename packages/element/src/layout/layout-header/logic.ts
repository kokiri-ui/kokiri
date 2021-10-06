import { Component } from 'vue-property-decorator';

import { LayoutHeaderStructuralComponent } from '@kokiri/core/dist/layout';
import ElHeader from 'element-ui/lib/header';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutHeader'),
  components: { ElHeader },
})
export default class LayoutHeader extends LayoutHeaderStructuralComponent {}
