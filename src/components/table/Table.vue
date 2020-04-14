<template>
  <ss-box v-loading="resolvedLoading.spinning">
    <ss-pagination
      v-bind="resolvedPagination"
      @change="handlePageChange"
      @size-change="handlePageSizeChange"
      v-if="pagination && resolvedPagination.position !== 'bottom'"
    />
    <el-table
      ref="table"
      :data="dataSource"
      :row-key="rowKey"
      :border="bordered"
      :height="height"
      :stripe="stripe"
      :span-method="spanMethod"
      :show-summary="showSummary"
      :summary-method="summaryMethod"
      @selection-change="handleSelectionChange"
    >
      <template v-if="hasColumns()">
        <ss-table-column v-bind="col" :key="`col-${idx}`" v-for="(col, idx) in columns" />
      </template>
      <slot v-else />
    </el-table>
    <ss-pagination
      v-bind="resolvedPagination"
      @change="handlePageChange"
      @size-change="handlePageSizeChange"
      v-if="pagination && resolvedPagination.position !== 'top'"
    />
  </ss-box>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Watch, Emit } from 'vue-property-decorator';
import { Table as ElTable } from 'element-ui';

import { LoadingOption, NumberOrString } from '../../typing';
import { isPlainObject } from '../../helper/utils';

import SsBox from '../box/Box.vue';
import SsPagination from '../pagination/Pagination.vue';

import { SsTableColumn } from './TableColumn';
import { RowKeyGenerator, TableColumn, TablePagination } from './utils';

@Component({
  components: {
    ElTable,
    SsBox,
    SsPagination,
    SsTableColumn,
  },
})
export default class SsTable extends Vue {
  @Prop({ type: Array })
  public readonly dataSource?: any[];

  @Prop({ type: Array })
  public readonly columns?: TableColumn[];

  @Prop({ type: [Object, Boolean] })
  public readonly pagination?: TablePagination | boolean;

  @Prop({ type: [Boolean, Object], default: false })
  public readonly loading!: boolean | LoadingOption;

  @Prop({ type: Boolean, default: false })
  public readonly bordered!: boolean;

  @Prop({ type: [String, Function] })
  public readonly rowKey?: string | RowKeyGenerator;

  @Prop({ type: [String, Number] })
  public readonly height?: NumberOrString;

  @Prop({ type: Boolean })
  public readonly stripe?: boolean;

  @Prop({ type: Function })
  public readonly spanMethod?: (...args: any[]) => any;

  @Prop({ type: Boolean })
  public readonly showSummary?: boolean;

  @Prop({ type: Function })
  public readonly summaryMethod?: (...args: any[]) => any;

  @Ref()
  private readonly table!: ElTable;

  @Watch('pagination')
  private handlePaginationPropChange(val: TablePagination | boolean): void {
    if (!isPlainObject(val)) {
      return;
    }

    this.resolvedPagination = {
      position: 'bottom',
      ...(val as TablePagination),
    };
  }

  @Watch('loading', { immediate: true })
  private handleLoadingChange(val: boolean | LoadingOption): void {
    this.resolvedLoading = isPlainObject(val) ? (val as LoadingOption) : { spinning: (val as boolean) === true };
  }

  @Emit('selection-change')
  private handleSelectionChange(): void {}

  @Emit('page-change')
  private handlePageChange(): void {}

  @Emit('page-size-change')
  private handleSizeChange(): void {}

  private resolvedLoading!: LoadingOption;

  private resolvedPagination!: TablePagination;

  private hasColumns(): boolean {
    return Array.isArray(this.columns);
  }

  public reLayout(): void {
    this.table.doLayout();
  }

  public created(): void {
    this.resolvedPagination = { position: 'bottom' };
  }
}
</script>
