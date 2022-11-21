<template>
  <ivu-poptip
    :class="className"
    :popper-class="popupClassName"
    :title="title"
    :content="content"
    :placement="resolvedPlacement"
    :trigger="trigger"
    :value="visible"
    :disabled="disabled"
    :transfer="appendToBody"
    @on-popper-show="onVisibleChange(true)"
    @on-popper-hide="onVisibleChange(false)"
  >
    <slot />
    <slot name="title" slot="title" />
    <slot name="content" slot="content" />
  </ivu-poptip>
</template>

<script lang="ts" src="./logic.ts"></script>
