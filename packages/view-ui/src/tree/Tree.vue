<template>
  <ivu-tree
    ref="ivuTree"
    :class="className"
    :data="resolvedData"
    :show-checkbox="checkable"
    :children-key="resolvedChildrenKey"
    :render="resolvedNodeRenderer"
    :empty-text="emptyText"
    @on-check-change="handleCheckChange"
    @on-select-change="handleSelectChange"
    @on-toggle-expand="handleToggleExpand"
  />
</template>

<script src="./logic.ts" lang="ts"></script>
