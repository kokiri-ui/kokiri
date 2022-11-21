import { Component } from 'vue-property-decorator';
import ElTransfer from 'element-ui/lib/transfer';

import { TransferStructuralComponent } from '@kokiri/core/dist/transfer';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('transfer'),
  components: { ElTransfer },
})
export default class Transfer extends TransferStructuralComponent {
  private sourceSelected!: string[];

  private targetSelected!: string[];

  private get resolvedProps(): Record<string, any> {
    return {
      data: this.dataSource,
      value: this.value,
      titles: this.titles,
      buttonTexts: this.operationText.slice().reverse(),
      filterable: this.filterable,
    };
  }

  private handleLeftCheckChange(selected: string[]): void {
    this.sourceSelected = [...selected];

    this.onSelect([...selected], [...(this.targetSelected || [])]);
  }

  private handleRightCheckChange(selected: string[]): void {
    this.targetSelected = [...selected];

    this.onSelect([...(this.sourceSelected || [])], [...selected]);
  }
}
