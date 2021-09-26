import {
  TooltipPlacement,
  TooltipTrigger,
  ITooltipComponent,
  TooltipHeadlessComponent,
} from 'petals-ui/dist/tooltip';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TooltipStructuralComponent
  extends BaseStructuralComponent<TooltipHeadlessComponent>
  implements ITooltipComponent {
  @Prop({ type: String })
  public readonly content!: string;

  @Prop({ type: String, default: 'bottom' })
  public readonly placement!: TooltipPlacement;

  @Prop({ type: String, default: 'hover' })
  public readonly trigger!: TooltipTrigger;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;
}

export { TooltipStructuralComponent };
