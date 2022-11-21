import {
  DensityType,
  ColumnProps,
  IDataTableComponent,
  DataTableHeadlessComponent,
} from 'petals-ui/dist/data-table';
import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class DataTableStructuralComponent
  extends BaseStructuralComponent<DataTableHeadlessComponent>
  implements IDataTableComponent {
  @Prop({ type: Array, default: () => [] })
  public readonly dataSource!: Record<string, any>[];

  @Prop({ type: Array, default: () => [] })
  public readonly columns!: ColumnProps[];

  @Prop({ type: [String, Function], default: 'id' })
  public readonly rowKey!: string | ((record: Record<string, any>) => string);

  @Prop({ type: Boolean, default: false })
  public readonly loading!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hidePagination!: boolean;

  @Prop({ type: Number, default: 1 })
  public readonly currentPage!: number;

  @Prop({ type: Number, default: 10 })
  public readonly pageSize!: number;

  @Prop({ type: Number, default: 0 })
  public readonly total!: number;

  @Prop({ type: Array, default: () => [10, 20, 50, 100] })
  public readonly pageSizes!: number[];

  @Prop({ type: Boolean, default: false })
  public readonly autoHeight!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly density!: DensityType;

  @Emit('selection-change')
  public onSelectionChange(records: Record<string, any>[]): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('current-change')
  public onCurrentChange(currentPage: number): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('size-change')
  public onSizeChange(pageSize: number): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new DataTableHeadlessComponent(this));
  }
}

export { DataTableStructuralComponent };
