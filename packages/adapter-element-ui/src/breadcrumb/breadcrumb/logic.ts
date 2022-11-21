import { Component } from 'vue-property-decorator';

import { getComponentName, BreadcrumbStructuralComponent } from '@kokiri/core/dist/breadcrumb';
import ElBreadcrumb from 'element-ui/lib/breadcrumb';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('breadcrumb'),
  components: { ElBreadcrumb },
})
export default class Breadcrumb extends BreadcrumbStructuralComponent {}
