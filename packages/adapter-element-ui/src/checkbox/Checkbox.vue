<template>
  <el-checkbox
    :class="className"
    :name="name"
    :value="checked"
    :disabled="disabled"
    @change="onChange"
  >
    <slot />
  </el-checkbox>
</template>

<script lang="ts" src="./logic.ts"></script>
