import { Component } from 'vue-property-decorator';

import { LayoutContainerStructuralComponent } from '@kokiri/core/dist/layout';
import { Layout as IvuLayout } from 'view-design';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutContainer'),
  components: { IvuLayout },
})
export default class LayoutContainer extends LayoutContainerStructuralComponent {}
