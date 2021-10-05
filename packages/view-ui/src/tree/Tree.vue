<template>
  <ivu-tree
    :class="className"
    :data="resolvedData"
    :show-checkbox="checkable"
    :children-key="resolvedChildrenKey"
    @on-check-change="onChange"
    @on-select-change="onSelect"
    @on-toggle-expand="onExpand"
  />
</template>

<script src="./logic.ts" lang="ts"></script>
