<template>
  <el-tree
    :class="className"
    :data="dataSource"
    :show-checkbox="checkable"
    :default-checked-keys="value"
    :current-node-key="resolvedCurrentNodeKey"
    :node-key="resolvedNodeKey"
    :props="resolvedProps"
    @check="onChange"
    @node-click="onSelect"
    @node-expand="onExpand"
    @node-collapse="onExpand"
  />
</template>

<script src="./logic.ts" lang="ts"></script>
