<template>
  <box :class="$style.Table">
    <el-table
      ref="table"
      stripe
      :data="dataSource"
      :tree-props="treeProps"
      :row-key="rowKey"
      :height="fixedHeader ? '100%' : null"
      v-if="headers.length"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" v-if="showSelect" />
      <el-table-column
        v-for="(item, index) in headers"
        :key="index"
        :label="item.text"
        :prop="item.value"
        :width="getColumnWidth(item.value, index)"
        show-overflow-tooltip
      >
        <template slot="header" slot-scope="scope">
          <span>{{ scope.column.label }}</span>
          <slot name="filterFields" v-if="index === headers.length - 1" />
        </template>
        <!-- <slot  :name="item.text"></slot> -->
        <template slot-scope="scope">
          <slot :name="item.value" :item="scope.row" />
        </template>
      </el-table-column>
      <el-table-column v-if="showInlineActions" fixed="right">
        <template slot-scope="scope">
          <slot name="action" :item="scope.row" />
        </template>
      </el-table-column>
    </el-table>
    <toolbar v-if="showPagination" :class="$style['Table-pagination']">
      <spacer />
      <pagination
        :total="total"
        :current="currentPage"
        :page-size="pageSize"
        @change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </toolbar>
  </box>
</template>

<style lang="scss" module>
.Table-pagination {
  margin-top: 56px;
  padding-right: 158px;
}
</style>

<script lang="ts">
import getValue from 'lodash/get';
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { Table as ElTable, TableColumn as ElTableColumn } from 'element-ui';
import Box from '../box/Box.vue';
import Toolbar from '../toolbar/Toolbar.vue';
import Spacer from '../spacer/Spacer.vue';
import Pagination from '../pagination/Pagination.vue';
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGINATION_LAYOUT } from '../pagination/utils';

//table font size默认值。 计算文本宽度
const TABLE_FONTSIZE = 14;
const TABLE_PADDING_WIDTH = 25;

const COLUMN_MIN_WIDTH = 120;
const COLUMN_MAX_WIDTH = 150;

@Component({
  components: {
    ElTable,
    ElTableColumn,
    Box,
    Toolbar,
    Spacer,
    Pagination,
  },
})
export default class SsDataTable extends Vue {
  @Prop({ default: () => [] })
  readonly dataSource!: any[];

  @Prop({ default: false })
  readonly showPagination!: boolean;

  @Prop({ default: 1 })
  readonly currentPage!: number;

  @Prop({ default: DEFAULT_PAGE_SIZE })
  readonly pageSize!: number;

  @Prop({ default: 0 })
  readonly total!: number;

  @Prop({ default: () => [] })
  readonly headers!: any[];

  @Prop({ default: () => [] })
  readonly selectedList!: any[];

  // 用于回填勾选，找出与 dataSource 相匹配的选项
  @Prop({ default: () => null })
  readonly selectedKey!: string;

  /**
   * 是否显示多选框
   */
  @Prop({ type: Boolean, default: false })
  showSelect!: boolean;

  /**
   * 是否显示行内动作
   */
  @Prop({ type: Boolean, default: false })
  showInlineActions!: boolean;

  @Prop({ default: () => ({ children: 'children', hasChildren: 'hasChildren' }) })
  readonly treeProps!: {
    children: string;
    hasChildren: string;
  };

  @Prop({ type: Boolean, default: false })
  fixedHeader!: boolean;

  @Prop({ type: String, default: '' })
  rowKey!: string;

  @Emit('size-change')
  handleSizeChange() {}

  @Emit('current-change')
  handleCurrentChange() {}

  @Emit('selection-change')
  handleSelectionChange() {}

  private columnWidthMap: Map<string, number[]> = new Map();

  // FIXME: 临时处理了下表格 性能差 演示完成尽快找方案替换掉
  @Watch('dataSource', { immediate: true, deep: true })
  private getColumnWidthMap() {
    this.headers.forEach(header => {
      if (!this.columnWidthMap.get(header.value)) {
        this.columnWidthMap.set(header.value, []);
      }

      const widthArray: number[] = [];
      this.dataSource.forEach(data => {
        // FIXME 关系字段不是字符串 算出来的值不对。不影响布局
        widthArray.push((data && this.getMaxLength(data[header.value])) || 0);
      });
      // 计算下header的文本宽度
      widthArray.push(this.getMaxLength(header.text) || 0);

      this.columnWidthMap.set(header.value, widthArray);
    });

    // 不 watch selectedList 因为 dataSource 后加载
    if (this.selectedKey !== null && this.dataSource && this.dataSource.length) {
      this.selectedList.forEach(data1 => {
        const selected = this.dataSource.find(data2 => {
          return data2[this.selectedKey] == data1[this.selectedKey];
        });
        if (selected && this.$refs.table) {
          // 必须要等到 dataSource 列表加载出来，再调用
          this.$nextTick(() => {
            (this.$refs.table as any).toggleRowSelection(selected);
          });
        }
      });
    }
  }

  getColumnWidth(value, index) {
    const widthArr = this.columnWidthMap.get(value);

    let width: number = COLUMN_MIN_WIDTH;
    if (widthArr) {
      width = Math.max.apply(null, widthArr);
    }

    if (width > COLUMN_MAX_WIDTH) {
      width = COLUMN_MAX_WIDTH;
    }

    if (width < COLUMN_MIN_WIDTH) {
      width = COLUMN_MIN_WIDTH;
    }

    if (index === this.headers.length - 1) {
      return 'auto';
    }

    return `${width + TABLE_PADDING_WIDTH} + px`;
  }

  getMaxLength(valueStr) {
    if (!valueStr) {
      return;
    }
    if (valueStr) {
      const str = valueStr.toString();
      const char = str.match(/[\u2E80-\u9FFF]/g);
      const charLen = char ? char.length : 0;
      const num = str.match(/\d|\./g);
      const numLen = num ? num.length : 0;
      const otherLen = str.length - charLen - numLen;
      let calcLen = charLen * TABLE_FONTSIZE + numLen * 0.65 * TABLE_FONTSIZE + otherLen * 0.5 * TABLE_FONTSIZE;
      return calcLen;
    }
    return;
  }

  mounted() {
    // 默认算一把 dataSource可能是空的
    this.getColumnWidthMap();
  }
}
</script>
