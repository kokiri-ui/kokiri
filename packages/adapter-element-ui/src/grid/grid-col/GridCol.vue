<template>
  <el-col
    :tag="tag"
    :class="className"
    :span="span"
    :offset="offset"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <slot />
  </el-col>
</template>

<script src="./logic.ts" lang="ts"></script>
