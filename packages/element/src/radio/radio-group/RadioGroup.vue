<template>
  <el-radio-group :class="className" :value="value" :disabled="disabled" @change="onChange">
    <slot />
  </el-radio-group>
</template>

<script lang="ts" src="./logic.ts"></script>
