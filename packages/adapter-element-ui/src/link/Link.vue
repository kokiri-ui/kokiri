<template>
  <el-link :class="className" :href="href" :target="`_${target}`" @click="onClick">
    <slot />
  </el-link>
</template>

<script lang="ts" src="./logic.ts"></script>
