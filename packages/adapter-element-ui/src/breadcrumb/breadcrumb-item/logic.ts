import { Component } from 'vue-property-decorator';

import { getComponentName, BreadcrumbItemStructuralComponent } from '@kokiri/core/dist/breadcrumb';
import ElBreadcrumbItem from 'element-ui/lib/breadcrumb-item';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('breadcrumbItem'),
  components: { ElBreadcrumbItem },
})
export default class BreadcrumbItem extends BreadcrumbItemStructuralComponent {}
