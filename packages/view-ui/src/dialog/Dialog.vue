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

<style lang="scss">
.DialogShortcut {
  display: flex;
  justify-content: center;
  align-items: center;

  .Dialog--alert,
  .Dialog--confirm {
    top: 0;
  }
}
</style>
