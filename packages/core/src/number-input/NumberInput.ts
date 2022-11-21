import { Component, Prop, Emit } from 'vue-property-decorator';

import { FormControlSize, FormControlPrefixAndSuffix } from 'petals-ui/dist/form-control';
import { INumberInputComponent, NumberInputHeadlessComponent } from 'petals-ui/dist/number-input';

import { BaseStructuralComponent } from '../basic';

@Component
class NumberInputStructuralComponent
  extends BaseStructuralComponent<NumberInputHeadlessComponent>
  implements INumberInputComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: Number })
  public readonly value!: number;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: String, default: '' })
  public readonly placeholder!: string;

  @Prop({ type: Boolean, default: false })
  public readonly clearable!: boolean;

  @Prop({ type: String })
  public readonly size!: FormControlSize;

  @Prop({ type: Number })
  public readonly min!: number;

  @Prop({ type: Number })
  public readonly max!: number;

  @Prop({ type: Number })
  public readonly step!: number;

  @Prop({ type: [String, Object] })
  public readonly prefix!: string | FormControlPrefixAndSuffix;

  @Prop({ type: [String, Object] })
  public readonly suffix!: string | FormControlPrefixAndSuffix;

  @Emit('input')
  public onInput(value: string): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('change')
  public onChange(value: number): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new NumberInputHeadlessComponent(this));
  }
}

export { NumberInputStructuralComponent };
