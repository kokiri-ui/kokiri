import { DirectionType } from 'petals-ui/dist/basic';
import { IStepsComponent, StepsHeadlessComponent } from 'petals-ui/dist/steps';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class StepsStructuralComponent
  extends BaseStructuralComponent<StepsHeadlessComponent>
  implements IStepsComponent {
  @Prop({ type: String, default: 'horizontal' })
  public readonly direction!: DirectionType;

  @Prop({ type: Number, default: 0 })
  public readonly activeFlag!: number;

  public created(): void {
    this.setHeadlessComponent(new StepsHeadlessComponent(this));
  }
}

export { StepsStructuralComponent };
