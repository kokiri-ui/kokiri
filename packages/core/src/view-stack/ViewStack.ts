import { NumberOrString } from 'petals-ui/dist/basic';
import { IViewStackComponent, ViewStackHeadlessComponent } from 'petals-ui/dist/view-stack';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ViewStackStructuralComponent
  extends BaseStructuralComponent<ViewStackHeadlessComponent>
  implements IViewStackComponent {
  @Prop({ type: [String, Number], default: 0 })
  public readonly activeFlag!: NumberOrString;

  @Prop({ type: String, default: '' })
  public readonly viewClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new ViewStackHeadlessComponent(this));
  }
}

export { ViewStackStructuralComponent };
