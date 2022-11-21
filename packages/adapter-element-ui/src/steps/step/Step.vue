<template>
  <el-step :class="className" :title="title" :description="description">
    <slot />
    <slot name="title" slot="title" />
    <slot name="description" slot="description" />
  </el-step>
</template>

<script lang="ts" src="./logic.ts"></script>
