<template>
  <el-tooltip
    :class="className"
    :popper-class="popupClassName"
    :content="content"
    :placement="resolvedPlacement"
    :disabled="disabled"
  >
    <slot />
    <slot name="content" slot="content" />
  </el-tooltip>
</template>

<script lang="ts" src="./logic.ts"></script>
