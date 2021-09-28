import {
  TransferData,
  ITransferComponent,
  TransferHeadlessComponent,
} from 'petals-ui/dist/transfer';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TransferStructuralComponent
  extends BaseStructuralComponent<TransferHeadlessComponent>
  implements ITransferComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: Array })
  public readonly value!: string[];

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: Array, default: () => [] })
  public readonly dataSource!: TransferData;

  @Prop({ type: Array, default: () => [] })
  public readonly titles!: string[];

  @Prop({ type: Array, default: () => [] })
  public readonly operationText!: string[];

  @Prop({ type: Boolean, default: false })
  public readonly filterable!: boolean;

  public created(): void {
    this.setHeadlessComponent(new TransferHeadlessComponent(this));
  }
}

export { TransferStructuralComponent };
