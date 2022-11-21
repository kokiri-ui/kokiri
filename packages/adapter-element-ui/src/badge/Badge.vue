<template>
  <el-badge
    :class="className"
    :value="count"
    :max="max"
    :is-dot="dot"
    :hidden="count === 0"
    :type="color"
  >
    <slot />
  </el-badge>
</template>

<script src="./logic.ts" lang="ts"></script>
