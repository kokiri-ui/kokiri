import { FormControlSize } from 'petals-ui/dist/form-control';
import { SelectValueType, ISelectComponent, SelectHeadlessComponent } from 'petals-ui/dist/select';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class SelectStructuralComponent
  extends BaseStructuralComponent<SelectHeadlessComponent>
  implements ISelectComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: [String, Number, Array] })
  public readonly value!: SelectValueType;

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

  @Prop({ type: Boolean, default: false })
  public readonly multiple!: boolean;

  @Prop({ type: Boolean, default: true })
  public readonly popupAppendToBody!: boolean;

  @Emit('change')
  public onChange(value: SelectValueType): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new SelectHeadlessComponent(this));
  }
}

export { SelectStructuralComponent };
