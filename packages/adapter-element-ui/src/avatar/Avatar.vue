<template>
  <el-avatar
    :class="className"
    :src="src"
    :alt="alt"
    :fit="fit"
    :size="size"
    :shape="shape"
    :icon="icon"
    @error="onError"
  >
    <slot />
  </el-avatar>
</template>

<script src="./logic.ts" lang="ts"></script>
