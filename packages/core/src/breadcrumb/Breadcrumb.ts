import { IBreadcrumbComponent, BreadcrumbHeadlessComponent } from 'petals-ui/dist/breadcrumb';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class BreadcrumbStructuralComponent
  extends BaseStructuralComponent<BreadcrumbHeadlessComponent>
  implements IBreadcrumbComponent {
  @Prop({ type: String, default: '/' })
  public readonly separator!: string;

  @Prop({ type: String })
  public readonly separatorClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new BreadcrumbHeadlessComponent(this));
  }
}

export { BreadcrumbStructuralComponent };
