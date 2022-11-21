import { Component } from 'vue-property-decorator';

import { TransferStructuralComponent } from '@kokiri/core/dist/transfer';
import { Transfer as IvuTransfer } from 'view-design';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('transfer'),
  components: { IvuTransfer },
})
export default class Transfer extends TransferStructuralComponent {
  private get resolvedOperations(): string[] {
    return [...this.operationText].reverse();
  }
}
