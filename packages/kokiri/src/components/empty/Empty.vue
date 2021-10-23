<template>
  <div class="Empty">
    <img :class="['Empty-image', imageClassName]" src="./empty.png" />
    <span class="Empty-description">{{ description }}</span>
    <slot />
  </div>
</template>

<script lang="ts" src="./logic.ts"></script>

<style src="./style.scss" lang="scss" scoped></style>
