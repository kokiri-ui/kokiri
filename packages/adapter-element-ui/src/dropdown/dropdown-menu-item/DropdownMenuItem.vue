<template>
  <el-dropdown-item :class="className" :command="flag" :icon="icon" :disabled="disabled">
    <slot />
  </el-dropdown-item>
</template>

<script lang="ts" src="./logic.ts"></script>
