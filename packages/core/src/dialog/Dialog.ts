import {
  DialogWidth,
  DialogButton,
  IDialogComponent,
  DialogHeadlessComponent,
} from 'petals-ui/dist/dialog';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class DialogStructuralComponent
  extends BaseStructuralComponent<DialogHeadlessComponent>
  implements IDialogComponent {
  @Prop({ type: String })
  public readonly title!: string;

  @Prop({ type: [Number, String] })
  public readonly width!: DialogWidth;

  @Prop({ type: String })
  public readonly affirmButton!: DialogButton;

  @Prop({ type: String })
  public readonly denyButton!: DialogButton;

  @Prop({ type: Boolean, default: false })
  public readonly centered!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly visible!: boolean;

  @Prop({ type: Boolean, default: true })
  public readonly closable!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly disableMask!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hideMask!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly appendToBody!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly destroyOnClose!: boolean;

  @Emit('close')
  public onClose(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new DialogHeadlessComponent(this));
  }
}

export { DialogStructuralComponent };
