import {
  IBreadcrumbItemComponent,
  BreadcrumbItemHeadlessComponent,
} from 'petals-ui/dist/breadcrumb';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class BreadcrumbItemStructuralComponent
  extends BaseStructuralComponent<BreadcrumbItemHeadlessComponent>
  implements IBreadcrumbItemComponent {
  @Prop({ type: [String, Object] })
  public readonly href!: string;

  public created(): void {
    this.setHeadlessComponent(new BreadcrumbItemHeadlessComponent(this));
  }
}

export { BreadcrumbItemStructuralComponent };
