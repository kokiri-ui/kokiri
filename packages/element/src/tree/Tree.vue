<template>
  <el-tree
    :class="className"
    :data="dataSource"
    :show-checkbox="checkable"
    :default-checked-keys="value"
    :default-expanded-keys="expandedKeys"
    :current-node-key="resolvedCurrentNodeKey"
    :node-key="resolvedNodeKey"
    :props="resolvedProps"
    :render-content="resolvedNodeRenderer"
    :expand-on-click-node="false"
    highlight-current
    @check="handleNodeCheck"
    @current-change="handleCurrentNodeChange"
    @node-expand="handleNodeExpand"
    @node-collapse="handleNodeCollapse"
  />
</template>

<script src="./logic.ts" lang="ts"></script>
