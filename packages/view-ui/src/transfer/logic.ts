import { Component, Emit, Prop } from 'vue-property-decorator';

import { TransferStructuralComponent } from '@kokiri/core/dist/transfer';
import { Transfer as IvuTransfer } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  name: getComponentName('transfer'),
  components: { IvuTransfer },
})
export default class Transfer extends TransferStructuralComponent {
  private get resolvedOperations(): string[] {
    return [...this.operationText].reverse();
  }

  @Emit('change')
  private onChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('selection-change')
  private onSelectionChange(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
}
