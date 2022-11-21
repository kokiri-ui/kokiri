<template>
  <el-radio :class="className" :name="name" :label="value" :disabled="disabled" @change="onChange">
    <slot />
  </el-radio>
</template>

<script lang="ts" src="./logic.ts"></script>
