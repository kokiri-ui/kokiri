<template>
  <div class="Empty">
    <div :class="['Empty-image', imageClassName]">
      <img :src="resolvedImage" :alt="description || ''" v-if="resolvedImage" />
      <empty-image v-else />
    </div>
    <span class="Empty-description">{{ description }}</span>
    <slot />
  </div>
</template>

<script lang="ts" src="./logic.ts"></script>

<style src="../style.scss" lang="scss" scoped></style>
