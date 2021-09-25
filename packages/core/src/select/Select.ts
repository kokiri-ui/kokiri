import { FormControlSize } from 'petals-ui/dist/form-control';
import { SelectValueType, ISelectComponent, SelectHeadlessComponent } from 'petals-ui/dist/select';
import { Component, Prop } from 'vue-property-decorator';

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

  @Prop({ type: String, default: 'medium' })
  public readonly size!: FormControlSize;

  @Prop({ type: Boolean, default: false })
  public readonly multiple!: boolean;

  public created(): void {
    this.setHeadlessComponent(new SelectHeadlessComponent(this));
  }
}

export { SelectStructuralComponent };
