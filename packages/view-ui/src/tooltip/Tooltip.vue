<template>
  <ivu-tooltip
    :class="className"
    :content="content"
    :placement="resolvedPlacement"
    :disabled="disabled"
    transfer
  >
    <slot />
    <slot name="content" slot="content" />
  </ivu-tooltip>
</template>

<script lang="ts" src="./logic.ts"></script>
