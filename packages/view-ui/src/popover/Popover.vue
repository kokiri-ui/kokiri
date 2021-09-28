<template>
  <ivu-poptip
    :class="className"
    :title="title"
    :content="content"
    :placement="resolvedPlacement"
    :trigger="trigger"
    :disabled="disabled"
  >
    <slot />
    <slot name="title" slot="title" />
    <slot name="content" slot="content" />
  </ivu-poptip>
</template>

<script lang="ts" src="./logic.ts"></script>
