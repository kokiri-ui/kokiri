<template>
  <ivu-modal
    :className="this.className"
    :title="title"
    :width="width"
    :ok-text="affirmButton"
    :cancel-text="denyButton"
    :value="visible"
    :closable="closable"
    :mask-closable="!disableMask"
    :mask="!hideMask"
    :transfer="appendToBody"
    @on-ok="onClose"
    @on-cancel="onClose"
  >
    <slot />
    <slot name="footer" slot="footer" />
  </ivu-modal>
</template>

<script lang="ts" src="./logic.ts"></script>
