import { Component, Mixins } from 'vue-property-decorator';

import { LayoutRole } from 'petals-ui/dist/layout';
import { getComponentName, LayoutMainStructuralComponent } from '@kokiri/core/dist/layout';

import { LayoutControl } from '../LayoutControl';

@Component({
  name: getComponentName('layoutMain'),
})
export default class LayoutMain extends Mixins(LayoutMainStructuralComponent, LayoutControl) {
  protected role: LayoutRole = 'main';
}
