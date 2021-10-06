import {
  AvatarShape,
  AvatarSize,
  AvatarFit,
  IAvatarComponent,
  AvatarHeadlessComponent,
} from 'petals-ui/dist/avatar';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { isFunction, BaseStructuralComponent } from '../basic';

@Component
class AvatarStructuralComponent
  extends BaseStructuralComponent<AvatarHeadlessComponent>
  implements IAvatarComponent {
  @Prop({ type: String, default: '' })
  public readonly src!: string;

  @Prop({ type: String, default: '' })
  public readonly fallback!: string;

  @Prop({ type: String, default: '' })
  public readonly alt!: string;

  @Prop({ type: String, default: 'cover' })
  public readonly fit!: AvatarFit;

  @Prop({ type: Boolean, default: false })
  public readonly lazy!: boolean;

  @Prop({ type: [String, Number], default: 'medium' })
  public readonly size!: AvatarSize;

  @Prop({ type: String, default: 'circle' })
  public readonly shape!: AvatarShape;

  @Prop({ type: String, default: '' })
  public readonly icon!: string;

  @Emit('load')
  public onLoad(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public onError(): boolean {
    const errorCallback = this.$listeners.error as any;

    return isFunction(errorCallback) ? errorCallback() : true;
  }

  public created(): void {
    this.setHeadlessComponent(new AvatarHeadlessComponent(this));
  }
}

export { AvatarStructuralComponent };
