<template>
  <el-steps :class="className" :direction="direction" :active="activeFlag">
    <slot />
  </el-steps>
</template>

<script lang="ts" src="./logic.ts"></script>
