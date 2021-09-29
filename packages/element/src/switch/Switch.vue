<template>
  <el-switch :class="className" :name="name" :value="value" :disabled="disabled" @change="onChange">
    <slot />
  </el-switch>
</template>

<script lang="ts" src="./logic.ts"></script>
