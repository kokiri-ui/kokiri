import {
  TooltipPlacement,
  TooltipTrigger,
  ITooltipComponent,
  TooltipHeadlessComponent,
} from 'petals-ui/dist/tooltip';
import { Component, Prop, Emit } from 'vue-property-decorator';

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
  public readonly visible!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: String })
  public readonly popupClassName!: string;

  @Prop({ type: Boolean, default: true })
  public readonly appendToBody!: boolean;

  @Emit('visible-change')
  public onVisibleChange(visible: boolean): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new TooltipHeadlessComponent(this));
  }
}

export { TooltipStructuralComponent };
