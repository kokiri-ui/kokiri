import { FormControlSize } from 'petals-ui/dist/form-control';
import { ITextInputComponent, TextInputHeadlessComponent } from 'petals-ui/dist/text-input';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TextInputStructuralComponent
  extends BaseStructuralComponent<TextInputHeadlessComponent>
  implements ITextInputComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: String, default: '' })
  public readonly value!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: String, default: '' })
  public readonly placeholder!: string;

  @Prop({ type: Boolean, default: false })
  public readonly clearable!: boolean;

  @Prop({ type: String, default: 'medium' })
  public readonly size!: FormControlSize;

  @Prop({ type: Number })
  public readonly minLength!: number;

  @Prop({ type: Number })
  public readonly maxLength!: number;

  @Emit('input')
  protected onInput(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('change')
  protected onChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new TextInputHeadlessComponent(this));
  }
}

export { TextInputStructuralComponent };
