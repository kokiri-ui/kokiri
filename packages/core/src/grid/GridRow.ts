import { IGridRowComponent, GridRowHeadlessComponent } from 'petals-ui/dist/grid';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class GridRowStructuralComponent
  extends BaseStructuralComponent<GridRowHeadlessComponent>
  implements IGridRowComponent {
  @Prop({ type: Number, default: 0 })
  public readonly gutter!: number;

  public created(): void {
    this.setHeadlessComponent(new GridRowHeadlessComponent(this));
  }
}

export { GridRowStructuralComponent };
