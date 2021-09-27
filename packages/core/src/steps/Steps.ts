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

  @Prop({ type: Number, default: 1 })
  public readonly activeFlag!: number;
}

export { StepsStructuralComponent };
