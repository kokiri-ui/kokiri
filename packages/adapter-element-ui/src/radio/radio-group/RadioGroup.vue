<template>
  <el-radio-group :class="className" :value="value" :disabled="disabled" @input="onChange">
    <slot />
  </el-radio-group>
</template>

<script lang="ts" src="./logic.ts"></script>
