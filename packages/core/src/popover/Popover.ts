import {
  PopoverPlacement,
  PopoverTrigger,
  IPopoverComponent,
  PopoverHeadlessComponent,
} from 'petals-ui/dist/popover';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class PopoverStructuralComponent
  extends BaseStructuralComponent<PopoverHeadlessComponent>
  implements IPopoverComponent {
  @Prop({ type: String })
  public readonly title!: string;

  @Prop({ type: String })
  public readonly content!: string;

  @Prop({ type: String, default: 'bottom' })
  public readonly placement!: PopoverPlacement;

  @Prop({ type: String, default: 'hover' })
  public readonly trigger!: PopoverTrigger;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String })
  public readonly popupClassName!: string;

  public created(): void {
    this.setHeadlessComponent(new PopoverHeadlessComponent(this));
  }
}

export { PopoverStructuralComponent };
