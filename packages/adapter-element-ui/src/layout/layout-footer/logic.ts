import { Component } from 'vue-property-decorator';
import ElFooter from 'element-ui/lib/footer';

import { LayoutFooterStructuralComponent } from '@kokiri/core/dist/layout';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutFooter'),
  components: { ElFooter },
})
export default class LayoutFooter extends LayoutFooterStructuralComponent {}
