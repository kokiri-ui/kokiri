<template>
  <el-input :class="className" v-bind="resolvedProps" @input="onInput" @change="onChange">
    <slot />
  </el-input>
</template>

<script lang="ts" src="./logic.ts"></script>
