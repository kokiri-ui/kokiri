<template>
  <div class="DataTable">
    <div class="DataTable-tableWrapper">
      <ivu-table
        class="DataTable-table"
        :data="dataSource"
        :columns="resolvedColumns"
        :loading="loading"
        @on-selection-change="handleSelectionChange"
      >
        <slot name="loading" slot="loading" />
      </ivu-table>
    </div>
    <slot name="pagination" v-if="!hidePagination">
      <ivu-pagination
        class="DataTable-pagination"
        :current="currentPage"
        :page-size="pageSize"
        :total="total"
        :page-size-opts="pageSizes"
        @on-change="handleCurrentChange"
        @on-page-size-change="handleSizeChange"
      />
    </slot>
  </div>
</template>

<script lang="ts" src="./logic.ts"></script>
