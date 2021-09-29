<template>
  <el-dialog
    :class="this.className"
    :title="title"
    :width="width"
    :visible="visible"
    :show-close="closable"
    :close-on-click-modal="!disableMask"
    :close-on-press-escape="false"
    :modal="!hideMask"
    :append-to-body="appendToBody"
    :destroy-on-close="destroyOnClose"
    @close="onClose"
  >
    <slot />
    <slot name="footer" slot="footer" />
  </el-dialog>
</template>

<script lang="ts" src="./logic.ts"></script>
