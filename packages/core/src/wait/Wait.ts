import { IWaitComponent, WaitHeadlessComponent } from 'petals-ui/dist/wait';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class WaitStructuralComponent
  extends BaseStructuralComponent<WaitHeadlessComponent>
  implements IWaitComponent {
  @Prop({ type: Boolean, default: false })
  public readonly busy!: boolean;

  @Prop({ type: String })
  public readonly text!: string;
}

export { WaitStructuralComponent };
