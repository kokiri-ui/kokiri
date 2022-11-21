import { Component } from 'vue-property-decorator';

import { LayoutMainStructuralComponent } from '@kokiri/core/dist/layout';
import { Content as IvuContent } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutMain'),
  components: { IvuContent },
})
export default class LayoutMain extends LayoutMainStructuralComponent {}
