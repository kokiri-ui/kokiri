import {
  ButtonBorder,
  ButtonSize,
  IButtonComponent,
  ButtonHeadlessComponent,
} from 'petals-ui/dist/button';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class ButtonStructuralComponent
  extends BaseStructuralComponent<ButtonHeadlessComponent>
  implements IButtonComponent {
  @Prop({ type: String, default: 'medium' })
  public readonly size!: ButtonSize;

  @Prop({ type: String, default: 'solid' })
  public readonly border!: ButtonBorder;

  @Prop({ type: Boolean, default: false })
  public readonly outlined!: boolean;

  @Prop({ type: String, default: '' })
  public readonly color!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  public created(): void {
    this.setHeadlessComponent(new ButtonHeadlessComponent(this));
  }
}

export { ButtonStructuralComponent };