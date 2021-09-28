<template>
  <ivu-transfer
    :data="dataSource"
    :target-keys="value"
    :titles="titles"
    :operations="operationText"
    :filterable="filterable"
    @on-change="onChange"
    @on-selected-change="onSelectionChange"
  >
    <slot name="footer" slot="default" />
  </ivu-transfer>
</template>

<script lang="ts" src="./logic.ts"></script>
