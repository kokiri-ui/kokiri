<template>
  <el-drawer
    :class="this.className"
    :title="title"
    :direction="resolvedDirection"
    :size="size"
    :visible="visible"
    :show-close="closable"
    :close-on-press-escape="false"
    :wrapper-closable="!disableMask"
    :modal="!hideMask"
    :append-to-body="appendToBody"
    :destroy-on-close="destroyOnClose"
    @close="onClose"
  >
    <slot />
  </el-drawer>
</template>

<script lang="ts" src="./logic.ts"></script>
