<template>
  <el-popover
    :class="className"
    :popper-class="popupClassName"
    :title="title"
    :content="content"
    :placement="resolvedPlacement"
    :trigger="trigger"
    :value="visible"
    :disabled="disabled"
    @show="onVisibleChange(true)"
    @hide="onVisibleChange(false)"
  >
    <slot name="default" slot="reference" />
    <slot name="content" slot="default" />
  </el-popover>
</template>

<script lang="ts" src="./logic.ts"></script>
