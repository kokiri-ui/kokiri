<template>
  <ivu-drawer
    :className="this.className"
    :title="title"
    :placement="placement"
    :width="size"
    :height="size"
    :value="visible"
    :closable="closable"
    :mask-closable="!disableMask"
    :mask="!hideMask"
    :transfer="appendToBody"
    @on-close="onClose"
  >
    <slot />
  </ivu-drawer>
</template>

<script lang="ts" src="./logic.ts"></script>
