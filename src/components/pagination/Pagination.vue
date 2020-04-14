<template>
  <el-pagination
    :total="total"
    :current-page="current"
    :page-size="pageSize"
    :page-sizes="pageSizeOptions"
    :layout="layout"
    background
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  >
    <slot />
  </el-pagination>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { Pagination as ElPagination } from 'element-ui';
import { PaginationProps, DEFAULT_PAGE_SIZE, DEFAULT_PAGINATION_LAYOUT } from './utils';

@Component({
  components: {
    ElPagination,
  },
})
export default class SsPagination extends Vue implements PaginationProps {
  @Prop({ type: Number })
  public readonly total?: number;

  @Prop({ type: Number })
  public readonly current?: number;

  @Prop({ type: Number, default: DEFAULT_PAGE_SIZE })
  public readonly pageSize!: number;

  @Prop({ type: Array, default: () => [DEFAULT_PAGE_SIZE, 30, 50, 100] })
  public readonly pageSizeOptions?: number[];

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hideOnSinglePage!: boolean;

  @Prop({ type: String, default: DEFAULT_PAGINATION_LAYOUT })
  public readonly layout!: string;

  @Emit('change')
  private handleCurrentChange(): void {}

  @Emit('size-change')
  private handleSizeChange(): void {}
}
</script>
