<template>
  <wait class="DataTable" :class-name="className" :busy="loading">
    <div class="DataTable-tableWrapper">
      <ivu-table
        class="DataTable-table"
        :data="dataSource"
        :columns="resolvedColumns"
        :loading="loading"
        @on-selection-change="onSelectionChange"
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
        @on-change="onCurrentChange"
        @on-page-size-change="onSizeChange"
      />
    </slot>
  </wait>
</template>

<script lang="ts" src="./logic.ts"></script>
