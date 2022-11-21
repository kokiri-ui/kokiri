<template>
  <wait :class-name="['DataTable', className]" :busy="loading">
    <div class="DataTable-tableWrapper">
      <el-table
        class="DataTable-table"
        :data="dataSource"
        height="100%"
        border
        @selection-change="onSelectionChange"
      >
        <template v-for="col in resolvedColumns">
          <el-table-column v-bind="col" :key="col.prop" v-if="col.render">
            <template slot-scope="{ row, $index }">
              <expand :row-index="$index" :row="row" :column="col" :render-content="col.render" />
            </template>
          </el-table-column>
          <el-table-column v-bind="col" :key="col.prop" v-else />
        </template>
        <slot name="empty" slot="empty">
          <empty />
        </slot>
      </el-table>
    </div>
    <slot name="pagination" v-if="!hidePagination">
      <el-pagination
        class="DataTable-pagination"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        :page-sizes="pageSizes"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="onCurrentChange"
        @size-change="onSizeChange"
      />
    </slot>
  </wait>
</template>

<script lang="ts" src="./logic.ts"></script>

<style lang="scss" src="./style.scss" scoped></style>
