<template>
  <ivu-tooltip
    :class="className"
    :content="content"
    :placement="resolvedPlacement"
    :disabled="disabled"
  >
    <slot />
    <slot name="content" slot="content" />
  </ivu-tooltip>
</template>

<script lang="ts" src="./logic.ts"></script>
