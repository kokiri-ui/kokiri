<template>
  <ivu-tooltip
    :class="['Tooltip', className]"
    :content="content"
    :placement="resolvedPlacement"
    :disabled="disabled"
    :transfer="appendToBody"
    transfer-class-name="Tooltip-transfer"
  >
    <slot />
    <slot name="content" slot="content" />
  </ivu-tooltip>
</template>

<script lang="ts" src="./logic.ts"></script>

<style src="./style.scss" lang="scss" scoped></style>

<style lang="scss">
.Tooltip-transfer .ivu-tooltip-inner {
  @include line_feed;

  max-width: none;
}
</style>
