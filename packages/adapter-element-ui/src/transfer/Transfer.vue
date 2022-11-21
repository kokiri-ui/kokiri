<template>
  <el-transfer
    :class="className"
    v-bind="resolvedProps"
    @change="onChange"
    @left-check-change="handleLeftCheckChange"
    @right-check-change="handleRightCheckChange"
  />
</template>

<script lang="ts" src="./logic.ts"></script>
