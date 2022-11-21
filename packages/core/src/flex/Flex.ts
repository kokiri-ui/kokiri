import {
  FlexDirection,
  FlexAlignment,
  IFlexComponent,
  FlexHeadlessComponent,
} from 'petals-ui/dist/flex';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class FlexStructuralComponent
  extends BaseStructuralComponent<FlexHeadlessComponent>
  implements IFlexComponent {
  @Prop({ type: String, default: 'horizontal' })
  public readonly direction!: FlexDirection;

  @Prop({ type: String, default: 'start' })
  public readonly align!: FlexAlignment;

  @Prop({ type: String, default: 'start' })
  public readonly justify!: FlexAlignment;

  @Prop({ type: Boolean, default: false })
  public readonly reverse!: boolean;

  public created(): void {
    this.setHeadlessComponent(new FlexHeadlessComponent(this));
  }
}

export { FlexStructuralComponent };
