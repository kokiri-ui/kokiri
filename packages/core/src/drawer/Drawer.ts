import {
  DrawerPlacement,
  DrawerSize,
  IDrawerComponent,
  DrawerHeadlessComponent,
} from 'petals-ui/dist/drawer';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class DrawerStructuralComponent
  extends BaseStructuralComponent<DrawerHeadlessComponent>
  implements IDrawerComponent {
  @Prop({ type: String })
  public readonly title!: string;

  @Prop({ type: String, default: 'right' })
  public readonly placement!: DrawerPlacement;

  @Prop({ type: [Number, String] })
  public readonly size!: DrawerSize;

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
  protected onClose(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new DrawerHeadlessComponent(this));
  }
}

export { DrawerStructuralComponent };
