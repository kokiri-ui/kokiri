import { Component } from 'vue-property-decorator';

import { LayoutFooterStructuralComponent } from '@kokiri/core/dist/layout';
import ElFooter from 'element-ui/lib/footer';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('layoutFooter'),
  components: { ElFooter },
})
export default class LayoutFooter extends LayoutFooterStructuralComponent {}
