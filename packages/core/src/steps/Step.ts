import { IStepComponent, StepHeadlessComponent } from 'petals-ui/dist/steps';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class StepStructuralComponent
  extends BaseStructuralComponent<StepHeadlessComponent>
  implements IStepComponent {
  @Prop({ type: String })
  public readonly title!: string;

  @Prop({ type: String })
  public readonly content!: string;

  public created(): void {
    this.setHeadlessComponent(new StepHeadlessComponent(this));
  }
}

export { StepStructuralComponent };
