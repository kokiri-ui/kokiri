<template>
  <el-menu-item :class="className" :index="flag" :disabled="disabled" @click="onClick">
    <slot />
    <slot name="title" slot="title" />
  </el-menu-item>
</template>

<script src="./logic.ts" lang="ts"></script>
